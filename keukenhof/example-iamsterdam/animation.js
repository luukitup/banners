var maxAnimationTime = 3;
var developmentmode = true;
var loopDuration;
var maxLoops;
var canvasWidth;
var canvasHeight;
var loops = 0;
var master;
var targets
///////////////////// init ///////////////////// 

function init() {

  checkCanvasSize();	 
  splitText();
	setMasterTimeline();
	createTimeLine();

	//mouseMovement("banner", "textWrapper1");

  

}

///////////////////// animations ///////////////////// 


function setPositions(){

	var tl = new TimelineMax();
	tl.set(".paintWrapper", {rotation:-5},0);
  tl.set(".splitText2", {rotation:-5},0);
  tl.set(".splitText3", {rotation:-5},0);

  tl.set("#banner", {autoAlpha: 1},0);
	



	return tl;
}

	function frame1(){

	var tl = new TimelineMax({});

	if (!(/Edge/.test(navigator.userAgent))) {

  }
  

  tl.from(".bg", {rotation:0.1, scale:1.1, transformOrigin:"50% 50%", ease:"power1.out", duration:10},0);    

  tl.from(".splitText1 .splitLines", {force3D:false, autoAlpha:0, x:-30, stagger:0.2, duration:1, ease:"power3.out"},0); 



  
   

	return tl;
}

  function frame2(){

  var tl = new TimelineMax({});

  if (!(/Edge/.test(navigator.userAgent))) {

  }
  




  tl.from(".paint1", {yPercent:-100, duration:.3, ease:"power3.inOut"},0); 
  tl.from(".paint2", {yPercent:100, duration:.3, ease:"power3.inOut"},0.2); 
  tl.from(".paint3", {yPercent:-100, duration:.3, ease:"power3.inOut"},0.4); 
  tl.from(".paint4", {yPercent:100, duration:.3, ease:"power3.inOut"},0.6); 
  tl.from(".paint5", {yPercent:-100, duration:.3, ease:"power3.inOut"},0.8); 
  tl.from(".paint6", {yPercent:100, duration:.3, ease:"power3.inOut"},1); 
  tl.from(".paint7", {yPercent:-100, duration:.3, ease:"power3.inOut"},1.2); 

  tl.from(".line1", {width:"0px", duration:.3, ease:"power1.in"},.9);   
  tl.from(".line2", {width:"0px", duration:.2, ease:"power1.out"},1.3);   

  tl.from(".splitText2 .splitChars", {force3D:false, autoAlpha:0, stagger:0.05, duration:.01},1.5);   

  tl.from(".url", {autoAlpha:0, duration:.8, ease:"power1.in"},1.2);   
   

  return tl;
}


  function frame3(){

  var tl = new TimelineMax({});

  if (!(/Edge/.test(navigator.userAgent))) {

  }
  
  tl.to(".splitText1", {autoAlpha:0, duration:.7, ease:"power1.in"},0);   
  tl.to(".splitText2", {autoAlpha:0, duration:.7, ease:"power1.in"},0);  
  tl.to(".line1", {autoAlpha:0, duration:.7, ease:"power1.in"},0);  
  tl.to(".line2", {autoAlpha:0, duration:.7, ease:"power1.in"},0);  

  tl.from(".splitText3 .splitChars", {force3D:false, autoAlpha:0, stagger:0.1, duration:.01},.7);   
  tl.from(".splitText4", {force3D:false, autoAlpha:0, duration:.01},1.2);   
  tl.from(".splitText5", {force3D:false, autoAlpha:0, duration:.01},1.8);   



  tl.from(".splitText6", {autoAlpha:0, duration:.8, ease:"power1.in"},2.4);   

  tl.to(".url", {letterSpacing:"1px", duration:.25, ease:"power1.in", yoyo:true, repeat:3, transformOrigin:"center center", force3D:false},3.4);   


   

  return tl;
}



function loop(){
	var tl = new TimelineMax();

	return tl;
}


