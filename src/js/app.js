let tl = gsap.timeline({
    delay: 0.4
});
tl.from(".header_top_left", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: -50
})
tl.from(".header_top_right", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: 50
})
tl.from(".logomenu_wrapper", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    y: 40,
})
tl.from(".content_wrapper", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: -100,
});

// scroll trigger

let mobile = document.querySelector('.mobile')
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(mobile, {
    clipPath: "circle(15% at 77% 40%)",
}, {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    scrollTrigger: {
        trigger: mobile,
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});

// ////////////////////////

gsap.fromTo(".two_right_listitem", {
    x: innerWidth * 1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_right_listitem",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});

// ///////////////////////
gsap.fromTo(".two_right_heading", {
    x: innerWidth * 1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_right_heading",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});
// ///////////////////////
gsap.fromTo(".two_right_pra", {
    x: innerWidth * 1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_right_pra",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});

// bottom left
gsap.fromTo(".two_bottom_left_listitem", {
    x: innerWidth * -1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_bottom_left_listitem",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});

// ///////////////////////
gsap.fromTo(".two_bottom_left_heading", {
    x: innerWidth * -1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_bottom_left_heading",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});
// ///////////////////////
gsap.fromTo(".two_bottom_left_heading2", {
    x: innerWidth * -1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_bottom_left_heading2",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});
// ///////////////////////
gsap.fromTo(".two_bottom_left_pra", {
    x: innerWidth * -1
}, {
    x: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".two_bottom_left_pra",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});

// For Box
gsap.fromTo(".what-i-can_box1", {
    x: innerWidth * 1,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".what-i-can_box1",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});
gsap.fromTo(".what-i-can_box2", {
    x: innerWidth * 1,
    opacity: 1,
}, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".what-i-can_box2",
        scrub: 1,
        start: "top center",
        end: "bottom center",
    }
});

gsap.fromTo(".what-i-can_box3", {
    x: innerWidth * 1,
    opacity: 1,
}, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".what-i-can_box3",
        scrub: 1,
        start: "top center",
        end: "top bottom",
    }
});

gsap.fromTo(".what-i-can_box4", {
    x: innerWidth * 1,
    opacity: 1,
}, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".what-i-can_box4",
        scrub: 1,
        start: "top center",
        end: "top bottom",
    }
});
// three section
gsap.fromTo(".three_img", {
    x: 400,
}, {
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".three_img",
        toggleActions: "restart none none none",
    }
})

gsap.fromTo(".three_top_left_content", {
    x: -400,
}, {
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".three_top_left_content",
        toggleActions: "restart none none none",
    }
})
gsap.fromTo(".three_bottom_img", {
    clipPath: "circle(15% at 50% 50%)",
}, {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",
    scrollTrigger: {
        trigger: ".three_bottom_img",
        scrub: 1,
        start: "top center",
        end: "top center",
    }
});
gsap.fromTo(".three_bottom_right", {
    x: 400,
}, {
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".three_bottom_right",
        toggleActions: "restart none none none",
    }
})
//  four section
gsap.fromTo(".four_top", {
    y: -100,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".four_top",
        toggleActions: "restart none none none"
    }
})
// leader box
gsap.fromTo(".leader", {
    y: 100,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".leader",
        toggleActions: "restart none none none"
    }
})

gsap.fromTo(".four_bottom", {
    y: -100,
    opacity: 0
}, {
    y: 0,
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
        trigger: ".four_bottom",
        toggleActions: "restart none none none"
    }
})


// ------------about our product designer-------------
tl.from(".product_design_area_heading", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    y: -50
})
tl.from(".product_designer", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: -50
})
tl.from(".contentheading4", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: 50
})
tl.from(".contentheading2", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: 50
})
tl.from(".contentpra", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: 50
})
tl.from(".contentlink", {
    duration: .5,
    ease: "power2.out",
    opacity: 0,
    x: 50
})


// -------------raw coding for product designer----------------
// more designer
const moreDesigner = [{
        id: 1,
        designerName: "susan smith",
        img: "file:///C:/Users/mkamr/OneDrive/Desktop/figma%20to%20html/src/img/Rectangle_150x150.png",
        designerIntro: "He is the Lead UI/UX Designer. He is a big fan of English Football club Manchester United and loves to walk his dog at recreational hours",
    },
    {
        id: 2,
        designerName: "anna johnson",
        img: "file:///C:/Users/mkamr/OneDrive/Desktop/figma%20to%20html/src/img/Rectangle1_150x150.png",
        designerIntro: "He is the Lead Website Designer. He is a big fan of English Football club Manchester United and loves to walk his dog at recreational hours",
    },
    {
        id: 3,
        designerName: "peter jones",
        img: "file:///C:/Users/mkamr/OneDrive/Desktop/figma%20to%20html/src/img/Rectangle2_150x150.png",
        designerIntro: "He is the Lead Graphics Designer. He is a big fan of English Football club Manchester United and loves to walk his dog at recreational hours",
    },
    {
        id: 4,
        designerName: "bill anderson",
        img: "file:///C:/Users/mkamr/OneDrive/Desktop/figma%20to%20html/src/img/Ellipse%2011.png",
        designerIntro: "He is the Lead Javascript Designer. He is a big fan of English Football club Manchester United and loves to walk his dog at recreational hours",
    },
]

// select items
const img = document.querySelector('.personImg')
const designerName = document.querySelector('.designer_name')
const designerIntro = document.querySelector('.designer_intro')

// select button
let leftButton = document.querySelector('.left_btn')
let rightButton = document.querySelector('.right_btn')

// set starting item
let currentItem = 0
// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson()
})
// create function
function showPerson() {
    let item = moreDesigner[currentItem]
    img.src = item.img
    designerName.innerText = item.designerName
    designerIntro.innerText = item.designerIntro
}

// create event
rightButton.addEventListener('click', function () {
    currentItem++
    if (currentItem > moreDesigner.length - 1) {
        currentItem = 0
    }
    showPerson()
})
leftButton.addEventListener('click', function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = moreDesigner.length - 1
    }
    showPerson()
})