$(function () {
    //$("#pg2_txt1").animate({"left": "0%"}, {duration: 800, easing:'easeInQuad',});
    //$("#test").animate({"left": "30%"}, {duration: 800, easing: 'easeInQuad',});

})
//fullPage関係の設定
$(document).ready(function() {
    $.fn.fullpage({
        //スライドカラー
        slidesColor: ['#cd9cc1', '#ffd194', '#fff9a2', '#ffd194', '#f9a383', '#f8a5a6'],
        //アンカー アドレスの後のにつく文字
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage'],
        //イベント処理
        //indexが現在のページ．directionがどちらに動いたか．
        scrollingSpeed: 800,
        easing: 'easeOutCubic',
        onLeave: function(index, direction){
            if(index == 1 && direction == 'down'){
            }else if(index == 2 && direction == 'up'){
            }
        },
    });
    function largeScreen(index, direction){
    }
});
