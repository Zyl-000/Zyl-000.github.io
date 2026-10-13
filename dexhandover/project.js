const copyButton = document.getElementById("copy-citation");
const citation = document.getElementById("bibtex");
const copyStatus = document.getElementById("copy-status");

if (copyButton && citation && copyStatus && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(citation.textContent);
            copyStatus.textContent = "BibTeX copied to clipboard.";
        } catch {
            copyStatus.textContent = "Select the citation to copy it, or download the .bib file.";
        }
    });
}
