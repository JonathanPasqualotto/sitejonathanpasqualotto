// Carrega o EmailJS e inicializa
document.addEventListener("DOMContentLoaded", function () {

    // Carrega a biblioteca EmailJS dinamicamente
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = function () {
        emailjs.init({
            publicKey: "axQh2YExaor5PFnCP",
            blockHeadless: true,
            blockList: {
                list: ["foo@emailjs.com", "bar@emailjs.com"],
                watchVariable: "jonpasquadev@gmail.com",
            },
            limitRate: {
                id: "app",
                throttle: 10000, // 1 requisição a cada 10s
            },
        });

    };
    document.head.appendChild(script);

    // Adiciona evento ao formulário quando o DOM estiver carregado
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão


            emailjs.sendForm("service_lld2w3m", "template_3hd9glo", "#myForm").then(
                (response) => {
                    if (response.status === 200){
                        // window.location.href = window.location.href;
                    }
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );

            emailjs.sendForm("service_lld2w3m","template_i6c4j94", "#myForm").then(
                (response) => {
                    if (response.status === 200){
                        window.location.href = window.location.href;
                    }
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            )

        });
    }
});