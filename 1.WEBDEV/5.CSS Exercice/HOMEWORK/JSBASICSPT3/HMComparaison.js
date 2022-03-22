/*Write a JavaScript program that compare two objects 
to determine if the first one contains equivalent 
property values to the second one.
*/
function sameVal(obj1,obj2){
    for(var key in obj2){
        if(!(obj1.hasOwnProperty(key) && obj1[key]===obj2[key])){
            return false
        }
    }return true
}
var person={age:20,hair:'long',gender:'women'}

var person1={age:20,hair:'long',gender:'women',eyes:'brown'}

var person2={age:21,hair:'long',gender:'men'}

var person3={age:20,hair:'long',gender:'women'}

console.log(sameVal(person1,person)); // true
console.log(sameVal(person,person1)); // false
console.log(sameVal(person,person2)); // false


//Write a JavaScript function to find the common elements from two arrays
//console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2"] 

function difference(tab1, tab2){
    var tab=[]
    for(var i=0; i<tab1.length;i++){
        for(var j=0; j<tab2.length;j++){
            if(tab1[i]===tab2[j]){
                //console.log(tab)
                var inTab=false;
                for(var k=0; k<tab.length;k++){
                    if(tab[k]===tab1[i]){
                        inTab = true;
                        break;
                    }
                }
                if(!inTab){
                    tab[tab.length]=tab1[i]; 
                }
                
            }
        }
    }
    return tab
}
console.log(difference([1, 2, 3], [100, 2, 1, 10,1]))
