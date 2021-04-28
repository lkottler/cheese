// Constants Regarding style/format
const STD_WIDTH = 1920;
const STD_HEIGHT = 1007;
const STD_FONT = "Calibri";

// In the case that scalability is wanted, intended to be played on 1920x1080
const SCALING = false;

var gameState = 0;
var background_colors = ["#FF9365", "#02413E"];

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

var layers = [[], [], []];
for (var i = 0; i < 3; i++){
	layers[i][0] = new Konva.Layer();
	layers[i][1] = new Konva.Layer();

	layers[i][0].on('mouseover', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'pointer';
		shape.scaleX(1.2);
		shape.scaleY(1.2);
		if (gameState == i)
			layers[i].draw();
	});

	layers[i][0].on('mouseout', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'default';
		shape.scaleX(1);
		shape.scaleY(1);
		if (gameState == i)
			layers[i].draw();
	});
}

function init_graphic(x, y, img_width, img_height, off_x, off_y, x_text, y_text, scale, opacity, 
	img_path, textContent, gameState, usage_function){
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
		x: x+x_text, y: y+y_text,
		fontSize: 40 * y_scale,
		fontFamily: STD_FONT,
		text: textContent,
		fill: 'white'
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

function change_scene(gameState){
	gameState = gameState;
	stage.clear();
	stage.removeChildren();
	document.body.style.cursor = 'default';
	document.body.style.backgroundColor = background_colors[gameState % background_colors.length];
	stage.add(layers[gameState][0]);
	stage.add(layers[gameState][1]);
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