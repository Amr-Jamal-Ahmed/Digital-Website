// handle events for make changes on target element
export default function eventsHandler(ele,classesAnimation){
    if(ele.dataset.eaEvent == "load"){
        // handle target element that will take animation when page load
        window.addEventListener("load",(e)=>{
            let onLoadClass = classesAnimation[(classesAnimation.length - 1)];
            // use this function for add onLoadClass on target ele 
            // console.log("ele",ele,"class "+onLoadClass);
            
            if(isEleInView(ele)){
                addClass(ele,onLoadClass);
            } else {
                window.addEventListener("scroll",(e) => {if(isEleInView(ele)) addClass(ele,onLoadClass)});
            }
        });
    }else if(ele.dataset.eaEvent == "scroll"){
        // intial offset object
        let offsetObj = {
            offsetTop : "0",
            offsetHeight : "0"
        }
        // this class for intial animation property
        let intialClass = classesAnimation[0],
        // this class for show animation
        showClass = classesAnimation[1];
        // use this function for add intialClass on ele
        addClass(ele,intialClass);
        // handle target element that will take animation when user scroll
        // let additionDistance = checkNumberValidation(ele.dataset.eaDecOffsetTop) - checkNumberValidation(ele.dataset.eaIncOffsetTop);
        // additionDistance *= -1;
    
        // console.log("ele ",ele,"dec  "+ele.dataset.eaDecOffsetTop+"  inc "+ele.dataset.eaIncOffsetTop+"  dis "+additionDistance);
        // if(window.scrollY == 0 && isEleInView(ele)){
        //     addClass(ele,intialClass);
        // }
        let position = {
            top : 1000000,
            middle : 2,
            bottom : 1
        };
        let additionDistance = null;
        window.addEventListener("scroll",(e)=>{
            // this statement for reset offsetTop property to 0
            offsetObj.offsetTop = "0";
            offsetObj.offsetHeight = "0"; 
            // function discription in line 47
            calcOffsetTopAndOffsetHeight(offsetObj,ele);
            // this if condtion for handle element when user scroll
            // if element offsetTop greater than scrollY value it will
            // add showClass for show animation
            // else it will remove showClass from element if it there 
          
            // if( (parseFloat(offsetObj.offsetTop) + additionDistance ) <= window.scrollY &&
            // ( parseFloat(document.getElementById(`${ele.dataset.eaParent}`).offsetTop) + parseFloat(document.getElementById(`${ele.dataset.eaParent}`).offsetHeight) ) >= window.scrollY){
          
            // if((Math.round(parseFloat(ele.getBoundingClientRect().top)) / Math.round(parseFloat(ele.getBoundingClientRect().bottom))) == 1 &&
            // isEleInView(ele)){
            //     console.log("ele",ele,"top "+parseFloat(ele.getBoundingClientRect().top)+" bottom "+parseFloat(ele.getBoundingClientRect().bottom)+"centered");
            // }
            additionDistance = Math.ceil ( parseFloat(ele.offsetHeight) / position[`${ele.dataset.eaStartFrom || "middle"}`] );
            if( (parseFloat(ele.getBoundingClientRect().top)+ additionDistance) <= window.innerHeight &&
                isEleInView(ele)){
                // use this function for add showClass on target ele
                addClass(ele,showClass);
                // if(ele.tagName.toString().includes("FOOTER"))
                // console.log("ele",ele,"eletop  "+ele.offsetTop+"  scrolly  "+window.scrollY); 
            }
            // else if (counter == window.scrollY){
            //     addClass(ele,showClass);
            // }
            else if(isEleInView(ele) == false){
                // use this function for remove showClass on target ele
                removeClass(ele,showClass);
            }

            if(window.scrollY == 0){
                removeClass(ele,showClass);
            }
        });
    }
}
// function (calcOffsetTopAndOffsetHeight) calculate
// offsetTop for starter element
//  and offsetHeight for parent element
function calcOffsetTopAndOffsetHeight(offsetObj,ele){
    if (ele.dataset.eaTarget == "parent") {
        let parentEle = document.getElementById(`${ele.dataset.eaParent}`);
        // function discription in line 64
        calcOffsetTopToBody(parentEle,offsetObj);
        offsetObj.offsetHeight = document.getElementById(`${ele.dataset.eaParent}`).offsetHeight;
    } else {
        // function discription in line 64
        calcOffsetTopToBody(ele,offsetObj);
        offsetObj.offsetHeight = ele.offsetHeight;
    }
    // console.log("ele",ele,"target "+ele.dataset.eaTarget);
    offsetObj.offsetHeight = (document.getElementById(`${ele.dataset.eaParent}`))? document.getElementById(`${ele.dataset.eaParent}`).offsetHeight : ele.offsetHeight;
    // console.log("elehei",ele,"h  "+offsetObj.offsetHeight);
    
}
// function (calcOffsetTopToBody) to calculate 
// offset top from target element to body
function calcOffsetTopToBody(ele,offsetObj){
    if(ele.offsetParent.tagName.toString().includes("BODY")){
        offsetObj.offsetTop = parseFloat(offsetObj.offsetTop) + parseFloat(ele.offsetTop);
        return;
    } else {
        offsetObj.offsetTop = offsetObj.offsetTop = parseFloat(offsetObj.offsetTop) + parseFloat(ele.offsetTop);
        return calcOffsetTopToBody(ele.parentElement,offsetObj);
    }
}
function isEleInView(ele){
    if(ele.getBoundingClientRect().top <= window.innerHeight){
        return true;
    } 
    return false;
}
// function (addClass) add class to a specific element
// it takes target ele and class name
function addClass(ele,className){
    ele.classList.add(`${className}`);
}
// function (removeClass) remove class from a specific element
// it takes target ele and class name
function removeClass(ele,className){
    ele.classList.remove(`${className}`);
}
// function (checkNumberValidation) for check 
// if value is a correct number or not 
// if its correct it will return number else it will return false
function checkNumberValidation(value){
    value = parseFloat(value);
    return (!isNaN(value))? value : 0;  
}
// ******************************************************