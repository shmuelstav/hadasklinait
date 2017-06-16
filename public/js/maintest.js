/**
 * Created by shmuel on 6/16/2017.
 */
function goToByScroll(id){
   alert($("#"+id).offset().top);
    // Scroll
    var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
    if (iOS) {
        alert("ios");
        $('html, body', parent.document).animate({ scrollTop: 1600},1500,"easeOutQuart");
    } else {
        $('html,body').animate({
                scrollTop: $("#"+id).offset().top}
            , 'slow');
    }
}




$(document).ready(function() {
    $("#button").on("click", function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        alert("work");
        goToByScroll("e8");
    });

});

