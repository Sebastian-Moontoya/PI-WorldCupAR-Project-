var btnHelp = document.getElementById("btn-help");
var modal = document.getElementById("main-modal");
var btnClose = document.getElementById("btn-close"); 

const modalImg = document.querySelector(".modal-body img");
const modalText = document.querySelector(".modal-body p");
const btnNext = document.getElementById("btn-next");
const btnReturn = document.getElementById("btn-return");

const instructions = [
  {
    img: "/assets/img/instruction1.png",
    text: "Primeramente, debemos seleccionar uno de los países que deseemos visualizar por medio del combobox."
  },
  {
    img: "/assets/img/instruction2.png",
    text: "Luego, apuntamos la cámara hacia una bandera para escanearla. Si lo hicimos de manera correcta, aparecerá un modelo encima de la bandera."
  },
  {
    img: "/assets/img/instruction3.png",
    text: "En la parte baja de la pantalla podremos encontrar los siguientes botones, los cuales cumplirán ciertas funciones en específico." 
  },
  { 
    img: "/assets/img/instruction4.png",
    text: "Si seleccionamos la opcion de video, podremos observar algunos de los momentos más iconicos en el mundial por parte del país seleccionado." 
  },
  { 
    img: "/assets/img/instruction5.png",
    text: "Si seleccionamos la opcion de trivia, podremos resolver algunas preguntas acerca de momentos históricos relacionados al mundial." 
  },
  { 
    img: "/assets/img/instruction6.png",
    text: "Por último, si seleccionamos la opción de información, podremos observar datos de la selección. Tales como el FIFA Ranking, jugadores clave y la clasificación que alcanzaron el último año." 
  }
];

let currentStep = 0;

function updateModal() {
  modalImg.src = instructions[currentStep].img;
  modalText.textContent = instructions[currentStep].text;

  btnReturn.style.display = currentStep === 0 ? "none" : "inline-block";
  btnNext.style.display = currentStep === instructions.length - 1 ? "none" : "inline-block";
}

btnHelp.onclick = function() {
  modal.style.display = "block";
}

btnClose.onclick = function() {
  modal.style.display = "none";
}

btnNext.onclick = function() {
  if (currentStep < instructions.length - 1) {
    currentStep++;
    updateModal();
  }
};

btnReturn.onclick = function() {
  if (currentStep > 0) {
    currentStep--;
    updateModal();
  }
};

btnHelp.onclick = function() {
  modal.style.display = "block";
  currentStep = 0;
  updateModal();
};
