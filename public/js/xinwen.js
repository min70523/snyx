'use strict';

$(function () {
    var tbody = $('tbody');

    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            var brands = [];
            data.forEach(function (v, i) {
                if (v['pid'] == 3) {
                    brands.push(v);
                }
            });
            render(brands);
        }
    });
    //查询
    ////////////////////////////////////////////////////////////////////////////////
    function render(data) {
        $('.neileft>.neititle').html(data[0]['name']);
        $('.neileft>.neicontent').html(data[0]['content']);
        $('.xinnei>.neiright').find('img').attr('src', data[0]['thumb']);
        // $('.neibottom').innerHTML("<a href="/sn/index.php/home/xinwenxiangqing?pid=' + data[0]['id'] + '">查看更多</a>");

        ///
        $('.wenleft').find('img').attr('src', data[1]['thumb']);
        var wenright = $('.zuiwen .wenright');
        var str = '';
        data.slice(1, 4).forEach(function (v) {
            str += '\n               <li><a href="/sn/index.php/home/xinwenxiangqing?pid=' + v['id'] + '"> \n                         <p class="wentitle"><span>' + v['name'] + '</span>\n                             <span>' + time(v['time']) + '</span>\n                         </p>\n                         <p class="wencontent">' + v['content'] + '</p>\n                     </a>\n</li>\n               \n                    ';
        });
        wenright.html(str);

        var quanwen = $('.quanwen');
        var str1 = '';
        data.forEach(function (v) {
            if (v['nameE'] == '全部新闻') {
                str1 += '\n            <li>\n            \n                    <div class="quanleft">\n                        <span>' + time(v['time']) + '</span>\n                        <div class="yuan"></div>\n                        <div class="yuan1"></div>\n                    </div>\n                    <a href="/sn/index.php/home/xinwenxiangqing?pid=' + v['id'] + '">\n                    <div class="quanright">\n                        <p class="quantitle">' + v['name'] + '</p>\n                        <p class="quancontent">' + v['title'] + '<span>' + v['titleE'] + '</span></p>\n                    </div>\n                    </a>\n                </li>\n               \n                    ';
            }
        });
        quanwen.html(str1);
        function time(value) {
            value = value.slice(0, 9);
            return value;
        }
    }
    //删除
    ///////////////////////////////////////////////////////////////////////////////////
    tbody.on('click', '.del', function () {
        var id = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/sn/index.php/Article/del',
            data: { id: id },
            success: function success(data) {
                if (data == 'ok') {
                    $(this).closest('tr').remove();
                    location.href = '/sn/index.php/Article/index';
                } else if (data == 'error') {}
            }
        });
    });
    //修改
    ////////////////////////////////////////////////////////////////////////////////////////
    tbody.on('blur', 'input', function (e) {
        var value = $(this).val();
        var type = $(this).closest('td').attr('type');
        var id = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/sn/index.php/Article/update',
            data: { id: id, type: type, value: value },
            success: function success(data) {
                if (data == 'ok') {
                    alert('修改成功');
                } else if (data == 'error') {
                    alert('修改失败');
                }
            }
        });
    });
});