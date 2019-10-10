var Age = parseInt(prompt("Please enter your age. [Minimum age is 20 years old]."));

if (Age < 20) {
    console.log("We can't accept your age on our website.");
    location.href = "https://www.google.com/";
} else {
    console.log("Welcome to Super Mario World!");
}