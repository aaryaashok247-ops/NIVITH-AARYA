const text = `Dear My Love,

This letter holds everything my heart struggles to say out loud.
From the smallest moments to the biggest dreams,
loving you has been my favourite journey.

Through distance, time, and change,
you have always been my constant,
my calm, my home.

And as we stand so close to forever,
I just want you to know —
I choose you, today and always.

Yours, forever ❤️`;

const typedText = document.getElementById("typedText");
const button = document.getElementById("readBtn");
const letterBox = document.getElementById("letterBox");

let index = 0;

button.addEventListener("click", () => {
    button.style.display = "none";
    letterBox.classList.remove("hidden");
    typeEffect();
});

function typeEffect() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}
