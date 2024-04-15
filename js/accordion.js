// Accordion

const accordion = document.querySelectorAll(".accordion-btn");

for (let acc of accordion) {
    acc.addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}