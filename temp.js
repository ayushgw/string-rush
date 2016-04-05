'use strict';

class Drop {
	constructor(domElement){  //add position
		this.domElement = domElement;
	}

	//Make the object fall
	fall(){
		var pos = 0;
		var domElement = this.domElement;

		this.setI = setInterval(move,5);

		function move(){
			pos++;
			domElement.css('top', pos + 'px');
		}
	}
	//Stop Game
	stop(){
		if(this.setI){
			clearInterval(this.setI);
		}
	}

}

class Controller {
	constructor(playArea){
		this.playArea = playArea;
	}

	//Creating objects on the go
	createDrops(){
		var playArea = this.playArea; 
		this.createDropsIntervalId = setInterval(make, 1000);
		var arr = [];

		function make(){

			var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
			var ch = String.fromCharCode(k);
			var left = Math.floor(Math.random() * 300 );
			
			var elem = $('<div id ="'+k+'" class="obj">'+ ch +'</div>');
			$(playArea).append(elem);
		
			// Create a drop for this object
			var dropObj = new Drop(elem);
			dropObj.fall();

			arr.push(dropObj);
		};

	 //Randomize time using loop
	    // (function loop() {
	    //     var timer = Math.round(Math.random() * 5000) + 500;
	    //     setTimeout(function() {
	    //             loop();  
	    //     }, timer);
	    // }());

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
		$(this.playArea).empty();
	}
}


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

});