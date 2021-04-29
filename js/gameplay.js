var warrior = {
	alive: false,
	health : 10,
	attack : 1,
	defense: 1
};

var initFuncs = [init_cheese, init_warrior, init_forest];

function init_game(){
	change_scene(0);
	setInterval(gameLoop, 100);
}

function gameLoop(){
	//stage.draw();
}


init_game();