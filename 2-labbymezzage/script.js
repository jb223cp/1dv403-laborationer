"use strict";


    var MessageBoard = {
    	
    messages: [],
    
	init: function(){
		
		var text = document.getElementById("area");
		var sendCurrent = document.getElementById("button");
		
		// On event onkeypress checks if pressed key is ENTER (ASCI 13), if it is checks if shift is NOT pressed, then executes functions sendMessage and renderMessages
		text.onkeypress = function(e) {
        if(e.keyCode == 13) {
	            if(!e.shiftKey) {
	                e.preventDefault();
	                MessageBoard.sendMessage();
	                MessageBoard.renderMessages();
	                return false;
            	}
            }
        };
		
		
		sendCurrent.onclick = function(e) {
			
        e.preventDefault();
        MessageBoard.sendMessage();
        MessageBoard.renderMessages();
        
        return false;
    }
    
    MessageBoard.sendMessage = function() {
        MessageBoard.messages.push(new Message(text.value, new Date()));
        text.value = "";
    }

		
	},	
	
	renderMessages: function(){
		
		//Remove all messages
		document.getElementById("container").innerHTML="";
		
		//Renders all messages
		for(var i=0; i<MessageBoard.messages.length;++i){
			
			MessageBoard.renderMessage(i);
		}
	},
	
	renderMessage: function(index){
		
		var section=document.getElementById("container");
		
		//Create button delete, and set some attributes
	    var buttonDelete = document.createElement("input");
		buttonDelete.setAttribute("type", "image");
		buttonDelete.setAttribute("src", "pics/x.png");
		buttonDelete.setAttribute("class", "buttons");
		
		//Create button for timestamp and set some attributes
		var buttonTime = document.createElement("input");
		buttonTime.setAttribute("type", "image");
		buttonTime.setAttribute("src", "pics/clock.png");
		buttonTime.setAttribute("class", "buttons");
		
		//Create article tag for every new message
		var messageContainer=document.createElement("article");
        
       //Create p tag for content of messsage, and tag time for time when message was made
        var content = document.createElement("section");
        var messageDate = document.createElement("time");
        
        
        /*content.insertBefore(buttonDelete, content);*/
        
        //Sets values for tags p and time
        content.innerHTML = MessageBoard.messages[index].getHTMLText();
        messageDate.innerHTML = MessageBoard.messages[index].getDateText();
        
        //Creates structure
        messageContainer.appendChild(buttonDelete);
        messageContainer.appendChild(buttonTime);
        messageContainer.appendChild(content);
        
        content.appendChild(messageDate);
		section.appendChild(messageContainer);
		
		//Sets counter on current number of messages
		var counter = document.getElementById("counter");
		counter.innerHTML = "Antal meddelanden: "+  (MessageBoard.messages.length);
		
		
		buttonDelete.onclick = function(){
			if(window.confirm("Vill du verkligen radera meddelandet?"))
			{
			    MessageBoard.removeMessage(index);
			}
		}
		
		buttonTime.onclick = function(){
			alert("Inlägget skapades: " + MessageBoard.messages[index].getDate().getDate() +"-"+ (MessageBoard.messages[index].getDate().getMonth()+1) +"-"+ MessageBoard.messages[index].getDate().getFullYear() + " klockan " + MessageBoard.messages[index].getDateText());
		}
		
	},
	
	
	//Funtion that removes one object from Array on position that is send by argument
	removeMessage: function(index){
		MessageBoard.messages.splice(index, 1);
		if (index===0){
			var counter = document.getElementById("counter");
			counter.innerHTML = "Antal meddelanden: 0"
		}
		MessageBoard.renderMessages();
	},
	
};

window.onload = MessageBoard.init;