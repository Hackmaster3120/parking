canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
GCWidth=75;
GCHeight=100;
GCx=5;
GCy=225;
BGImage = "parkingLot.jpg";
GCImage = "car2.png";
function add() {
	BgTag= new Image();
	BgTag.onload=uploadBackground;
	BgTag.src=BGImage;

	GcTag= new Image();
	GcTag.onload=uploadgreencar;
	GcTag.src=GCImage;
}

function uploadBackground() {
	ctx.drawImage(BgTag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(GcTag,GCx,GCy,GCWidth,GCHeight)

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if (GCy >=0) {
		GCy=GCy-10;
		uploadBackground();
		uploadgreencar();
	}
}
function down(){
	if (GCy <=390) {
		GCy=GCy+10;
		uploadBackground();
		uploadgreencar();
	}
}
function left(){
	if (GCx >=0) {
		GCx=GCx-10;
		uploadBackground();
		uploadgreencar();
	}
}
function right(){
	if (GCx <=790) {
		GCx=GCx+10;
		uploadBackground();
		uploadgreencar();
	}
}
