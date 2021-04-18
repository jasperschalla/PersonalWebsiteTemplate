var score = 0;
var scoreBlob = 0;
var scoreBlobSeen = 0;
var scoreSatelite = 0;
var scoreMeteor = 0;
var scoreWhale = 0;

// 1. Scroll animation
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.showScroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('isVisible');
      } else {
        element.classList.remove('isVisible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// 2. Show and hide Projects

function showProject(e,no){
    e.stopPropagation();
    var prj = "project" + no;
    var element = document.getElementById(prj);
    element.classList.add("expand");
    document.getElementById(("projectText"+no)).classList.add("info_expand");
    document.getElementById(("close"+no)).classList.add("icon_expand");
}

function hideProject(e,no){
    e.stopPropagation();
    var prj = "project" + no;
    var element = document.getElementById(prj);
    element.classList.remove("expand");
    document.getElementById(("projectText"+no)).classList.remove("info_expand");
    document.getElementById(("close"+no)).classList.remove("icon_expand");
}

// 3. JQuery event

$(document).ready(function(){
  $("#tt1").on({
      mouseover: function() {
          $("#ttt1").css("visibility","visible");
      },
      mouseleave: function() {
          $("#ttt1").css("visibility","hidden");
      }
  });
  $("#tt2").on({
      mouseover: function() {
          $("#ttt2").css("visibility","visible");
      },
      mouseleave: function() {
          $("#ttt2").css("visibility","hidden");
      }
  });
  $("#tt3").on({
      mouseover: function() {
          $("#ttt3").css("visibility","visible");
      },
      mouseleave: function() {
          $("#ttt3").css("visibility","hidden");
      }
  });
    
  $("#message").click(function(){
     $("#bottom").css("filter","blur(5px)");
     $("#parent_container").css("filter","blur(5px)");
     $("#background").css("filter","blur(5px)");
     $("#shootingStarsGame").css("filter","blur(5px)"); 
     $("#popup").css("display","block");  
  });
    
  $("#messageExit").click(function(){
     $("#popup").css("display","none");
     $("#parent_container").css("filter","none");
     $("#background").css("filter","none"); 
     $("#bottom").css("filter","none");
    $("#shootingStarsGame").css("filter","none"); 
  });
    
  $("#shootingStar1, #shootingStar2, #shootingStar3, #shootingStar4, #shootingStar5").click(function(){
     score++;
     var scoreText = "Shooting stars score: " + score;
     $("#scoreDisplay").text(scoreText);
     $(".score").addClass("showScore");
     var starInfotext = score + "x";
     $("#resultTextInfoStar").text(starInfotext);
     $("#resultTextScoreStar").text(score);
     $("#resultTextTextStar").text("You are pretty fast! Try to catch as many shooting stars as possible");
  });
    
  $("#blobfish").click(function(){
     scoreBlobSeen++;
     scoreBlob = 1;
     var scoreTextBlob = "You have found a blobfish!";
     $("#scoreDisplayBlob").text(scoreTextBlob);
     $(".scoreBlob").addClass("showScore");
     $("#resultTextInfoBlob .fa").removeClass("fa-times");
     $("#resultTextInfoBlob .fa").addClass("fa-check");
     $("#resultTextInfoBlob .fa").css("color","green");
     $("#resultTextScoreBlob").text(scoreBlob);
     $("#resultTextTextBlob").text("You saw one of the most ugly creatures. However, some say it is really sweet");  
     if (scoreBlobSeen>=5){
        $(".whale").addClass("showWhale");
        $(".whaleContainer").addClass("showWhaleContainer");
        $(".dropletWhale").addClass("showDropletWhale");
        $(".dropletContainer").addClass("showDropletContainer");
     } else if (scoreBlobSeen<5 && scoreBlobSeen>1){
        $("#resultTextTextWhale").text("You are on the right track. Keep doing what you already did!");
     }
  });
  
  $("#satelite").click(function(){
     scoreSatelite = 1;
     var scoreTextSatelite = "You have found a satelite!";
     $("#scoreDisplaySatelite").text(scoreTextSatelite);
     $(".scoreSatelite").addClass("showScore");
     $("#resultTextInfoSatelite .fa").removeClass("fa-times");
     $("#resultTextInfoSatelite .fa").addClass("fa-check");
     $("#resultTextInfoSatelite .fa").css("color","green");
     $("#resultTextTextSatelite").text("You saw the satelite, that was easy!"); 
     $("#resultTextScoreSatelite").text(scoreSatelite);
  });

  $("#meteor").click(function(){
     scoreMeteor = 1;
     var scoreTextMeteor = "You have found a flying meteor!";
     $("#scoreDisplayMeteor").text(scoreTextMeteor);
     $(".scoreMeteor").addClass("showScore");
     $("#resultTextInfoMeteor .fa").removeClass("fa-times");
     $("#resultTextInfoMeteor .fa").addClass("fa-check");
     $("#resultTextInfoMeteor .fa").css("color","green");
     $("#resultTextTextMeteor").text("You saw the flying meteorit. Luckily, you did not get hit!");
     $("#resultTextScoreMeteor").text(scoreMeteor);
  });
   
    
  $(".whale").click(function(){
     scoreWhale = 3;
     var scoreTextWhale = "WOW! You saw a whale!";
     $("#scoreDisplayWhale").text(scoreTextWhale);
     $(".scoreWhale").addClass("showScore");
     $("#resultTextInfoWhale .fa").removeClass("fa-times");
     $("#resultTextInfoWhale .fa").addClass("fa-check");
     $("#resultTextInfoWhale .fa").css("color","green");
     $("#resultTextScoreWhale").text(scoreWhale);
     $("#resultTextTextWhale").text("You did it! You saw the rare blue whale!");
  });
    
  $("#flexContainer").click(function(){
     $(".score").removeClass("showScore");
     $(".score").removeClass("scoreShrink");
     $(".score").addClass("scoreExpand");
     $("#exitScore").css("visibility","visible");
  });
  
  $("#flexContainerBlob").click(function(){
     $(".scoreBlob").removeClass("showScore");
     $(".scoreBlob").removeClass("scoreShrink");
     $(".scoreBlob").addClass("scoreExpand");
     $("#exitScoreBlob").css("visibility","visible");
  });
    
  $("#flexContainerSatelite").click(function(){
     $(".scoreSatelite").removeClass("showScore");
     $(".scoreSatelite").removeClass("scoreShrink");
     $(".scoreSatelite").addClass("scoreExpand");
     $("#exitScoreSatelite").css("visibility","visible");
  });
    
  $("#flexContainerMeteor").click(function(){
     $(".scoreMeteor").removeClass("showScore");
     $(".scoreMeteor").removeClass("scoreShrink");
     $(".scoreMeteor").addClass("scoreExpand");
     $("#exitScoreMeteor").css("visibility","visible");
  });
    
  $("#flexContainerWhale").click(function(){
     $(".scoreWhale").removeClass("showScore");
     $(".scoreWhale").removeClass("scoreShrink");
     $(".scoreWhale").addClass("scoreExpand");
     $("#exitScoreWhale").css("visibility","visible");
  });
    
  $("#exitScoreBlob").click(function(){
     $(".scoreBlob").removeClass("scoreExpand");
     $(".scoreBlob").addClass("scoreShrink");
  });
    
  $("#exitScore").click(function(){
     $(".score").removeClass("scoreExpand");
     $(".score").addClass("scoreShrink");
  });
    
  $("#exitScoreSatelite").click(function(){
     $(".scoreSatelite").removeClass("scoreExpand");
     $(".scoreSatelite").addClass("scoreShrink");
  });
    
  $("#exitScoreMeteor").click(function(){
     $(".scoreMeteor").removeClass("scoreExpand");
     $(".scoreMeteor").addClass("scoreShrink");
  });
    
  $("#exitScoreWhale").click(function(){
     $(".scoreWhale").removeClass("scoreExpand");
     $(".scoreWhale").addClass("scoreShrink");
  });

  $("#shootingStar1, #shootingStar2, #shootingStar3, #shootingStar4, #shootingStar5, #blobfish, #satelite, #meteor, .whale").click(function(){
     $(".finalScore").addClass("expandFinalScore"); 
  });
    
  $(".finalScore").click(function(){
     $(".finalScore").addClass("completeFinalScore");
     $("#bottom").css("filter","blur(5px)");
     $("#parent_container").css("filter","blur(5px)");
     $("#background").css("filter","blur(5px)");
     $("#shootingStar1, #shootingStar2, #shootingStar3, #shootingStar4, #shootingStar5,#satelite,#blobfishContainer, #meteor, #meteorCrash, .whale").css("filter","blur(5px)");
     $("#resultHeading").css("display","none");
     $(".resultShowHeading").addClass("makeVisibleHeading");
     $(".resultShowExit").addClass("makeVisibleExit");
     $(".resultText").addClass("resultTextExpand");
  });
    
  $(".resultShowExit").click(function(event){
      event.stopPropagation();
     $(".resultShowHeading").removeClass("makeVisibleHeading");
     $(".resultShowExit").removeClass("makeVisibleExit");
     $(".finalScore").removeClass("completeFinalScore");
     $(".resultText").removeClass("resultTextExpand");
     $("#resultHeading").css("display","block");
     $("#bottom").css("filter","none");
     $("#parent_container").css("filter","none");
     $("#background").css("filter","none");
     $("#shootingStar1, #shootingStar2, #shootingStar3, #shootingStar4, #shootingStar5,#satelite,#blobfishContainer, #meteor, #meteorCrash, .whale").css("filter","none");
  });
    
  $("#shootingStar1, #shootingStar2, #shootingStar3, #shootingStar4, #shootingStar5, #blobfish, #satelite, #meteor, .whale").click(function(){
      var saldo = score + scoreBlob + scoreSatelite + scoreMeteor + scoreWhale;
     $("#resultTextSaldo").text(saldo.toString()); 
  });
    
});


