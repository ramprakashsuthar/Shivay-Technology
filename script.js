
// Sticky header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu function
function togglemenu() {
    const menutoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
function toggleServicesMenu() {
    const servicesLink = document.getElementById('megaMenu'); // Services link
    const servicesSubMenu = document.querySelector('.service-submenu'); // Services submenu
    const hireDeveloper = document.getElementById('hireDeveloper');
    servicesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        servicesSubMenu.classList.toggle('active'); // Toggle the 'active' class on the submenu
    });
    hireDeveloper.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        servicesSubMenu.classList.toggle('active'); // Toggle the 'active' class on the submenu
    });
    
}
toggleServicesMenu(); // Call the function to activate the click event


// Handle service list click
document.addEventListener("DOMContentLoaded", function () {
    const serviceList = document.querySelectorAll('.services-list .tabWrapper');
    const buttonHignlight=document.querySelectorAll('.services-list .tabWrapper .headertablinks .srvc-tab-link ')
    const serviceDetails = document.querySelectorAll('.service-details');
    const hireList = document.querySelectorAll('.hire-item');
    const hireDetails = document.querySelectorAll('.hire-details');

    function hideAllDetails(details) {
        details.forEach(detail => {
            detail.style.display = 'none';
        });
    }

    serviceList.forEach(service => {
        service.addEventListener('click', function () {
            const serviceId = this.getAttribute('data-service');
            hideAllDetails(serviceDetails);
            document.getElementById(serviceId).style.display = 'block';
            
        });
    });

    hireList.forEach(hire => {
        hire.addEventListener('click', function () {
            const hireId = this.getAttribute('data-service') + '-hire';
            hideAllDetails(hireDetails);
            document.getElementById(hireId).style.display = 'block';
        });
    });
});
// Get all the tabWrapper elements
const tabWrappers = document.querySelectorAll('.tabWrapper');

const hireItems = document.querySelectorAll('.hire-item');


// Add 'active' class to the first tabWrapper by default
tabWrappers[0].classList.add('active');
hireItems[0].classList.add('active');


// Iterate through each tabWrapper and add a click event listener
tabWrappers.forEach(tabWrapper => {
    tabWrapper.addEventListener('click', function() {
        // Remove the active class from all tabWrappers
        tabWrappers.forEach(wrapper => {
            wrapper.classList.remove('active');
        });

        // Add the active class only to the clicked tabWrapper
        this.classList.add('active');
    });
});
hireItems.forEach(hireItem => {
    hireItem.addEventListener('click', function() {
        // Remove the active class from all tabWrappers
        hireItems.forEach(hire => {
            hire.classList.remove('active');
        });

        // Add the active class only to the clicked tabWrapper
        this.classList.add('active');
    });
});



// Handle tab clicks
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            const target = this.getAttribute('href');

            tabContents.forEach(content => {
                content.classList.remove('show', 'active');
            });

            const targetContent = document.querySelector(target);
            targetContent.classList.add('show', 'active');

            tabs.forEach(tabItem => {
                tabItem.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabContentService");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content and mark the button as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be displayed on page load (optional)
document.getElementById("servTab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";

// Estimate button toggle
// JavaScript code


