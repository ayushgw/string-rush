import Drop from './drops';

class Controller {
  constructor(gameBox){
    this.gameBox = gameBox;
  }

  //Creating objects on the go
  play(){
    var gameBox = this.gameBox;
    var widthOfGameBox = Math.floor($(gameBox).width());
    var drops = [];

    // Create a drop
    let createOneDrop = () => {
      let characterCode = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
      let character = String.fromCharCode(characterCode);
      let left = Math.floor(Math.random() * (widthOfGameBox - 32)) + 5 ;

      let elem = $('<div id ="'+characterCode+'" class="obj">'+ character +'</div>');
      $(gameBox).append(elem);

      // Create a drop for this object
      let drop = new Drop(elem, left);
      drop.fall();

      drops.push(drop);
    }

    let getDropInterval = () => {
      let interval = Math.floor(Math.random() * 1300) + 500;
      console.log(interval);
      return interval;
    }

    // Create drops at random intervals
    var self = this;
    (function dropsLoop() {
      let interval = getDropInterval();
      self.setTimeoutId = setTimeout(function() {
        createOneDrop();
        dropsLoop();
      }, interval);
    }());
    this.drops = drops;
  }

  pause(){
    clearTimeout(this.setTimeoutId);
    for(var i=0; i<this.drops.length; i++) {
      this.drops[i].stop();
    }
    // this.drops.map(function(drop) {
    //   drop.stop();
    // })
  }

  reset(){
    $(this.gameBox).empty();
  }
}

export default Controller;
