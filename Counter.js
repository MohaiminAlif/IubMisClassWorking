

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



/*
function check() {
               
    var fYear = parseInt(document.getElementById("fY").value);
    var lYear = parseInt(document.getElementById("lY").value);

    var count = 0;
    
    for(var i = fYear ; i<=lYear ; i++){
        if(i % 4 == 0){
            count++;
        }
   
    }
    document.write("Total number of leap year is =  "+count)
   
}
*/
