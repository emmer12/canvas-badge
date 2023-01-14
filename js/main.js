const canvas = document.getElementById("canvas");
// const textI=document.getElementById('textI')
const download = document.getElementById("download");
const slider = document.getElementById("slider");
const frameBox = document.querySelector("#badge-box");

let full_name = document.getElementById("full_name");

const ctx = canvas.getContext("2d");
blurb = "This is the top Text";
sText = "This is the static bottom text";
sText2 = "By Emmanuel Taiwo";
color1 = "#000000";
color2 = "#993300";

text2len = 20;
img = new Image();
bImg = new Image();
// img.src="mlk.jpg"
firstimage = 0;
CanvasSize = 375;
cent = canvas.height / 2;
canvasOffset = $("#canvas").offset();
offsetX = canvasOffset.left;
offsetY = canvasOffset.top;
canvasWidth = canvas.width;
canvasHeight = canvas.height;
isDragging = false;
scaled = 1;
activeFrame = "frames/frame1.png";
let name;

let offsetx = 0,
  offsety = 0,
  w,
  h,
  thumbImg;
canvas.width = canvas.width;
canvas.height = canvas.height;

// textI.addEventListener('keydown',(e)=>{
//     ctx.fillText(textI.value, 0, 10);

// })

full_name.addEventListener("blur", (e) => {
  drawText(e.target.value);
});

download.addEventListener("click", downloadCanvas, false);
$("#canvas").mousedown(function (e) {
  handleMouseDown(e);
});
$("#canvas").mousemove(function (e) {
  handleMouseMove(e);
});
$("#canvas").mouseup(function (e) {
  drawText(name)
  handleMouseUp(e);
});
$("#canvas").mouseout(function (e) {
  drawText(name);
  handleMouseOut(e);
});

document.addEventListener("touchstart", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName == "CANVAS") handleMouseDown(e);
});
document.addEventListener("touchmove", function (e) {
  if (e.target.tagName == "CANVAS") handleMouseMove(e);
});
document.addEventListener("touchend", function (e) {
  drawText(name)
  if (e.target.tagName == "CANVAS") handleMouseUp(e);

});
document.addEventListener("touchcancel", function (e) {
  drawText(name);
  if (e.target.tagName == "CANVAS") handleMouseOut(e);

});

// e.type == "touchstart" || e.type == "mousedown"
let imgInput = document.getElementById("imageInput");
imgInput.addEventListener("change", imageUploader, false);
$("#scaleSlide").slider({
  range: "min",
  min: -99,
  max: 300,
  animate: true,
  slide: function (event, ui) {
    scaled = parseFloat(ui.value);
    drawBadge();
  },
});

function setFrame(frame) {
  bImg.src = frame;
  activeFrame = frame;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  loadImage();
}

function drawText(text) {
  ctx.font = "bold 20px sans-serif";
  ctx.fillStyle = "#f2f9f7";
  console.log(ctx.measureText(text))
  ctx.fillText(text, (canvas.width / 2) - ctx.measureText(text).width/2, 382);
  ctx.fillStyle = "#444";
  ctx.fillText(text, (canvas.width / 2) - ctx.measureText(text).width/2, 382);
  name = text
}

// document.getElementById('slider').addEventListener('change',function(e){scaled=e.target.value; }, false);

