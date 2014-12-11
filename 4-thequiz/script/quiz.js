"use strict";

function Quiz() {

                     var xhr = new XMLHttpRequest();
                     var URL = "http://vhost3.lnu.se:20080/question/1";
                     xhr.open("GET", URL, true);
                     xhr.send(null); 
                     var question;
 
                document.getElementById("start").addEventListener("click", function(){
                    
                             /*var xhr = new XMLHttpRequest();
                             var URL = "http://vhost3.lnu.se:20080/question/1";
                             xhr.open("GET", URL, true);
                             xhr.send(null); */
                    
                    
                    
                    
                            

                            if((xhr.readyState === 4 && xhr.status===200) || xhr.status==304){
                             
                                  question = JSON.parse(xhr.responseText);
                                  console.log(xhr.responseText);
                                  var questionParagraph = document.createElement("p");
                                  questionParagraph.innerHTML = question.question;
                                  var section = document.getElementById("container");
                                  
                                  section.appendChild(questionParagraph);
                              
                            }
             	});
             	
             	var xhrPost = new XMLHttpRequest();
             	            var response;
                
                            var answer = document.getElementById("answer");
                            var currentAnswer = JSON.stringify({"answer": answer.value});
                            var URL1= question.nextURL;
                           
                         	xhrPost.open("POST", URL1, true);
                         	xhrPost.setRequestHeader('Content-Type', 'application/json'); 

                            xhrPost.send(currentAnswer); 

             	document.getElementById("send").addEventListener("click", function(){
             	    
                            if((xhrPost.readyState === 4 && xhrPost.status===200) || xhrPost.status==304){
                                    /*response = JSON.parse(xhrPost.responseText);*/
                                    response=xhrPost.responseText;
                                    var nesto=(JSON.parse(response));
                                    console.log(nesto);
                                    var answerParagraph = document.createElement("p");
                                    answerParagraph.innerHTML = nesto.message;
                                    URL=nesto.nextURL;
                                    var section1 = document.getElementById("container");
                                      
                                    section1.appendChild(answerParagraph);
                            }
             	});
}

window.onload = function() { 
    new Quiz(); 
 }; 