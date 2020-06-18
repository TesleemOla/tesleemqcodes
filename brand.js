var Input1= document.getElementById("Input1");
var Input2= document.getElementById("Input2");
var Input3= document.getElementById("Input3");

function render()
{
	var x = parseFloat(Input1.value);
	var y = parseFloat(Input2.value);
	var z = parseFloat(Input3.value);

	var result = x*y*1000;
  var worth =  result/z;
  resultField.innerText = "Your building is worth "
 + "$" + worth ;
};
 function coord()
 {
 	confirm("would you like to proceed?");
 };
