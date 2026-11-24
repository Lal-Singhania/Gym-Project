const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){
    menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    });
}

            //SLIDER
const slider = document.querySelectorAll(".sliimg");

var count = 0;

const slideimage =()=>{
    slider.forEach(
        (sliimg)=>{
            sliimg.style.transition="transform 0.3s ease"
            sliimg.style.transform=`translatex(-${count*100}%)`
        });
};

const goperv = ()=>{
    count = (count -1 +slider.length)%slider.length;
    slideimage()
}
const gonext = ()=>{
    count = (count+1)%slider.length;
    slideimage()
}

slider.forEach(
    (sliimg,index)=>{
        sliimg.style.left=`${index*100}%`
});

//info send

const owner = +918709878419;

document.getElementById("contact").addEventListener("submit", function (e){
    e.preventDefault();
const name = document.getElementById("name").value.trim();
const number = document.getElementById("number").value.trim();
const question = document.getElementById("quest").value.trim();

const message =
`New Query from Website\n\n`+
`Name : ${name} \n`+
`Number : ${number}\n`+
`Question : ${question}`;

const url = `https://wa.me/${owner}?text=${encodeURIComponent(message)}`;
window.open(url, "_blank");
closepop();
})

//popup

let popup = document.getElementById('popup');
let close = document.getElementById('closeBtn');

document.querySelectorAll(".open-contact").forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        popup.classList.add("show");
    });
});

const closepop = () => popup.classList.remove("show");
close.addEventListener("click",closepop);
