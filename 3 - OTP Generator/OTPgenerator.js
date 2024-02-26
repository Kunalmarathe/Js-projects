// const inputs = document.querySelectorAll(".input");

// inputs.forEach((input, index) => {
//     input.addEventListener("input", (e) => {
//         const target = e.target;
//         const val = target.value;

//         if (isNaN(val)) {
//             target.value = "";
//             return;
//         }

//         if (val !== "") {
//             const next = target.nextElementSibling;
//             if (next) {
//                 next.focus();
//             }
//         }
//     });

//     input.addEventListener("keyup", (e) => {
//         const target = e.target;
//         const key = e.key.toLowerCase();

//         if (key === "backspace" || key === "delete") {
//             target.value = "";
//             const prev = target.previousElementSibling;
//             if (prev) {
//                 prev.focus();
//             }
//         }
//     });
// });


function generateOTP(length = 4) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

console.log("Numeric OTP of 4 digits:");
console.log(generateOTP());
