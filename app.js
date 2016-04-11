'use strict';

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

		this.setIntervalId = setInterval(move,10);

		function move(){
			pos++;
			domElement.css('top', pos + 'px');

			//Remove Objects after some time 
			if(pos > 750){
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
	constructor(playArea){
		this.playArea = playArea;
		this.wid = playArea.width();
	}

	//Creating objects on the go
	createDrops(){
		var playArea = this.playArea;
		var width = this.wid;
		var arr = [];
		
		//Randomizing Time Intervals at which Objects fall**

			this.createDropsIntervalId = setInterval(make, 1500);

			function make(){
				var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
				var ch = String.fromCharCode(k);
				var left = Math.floor(Math.random() * width );
				
				var elem = $('<div id ="'+k+'" class="obj">'+ ch +'</div>');
				$(playArea).append(elem);
			
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
		if(this.createDropsIntervalId){
			clearInterval(this.createDropsIntervalId);
		}
		$(this.playArea).empty();

		//Score Reset to Zero
		$('#score').text('0');
	}
	
	//Miss Check**

}


//Controller Events
$(document).ready(function(){
	console.log('#startup');

	var elem = $('#playArea');
	var controllerObj = new Controller(elem);

	$('#start').click(function(){
		controllerObj.createDrops();
	});
	$('#stop').click(function(){
		controllerObj.stop();
	});
	$('#reset').click(function(){
		controllerObj.reset();
	});

	var scoreUpdater = 0;

	// Dealing KeyEvents and Bursting matched keys
	$(document).keydown(function(key){
		var keycode = key.which;
		var ch = String.fromCharCode(keycode);

		// Add Burst Effect**

		 var len = $('#'+keycode).length;
		 if(len==1){
		 	scoreUpdater++;
		 	$('#'+keycode).remove();
		 	$('#score').text(scoreUpdater);
		 }

		 if(scoreUpdater==10){
		 	alert('YOU WIN!');
		 }
	});
});