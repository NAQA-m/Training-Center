'use strict';



alert("Welcome to our designing world");


let yourName= prompt("pleas inter your name");
console.log ( yourName,typeof yourName);

alert("ETABS code is 1");

 alert("SAFE code is 2");
 alert("REVIT code is 3");
  
 let coarseCode= prompt("Inter your coarse code");
 console.log ( coarseCode,typeof coarseCode);

  if(coarseCode === "1"){
      alert('your name is  '+ yourName + '  you entered  ' + coarseCode + '  this code mean that you want to have ETABS coarse , in home can you read about ETABS');
 }else if (coarseCode === "2"){
    alert('your name is  '+ yourName + '  you entered  ' + coarseCode+'  this code mean that you want to have SAFE coarse , in home can you read about SAFE'); 

}else if (coarseCode === "3"){
    alert('your name is  ' + yourName + '  you entered ' + coarseCode + '  this code mean that you want to have REVIT coarse , in home can you read about REVIT'); 

} else{ 
    alert('your name is  ' + yourName + '  you entered  ' + coarseCode + '  this coode don\'t available, welcome to our website');
}


