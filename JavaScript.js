let input=document.getElementById('inputBox'); // getting input from inputbox id 
let buttons= document.querySelectorAll 
('button');                             // All buttons in a buttons 
let string="";                          // Empty String for calculations 
let arr=Array.from(buttons);            // Making an Array for the buttons
arr.forEach(button => {                 // for each loop 
    button.addEventListener('click',(e) => {                    // it listens wheather buttons are pressed or not 
        if(e.target.innerHTML=='='){                            // condition in for each loop to check wheather the clicked button is = or not 
            string =eval(string);                               // eval is a function in many interpreter language to evaluate the string 
            input.value=string;                                 // it pushes the evaluated string in inputbox
        }
        else if(e.target.innerHTML=='AC'){                      // AC working - simply put new empty string in inputbox
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){                     // DEL - simply retrun subtring from 0 to length -1
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else {
            string+=e.target.innerHTML;                         // its used for making an expression to be solved like it builds the mathematical expression to be solved ;
            input.value=string;
        }
        
    })
})