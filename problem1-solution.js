// Function to validate the contact name
function validateName(name) {
  const nameRegex = /^[A-Za-z\s]{1,20}$/;
  return nameRegex.test(name);
}

// Function to validate the mobile number
function validateMobile(mobile) {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}

// Function to validate the email address
function validateEmail(email) {
  const emailRegex = /^[A-Za-z][A-Za-z0-9.]{1,10}@[A-Za-z]{2,20}\.[A-Za-z]{2,10}$/;
  return emailRegex.test(email);
}

// Function to display the error message
function showError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}

// Function to hide the error message
function hideError() {
  const errorDiv = document.getElementById('error');
  errorDiv.style.display = 'none';
}

// Function to add a new contact to the table
function addContact(name, mobile, email) {
  const tableBody = document.querySelector('#summaryTable tbody');
  const newRow = tableBody.insertRow(-1);

  const nameCell = newRow.insertCell(0);
  const mobileCell = newRow.insertCell(1);
  const emailCell = newRow.insertCell(2);

  nameCell.textContent = name;
  mobileCell.textContent = mobile;
  emailCell.textContent = email;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const mobileInput = document.getElementById('mobile');
  const emailInput = document.getElementById('email');

  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();
  const email = emailInput.value.trim();

  // Validate name, mobile, and email
  if (!validateName(name) || !validateMobile(mobile) || !validateEmail(email)) {
    showError('Invalid Input!');
    return;
  }

  // If validations pass, hide error, reset form, and add contact to the table
  hideError();
  nameInput.value = '';
  mobileInput.value = '';
  emailInput.value = '';
  addContact(name, mobile, email);
}

// Attach event listener to the form for "Add Vendor" button click
document.getElementById('submit').addEventListener('click', handleSubmit);