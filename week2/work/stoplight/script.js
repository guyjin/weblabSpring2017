/**
 * Created by ben on 4/7/2015.
 */
$(function() {
    $('button').on('click',function() {
        $('.bulb').removeClass('on');
        $('button').removeClass('on');

        var color = $(this).attr('data-color');
        $("." + color).toggleClass('on');
        $(this).addClass('on');


    })
});