function drawImageScaled(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  // ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

// function drawBadge() {

// 	let ctx = canvas.getContext('2d');
// 	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //CLEAR CANVAS
// 	ctx = canvas.getContext('2d');
//     centerX = canvas.width/2;
//     centerY = canvas.height/2;
//     radius = 200;
// 	//Border ring:

//   img.onload = function() {
//     ctx.drawImage(img, 0, 0);
//     ctx.beginPath();
//       ctx.moveTo(30, 96);
//       ctx.lineTo(70, 66);
//       ctx.lineTo(103, 76);
//       ctx.lineTo(170, 15);
//       ctx.stroke();
//     };
//     img.src="/frames/frame1.jpeg"

//     // draw3DTextCircle(sText, canvas.width / 2, canvas.height / 2, 200);
// }

function drawBadge() {
  bImg.src = activeFrame;
  thew = img.width + img.width / 100;
  theh = img.height + img.height / 100;

  bImg.onload = function () {
    ctx.drawImage(bImg, 0, 0, canvas.width, canvas.height);
  };

  ctx.save();
  loadImage();

  // draw3DTextCircle(sText, canvas.width / 2, canvas.height / 2, 200);
}

drawBadge();

function draw3DTextCircle(s, x, y, radius, iSAngle) {
  var fRadPerLetter = (2 * Math.PI) / (s.length * 1.6);
  // ctx = canvas.getContext('2d');
  let text1len = 30;
  fontsz = 27 - text1len / 7;
  whiteOrBlackFont();
  ctx.font = "bold " + Math.round(fontsz) + "px Courier";
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(4.35);
  //ctx.fillStyle = 'white';//SHADOW
  // pass through each letter of the text:
  for (var i = 0; i < s.length; i++) {
    ctx.save();
    ctx.rotate(i * fRadPerLetter);
    ctx.fillStyle = font1; //text coloror
    ctx.shadowColoror = shadow1;
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillText(s[i], 0, -radius);
    ctx.restore();
  }
  ctx.restore();

  // ctx = canvas.getContext('2d');
  s = sText2;
  var fRadPerLetter = 0 - (2 * Math.PI) / (s.length * 3);
  fontsz = 25 - text2len / 7;
  ctx.font = Math.round(fontsz) + "px Courier";
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(1); // so is starts at 9oclock
  //ctx.fillStyle = 'white';//SHADOW
  // pass through each letter of the text:
  for (var i = 0; i < s.length; i++) {
    ctx.save();

    ctx.rotate(i * fRadPerLetter);
    ctx.fillStyle = font2; //text coloror
    ctx.shadowColoror = shadow2;
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillText(s[i], 0, radius);
    ctx.restore();
    console.log(ctx.font + "!");
  }
  ctx.restore();
  loadImage();
}
// loadImage();

function loadImage() {
  //Create circle MASK/HOLE:
  ctx.save();
  ctx.beginPath(); // Next: x, y, radius, [makecircle], counterclockwise (don't know why)
  // ctx.rect(cent, cent,0,0);
  // ctx.closePath();
  // ctx.clip();
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //Put image inside HOLE (initially in center, this is then manipulated by offsets)
  let thex = cent - CanvasSize / 2 + offsetx - scaled * 2;
  let they = cent - CanvasSize / 2 + offsety - scaled * 2;
  let thew = w + (w / 100) * scaled;
  let theh = h + (h / 100) * scaled;

  ctx.drawImage(thumbImg, thex, they, thew, theh); //img, x, y, w, h
  ctx.restore();
}

function imageUploader(e) {
  scaled = 1;
  var imgrd = new FileReader();
  imgrd.onload = function (event) {
    var imgSize = document.getElementById("imageInput").files[0].size;
    console.log(imgSize);
    if (imgSize > 7000000) {
      apprise("ERROR: Exceeds maximum upload size of 7MB");
      return;
    }
    img.onload = function () {
      preloadImage();
    };
    img.src = event.target.result;
    // firstimage++
    // if(firstimage==1){apprise("You can drag and drop the image to position it more accurately.");}
  };
  imgrd.readAsDataURL(e.target.files[0]);
}

function preloadImage() {
  // $("#theBlurb").html("&nbsp;");
  thumbImg = document.createElement("img");
  thumbImg.src = img.src;
  thumbImg.onload = function () {
    //Shrink image to fit canvas:
    w = thumbImg.width;
    h = thumbImg.height;
    if (w < h) {
      //portrait
      console.log("portrait");
      rat = CanvasSize / w;
      w = CanvasSize;
      h = h * rat;
    } else if (w > h) {
      //portrait
      console.log("portrait");
      rat = CanvasSize / h;
      h = CanvasSize;
      w = w * rat;
    } else {
      console.log("square - " + w + " " + h);
      h = CanvasSize;
      w = CanvasSize;
    }
    drawBadge();
    loadImage();
  };
}

function mousey() {
  isDragging = false;
}

function handleMouseDown(e) {
  canMouseX = parseInt(
    e.type == "touchstart"
      ? e.touches[0].clientX - offsetX
      : e.clientX - offsetX
  );
  canMouseY = parseInt(
    e.type == "touchstart"
      ? e.touches[0].clientY - offsetY
      : e.clientY - offsetY
  );
  // set the drag flag
  isDragging = true;
  oldoffx = canMouseX;
  oldoffy = canMouseY;
}

function handleMouseUp(e) {
  canMouseX = parseInt(
    e.type == "touchend" ? e.touches[0].clientX - offsetX : e.clientX - offsetX
  );
  canMouseY = parseInt(
    e.type == "touchend" ? e.touches[0].clientY - offsetY : e.clientY - offsetY
  );
  // clear the drag flag
  isDragging = false;
  console.log("UP");
}

function handleMouseOut(e) {
  canMouseX = parseInt(
    e.type == "touchcancel"
      ? e.touches[0].clientX - offsetX
      : e.clientX - offsetX
  );
  canMouseY = parseInt(
    e.type == "touchcancel"
      ? e.touches[0].clientY - offsetY
      : e.clientY - offsetY
  );
  // user has left the canvas, so clear the drag flag
  isDragging = false;
}

function handleMouseMove(e) {
  offx = parseInt(
    e.type == "touchmove" ? e.touches[0].clientX - offsetX : e.clientX - offsetX
  );
  offy = parseInt(
    e.type == "touchmove" ? e.touches[0].clientY - offsetY : e.clientY - offsetY
  );
  // if the drag flag is set, clear the canvas and draw the image

  if (isDragging) {
    if (oldoffx > offx) {
      offsetx -= oldoffx - offx;
    }
    if (oldoffx < offx) {
      offsetx += offx - oldoffx;
    }
    if (oldoffy > offy) {
      offsety -= oldoffy - offy;
    }
    if (oldoffy < offy) {
      offsety += offy - oldoffy;
    }
    oldoffx = offx;
    oldoffy = offy;
    drawBadge();
  }
}

function whiteOrBlackFont() {
  font1 = "black";
  shadow1 = "white";
  var c = color1.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue
  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  if (luma < 70) {
    font1 = "white";
    shadow1 = "black";
  }
  font2 = "black";
  shadow2 = "white";
  var c = color2.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue
  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  if (luma < 70) {
    font2 = "white";
    shadow2 = "black";
  }
}

function downloadCanvas() {
  if (full_name.value == "") {
    alert("Full name is required");
    return;
  } else {
    var dt = canvas.toDataURL("image/png");
    dt = dt.replace(/^data:image\/[^;]/, "data:application/octet-stream");
    /* In addition to <a>'s "download" attribute, you can define HTTP-style headers */
    dt = dt.replace(
      /^data:application\/octet-stream/,
      "data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png"
    );

    this.href = dt;

    $.ajax({
      method: "POST",
      url: "process.php",
      data: {
        store_download: true,
        occupation: full_name.value,
        full_name: full_name.value,
      },
      success: function (data) {
        full_name.value = "";
      },
    });
  }
}

//  function(e) {
//     console.log(canvas.width,canvas.height)
//   if(e.target.files) {
//     let imageFile = e.target.files[0]; //here we get the image file
//     var reader = new FileReader();
//     reader.readAsDataURL(imageFile);
//     reader.onloadend = function (e) {
//       var myImage = new Image(); // Creates image object
//       myImage.src = e.target.result;
//       // myImage.width=canvas.width
//       // myImage.height=canvas.height
//       myImage.class="img"
//       // Assigns converted image to image object
//       myImage.onload = function(ev) {
//           drawImageScaled(myImage,ctx)
//           // ctx.drawImage(,0,0); // Draws the image on canvas
//         let imgData = canvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
//       }
//     }
//   }
// }
