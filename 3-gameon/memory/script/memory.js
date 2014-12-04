"use strict";

var Memory = {
    
    squares:[],
    rows: 4,
    cols: 4,
    
    init: function(){
        
       
        
       Memory.squares = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
       
       console.log(Memory.squares);
       console.log(Memory.squares[0]);
       Memory.renderTable(4,4);
       
       return false;
    },
    
    renderTable: function(rows,cols){
        
        
        var table=document.getElementById("board");
        var placeHolder=0;
        
            
        var tableRow,imgTag,link,tableCol;
        for (var i=0; i<rows; ++i){
            
            tableRow = document.createElement("tr");
            table.appendChild(tableRow);
            
               for (var j=0; j<cols;++j){
                   tableCol=document.createElement("td");
                   imgTag =document.createElement("img");
                   link = document.createElement("a");
                   imgTag.setAttribute("src", "pics/0.png");
                   imgTag.setAttribute("alt", "?");
                   link.setAttribute("href", "#");
                   link.setAttribute("class", "link");
                   if(rows===cols){
                   placeHolder=(((rows*(i+1))-rows)+j);
                   }
                   else if(cols>rows){
                       placeHolder=(rows*i)+i+j;
                   }
                   else{
                       placeHolder=(cols*j)+i+j;
                   }
                   
                   link.setAttribute("id", placeHolder);
                   
                   tableRow.appendChild(tableCol);
                   tableCol.appendChild(link);
                   link.appendChild(imgTag);
               }
        }
        
        
        var picNumber=0;
        var unknown;
        var previousPosition;
        var previousNumber;
        var counter=1;
        var solved;
        var flag=true;
        
        
        var el=document.body.getElementsByClassName('link');
        for(var c=0 ;c<el.length; c++) {
            
          
               el[c].onclick = function() {
                   
                   if(flag===false){
                       event.preventDefault(); 
                   }
  
                   unknown=this.id;
                   var isOdd = counter%2;
                   
                   // checks two in a row clicks on the same field (not needed but....)
                   if(unknown===previousPosition && isOdd===0){
                       event.preventDefault(); 
                   }

                   picNumber=Memory.squares[this.id];
                   
                   var current = document.getElementById(unknown);
                   var previous = document.getElementById(previousPosition);
       
       
                   //Checks if first or second field in pair is opened
                       if (isOdd===1){
                           
                           current.firstChild.setAttribute("src", "pics/"+picNumber+".png");
                           /*current.setAttribute("onclick", "return false");*/
                           current.removeAttribute("href");
                           /*current.setAttribute("class","linksolved");*/
                           
                       }
                       
                   //Here starts code for guessing       
                       else{
                           
                                current.firstChild.setAttribute("src", "pics/"+picNumber+".png");
                         
                                // Checks if pair matchs
                                if (previousNumber===picNumber && unknown!=previousPosition){
                                   
                                   
                                   //If pair is found, link is disabled by removing href attribute and class of elements is changed to linksolved
                                   previous.firstChild.setAttribute("src", "pics/"+picNumber+".png");
                                   previous.removeAttribute("href");
                                   current.removeAttribute("href");
                                   previous.setAttribute("class","linksolved");
                                   current.setAttribute("class","linksolved");
                                   
                                   
                                }
                                else{
                                    
                                   //Flag is down, so when the code reach this point, it is not possible to execute onClick
                                   flag=false;

                     
                                        setTimeout(function () {
                                            
                                            //After one second delay, flag is up again and onClick is possible to execute
                                               flag=true;
                                               current.firstChild.setAttribute("src", "pics/0.png");
                                               previous.firstChild.setAttribute("src", "pics/0.png");
                                               
                                           }, 800);
                                  
                                }
                       }
                       
                       // By setting current values on previous variables, secures that I can reach previous click values
                       previousNumber=picNumber;
                       previousPosition=unknown;
                       
                       //Increase counter by one
                       counter++;
                      
                       solved=document.body.getElementsByClassName('linksolved');
                       
                       //GAME OVER, writes how many tries were needed to finish the game (two clicks are one try)
                       if(solved.length===(rows*cols)){
                           
                           var message = document.getElementById("counter");
		                   message.innerHTML = "CONGRATULATION, You won after "+  Math.floor(counter/2) + " tries!!!";
                           
                       }
                       
                       return false;
            }
        }
    }
};

window.onload = Memory.init;