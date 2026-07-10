/* =================================
   JOSHUA & ERIN
   Luxury Editorial Invitation
   Prototype 0.1
================================= */


/* ---------- ENVELOPE OPENING ---------- */

const waxSeal = document.getElementById("wax-seal");
const openingScreen = document.getElementById("opening-screen");
const invitation = document.getElementById("invitation");


waxSeal.addEventListener("click", function () {

    waxSeal.style.opacity = "0";

    setTimeout(function () {

        openingScreen.style.display = "none";

        invitation.style.display = "block";

        window.scrollTo(0,0);

    }, 700);

});



/* ---------- LOAD WEDDING DETAILS ---------- */


document.addEventListener("DOMContentLoaded", function(){


    if(typeof wedding !== "undefined"){


        document.getElementById("wedding-date").textContent =
        wedding.ceremony.date;


        document.getElementById("ceremony-time").textContent =
        wedding.ceremony.time;


        document.getElementById("ceremony-venue").textContent =
        wedding.ceremony.venue;


        document.getElementById("dress-code").textContent =
        wedding.ceremony.dressCode;



        document.getElementById("reception-text").textContent =
        wedding.reception.message;



        document.getElementById("closing-message").textContent =
        wedding.closing;



        document.getElementById("map-button").href =
        wedding.map.link;



        loadAccommodation();

    }


});




/* ---------- ACCOMMODATION ---------- */


function loadAccommodation(){


    const hotelContainer =
    document.getElementById("hotel-list");


    wedding.accommodation.forEach(function(hotel){


        const hotelCard =
        document.createElement("div");


        hotelCard.className =
        "hotel-card";


        hotelCard.innerHTML = `

        <h3>${hotel.name}</h3>

        <p>${hotel.details}</p>

        `;


        hotelContainer.appendChild(hotelCard);


    });


}
