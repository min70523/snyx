'use strict';

$(function () {
    var nav = $('.nav');
    //查询banner
    var swiperwrapper = $('.swiper-wrapper');
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    $.ajax({
        url: '/sn/index.php/Article/showlunbo',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            renderbanner(data);
        }
    });
    //查询banner
    ////////////////////////////////////////////////////////////////////////////////
    function renderbanner(data) {
        var str = '';
        data.forEach(function (v) {
            $('.content>.des').text(v['titleE']);
            str += '\n               <div class="swiper-slide">\n                <img src="' + v['thumb'] + '" alt="">\n               </div>\n                    ';
        });
        swiperwrapper.html(str);
    }
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var brands = [];
            data.forEach(function (v, i) {
                if (v['pid'] == 2) {
                    brands.push(v);
                }
            });
            render(brands);
        }
    });
    //查询品牌内容
    ////////////////////////////////////////////////////////////////////////////////
    function render(data) {
        //秋季新品
        $('.des1').html(data[0]['nameE']);
        $('.des2').html(data[0]['name']);

        $('.lbottom>span:nth-of-type(1)').html(data[0]['title']);
        $('.lbottom>span:nth-of-type(2)').html(data[0]['titleE']);

        $('.lcenter').find('img:nth-of-type(1)').attr('src', data[0]['thumb']);
        $('.lcenter').find('img:nth-of-type(2)').attr('src', data[1]['thumb']);
        $('.nright').find('img').attr('src', data[2]['thumb']);
        $('.nright').find('p').html(data[0]['content']);

        //时尚女轻装
        $('.fashion').find('img').attr('src', data[4]['thumb']);
        $('.fright>.title').html(data[3]['name']);
        $('.fright>.content:nth-of-type(1)').html(data[2]['content']);
        $('.fright>.content:nth-of-type(2)').html(data[3]['content']);
        //
        $('.jleft>img').attr('src', data[5]['thumb']);
        $('.jright p').html(data[5]['content']);
        $('.jright img').attr('src', data[6]['thumb']);
        //精品推荐
        var str = '';
        var product = $('.product>ul');
        var num = 1;
        data.forEach(function (v, i) {
            if (v['name'] == '时尚衬衫') {
                str += '\n                <li id="' + v['id'] + '">\n                <a href="/sn/index.php/home/pinpaixiangqing?pid=' + v['id'] + '">\n                    <span class="number">0' + num++ + '</span>\n                    <div class="xian"></div>\n                    <span class="title">' + v['name'] + '</span>\n                    <p class="content">\n                        ' + v['content'] + '\n                    </p>\n                    <img src="' + v['thumb'] + '" alt="">\n                    </a>\n                </li>\n                    ';
            }
        });
        product.html(str);
    }
});