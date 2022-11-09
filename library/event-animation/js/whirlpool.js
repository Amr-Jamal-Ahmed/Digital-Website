import eventsHandler from "./helper/eventsHandler.js";
import intialValues from "./helper/intialValues.js";

let whirlpool = {
    classes : ["whirlpool","show-whirlpool","show-whirlpool-on-load"]
};

function whirlpoolAnimation(ele){
    let whirlpoolClasses = whirlpool.classes;

    intialValues(ele);
    eventsHandler(ele,whirlpoolClasses);
}
let targetElements = document.querySelectorAll(".ea,.ea-root");
targetElements.forEach((ele)=>{
    if(ele.dataset.eaType == "whirlpool")
    whirlpoolAnimation(ele);
});