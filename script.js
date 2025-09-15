const container = document.querySelector(".container");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");


let circles = [];
let lines = [];

const progress = document.createElement("div");
progress.classList.add("progress-bar");
container.appendChild(progress);

for(let i=1;i<=5;i++){
	const circle = document.createElement("div");
	circle.classList.add("circle");
	circle.id = `circle-${i}`;
	circle.textContent= i ;
	if(i===1) circle.classList.add("active");
	circles.push(circle);
	progress.appendChild(circle);

	if(i < 5){
		const line = document.createElement("div");
		line.classList.add("line");
		progress.appendChild(line);
		lines.push(line);
	}
}

nextBtn.addEventListener("click",nextStep);
prevBtn.addEventListener("click",prevStep);

let currentStep = 1;

function nextStep() {
	if(currentStep < circles.length){
		circles[currentStep].classList.add("active");
		lines[currentStep-1].classList.add("active");
		currentStep++;
	}
	prevBtn.disabled = false;
	nextBtn.disabled=  currentStep === circles.length;
}

function prevStep() {
	if(currentStep > 1){
      currentStep--;
      circles[currentStep].classList.remove("active");
      lines[currentStep-1].classList.remove("active"); 
	}
  prevBtn.disabled = currentStep === 1;
    nextBtn.disabled = false;
}


