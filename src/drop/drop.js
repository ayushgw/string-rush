import './drop.css';

var Drop = class Drop {
  constructor(domElement, position){
    this.domElement = domElement;
    this.position = position;
  }

  // Make the drop fall
  fall() {
    let domElement = this.domElement;
    domElement.css('left', this.position);

    let top = this.top || 0;
    let self = this;
    let assumedHeight = $('#game_container').height() + 20;
    let setIntervalId = setInterval(function() {
      if (!window.isPaused) {
        top++;
        self.top = top;
        domElement.css('top', self.top + 'px');

        // Remove Objects after some time
        if(self.top > assumedHeight) {
          window.missed++;
          $('#missed').text(window.missed);
          clearInterval(self.setIntervalId);
          domElement.remove();
        }
      }
    }, 5);
    this.setIntervalId = setIntervalId;
  }

  // Stop Drop
  stop(){
    if(this.setIntervalId){
      clearInterval(this.setIntervalId);
    }
  }

}

export default Drop;
