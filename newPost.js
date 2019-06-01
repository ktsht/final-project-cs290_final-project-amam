var acceptBtn = document.getElementsByClassName('accept-button')[0];

acceptBtn.addEventListener('click', function () {

   var addName = document.getElementById('name-attribution-input').value.trim();
   var addRooms = document.getElementById('room-attribution-input').value.trim();
   var addMates = document.getElementById('mates-attribution-input').value.trim();
   var addPrice = document.getElementById('price-attribution-input').value.trim();
   var addAddress = document.getElementById('address-attribution-input').value.trim();
   var addDescription = document.getElementById('description-text-input').value.trim();

   if(addName.length > 0 && addRooms.length > 0 && addMates.length > 0 &&
     addPrice.length > 0 && addAddress.length >= -1 && addDescription.length > 0){
      //insertNewTwit(addTxt, addAuthor);//line 79 and 78 can go in here, and then can do on lines 85/86 addTxt.value = "";
      console.log(addName);
      console.log(addRooms);
      console.log(addMates);
      console.log(addPrice);
      console.log(addAddress);
      console.log(addDescription);
   }
   else{
      alert('Enter values in all required fields');
   }
   cleanInput();
});

function cleanInput() {
  document.getElementById('name-attribution-input').value = "";
  document.getElementById('room-attribution-input').value = "";
  document.getElementById('mates-attribution-input').value = "";
  document.getElementById('price-attribution-input').value = "";
  document.getElementById('address-attribution-input').value = "";
  document.getElementById('description-text-input').value = "";
}

cleanInput();