function createTimeLine() {

	// default
	master.add(setPositions());
	
	// animation
	master.add(frame1(), 0);
  master.add(frame2(), 1.5);
  master.add(frame3(), 6);

	master.add(checkLoops,"+=1")
	master.add(loop(),"+=0");
	
}

///////////////////// functions ///////////////////// 

function setMasterTimeline(){
	master = new TimelineMax({
			onStart: function() {
								loopDuration = master.duration() / master.timeScale()	
								maxLoops = Math.floor(maxAnimationTime/loopDuration);

								log("loopDuration:", loopDuration)
								log("maxLoops:", maxLoops)				
 
			},			
			repeat:-1,

		});
}


function rollOver() {

  gsap.set(".cta", {background:"rgb(233,6,103,1)"});  

/*	gsap.to("#cta", {scale:.9, duration:.2, ease:"power1.easeInOut"});
	gsap.to("#cta", {scale:1, duration:.2, ease:"power1.easeInOut", delay:0.2});*/
};

function rollOut() {

  gsap.set(".cta", {background:"linear-gradient(90deg, rgba(255,96,0,1) 0%, rgba(233,6,103,1) 100%)"});  

/*  gsap.to("#cta", {scale:.9, duration:.2, ease:"power1.easeInOut"});
  gsap.to("#cta", {scale:1, duration:.2, ease:"power1.easeInOut", delay:0.2});*/
};


function checkLoops() {

    if (loops === maxLoops || maxLoops === 0) {
        master.pause();
        log("animationDone")
    }
  
    loops++

};

function log(name, element){
    if (developmentmode){
        if(element === undefined){
            element = ""
        }
        console.log(name, element)
    }
}



function checkCanvasSize() {
    canvasWidth = document.getElementById('banner').offsetWidth;
    canvasHeight = document.getElementById('banner').offsetHeight;
    log("canvasWidth" ,canvasWidth)
    log("canvasHeight" ,canvasHeight)  
};


function mouseMovement(el, target){



    document.getElementById(el).addEventListener("mousemove", mouseMoving);
    var target = document.getElementById(target)

    function mouseMoving(e){
 
   	    element = this;

        mouseX = e.offsetX;
        mouseY = e.offsetY;
console.log(mouseX)
        update(element, target)

    };
    

    function update(){

  
    
        var gsapMouseToRotation = gsap.utils.pipe(
		        gsap.utils.clamp(0, element.offsetWidth),
		        gsap.utils.mapRange(0, element.offsetWidth, -50, 50),
		        gsap.utils.snap(1)

   	);

    gsap.to(target, {duration:.25, rotationY:gsapMouseToRotation(mouseX), overwrite:"all", ease:"power1.easeOut"});

    }
};




/*gsap.utils.clamp(0, 100, var); 
var clamper = gsap.utils.clamp(0, 100);	
clamper(val)
*/
// snapt naar het dichtsbijzijnde getal als het buiten de min max valt


/*var mapper = gsap.utils.mapRange(inMin, inMax, outMin, outMax);
mapper(val)*/

//var random = gsap.utils.random(-10, 50, true);

  



function gsapRandomNumber(min, max){

    var pipe = gsap.utils.pipe(

       gsap.utils.random(min, max, true),
       gsap.utils.snap(1),
       //gsap.utils.normalize(0, 100)
    );

    return (pipe())

};

function gsapNormalize(value){

    var pipe = gsap.utils.pipe(

       gsap.utils.random(min, max, true),
       gsap.utils.snap(1),
       //gsap.utils.normalize(0, 100)
    );

    return (pipe())

};



function splitText(){

  targets = gsap.utils.toArray(".splitText"); 
  var split = new SplitText(targets, {type:"chars,words,lines", position:"absolute", wordsClass:"splitWords splitWord++", linesClass:"splitLines splitLines++", charsClass:"splitChars"});

  log("split", split)

}
