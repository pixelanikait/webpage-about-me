const timeline = document.querySelector(".timeline");
timeline.addEventListener("click", (e) => {
    /* detect click on entire card */
    const item = e.target.closest(".timeline-item");
    if(!item) return;
    const button = item.querySelector(".timeline-header");
    const isOpen = item.classList.contains("open");
    /* close all */
    document.querySelectorAll(".timeline-item").forEach(el => {
        el.classList.remove("open");
        const btn = el.querySelector(".timeline-header");
        if(btn) btn.setAttribute("aria-expanded", "false");
    });
    /* toggle clicked */
    if(!isOpen){
        item.classList.add("open");
        if(button) button.setAttribute("aria-expanded", "true");
    }
});