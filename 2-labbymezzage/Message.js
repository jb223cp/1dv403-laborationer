"use strict";


var Message = function Message(message,date) {
    
    this.getText=function(){
        return message;
    }
    
    this.setText=function(_text){
        message=_text;
    }
    
    this.getDate=function(){
        return date;
    }
    
    this.setDate=function(_date){
        date=_date;
    }
    
    Message.prototype.toString=function(){
        
        return this.getText()+" ("+ this.getDate()+") ";
    }
    
    Message.prototype.getHTMLText = function() {
        
        return this.getText().replace(/\n/g, "<br />");
    }
    
    
    Message.prototype.getDateText = function(){
 
     	var hours = this.getDate().getHours();
     	var minutes =  this.getDate().getMinutes();
     	var seconds =  this.getDate().getSeconds();
     	
     	if(hours<10){
     	    hours="0"+hours;
     	}
     	if(minutes<10){
     	    minutes="0"+minutes;
     	}
     	if(seconds<10){
     	    seconds="0"+seconds;
     	}
    
     	return hours +":"+ minutes +":"+ seconds;
    }
    
  // ...
}