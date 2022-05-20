

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
});