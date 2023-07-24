function printPage(){
    document.getElementById("saveData").style.display="none";
    document.getElementById("changeData").style.display="none";
 window.print();

 setTimeout(function() {
    document.getElementById("saveData").style.display = "block";
    document.getElementById("changeData").style.display = "block";
 }, 100);
 
 }

 function refreshPage() {
    
    location.reload();
 };