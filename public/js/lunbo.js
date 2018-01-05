'use strict';

$(function () {
    var tbody = $('tbody');
    $.ajax({
        url: '/sn/index.php/Article/showlunbo',
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
            str += '\n             \n                <tr id="' + v['lid'] + '">\n                      <td type="lid">\n                      <input type="text" value="' + v['lid'] + '" disabled style="width: 70px"></td>      \n                      <td type="title">\n                        <input type="text" value="' + v['title'] + '"></td>\n                      <td type="titleE">\n                       <input type="text" value="' + v['titleE'] + '"></td>        \n                      <td type="thumb">\n                            <img  src="' + v['thumb'] + '" style="width: 100px;height: 80px">\n                       </td>\n                      <td>\n                      <div class="button-group">\n                        <a class="button border-red del" href="javascript:void(0)"><span class="icon-trash-o"></span> \u5220\u9664</a>\n                      </div>\n                      </td>\n                    </tr> \n               \n                    ';
        });
        tbody.html(str);
    }
    //删除
    ///////////////////////////////////////////////////////////////////////////////////
    tbody.on('click', '.del', function () {
        var cid = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/sn/index.php/Article/dellunbo',
            data: { cid: cid },
            success: function success(data) {
                if (data == 'ok') {
                    $(this).closest('tr').remove();
                    location.href = '/sn/index.php/Article/lunbo';
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
            url: '/sn/index.php/Article/updatelunbo',
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