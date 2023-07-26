

document.getElementById('expense-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  var formData = new FormData(event.target);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbzHxJpcCy3iyU5PsSM8chDdF-vtnbDhuQl0aeOyjfOj-xiuLwiSag4gucTehIPdfJiE/exec', true);

  xhr.setRequestHeader('Expense-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function () {
    if (xhr.status === 200) {
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




