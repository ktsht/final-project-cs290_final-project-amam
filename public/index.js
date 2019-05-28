/*
 * Add your JavaScript to this file to complete the assignment.
 */
/* push button =>#modal-backdrop, #create-house-modal */

var price = document.getElementById('price');
price.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("== Container clicked, event.target:", event.target);
        var backdrop = document.getElementById('modal-backdrop');
        backdrop.classList.remove('hidden');
        var dialog = document.getElementById('create-house-modal');
        dialog.classList.remove('hidden');
});

var close = document.getElementsByClassName('modal-close-button');
close[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== Cancel clicked, event.target:", event.target);
        document.getElementById('house-text-input-1').value = "";
        var backdrop = document.getElementById('modal-backdrop');
        backdrop.classList.toggle('hidden');
        var dialog = document.getElementById('create-house-modal');
        dialog.classList.toggle('hidden');
});

var cancel = document.getElementsByClassName('modal-cancel-button');
cancel[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== Cancel clicked, event.target:", event.target);
        document.getElementById('house-text-input-1').value = "";
        var backdrop = document.getElementById('modal-backdrop');
        backdrop.classList.toggle('hidden');
        var dialog = document.getElementById('create-house-modal');
        dialog.classList.toggle('hidden');
});

var acceptTwit = document.getElementsByClassName('modal-accept-button');
acceptTwit[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== insert button clicked, event.target:", event.target);
        var textInput = document.getElementById('house-text-input-1');
        if(textInput.value){
                //filterContents(textInput.value);
                document.getElementById('house-text-input-1').value = "";
                var backdrop = document.getElementById('modal-backdrop');
                backdrop.classList.toggle('hidden');
                var dialog = document.getElementById('create-house-modal');
                dialog.classList.toggle('hidden');
        } else {
                alert("Fill the boxes!");
        }
});
