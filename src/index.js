import './Assets/normalize.css';
import './Assets/skeleton.css';
import 'mdi/css/materialdesignicons.min.css';

import './index.css';
import Controller from './controller/controller';

//Controller Events
$(document).ready(function(){
  var gameBox = $('#gameBox');
  var gameController = new Controller(gameBox);

  let startBtn = $('#start_button');
  let pauseBtn = $('#pause_button');
  let quitBtn = $('#quit_button');

  window.drops = [];

  pauseBtn.prop('disabled', true);
  startBtn.click(function(){
    window.isPlaying = true;
    window.isPaused = false;
    gameController.play();
    pauseBtn.prop('disabled', false);
    startBtn.prop('disabled', true);
  });
  pauseBtn.click(function(){
    window.isPaused = true;
    gameController.pause();
    startBtn.prop('disabled', false);
  });
  quitBtn.click(function(){
    if (window.isPlaying) {
      gameController.quit();
    }
  });


  // Dealing KeyEvents and Bursting matched keys
  window.score = 0;
  window.missed = 0;
  window.isPlaying = false;
  window.isPaused = false;
  $(document).keydown(function(key) {
    var keycode = key.which;
    var ch = String.fromCharCode(keycode);

    // Add Burst Effect**

    // SPACEBAR KEY
    // if (keycode === 0 || keycode === 32) {
    //   key.preventDefault();
    //   if(!window.isPlaying) {
    //     gameController.play();
    //     window.isPlaying = true;
    //   }
    //   else {
    //     gameController.pause();
    //     window.isPlaying = false;
    //   }
    // }

    // ESCAPE KEY
    if (keycode === 27) {
      key.preventDefault();
      if(window.isPlaying) {
        gameController.quit();
      }
    }
    else {
      var len = $('#'+keycode).length;
      if(len == 1 && !window.isPaused) {
        var letterObject = window.drops.filter(function(drop) {
          return drop.domElement[0].id == keycode;
        });
        removeLetter(letterObject);
        window.score++;
        $('#score').text(window.score);
      }
    }

    function removeLetter(obj) {
      clearInterval(obj[0].setIntervalId);
      $('#'+keycode).remove();
      obj = null;
    }

  });


});


//Score Updater
