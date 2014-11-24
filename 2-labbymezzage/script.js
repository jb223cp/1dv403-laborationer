"use strict";

window.onload = function(){
    
    var mess = new Message("test",new Date());
    var now= new Date();
    
    alert(mess);
    alert(mess.getText());
    mess.setText("new test");
    alert(mess);
    alert(mess.getDate());
    mess.setDate(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
    alert(mess.getDate());
    

	console.log("new");
	};
	
	