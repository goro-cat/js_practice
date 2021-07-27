//$(function(){
//  $('#back a').on('click',function(event){
//    $('body,html').animate({
//      scrollTop:0
//    },800);
//    event.preventDefault();
//  });
//});

$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    //.toggleClass()によって、class属性の追加と削除が交互に行われ
    //ここでは.menu-trigger span:nth-child(1)~(3)によってactiveクラスでxがつく
    $('#sp-menu').fadeToggle();
    //↑が開いたときフェードイン・フェードアウト
    event.preventDefault();
  });
});
