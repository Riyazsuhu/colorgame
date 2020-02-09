var squaresz=6;
var color=colorgenerator(squaresz);
var square=document.querySelectorAll(".square");
var colordisplay=document.querySelector("span");
var pickedcolor=colorpicker();
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var button=document.querySelector("button");
var modebutton=document.querySelectorAll(".mode");

button.addEventListener("click",function(){
	reset();
});
for (var i = 0; i < modebutton.length; i++) {
	modebutton[i].addEventListener("click",function(){
		modebutton[0].classList.remove("selector");
		modebutton[1].classList.remove("selector");
		this.classList.add("selector");
		this.textContent==="Easy" ? squaresz=3 : squaresz=6;
		reset();
	});
}
function reset(){
	color=colorgenerator(squaresz);
	pickedcolor=colorpicker();
	colordisplay.textContent=pickedcolor;
	for(i=0;i<square.length;i++){
		if(color[i]){
			square[i].style.display="block";
			square[i].style.backgroundColor=color[i];
	}
		else{
		square[i].style.display="none";
	}
	h1.style.backgroundColor="steelblue";
	button.textContent="New Color";
	message.textContent="";
}
}
// easybtn.addEventListener("click",function(){
// 	easybtn.classList.add("selector");
// 	hardbtn.classList.remove("selector");
// 	squaresz=3;
// 	color=colorgenerator(squaresz);
// 	pickedcolor=colorpicker();
// 	colordisplay.textContent=pickedcolor;
// 	for (var i = 0; i < square.length; i++) {
// 		if(color[i]){
// 		square[i].style.backgroundColor=color[i];
// 	}
// 	else{
// 		square[i].style.display="none";
// 	}
// 	}
// 	message.textContent="";
	
// });

// hardbtn.addEventListener("click",function(){
// 	hardbtn.classList.add("selector");
// 	easybtn.classList.remove("selector");
// 	squaresz=6;
// 	color=colorgenerator(squaresz);
// 	pickedcolor=colorpicker();
// 	colordisplay.textContent=pickedcolor;
// 	for (var i = 0; i < square.length; i++) {
// 		square[i].style.backgroundColor=color[i];
// 		square[i].style.display="block";
// 	}
// 	message.textContent="";
// });

colordisplay.textContent=pickedcolor;

for(i=0;i<square.length;i++){
	square[i].style.backgroundColor=color[i];

	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor){
			message.textContent="Correct!";
			correctcolor(pickedcolor);
			h1.style.backgroundColor=pickedcolor;
			button.textContent="Play Again";
		}
		else{
			this.style.backgroundColor="#121212";
			message.textContent="Try Again!!";
		}
	});
}

function correctcolor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor=color;
	}
}

function colorpicker(){
	var pick=Math.floor(Math.random()*color.length);
	return color[pick];
}

function colorgenerator(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor())
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}