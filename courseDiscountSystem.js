
function myFunction() {
               
    var x = parseInt(document.getElementById("totalCourse").value);
    var year = parseInt(document.getElementById("birthYear").value);
    var name = document.getElementById("Name").value;
                                  
  
    b = 2021;//current year
    var age = b-year;//determining age my subtracting current year from birth year 


    
    document.getElementById("text").innerHTML = "Hello "+ name + " Your total course is " + x + " and your age is "+ age;

    }  
