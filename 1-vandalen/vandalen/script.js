"use strict";

var makePerson = function(persArr){
    
    var obj={};
    
    // Makes new array with elements of persArr array property "name"
    var names = persArr.map(function(name){
        return name; //.name + " ,";
    });
    names.sort();
    
    // Make new array out of property "age" from persArr
    var ages = persArr.map(function(age){
        return age;
    });
    
    var minAge=Math.min.apply(Math, ages);
    var maxAge=Math.max.apply(Math, ages);
    obj.minAge= minAge,
    obj.maxAge= maxAge,
    obj.averageAge=Math.round((ages.reduce(function(a,b){return a+b;}))/ages.length) ,
    obj.names= names,

    return obj{names:names,minAge:minAge,maxAge:maxAge,averageAge:averageAge};
	// Din kod här...

}
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
//[{name: "Jasmin Bejtovic", age: 36}, {name: "Nils Grandelius", age: 21}, {name: "Michael de Verdier", age: 26},{name: "Viktor Forsberg", age: 31}];
var obj=makePerson(data);
console.log(obj);