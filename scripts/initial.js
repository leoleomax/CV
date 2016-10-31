
function tagLinkCreation(){
  var mySelected = $('#change')[0];
  for (var i = 0; i < mySelected.length; i++) {
        var tagLink = document.createElement('link');
        tagLink.className = 'tagLink';
        tagLink.type = 'text/css';
        tagLink.rel = 'stylesheet';
        tagLink.href = 'content/styles/' + mySelected.options[i].value + '.css';
       $('head')[0].appendChild(tagLink);
  } 
}
function mediaToDefault() {
  var myLinkTags = $('.tagLink');
  var mySelected = $('#change');
  for (var i = 0; i < myLinkTags.length; i++) {
    myLinkTags.eq(i).attr('media','default');
    mySelected.attr("class","default");
  }
}
function mediaChange() {
    mediaToDefault();
    var myLinkTags = $('.tagLink');
    var mySelected = $('#change');
    var mySelectedOpt = mySelected.val();
    var myLink=$("#ico");
    var audio=$("#audio")[0];
    for (var i = 0; i < myLinkTags.length; i++) {
        if (myLinkTags.eq(i).attr('href').indexOf(mySelectedOpt)>-1) {
            myLinkTags.eq(i).attr('media', 'screen');
            mySelected.attr("class",mySelectedOpt);
            myLink.attr('href', 'content/imgs/icos/' + mySelectedOpt + '.ico');
            audio.play();
        }
     
    }
   
}
window.onload = function () {

    tagLinkCreation();
    mediaChange();
   $('#change').on('change', mediaChange);
/*    document.getElementById('mediaScreen').addEventListener('change', mediaChange);*/

    $('tbody:eq(0) td:not("td:eq(1)")').not(".dropDowns").click(function(){
      var oldInfo=$(this).html();
      var newInfo=prompt("change",oldInfo);
      var check=confirm("are you sure?");
      if(check==true){
        $(this).html(newInfo);
      }
      else{}
    })
    $('tbody:eq(0) tr td:first-child').not(".dropDowns").click(function(){
      alert($(this).html());
    })
    $('tbody:eq(0) th').click(function(){
      alert($(this).html());
    })
    $("#switch_on_off").on("click",function(){
      if($("#switch_on_off").css("color")=="rgb(0, 128, 0)"){
        $("table").css("display","none");
        $("#switch_on_off").css("color","red");
      }
      else{
         $("table").css("display","block");
        $("#switch_on_off").css("color","green");
         
      }
   

   
     
    })
}
