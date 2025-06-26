let navbarDiv = document.querySelector('.navbar'); 
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng'); // Add the class to navbar when scrolled
    } else {
        navbarDiv.classList.remove('navbar-cng'); // Remove the class when back at the top
    }
});

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

// Show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// Hide sidebar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if (e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn") {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// Stop transition and animation during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// Highlight the current page link as active
window.addEventListener('load', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // If the link's href matches the current URL, add the active class
        if (link.href === window.location.href) {
            link.closest('.nav-item').classList.add('active');
        }
    });
});

// Search functionality - Filter content based on search input
const searchInput = document.getElementById('search-bar');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchableElements = document.querySelectorAll('.searchable');

    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            element.style.display = ''; // Show the element if it matches the search term
        } else {
            element.style.display = 'none'; // Hide the element if it doesn't match
        }
    });
});

// Optional: Search when the user presses 'Enter' in the search bar
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});
