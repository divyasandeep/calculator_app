
function addition() 
{
  var B = document.getElementById("txt1").value;
  var C = document.getElementById("txt2").value;
  var A = parseInt(B) + parseInt(C);
  document.getElementById("result").innerHTML = A;
}


function substraction() 
{
  var B = document.getElementById("txt1").value;
  var C = document.getElementById("txt2").value;
  var A = parseInt(B) - parseInt(C);
  document.getElementById("result").innerHTML = A;
}


function Multiplication() 
{
  var B = document.getElementById("txt1").value;
  var C = document.getElementById("txt2").value;
  var A = parseInt(B) * parseInt(C);
  document.getElementById("result").innerHTML = A;
}

function Division() 
{
  var B = document.getElementById("txt1").value;
  var C = document.getElementById("txt2").value;
  var A = parseInt(B) / parseInt(C);
  document.getElementById("result").innerHTML = A;
}


