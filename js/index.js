// Your code goes here

// 1. on mouseover of FUN BUS (top left of page), ALERT fires.
const h1FunBusLogoHeading = document.querySelector('.logo-heading');
// console.log(h1FunBusLogoHeading);
h1FunBusLogoHeading.addEventListener('mouseover', function(){
    alert("you got me PARTNER!");
})

//  2. On Page load, console log fires. 
window.addEventListener('load', function (event){
    console.log('PAGE LOAD ALL DONE!  LET\'s DO THIS!');
});

// 3. There is no field to enter keyboard characters so we are listening at the page level for key strokes pressed and alerting them to the user.
window.addEventListener('keydown', function(event){
    alert(`${event.key} was pressed!`)
})

// 4. As we select the input box, it is brought into focus and we change the background color to skyblue and change the form span instructions to NOTHING!.
const aFocus = document.getElementById('input-box');
// console.log(aFocus);
aFocus.addEventListener('focus', function(event){
    event.target.style.background = 'skyblue';
    let fsiSpan = document.getElementById('form-span-id')
    fsiSpan.textContent = 'NOTHING!'
})

// 5. Once the input box is no longer the focus, we change the background color back to white & change the form span instruction back to it's original text.
const aBlur = document.getElementById('input-box');
// console.log(aBlur);
aBlur.addEventListener('blur', function(event){
    event.target.style.background = 'white';
    let fsiSpan = document.getElementById('form-span-id')
    fsiSpan.textContent = 'your Favorite Event Listener:'
})


// 6. Resize - i am fuzzy on this one.
const delay = 5;  // Your delay here

const originalResize = function(event){
//   console.log(event);  // Your resize function here
  event.currentTarget.alert('you changed the screen size!');
};

(function(){
  let resizeTaskId = null;

  window.addEventListener('resize', function(event){
    if (resizeTaskId !== null) {
      clearTimeout(resizeTaskId);
    }

    resizeTaskId = setTimeout(function(){
      resizeTaskId = null;
      originalResize(event);
    }, delay);
  });
})();

// 7. text select
// W3Schools SELECT documentation
const textSelect = document.getElementById('input-box2');
textSelect.addEventListener('select', function(event){
    alert(`${event.target.value}`)
})

// MDN SELECT documentation...trash!
// function selectionLog (event){
//     const log = document.getElementById('text-select');
//     console.log(log);
//     const textSelected = event.target.value.substring(event.target.SelectionStart, event.target.selectionEnd);
//     log.textContent = `You Selected: ${textSelected}`
// }
// const displayInput = document.getElementById('input-box2');
// console.log(displayInput);
// displayInput.addEventListener('select', selectionLog);

// 8. dblclick
    // const hash = () => Math.floor(Math.random() * 1000).toString(36);
    const funBusImgDblClick = document.getElementById('fun-bus-img-header');
    // console.log(funBusImgDblClick);
    funBusImgDblClick.addEventListener('dblclick', function(){
        // ARRON MARSHALL DBLCLICK EVENT - 
        if (event.target.matches('img')) {
            let random = hash();
            console.log(event.target);
            // event.target.nextElementSibling.innerText = random;
            event.target.src = `https://picsum.photos/800/240?${random}`;
          }
        //   MY VERSION NO LONGER RELEVANT!
        // funBusImgDblClick.src = `https://picsum.photos/800/240/?random`;
    })

    const letsGoDblClick = document.getElementById('lets-go');
    // console.log(letsGoDblClick);
    letsGoDblClick.addEventListener('dblclick', function(){
                // ARRON MARSHALL DBLCLICK EVENT - 
                if (event.target.matches('img')) {
                    let random = hash();
                    console.log(event.target);
                    // event.target.nextElementSibling.innerText = random;
                    event.target.src = `https://picsum.photos/376/282?${random}`;
                  }
         //   MY VERSION NO LONGER RELEVANT!
        // letsGoDblClick.src = "https://picsum.photos/376/282/?hash(let random=)";
    })

    // Adventure Awaits IMG DblClick
