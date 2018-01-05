'use strict';

$(function () {
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {

            var index = [];
            data.forEach(function (v, i) {
                if (v['pid'] == 4) {
                    index.push(v);
                }
            });
            render(index);
        }
    });
    function render(data) {
        $('.old>span').html('' + data[0]['title'] + data[0]['content']);
        $('.old>.img11').find('img').attr('src', data[0]['thumb']);
        $('.wzhang>.us').html('' + data[1]['title'] + data[1]['titleE']);
        $('.wzhang>p:nth-of-type(1)').html(data[1]['content']);
        $('.wzhang>p:nth-of-type(2)').html(data[1]['contentE']);
        $('.wzhang>p:nth-of-type(3)').html(data[2]['title']);
        $('.wzhang>p:nth-of-type(4)').html(data[2]['content']);
        $('.wzhang>p:nth-of-type(5)').html(data[2]['contentE']);
        $('.wzhang>.us1').html('' + data[3]['title'] + data[3]['titleE']);
        $('.wzhang>ul>li:nth-of-type(1)').find('img').attr('src', data[4]['thumb']);
        $('.wzhang>ul>li:nth-of-type(2)').find('img').attr('src', data[5]['thumb']);
        $('.wzhang>ul>li:nth-of-type(3)').find('img').attr('src', data[6]['thumb']);
        $('.wzhang>p:nth-of-type(6)').html('' + data[7]['content']);
        $('.wzhang>p:nth-of-type(7)').html('' + data[8]['content']);
        $('.wzhang>p:nth-of-type(8)').html('' + data[7]['contentE']);
        $('.wzhang>p:nth-of-type(9)').html('' + data[8]['contentE']);
        // let str='';
        // let three=$('.wzhang>.ul');
        // data.slice(2,3).forEach((v,i)=>{
        //     str+=`
        //     <li>
        //         <img src="${v['thumb']}" alt="">
        //     </li>
        //         `;
        //
        //
        // });
        // three.html(str);
        // console.log($('.wzhang>.ul'));
    }
});