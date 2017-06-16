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
    function getScrollTopElement() {

        // if missing doctype (quirks mode) then will always use 'body'
        if ( document.compatMode !== 'CSS1Compat' ) return 'body';

        // if there's a doctype (and your page should)
        // most browsers will support the scrollTop property on EITHER html OR body
        // we'll have to do a quick test to detect which one...

        var html = document.documentElement;
        var body = document.body;

        // get our starting position.
        // pageYOffset works for all browsers except IE8 and below
        var startingY = window.pageYOffset || body.scrollTop || html.scrollTop;

        // scroll the window down by 1px (scrollTo works in all browsers)
        var newY = startingY + 1;
        window.scrollTo(0, newY);

        // And check which property changed
        // FF and IE use only html. Safari uses only body.
        // Chrome has values for both, but says
        // body.scrollTop is deprecated when in Strict mode.,
        // so let's check for html first.
        var element = ( html.scrollTop === newY ) ? 'html' : 'body';

        // now reset back to the starting position
        window.scrollTo(0, startingY);

        return element;
    }

// store the element selector name in a global var -
// we'll use this as the selector for our page scrolling animation.
    scrollTopElement = getScrollTopElement();
    function src(){
        alert(scrollTopElement);
        $(scrollTopElement).animate({ scrollTop: 1000 }, 500, function() {
            // normal callback
        });
    }


    $("#divbutton").on("click", function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        alert("work");
        setTimeout(window.scroll(0,5000),1000);
        //window.scrollBy(0, 5000);

    });

});




