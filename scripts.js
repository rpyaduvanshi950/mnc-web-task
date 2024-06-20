document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    changeSlide(1);
});

document.getElementById('prevBtn').addEventListener('click', function() {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
}

// Initialize the first slide
slides[currentSlide].style.display = 'block';

// Blog carousel functionality
let currentBlogSlide = 0;
const blogSlides = document.querySelectorAll('.blog-slide');
const totalBlogSlides = blogSlides.length;

function changeBlogSlide(direction) {
    blogSlides[currentBlogSlide].style.display = 'none';
    currentBlogSlide = (currentBlogSlide + direction + totalBlogSlides) % totalBlogSlides;
    blogSlides[currentBlogSlide].style.display = 'block';
}

function autoChangeBlogSlide() {
    changeBlogSlide(1);
    setTimeout(autoChangeBlogSlide, 3000); // Change slide every 5 seconds
}

// Initialize the first blog slide and start the auto-slide
blogSlides[currentBlogSlide].style.display = 'block';
setTimeout(autoChangeBlogSlide, 3000);


    // Function to toggle between show more and view less
    function showMoreItems() {
        var hiddenItems = document.querySelectorAll(".event-card.hidden");
        hiddenItems.forEach(function (item) {
            item.style.display = "block";
            item.classList.remove("hidden");
        });
        document.getElementById("show-more-btn").style.display = "none";
        document.getElementById("show-less-btn").style.display = "block";
    }

    // Function to show less items
    function showLessItems() {
        var allItems = document.querySelectorAll(".event-card");
        allItems.forEach(function (item, index) {
            if (index >= 3) { // Adjust the number based on your initial display
                item.style.display = "none";
                item.classList.add("hidden");
            }
        });
        document.getElementById("show-more-btn").style.display = "block";
        document.getElementById("show-less-btn").style.display = "none";
    }

    // Event listeners for the buttons
    document.getElementById("show-more-btn").addEventListener("click", showMoreItems);
    document.getElementById("show-less-btn").addEventListener("click", showLessItems);



