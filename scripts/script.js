let largura = window.screen.width;

document.addEventListener('DOMContentLoaded', () => {
    let tl = gsap.timeline();
    tl.from(".menu-1", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: "power3.out",
    })
    .from(".menu-2", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
    }, "-=0.1")
    .from(".menu-3", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
    }, "-=0.1")
    .from(".menu-4", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
    }, "-=0.1")
    .from(".menu-5", {
            duration: 0.5,
            y: 50,
            opacity: 0,
            ease: "power3.out",
    }, "-=0.1")
    .from(".bg-hero", {
            duration: 0.5,
            y: 300,
            opacity: 0,
            ease: "power3.out",
    }, "-=0.1")
    .from(".container-item div", {
            duration: 0.5,
            y: 300,
            opacity: 0,
            stagger: {each: 0.2},
            ease: "power3.out",
    }, "-=0.3")
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#section-01 div", {
                duration: 2,
                y: 300,
                opacity: 0,
                stagger: {each: 0.2},
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#section-01",
                }
    });

    gsap.from("#section-02 div", {
                duration: 2,
                y: 300,
                opacity: 0,
                stagger: {each: 0.2},
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#section-02",
                }
            })

            gsap.from("#section-03", {
                duration: 2,
                y: 300,
                opacity: 0,
                stagger: {each: 0.2},
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#section-03",
                },
                startCounter
            })

            gsap.from("#section-04", {
                duration: 2,
                y: 300,
                opacity: 0,
                stagger: {each: 0.2},
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#section-04",
                }
            })

            gsap.from("#section-04 td", {
                duration: 2,
                y: 300,
                opacity: 0,
                stagger: {each: 0.2},
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "#section-04",
                }
            })
})

function startCounter() {
    let elemento = document.querySelectorAll('[data-number]');
   
    elemento.forEach(function (element) {
      var contador = 0;
        setInterval(() => {
            if (contador <= element.dataset.number) {
                element.innerHTML = `${contador++}`
            }
        }, element.dataset.speed);
    })
}