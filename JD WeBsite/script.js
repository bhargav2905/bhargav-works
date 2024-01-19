let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svgelem = document.getElementById('svg')


window.addEventListener('mousemove', function(details){
   let xValue = details.clientX;
   let yValue = details.clientY;

    setTimeout(function(){
        
   circle.style.top = `${yValue}px`;
   circle.style.left = `${xValue}px`;
    },100)
})

btn.addEventListener('click',function(){
    tl.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate');
    }, 2000)
});


var tl = gsap.timeline();


tl
.from('#wrapper', {
    duration: 3,
    scale: .7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#whitestrip',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut'
}, '-=2.5')
.from('#blackcard', {
    duration: 1.5,
    x: 50,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#lineelem', {
    duration: 1.5,
    x: 50,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#lineelem .line', {
    duration: 2,
    width: 50,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#blackcard p', {
    duration: 1.2,
    y: 30,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=2')
.from('#lineelem .line', {
    duration: 2,
    width: 50,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#sideelem ', {
    duration: 2,
    x: 50,
    ease: 'Expo.easeInOut',
    opacity:0
},'-=1')