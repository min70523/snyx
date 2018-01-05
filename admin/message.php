<?php
class message{
    function __construct(){
        $obj=new db();
        $this->mysql=$obj->mysql;
    }
    function index(){
        include 'admin/views/message.html';
    }
    //查看
    ///////////////////////////////////////////////////////////////////////////////////////
    function show(){
        $data=$this->mysql->query("select * from message")->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
    }

    //删除
    ///////////////////////////////////////////////////////////////////////////////////////
    function del(){
        $cid=$_GET['cid'];
        $data=$this->mysql->query("delete  from message where mid='{$cid}'");
        if($this->mysql->affected_rows){
            echo 'ok';
        }else{
            echo 'error';
        }
    }
    //添加
    ////////////////////////////////////////////////////////////////////////////////////
    function insertmessage(){
        $data=$_POST;
        $keys=array_keys($data);
        $str='(';
        for($i=0;$i<count($keys);$i++){
            $str.=$keys[$i].',';
        }
        $str=substr($str,0,-1);
        $str.=') values (';
        foreach($data as $v){
            $str.="'{$v}',";
        }
        $str=substr($str,0,-1);
        $str.=')';
        $data=$this->mysql->query("insert into  message $str");
        if($this->mysql->affected_rows){
            echo 'ok';
        }else{
            echo 'error';
        }

    }
}