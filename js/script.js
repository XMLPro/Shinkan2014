$(function () {
    //$("#pg2_txt1").animate({"left": "0%"}, {duration: 800, easing:'easeInQuad',});
    //$("#test").animate({"left": "30%"}, {duration: 800, easing: 'easeInQuad',});

})
//fullPage関係の設定
$(document).ready(function() {
    $.fn.fullpage({
        //スライドカラー
        slidesColor: ['#ce9eff', '#ff9e9e', '#ffce9e', '#ffff9e', '##ceff9e', '#9eff9e'],
        //アンカー アドレスの後のにつく文字
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],
        //イベント処理
        //indexが現在のページ．directionがどちらに動いたか．
        scrollingSpeed: 800,
        easing: 'easeOutCubic',
        onLeave: function(index, direction){
            var w = $(window).width();
            if (w > 360) {
                largeScreen(index, direction)
            }else{
                smallScreen(index, direction)
            }
        },
    });

    function largeScreen(index, direction){
        var animateSpeed = 800;
        if(index == 1 && direction == 'down'){

            // global img 1
            $('#global-img-div1').animate(
                {'width': '50%', 'top': '120%'},
                {duration: animateSpeed, queue: false}
            );
            $('#global_img1').animate(
                {'width': '80%', 'padding-left': '10%'},
                {duration: animateSpeed}
            );

            //global img 2
            $('#global-img-div2').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            )

            //global img 3
            $('#global-img-div3').animate(
                {'left': '-50%'},
                {duration: animateSpeed}
            )

            //global img 4
            $('#global-img-div4').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            )
        }else if(index == 2 && direction == 'up'){

            //global img 1
            $('#global-img-div1').animate(
                {'width': '25%', 'top': '40%', 'left': '0%'},
                {duration: animateSpeed, queue: false}
            );
            $('#global_img1').animate(
                {'width': '100%', 'padding-left': '0%'},
                {duration: animateSpeed}
            );

            //global img 2
            $('#global-img-div2').animate(
                {'left': '23%'},
                {duration: animateSpeed}
            );

            //global img 3
            $('#global-img-div3').animate(
                {'left': '50%'},
                {duration: animateSpeed}
            );

            //global img 4
            $('#global-img-div4').animate(
                {'left': '75%'},
                {duration: animateSpeed}
            );

        }else if(index == 2 && direction == 'down'){
            $('#pg3 .global-img').animate(
                {'left': '50%'},
                {duration: animateSpeed}
            );
        }else if(index == 3 && direction == 'up'){
            $('#pg3 .global-img').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            );
        }else if(index == 3 && direction == 'down'){
            $('#pg4 .global-img').animate(
                {'left': '0%'},
                {duration: animateSpeed}
            );
        }else if(index == 4 && direction == 'up'){
            $('#pg4 .global-img').animate(
                {'left': '-50%'},
                {duration: animateSpeed}
            );
        }else if(index == 4 && direction == 'down'){
            $('#pg5 .global-img').animate(
                {'left': '50%'},
                {duration: animateSpeed}
            );
        }else if(index == 5 && direction == 'up'){
            $('#pg5 .global-img').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            );
        }

    };

    function smallScreen(index, direction) {
        var animateSpeed = 800;
        if(index == 1 && direction == 'down'){

            // global img 1
            $('#global-img-div1').animate(
                {'width': '100%', 'top': '145%'},
                {duration: animateSpeed, queue: false}
            );
            $('#global_img1').animate(
                {'width': '80%', 'padding-left': '10%'},
                {duration: animateSpeed}
            );

            //global img 2
            $('#global-img-div2').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            )

            //global img 3
            $('#global-img-div3').animate(
                {'left': '-50%'},
                {duration: animateSpeed}
            )

            //global img 4
            $('#global-img-div4').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            )
        }else if(index == 2 && direction == 'up'){

            //global img 1
            $('#global-img-div1').animate(
                {'width': '50%', 'top': '40%', 'left': '0%'},
                {duration: animateSpeed, queue: false}
            );
            $('#global_img1').animate(
                {'width': '100%', 'padding-left': '0%'},
                {duration: animateSpeed}
            );

            //global img 2
            $('#global-img-div2').animate(
                {'left': '50%'},
                {duration: animateSpeed}
            );

            //global img 3
            $('#global-img-div3').animate(
                {'left': '5%'},
                {duration: animateSpeed}
            );

            //global img 4
            $('#global-img-div4').animate(
                {'left': '50%'},
                {duration: animateSpeed}
            );

        }else if(index == 2 && direction == 'down'){
            $('#pg3 .global-img').animate(
                {'left': '0%'},
                {duration: animateSpeed}
            );
        }else if(index == 3 && direction == 'up'){
            $('#pg3 .global-img').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            );
        }else if(index == 3 && direction == 'down'){
            $('#pg4 .global-img').animate(
                {'left': '0%'},
                {duration: animateSpeed}
            );
        }else if(index == 4 && direction == 'up'){
            $('#pg4 .global-img').animate(
                {'left': '-100%'},
                {duration: animateSpeed}
            );
        }else if(index == 4 && direction == 'down'){
            $('#pg5 .global-img').animate(
                {'left': '0%'},
                {duration: animateSpeed}
            );
        }else if(index == 5 && direction == 'up'){
            $('#pg5 .global-img').animate(
                {'left': '100%'},
                {duration: animateSpeed}
            );
        }


    };

});
