const hiddenElements= document.querySelectorAll(".sock");

const observer = new IntersectionObserver((entries)=>{  // The Intersection Observer API is used to efficiently detect when an HTML element enters or exits the viewport
    entries.forEach((entry)=>{// is it working??
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }

    });
});
hiddenElements.forEach((el)=> observer.observe(el));
