const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            const success = document.getElementById("form-success");
            success.hidden = false;
            form.reset();
        }
    });
}