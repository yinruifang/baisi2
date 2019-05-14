<?php 
header("content-type:text/html;charset=utf-8");
//接收从表单提交过来的数据
$user = $_GET['user'];
$pwd = $_GET['pwd'];

//页面输出
echo '名字：'.$user.',密码：'.$pwd;

?>