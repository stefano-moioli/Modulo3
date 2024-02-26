document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in-element');
    function isSectionVisible(section) {
        const elementPosition = section.getBoundingClientRect();
        return elementPosition.top >= 0 && elementPosition.bottom <= window.innerHeight;
    }

    function handleSectionVisibility() {
        sections.forEach(function (section) {
            const shouldFadeIn = isSectionVisible(section);

            if (shouldFadeIn) {
                section.classList.add('fade-in');
            } else {
                section.classList.remove('fade-in');
            }
        });
    }

    window.addEventListener('scroll', function () {
        handleSectionVisibility();
    });

    handleSectionVisibility();
});
