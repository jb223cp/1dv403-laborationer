"use strict";

window.onload = function(){
	
	var secret = Math.floor((Math.random() * 100) + 1); // Detta tal behöver bytas ut mot ett slumpat tal.
	var count=0;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		
		
		
		try{
			if (number != parseInt(number, 10)){  //http://stackoverflow.com/questions/4514602/type-checking-in-javascript*/
				throw new Error("FEL! " + number + " kan inte tolkas som ett heltal.");
			}
			
			else if (number<0 || number>100)
			{
				throw new Error("FEL! " + number + " är utanför intervallet 0 - 100");
			}
		}
		catch(Error){
			//throw new Error("parseInt failed: " + number)
		    return [false, Error.message];
		}
		
		count+=1;
		
				if (number==secret){
				
					return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
				}
				else if (number<secret){
					
					return [false, "Det hemliga talet är högre!"];
				}
				else {
					
					return [false, "Det hemliga talet är lägre!"];
				}
			
		// Plats för förändring.


		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};