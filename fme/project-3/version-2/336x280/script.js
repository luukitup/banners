window.addEventListener('load', function () {
    
    var currentStage = 1;
    var amountOfStages = 6;

    var timePerSlide =  [500, 800, 800, 2500, 2500, 100]
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