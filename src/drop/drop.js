import './drop.css';

class Drop {
  constructor(domElement, position){
    this.domElement = domElement;
    this.position = position;
  }

  // Make the drop fall
  fall(){
    let domElement = this.domElement;
    domElement.css('left', this.position);

    let top = this.top || 0;
    let missed = window.missed;
    let self = this;
    let setIntervalId = setInterval(function() {
      top++;
      self.top = top;
      domElement.css('top', self.top + 'px');

      // Remove Objects after some time
      if(self.top > 650) {
        window.missed++;
        $('#missed').text(window.missed);
        clearInterval(setIntervalId);
        domElement.remove();
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
