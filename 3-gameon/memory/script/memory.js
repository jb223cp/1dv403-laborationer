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
                   placeHolder=(((rows*(i+1))-rows)+j);
                   
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
        
        var el=document.body.getElementsByClassName('link');
        for(var c=0;c<el.length;c++) {
            
               el[c].onclick = function() {
                   
                   unknown=this.id;
                   
                   
                   
                   picNumber=Memory.squares[this.id];
                   
                   var current = document.getElementById(unknown);
                   var previous = document.getElementById(previousPosition);
                   
                   
                       
                       var isOdd = counter%2;
                       
                       if (isOdd===1){
                           
                           current.firstChild.setAttribute("src", "pics/"+picNumber+".png");
                           /*current.setAttribute("onclick", "return false");*/
                           current.removeAttribute("href");
                           
                       }
                       else{
                           
                                   current.firstChild.setAttribute("src", "pics/"+picNumber+".png");
                                   /*current.setAttribute("onclick", "return false");*/
                           
                            
                            if (previousNumber===picNumber && unknown!=previousPosition){
                                
                                   
                                   previous.firstChild.setAttribute("src", "pics/"+picNumber+".png");
                                   previous.setAttribute("onclick", "return false");
                                   current.setAttribute("onclick", "return false");
                                   
                                }
                                else{
                                    
                                    
                                    setTimeout(function () {
                               
                                           current.firstChild.setAttribute("src", "pics/0.png");
                                           previous.firstChild.setAttribute("src", "pics/0.png");
                                           current.removeAttribute("onclick");
                                           previous.removeAttribute("onclick");
                                           previous.setAttribute("href", "#");
                                           /*current.firstChild.setAttribute("onclick", "return false");*/
                                           
                                       }, 1000);
                                    
                                }
                           
                           
                       }
                       
                   
                       counter++;
                       previousNumber=picNumber;
                       previousPosition=unknown;
                       
                       return false;
               
            }
        }
        
    }
    
};

window.onload = Memory.init;