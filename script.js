const aboutMeText = document.querySelector('.aboutMeText');
const workExperienceText = document.querySelector('.workExperienceText');
const educationText = document.querySelector('.educationText');

const aboutMeSection = document.querySelector('.aboutMe');
const workExperienceSections = document.querySelectorAll('.workExperience');
const educationSections = document.querySelectorAll('.education');


aboutMeText.addEventListener('click', () => {
    toggleSection(aboutMeSection);
});


workExperienceText.addEventListener('click', () => {
    toggleSections(workExperienceSections);
});


educationText.addEventListener('click', () => {
    toggleSections(educationSections);
});


function toggleSection(section) {
    section.classList.toggle('hidden');
}


function toggleSections(sections) {
    sections.forEach(section => {
        section.classList.toggle('hidden');
    });
}
