let a=prompt("Enter your name")
    b=Number.parseInt(prompt("Enter your age"))
   
    console.log(a+b)    
     c=Number.parseInt(prompt("Tamil mark:"))
      d=Number.parseInt(prompt("English mark:" ))
     e= Number.parseInt(prompt("Maths mark: "))
     f=Number.parseInt (prompt("Science mark: "))
     g=Number.parseInt (prompt("social science mark:"))
     total=(c+d+e+f+g)
console.log((total))
avg=total/5


if(c>35& d>35& e>35& f>35& g>35)

{
   
  
   if(avg>90){
        console.log("you are eligible to doctor")
        alert("you are eligible to doctor")
    }
    if(avg>80){
        console.log("you are eligible to Engineering")
        alert("you are eligible to Engineering")
    }
    if(avg>60){
        console.log("you are eligible to arts&science")
        alert("you are eligible to Engineering")
    }

    else{
        console.log("you are eligible to college")
        alert("you are eligible to college")
    }
  

}

else{
    console.log("sorry you are not eligible")
    alert("sorry you are not eligible")
}

