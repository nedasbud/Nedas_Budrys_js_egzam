function initFooter() {
  document
    .getElementById("footer")
    .insertAdjacentHTML(
      "afterbegin",
      `<p> ${new Date().toLocaleDateString("lt-LT")} </p>`
    );
}
initFooter();
