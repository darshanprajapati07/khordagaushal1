// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Upload Screenshot Functionality
  const paymentScreenshotInput = document.getElementById('paymentScreenshot');
  const uploadScreenshotBtn = document.getElementById('uploadScreenshot');
  
  uploadScreenshotBtn.addEventListener('click', function() {
    const file = paymentScreenshotInput.files[0];
  
    if (file) {
      // Validate the file type
      const validExtensions = ['image/jpeg', 'image/png'];
      if (!validExtensions.includes(file.type)) {
        uploadMessage.textContent = 'Invalid file type. Please upload a PNG or JPG image.';
        uploadMessage.style.color = 'red';
        return;
      }
  
      // Mock file upload (you'll need to implement real backend handling for this)
      uploadMessage.textContent = 'Uploading...';
      setTimeout(() => {
        uploadMessage.textContent = 'Payment screenshot uploaded successfully!';
        uploadMessage.style.color = 'green';
        submitContainer.style.display = 'block';  // Show submit button
      }, 2000);  // Simulate upload time
    } else {
      uploadMessage.textContent = 'Please select a file to upload.';
      uploadMessage.style.color = 'red';
    }
  });
  
  // Submit Donation Button Functionality
  const submitDonationBtn = document.getElementById('submitDonation');
  
  submitDonationBtn.addEventListener('click', function() {
    const donationAmount = amountSelect.value === 'other' ? customAmountInput.value : amountSelect.value;
  
    if (donationAmount) {
      // Mock submission (you'll need to implement real backend handling for this)
      successMessage.textContent = `Thank you for your donation of ₹${donationAmount}! Your donation has been successfully processed.`;
      successMessage.style.color = 'blue';
  
      // Hide the submit button after submission
      submitContainer.style.display = 'none';
    } else {
      successMessage.textContent = 'Please provide a valid donation amount.';
      successMessage.style.color = 'red';
    }
  });
  