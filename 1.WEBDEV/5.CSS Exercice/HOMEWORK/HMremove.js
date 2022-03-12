
//Home work :

// Remove a specific Element from an array ( no predefined functions allowed)

function remove(arr, value){
    var i;
    var x=0;
    var tab = new Array() 
    for(i=0;i<arr.length;i++){
        if(arr[i]===value){
            var j=i;
            break;
        }
    }
    i=0;
    while(i<arr.length){
        if(i!==j){
            tab[x]=arr[i];
            x++;
        }
        i++;
    }
    arr=tab;
    return arr;
}

console.log(remove([1,2,3,3,3,4,4,4,4,5,6,7],2))

// Remove Duplicates from Sorted Array( no predefined functions allowed)

function researchElt(arr,value){
    for(var i=0;i<arr.length;i++){
        if(arr[i]===value){
            return true;
        }
    }return false;
}
function removeDuplic(arr){
    var tab= new Array();
    var d=arr.length;
    var j=0;
    for(var i=0;i<d;i++){
        if(researchElt(tab,arr[i])===false){
            tab[j]=arr[i];
            //console.log("hrer");
            j++;
        }else{
            //arr=remove(arr,arr[i]);
        }
    }
    arr=tab;
    return arr;
}
    
console.log(removeDuplic([1,2,3,3,3,4,4,4,4,5,6,7]));
