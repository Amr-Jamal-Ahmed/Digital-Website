import eventsHandler from "./helper/eventsHandler.js";
import intialValues from "./helper/intialValues.js";

let fadeDir = {
    top     : {
        classes : ["fade-top","show","show-top-on-load"]
    },
    right   : {
        classes : ["fade-right","show","show-right-on-load"]
    },
    bottom  : {
        classes : ["fade-bottom","show","show-bottom-on-load"]
    },
    left    : {
        classes : ["fade-left","show","show-left-on-load"]
    }
};

// export default function fadeAnimation(ele){
function fadeAnimation(ele){
    let fadeClasses = fadeDir[`${ele.dataset.eaDir}`].classes;
    
    intialValues(ele);
    eventsHandler(ele,fadeClasses);  
}
let targetElements = document.querySelectorAll(".ea,.ea-root");
targetElements.forEach((ele)=>{
    if(ele.dataset.eaType === "fade"){
        fadeAnimation(ele);
    }
});