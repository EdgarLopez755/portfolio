const textDisplay = document.getElementById('text')
let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false




const phrases = [ 
    
    'Welcome !',
    'I am a passionate developer with a love for creating beautiful and functional web experiences.'

]

function loop() {
    isEnd = false
    textDisplay.innerHTML = phrases[0]
    

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop()
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }
    }

    if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
    }

    if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
            i = 0
        }

    }


    const spedUp = Math.random() * 80
    const normalSpeed = Math.random() * 300
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
    
}

loop()


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
