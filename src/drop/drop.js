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
    let self = this;
    let missed = 0;
    this.setIntervalId = setInterval(function() {
      top++;
      self.top = top;
      domElement.css('top', self.top + 'px');

      // Remove Objects after some time
      if(self.top == 650){
        missed++;
        $('#missed').text(missed);
        clearInterval(this.setIntervalId);
        domElement.remove();
      }
    }, 5);
  }

  // Stop Drop
  stop(){
    if(this.setIntervalId){
      clearInterval(this.setIntervalId);
    }
  }

}

export default Drop;
