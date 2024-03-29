/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Kenneth Nkosizile Madebe";

const currentYear = 2024;

const profilePicture = "images/placeholder.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = `${currentYear}`;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `'Profile image of ${fullName}'`);

/* Step 5 - Array */

let myFoodies = ['Inhloko', 'Amagwinya', 'Pizza', 'Burger', 'Fried Rice'];

foodElement.innerHTML = `${myFoodies}`;

let meat = ['Chicken'];

myFoodies.push(meat);

foodElement.innerHTML += `<br>${myFoodies}`;

myFoodies.shift();

foodElement.innerHTML += `<br>${myFoodies}`;

myFoodies.pop();

foodElement.innerHTML += `<br>${myFoodies}`;




