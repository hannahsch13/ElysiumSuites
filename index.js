//URLS
url =  "http://localhost:3000/hotelRooms"
//Fetch
fetch(url)
.then(resp=> resp.json())
.then(promise => {
    renderImage(promise)
})

//Elements
const roomMenu = document.querySelector('#rooms-menu')
console.log(roomMenu)


function renderImage(arrRooms){
    arrRooms.forEach(roomObj => {
        console.log(roomObj)
    const imgMenu = document.createElement("img")
    imgMenu.src = roomObj.image
    // imgMenu.addEventListener("click", ()=>
    // )

    roomMenu.append(imgMenu)
    }) 
}
