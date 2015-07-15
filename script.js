 function popup() {
      open("BATMAN.html");
  }
  
  function changeImage() {
	  var image = docoument.getElementById(
	  'myImage')
  if (image.src.match("Bulb_on.png")){
	  image.src = "Bulb_off.png"
  }
	 }
	 else  {
		 image.src = "bulb_on.png"
	  }
	 }
