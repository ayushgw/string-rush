import './css/normalize.css';
import './css/skeleton.css';
import 'mdi/css/materialdesignicons.min.css';

import './index.css';
import Controller from './js/controller';

//Controller Events
$(document).ready(function(){
	console.log('#startup');

	var gameBox = $('#gameBox');
	var gameController = new Controller(gameBox);

	$('#start_button').click(function(){
		gameController.play();
	});
	$('#pause_button').click(function(){
		gameController.pause();
	});
	$('#reset_button').click(function(){
		gameController.reset();
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
