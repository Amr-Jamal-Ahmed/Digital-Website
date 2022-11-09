const dropdownBtn = document.querySelector(".navbar-toggler") , 
mainBtn = document.querySelectorAll(".main-btn"),
navbar = document.querySelector("nav"),
darkModeRadioBtn = document.getElementById("dark-mode-btn"),
lightModeRadioBtn = document.getElementById("light-mode-btn");

// ***************** globel methods *****************
    //(classActiveToggler) hellper function for toggle active class
    // it takes target element and event type
    function classActiveToggler(ele,eventType="click"){
        if(eventType === "click"){
            ele.classList.toggle("active");
        }
    }
// ************************* start javascript for navbar ********************************   
navbar.addEventListener("load",(e)=>{
    this.window.addEventListener("scroll",(e)=>{
        navbarHandler(navbar);
        navbarAnimation(navbar);
    });
});
// this.window.addEventListener("resize",(e)=>{
//     navbarHandler(navbar);
//     navbarAnimation(navbar);
// });
//(navbarHandler) this function for handle navbar when user scroll
function navbarHandler(navbar){
    let marginTop = (window.matchMedia("(min-width: 992px)").matches)? document.body.dataset.bsOffset : navbar.clientHeight;
    
    // for reset home section marginTop when user scroll    
    document.querySelector("#home").style.marginTop=`${marginTop}px`;

    if(this.window.scrollY > navbar.clientHeight){
        // this line for make navbar fixed at top and  animated by adding stuck-navbar class
        navbar.classList.add("stuck-navbar");

        // this if condition for check
        // if dropdown button has class close-dropdown or not if has it will
        // remove class close-dropdown on drop down button
        // and close dropdown 
        if(dropdownBtn.firstElementChild.classList.contains("close-dropdown")){
            // remove class active class from dropdown button
            dropdownBtn.firstElementChild.classList.remove("active");
            // remove class close-dropdown from dropdown button
            dropdownBtn.firstElementChild.classList.toggle("close-dropdown",false);
            // remove class show from div (dropdown container) for close dropdown 
            document.querySelector("nav div.collapse").classList.remove("show");
        }

    }else{
        // remove stuck-navbar class from navbar 
        navbar.classList.toggle("stuck-navbar",false);  
        // remove navbar-collapse from div (the container of dropdown)
        document.querySelector("nav div.collapse").classList.toggle("navbar-collapse",true);

        // reset home section marginTop
        // document.querySelector("#home").style.marginTop=`${0}px`;

        // this if condition for check
        // if dropdown button has class active or not if has it will add
        // class close-dropdown on drop down button 
        if(dropdownBtn.firstElementChild.classList.contains("active"))
        dropdownBtn.firstElementChild.classList.toggle("close-dropdown",true);
    }

}
//(navbarAnimation) this function for navbar animation
function navbarAnimation(navbar){
    if(this.window.scrollY > navbar.clientHeight){
        navbar.classList.add("show-popup");
    }else{
        navbar.classList.remove("show-popup");
    }
}
// ************************* end javascript for navbar ********************************

// *********************** start javascript for dropdown button animation ******************************
dropdownBtn.addEventListener("click",(e)=>{ 
    // function (classActiveToggler) description in line 8
    classActiveToggler(e.currentTarget.firstElementChild,"click");
});
// ************************** start javascript for dark-mode toggler *********************************
// helper funciton
    //(addDarkMode) function for add dark mode
    // it take dark class name
    function addDarkMode(darkClass){
        document.body.classList.toggle(`${darkClass}`,true);
        window.localStorage.setItem("mode",`dark`);
    }
    //(removeDarkMode) function for remove dark mode
    // it take dark class name
    function removeDarkMode(darkClass){
        document.body.classList.toggle(`${darkClass}`,false);
        window.localStorage.setItem("mode",`light`);
    }

window.addEventListener("load",(e)=>{
    // for add transition on body background after loading page
    document.body.style.transition = "background-color 0.5s";
   // when page load it will check 
   // if user select dark mode or light mode before
    if (window.localStorage.getItem("mode") == "dark") {
        darkModeRadioBtn.click();
        // this function description in line 78
        addDarkMode("dark");
    } else {
        document.body.classList.remove("dark");
        // this statement for make lightModeRadioBtn checked
        lightModeRadioBtn.click();
        // this function description in line 84
        removeDarkMode("dark");
    }
});
//add click event on dark mode button for add dark mode
darkModeRadioBtn.addEventListener("click",(e)=>{
    // this function description in ine 78
    addDarkMode("dark");
});
//add click event on light mode button for remove dark mode
lightModeRadioBtn.addEventListener("click",(e)=>{
    // this function description in ine 84
    removeDarkMode("dark");
});