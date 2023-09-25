url =  "http://localhost:3000/hotelRooms"
fetch(url)
.then(resp=> resp.json())
.then(promise => console.log(promise))
const roomMenu = document.querySelector('#room-menu')

// function renderImage(){
    // 
// }