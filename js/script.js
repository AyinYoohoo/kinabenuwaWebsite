// Navbar Scroll Effect
let navbarDiv = document.querySelector('.navbar'); 
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});

// Navbar Collapse Behavior
const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

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

    // If the search bar is empty, reset all elements to be visible
    if (!searchTerm) {
        searchableElements.forEach(element => {
            element.style.display = '';
            removeHighlights(element); // Remove highlights when reset
        });
        return;
    }

    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            element.style.display = ''; // Show element if it matches
            highlightText(element, searchTerm); // Highlight matching text
        } else {
            element.style.display = 'none'; // Hide element if it doesn't match
        }
    });
});

// Optional: Search when the user presses 'Enter' in the search bar
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Function to highlight the search term within the element
function highlightText(element, searchTerm) {
    let innerHTML = element.innerHTML;
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Regex to find matching terms
    innerHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
    element.innerHTML = innerHTML;
}

// Function to remove highlights when resetting
function removeHighlights(element) {
    let innerHTML = element.innerHTML;
    innerHTML = innerHTML.replace(/<span class="highlight">|<\/span>/g, ''); // Remove the span tags
    element.innerHTML = innerHTML;
}
