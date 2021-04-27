// This is the main file for creation of the cheesy web

// Constants Regarding style/format
const STD_WIDTH = 1920;
const STD_HEIGHT = 1007;
const STD_FONT = "Calibri";

// In the case that scalability is wanted, intended to be played on 1920x1080
const SCALING = false;

var gameState = 0;

var width = STD_WIDTH,
	height = STD_HEIGHT,
	x_scale = 1, y_scale = 1;
if (SCALING){
	width = window.innerWidth,
	height = window.innerHeight,
	x_scale = width/STD_WIDTH,
	y_scale = height/STD_HEIGHT;
}

// Images & Texts
var mouse_img, mouse_text;
var cheese_img, cheese_text;
var mousehole_img, mousehole_text;

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height,
});

var s0_img_layer= new Konva.Layer();
	s0_img_layer.on('mouseover', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'pointer';
		shape.scaleX(1.2);
		shape.scaleY(1.2);
		if (gameState == 0)
			s0_img_layer.draw();
	});

	s0_img_layer.on('mouseout', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'default';
		shape.scaleX(1);
		shape.scaleY(1);
		if (gameState == 0)
			s0_img_layer.draw();
	});

var s0_text_layer = new Konva.Layer();

function draw_game(){
	stage.clear();
	stage.draw();
}

function update_cheesies(){
	cheese_text.setAttr('text', "Cheesies: " + cheesies);
	draw_game();
}

// Initializing what happens/what the cheese image looks like
function init_cheese(){

	// Creating the graphic
	var x = width/2, y = height/2,
		img_width = 300, img_height = 200,
		off_x = 150, off_y = 100;

	var x_text = -100, y_text = 130;

	if (SCALING){
		img_width*=x_scale; img_height*=y_scale;
		off_x*=x_scale; off_y*=y_scale;
		x_text*=x_scale; y_text*=y_scale;
	}

	console.log(width/2);

	cheese_img = new Konva.Image({
		x: x, y: y,
		width: img_width, height: img_height,
		offset: { x: off_x, y: off_y,}
	});
	s0_img_layer.add(cheese_img);
	console.log(width/STD_WIDTH);

	cheese_text = new Konva.Text({
		x: x+x_text, y: y+y_text,
		fontSize: 40 * y_scale,
		fontFamily: STD_FONT,
		fill: 'white'
	});
	s0_text_layer.add(cheese_text);

	var cheese_imgObj = new Image();
	cheese_imgObj.onload = function () {
		cheese_img.image(cheese_imgObj);
		s0_img_layer.draw();
	};
	cheese_imgObj.src = 'res/img/cheese.png';

	// THE GUTS OF THE OPERATION
	cheese_img.on('mousedown', function() {
		cheesies++;
		total_cheesies++;
		if (total_cheesies == 10){
			unlocks[0] = true;
			init_mouse();
		} else if (total_cheesies > 10 && total_cheesies <= 50){
			mouse_img.setAttr('opacity', total_cheesies * 0.02);
		} else if (total_cheesies > 50){
			mouse_text.setAttr('opacity', 1);
		}
		update_cheesies();
	});
}

// Initializing what the mouse does
function init_mouse(){
	var mouse_scale = 0.8;

	// Creating the graphic
	var x = 300, y = 120,
		img_width = 601*mouse_scale, img_height = 358*mouse_scale,
		off_x = 300, off_y = 180,
		x_text = -180, y_text = 130;

	if (SCALING){
		img_width*=x_scale; img_height*=y_scale;
		off_x*=x_scale; off_y*=y_scale;
		x_text*=x_scale; y_text*=y_scale;
	}
	mouse_img = new Konva.Image({
		x: x, y: y,
		width: img_width,
		height: img_height,
		offset: { x: off_x, y: off_y},
		opacity: 0.1
	});
	s0_img_layer.add(mouse_img);

	mouse_text = new Konva.Text({
		x: x + x_text, y: y + y_text,
		Text: "Bribe the Mousie",
		fontSize: 40 * (height/STD_HEIGHT),
		fontFamily: STD_FONT, fill: 'white',
		opacity: 0, //opacity set to 0, changed to 1 upon reaching 50 cheesies
	});
	s0_text_layer.add(mouse_text);

	var mouse_imgObj = new Image();
	mouse_imgObj.onload = function () {
		mouse_img.image(mouse_imgObj);
		s0_img_layer.draw();
	};
	mouse_imgObj.src = 'res/img/mouse.png';

	// THE GUTS OF THE OPERATION
	mouse_img.on('mousedown', function() {
		if (cheesies > 50){
			cheesies--;
			mouse_bribe++;
			update_cheesies();
		}
		if (mouse_bribe == 10){
			init_mousehole();
		}
	});
}

function init_mousehole(){
	var mousehole_scale = 1;

	// Creating the graphic
	var x = 200, y = 1007,
		img_width = 349*mousehole_scale, img_height = 292*mousehole_scale,
		off_x = img_width/2, off_y = img_height,
		x_text = -180, y_text = 130;

	if (SCALING){
		img_width*=x_scale; img_height*=y_scale;
		off_x*=x_scale; off_y*=y_scale;
		x_text*=x_scale; y_text*=y_scale;
	}
	mousehole_img = new Konva.Image({
		x: x, y: y,
		width: img_width,
		height: img_height,
		offset: { x: off_x, y: off_y},
		opacity: 1
	});
	s0_img_layer.add(mousehole_img);

	var mousehole_imgObj = new Image();
	mousehole_imgObj.onload = function () {
		mousehole_img.image(mousehole_imgObj);
		s0_img_layer.draw();
	};
	mousehole_imgObj.src = 'res/img/mousehole.png';

	// THE GUTS OF THE OPERATION
	mousehole_img.on('mousedown', function() {
		change_s1();
	});
}

function change_s0(){
	stage.removeChildren();
	stage.add(s0_img_layer);
	stage.add(s0_text_layer);
}
init_cheese();
change_s0();