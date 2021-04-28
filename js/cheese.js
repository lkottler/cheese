// This is the main file for creation of the cheesy web
// Images & Texts
var mouseObj,
	cheeseObj,
	mouseholeObj;

function update_cheesies(){
	cheeseObj[1].setAttr('text', "Cheesies: " + cheesies);
	stage.draw();
}

function init_cheese(){
	cheeseObj = init_graphic(width/2, height/2, 300, 200, 150, 100, -100, 130, 1, 1, 
		'res/img/cheese.png', '', 0,

	// Functionality of the cheese
	function() {
		cheesies++;
		total_cheesies++;
		if (total_cheesies == 10){
			unlocks[0] = true;
			init_mouse();
		} else if (total_cheesies > 10 && total_cheesies <= 50){
			mouseObj[0].setAttr('opacity', total_cheesies * 0.02);
		} else if (total_cheesies > 50){
			mouseObj[1].setAttr('opacity', 1);
		}
		update_cheesies();
	});
}

function init_mouse(){
	mouseObj = init_graphic(300, 120, 601, 358, 300, 180, -180, 130, 0.8, 0.1, 
		'res/img/mouse.png', '', 0,

	function() {
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
	mouseObj = init_graphic(200, 1007, 349, 292, 349/2, 292, -180, 130, 1, 1, 
		'res/img/mousehole.png', '', 0,

	function() {
		change_scene(1);
	});
}
change_scene(0);
init_cheese();