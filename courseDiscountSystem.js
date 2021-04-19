
function myFunction() {
               
    var x = parseInt(document.getElementById("totalCourse").value);
    var year = parseInt(document.getElementById("birthYear").value);
    var name = document.getElementById("Name").value;
                                  
  
    b = 2021;//current year
    age = b-year;//determining age my subtracting current year from birth year 

    if(age>=20 && x>=4){

        document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your age is "+ age;
    }

    else if(age>=18 && x>=3){
        document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your age is "+ age;
    }

    else{
        document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your age is "+ age;
    }


    }  
