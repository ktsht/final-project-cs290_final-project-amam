

var dropDown = document.getElementsByClassName("dropdown");
var inputBox = document.getElementsByClassName("input-box")[3];

function dropDownFunc(event) {
    document.getElementsByClassName("dropdown").classList.toggle("show");
};

inputBox.addEventListener('click', function (event){
    dropDownFunc();
});

var button = document.getElementsByClassName('sign-up-button')[0];

button.addEventListener('click', function (event){
    var firstNameInput = document.getElementById('first-name-input').value;
    var lastNameInput = document.getElementById('last-name-input').value;
    var majorInput = document.getElementById('major-input').value;
    var yearInput = document.getElementById('year-input').value;
    var usernameInput = document.getElementById('username-input').value;
    var passwordInput = document.getElementById('password-input').value;
    if (!(firstNameInput || firstNameInput.value)){
        alert("Please fill all required fields.")
    }
    if (!(firstNameInput || firstNameInput.value)){
        alert("Please fill all required fields.")
    }
    if (!(lastNameInput || lastNameInput.value)){
        alert("Please fill all required fields.")
    }
    if (!(majorInput || majorInput.value)){
        alert("Please fill all required fields.")
    }
    if (!(yearInput || yearInput.value)){
        alert("Please fill all required fields.")
    }
    if (!(usernameInput || usernameInput.value)){
        alert("Please fill all required fields.")
    }
    if (!(passwordInput || passwordInput.value)){
        alert("Please fill all required fields.")
    }
});