/*  // ORIGINAL EVENT I CREATED.  DOES NOT LOAD A NEW PIC AFTER FIRST DBLCLICK EVENT.
    // Adventure Awaits IMG DblClick
    const advAwaitsDblClick = document.getElementById('advawaits');
    // console.log(advAwaitsDblClick);
    advAwaitsDblClick.addEventListener('dblclick', function(){
        advAwaitsDblClick.src = "https://picsum.photos/376/282/?random";
    })
*/
    //   EVENT AARON MARSHALL CREATED USING THE hash FUNCTION HE MADE BELOW.  THIS ALLOWS FOR NEW IMAGES TO GENERATE AFTER EVERY DBLCLICK EVENT!  
    const advAwaitsDblClick = document.getElementById('advawaits');
    // console.log(advAwaitsDblClick);
    advAwaitsDblClick.addEventListener('dblclick', function(event){
        if (event.target.matches('img')) {
            let random = hash();
            console.log(event.target);
            // event.target.nextElementSibling.innerText = random;
            event.target.src = `https://picsum.photos/376/282?${random}`;
          }
    })

function hash() {
  // Get a *random* decimal between 0-1;
  let randomDecimal = Math.random();
  
  // Multiply the decimal by a number to get a real number
  // NOTE: In this case I'm using 1,000 to get a couple of letters in our end result but can be higher
  let randomNumber = randomDecimal * 1000;
  
  // Floor our number (round down) to remove any remaining decimals
  let wholeNumber = Math.floor(randomNumber);
  
  /*
      Transform our number into base36. The toString method can take a radix<int> parameter to specify the number base.
      E.g. Hex colors are base16, so if you got a random number between 0-255 and did toString(16) you would get a color hex
           Binary is base2, so using toString(2) would give easy binary conversion
      MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  */
  let randomHash = wholeNumber.toString(36);
  return randomHash;
}


    // Pick Your Destination IMG DblClick
    const pydDblClick = document.getElementById('pydest');
    // console.log(pydDblClick);
    pydDblClick.addEventListener('dblclick', function(){
        // ARRON MARSHALL DBLCLICK EVENT - 
        if (event.target.matches('img')) {
            let random = hash();
            console.log(event.target);
            // event.target.nextElementSibling.innerText = random;
            event.target.src = `https://picsum.photos/600/200?${random}`;
            }
         // MY VERSION NO LONGER RELEVANT!
        // pydDblClick.src = "https://picsum.photos/600/200/?random";
    })


// 9. DENIED on click - this is child click event
const btnClick = document.getElementsByClassName('btn');
btnClick[0].addEventListener('click', function(event){
    event.target.textContent = "";
    event.target.style.background = "white";

    setTimeout(function() {
        event.target.textContent = "Experience Rejection!"
        event.target.style.background = "";
    }, 3000);
    event.stopPropagation();
}, false)

//  10. mouseover
const btnMouseOver = document.getElementsByClassName('btn');
btnMouseOver[1].addEventListener('mouseover', function(event){
    event.target.style.backgroundImage = "linear-gradient(PaleVioletRed, PaleVioletRed 50%, Sienna 50%, Sienna)";
    event.target.style.color = "lightgreen";
    
    setTimeout(function() {
        event.target.style.backgroundImage = "";
        event.target.style.color = "";
    }, 3000);
}, false);


//  11.  Nested Click - added parent click here.
const contentDivClick = document.getElementById('nested-dest');
console.log(contentDivClick);
contentDivClick.addEventListener('click', function(event){
    event.currentTarget.style.border = "3px solid yellow";
    // event.currentTarget.style.background = "red";
})

// 12. preventDefault on nav link
const stopNav = document.querySelector('.nav');
console.log(stopNav);
stopNav.addEventListener('click', function(event){
    event.preventDefault();
})



