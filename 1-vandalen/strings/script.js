"use strict";

window.onload = function(){

	var convertString = function(str){
	
		  try{
			  	if (str.length==0){
			  		throw new Error("Mata in ett värde!"); //Throws exceptions if string has no elements (is empty)
			  	}
			  	var i;
		        var newString="";
		        
		        /* Iterates throught string (array of characters).
		         * Compares if current character is upper respecctive lower case
		         * ...and if it is, changes it to lower/upper and adds to the new string
		         */
		        for (i=0; i<str.length;i+=1){
			          	if (str[i]==str[i].toUpperCase()){
			          		newString=newString+str[i].toLowerCase();
			          	}else if (str[i]==str[i].toLowerCase()){
			          		newString=newString+str[i].toUpperCase();
			          	}
		          	
		        }
		        var finalString = newString.replace(/a/gi, "#");//http://www.w3schools.com/jsref/jsref_replace.asp , Replace characters gi-global insensitive
		        return finalString;
		  	
		  }
		  catch(Error){
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};