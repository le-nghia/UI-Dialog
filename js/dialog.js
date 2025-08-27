

// @athor: LeNghia
// Date: 2024-06-20
// Version: 1.0.0

// Show result function
function showResult(message) {
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    resultDiv.style.display = 'block';
    resultText.textContent = message;

    // Hide after 5 seconds
    setTimeout(() => {
        resultDiv.style.display = 'none';
    }, 2000);
    console.log(setTimeout);
}

// Show messeger function
function showMesseger(message) {
    const messegerDiv = document.getElementById('idMesseger');
    const messegerSpan = document.getElementById('showMesseger');
    messegerDiv.style.display = 'block';
    messegerSpan.textContent = message;

    // Hide after 1.5 seconds
    setTimeout(() => {
        messegerDiv.style.display = 'none';
    }, 1500);
    console.log(setTimeout);
}

// Alert Dialog
function showAlert() {
    alert('This is a simple alert dialog!');
    showResult('Alert dialog was displayed');
}

// Confirm Dialog
function showConfirm() {
    const result = confirm('Do you want to proceed with this action?');
    showResult(result ? 'User confirmed the action' : 'User canceled the action');
}

// Show custom modal
function showModal() {
    document.getElementById("customModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scrolling
}
// Close custom modal
function closeModal() {
    document.getElementById("customModal").style.display = "none";
    document.body.style.overflow = "auto"; // Enable background scrolling
    showResult('Custom modal was closed');
} 

// Show form modal
function showFormModal() {
    document.getElementById("formModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Disable background scrolling
}  
// Close form modal
function closeFormModal() {
    document.getElementById("formModal").style.display = "none";
    document.body.style.overflow = "auto"; // Enable background scrolling
    showResult('Form modal was closed');
}

// Native Dialog
function showNativeDialog() {
    const dialog = document.getElementById('nativeDialog');
    dialog.showModal();
}

function closeNativeDialog() {
    const dialog = document.getElementById('nativeDialog');
    dialog.close();
    showResult('Native dialog was closed');
}   

// Handle form submission
function IsInvalidEmail() {
    const form = document.getElementById('userForm');
    const formData = new FormData(form);
    
    const name = formData.get('userName');
    const email = formData.get('userEmail');
    const message = formData.get('userMessage');
    
    // Check name field
    if (!name) {
        showMesseger('Please enter your name!');
        return false;
    }

    //Check email field
    if (!email) {
        showMesseger('Please enter your email!');
        return false;
    }
    
    // Check email validation
    if(IsInvalidEmail(email)) {
        showMesseger('Please enter a valid email address!');
        return false;
    }

    // Check message field
    if (!message) {
        showMesseger('Please enter your message!');
        return false;
    }   

    // If all validations pass
    showResult(`Form submitted! Name: ${name}, Email: ${email}, Message: ${message}`);
    closeFormModal();
    return true;

    // Email validation function
    function IsInvalidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailPattern.test(email);
    }

    // Alternative: More comprehensive email validation
    function IsInvalidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return !emailPattern.test(email);
    }
}


// Close modals when clicking outside
window.onclick = function(event) {
    const customModal = document.getElementById("customModal");
    const formModal = document.getElementById("formModal");
    const nativeDialog = document.getElementById('nativeDialog');

    if (event.target === customModal) {
        closeModal();
    }
    if (event.target === formModal) {
        closeFormModal();
    }
    if (event.target === nativeDialog) {
        closeNativeDialog();
    }   
};

// Close modals with Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {

        const customModal = document.getElementById("customModal");
        const formModal = document.getElementById("formModal");
        const nativeDialog = document.getElementById('nativeDialog');

        if (customModal.style.display === "block") {
            closeModal();
        }
        if (formModal.style.display === "block") {
            closeFormModal();
        }
        if (nativeDialog.open) {
            closeNativeDialog();
        }
    }
});

// Add some interactive feedback
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});







