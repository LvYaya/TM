
$(function(){

//选项卡
    $('.fenleiShow li, .fugai div').mouseover(function(){
        $('.fenleiShow li').eq($(this).index()).addClass('on').siblings().removeClass('on');
        $('.fugai div').hide().eq($(this).index()).show();
    })
 
    $('.fenleiShow li, .fugai div').mouseout(function(){
        $('.fenleiShow li').eq($(this).index()).removeClass('on');
        $('.fugai div').eq($(this).index()).hide();
    })  


//焦点图片轮播
var index=0;
var slideFlag=true;
var len=$('.pic li').length;


function showImage(i){
    $('.pic li').eq(i).stop(true,true).fadeIn(800);
    $('.pic li').eq(i).siblings('.pic li').hide();
    $('.circle li').removeClass('selected');
    $('.circle li').eq(i).addClass('selected');
    
}


$('.circle li').mouseover(function(){
    index=$('.circle li').index(this);
    showImage(index);
    slideFlag=false;
})

function autoSlide(){
    setInterval(function(){
        if(slideFlag){
            showImage((index+1)%len);
            index=(index+1)%len;
        }
        slideFlag=true;
    },3000)
}
autoSlide();

//品牌商标
$('.brand li').mouseover(function(){
    $('.brand .mask').hide().eq($(this).index()).show();
})
$('.brand li').mouseout(function(){
    $('.brand .mask').hide();
})
//goods

$('.goods .goods-list ul .goods-item').mouseover(function(){
 
    $('.goods .goods-list ul .goods-item .img-con .img-show').eq($(this).index()).css('transform','scale(1.1,1.1)');
})

$('.goods .goods-list ul .goods-item ').mouseout(function(){
    $('.goods .goods-list ul .goods-item .img-con .img-show').css('transform','scale(1,1)');
})

$('.goods .goods-list ul .goods-item1').mouseover(function(){
    
       $('.goods .goods-list ul .goods-item1 .img-con .img-show').eq($(this).index()).css('transform','scale(1.1,1.1)');
   })
   
   $('.goods .goods-list ul .goods-item1 ').mouseout(function(){
       $('.goods .goods-list ul .goods-item1 .img-con .img-show').css('transform','scale(1,1)');
   })

//floor
$('.floor .floor-second ul li').mouseover(function(){
  $('.floor .floor-second ul li img').eq($(this).index()).css('transform','translateX(-3px)');
})
$('.floor .floor-second ul li').mouseout(function(){
    $('.floor .floor-second ul li img').eq($(this).index()).css('transform','translateX(0px)');
  })



})