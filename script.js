document.addEventListener("DOMContentLoaded", 
    function() {
        const navItems = document
            .querySelectorAll(".hero .hero-content .hero-nav ul li a");
            navItems.forEach(item => {
                item.addEventListener("click", function() {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });