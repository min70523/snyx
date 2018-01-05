'use strict';

$(function () {
    var video = $('#video');
    /////////////////////////播放暂停/////////////////////////////////////////
    // $('.swiper-container').on('click','.zanting', function () {
    //     if (video[0].paused) {
    //         video[0].play();
    //         $('.zt').css({ opacity: 0 });
    //         $('.swiper-container .title').css({ opacity: 0});
    //         $('.swiper-container .times').css({ opacity: 0 });
    //         video.attr('poster','');
    //     } else {
    //         video[0].pause();
    //         $('.zt').css({ opacity: 1 });
    //         $('.swiper-container .title').css({ opacity: 1 });
    //         $('.swiper-container .times').css({ opacity: 1 });
    //         video.attr('poster','../../public/images/video.jpg');
    //     }
    //     return false;
    // });
    // if (video[0].paused) {
    //           if(video[0].play()){
    //             $('.zt').css({ opacity: 0 });
    //             $('.swiper-container .title').css({ opacity: 0});
    //             $('.swiper-container .times').css({ opacity: 0 });
    //             video.attr('poster','');
    //         } else {
    //             video[0].pause();
    //             $('.zt').css({ opacity: 1 });
    //             $('.swiper-container .title').css({ opacity: 1 });
    //             $('.swiper-container .times').css({ opacity: 1 });
    //             video.attr('poster','../../public/images/video.jpg');
    //         }
    video.on('timeupdate', function () {
        var currentPos = video[0].currentTime; //Get currenttime
        var maxduration = video[0].duration; //Get video duration

        var percentage = 100 * currentPos / maxduration; //in %

        // $('.select').css('width', percentage+'%');
        if (currentPos > 0) {
            $('.zt').css({ opacity: 0 });
            $('.swiper-container .title').css({ opacity: 0 });
            $('.swiper-container .times').css({ opacity: 0 });
            video.attr('poster', '');
        } else {

            $('.zt').css({ opacity: 1 });
            $('.swiper-container .title').css({ opacity: 1 });
            $('.swiper-container .times').css({ opacity: 1 });
            video.attr('poster', '../../public/images/video.jpg');
        }
    });
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {

            var index = [];
            data.forEach(function (v, i) {
                if (v['pid'] == 1) {
                    index.push(v);
                }
            });
            render(index);
        }
    });
    function render(data) {
        //时尚毛衣
        $('.content .title').html('' + data[0]['name'] + data[0]['nameE']);
        $('.content .leftCenter').html(data[0]['content']);
        $('.content .left:nth-of-type(1)>.leftBottom').html(data[0]['contentE']);
        $('.content .box:nth-of-type(1)').find('img').attr('src', data[0]['thumb']);

        //衬衣装
        $('.content1 .title').html('' + data[1]['name'] + data[1]['nameE']);
        $('.content1 .leftCenter').html(data[1]['content']);
        $('.content1 .left:nth-of-type(2)>.leftBottom').html(data[1]['contentE']);
        $('.content1 .box:nth-of-type(1)').find('img').attr('src', data[1]['thumb']);

        //大气皮衣
        $('.content2 .title').html('' + data[2]['name'] + data[2]['nameE']);
        $('.content2 .leftCenter').html(data[2]['content']);
        $('.content2 .left:nth-of-type(1)>.leftBottom').html(data[2]['contentE']);
        $('.content2 .box:nth-of-type(1)').find('img').attr('src', data[2]['thumb']);

        //高档品牌
        var str = '';
        var highGrade = $('.highGrade>.bigbox>ul');
        data.slice(3, 6).forEach(function (v, i) {
            str += '\n                <li class="list1">\n                    <div class="imgBox">\n                        <img src="' + v['thumb'] + '" alt="">\n                        <div class="box">\n                            <div class="tiao"></div>\n                        </div>\n                    </div>\n                    <div class="title">\n                        <p>' + v['title'] + '</p>\n                        <p>' + v['titleE'] + '</p>\n                        ' + v['content'] + '\n                    </div>\n\n                </li>\n                    ';
        });
        highGrade.html(str);
    }
    // 进度条控制
    // $(document).on('touchend', '.jindu', function (e) {
    //     var x = e.originalEvent.changedTouches[0].clientX - this.offsetLeft;
    //     var X = x < 0 ? 0 : x;
    //     var W = $(this).width();
    //     var place = X > W ? W : X;
    //     audio[0].currentTime = (place / W).toFixed(2) * audio[0].duration;
    //     $(this).children('.select').css({
    //         width: (place / W).toFixed(2) * 100 + "%"
    //     });
    // });
    //全屏播放
    $('.quan').on('click', function () {
        //For Webkit
        video[0].webkitEnterFullscreen();
        // video.requestFullscreen();


        return false;
    });
});