function Vierkant () {
  this.x = 0;
  this.y = 0;
  this.xLeft = 0;
  this.yLeft = 0;
  this.colorFill = "#000000";
  this.colorLine = "#ffff00";
 
  
Vierkant.prototype.draw = function (context) 
 {
  context.save();
  context.lineWidth = 1;
  context.globalAlpha=0.8; // opacity
  context.fillStyle = this.colorFill;
  context.strokeStyle = this.colorLine
  context.beginPath();
  context.moveTo(this.xLeft, this.yLeft);  
  context.lineTo(this.x, this.yLeft); 
  context.lineTo(this.x , this.y);
  context.closePath();
  context.fill();
  context.stroke();
  
   //draw A B C
   context.globalAlpha=1; // opacity
   context.font="20px Courier";
   context.fillText("A", this.xLeft, this.yLeft + 15);
   context.fillText("B", this.x, this.yLeft + 15);
   context.fillText("C", this.x , this.y );
   context.restore();
 }
};