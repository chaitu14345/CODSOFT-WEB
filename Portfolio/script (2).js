
document.addEventListener("DOMContentLoaded", function() {
  // Get the "Hire Me" button by its ID
   const hireMeButton = document.getElementById("hire-me-button");

   // Add a click event listener to the "Hire Me" button
   hireMeButton.addEventListener("click", function() {
       // Compose an email with a mailto link
       window.location.href = 'mailto:chaitanya216cse@gmail.com';
   });
    // Get the "Download CV" button by its ID
    const downloadButton1 = document.getElementById("download-button1");

    // Add a click event listener to the "Download CV" button
    downloadButton1.addEventListener("click", function() {
        // Replace 'resume.pdf' with the actual path to your PDF file
        const pdfFile = 'chaitanya-resume.pdf';

        // Open the PDF file in a new tab or window
        window.open(pdfFile, '_blank');
    });
 // Get the "Download CV" button by its ID
 const downloadButton2 = document.getElementById("download-button2");

 // Add a click event listener to the "Download CV" button
 downloadButton2.addEventListener("click", function() {
     // Replace 'resume.pdf' with the actual path to your PDF file
     const pdfFile = 'chaitanya-resume.pdf';

     // Open the PDF file in a new tab or window
     window.open(pdfFile, '_blank');
 });

  // Get the "Download CV" button by its ID
  const downloadButton = document.getElementById("download-button");

  // Add a click event listener to the button
  downloadButton.addEventListener("click", function() {
      // Replace 'your-resume.pdf' with the path to your PDF file
      const pdfFile = 'chaitanya-resume.pdf';

      // Open the PDF file in a new tab or window
      window.open(pdfFile, '_blank');
  });
});

 function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["MERN Developer","Web Designer","Coder"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
document.addEventListener("DOMContentLoaded", function() {
  // ... (Your existing code here)

  // Get the icon elements by their IDs
  const instagramIcon = document.getElementById("instagram-icon");
  const linkedinIcon = document.getElementById("linkedin-icon");
  const twitterIcon = document.getElementById("twitter-icon");
  const githubIcon = document.getElementById("github-icon");
   

  // Define the URLs for Instagram, LinkedIn, and GitHub profiles
  const instagramURL = "https://www.instagram.com/mr_damon9";
  const linkedinURL = "https://www.linkedin.com/in/chaitanya-jatla-2a3bb525b/";
  const twitterURL = "https://twitter.com/chaitan97794175";
  const githubURL = "https://github.com/chaitu14345";


  // Add click event listeners to open the profiles when the icons are clicked
  instagramIcon.addEventListener("click", function() {
    window.open(instagramURL, "_blank");
  });

  linkedinIcon.addEventListener("click", function() {
    window.open(linkedinURL, "_blank");
  });

  githubIcon.addEventListener("click", function() {
    window.open(githubURL, "_blank");
  });
});
