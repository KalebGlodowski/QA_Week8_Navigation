let counter = 0;

const pages = [
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page:"Interact",
        navigate: interact
    }
]


function navButton(pg, pr, nv) {    //navButton is taking in 2 arguments
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML="";
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav = document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="blue";
    for (obj of pages) {                            //for every item within the array
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("h1");
    home.innerHTML="Home Page";
    document.body.querySelector(".wrapper").appendChild(home); //when calling classes, must lead with a .name
}

function about(){
    let about = document.createElement("div");
    let aboutHead = document.createElement("h1");
    let aboutBody = document.createElement("h3");
    aboutHead.innerHTML="About Page";
    aboutBody.innerHTML="Kaleb Glodowski"
    about.appendChild(aboutHead);
    about.appendChild(aboutBody);
    document.body.querySelector(".wrapper").appendChild(about);
}

function interact(){
    let interact = document.createElement("div");
    let interactHead = document.createElement("h1");
    let buttonPress = document.createElement("button");
    let buttonCount = document.createElement("h2");
    interact.appendChild(interactHead);
    interact.appendChild(buttonPress);
    interact.appendChild(buttonCount);
    interactHead.innerHTML="Interact Page";
    buttonPress.innerHTML="Click me to increment counter!"
    buttonCount.innerHTML="Current counter: "+counter;
    buttonPress.addEventListener("click", function(){
        counter = counter+1;
        buttonCount.innerHTML="Current counter: "+counter;
    })
    document.body.querySelector(".wrapper").appendChild(interact);
}
navigation();
homePage();
