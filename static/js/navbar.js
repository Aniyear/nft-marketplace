document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggleProfile = document.getElementById('dropdownToggleProfile');
    var dropdownToggleLang = document.getElementById('dropdownToggleLang');
    var dropdownContentProfile = document.querySelector('.dropdown-content-profile');
    var dropdownContentLang = document.querySelector('.dropdown-content-lang');
    var dropdownContentCart = document.querySelector('.dropdown-content-cart');
    var dropdownToggleCart = document.getElementById('dropdownToggleCart');
    var dropdownToggleCalculator = document.getElementById('dropdownToggleCalculator');
    var dropdownContentCalculator = document.querySelector('.dropdown-content-calculator')
    // Toggle dropdown
    dropdownToggleLang.onclick = function(event) {
        event.stopPropagation(); // Stop the event from propagating to the document
        dropdownContentLang.style.display = (dropdownContentLang.style.display == 'block') ? 'none' : 'block';
        dropdownContentProfile.style.display = 'none';
        dropdownContentCart.style.display = 'none';
        dropdownContentCalculator.style.display = 'none';
    };

    dropdownToggleProfile.onclick = function(event) {
        event.stopPropagation(); // Stop the event from propagating to the document
        dropdownContentProfile.style.display = (dropdownContentProfile.style.display == 'block') ? 'none' : 'block';
        dropdownContentLang.style.display = 'none';
        dropdownContentCart.style.display = 'none';
        dropdownContentCalculator.style.display = 'none';
    };

    dropdownToggleCart.onclick = function(event) {
        event.stopPropagation();
        dropdownContentCart.style.display = (dropdownContentCart.style.display == 'block') ? 'none' : 'block';
        dropdownContentLang.style.display = 'none';
        dropdownContentProfile.style.display = 'none';
        dropdownContentCalculator.style.display = 'none';
    };

    dropdownToggleCalculator.onclick = function(event) {
        event.stopPropagation(); // Stop the event from propagating to the document
        dropdownContentCalculator.style.display = (dropdownContentCalculator.style.display == 'block') ? 'none' : 'block';
        dropdownContentProfile.style.display = 'none';
        dropdownContentCart.style.display = 'none';
        dropdownContentLang.style.display = 'none';
    };

    // Clicking anywhere outside the dropdown should close it
    document.addEventListener('click', function(event) {
        if (event.target != dropdownToggleProfile) {
            dropdownContentProfile.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target != dropdownToggleLang) {
            dropdownContentLang.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target != dropdownToggleCart) {
            dropdownContentCart.style.display = 'none';
        }
    });

});