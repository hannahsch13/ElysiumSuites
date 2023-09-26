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
// console.log(roomMenu)
const detailImage = document.querySelector('.detail-image')
// console.log(detailImage)
const roomName = document.querySelector('.name')
// console.log(roomName)
const roomDescription = document.querySelector('.description')
// console.log(roomDescription)
const roomPrice = document.querySelector('.price')
// console.log(roomPrice)
const roomLikes = document.querySelector(".likes")
// console.log(roomLikes)



function renderImage(arrRooms){
    arrRooms.forEach(roomObj => {
        // console.log(roomObj)
    const imgMenu = document.createElement("img")
    imgMenu.src = roomObj.image
    imgMenu.addEventListener("click", ()=>{
        console.log('click')
        detailImage.src = roomObj.image
         roomName.textContent = roomObj.name
         roomDescription.textContent = "insert"
         roomPrice.textContent = roomObj.price
         roomLikes.textContent = `${roomObj.likes} likes `
    })

    roomMenu.append(imgMenu)
    }) 
}
