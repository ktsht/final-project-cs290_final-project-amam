/*
 * Add your JavaScript to this file to complete the assignment.
 */
/* push button =>#modal-backdrop, #create-house-modal */

// price filtering
var price = document.getElementById('price');
price.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("== Container clicked, event.target:", event.target);
        var backdrop = document.getElementById('price-modal-backdrop');
        backdrop.classList.remove('hidden');
        var dialog = document.getElementById('create-price-modal');
        dialog.classList.remove('hidden');
});

var close = document.getElementsByClassName('price-modal-close-button');
close[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== Cancel clicked, event.target:", event.target);
        document.getElementsByClassName('price-text-input')[0].value = "";
        var backdrop = document.getElementById('price-modal-backdrop');
        backdrop.classList.toggle('hidden');
        var dialog = document.getElementById('create-price-modal');
        dialog.classList.toggle('hidden');
});

var cancel = document.getElementsByClassName('price-modal-cancel-button');
cancel[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== Cancel clicked, event.target:", event.target);
        document.getElementsByClassName('price-text-input')[0].value = "";
        var backdrop = document.getElementById('price-modal-backdrop');
        backdrop.classList.toggle('hidden');
        var dialog = document.getElementById('create-price-modal');
        dialog.classList.toggle('hidden');
});

var acceptPrice = document.getElementsByClassName('price-modal-accept-button');
acceptPrice[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== insert button clicked, event.target:", event.target);
        var textInput = document.getElementsByClassName('price-text-input'); // input from user for flitering price
        var flag;
        while(flag){
                if(textInput[0].value){
                        //filterContents(textInput.value);
                        document.getElementsByClassName('price-text-input').value = "";
                        var backdrop = document.getElementById('price-modal-backdrop');
                        backdrop.classList.toggle('hidden');
                        var dialog = document.getElementById('create-price-modal');
                        dialog.classList.toggle('hidden');
                        flag = 0;
                } else {
                        alert("Fill the boxes!");
                        flag = 1;
                }
        }
        window.location.href = "/maxPrice/"+textInput[0].value;


});

// major filtering
var major = document.getElementById('major');
major.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("== Container clicked, event.target:", event.target);
        var backdrop = document.getElementById('major-modal-backdrop');
        backdrop.classList.remove('hidden');
        var dialog = document.getElementById('create-major-modal');
        dialog.classList.remove('hidden');
});

var close = document.getElementsByClassName('major-modal-close-button');
close[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== Cancel clicked, event.target:", event.target);
        document.getElementsByClassName('major-text-input')[0].value = "";
        var backdrop = document.getElementById('major-modal-backdrop');
        backdrop.classList.toggle('hidden');
        var dialog = document.getElementById('create-major-modal');
        dialog.classList.toggle('hidden');
});

var cancel = document.getElementsByClassName('major-modal-cancel-button');
cancel[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== Cancel clicked, event.target:", event.target);
        document.getElementsByClassName('major-text-input')[0].value = "";
        var backdrop = document.getElementById('major-modal-backdrop');
        backdrop.classList.toggle('hidden');
        var dialog = document.getElementById('create-major-modal');
        dialog.classList.toggle('hidden');
});

var acceptMajor = document.getElementsByClassName('major-modal-accept-button');
acceptMajor[0].addEventListener('click', function(event){
        event.preventDefault();
        console.log("== insert button clicked, event.target:", event.target);
        var textInput = document.getElementsByClassName('major-text-input'); // input from user for flitering major
        var flag;
        while(flag){
                if(textInput[0].value){
                        //filterContents(textInput.value);
                        document.getElementsByClassName('major-text-input').value = "";
                        var backdrop = document.getElementById('major-modal-backdrop');
                        backdrop.classList.toggle('hidden');
                        var dialog = document.getElementById('create-major-modal');
                        dialog.classList.toggle('hidden');
                        flag = 0;
                } else {
                        alert("Fill the boxes!");
                        flag = 1;
                }
        }
        window.location.href = "/major/"+textInput[0].value;


});
