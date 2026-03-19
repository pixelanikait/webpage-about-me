const progressBar = document.querySelector(".progress-bar");
if (progressBar) {
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / height) * 100;
        progressBar.style.width = progress + "%";
    });
}