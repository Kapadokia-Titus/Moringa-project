// main function
function init(){
    getSession();
    addBooking();
}
//getting session data and setting it on the UI
function getSession(){
     //retrieving
     let user = window.localStorage.getItem('user');
     return user;
}
// submit a Booking
function addBooking(){
    //get data from the form input
    let form = document.getElementById('booking-form')
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        // get form data
        let username = document.getElementById('username').value;
        let provider = document.getElementById('airbnb-name').textContent;
        let arrivalDate = document.getElementById('input_from').value;
        let depature = document.getElementById('input_to').value;
        let numberOfRooms = document.getElementById('number-of-rooms').value;
        let numberOfpeople = document.getElementById('number-of-people').value;
        let uuid = Math.floor(Math.random() * 100);

        // submit the form to the bookings server

        const data = { "username": username,
                       "arrivalDate":arrivalDate,
                       "depature":depature,
                       "provider":provider,
                       "orderId":uuid,
                       "numberOfRooms":numberOfRooms,
                       "numberOfpeople":numberOfpeople 

        };

        fetch('http://localhost:3000/bookings', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            alert(`You Have successfully booked ${provider}'s services`)
            window.location.href="./pay.html";
        })
        .catch((error) => {
           alert("Error in making doing your booking, Check your connection and retry")
        });
    //set an empty value
    form.reset();
    })

}


document.addEventListener('DOMContentLoaded', init);