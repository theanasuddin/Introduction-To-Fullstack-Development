document.addEventListener("DOMContentLoaded", () => {
  const allListItems = document.querySelectorAll("li");

  allListItems.forEach((li) => {
    const descendants = li.querySelectorAll("li").length;
    if (descendants > 0) {
      for (let node of li.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.nodeValue = node.nodeValue.trim() + ` (${descendants}) `;
          break;
        }
      }
    }
  });
});
