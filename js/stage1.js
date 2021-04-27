var s1_img_layer= new Konva.Layer();
/*
	s1_img_layer.on('mouseover', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'pointer';
		shape.scaleX(1.2);
		shape.scaleY(1.2);
		if (gameState == 1)
			s1_img_layer.draw();
	});

	s1_img_layer.on('mouseout', function (evt) {
		var shape = evt.target;
		document.body.style.cursor = 'default';
		shape.scaleX(1);
		shape.scaleY(1);
		if (gameState == 1)
			s1_img_layer.draw();
	});
*/
var s1_text_layer = new Konva.Layer();

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

function change_s1(){
	stage.clear();
	document.body.style.cursor = 'default';
	gameState = 1;
	document.body.style.backgroundColor = "#02413E";

	stage.removeChildren();
	stage.add(s1_img_layer);
	stage.add(s1_text_layer);
	draw_game();
}

init_lovegif();