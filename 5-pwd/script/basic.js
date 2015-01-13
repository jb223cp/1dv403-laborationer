"use strict";

var Gallery={
	array: null,

	init: function() {
		
		var start = document.getElementById("gallery");
	

		start.onclick = function() {
		    
		    var test=document.querySelector(".container");
		    
		    if (test===null){
		        
		    
		       new Window.createWindow("Gallery", "pics/gallery.png");
               Gallery.images();
               
		     }else{
		         
		         test.remove();
		     }
	      };
	},
	
/****************AJAX request***********************/	

      images: function(){

	              var xhr = new XMLHttpRequest();
	
                     var URL = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
                     
                     xhr.open("GET", URL, true);
                     xhr.send(null); 
                     xhr.onreadystatechange = function(){
                    /* if((xhr.readyState === 4 && xhr.status===200) || xhr.status==304){
                             
                                  Gallery.array = JSON.parse(xhr.responseText);
                                  console.log(Gallery.array);
                                  Gallery.LoadImages();
                                  
                       }
                       else{
                           console.log("hej");
                           
                       }
                     }*/
                     if(xhr.readyState === 4){
                         
                         if(xhr.status===200){
                             
                                  Gallery.array = JSON.parse(xhr.responseText);
                                  console.log(Gallery.array);
                                  Gallery.LoadImages();
                                  
                       }
                       else{
                           console.log("Fail!");
                           
                       }
                     }
                     }
                     
                     
                    
 
             },
/***************** End of AJAX request ********************/   

    LoadImages: function(){
        
        
      var table = document.createElement("table");
      
      var i;
      var j;
      
      
/************** Variables width and height that takes the value of widest and heighest thumbnail in array ******/      
     var width= Math.max.apply(Math,Gallery.array.map(function(array){
         
         return array.thumbWidth;
         
     }))
     
     var height= Math.max.apply(Math,Gallery.array.map(function(array){
         
         return array.thumbHeight;
         
     }))
     
     
      
      var pwdBody = document.getElementById("pwd");
      
      
      
/* Nested for-loops that creates table in which thumbnails of the pictures are presented*/      
      
     for(i=0; i<Gallery.array.length/3;++i){
      	
      	var row = document.createElement("tr"); 
            table.appendChild(row); 

      	
      	for(j=0; j<3; ++j){
      		
      		var link = document.createElement("a");
      		link.href = "#"; 
                  var cell = document.createElement("td"); 
                  var img = document.createElement("img");
                  img.setAttribute("class","thumbs");
                  if((i*3+j)<Gallery.array.length){
                     img.src = Gallery.array[i*3+j].thumbURL;
                  }
                  
                  link.setAttribute("id",i*3+j);
                  
                   if((i*3+j)<Gallery.array.length){
                      link.url = Gallery.array[i*3+j].URL;
                   }
                  
                  link.appendChild(img); 
                  cell.appendChild(link);
                  cell.setAttribute("width",width);
                  cell.setAttribute("height",height);
                 
                 row.appendChild(cell); 
                 
                 
                 link.onclick = function() { 
          
                          var current = this.id;
                      
                      for (var n=0;n<Gallery.array.length;n++){
                          
                          if (current==n){
                              pwdBody.setAttribute("style","background-image:url("+Gallery.array[n].URL+")"); 
                              break;
                          }
                      }
        
      	        }
      	table.appendChild(row);
      }
      
      
      }; 
     
      document.querySelector(".wincontent").appendChild(table);
      
      var load= document.getElementById("load");
      document.querySelector(".winfooter").removeChild(load);
      

    },
}

window.onload = Gallery.init;