const copyButtons = document.querySelectorAll("[data-copy]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    const originalText = button.textContent;

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "Kopiert";
    } catch {
      button.textContent = "Nicht kopiert";
    }

    window.setTimeout(() => {
      button.textContent = originalText;
    }, 1600);
  });
});
