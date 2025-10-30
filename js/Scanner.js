// js/Scanner.js
// Lógica "Selection-First" (controlada por el combobox)

// (Asegúrate de que countryData.js se carga ANTES que este script)

const scene = document.querySelector('a-scene');

// 1. Array de países (para mapear nombre a índice)
const countryNames = [
    "Tunez",         // targetIndex: 0
    "Marruecos",     // targetIndex: 1
    "Paraguay",      // targetIndex: 2
    "Colombia",      // targetIndex: 3
    "Uruguay",       // targetIndex: 4
    "Ecuador",       // targetIndex: 5
    "Australia",     // targetIndex: 6
    "Jordania",      // targetIndex: 7
    "SouthKorea",    // targetIndex: 8
    "Uzbekistan",    // targetIndex: 9
    "Argentina",     // targetIndex: 10
    "Iran",          // targetIndex: 11
    "Japon",         // targetIndex: 12
    "NuevaZelanda",  // targetIndex: 13
    "EstadosUnidos", // targetIndex: 14
    "Canada",        // targetIndex: 15
    "Brasil",        // targetIndex: 16
    "Mexico"         // targetIndex: 17
];

function removeAllModels() {
    const allModels = document.querySelectorAll('.active-model');
    allModels.forEach(model => model.remove());
}

function attachModelToTarget(targetIndex, modelPath) {
    // 1. Encuentra el "anchor" del target en el HTML
    const targetEntity = document.querySelector(`[mindar-image-target="targetIndex: ${targetIndex}"]`);
    console.log(targetIndex); 
    if (!targetEntity) {
        console.error(`Error: No se encontró el target con índice ${targetIndex}`);
        return;
    }

    // 2. Crea el nuevo elemento del modelo 3D
    const model = document.createElement('a-entity');
    model.setAttribute('gltf-model', `url(${modelPath})`);
    model.setAttribute('scale', '1 1 1'); // Ajusta esta escala como necesites
    model.setAttribute('position', '0 0 0');
    model.classList.add('active-model'); // Le ponemos una clase para poder borrarlo después

    // 3. Adjunta el modelo al "anchor"
    targetEntity.appendChild(model);
}

// ------------------------------------
// LÓGICA PRINCIPAL
// ------------------------------------
if (scene.hasLoaded) {
    initializeSelectListener();
} else {
    scene.addEventListener('loaded', initializeSelectListener);
}

function initializeSelectListener() {
    const selectCountry = document.getElementById('s-countries');
    const buttonsFooter = document.querySelector('.mf-buttons');

    // Escuchamos el evento 'change' del combobox
    selectCountry.addEventListener('change', () => {
        
        // 1. Borramos cualquier modelo que estuviera antes
        removeAllModels();

        // 2. Leemos el valor seleccionado
        const selectedValue = selectCountry.value;

        // 3. Si seleccionó "Seleccione un país" (valor "0")
        if (selectedValue === "0") {
            buttonsFooter.style.display = 'none'; // Oculta botones
            return; // No hace nada más
        }

        // 4. Si seleccionó un país (ej: "Mexico")
        buttonsFooter.style.display = 'flex'; // Muestra los botones

        // 5. Buscamos la info de ese país
        const countryInfo = countryData[selectedValue];
        if (!countryInfo) {
            console.error(`Error: No hay datos para el país: ${selectedValue}`);
            return;
        }

        // 6. Buscamos el targetIndex de ese país
        const targetIndex = countryNames.indexOf(selectedValue);
        if (targetIndex === -1) {
            console.error(`Error: El país ${selectedValue} no está en el array countryNames.`);
            return;
        }

        // 7. Adjuntamos el modelo 3D al target correcto
        attachModelToTarget(targetIndex, countryInfo.model);
    });
}