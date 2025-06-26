let boxes=document.querySelectorAll('.portfolio-box');


boxes.forEach(box =>
{
    let img =box.querySelector('img');
    let layer = box.querySelector('.portfolio-layer');
img.onclick=() =>
 {
    layer.classList.toggle('active2');
 };
 layer.onclick=() =>
 {
    layer.classList.remove('active2');
 };
}
);
 


// icon navbar
let menIcon = document.querySelector('#meun-icon');
let navbar = document.querySelector('.navbar');
menIcon.onclick =() =>
{
    menIcon.classList.toggle('ti-x');
    navbar.classList.toggle('active');
}


// scroll sections ovtive  link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =() =>
{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset+height)
        {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };

    });
    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
     // remove icon navbar when click on link
     
    menIcon.classList.remove('ti-x');
    navbar.classList.remove('active');

};

// scroll reveal
ScrollReveal(
    {
        reset:true,
        distance:'80px',
        duration:2000,
        delay:200

    }
);

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1',{origin:'left'});
ScrollReveal().reveal('.home-content p',{origin:'right'});


