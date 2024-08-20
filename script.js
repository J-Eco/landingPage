function doit() {
    let action = document.getElementById("navLinks");
    const icon = document.querySelectorAll(".navbar, .navLinks");
    if (action.style.display === "flex") {
        action.style.display = "none";

    } else {
        action.style.display = "flex";
    }
}
