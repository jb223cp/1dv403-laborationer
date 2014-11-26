"use strict";


    var MessageBoard = {
    	
    messages: [],

	init: function(){
		
		var sendCurrent = document.getElementById("button");
		sendCurrent.onclick = MessageBoard.getAll;
		
	},	
	
	getAll: function(){
		
		var text = document.getElementById("area");

		MessageBoard.messages.push(new Message(text.value, new Date()));
		console.log(MessageBoard.messages);
		var newMessage = MessageBoard.messages.length - 1;
		/*MessageBoard.renderMessage(newMessage);*/
	},
	
};

window.onload = MessageBoard.init;