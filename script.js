const whispers = [
    "Je t’ai rêvé avant de te connaître.",
    "Il n’y a pas de nom pour ce qu’on ressent vraiment.",
    "Certains silences font plus de bruit que des cris.",
    "Ton absence est une présence qui murmure encore.",
    "Et si le cœur écrivait ce que la bouche tait ?"
];

function showRandomWhisper() {
    const box = document.getElementById('whisperBox');
    const random = whispers[Math.floor(Math.random() * whispers.length)];
    box.innerText = random;
}