<?php
class login{
    function __construct(){
        $obj=new db();
        $this->mysql=$obj->mysql;
    }
    function index(){
        include 'admin/views/login.html';
    }
    function check(){
        $user=$_REQUEST['user'];
        $pass=$_REQUEST['password'];
        $codes = $_REQUEST['codes'];
        session_start();
        $code = $_SESSION['code'];
        if($codes != $code){
            echo 4;
            exit;
        }
        $data=$this->mysql->query("select * from admin where user='{$user}'")->fetch_all(1);
        for($i=0;$i<count($data);$i++){
            if($data[$i]['user']==$user){
                if($data[$i]['password']==$pass){
                    echo 1;
                    exit;
                }else{
                    echo 2;
                    exit;
                }
            }

        }
        echo 3;

}
}