window.addEventListener('load', function () {
    
    var currentStage = 1;
    var amountOfStages = 2; // 6 Stages

    // Skips the first slide
    var timePerSlide =  [0, 3500, 3500]
    var element = document.querySelector('#banner');

    var next = document.querySelector('#next');
    var stage = document.querySelector('#currentStage');
    var prev = document.querySelector('#prev');

    var stageTimer = function() {
        moveToNextStage()
        setTimeout(stageTimer, timePerSlide[(currentStage)]);
    }
    if(!next){
        setTimeout(stageTimer, timePerSlide[currentStage]);
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

var clickTAGvalue = dhtml.getVar('clickTAG', 'https://www.wildeganzen.nl/help-mee/donateurs-in-beeld-o-a?utm_source=display&utm_medium=cpc&utm_campaign=donateursinbeeld&utm_content=annekaren_BANNERIMAGE');
var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');

clickArea.onclick = function() {
    window.open(clickTAGvalue,landingpagetarget);
}   