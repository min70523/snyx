'use strict';

$(function () {
    var tbody = $('tbody');
    $.ajax({
        url: '/sn/index.php/Article/show',
        dataType: 'json',
        method: 'post',
        success: function success(data) {
            render(data);
        }
    });
    //查询
    ////////////////////////////////////////////////////////////////////////////////
    function render(data) {
        var str = '';
        data.forEach(function (v) {
            str += '\n             \n                <tr id="' + v['id'] + '">\n                      <td type="id">\n                      <input type="text" value="' + v['id'] + '" disabled style="width: 40px"></td>      \n                      <td type="name">\n                        <input type="text" value="' + v['name'] + '"style="width: 60px"></td>\n                      <td type="nameE">\n                        <input type="text" value="' + v['nameE'] + '"></td>\n                      <td type="title">\n                        <input type="text" value="' + v['title'] + '"></td>\n                      <td type="titleE">\n                       <input type="text" value="' + v['titleE'] + '"></td>        \n                      <td type="content">\n                      <input type="text" value="' + v['content'] + '" style="width: 70px">\n                        </td>\n                        <td type="contentE">\n                      <input type="text" value="' + v['contentE'] + '" style="width: 70px">\n                        </td>\n                      <td type="thumb">\n                            <img  src="' + v['thumb'] + '" style="width: 100px;height: 80px">\n                       </td>\n                       <td type="time">\n                           <input type="text" value="' + v['time'] + '" disabled style="width: 120px">\n                       </td>\n                       <td type="num">\n                           <input type="text" value="' + v['num'] + '" disabled style="width: 70px">\n                       </td>\n                       <td type="pid">\n                           <input type="text" value="' + v['pid'] + '"  style="width: 50px">\n                       </td>\n                      <td>\n                      <div class="button-group">\n                        <a class="button border-red del" href="javascript:void(0)"><span class="icon-trash-o"></span> \u5220\u9664</a>\n                      </div>\n                      </td>\n                    </tr> \n               \n                    ';
        });
        tbody.html(str);
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