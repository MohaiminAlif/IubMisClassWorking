
function myFunction() {
               
    var x = parseInt(document.getElementById("totalCourse").value);
    var year = parseInt(document.getElementById("birthYear").value);
    var name = document.getElementById("Name").value;
                                  
  
    b = 2021;//current year
    age = b-year;//determining age my subtracting current year from birth year 
    var total = x * 10000;

    if(age>=20 && x>=4){
        dis = total * 0.25;
        newTotal = total - dis;
        document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your tution fee is "+ newTotal;
    }

    else if(age>=18 && x>=3){
        dis = total * .10;
        newTotal = total - dis;
        document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your tution fee is "+ newTotal;
    }

    else{
        dis = total * .05;
        newTotal = total - dis;
        document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your tution fee is "+ newTotal;
    }


    }  
