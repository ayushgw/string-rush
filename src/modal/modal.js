import './modal.css';

class Modal {
  constructor(modal) {
    this.modal = modal;
  }

  open() {
    var modal = this.modal;
    $(modal).css('display', 'block');
  }

  close() {
    var modal = this.modal;
    $(modal).css('display', 'none');
  }

}

export default Modal;
