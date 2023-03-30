window.addEventListener('load', function () {
    
    var currentStage = 1;

    var timePerSlide =  [2500, 2500, 2500, 100]
    var element = document.querySelector('#banner');

    var next = document.querySelector('#next');
    var stage = document.querySelector('#currentStage');
    var prev = document.querySelector('#prev');

    var stageTimer = function() {
        moveToNextStage()
        setTimeout(stageTimer, timePerSlide[currentStage - 1]);
    }
    if(!next){
        setTimeout(stageTimer, timePerSlide[currentStage - 1]);
    }
    

    function moveToNextStage(){

        element.classList.remove(("stage-" + currentStage))

        if(currentStage < timePerSlide.length)
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

clickArea.onclick = function() {
    window.open('https://keukenhof.nl/nl/?utm_medium=banner&utm_source=iamsterdam&utm_campaign=keukenhof2023','_blank');
}   