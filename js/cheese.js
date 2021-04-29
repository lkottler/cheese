// This is the main file for creation of the cheesy web
// Images & Texts
var mouseObj,
	cheeseObj,
	mouseholeObj;

function init_cheese(){
	cheeseObj = init_graphic(width/2, height/2, 300, 200, 1, 1, 
		'res/img/cheese.png', '', 1, 0,

	// Functionality of the cheese
	function() {

		let multiplier = 10;

		cheesies+=multiplier;
		total_cheesies+=multiplier;
		console.log(mouseObj == undefined);
		if (total_cheesies >= 10 && mouseObj == undefined){
			init_mouse();
		} else if (total_cheesies > 10 && total_cheesies <= 50){
			mouseObj[0].setAttr('opacity', total_cheesies * 0.02);
		} else if (total_cheesies > 50){
			mouseObj[1].setAttr('opacity', 1);
		}
		update_text(cheeseObj[1], "Cheesies: " + cheesies)
	});
}

function init_mouse(){
	mouseObj = init_graphic(300, 120, 601, 358, 0.8, 0.1, 
		'res/img/mouse.png', 'Bribe the Mousie', 0, 0,

	function() {
		if (cheesies > 50){
			cheesies--;
			mouse_bribe++;
			update_text(cheeseObj[1], "Cheesies: " + cheesies)
		}
		if (mouse_bribe == 10){
			init_mousehole();
		}
	});
}

function init_mousehole(){
	mouseObj = init_graphic(200, 1007-292/2, 349, 292, 1, 1, 
		'res/img/mousehole.png', '', 1, 0,

	function() {
		change_scene(1);
	});
}