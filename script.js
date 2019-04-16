/* script by https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/Web_Animations/Animationen_synchronisieren#mehrere_Animationen_zeitversetzt_starten */

'use strict';
document.addEventListener('DOMContentLoaded', function () {
	// Auswahl des Bildwechslers und seiner Kindelemente
	var changer = document.querySelector('#gallery'),
		children = changer.querySelectorAll('figure'),
		intervall = 7000; // Dauer eines Bildes
	// sets container, puts figure-elements horizontal 
	changer.classList.add('changer');
	var keyframes = [
		{
			opacity: 0
		},
		{
			opacity: 1,
			offset: 1 / (children.length - 2) * 1 / 3
		},
		{
			opacity: 1,
			offset: 1 / (children.length - 2) * 2 / 3
		},
		{
			opacity: 0,
			offset: 1 / (children.length - 2)
		},
		{
			opacity: 0
		}
  ];
	// alle figure-Elemente werden in einer Schleife animiert  
	for (var index = 0; index < children.length; index++) {
		children[index].animate(keyframes, {
			duration: intervall * children.length,
			delay: index * intervall,
			iterations: Infinity
		});
	}
});