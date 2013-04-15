/*
 * Script Scroll To Application
*/ 


$(document).ready(function(){
	
	// All Hidden
	$("#wrapperContenu section").css("display", "none");
	// Faire apparaitre l'accueil
   	$('#wrapperContenu #index').css("display", "block");

	// État du menu (Accessible ou non)
	var etatMenu = false;
	

	// ----- Scroll to top ---------------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------
	$("header #logo, section #btnScrollTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	});

	// ----- Swipe sur l'application -----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------
    $("html").swiperight(function() {
		etatMenu = false;
		animationSlideMenu();
	});

	$("html").swipeleft(function() {
		etatMenu = true;
		animationSlideMenu();
	});


	// ----- Click sur btn menu ----------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------
	$("header #btnMenuTutoriel").click(function(){animationSlideMenu();});


	// ----- Click sur titre tutoriel ----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------
	$("#menuTutoriel h1").click(function(){
		// All Hidden
		$("#wrapperContenu section").css("display", "none");

		// Faire apparaitre l'accueil
   		$('#wrapperContenu #index').css("display", "block");

   		// Enlever la classe selected à tout les liens du menu et l'ajouter au lien cliqué
		$("#menuTutoriel ul li").removeClass("selected");

		// Ramener le contenu à gauche et rendre accessible le scroll
		etatMenu=true;
		animationSlideMenu();
	});


	// ----- Click sur liens du menu -----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------
	$("#menuTutoriel ul li").click(function(){

		// All Hidden
		$("#wrapperContenu section").css("display", "none");
		
		// Enlever la classe selected à tout les liens du menu et l'ajouter au lien cliqué
		$("#menuTutoriel ul li").removeClass("selected");
		
		// Aller chercher la classe du lien cliqué et rendre visible le div approprié
		var myClass = $(this).attr("class");
   		$('#wrapperContenu #' + myClass).css("display", "block");

		// Ramener le contenu à gauche et rendre accessible le scroll
		etatMenu=true;
		animationSlideMenu();

		
		$(this).addClass("selected");


   		//$('#wrapperContenu section').css("width", "90%");
	});

	// ----- Animiation du contenu  ------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------
	function animationSlideMenu(){
		if(etatMenu != true){
			// Déplacer le contenu à droite et désactiver le scroll
			$("#wrapperContenu, header").animate({ left: '80%'}, 500, "easeOut", etatMenu=true);
			$("body").css("overflow", "hidden");
		}
		else{
			// Ramener le contenu à gauche et rendre accessible le scroll
			$("#wrapperContenu, header").animate({ left: '0%'}, 500, "easeOut", etatMenu=false);
			$("body").css("overflow", "visible");
		}
	}

});

