const vendangesStart = new Date('2025-09-01');
const vendangesEnd = new Date('2025-09-30');
const now = new Date();
let message;

if (now > vendangesEnd) {
    message = "Les vendanges sont terminées.";
} else if (now < vendangesStart) {
    message = "Non :'(";
} else {
    message = "Les vendanges sont en cours !";
}

document.getElementById('vendanges-status').innerText = message;
