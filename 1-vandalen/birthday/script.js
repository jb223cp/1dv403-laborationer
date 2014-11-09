"use strict";

window.onload = function(){

	
	var birthday = function(date){
		

                
		
		
		try{
			var now= new Date();
			
			/*This example is from course book, page 132*/
			var pattern = /\d{4}-\d{2}-\d{2}/;
			if ((!(pattern.test(date)))|| date==""){
			    throw new Error("Datumet är inte i gilltigt format!")
			}
			var c = new Date(date);
			
			c.setFullYear(now.getFullYear());
			
                 	          var b= Math.floor((Date.parse(c))/(1000*60*60*24));//Math.floor round on lower value. This is important if time is more then 12:00 AM
			var a = Math.floor((now.getTime())/(1000*60*60*24));
	
			if (b<a){
			    c.setFullYear(+((now.getFullYear()))+1);
			    b=Math.floor(Date.parse(c)/(1000*60*60*24));
			}
			var difference = b-a;
			
			if (difference<0){
			
				return (difference);
				
			} else if (difference > 0){
				return (difference);
			}else{
				return 0;
		          }
		}
		catch(Error){
			/* After catch is finished, function still returns value (in fail format)
			 * but that value still pass the try test in next function...
			 */
		          p.classList.add( "error"); // Växla CSS-klass, IE10+
		          console.log(Error.message);
		          p.innerHTML = Error.message;
		          return Error.message;
			
		
		}
		
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};