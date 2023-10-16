
    gsap.from(".awan", {
        duration: 6, // Duration of the animation (in seconds)
        x: "-4%", // Move the cloud to the right edge of the screen
        repeat: -1, // Repeat the animation indefinitely
        yoyo: true,
        yoyoEase: true,
        repeatDelay: 1,
        ease: "expoScale(0.5,7,none)", // Linear easing for a constant speed
    });
    const tltitle = gsap.timeline({ repeat: -1, repeatDelay: 2,});
    tltitle.to(".startimg", { x: -5, y: -5, duration: 0.15, rotation: 3, ease: "none" });
    tltitle.to(".startimg", { x: 0, y: 0, duration: 0.15, rotation: 0, ease: "none" });
    tltitle.to(".startimg", { x: 5, y: 5, duration: 0.15, rotation: -4, ease: "none" });
    tltitle.to(".startimg", { x: 0, y: 0, duration: 0.15, rotation: 0, ease: "none" });
    

const parent = document.querySelector(".leafdiv");
const parentHeight = parent.clientHeight;
const parentWidth = parent.clientWidth;
console.log(parentWidth)
var cleaf =$('[id="leaf"]');
for (let index = 0; index < cleaf.length; index++) {
    var leaf = cleaf[index];
    var leftrand =generateRandom(min = 20, max = parentWidth);
    leaf.style.left = leftrand +'px';
    var tl = new TimelineMax({repeat:-1 ,repeatDelay: generateRandom(min = 0, max = 5),});
    tl.set(leaf, { rotation: generateRandom(min = 0, max = 10) });
    swingLeaf();
    swingLeaf();
    swingLeaf();
    function swingLeaf() {
    tl.add([
        TweenMax.to(leaf, 1.5, {
        left: leftrand+300,
        rotation: -5,
        ease: Power1.easeInOut
        }),
        TweenMax.to(leaf, 1.5, {
        y: "+="+parentHeight * 0.35,
        ease: Power1.easeOut
        })
    ]).add([
        TweenMax.to(leaf, 1.5, {
        left: leftrand,
        rotation: 5,
        ease: Power1.easeInOut
        }),
        TweenMax.to(leaf, 1.5, {
        y: "+="+parentHeight* 0.35,
        ease: Power1.easeOut
        })
    ]);
    }
    console.log(leaf.style.left)
}





function generateRandom(min = 0, max = 10) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}