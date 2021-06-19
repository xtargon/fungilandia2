var btnAbrirPopup = document.getElementById('btn-abrir-popup1'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2');

var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3');

btnAbrirPopup.addEventListener('click', function(){
	active(1);
});

btnAbrirPopup2.addEventListener('click', function(){
	active(2);
});

btnAbrirPopup3.addEventListener('click', function(){
	active(3);
});

overlay.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

function active(num) {
	const img = "<img class='img_popup' style='  border-radius: 3px; width: 100%; height: 100%;' src='img/5web.jpg'>";
	const img2 = "<img class='img_popup' style='  border-radius: 3px; width: 100%; height: 100%;' src='img/4web.jpg'>";
	const img3 = "<img class='img_popup' style='  border-radius: 3px; width: 100%; height: 100%;' src='img/6web.jpg'>";
	if (num == 1) {

		popup.innerHTML = img;

	}
	if (num == 2) {

		popup.innerHTML = img2;
	}
	if (num == 3) {

		popup.innerHTML = img3;
	}
	overlay.classList.add('active');
	popup.classList.add('active');
}
