const output = document.querySelector('#output');

const launchDate = new Date('Nov 27, 2022 10:30:00').getTime();

const intvl = setInterval(() => {
    const present =  new Date().getTime();
    let distance = launchDate - present;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(distance % (1000 * 60) / 1000);

    output.innerHTML = `<div class="time">${days}<span>Days</span></div>
    <div class="time">${hours}<span>Hours</span></div>
    <div class="time">${minutes}<span>Minutes</span></div>
    <div class="time">${secs}<span>Seconds</span></div>`;

    if(distance < 0){
        clearInterval(intvl);

        const comingSoon = document.getElementById('coming-soon');
        comingSoon.innerHTML = '<h3>Happy New Year <b class="text-primary">______</b><h3>'

        const wish = document.querySelector('#wish');
        wish.innerHTML = '<p>A Wish From Friend <i class="text-warning">______</i></p>'

        const zero = 0;
        output.innerHTML = `<div class="time bg-success">${2}<span>Two</span></div>
        <div class="time bg-light text-black">${zero}<span>Zero</span></div>
        <div class="time bg-success">${2}<span>Two</span></div>
        <div class="time bg-light text-black">${3}<span>Three</span></div>`;

        // https://i.postimg.cc/sXsKrg8K/cover-image.jpg

        const profile = document.querySelector('img[id="profile"]').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHcVL-lCEOaJSTelm9yixIVDd65h--asDoR9SJDaodo7qU9aGWgfKhlzww_jucCctb-8&usqp=CAU';
        const profiles = document.querySelector('img[id="profile"]')
        profiles.style.borderRadius = '80%';
        profiles.style.width = '200px';
        profiles.style.height ='200px';
        profiles.style.opacity = 0.8;

        const bodyBack = document.querySelector('body');
        // https://images.pexels.com/photos/399610/pexels-photo-399610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
        bodyBack.style.background = "url('https://media1.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif')";

        const create0 = document.querySelector('.create0');
        create0.style.opacity = 0.6;

        window.sr = ScrollReveal();

        sr.reveal('#output', {
            duration: 2000,
            origin: 'bottom',
            distance: '300px',
        });

        sr.reveal('#wish, #coming-soon', {
            duration: 2000,
            origin: 'top',
            distance: '300px',
            delay: 1000
        });

        sr.reveal('#profile', {
            duration: 5000,
            origin: 'top',
            distance: '200px',
            delay: 2000
        });
        
        

    }

},1000);