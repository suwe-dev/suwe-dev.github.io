/**
 * Toggle between hamburger and X mark menu icon
 */
const hamburgerMenu = document.querySelector('#menu-icon');
const navbar_items = document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('fa-bars');
    hamburgerMenu.classList.toggle('fa-xmark');
    navbar.classList.toggle('show-navbar');
});

/*
* Navbar item - active class toggle 
*/

navbar_items.forEach(item => {
  item.addEventListener('click', () => {
    const currentActive = document.querySelector('.navbar a.active');
    currentActive.classList.remove('active');

    item.classList.add('active');

    navbar.classList.remove('show-navbar');
    hamburgerMenu.classList.remove('fa-xmark');
    hamburgerMenu.classList.add('fa-bars');
  });
});

/*
* Windows scroll active toggle
*/

const sections = document.querySelectorAll('section');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(scrn => {
    let offset = scrn.offsetTop - 150;
    let height = scrn.offsetHeight;
    let id = scrn.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navbar_items.forEach(item => {
        item.classList.remove('active');
      });

      const activeItem = document.querySelector('.navbar a[href*="' + id + '"]');
      if (activeItem) {
        activeItem.classList.add('active');
      }
    }
  });
};

/*
*  Snack bar toggle
*/

document.getElementById('enquiry').addEventListener('submit', function(event) {
  event.preventDefault();

  const base_url = 'https://flask-mail-u1xc.onrender.com';
  
  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email-id').value;
  const phone_number = document.getElementById('phone-no').value;
  const email_subject = document.getElementById('email-subject').value;
  const email_body = document.getElementById('email-body').value;

  // Create payload object
  const payload = {
    "username": username,
    "phone_number": phone_number,
    "sender_email": email,
    "email_subject": email_subject,
    "email_body": email_body
  };

  // API integration
  fetch(`${base_url}/send_email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload) 
  })
  .then(response => response.json())
  .then(
    data => {
      // Handle the response data
      console.log('Success:', data);
      showSnackbar(data.message);
  })
  .catch((error) => {
    console.error('Error:', error);
    showSnackbar('Email submission failed');
  })

  event.target.reset();
});

function showSnackbar(message) {
  const snackbar = document.querySelector('.snackbar');
  snackbar.textContent = message;

  snackbar.classList.toggle('snackbar-hidden');
  snackbar.classList.toggle('.snackbar-show');

  // Set timeout to hide the snackbar after 3 seconds
  setTimeout(() => {
      snackbar.classList.toggle('snackbar-hidden');
      snackbar.classList.toggle('.snackbar-show');
  }, 3000);
}
