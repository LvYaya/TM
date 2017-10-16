$(function(){
    $('a').mouseover(function(){
        $('img').css('transform','scale(2,2)');
    })
    $('a').mouseout(function(){
        $('img').css('transform','scale(1,1)');
    })
})