

document.getElementById('expense-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  var formData = new FormData(event.target);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbz2t6I2Fsx8FBKH8IRN8MOdJ8y-pZihsxgsJPlJfsHPI95N759iQX-YR3dpoX1YUIRK/exec', true);

  xhr.setRequestHeader('Expense-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Show success message and change color
      var formElement = document.getElementById('expense-form');
      formElement.innerHTML = '<p class="success-message">Expense Added!</p>';
      formElement.classList.add('expense-added');
    } else {
      // Show error message
      document.getElementById('expense-form').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
  };

  var params = new URLSearchParams(formData).toString();
  xhr.send(params);
});




