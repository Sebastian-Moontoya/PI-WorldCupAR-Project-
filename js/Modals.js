document.addEventListener('DOMContentLoaded', () => {
    const a_scene = document.querySelector('a-scene'); 
    const selectCountry = document.getElementById('s-countries');

    //Elementos del video
    const btnVideo = document.getElementById('btn-video');
    const modalVideo = document.getElementById('modal-video');
    const btnCloseVideo = document.getElementById('btn-close-video');
    const videoPlayer = document.getElementById('video-player'); 
    const btnFilter1 = document.querySelector('#btn-filter1');
    const btnFilter2 = document.querySelector('#btn-filter2');
    const btnFilter3 = document.querySelector('#btn-filter3');
    const videoSource = videoPlayer.querySelector('source');

    //Elementos de la trivia
    const btnTrivia = document.getElementById('btn-trivia');
    const modalTrivia = document.getElementById('modal-trivia');
    const btnCloseTrivia = document.getElementById('btn-close-trivia');
    const questionText = document.querySelector('#trivia-question');
    const optionsContainer = document.querySelector('#trivia-options-container');

    let answerWasSelected = false; // Para evitar doble clic

    //Elementos de las estadisticas
    const btnStats = document.getElementById('btn-statistics');
    const modalStats = document.getElementById('modal-statistics');
    const btnCloseStats = document.getElementById('btn-close-statistics');
    const statsTitle = document.getElementById('stats-country-title');
    const statsList = document.getElementById('stats-list');  

    //Elementos de la modal de advertencia
    const modalWarning = document.getElementById("modal-warning"); 
    const btnCloseWarning = document.getElementById("btn-close-warning"); 

    const openModal = (modal) => {
        a_scene.pause(); 
        modal.style.display = 'block';
    };

    const closeModal = (modal) => {
        modal.style.display = 'none';
        a_scene.play(); 
    };
    
    const checkCountrySelection = () => {
        const selectedValue = selectCountry.value;
        
        // if (selectedValue === "0" || selectedValue === "") {
        //     openModal(modalWarning); 
        //     return false;
        // } 

        if (selectedValue === "0" || selectedValue === "") { 
            openModal(modalWarning); 
            return false;
        }
        return true;
    };

    // --- Modal de Video ---
    btnVideo.addEventListener('click', (event) => {
        if (checkCountrySelection()) {
            const selectedValue = selectCountry.value; 
            const data = countryData[selectedValue] || countryData["Mexico"]; 
            
            videoSource.setAttribute('src', data.video);
            videoPlayer.load(); 

            openModal(modalVideo);
            
        }
    });

    btnCloseVideo.addEventListener('click', () => {
        videoPlayer.pause(); 
        videoPlayer.currentTime = 0; 
        videoPlayer.style.filter = 'none'; 
        closeModal(modalVideo);
    });

    btnFilter1.addEventListener('click', ()=>{ videoPlayer.style.filter = 'none'; }); 
    btnFilter2.addEventListener('click', ()=>{ videoPlayer.style.filter = 'grayscale(100%)'; });
    btnFilter3.addEventListener('click', ()=>{ videoPlayer.style.filter = 'sepia(100%)'; });

    // --- Modal de Trivia ---
    btnTrivia.addEventListener('click', (event) => {
        if (checkCountrySelection()) {
            const selectedValue = selectCountry.value; 

            const questionData = countryData[selectedValue].trivia || countryData["Mexico"].trivia;
            showQuestion(questionData);
            
            openModal(modalTrivia);
        }
    });

    btnCloseTrivia.addEventListener('click', () => {
        closeModal(modalTrivia);
    });

    // --- Modal de Estadísticas ---
    btnStats.addEventListener('click', (event) => {
        if (checkCountrySelection()) {
            const selectedValue = selectCountry.value; 

            const statsData = countryData[selectedValue].stats || countryData["Mexico"].stats;
            loadStatistics(statsData, selectedValue); 
            
            openModal(modalStats);
        }
    });

    btnCloseStats.addEventListener('click', () => {
        closeModal(modalStats);
    });

    btnCloseWarning.addEventListener('click', ()=>{
        closeModal(modalWarning);
    });
    
    
        /**
     * Muestra la pregunta única y sus opciones
     * @param {object} questionData - El objeto de la pregunta
     */
    function showQuestion(questionData) {
        answerWasSelected = false; // Reiniciamos el bloqueo
        questionText.textContent = questionData.question; // Pone el texto
        optionsContainer.innerHTML = ''; // Borra las opciones anteriores

        // Crea un botón por cada opción
        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('trivia-option-btn');
            
            // Añade el evento de clic para revisar la respuesta
            button.addEventListener('click', () => checkAnswer(option, questionData.correctAnswer, button));
            
            optionsContainer.appendChild(button);
        });
    }

    /**
     * Revisa la respuesta y aplica los estilos (sin puntaje)
     * @param {string} selectedAnswer - El texto del botón presionado
     * @param {string} correctAnswer - La respuesta correcta
     * @param {HTMLElement} selectedButton - El elemento del botón que se presionó
     */
    function checkAnswer(selectedAnswer, correctAnswer, selectedButton) {
        if (answerWasSelected) return; // Si ya se respondió, no hacer nada
        answerWasSelected = true;

        // Deshabilitar todos los botones
        Array.from(optionsContainer.children).forEach(btn => {
            btn.disabled = true;
            // Marcar la correcta (incluso si no fue la que eligió)
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });

        if (selectedAnswer !== correctAnswer) {
            // Si se equivocó, marcar la incorrecta
            selectedButton.classList.add('incorrect');
        }
        
        // Ya no hay botón "Siguiente" ni se suma puntaje.
        // El modal simplemente se queda así hasta que el usuario lo cierre.
    }

    // --- NUEVA Función de Estadísticas ---
    /**
     * Carga los datos de estadísticas en el modal
     * @param {object} statsData - El objeto de estadísticas (ej: {copas: 0, ...})
     * @param {string} countryName - El nombre del país (ej: "México")
     */
    function loadStatistics(statsData, countryName) {
        // Pone el título (Tu HTML tenía "Estadísticas de **México**", lo corregimos)
        statsTitle.textContent = `Estadísticas de ${countryName}`;

        // Limpia la lista anterior
        statsList.innerHTML = '';

        // Crea y añade los nuevos elementos de la lista
        statsList.innerHTML = `
            <li>Copas: ${statsData.copas}</li>
            <li>Participaciones: ${statsData.participaciones}</li>
            <li>Mejor Posición: ${statsData.mejorPosicion}</li>
        `;
    }
});