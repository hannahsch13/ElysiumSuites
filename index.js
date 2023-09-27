//URLS
url =  "http://localhost:3000/hotelRooms"
// const id = url/
// console.log(id)
//Elements
const roomMenu = document.querySelector('#rooms-menu')
// console.log(roomMenu)
const detailImage = document.querySelector('.detail-image')
// console.log(detailImage)
const roomName = document.querySelector('#name')
// console.log(roomName)
const roomDescription = document.querySelector('#description')
// console.log(roomDescription)
const roomPrice = document.querySelector('#price')
// console.log(roomPrice)
const roomLikes = document.querySelector("#likes")
// console.log(roomLikes)
const reviewDisplay = document.querySelector("#reviews")
reviewDisplay.innerHTML = ""
//  console.log(reviewDisplay)
const form = document.getElementById("review-form")

const button = document.getElementById("like-bttn")



fetch(url)
.then(resp=> resp.json())
.then(arrRooms => arrRooms.forEach(renderRoom))
    
function renderRoom(roomObj){
    // console.log(roomObj)
    const imgMenu = document.createElement("img")
    imgMenu.src = roomObj.image
    imgMenu.addEventListener("click", ()=>{
        // console.log('click')
        button.dataset.roomId = roomObj.id
        detailImage.src = roomObj.image
        roomName.textContent = roomObj.name
        roomDescription.textContent = roomObj.description
        roomPrice.textContent = roomObj.price
        roomLikes.textContent = `${roomObj.likes} likes`
        reviewDisplay.innerHTML = ""
        roomObj.reviews.forEach(review => {
            const reviewLi = document.createElement('li') 
            //     console.log(review)   
            reviewLi.textContent = review
            reviewDisplay.append(reviewLi)
        }) 
    })
    roomMenu.append(imgMenu)  
}

button.addEventListener('click', ()=>{
    // console.log("click")
    let currLikes = parseInt(roomLikes.textContent)
    // console.log(currLikes) 
    let click =  ++currLikes
    roomLikes.textContent = `${click} likes`
    console.log(click)
    domPatch(click)
    console.log(button)
}) 


function domPatch(newLike){
    console.log(newLike)

    fetch(`http://localhost:3000/hotelRooms/${button.dataset.roomId}`, {
        method: 'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            likes: newLike
        })
    })
    .then(res => res.json())
    .then(room => console.log(room))
}



form.addEventListener('submit', (event) => {
event.preventDefault()
    //   console.log(event.target.review.value)  
        const newReview = document.createElement('li')
        newReview.textContent = event.target.review.value
        reviewDisplay.append(newReview) 
        event.target.reset()
})


const reviewRemind = document.getElementById("reviews")
// console.log(reviewRemind)
    reviewRemind.addEventListener('mouseover', function(){
        alert("Don't forget to leave a review! ")
    })







