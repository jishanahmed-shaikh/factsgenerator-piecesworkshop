const facts = [
    "I have been playing football since I was a child and have participated in several local tournaments.",
    "I am a tech enthusiast and love exploring the latest gadgets and software.",
    "Gaming is my favorite pastime, and I have completed over 50 games across different platforms.",
    "I enjoy coding and have developed a few small apps to enhance my gaming experience.",
    "I follow the latest trends in both football and technology, always eager to learn and share new insights."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});

document.getElementById('modeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
