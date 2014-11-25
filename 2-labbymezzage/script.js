"use strict";


    var MessageBoard = {

	init: function(){
		
		var now= new Date();
		var messages = [];
		
		Message[0] = new Message("test", now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
		Message[0] = new Message("Penny", now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
		Message[0] = new Message("Penny", now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());

		
	}	
	
};
	window.onload = MessageBoard.init;