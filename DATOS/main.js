onload = () => {
        document.body.classList.remove("container");
    };
    
    // Esperar a que el usuario haga clic para reproducir la música
    document.addEventListener("click", () => {
        const audio = document.querySelector("audio");
        if (audio) {
            audio.play().catch(error => console.log("Error al reproducir el audio:", error));
        }
    });
    
