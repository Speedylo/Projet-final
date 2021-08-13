var i = 0; 			
var images = [];	
var time = 3000;	

images[0] = "alliance-football-club-x1OSttM2ajo-unsplash.jpg";
images[1] = "markus-spiske-J_tbkGWxCH0-unsplash.jpg";
images[2] = "peter-glaser-UVWULib2OHM-unsplash.jpg";
images[3] = "samuel-elias-nadler--JzHSIzNYnU-unsplash.jpg";



function Slideshow(){
	document.slide.src = images[i];

	if(i < images.length - 1 ){
	  i++; 
	} else { 	
	  i = 0;
	}
	
	setTimeout("Slideshow()", time);
}

window.onload=Slideshow;