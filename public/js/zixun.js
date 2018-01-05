'use strict';

$(function () {

    //查询banner
    $.ajax({
        url: '/sn/index.php/category/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var arr = [];
            data.forEach(function (v) {
                if (v['pid'] == 2) {
                    arr.push(v);
                }
            });
            renderbanner(arr);
        }

    });

    var bannerImg = $('.banner-img');

    function renderbanner(data) {
        var str = '';
        str = '<img src="' + data[0]['thumb'] + '" alt="">\n        ';
        bannerImg.html(str);
    }

    var pids = location.href.split('=', 2);
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var arr = [];
            data.forEach(function (v) {
                if (v['pid'] == pids[1]) {
                    arr.push(v);
                }
            });
            render(arr);
        }
    });

    function render(data) {
        var zititle = $('.zititle');
        var str = '';
        data.forEach(function (v) {
            str += '\n                <li>\n                    <p>' + data[0]['name'] + '</p>\n                    <p>' + data[0]['title'] + '</p>\n                    <p>' + data[0]['content'] + '</p>\n                    <p>' + data[0]['contentE'] + '</p> \n                </li>\n            ';
        });
        zititle.html(str);
    }

    //    上一篇、下一篇
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var arr = [];
            data.forEach(function (v) {
                if (v['nameE'] == 'zixun') {
                    arr.push(v);
                }
            });
            renderzixun(arr);
        }

    });

    function renderzixun(data) {
        //console.log(data);
        var arr = [];
        data.forEach(function (v) {
            if (v.pid) {
                arr.push(v.pid);
            }
        });

        var bleft = $('.fanye .left');
        var bright = $('.fanye .right');
        var str = [];
        bleft.on('click', function () {
            arr.forEach(function (v, i) {
                if (v < pids[1]) {
                    str.push(v);
                }
            });
            console.log(str);

            if (str.length == 0) {
                bleft.html('没有了');
                return;
            } else {
                str.forEach(function (v, i) {
                    str = v;
                    location.href = '/sn/index.php/home/zixun?pid=' + str;
                });
            }
        });

        bright.on('click', function () {
            var str1 = [];
            arr.forEach(function (v, i) {
                if (v > pids[1]) {
                    str1.push(v);
                }
            });
            console.log(str1);

            if (str1.length == 0) {
                bright.html('没有了');
                return;
            } else {
                str1 = str1.sort(function (a, b) {
                    return b - a;
                });
                str1.forEach(function (v, i) {
                    str1 = v;
                    console.log(str1);
                    location.href = '/sn/index.php/home/zixun?pid=' + str1;
                });
            }
        });
    }
});