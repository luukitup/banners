window.addEventListener('load', function () {
    
    var currentStage = 1;
    var amountOfStages = 4;

    // Skips the first slide
    var timePerSlide =  [1000, 1000, 5000, 100]
    var element = document.querySelector('#banner');

    var next = document.querySelector('#next');
    var stage = document.querySelector('#currentStage');
    var prev = document.querySelector('#prev');

    var stageTimer = function() {
        moveToNextStage()
        setTimeout(stageTimer, timePerSlide[(currentStage - 1)]);
    }
    if(!next){
        setTimeout(stageTimer, timePerSlide[(currentStage - 1)]);
    }
    

    function moveToNextStage(){

        element.classList.remove(("stage-" + currentStage))

        if(currentStage < amountOfStages)
        {
            currentStage++;
        }
        else{
            currentStage = 1; 
        }
        
        var stageToAdd = "stage-" + currentStage;

        element.classList.add(stageToAdd)

        if(stage){
            stage.innerHTML = currentStage;
        }
        
    }
    if(next){
        next.onclick = function(){
            moveToNextStage();
        }
    }
    
})

var clickArea = document.getElementById('clickTag1');

var clickTAGvalue = dhtml.getVar('clickTAG', 'https://www.htm.nl/meivakantie?&utm_source=online&utm_medium=display_ad&utm_campaign=marketing&utm_content=uitjevaneencent&utm_term=b_moeder');
var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');

clickArea.onclick = function() {
    window.open(clickTAGvalue,landingpagetarget);
}   