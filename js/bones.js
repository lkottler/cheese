// Gameplay values
var cheesies = 0, total_cheesies = 0, mouse_bribe = 0,
	unlocks = [false,false,false,false,false,false];


// Constants Regarding style/format
const STD_WIDTH = 1920;
const STD_HEIGHT = 1007;
const STD_FONT = "Calibri";

// In the case that scalability is wanted, intended to be played on 1920x1080
const SCALING = false;

var gameState = 0;
var background_colors = ["#FF9365", "#02413E", "#D1D362"];

var width = STD_WIDTH,
	height = STD_HEIGHT,
	x_scale = 1, y_scale = 1;
if (SCALING){
	width = window.innerWidth,
	height = window.innerHeight,
	x_scale = width/STD_WIDTH,
	y_scale = height/STD_HEIGHT;
}

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height,
});

var layers = [[], [], [], []];
for (var i = 0; i < 3; i++){
	layers[i][0] = new Konva.Layer();
	layers[i][1] = new Konva.Layer();

	let temp = i;
	layers[i][0].on('mouseover', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'pointer';
		shape.scaleX(1.2);
		shape.scaleY(1.2);
		if (gameState == temp)
			stage.draw();
	});

	layers[i][0].on('mouseout', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'default';
		shape.scaleX(1);
		shape.scaleY(1);
		if (gameState == temp)
			stage.draw();
	});
}

function update_text(konvaText, newContent){
	console.log(konvaText);
	let x_text = konvaText.absolutePosition().x;
		x_text = x_text - (newContent.split('\n')[0].length - konvaText.text().split('\n')[0].length)*8;
	konvaText.setAttr('text', newContent);
	konvaText.setAttr('x', x_text);
	stage.draw();
}

function init_graphic(x, y, img_width, img_height, scale, opacity, 
	img_path, textContent, textOpacity, gameState, usage_function){
	console.log("creating: " + img_path);
	var off_x = (img_width/2)*scale,
		off_y = (img_height/2)*scale,
		x_text = (x - off_x + (img_width/2)*scale - textContent.split('\n')[0].length*8),
		y_text = (img_height*scale - off_y + 20);
		
	// Creating the graphic
	if (SCALING){
		x*=x_scale; y*=y_scale;
		img_width*=x_scale; img_height*=y_scale;
		off_x*=x_scale; off_y*=y_scale;
		x_text*=x_scale; y_text*=y_scale;
	}
	graphic_img = new Konva.Image({
		x: x, y: y,
		width: img_width*scale, height: img_height*scale,
		offset: { x: off_x, y: off_y,},
		opacity: opacity
	});
	layers[gameState][0].add(graphic_img);

	graphic_text = new Konva.Text({
		align: 'center',
		x: x_text, y: y+y_text,
		fontSize: 40 * x_scale,
		fontFamily: STD_FONT,
		text: textContent,
		fill: 'white',
		opacity: textOpacity
	});
	layers[gameState][1].add(graphic_text);

	var graphic_imgObj = new Image();
	graphic_imgObj.onload = function () {
		graphic_img.image(graphic_imgObj);
		layers[gameState][0].draw();
	};
	graphic_imgObj.src = img_path;

	// THE GUTS OF THE OPERATION
	graphic_img.on('mousedown', usage_function);

	return [graphic_img, graphic_text];
}

function change_scene(newState){


	if (!unlocks[newState]){
		initFuncs[newState]();
		unlocks[newState] = true;
	}
	gameState = newState;

	stage.clear();
	stage.removeChildren();
	document.body.style.cursor = 'default';
	document.body.style.backgroundColor = background_colors[gameState % background_colors.length];
	stage.add(layers[gameState][0]);
	stage.add(layers[gameState][1]);
	stage.draw();
}

/*		This was my example for creating a gif
function init_lovegif(){
	var canvas = document.createElement(('canvas'));
	function onDrawFrame(ctx, frame) {
		canvas.width = frame.width;
		canvas.height = frame.height;
		ctx.drawImage(frame.buffer, 0, 0);
		s1_img_layer.draw();
	}

	gifler('res/gif/monkey.gif').frames(canvas, onDrawFrame);

	var image = new Konva.Image({
		image: canvas,
		width: 750,
		height: 486,
		x: width/2 - 350,
		y: height/2,
	});
	love_text = new Konva.Text({
		x: 315, y: 100,
		Text: "Thanks for clicking the link, and for clicking the cheese! ♥\nSorry the gif looks cursed, I'm doing some weird gif to Canvas magic\nMonke is eternal",
		fontSize: 50 * (height/STD_HEIGHT),
		fontFamily: STD_FONT, fill: 'white',
		align: "center",
		opacity: 1, //opacity set to 0, changed to 1 upon reaching 50 cheesies
	});
	s1_text_layer.add(love_text);
	s1_img_layer.add(image);
}

init_lovegif();
*/