var $addEntryButton = document.getElementById('add-entry-button');
var $modal = document.querySelector('.modal');
var $body = document.querySelector('body');
var $submitModalButton = document.getElementById('submit-modal-button');
var $sunday = document.getElementById('button-sunday');
var $monday = document.getElementById('button-monday');
var $tuesday = document.getElementById('button-tuesday');
var $wednesday = document.getElementById('button-wednesday');
var $thursday = document.getElementById('button-thursday');
var $friday = document.getElementById('button-friday');
var $saturday = document.getElementById('button-saturday');

var $mondayTable = document.querySelectorAll('.monday-table');
var $tuesdayTable = document.querySelectorAll('.tuesday-table');
var $select = document.querySelectorAll('.sel-border');



$addEntryButton.addEventListener('click', function (event) {
  $modal.className = 'modal';
  $body.className = 'overlay';
});

$submitModalButton.addEventListener('click', function (event) {
  $modal.className = 'hidden';
  $body.className = '';
});

$monday.addEventListener('click', function (event) {
  $mondayTable[0].className = 'row text monday-table';
  $mondayTable[1].className = 'row text monday-table';
  $tuesdayTable[0].className = 'row text tuesday-table hidden';
  $tuesdayTable[1].className = 'row text tuesday-table hidden';
});
})

var days = [
  $sunday, $monday, $tuesday, $wednesday, $thursday, $friday, $saturday];

  for(var i = 0; i < days.length; i++){
    days[i].addEventListener('click', function(event){
      if(days[i] !== event.target){
        days[i].className = 'hidden';
      }
      else{
        day
      }
    })
  }

  // var data = [
  //   {

  //   },
  //   {

  //   },
  //   {

  //   },
  //   {

  //   },
  //   {

  //   },
  //   {

  //   },
  //   {

  //   },
  //   {

  //   }
  // ]

// $sunday.addEventListener('click', function(event){

// })
// document.addEventListener()
