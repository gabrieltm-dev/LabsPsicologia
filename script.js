document.querySelector(".form-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário (caso esteja dentro de um <form>)
    alert("Obrigado por Marcar sua consulta!");
});