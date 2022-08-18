async function initHeader() {
  const resp = await fetch("../layout/header.html");
  const htmlHeader = await resp.text();
  document
    .getElementById("header")
    .insertAdjacentHTML("afterbegin", htmlHeader);
}
initHeader();
