import './Assets/normalize.css';
import './Assets/skeleton.css';
import 'mdi/css/materialdesignicons.min.css';

import './index.css';
import Controller from './controller/controller';

//Controller Events
$(document).ready(function(){
  var gameBox = $('#gameBox');
  var gameController = new Controller(gameBox);

  $('#start_button').click(function(){
    gameController.play();
  });
  $('#pause_button').click(function(){
    gameController.pause();
  });
  $('#quit_button').click(function(){
    gameController.quit();
  });


  // Dealing KeyEvents and Bursting matched keys
  var score = 0;
  var missed = 0;
  $(document).keydown(function(key) {
    var keycode = key.which;
    var ch = String.fromCharCode(keycode);

    // Add Burst Effect**

    var len = $('#'+keycode).length;
    if(len == 1){
      score++;
      $('#'+keycode).remove();
      $('#score').text(score);
    }

    if(score==10){
      alert('YOU WIN!');
    }
  });


});


//Score Updater
