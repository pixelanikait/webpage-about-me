const elements = document.querySelectorAll(".nav-box");
if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
    elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    },{
        threshold:0.2
    });
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(item => observer.observe(item));

    const skills = document.querySelectorAll(".skill-item");
    skills.forEach(item => observer.observe(item));

});

