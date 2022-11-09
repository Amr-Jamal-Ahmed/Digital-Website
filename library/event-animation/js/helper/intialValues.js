// properties object
let props = {
    transformOrigin : null,
    animationDur : null,
    animationDelay : null,
    animationTimingFunc : null,
    animationIterationCount : null,
    loadingTime : null,
    fadeTopDist : null,
    fadeRightDist : null,
    fadeBottomDist : null,
    fadeLeftDist : null
};

// intial animation property cross target element dataset for the target element

export default function intialValues(ele){
    window.addEventListener("DOMContentLoaded",(e)=>{
        setProps(ele);
    
        if(props.transformOrigin !== null){
            ele.style.setProperty("--EA-transform-origin",`${props.transformOrigin}`);
        }
        if(props.animationDur !== null){
            ele.style.setProperty("--EA-animation-dur",`${props.animationDur}ms`);
        }
        if(props.animationDelay !== null){
            ele.style.setProperty("--EA-animation-delay",`${props.animationDelay}ms`); 
        }
        if(ele.dataset.eaWaitLoading == "true"){
            ele.style.setProperty("--EA-animation-delay",`${Number(props.animationDelay) + Number(props.loadingTime)}ms`);
            console.log("t : " + getComputedStyle(ele,null).animationDelay);
        }
        if(props.animationTimingFunc !== null){
            ele.style.setProperty("--EA-animation-timing-func",`${props.animationTimingFunc}`);
            // console.log(ele.style["--EA-animation-timing-func"],ele)
        }
        if(props.animationIterationCount !== null){
            ele.style.setProperty("--EA-animation-iteration-count",`${props.animationIterationCount}`);
        }
        if(props.fadeTopDist !== null){
            ele.style.setProperty("--EA-fade-top-dist",`${props.fadeTopDist}`);
        }
        if(props.fadeRightDist !== null){
            ele.style.setProperty("--EA-fade-right-dist",`${props.fadeRightDist}`);
        }
        if(props.fadeBottomDist !== null){
            ele.style.setProperty("--EA-fade-bottom-dist",`${props.fadeBottomDist}`);
        }
        if(props.fadeLeftDist !== null){
            ele.style.setProperty("--EA-fade-left-dist",`${props.fadeLeftDist}`);
        }
    });
}

// seting properties object
function setProps(ele){
    props.transformOrigin         = ele.dataset.eaTransformOrigin || null;
    props.animationDur            = ele.dataset.eaAnimationDur || null;
    props.animationDelay          = ele.dataset.eaAnimationDelay || null;
    props.animationTimingFunc     = ele.dataset.eaAnimationTimingFunc || null;
    props.animationIterationCount = ele.dataset.eaAnimationIterationCount || null;
    props.loadingTime             = ele.dataset.eaLoadingTime || "0";
    props.fadeTopDist             = ele.dataset.eaFadeTopDist || null;
    props.fadeRightDist           = ele.dataset.eaFadeRightDist || null;
    props.fadeBottomDist          = ele.dataset.eaFadeBottomDist || null;
    props.fadeLeftDist            = ele.dataset.eaFadeLeftDist || null;
}
