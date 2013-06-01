$(document).ready(function(){
  
  var goodBuddy = new $.buddyBaller($('.Good .BuddyBaller'),{tone: 'good'});
  var badBuddy = new $.buddyBaller($('.Bad .BuddyBaller'),{tone: 'bad'});

  $("#rename").on("click",function(){
    goodBuddy.newname();        
    badBuddy.newname();
    return false;
  });
  
});