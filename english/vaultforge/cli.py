import os
from .crypto import derive_key
from .storage import save_encrypted, load_encrypted
import time
import secrets
import string
import threading

AUTO_LOCK_SECONDS = 15
last_action = time.time()
locked = False

SALT_FILE = "salt.bin"

def reset_timer():
    global last_action
    last_action = time.time()

def lock_vault():
    global locked
    locked = True

def auto_lock_thread():
    global locked
    while True:
        if (time.time() - last_action) > AUTO_LOCK_SECONDS:
            locked = True
        time.sleep(0.5)

def getpass(prompt=""):
    return input(prompt)

def init_master():
    if os.path.exists(SALT_FILE):
        print("Already initialized.")
        return

    master = getpass("Set master password: ")
    salt = os.urandom(16)
    with open(SALT_FILE, "wb") as f:
        f.write(salt)

    key = derive_key(master, salt)
    save_encrypted(key, {})
    print("Vault initialized.")

def unlock():
    if not os.path.exists(SALT_FILE):
        print("Vault not initialized.")
        return None

    master = getpass("Master password: ")
    salt = open(SALT_FILE, "rb").read()

    try:
        key = derive_key(master, salt)
        _ = load_encrypted(key)
        print("Unlocked.")
        return key
    except:
        print("Wrong password.")
        return None

def cli_loop(key):
    global locked
    locked = False

    print("Commands:\nlist \nadd <name> \nshow <name> \ndelete <name> \ngenerate \nlock")

    reset_timer()

    t = threading.Thread(target=auto_lock_thread, daemon=True)
    t.start()

    while True:
        if locked:
            print("Auto-lock activated. Please unlock again.")
            return

        cmd = input("\nvault> ").strip()
        reset_timer()

        if locked:
            print("Auto-lock activated. Please unlock again.")
            return

        if cmd == "exit":
            break

        if cmd == "list":
            data = load_encrypted(key)
            for name in data:
                print("-", name)
            reset_timer()

        if cmd.startswith("add "):
            name = cmd[4:]
            user = input("Username: ")
            pw = getpass("Password: ")
            data = load_encrypted(key)
            data[name] = {"user": user, "pw": pw}
            save_encrypted(key, data)
            print("Saved.")
            reset_timer()

        if cmd.startswith("show "):
            name = cmd[5:]
            data = load_encrypted(key)
            if name in data:
                print("User:", data[name]["user"])
                print("Password:", data[name]["pw"])
            else:
                print("Not found.")
            reset_timer()

        if cmd == "generate":
            alphabet = string.ascii_letters + string.digits + "!$%&/()=?#@"
            pw = "".join(secrets.choice(alphabet) for _ in range(16))
            print("Generated password:", pw)
            reset_timer()

        if cmd.startswith("delete "):
            name = cmd[7:]
            data = load_encrypted(key)
            if name in data:
                del data[name]
                save_encrypted(key, data)
                print("Deleted:", name)
            else:
                print("Not found.")
            reset_timer()

        if cmd == "lock":
            print("Vault locked.")
            return
