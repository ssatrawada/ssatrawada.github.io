
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID.id).classList.remove('hidden');

}

function unhideLightbox1() {
		unhideLightbox(one);
}
function unhideLightbox2() {
		unhideLightbox(two);
}
function unhideLightbox3() {
		unhideLightbox(three);
}
function unhideLightbox4() {
		unhideLightbox(four);
}
function unhideLightbox5() {
		unhideLightbox(five);
}
function unhideLightbox6() {
		unhideLightbox(six);
}

document.getElementById("picture-1").onclick = unhideLightbox1;
document.getElementById("picture-2").onclick = unhideLightbox2;
document.getElementById("picture-3").onclick = unhideLightbox3;
document.getElementById("picture-4").onclick = unhideLightbox4;
document.getElementById("picture-5").onclick = unhideLightbox5;
document.getElementById("picture-6").onclick = unhideLightbox6;

// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(lightboxID).classList.add('hidden');


}

setTimeout(function(){
document.getElementById('picture-1').style.visibility = "visible";
},200);


setTimeout(function(){
document.getElementById('picture-4').style.visibility = "visible";
},600);

setTimeout(function(){
document.getElementById('picture-2').style.visibility = "visible";
},600);


setTimeout(function(){
document.getElementById('picture-5').style.visibility = "visible";
},1000);

setTimeout(function(){
document.getElementById('picture-3').style.visibility = "visible";
},1000);


setTimeout(function(){
document.getElementById('picture-6').style.visibility = "visible";
},1400);



// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;
// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.


