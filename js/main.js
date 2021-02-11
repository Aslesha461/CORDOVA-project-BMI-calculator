document.getElementById("b1").addEventListener("click",bmi);
document.getElementById("b2").addEventListener("click",myconfirm);

function bmi(){
 weight=Number(document.getElementById("t1").value);
var weightunits=document.getElementById("t12").value;   
 var height=Number(document.getElementById("t2").value);
var heightunits=document.getElementById("t21").value;
if(weight==" "){
alert("enter weight");
} else if(height==" "){
    alert("enter height");
}
  else{  
    
//Convert all units to metric
                if (heightunits == "inches") height /= 0.393700787;
                if (weightunits == "lb") weight /= 2.20462;
//Perform calculation
//  var BMI = weight /Math.pow(height, 2)*10000;
var BMI=Math.round(weight/Math.pow(height, 2) * 10000);
document.getElementById("p1").innerText = "your bmi is :"+Math.round(BMI * 100) / 100;
    var output = Math.round(BMI * 100) / 100
    if (output < 18.5){
        alert("under weight");
    }else if (output >= 18.5 && output <= 25){
        alert("healthy");
    }else if (output >= 25 && output <= 30){
        alert("obesity");
    } else if (output > 30){
        alert("overweight")
    }
   
  }
    
}

function myconfirm(){
    var txt;var r = confirm("continue !!");
  if (r == true) {
    window.location.replace("main.html");
  } else {
    window.close;
  }
}