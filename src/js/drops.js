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

export default Drop;
