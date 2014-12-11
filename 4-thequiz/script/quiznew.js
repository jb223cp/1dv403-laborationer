"use strict";

function Quiz() {
    
    
    var start = document.getElementById("start");
    var send = document.getElementById("send");
    var counterGlobal=0;
    var counterPartial=0;
    start.enabled=true;
    
//Calls the function that gets one question from third part    
    start.onclick = function() { 
             Question("http://vhost3.lnu.se:20080/question/1"); 
        }
        
        
//Function that gets one question from adress in argument
        function Question(URL){
            
            var xhr = new XMLHttpRequest();
            xhr.open("GET", URL, true);
            xhr.send(null); 
            var objQuestion;
            
            xhr.onreadystatechange = function() {
            
                if((xhr.readyState === 4 && xhr.status===200) || xhr.status==304){
                                 
                        objQuestion = JSON.parse(xhr.responseText);
                        var questionParagraph = document.createElement("p");
                        questionParagraph.setAttribute("class","question");
                        questionParagraph.innerHTML = objQuestion.question;
                        var section = document.getElementById("container");
                        section.appendChild(questionParagraph);
                        
                        //send.enabled=true;
                        
                        //Calls the function that sends answer on adress that I get from previous adress
                        send.onclick = function() { 
                            /*start.disabled=true;*/
                            counterGlobal+=1;
                            Answer(objQuestion.nextURL); 
                        } 
                }; 
            }
        }
        
        
//Function that sends the answer on adress in argument
        function Answer(URL1){
            
            var xhrPost = new XMLHttpRequest();
            xhrPost.open("POST", URL1, true);
            xhrPost.setRequestHeader('Content-Type', 'application/json'); 
            var answer = document.getElementById("answer");
            var currentAnswer = JSON.stringify({"answer": answer.value});
            xhrPost.send(currentAnswer); 
            var objResponse;
            
            xhrPost.onreadystatechange = function() {
            
                    if((xhrPost.readyState === 4 && xhrPost.status===200) || xhrPost.status==304){
                        
                            objResponse=(JSON.parse(xhrPost.responseText));
                            var answerParagraph = document.createElement("p");
                            answerParagraph.style.color="green";
                            
                            answerParagraph.innerHTML = objResponse.message;
                            
                            var section1 = document.getElementById("container");
                            section1.appendChild(answerParagraph);
                            
                            if (typeof objResponse.nextURL === "undefined") {
                                
                                  answerParagraph.innerHTML = objResponse.message + " You finished the game and it took " + counterGlobal + " tries";
                                  counterGlobal=0;
                            }
                                    counterPartial=0;
                                    Question(objResponse.nextURL); 
                            
                    }else if (xhrPost.readyState === 4 && xhrPost.status==400){
                        
                            counterPartial+=1;
                            objResponse=(JSON.parse(xhrPost.responseText));
                            var answerParagraphFailed = document.createElement("p");
                            answerParagraphFailed.style.color="red";
                            answerParagraphFailed.innerHTML = objResponse.message + " and this is attempt number " +counterPartial;
                            
                            var section2 = document.getElementById("container");
                            section2.appendChild(answerParagraphFailed);  
                    }
            }
        }
}

window.onload = function() { 
    new Quiz(); 
 }; 