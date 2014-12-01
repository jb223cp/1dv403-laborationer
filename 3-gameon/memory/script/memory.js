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
        var index=0;
            
        
        for (var i=0; i<rows; ++i){
            
            var tableRow = document.createElement("tr");
            table.appendChild(tableRow);
            
               for (var j=0; j<cols;++j){
                   var tableCol=document.createElement("td");
                   var imgTag =document.createElement("img");
                   var link = document.createElement("a");
                   imgTag.setAttribute("src", "pics/0.png");
                   imgTag.setAttribute("alt", "?");
                   link.setAttribute("href", "#");
                   placeHolder=(((rows*(i+1))-rows)+j);
                   index=Memory.squares[placeHolder];
                   link.setAttribute("id", index);
                   
                   tableRow.appendChild(tableCol);
                   tableCol.appendChild(link);
                   link.appendChild(imgTag);
               }
        }
        
       
    }

};

window.onload = Memory.init;