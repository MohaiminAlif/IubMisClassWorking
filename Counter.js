/*

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
*/

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


function check() {
               
    var f = parseInt(document.getElementById("fY").value);
    var l = parseInt(document.getElementById("lY").value);
    var sum = 0;
    var count = 0;
    
    for(var i = f ; i<=l ; i++){
        if(i % 2 == 0){
            count++;
        }

        else{
            sum = sum +i;
        }
   
    }
    document.write("Total even numbers is =  "+count + "<br>")
    document.write("Sum of odd numbers =  "+sum + "<br>")

   
}


*/

function totalEven() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);


    var count = 0;
    
    for(var i = f ; i<=l ; i++){
        if(i % 2 == 0){
            count++;
        }
   
    }

    document.getElementById("text2").innerHTML = "Total even numers between "+ f + " and " + l + " is " + count;
   
}

function totalOdd() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);


    var count = 0;
    
    for(var i = f ; i<=l ; i++){
        if(i % 2 == 1){
            count++;
        }
   
    }
    document.getElementById("text3").innerHTML = "Total even numers between "+ f + " and " + l + " is " + count;
   
}

function check() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);
    var c = parseInt(document.getElementById("cNum").value);
    var count = c;
  
    
    for(var i = f ; i<=l ; i+=f){

        if(count == 1){
            document.getElementById("text").innerHTML = "The "+ c + "th number is " + i;
        }

        count--;

  
    }
    //document.write("Total even numbers is =  "+count + "<br>")
    //document.write("Sum of odd numbers =  "+sum + "<br>")

}


function totalEven() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);


    var count = 0;
    
    for(var i = f ; i<=l ; i++){
        if(i % 2 == 0){
            count++;
        }
   
    }

    document.getElementById("text2").innerHTML = "Total even numers between "+ f + " and " + l + " is " + count;
   
}



function totalOdd() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);


    var count = 0;
    
    for(var i = f ; i<=l ; i++){
        if(i % 2 == 1){
            count++;
        }
   
    }
    document.getElementById("text3").innerHTML = "Total even numers between "+ f + " and " + l + " is " + count;
   
}


function nthValue() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);
    var c = parseInt(document.getElementById("cNum").value);
    var count = c;
  
    
    for(var i = f ; i<=l ; i+=f){

        if(count == 1){
            document.getElementById("text1").innerHTML = "The "+ c + "th number is " + i;
        }
 
        count--;

  
    }


}


function findTotalNumbers() {
               
    var f = parseInt(document.getElementById("fNum").value);
    var l = parseInt(document.getElementById("lNum").value);
    var n = parseInt(document.getElementById("cNum").value);

    var sum = 0;
    var count = 0;
    

    for(var i = f ; i <=n ; i = i+100){
        
        if(i==f){
            document.write(i);
        }
        
        else if(i<n){
        document.write(" , " + i);
        }

        else document.write(" , ");
        count++;
     
    }
    document.write(n+"");
    document.write(sum);

}




