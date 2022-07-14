var currentStage = 1;
var amountOfStages = 6; 
var timeBetweenStages = 1000;

var timePerSlide =  [1250, 3250, 3250, 3000, 500, 100]
var element = document.querySelector('#banner');

var myFunction = function() {
    setTimeout(myFunction, timePerSlide[(currentStage - 1)]);
    //console.log(timePerSlide[(currentStage - 1)]);
    moveToNextStage()
}
setTimeout(myFunction, timePerSlide[(currentStage - 1)]);

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