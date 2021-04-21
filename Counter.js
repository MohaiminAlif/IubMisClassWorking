

function confirm() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);
    var sum = 0;
    var count = 0;
    
    for(var i = f ; i<=l ; i++){
        if(i < 100){
            document.write(i + "<br>");
        }
        else {
            sum = sum + i;
            //count++;
        }

          
    }
    document.write("sum of numbers greater or equal to 100 is =  "+sum)
   
}
