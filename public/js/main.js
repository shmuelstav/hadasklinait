/**
 * Created by shmuel on 5/2/2017.
 */


$(document).ready(function() {

    /*google analitics */

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-61270998-3', 'auto');
    ga('send', 'pageview');



  /*  $('#nav1').on( "click", function() {
        alert(1);
        $(document).scrollTo('#contact');
    });*/


   /* function goToByScroll(id){
        // Reove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("#"+id).offset().top}
            , 'slow');
    }*/

    /*$("#linkcontact, #linkabout_me_p_c").on("click",function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function

        var target = $(this);
        target.css('overflow-y', 'hidden');
        goToByScroll($(this).attr("id"));
        target.css('overflow-y', 'auto');


    });*/
});


