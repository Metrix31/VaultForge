const translations = {
  de: {
    title: "VaultForge | Lokaler Passwortmanager",
    description: "VaultForge ist ein lokaler Passwortmanager mit AES-GCM-Verschlüsselung, CLI, Tkinter-GUI und Auto-Lock.",
    navFeatures: "Funktionen", navSecurity: "Sicherheit", navInfo: "Infos", navDownload: "Download",
    heroEyebrow: "Lokaler Passwortmanager",
    heroCopy: "Speichere Zugangsdaten lokal verschlüsselt, entsperre deinen Tresor mit einem Master-Passwort und nutze VaultForge direkt über CLI oder eine einfache Desktop-GUI.",
    downloadExe: "EXE herunterladen", viewSource: "Quellcode ansehen", securityDetails: "Sicherheitsdetails",
    previewVault: "Tresor", previewGenerator: "Generator", previewUnlocked: "Entsperrt", passwordHidden: "Passwort verborgen", localEntry: "lokaler Eintrag", encrypted: "AES-GCM verschlüsselt",
    featuresEyebrow: "Funktionen", featuresTitle: "Alles Wichtige für einen lokalen Tresor",
    manageTitle: "Einträge verwalten", manageCopy: "Lege Logins an, liste gespeicherte Namen auf, zeige Details an und lösche Einträge wieder.",
    generateTitle: "Passwörter generieren", generateCopy: "Der integrierte Generator erstellt zufällige 16-Zeichen-Passwörter mit Buchstaben, Zahlen und Sonderzeichen.",
    lockCopy: "Nach Inaktivität sperrt VaultForge den Tresor automatisch und entfernt den Schlüssel aus der laufenden Sitzung.",
    interfaceCopy: "Nutze VaultForge im Terminal oder starte die Tkinter-Oberfläche für eine einfache Desktop-Bedienung.",
    securityEyebrow: "Sicherheit", securityTitle: "Verschlüsselung bleibt lokal",
    securityCopy: "VaultForge speichert den Tresor in <code>vault.db</code>. Die Daten werden vor dem Schreiben mit AES-GCM verschlüsselt. Der Schlüssel wird aus deinem Master-Passwort über PBKDF2-HMAC-SHA256 mit 200.000 Iterationen und lokalem Salt abgeleitet.",
    aesCopy: "authentifizierte Verschlüsselung für gespeicherte Daten.", pbkdfCopy: "Key-Derivation mit SHA-256 und 32-Byte-Schlüssel.", localFiles: "Lokale Dateien:", filesCopy: "keine Cloud-Anbindung, kein Konto, kein Sync-Zwang.",
    infoEyebrow: "Infos", infoTitle: "Projekt, Versionen und Verantwortung",
    openSourceCopy: "VaultForge ist ein Open-Source-Tool von Metrix31. Open Source bedeutet, dass der Quellcode öffentlich einsehbar ist und von anderen geprüft, nachvollzogen und weiterentwickelt werden kann.",
    versionsTitle: "Versionen und Download", versionsCopy: "Die EXE-Dateien werden über GitHub Releases veröffentlicht. Den Quellcode findest du im GitHub-Repository.",
    disclaimerTitle: "Haftungshinweis", disclaimerCopy: "Die Nutzung erfolgt auf eigene Verantwortung. Metrix31 übernimmt keine Haftung für verlorene, beschädigte oder kompromittierte Passwörter oder Daten.",
    noGuaranteeCopy: "Es besteht keine Garantie, dass Passwörter oder Konten vor unbefugtem Zugriff, Hacking oder Datenverlust geschützt sind.",
    downloadEyebrow: "Download", downloadTitle: "VaultForge lokal starten", downloadCopy: "Lade die EXE ausschließlich über GitHub Releases herunter. Den Quellcode findest du direkt im GitHub-Repository.", pythonCopy: "Zum Ausführen des Quellcodes wird Python benötigt.",
    openReleases: "GitHub Releases öffnen", openSource: "Quellcode öffnen", copy: "Kopieren", copied: "Kopiert", notCopied: "Nicht kopiert",
    footerCopy: "Lokaler Passwortmanager für Windows, macOS und Linux mit Python."
  },
  en: {
    title: "VaultForge | Local Password Manager",
    description: "VaultForge is a local password manager with AES-GCM encryption, CLI, Tkinter GUI, and auto-lock.",
    navFeatures: "Features", navSecurity: "Security", navInfo: "Info", navDownload: "Download",
    heroEyebrow: "Local password manager",
    heroCopy: "Store credentials locally with encryption, unlock your vault with a master password, and use VaultForge through the CLI or a streamlined desktop GUI.",
    downloadExe: "Download EXE", viewSource: "View source code", securityDetails: "Security details",
    previewVault: "Vault", previewGenerator: "Generator", previewUnlocked: "Unlocked", passwordHidden: "Password hidden", localEntry: "local entry", encrypted: "AES-GCM encrypted",
    featuresEyebrow: "Features", featuresTitle: "Everything essential for a local vault",
    manageTitle: "Manage entries", manageCopy: "Create logins, list saved names, view details, and remove entries when needed.",
    generateTitle: "Generate passwords", generateCopy: "The built-in generator creates random 16-character passwords with letters, numbers, and special characters.",
    lockCopy: "After inactivity, VaultForge automatically locks the vault and clears the key from the current session.",
    interfaceCopy: "Use VaultForge in the terminal or launch the Tkinter interface for straightforward desktop use.",
    securityEyebrow: "Security", securityTitle: "Encryption stays local",
    securityCopy: "VaultForge stores the vault in <code>vault.db</code>. Data is encrypted with AES-GCM before it is written. The key is derived from your master password using PBKDF2-HMAC-SHA256 with 200,000 iterations and a local salt.",
    aesCopy: "authenticated encryption for stored data.", pbkdfCopy: "key derivation with SHA-256 and a 32-byte key.", localFiles: "Local files:", filesCopy: "no cloud connection, no account, and no forced sync.",
    infoEyebrow: "Info", infoTitle: "Project, releases, and responsibility",
    openSourceCopy: "VaultForge is an open-source tool by Metrix31. Open source means the code is publicly available and can be reviewed, understood, and improved by others.",
    versionsTitle: "Releases and download", versionsCopy: "EXE files are published through GitHub Releases. The source code is available in the GitHub repository.",
    disclaimerTitle: "Disclaimer", disclaimerCopy: "Use is at your own risk. Metrix31 accepts no liability for lost, damaged, or compromised passwords or data.",
    noGuaranteeCopy: "There is no guarantee that passwords or accounts are protected from unauthorized access, hacking, or data loss.",
    downloadEyebrow: "Download", downloadTitle: "Run VaultForge locally", downloadCopy: "Download the EXE exclusively through GitHub Releases. The source code is available directly in the GitHub repository.", pythonCopy: "Python is required to run the source code.",
    openReleases: "Open GitHub Releases", openSource: "Open source code", copy: "Copy", copied: "Copied", notCopied: "Not copied",
    footerCopy: "Local password manager for Windows, macOS, and Linux with Python."
  }
};

const translatableElements = document.querySelectorAll("[data-i18n]");
const languageButtons = document.querySelectorAll("[data-language]");
let currentLanguage = localStorage.getItem("vaultforge-language") || "de";

function applyLanguage(language) {
  const content = translations[language];
  if (!content) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = content.title;
  document.querySelector('meta[name="description"]').content = content.description;

  translatableElements.forEach((element) => {
    const value = content[element.dataset.i18n];
    if (!value) return;
    if (element.dataset.i18n === "securityCopy") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("vaultforge-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    const originalText = translations[currentLanguage].copy;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = translations[currentLanguage].copied;
    } catch {
      button.textContent = translations[currentLanguage].notCopied;
    }
    window.setTimeout(() => { button.textContent = originalText; }, 1600);
  });
});

applyLanguage(currentLanguage);
