let rangeline = document.querySelector(".range-line");
let num = document.querySelector(".num");
let passbox = document.querySelector(".passbox");

let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let icon = document.querySelector(".icon")
let btn = document.querySelector(".btn");




// showing slider numbers 
rangeline.addEventListener('input', () => {
    num.textContent = rangeline.value;
});

btn.addEventListener('click', () => {
    passbox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChars = "0123456789";
let symbolChars = "~!@#$%^&*";

//function to generate password

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? numberChars : "";
    allChars += symbol.checked ? symbolChars : "";


    if(allChars == "" || allChars.length == 0) {
        return genPassword;
    }


    let i = 1;
    while(i <= rangeline.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;

};



icon.addEventListener('click', () => {
    if(passbox != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        icon.innerHTML = '<i class="fa-solid fa-check"></i>';
        icon.title = "Password Copied";

        setTimeout(() => {
            icon.innerHTML = '<i class="fa-regular fa-copy"></i>' ;
            icon.title = "";
        }, 3000)
    }
    
});