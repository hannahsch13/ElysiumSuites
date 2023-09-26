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
const reviews = document.getElementById("reviews-display")

const form = document.getElementById("review-form")



function renderImage(arrRooms){
    arrRooms.forEach(roomObj => {
        // console.log(roomObj)
    const imgMenu = document.createElement("img")
    imgMenu.src = roomObj.image
    imgMenu.addEventListener("click", ()=>{
        console.log('click')
        detailImage.src = roomObj.image
         roomName.textContent = roomObj.name
         roomDescription.textContent = roomObj.description
         roomPrice.textContent = roomObj.price
         roomLikes.textContent = `${roomObj.likes} likes `
         reviews.textContent = roomObj.reviews 
        const reviewList = document.createElement('li')
        reviews.append(reviewList)  
        console.log(reviewList)
    })

    roomMenu.append(imgMenu)
    }) 
}

form.addEventListener('submit', (event) => {
   event.preventDefault()
    const review = event.target.reviews.value
    const newReview= {
    review: reviews
     }
    
     function renderReview(newReview) {
        reviews.textContent = roomObj.reviews 
        const reviewList = document.createElement('li')
        reviews.append(reviewList) 
     }
     event.target.reset()
})
