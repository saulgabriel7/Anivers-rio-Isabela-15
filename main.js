function atualizarContador() {
    const dataFesta = new Date("2025-05-24T23:59:59").getTime();
    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;
    
    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
        
        document.getElementById("dias").innerHTML = dias.toString().padStart(2, '0');
        document.getElementById("horas").innerHTML = horas.toString().padStart(2, '0');
        document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, '0');
        document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, '0');
    } else {
        document.querySelector(".contador").innerHTML = "A festa começou! 🎉";
    }
}

function copiarPix() {
    var pixKey = document.getElementById("pixKey");
    
    // Seleciona o texto do input
    pixKey.select();
    pixKey.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia para a área de transferência
    navigator.clipboard.writeText(pixKey.value)
        .then(() => {
            var copiedMessage = document.getElementById("copiedMessage");
            copiedMessage.style.display = "block"; // Mostra a mensagem "Chave copiada!"
            
            // Esconde a mensagem após 2 segundos
            setTimeout(() => {
                copiedMessage.style.display = "none";
            }, 2000);
        })
        .catch(err => console.error("Erro ao copiar:", err));
}

setInterval(atualizarContador, 1000);
atualizarContador();

function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


