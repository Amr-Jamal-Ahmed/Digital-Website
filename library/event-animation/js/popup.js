import eventsHandler from "./helper/eventsHandler.js";
import intialValues from "./helper/intialValues.js";

let popup = {
    classes : ["popup","show-popup"]
};

function popupAnimation(ele){
    let popupClasses = popup.classes;
    // console.log("poppage ",ele,popupClasses);
    intialValues(ele);
    eventsHandler(ele,popupClasses);
}
let targetElements = document.querySelectorAll(".ea,.ea-root");
targetElements.forEach((ele)=>{
    if(ele.dataset.eaType == "popup")
    popupAnimation(ele);
});