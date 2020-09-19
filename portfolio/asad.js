function myfunc(elem) {
    var x = document.getElementById('place');
    x.style.backgroundImage = "url(' " + elem.src + " ')";
    x.innerHTML = elem.alt
}
function undo() {
    var y = document.getElementById('place');
    y.style.backgroundImage = "url(' ')";
    y.innerHTML = 'Hover over an image to display IPhone X size';
}
 
function input() {
    var size = document.getElementById('inputt')
    var bd = document.body.style.backgroundColor = size.value
}

function parag(elem) {
    var p = document.getElementById('para');
    p.innerHTML = elem.textContent;
    p.style.fontSize = "22px"
}
 function colorchange() {
     var b = document.getElementById('input');
     document.getElementById('para').style.backgroundColor = b.value;
 }
var imgg;
 function upload() {
     var imgcanvas = document.getElementById('canvas');
     var fileinput = document.getElementById('finput');
    imgg = new SimpleImage(fileinput);
     imgg.drawTo(imgcanvas);
 }
 function gray() {
     for(var pixel of imgg.values()) {
         var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3
         pixel.setRed(avg);
         pixel.setGreen(avg);
         pixel.setBlue(avg);
     }
     var imagevan = document.getElementById('canvas');
     imgg.drawTo(imgcanvas);
 }

 var fgImage = null;
 var bgImage = null;
 var fgCanvas;
 var bgCanvas;
 function foreground() {
     var imgFile = document.getElementById('finput');
     fgImage = new SimpleImage(imgFile);
     fgCanvas = document.getElementById('fgcan');
     fgImage.drawTo(fgCanvas);
 }
 
 function background() {
     var imgFile = document.getElementById('biput');
     bgImage = new SimpleImage(imgFile);
     bgCanvas = document.getElementById('bgcan');
     bgImage.drawTo(bgCanvas);

     
 }
 function create() {
 var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
 for (var pixel of fgImage.values()) {
     var x = pixel.getX();
     var y = pixel.getY();
     if (pixel.getGreen() > greenThreshold) {
         var bgPixel = bgImage.getPixel(x,y);
         output.setPixel(x, y, bgPixel);
     }
     else {
         output.setPixel(x, y, pixel);
     }
 }
 return output;
}


 function green() {
     if (fgImage == null || ! fgImage.complete()) {
         alert('foreground not loaded')
         return;
     }
     if(bgImage == null || ! bgImage.complete()){
         alert('backgroun not loaded')
     }
     clearCanvas();
     var final = create();
     final.drawTo(fgCanvas)
 }

 

function clearCanvas() {
    doClear(fgCanvas);
    doClear(bgCanvas);
}
function doClear(canvas) {
    var content = canvas.getContent('2d');
    content.clearReact(0,0,canvas.width,canvas.height);
}