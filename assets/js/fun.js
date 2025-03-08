const confettiButton = document.getElementById('confettiButton');
const confettiContainer = document.getElementById('confettiContainer');
const partyButton = document.getElementById('partyButton');
const partyImage = document.getElementById('partyImage');

confettiButton.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
});

partyButton.addEventListener('click', () => {
    partyImage.classList.add('active');
    setTimeout(() => {
        partyImage.classList.remove('active');
    }, 4000);
});
