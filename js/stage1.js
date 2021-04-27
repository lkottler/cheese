var s1_img_layer= new Konva.Layer();
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
	
var s1_text_layer = new Konva.Layer();

function change_s1(){
	stage.clear();
	document.body.style.cursor = 'default';
	gameState = 1;
	document.body.style.backgroundColor = "#02413E";

	stage.removeChildren();
	stage.add(s1_img_layer);
	stage.add(s1_text_layer);
}
