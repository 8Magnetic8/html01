// Array of banner images
const bannerImages = [
    './imge/banner/1.jpg',
    './imge/banner/2.jpg',
    './imge/banner/3.jpg',
    './imge/banner/4.jpg',
    './imge/banner/5.jpg',
    './imge/banner/6.jpg',
    './imge/banner/7.jpg',
    './imge/banner/8.jpg',
    './imge/banner/9.jpg',
    './imge/banner/10.jpg'
];

// Initial image index
let currentIndex = 0;

// Get the banner image element
const bannerImageElement = document.getElementById('bannerImage');

// Function to change the banner image
function changeBannerImage() {
    // Update the image source
    currentIndex = (currentIndex + 1) % bannerImages.length;
    bannerImageElement.src = bannerImages[currentIndex];
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeBannerImage, 5000);
