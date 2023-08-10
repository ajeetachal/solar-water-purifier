const nav = document.querySelector('nav');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        nav.classList.add('sticky');
        toggleNavLinksColor(true); // Add blue color to links
    } else {
        nav.classList.remove('sticky');
        toggleNavLinksColor(false); // Remove blue color from links
    }

    prevScrollPos = currentScrollPos;
});
// toogle between sticky navbar color 
function toggleNavLinksColor(addBlueColor) {
    const navLinks = document.querySelectorAll('nav a');
    const blueColorClass = 'blue-text'; // Define a class for blue color

    navLinks.forEach(link => {
        if (addBlueColor) {
            link.classList.add(blueColorClass);
        } else {
            link.classList.remove(blueColorClass);
        }
    });
}
// faq 
function toggleAnswer(elementId) {
    var answer = document.getElementById(elementId);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}