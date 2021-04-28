
function init_game(){
	init_cheese();
	change_scene(0);


	setInterval(gameLoop, 100);
}

function unlock_scene1(){
	init_warrior();
	change_scene(1);
}

function gameLoop(){

}


init_game();