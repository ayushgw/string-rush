'use strict';

class Drop{
	constructor(domElem, position){   //Add Speed Later
		this.domElem = domElem;
		this.domElem.css('left',position+'px');
		// this.speed = speed;
	}
	fall(){
		var pos = 0;
		var myObj = this.domElem;

		this.intervalId = setInterval(function(){
			pos++;
			myObj.css('top', pos + "px");
		}, 20);
	}
	stop(){
		clearInterval(this.intervalId);
	}
}

// class Controller{
// 	constructor(){

// 	}
// 	startGame(){
// 		//To start the game

// 		// Create drops randomly
// 		    // Following should happen in setTimeOut or setInterval 
// 			// Create a DOM element - div for every drop
// 			// Create a drop object for that DOM element
// 			// Make it fall
// 	}
// 	stopGame(){
// 		//To stop the game
// 		// Run through all the drop objects in the array and call the stop method
// 	}
// }


$(document).ready(function(){
	console.log('startup');
	// var elem = $('#obj');
	// var dropObj = new Drop(elem,5);

	var arr = [];

	for(var i=0; i<10; i++){
		var elem = $('#obj' + i);
		var arr[i] = new Drop(elem,i*30);
		arr[i].fall();
	}

	// console.log(dropObj);
	// dropObj.fall();
	// console.log(dropObj);



	$('#stop').click(function(){
		dropObj.stop();
	});	

	// $('#stop').click(function(){
	// for(i=0; i<10; i++){
	// 	arr[i].stop();
	// }

	// arr.forEach(function(dropObj){
	// 	dropObj.stop();
	// })
	// 	dropObj.stop();
	// }); 	

});