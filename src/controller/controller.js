import './controller.css';
import Drop from '../drop/drop';
import Modal from '../modal/modal';

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

      let dropElem = $('<div id ="'+characterCode+'" class="drop">'+ character +'</div>');
      $(gameBox).append(dropElem);

      // Create a drop for this object
      let drop = new Drop(dropElem, left);
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
    this.drops.map(function(drop) {
      drop.stop();
    });
  }

  quit(){
    let modalElem = $('#modal');
    let modalContent = `
    <div class="modal-content">
      <span class="close">[<span>&times;</span>]</span>
      <p>The game's progress will be lost.<br>
      Are you sure you want to quit?</p>
      <button class="modal_buttons">[OK]</button>
      <button class="modal_buttons">[CANCEL]</button>
    </div>
    `;
    $(modalElem).append(modalContent);

    let modal = new Modal(modalElem);
    modal.open();

    // clearTimeout(this.setTimeoutId);
    // $(this.gameBox).empty();
  }
}

export default Controller;
