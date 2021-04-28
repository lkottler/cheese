function init_warrior(){
	// Creating the graphic
	var x = width/2, y = height/2,
		img_width = 741, img_height = 547,
		off_x = 150, off_y = 100;

	var x_text = -100, y_text = 130;

	if (SCALING){
		img_width*=x_scale; img_height*=y_scale;
		off_x*=x_scale; off_y*=y_scale;
		x_text*=x_scale; y_text*=y_scale;
	}
	warrior_img = new Konva.Image({
		x: x, y: y,
		width: img_width, height: img_height,
		offset: { x: off_x, y: off_y,}
	});
	s0_img_layer.add(warrior_img);
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
	cheese_imgObj.src = 'res/img/warrior.png';

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

