window.onload = () => {
    const page = localStorage.getItem("currentPage") || "home";
    navigate(page);

    document.addEventListener("submit", (e) => {
        e.preventDefault();
        validateForm();
    });
};
