'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

$(function () {
    var tbody = $('tbody');
    //添加
    ///////////////////////////////////////////////////////////////////////////////
    var submit = $(':submit');
    submit.on('click', function () {
        var data = $('form').serialize();
        $.ajax({
            url: '/sn/index.php/category/insertcolumn',
            data: data,
            method: 'post',
            success: function success(data) {
                console.log(data);
                if (data == 'ok') {
                    location.href = '/sn/index.php/category/index';
                } else if (data == 'error') {}
            }
        });
    });
    //上传图片
    ////////////////////////////////////////////////////////////////////////////////////////
    var upload = document.querySelector('#image');
    var sthumb = document.querySelector('#thumb');
    var hidden = document.querySelector('input[type=hidden]');
    var imgType = ['png', 'gif', 'jpg', 'jpeg'];
    var size = 5 * 1024 * 1024;
    upload.onchange = function () {
        //特殊字符，打包为一个数组
        [].concat(_toConsumableArray(this.files)).forEach(function (element, index) {

            var eType = element.type.split('/')[1];
            if (!(element.size <= size && imgType.includes(eType))) {
                alert('请检查文件类型和大小');
                return;
            }
            var reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (e) {
                var imgs = new Image();
                imgs.width = 80;
                imgs.height = 80;

                imgs.src = e.target.result;

                var imgbox = document.querySelector('.imgbox');
                imgbox.appendChild(imgs);
            };
            var formdata = new FormData();
            formdata.append('file', element);
            var xml = new XMLHttpRequest();
            xml.upload.onprogress = function (e) {
                document.querySelectorAll('.progress-bar')[index].style.width = e.loaded / e.total * 100 + '%';
            };
            xml.onload = function () {
                hidden.value += xml.response;
            };
            xml.open('post', '/sn/index.php/category/upload', true);
            xml.send(formdata);
        });
    };
});