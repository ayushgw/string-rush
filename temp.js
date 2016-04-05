'use strict';

class Drop {
	constructor(domElement){
		this.domElement = domElement;
		this.genLetter();
	}
	// Generating a random alphabet between A-Z
	genLetter(){
		var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
		var ch = String.fromCharCode(k);
		var left = Math.floor(Math.random() * 300 );
		
		$('#playArea').append('<span id ="obj'+k+'" class="obj" style="left: '+ left +';">'+ ch +'</span>');
		// th.fall();

		//Randomize time using loop

		this.setT = setTimeout(genLetter, 1000);
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
			clearInterval(this.SetT);
		}
	}

}

// class Controller {
// 	constructor(playArea){
// 		this.playArea = playArea;
// 		this.create();
// 	}
// 	//Creating objects on the go
// 	create(){
// 		var playArea = this.playArea; 
// 		// var timer = 300;
// 		// var setIntervalId = setInterval(make, timer);

// 	    var chars = "abcdefghijklmnopqurstuvwxyz";
// 	    var rObject = $('<div class = "obj"></div>');

// 		function make(){
// 		    var rChar = chars.substr(Math.floor(Math.random() * 26), 1);
// 	  	    console.log(rChar);

// 	  	    $(rObject).attr('id','obj'+rChar);
// 	  	    $(rObject).html(rChar);

// 			$(playArea).append(rObject);
// 		};
// 		     //Randomize time using loop

// 	    (function loop() {
// 	        var timer = Math.round(Math.random() * 5000) + 500;
// 	        setTimeout(function() {
// 	                make();
// 	                loop();  
// 	        }, timer);
// 	    }());
	
// 	 }
// 	stop(){
// 	if(this.setIntervalId){
// 		clearInterval(this.setIntervalId);
// 	}
//   }

// }


$(document).ready(function(){
	console.log('#startup');

	var elem = $('#playArea');
	var dropOBJ = new Drop(elem);

	// $('#start').click(function(){
	// 	dropObj.stop();
	// });
	$('#stop').click(function(){
		dropObj.stop();
	});

});





// $(document).ready(function(){
// 	console.log('#startup');

// 	// var elem = $('#obj0');
// 	// var dropObj = new Drop(elem);

// 	// $('#start').click(function(){
// 	// 	dropObj.alphabet();
// 	// 	dropObj.fall();
// 	// });
	
// 	var elem = $('#playArea');
// 	var dropObj = new Controller(elem);


// 	$('#stop').click(function(){
// 		dropObj.stop();
// 	});
// });
