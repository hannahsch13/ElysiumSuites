url =  "http://localhost:3000/hotelRooms"

const roomMenu = document.querySelector('#rooms-menu')
const detailImage = document.querySelector('.detail-image')
const roomName = document.querySelector('#name')
const roomDescription = document.querySelector('#description')
const roomPrice = document.querySelector('#price')
const roomLikes = document.querySelector("#likes")
const reviewDisplay = document.querySelector("#reviews")
reviewDisplay.innerHTML = ""
const form = document.getElementById("review-form")
const button = document.getElementById("like-bttn")

button.disabled = true

fetch(url)
.then(resp=> resp.json())
.then(arrRooms => arrRooms.forEach(renderRoom))
    
function renderRoom(roomObj){
    const imgMenu = document.createElement("img")
    imgMenu.src = roomObj.image
    imgMenu.addEventListener("click", ()=>{
        button.disabled = false
        button.dataset.roomId = roomObj.id
        form.dataset.roomId= roomObj.id
        detailImage.src = roomObj.image
        roomName.textContent = roomObj.name
        roomDescription.textContent = roomObj.description
        roomPrice.textContent = roomObj.price
        roomLikes.textContent = `${roomObj.likes} likes`
        reviewDisplay.innerHTML = ""
        roomObj.reviews.forEach(review => {
            const reviewLi = document.createElement('li') 
            reviewLi.textContent = review
            reviewDisplay.append(reviewLi)
        }) 
    })
    roomMenu.append(imgMenu)  
}

button.addEventListener('click', ()=>{
    let currLikes = parseInt(roomLikes.textContent) 
    let click =  ++currLikes
    roomLikes.textContent = `${click} likes`
    console.log(click)
    likePatch(click)
    console.log(button)
}) 


function likePatch(newLike){
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
        const newReview = document.createElement('li')
        newReview.textContent = event.target.review.value
        const revId = newReview.textContent
        reviewDisplay.append(newReview) 
        event.target.reset()
        reviewPatch(revId)
    })
    
    function reviewPatch() {
        const reviewLis = Array.from(reviewDisplay.children)
            const revFunc= reviewLis.map((li) => {
                return li.innerText
            })
        
        fetch(`http://localhost:3000/hotelRooms/${form.dataset.roomId}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reviews: revFunc
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
const reviewRemind = document.getElementById("reviews")
    reviewRemind.addEventListener('mouseover', function(){
        alert("Don't forget to leave a review! ")
    })





