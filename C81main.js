var canvas=document.getElementById("myCanvas");
var abc=canvas.getContext("2d")

abc.beginPath();
abc.strokeStyle = "grey";
abc.lineWidth = 2;
abc.rect(150, 143, 430, 200);
abc.stroke();


abc.beginPath();
abc.strokeStyle = "blue";
abc.lineWidth= 5;
abc.arc(250, 210, 40 ,0 , 2 * Math.PI);
abc.stroke();

abc.beginPath();
abc.strokeStyle = "black";
abc.lineWidth= 5;
abc.arc(350, 210, 40 ,0 , 2 * Math.PI);
abc.stroke();

abc.beginPath();
abc.strokeStyle = "yellow";
abc.lineWidth= 5;
abc.arc(300, 250, 40 ,0 , 2 * Math.PI);
abc.stroke();

abc.beginPath();
abc.strokeStyle = "green";
abc.lineWidth= 5;
abc.arc(400, 250, 40 ,0 , 2 * Math.PI);
abc.stroke();

abc.beginPath();
abc.strokeStyle = "red";
abc.lineWidth= 5;
abc.arc(450, 210, 40 ,0 , 2 * Math.PI);
abc.stroke();



