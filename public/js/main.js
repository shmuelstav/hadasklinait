/**
 * Created by shmuel on 5/2/2017.
 */


$(document).ready(function() {

  /*  $('#nav1').on( "click", function() {
        alert(1);
        $(document).scrollTo('#contact');
    });*/


    function goToByScroll(id){
        // Reove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("#"+id).offset().top}
            , 'slow');
    }

    $("#linkcontact, #linkabout_me_p_c").on("click",function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });
});


