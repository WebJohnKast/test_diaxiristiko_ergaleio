
/* ------------ Event Listeners - Γενικά ------------ */

/* Close menu */
$('.menu-close').click(() => {
	$('.wrapper-navigation-mobile').hide();
	$('.grey-background').hide();
})

$('.grey-background').click(() => {
	$('.wrapper-navigation-mobile').hide();
	$('.grey-background').hide();	
})

/* Open menu */
$('i.fas.fa-bars.menu-nav-mobile').click(() => {
	$('.wrapper-navigation-mobile').show(100);
	$('.grey-background').show();
})




/* JQUERY - model browser listeners */
$('.model-browser-menu').click(() => {
	$('.model-browser').show();
})

$('.model-browser-content-header-1').click(() => {
	$('.model-browser-content').slideToggle(200);
})


/* JQUERY - properties listeners */
$('.properties-menu').click(() => {
	$('.properties').show();
})

$('.sheets-header').click(() => {
	$('.properties-content').slideToggle(200)
	$('.wrapper-expand').slideToggle(200)
})

$('.properties-close-icon').click(() => {
	$('.properties').hide();
})

$('.model-browser-icon').click(() => {
	$('.model-browser').hide();
})


let resizing = false;

/* Draggable div και resizable div */
const properties = document.querySelector('.properties');

$('.properties-header').mousedown((e) => {

	let prevX = e.clientX; // που στέκεται το ποντίκι ανάλογα με την οθόνη X; 
	let prevY = e.clientY; // που στέκεται το ποντίκι ανάλογα με την οθόνη Y;


	$(window).mousemove((e) => {
		console.log('hmmm1')
		if(!resizing) {
			let newX = prevX - e.clientX;
			let newY = prevY - e.clientY;

			const left = parseInt(window.getComputedStyle(properties).left); // το current left του element
			const top = parseInt(window.getComputedStyle(properties).top); // το current top του element

			$('.properties').css({"left": left - newX})
			$('.properties').css({"top": top - newY})

			prevX = e.clientX;
			prevY = e.clientY;
		}
	})

	$(window).mouseup(() => {
		$(window).off('mousemove')
		$(window).off('mouseup');
	})
})

const modelBrowser = document.querySelector('.model-browser');

$('.model-browser-header').mousedown((e) => { 
	let prevX = e.clientX; // που στέκεται το ποντίκι ανάλογα με την οθόνη X; 
	let prevY = e.clientY; // που στέκεται το ποντίκι ανάλογα με την οθόνη Y;

	$(window).mousemove((e) => {
		if(!resizing) {
			console.log('hmmm2')
			let newX = prevX - e.clientX;
			let newY = prevY - e.clientY;

			const left = parseInt(window.getComputedStyle(modelBrowser).left); // το current left του element
			const top = parseInt(window.getComputedStyle(modelBrowser).top); // το current top του element

			$('.model-browser').css({"left": left - newX})
			$('.model-browser').css({"top": top - newY})

			prevX = e.clientX;
			prevY = e.clientY;
		}
	})

	$(window).mouseup(() => {
		$(window).off('mousemove')
		$(window).off('mouseup');
	})
});
