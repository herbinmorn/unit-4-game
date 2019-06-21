    var score;
    var target;
    var redXtal;
    var blueXtal;
    var yellowXtal;
    var greenXtal;
    var wins =0;
    var losses = 0;

    function clearInitialize() {
        score = 0;
        $("#score").html("<h2>0</h2>");
        target = getRandomInt()+30;
        console.log(target);
        $("#target").html("<h2>"+target+"</h2>");
        //crystals = ["red","blue","yellow","green"];

        
        redXtal=getRandomInt();
        console.log(redXtal);

        blueXtal=getRandomInt();
        console.log(blueXtal);

        yellowXtal=getRandomInt();
        console.log(yellowXtal);

        greenXtal=getRandomInt();
        console.log(greenXtal);
        


        function getRandomInt(){
            return Math.floor(Math.random()*10+2); 
        }
     }

     clearInitialize();

     $("#redXtal").click(function(){
       score += redXtal;
       $("#score").html("<h2>"+score+"</h2>");
       checkResult();
     });

     $("#blueXtal").click(function(){
       score += blueXtal;
       $("#score").html("<h2>"+score+"</h2>");
       checkResult();
     });
     
     $("#yellowXtal").click(function(){
       score += yellowXtal;
       $("#score").html("<h2>"+score+"</h2>");
       checkResult();
     });

     $("#greenXtal").click(function(){
       score += greenXtal;
       $("#score").html("<h2>"+score+"</h2>");
       checkResult();
     });
 
    function checkResult() {
       if(score === target){
           wins++;
           $("#record").html("You win!");
           $("#wins").html("wins:"+ wins);
           clearInitialize();
       }
       else if(score > target)
       {
           losses++;
           $("#record").html("You lost!");
           $("#losses").html("losses:"+ losses);
           clearInitialize();
       }
    }

       