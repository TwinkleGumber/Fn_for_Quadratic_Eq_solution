function solution(){                                 // function called when button is clicked
var r1,r2;                                           // two reuslted roots (solution) 

var a = document.getElementById("ip_a").value;      // put first input value in variable a , using id of this input 
var b = document.getElementById("ip_b").value;      // put second input in variable b
var c = document.getElementById("ip_c").value;      // put third input in variable c

var root_part = Math.sqrt(b*b - 4*a*c);             // use func sqrt(); inside Math to solve root part 
var denominator = 2 * a;

var r1 = (-b + root_part)/denominator;                 // first root using three input variables in formula as shown

var r2 = (-b - root_part)/denominator;                 // second root using three input varibles

    
document.getElementById("p1").innerHTML = "<b>root 1:</b>\n\n" + r1;          // put first root(solution)  inside value of first p element with id=p1

document.getElementById("p2").innerHTML = "<b>root 2:</b>\n\n" + r2;        // put second root(solution)  inside value of second p element with id=p2
    
}

/*$('bodyy').on('keypress',function(event) {              
         if (event.keyCode == 13){                           
     	   solution();

         }
      });*/


// EVENT: here fnctn chks the event type. By pressing enter kye ,having keycode=13 you can get solution without clicking the button
	function onEnter() {                                      
    var key = window.event.keyCode;

    // If the user has pressed enter do this
    if (key === 13) {
        solution();
    }
    
}

