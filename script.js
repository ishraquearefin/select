function isKeyPressed(event) {
	
if (event.ctrlKey) {
	var select=0;
	function selected(){
		select=select+1
	}

	document.getElementById("box1").onclick=function(){
 	
 
 	document.getElementById("box1").style.backgroundColor="blue"
 	
 	selected();
 	
 	document.getElementById("select").innerHTML= select;	
 	
 	
 	
 
}


	document.getElementById("box2").onclick=function(){
 	
 	document.getElementById("box2").style.backgroundColor="blue"
 	
 	
 	
 	selected();
 	
 	document.getElementById("select").innerHTML= select
 }
 	document.getElementById("box3").onclick=function(){
 	
 	document.getElementById("box3").style.backgroundColor="blue"
 	
 	
 	
 	selected();
 	
 	document.getElementById("select").innerHTML= select
 }
 	document.getElementById("box4").onclick=function(){
 	
 	document.getElementById("box4").style.backgroundColor="blue"
 	
 	
 	
 	selected();
 	
 	document.getElementById("select").innerHTML= select
 }


}

   else {
 
 document.getElementById("box1").onclick=function(){
 	var select=0;
 	var count =0;
 	document.getElementById("box1").style.backgroundColor="blue"
 	document.getElementById("box2").style.backgroundColor="red"
 	document.getElementById("box3").style.backgroundColor="red"
 	document.getElementById("box4").style.backgroundColor="red"
 	
 	
 	select=select+1
 	if(count==0){
 	document.getElementById("select").innerHTML= select
 	count=count+1;
 }
else{
	alert("You Have already selected this file")
}
}
 document.getElementById("box2").onclick=function(){
 	var select=0;
 	var count =0;
 	document.getElementById("box1").style.backgroundColor="red"
 	document.getElementById("box2").style.backgroundColor="blue"
 	document.getElementById("box3").style.backgroundColor="red"
 	document.getElementById("box4").style.backgroundColor="red"
 
 	
 	select=select+1
 	if(count==0){
 	document.getElementById("select").innerHTML= select
 	count=count+1;
 }
else{
	alert("You Have already selected this file")
}
}
 document.getElementById("box3").onclick=function(){

 	var count =0;
 	var select=0;
 	document.getElementById("box1").style.backgroundColor="red"
 	document.getElementById("box2").style.backgroundColor="red"
 	document.getElementById("box3").style.backgroundColor="blue"
 	document.getElementById("box4").style.backgroundColor="red"

 	
 	select=select+1
 	if(count==0){
 	document.getElementById("select").innerHTML= select
 	count=count+1;
 }
else{
	alert("You Have already selected this file")
}
}
 document.getElementById("box4").onclick=function(){
 	var count =0;
 	var select=0;
 	document.getElementById("box1").style.backgroundColor="red"
 	document.getElementById("box2").style.backgroundColor="red"
 	document.getElementById("box3").style.backgroundColor="red"
 	document.getElementById("box4").style.backgroundColor="blue"
 	
 	select=select+1
 	if(count==0){
 	document.getElementById("select").innerHTML= select
 	count=count+1;
 }
else{
	alert("You Have already selected this file")
}
}
 
}
}