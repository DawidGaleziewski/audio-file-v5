let audioSample = new Audio("../media/6_tamburyno_stukanie1_4389ms.wav");
let playButton = document.getElementById("button__play");

playButton.addEventListener("click", function(){
	audioSample.play();
});

// Highlight clicked answer - Apply function to each square in container
let labels = document.querySelectorAll("label")

		
function toggleColor(){
	for(let i = 0; i < labels.length; i++ ){
		labels[i].classList.remove("label-check");
		labels[i].addEventListener("click", function(){
			removeToggledColor(labels);
			this.classList.add("label-check");
		})
	}
}
		
function removeToggledColor(answerImage){
	for(let e = 0; e < labels.length; e++){
		labels[e].classList.remove("label-check");
	}
}

toggleColor();
labels[0].classList.add("label-check")

function checkSelectedValue(){
	let selectedValue =document.querySelector(".label-check").querySelector("input").value;
	return selectedValue
}

let nextButton = document.getElementById("button__next");

nextButton.addEventListener("click", function(){
	let SelectedValue = checkSelectedValue()
	localStorage.setItem("rememberCheckedValueLocalStorage", SelectedValue);
	console.log(checkSelectedValue())
})

		// Number(localStorage.getItem("rememberCheckedValueLocalStorage"));
		