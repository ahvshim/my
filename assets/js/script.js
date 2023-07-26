document.getElementById('expense-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  var formData = new FormData(event.target);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbzHxJpcCy3iyU5PsSM8chDdF-vtnbDhuQl0aeOyjfOj-xiuLwiSag4gucTehIPdfJiE/exec', true);

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
  xhr.onload = function () {
    if (xhr.status === 200) {
      
      document.getElementById('expense-form').style.display = 'none';
      document.querySelector('.success-message').style.display = 'block';
    } else {
      
      document.getElementById('expense-form').innerHTML = '<p>Something went wrong. Please try again later.</p>';
    }
  };

  var params = new URLSearchParams(formData).toString();
  xhr.send(params);
});
