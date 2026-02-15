function showGuidelines() {
    const section = document.getElementById("guidelines");

    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });
}

function enterContest() {
    alert("🚀 Redirecting to Contest Registration...");
    // window.location.href = "registration-link.html";
}
