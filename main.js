const btns = document.querySelectorAll(".faq-toggle");

const faq = document.querySelectorAll(".faq");


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    
    faq[i].classList.toggle("active");
  });
}


