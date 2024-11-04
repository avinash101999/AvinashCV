// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.emoji-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('profile-section').classList.add('funct')
            document.getElementById('profile-section').classList.remove('hide')
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
            activateSection(targetId);
        });
    });

    // Function to activate section with animation
    function activateSection(id) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(id);
        targetSection.classList.add('active');
        applyAnimation(targetSection);
    }

    // Function to apply different animations to sections
    function applyAnimation(section) {
        const animations = ['fade-in', 'slide-in-left', 'slide-in-right', 'zoom-in', 'flip-in'];
        const animation = animations[Math.floor(Math.random() * animations.length)];
        section.classList.add(animation);
        setTimeout(() => {
            section.classList.remove(animation);
        }, 1000);
    }

    // Activate the first section by default
    activateSection('home');
});

// // document.getElementById('toggelButton').addEventListener('click',()=>{
// //     document.getElementById('profile').style.display='none'
// // })

function toggleButton(){
    // document.getElementById('profile-section').classList.toggle('show') 
    document.getElementById('profile-section').classList.remove('funct')
    document.getElementById('profile-section').classList.toggle('hide') 
}
