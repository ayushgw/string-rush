import './controller.css';
import Drop from '../drop/drop';
import Modal from '../modal/modal';

class Controller {
  constructor(gameBox){
    this.gameBox = gameBox;
  }

  // Creating objects on the go
  play() {
    if(this.drops) {
      this.drops.map(function(drop) {
        drop.fall();
      });
    }

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

  pause() {
    clearTimeout(this.setTimeoutId);
    this.drops.map(function(drop) {
      drop.stop();
    });
  }

  quit() {
    this.pause();
    // Create and Inject Modal Element in the DOM
    let modalElem = $('#modal');
    let modalContent = `
    <div class="modal-content">
    <span class="close">[<span>&times;</span>]</span>
    <p>The game's progress will be lost.<br>
    Are you sure you want to quit?</p>
    <button id="modal_ok" class="modal_buttons">[OK]</button>
    <button id="modal_cancel" class="modal_buttons">[CANCEL]</button>
    </div>
    `;
    $(modalElem).append(modalContent);

    // Instatiating Modal
    let modal = new Modal(modalElem);
    modal.open();

    let setTimeoutId = this.setTimeoutId;
    let gameBox = this.gameBox;

    // On OK
    $('#modal_ok').click(function() {
      clearTimeout(setTimeoutId);
      $(gameBox).empty();
      modal.close();
    });

    // On Cancel
    var self = this;
    $('#modal_cancel').click(function() {
      modal.close();
      self.play();
    });
  }
}

export default Controller;
