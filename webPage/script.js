const navToggle = document.querySelector(".header-nav__toggle");
const navLinks = document.querySelector(".header-nav__links");

if (navToggle && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLElement && event.target.matches("a")) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

// Bestseller Section - Filter Pills
const filterPills = document.querySelectorAll(".filter-pill");
if (filterPills.length > 0) {
    filterPills.forEach((pill) => {
        pill.addEventListener("click", () => {
            filterPills.forEach((p) => p.classList.remove("filter-pill--active"));
            pill.classList.add("filter-pill--active");
        });
    });
}

// Bestseller Section - Variant Dots
const variantDots = document.querySelectorAll(".variant-dot");
if (variantDots.length > 0) {
    variantDots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const product = dot.closest(".bestseller-product");
            if (product) {
                const dotsInProduct = product.querySelectorAll(".variant-dot");
                dotsInProduct.forEach((d) => d.classList.remove("variant-dot--active"));
                dot.classList.add("variant-dot--active");
            }
        });
    });
}

// Gift notes: match left image height to right grid height on desktop
function adjustGiftNotesHero() {
    const leftImg = document.querySelector('.gift-notes__media img');
    const rightGrid = document.querySelector('.gift-notes__grid');
    if (!leftImg || !rightGrid) return;
    if (window.innerWidth <= 1024) {
        leftImg.style.height = 'auto';
        return;
    }
    const h = rightGrid.getBoundingClientRect().height;
    leftImg.style.height = h + 'px';
}

window.addEventListener('load', adjustGiftNotesHero);
window.addEventListener('resize', () => {
    clearTimeout(window._adjustGiftNotesTimer);
    window._adjustGiftNotesTimer = setTimeout(adjustGiftNotesHero, 120);
});


