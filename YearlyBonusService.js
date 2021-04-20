
function myFunction() {
               
    var salary = parseInt(document.getElementById("salary").value);
    var y = parseInt(document.getElementById("year").value);
    
                                  
    var houseRent = salary * .4;
    var transportCost = 20000/12;
    var sum = houseRent + transportCost; 



    if(sum >= 30000 || y < 2017){

        var bonus = salary * .1;
        var newSalary = salary + bonus; 
        var yearlSalary = newSalary * 12;
        document.getElementById("text").innerHTML = "Hello "+ "Your total Yearly salary is " + yearlSalary;
    }

    
    else{
        var yearlSalary = salary * 12;
       
        document.getElementById("text").innerHTML = "Hello "+ "Your total Yearly salary is " + yearlSalary;
    }  

}
