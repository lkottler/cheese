var warriorObj,
	mapObj;

function init_warrior(){
	warriorObj = init_graphic(200, 150, 741, 547, 0.4, 1, 
		'res/img/warrior.png', 'Purchase Mouse Warrior\nCost: 50 Cheesies', 1, 1,

	// Functionality of the graphic
	function() {
		init_map();
		if (!warrior.alive && cheesies >= 50){
			cheesies-=50;
			warrior.alive = true;
			console.log('updating');
			update_text(warriorObj[1], "Revive Warrior\nCost: 50 Cheesies");
		}
	});
}

function init_map(){
	mapObj = init_graphic(1750, 800, 640, 554, 0.4, 1,
		'res/img/map.png', 'Explore', 1, 1,

		function() {
			change_scene(2);
		})
}