function navigate(page) {
    localStorage.setItem("currentPage", page);
    document.getElementById("root").innerHTML = templates[page];
}
