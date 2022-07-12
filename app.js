const data = [

    {
        name: "Shabbir Ahmed",
        position: "Striker",
        img: "sabbir.jpg"
    },
    {
        name: "Monirul Islam",
        position: "Striker",
        img: "monirul.jpg"
    },
    {
        name: "Sahal Habib",
        position: "Defender",
        img: "sahal.PNG"
    },
    {
        name: "Suhail Habib",
        position: "Striker/mid",
        img: "suhail.jpg"
    },
    {
        name: "Habibullah",
        position: "Everywhere",
        img: "wahid.jpg"
    },
    {
        name: "Emon",
        position: "Everywhere",
        img: "emon.jpg"
    },
    {
        name: "Sharek",
        position: "Striker",
        img: "sharek.jpg"
    },
    {
        name: "Samura",
        position: "Striker/Mid",
        img: "samura.jpg"
    },
    {
        name: "Kader",
        position: "Striker/Mid",
        img: "kader.jpg"
    },
    {
        name: "Sajjad",
        position: "Goal Kepper",
        img: "sajjad.jpg"
    },
    {
        name: "Mehedi",
        position: "Defender",
        img: "mehedi.jpg"
    },
    {
        name: "Hujifa",
        position: "Defender",
        img: "hujifa1.jpg"
    },
    {
        name: "Samiul",
        position: "Goal Keeper",
        img: "samiul.jpg"
    },
    {
        name: "Obaydullah",
        position: "Defender",
        img: "obaydullah1.webp"
    },
    {
        name: "Asraful",
        position: "Striker",
        img: "asraful.jpg"
    },
    {
        name: "Julybib",
        position: "Mid",
        img: "julybib.jpg"
    }
    
]

window.addEventListener( 'load', ()=> addPlayer( data ) );

const container = document.querySelector( '.players-list' );

function addPlayer(data){

    data.forEach( ( p, index ) => {
        let html = `<li class="player-list clickable" data-img="${p.img}">
        <span class="pos">${index+1}</span>
        <span class="name">${p.name}</span>
        <span class="position">${p.position}</span>
    </li>`;

        container.innerHTML += html;

    } )

    playerProfile();

}

function playerProfile(){
    const players = document.querySelectorAll( '.clickable' );
    
    players.forEach( player => {
        player.addEventListener( 'click', e=>{
            const name = e.currentTarget.querySelector( '.name' ).textContent;
            const position = e.currentTarget.querySelector( '.position' ).textContent;
            const img = e.currentTarget.getAttribute( 'data-img' );
            playerInfoUpdate( name, position, img );
        } )
    } )

}

function playerInfoUpdate(n, p, i){

    const playerName = document.querySelector( '.player-name' );
    const position   = document.querySelector( '.position' );
    const img        = document.querySelector( '.player' );

    playerName.textContent = n;
    position.textContent   = p;
    img.src = `inc/imgs/${i}`;

}