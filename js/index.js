// Your code goes here

// on mouseover of FUN BUS (top left of page), ALERT fires.
const h1FunBusLogoHeading = document.querySelector('.logo-heading');
console.log(h1FunBusLogoHeading);
h1FunBusLogoHeading.addEventListener('mouseover', function(){
    alert("you got me PARTNER!");
})

//  On Page load, console log fires. 
window.addEventListener('load', function (event){
    console.log('PAGE LOAD ALL DONE!  LET\'s DO THIS!');
});

// There is no field to enter keyboard characters so we are listening at the page level for key strokes pressed and alerting them to the user.
window.addEventListener('keydown', function(event){
    alert(`${event.key} was pressed!`)
})


