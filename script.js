const sidebar = document.querySelector(".sidebar");
const hideSidebar = document.querySelector("#hideSidebar");
const showSidebar = document.querySelector("#showSidebar");

hideSidebar.addEventListener("click", () => {
  sidebar.style.display = "none";
});

showSidebar.addEventListener("click", () => {
  sidebar.style.display = "flex";
});
