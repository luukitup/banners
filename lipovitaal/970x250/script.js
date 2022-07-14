window.addEventListener('load', function () {
    
    var currentStage = 1;
    var amountOfStages = 4; // 6 Stages

    // Skips the first slide
    var timePerSlide =  [0, 2000, 2000, 500, 2000]
    var element = document.querySelector('#banner');

    var stageTimer = function() {
        moveToNextStage()
        setTimeout(stageTimer, timePerSlide[(currentStage)]);
    }
    setTimeout(stageTimer, timePerSlide[currentStage]);

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
    }
})

var clickArea = document.getElementById('clickTag1');

var clickTAGvalue = dhtml.getVar('clickTAG', 'http://www.example.com');
var landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');

clickArea.onclick = function() {
    window.open(clickTAGvalue,landingpagetarget);
}   