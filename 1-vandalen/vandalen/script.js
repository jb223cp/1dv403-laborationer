"use strict";

var makePerson = function(persArr){
    
    
    var ages=[];
    var names=[];
    
    
    // Makes new array out of property "age" from persArr
    ages = persArr.map(function(age){
        
        return age.age;
    });
    
     // Makes new array out of property "name" from persArr
    names = persArr.map(function (name){
        return name.name;
    });
    
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * Example: Sorting non-ASCII characters, for sorting Swedish characters
     */
    names.sort(function (a, b) {
        return a.localeCompare(b);
    });
    
    var namesTogether=names.join(", ");
    
    return {
        names:namesTogether,
        minAge:Math.min.apply(Math, ages),
        maxAge:Math.max.apply(Math, ages),
        averageAge:Math.round((ages.reduce(function(a,b){return a+b;}))/ages.length)//Föreläsning 3
       } ;
}

//var data=[{name: "Jasmin Bejtovic", age: 36}, {name: "Nils Grandelius", age: 21}, {name: "Michael de Verdier", age: 26},{name: "Viktor Forsberg", age: 31}];
var data=[{ name: "John Häggerud", age: "gg" }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }]
var obj=makePerson(data);
console.log(obj);