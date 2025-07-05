function passwordGenerator() {
    const upperCase = "QWEASDRTUYIOPLKJHGFCZXBVNM";
    const lowerCase = "ghqwerbncmvksdaftuyioplzjx";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_[]";

    let characters = "",password = "",allChar = upperCase + lowerCase + numbers + symbols;
    
    const pref = document.getElementsByName("preferences");

    characters += pref[0].checked ? symbols : "";
    characters += pref[1].checked ? numbers : "";
    characters += pref[2].checked ? upperCase : "";
    characters += pref[3].checked ? lowerCase : "";

    if (characters.length === 0)
        characters = allChar;

    const slider = document.querySelector(".slider");

    for (let i = 0; i < slider.value; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    const passwordBox = document.getElementById("pass");
    passwordBox.value = password;
}

function copyPassword() {
    const passwordBox = document.getElementById("pass");
    passwordBox.select();
    document.execCommand("copy");
}

function sliderDisplay() {
    const slider = document.querySelector(".slider");
    const label = document.querySelector(".slider_label");
    label.textContent = `${slider.value} characters`;
}