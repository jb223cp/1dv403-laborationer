"use strict";

var Window={
    
    createWindow: function(appName, iconPath){

	var section=document.getElementById("desktop");
	
	var container = document.createElement("div");
	container.className = "container";
	
	//container.classList.add(appName);
	
	
	var winHeader  = document.createElement("div");
	winHeader.className= "winheader";
	
	var closeButton = document.createElement("a");
	var closeImg=document.createElement("img");
	winHeader.appendChild(closeButton);
	closeButton.appendChild(closeImg);
	
	closeButton.className="close";
	closeImg.className="close";
	closeButton.setAttribute("href", "#");
	closeImg.setAttribute("src", "pics/close.png");
	closeImg.setAttribute("alt", "close");
	
	var appIcon=document.createElement("img");
	appIcon.setAttribute("src",iconPath);
	appIcon.setAttribute("class","icon");
	
	winHeader.appendChild(appIcon);
	
	
	 var windowTitle = document.createElement("p"); 
     windowTitle.innerHTML = appName; 
     winHeader.appendChild(windowTitle); 

	

	
	closeButton.onclick = function(){ 
             section.removeChild(container); 
         }; 

	
	
	var winContent = document.createElement("div");
	winContent.className="wincontent";

	
	var winFooter = document.createElement("div");
	winFooter.className="winfooter";
	
	
   
    var load = document.createElement("img");
    load.className="load";
    load.setAttribute("id","load");
    winFooter.appendChild(load);
    load.setAttribute("src","pics/load.gif");
    
	
	
	container.appendChild(winHeader);
	container.appendChild(winContent);
	container.appendChild(winFooter);
	section.appendChild(container);
   },
}      
      