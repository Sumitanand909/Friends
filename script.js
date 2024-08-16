var isstatus = document.querySelector('h5')
var addFriend = document.querySelector('#add')
var removeFriend = document.querySelector('#remove')

addFriend.addEventListener("click",function(){
    isstatus.innerHTML = 'Request Sent'
    isstatus.style.color = 'grey'
    setTimeout(a,6000)
    setTimeout(b,8000)
   
})
function a(){
isstatus.innerHTML = 'Request Accepted'
isstatus.style.color = '#66FF00'
}

function b(){
    isstatus.innerHTML = 'You are now friends'
    isstatus.style.color = 'green'
}

removeFriend.addEventListener("click",function(){
    isstatus.innerHTML = 'Friendship break'
    isstatus.style.color = 'red'
})


