document.addEventListener("DOMContentLoaded", function () {
    var sections = document.querySelectorAll('.fade-in-element');
    function isSectionVisible(section) {
        var elementPosition = section.getBoundingClientRect();
        return elementPosition.top >= 0 && elementPosition.bottom <= window.innerHeight;
    }

    function handleSectionVisibility() {
        sections.forEach(function (section) {
            var shouldFadeIn = isSectionVisible(section);

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
