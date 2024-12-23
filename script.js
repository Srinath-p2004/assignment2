// script.js
$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const dob = $('#dob').val();
        const gender = $('#gender').val();

        if (!name || !email || !phone || !dob || !gender) {
            alert('All fields are required!');
            e.preventDefault();
        }
    });
});
