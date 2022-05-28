
const seccionesPagina = fullpage('#fullpage', {
    // ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────

    autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,

	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
    navigation: true,
	menu: '#menu',
	anchors: ['inicio', 'fotos', 'footer'],
	navigationTooltips: ['Inicio', 'Fotos', 'Footer'],
	showActiveTooltip: false,

	//   :::::: Secciones
	// ──────────────────────────────────────────────────
	sectionsColor : ['#000', '#c2c2c2', '#000'], // Color de fondo de cada seccion.
	verticalCentered: true, // Se alineara de forma vertical los contenidos de cada seccion.

	//   :::::: Slides
	// ──────────────────────────────────────────────────
	controlArrows: true, // Flechas del slide
	slidesNavigation: false, // Indicadores del slide
// ──────────────────────────────────────────────────

//   :::::: Animaciones (Callbacks de FullPage.js)
	// ──────────────────────────────────────────────────
	afterLoad: function(origin, destination){
		if(destination.anchor == 'footer'){
			 document.querySelector('.footer').querySelector('h2').style.opacity = 1;
		}
   }
});