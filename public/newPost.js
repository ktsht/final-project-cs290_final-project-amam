var url1 = null;
var url2 = null;
var url3 = null;
var url4 = null;
var url5 = null;

var postBtn = document.getElementsByClassName('post-button')[0];
var photosCounter = 0;
console.log("number of photos: ", photosCounter);

postBtn.addEventListener('click', function () {

   var addId = document.getElementById('id-attribution-input').value.trim();
   var addCaption = document.getElementById('caption-attribution-input').value.trim();
   var addMates = document.getElementById('mates-attribution-input').value.trim();
   var addNumRooms = document.getElementById('numRooms-attribution-input').value.trim();
   var addAvaiRooms = document.getElementById('avaiRooms-attribution-input').value.trim();
   var addPrice = document.getElementById('price-attribution-input').value.trim();
   var addWalking = document.getElementById('walking-attribution-input').value.trim();
   var addBike = document.getElementById('bike-attribution-input').value.trim();
   var addCar = document.getElementById('car-attribution-input').value.trim();
   var addDescription = document.getElementById('description-text-input').value.trim();

   if(addId.length > 0 && addCaption.length > 0 && addMates.length > 0 &&
      addNumRooms.length > 0 && addAvaiRooms.length > 0 && addPrice.length > 0 &&
      addWalking.length > 0 && addBike.length > 0 && addCar.length > 0 &&
      addDescription.length > 0 && photosCounter > 0){

      console.log("number of photos: ", photosCounter);
      console.log(addId);
      console.log(addCaption);
      console.log(addMates);
      console.log(addNumRooms);
      console.log(addAvaiRooms);
      console.log(addPrice);
      console.log(addWalking);
      console.log(addBike);
      console.log(addCar);
      console.log(addDescription);
      cleanInput();

      var postRequest = new XMLHttpRequest();
      var requestURL = '/postt';
      postRequest.open('POST', requestURL);

      var requestBody = JSON.stringify({
        id: addId,
        caption: addCaption,
        currMates: addMates,
        numRooms: addNumRooms,
        avRooms: addAvaiRooms,
        price: addPrice,
        walking: addWalking,
        bike: addBike,
        car: addCar,
        description: addDescription,

        photo1: url1,
        photo2: url2,
        photo3: url3,
        photo4: url4,
        photo5: url5
      });

      photosCounter = 0;
  }
   else{
      alert('Enter values in all required fields');
   }
   postRequest.setRequestHeader('Content-Type', 'application/json');
   postRequest.send(requestBody);
   cleanUrlInput();
});

// ----------------------------------------------------
// ----------------------------------------------------
var addButton = document.getElementsByClassName('add-button')[0];//gets the add button
var modal_shade = document.getElementById('modal-backdrop');//gets the shade behind it
var modal = document.getElementById('addPhoto-modal');//gets the create modal (the box)

//if the ADD button is clicked, open the modal, and shade the back
addButton.onclick = function(){
   modal_shade.classList.remove('hidden');
   modal.classList.remove('hidden');
}

//gets the ADD button
var contBtn = document.getElementsByClassName('modal-continue-button')[0];
contBtn.addEventListener('click', function () {

   url1 = document.getElementById('url1-attribution-input').value.trim();
   url2 = document.getElementById('url2-attribution-input').value.trim();
   url3 = document.getElementById('url3-attribution-input').value.trim();
   url4 = document.getElementById('url4-attribution-input').value.trim();
   url5 = document.getElementById('url5-attribution-input').value.trim();

   if(url1.length > 0 || url2.length > 0 || url3.length > 0 ||
     url4.length > 0 || url5.length > 0 ){

      photosCounter = 1;
      console.log(url1);
      console.log(url2);
      console.log(url3);
      console.log(url4);
      console.log(url5);
      // cleanUrlInput();

      modal_shade.classList.add('hidden');
      modal.classList.add('hidden');
  }
   else{
      alert('You must provide at least one photo!');
   }
});


var disappear_modal = document.querySelectorAll(".modal-cancel-button, .modal-close-button");//by class returns an array-like object
//if the cancel button or the close button (x) are clicked, hide the modal and shade
for(var i = 0; i < disappear_modal.length; i++){
   disappear_modal[i].onclick = function() {
      modal_shade.classList.add('hidden');
      modal.classList.add('hidden');
      cleanUrlInput();
   }
}

//if the modal is open, and user clicked outside of it, hide the modal and shade
window.onclick = function(event) {
   if (event.target == modal) {
      modal_shade.classList.add('hidden');
      modal.classList.add('hidden');
      cleanUrlInput();
   }
}
function cleanUrlInput () {
  document.getElementById('url1-attribution-input').value = "";
  document.getElementById('url2-attribution-input').value = "";
  document.getElementById('url3-attribution-input').value = "";
  document.getElementById('url4-attribution-input').value = "";
  document.getElementById('url5-attribution-input').value = "";
}

function cleanInput() {
  document.getElementById('id-attribution-input').value = "";
  document.getElementById('caption-attribution-input').value = "";
  document.getElementById('mates-attribution-input').value = "";
  document.getElementById('numRooms-attribution-input').value = "";
  document.getElementById('avaiRooms-attribution-input').value = "";
  document.getElementById('price-attribution-input').value = "";

  document.getElementById('walking-attribution-input').value = "";
  document.getElementById('bike-attribution-input').value = "";
  document.getElementById('car-attribution-input').value = "";
  document.getElementById('description-text-input').value = "";
}
