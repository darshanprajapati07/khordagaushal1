// // Initial counts
// const cowTarget = 50;     // Example number of cows
// const donorTarget = 100;  // Example number of donors
// const workerTarget = 20;  // Example number of workers

// // Function to increment the count with animation
// function countUp(element, target) {
//     let currentCount = 0;
//     const increment = Math.ceil(target / 100); // Increment step for smooth animation
//     const interval = setInterval(() => {
//         currentCount += increment;
//         if (currentCount >= target) {
//             element.textContent = target + "+"; // Add the "+" symbol after the count
//             clearInterval(interval);
//         } else {
//             element.textContent = currentCount + "+";
//         }
//     }, 20); // Speed of the counting animation
// }

// // When the document loads, start counting
// document.addEventListener('DOMContentLoaded', () => {
//     const cowElement = document.getElementById('cowCount');
//     const donorElement = document.getElementById('donorCount');
//     const workerElement = document.getElementById('workerCount');

//     countUp(cowElement, cowTarget);
//     countUp(donorElement, donorTarget);
//     countUp(workerElement, workerTarget);
// });
document.getElementById('menu-icon').addEventListener('click', function() {
    var menuList = document.getElementById("menu-list");
    menuList.classList.toggle("open");
});
function openNewPageHome() {
    // Specify the path to the new HTML file you want to open
    window.location.href = "abt.html";
}
