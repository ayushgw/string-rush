import './index.css';
import './css/normalize.css';
import './css/skeleton.css';
import 'mdi/css/materialdesignicons.min.css';

class Drop {
	constructor(domElement, position){
		this.domElement = domElement;
		this.position = position;
	}

	//Make the object fall
	fall(){
		var pos = 0;
		var domElement = this.domElement;
		domElement.css('left', this.position);

		this.setIntervalId = setInterval(move, 5);

		function move() {
			pos++;
			domElement.css('top', pos + 'px');

			//Remove Objects after some time
			if(pos > 650){
				domElement.remove();
			}
		}
	}

	//Stop Game
	stop(){
		if(this.setIntervalId){
			clearInterval(this.setIntervalId);
		}
	}

}

class Controller {
	constructor(gamefloor){
		this.gamefloor = gamefloor;
	}

	//Creating objects on the go
	createDrops(){
		var gamefloor = this.gamefloor;
		var arr = [];

		//Randomizing Time Intervals at which Objects fall**
			this.createDropsIntervalId = setInterval(make, 1200);

			function make(){
				var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
				var ch = String.fromCharCode(k);
				var left = Math.floor(Math.random() * 300 );

				var elem = $('<div id ="'+k+'" class="obj">'+ ch +'</div>');
				$(gamefloor).append(elem);

				// Create a drop for this object
				var dropObj = new Drop(elem, left);
				dropObj.fall();

				arr.push(dropObj);
			}

		this.abc = arr;
	}

	stop(){
		if(this.createDropsIntervalId){
			clearInterval(this.createDropsIntervalId);
		}
		for(var i=0; i<this.abc.length; i++){
			this.abc[i].stop();
		}
	}

  reset(){
		$(this.gamefloor).empty();
	}
}


//Controller Events
$(document).ready(function(){
	console.log('#startup');

	var elem = $('#gamefloor');
	var controllerObj = new Controller(elem);

	$('#start_button').click(function(){
		controllerObj.createDrops();
	});
	$('#stop_button').click(function(){
		controllerObj.stop();
	});
	$('#reset_button').click(function(){
		controllerObj.reset();
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
