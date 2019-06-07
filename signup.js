var button = document.getElementsByClassName('sign-up-button')[0];

button.addEventListener('click', function (event){
    var firstNameInput = document.getElementById('first-name-input').value;
    var lastNameInput = document.getElementById('last-name-input').value;
    var majorInput = document.getElementById('major-input').value;
    var yearOption = document.getElementById('dropdown-content').value;
    console.log("yearOption:", yearOption);
    var usernameInput = document.getElementById('username-input').value;
    var passwordInput = document.getElementById('password-input').value;
    if (!(firstNameInput || firstNameInput.value)){
        alert("Please fill all required fields.")
    }
    else if (!(firstNameInput || firstNameInput.value)){
        alert("Please fill all required fields.")
    }
    else if (!(lastNameInput || lastNameInput.value)){
        alert("Please fill all required fields.")
    }
    else if (!(majorInput || majorInput.value)){
        alert("Please fill all required fields.")
    }
    else if (yearOption === "--Select--"){
        console.log("inside this if statement");
        alert("Please select a year from the drop down list.")
    }
    else if (!(usernameInput || usernameInput.value)){
        alert("Please fill all required fields.")
    }
    else if (!(passwordInput || passwordInput.value)){
        alert("Please fill all required fields.")
    }
});