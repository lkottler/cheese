var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height,
});

var img_layer = new Konva.Layer();
var text_layer = new Konva.Layer();
stage.add(img_layer);
stage.add(text_layer);

var cheese_img = new Konva.Image({
	x: width / 2,
	y: height/ 2,
	width: 300,
	height: 200,
	offset: {
	  x: 150,
	  y: 100,
	}});
img_layer.add(cheese_img);

var cheese_text = new Konva.Text({
	x: width / 2 - 100,
	y: height/ 2 + 130,
	Text: "Cheesies: 0",
	fontSize: 40,
	fontFamily: 'Calibri',
	fill: 'white'
});
text_layer.add(cheese_text);

var cheese_imgObj = new Image();
cheese_imgObj.onload = function () {
	cheese_img.image(cheese_imgObj);
	img_layer.draw();
};
cheese_imgObj.src = 'res/img/cheese.png';

img_layer.on('mouseover', function (evt) {
	var shape = evt.target;
	document.body.style.cursor = 'pointer';
	shape.scaleX(1.2);
	shape.scaleY(1.2);
	img_layer.draw();
});

img_layer.on('mouseout', function (evt) {
	var shape = evt.target;
	document.body.style.curosr = 'default';
	shape.scaleX(1);
	shape.scaleY(1);
	img_layer.draw();
});

cheese_img.on('mousedown', function() {
	cheesies++;
	cheese_text.setAttr('text', 'Cheesies: ' + cheesies);
	text_layer.draw();
});