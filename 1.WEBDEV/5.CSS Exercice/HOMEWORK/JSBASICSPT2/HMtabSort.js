
//HomeWork: Write a JavaScript program that  sorts the items of an array.

/*
Array Input :
arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Output : 
-4,-3,1,2,3,5,6,7,8   
*/
function sortTab(tab){
    for(var i=tab.length-1; i>1;i--){
        for(var j=0;j<i;j++){
            if(tab[j]>tab[j+1]){
                [tab[j],tab[j+1]]=[tab[j+1],tab[j]];
            }
        }
    }
    return tab;
}
var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(sortTab(arr));

