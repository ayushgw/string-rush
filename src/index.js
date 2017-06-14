import './Assets/normalize.css';
import './Assets/skeleton.css';
import 'mdi/css/materialdesignicons.min.css';

import './index.css';
import Controller from './controller/controller';

//Controller Events
$(document).ready(function(){
	var gameBox = $('#gameBox');
	var gameController = new Controller(gameBox);

	$('#start_button').click(function(){
		gameController.play();
	});
	$('#pause_button').click(function(){
		gameController.pause();
	});
	$('#quit_button').click(function(){
		gameController.quit();
	});

	// Dealing KeyEvents and Bursting matched keys
	$(document).keydown(function(key){
		var keycode = key.which;

		// Add Burst Effect
		// $('#'+keycode).animation(){

		// };

		$('#'+keycode).remove();
	});


});


//Score Updater
