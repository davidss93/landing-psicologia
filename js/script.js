document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq-answer");

    if (answer.style.maxHeight) {
      // Fechar
      answer.style.maxHeight = null;
      answer.style.padding = "0 15px";
    } else {
      // Fechar outros
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.maxHeight = null;
        a.style.padding = "0 15px";
      });

      // Abrir o clicado
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "15px";
    }
  });
});


