// Your code goes here

// on mouseover of FUN BUS (top left of page), ALERT fires.
const h1FunBusLogoHeading = document.querySelector('.logo-heading');
// console.log(h1FunBusLogoHeading);
h1FunBusLogoHeading.addEventListener('mouseover', function(){
    alert("you got me PARTNER!");
})

//  On Page load, console log fires. 
window.addEventListener('load', function (event){
    console.log('PAGE LOAD ALL DONE!  LET\'s DO THIS!');
});

// There is no field to enter keyboard characters so we are listening at the page level for key strokes pressed and alerting them to the user.
window.addEventListener('keydown', function(event){
    // alert(`${event.key} was pressed!`)
})

// As we select the input box, it is brought into focus and we change the background color to skyblue and change the form span instructions to NOTHING!.

const aFocus = document.getElementById('input-box');
// console.log(aFocus);
aFocus.addEventListener('focus', function(event){
    event.target.style.background = 'skyblue';
    let fsiSpan = document.getElementById('form-span-id')
    fsiSpan.textContent = 'NOTHING!'
})

// Once the input box is no longer the focus, we change the background color back to white & change the form span instruction back to it's original text.
const aBlur = document.getElementById('input-box');
// console.log(aBlur);
aBlur.addEventListener('blur', function(event){
    event.target.style.background = 'white';
    let fsiSpan = document.getElementById('form-span-id')
    fsiSpan.textContent = 'your Favorite Event Listener:'
})




