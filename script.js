document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Parandalon dërgimin e formës

    const checkInDate = new Date(document.getElementById('check-in-date').value);
    const checkOutDate = new Date(document.getElementById('check-out-date').value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Rregulloni që të krahasohen vetëm datat pa orët

    let message = "";
    const chooseRoomButton = document.getElementById('choose-room-button');

    if (checkInDate >= today && checkOutDate > checkInDate) {
        message = "Është rezervuar me sukses qëndrimi në hotelin tonë në këto data. Faleminderit.";
        chooseRoomButton.style.display = 'block'; // Shfaq butonin
    } else {
        message = "Ju nuk mund të rezervoni në këto data, provoni në ndonjë datë tjetër. Faleminderit.";
        chooseRoomButton.style.display = 'none'; // Fshih butonin nëse rezervimi nuk është i suksesshëm
    }

    document.getElementById('message').textContent = message;
});

