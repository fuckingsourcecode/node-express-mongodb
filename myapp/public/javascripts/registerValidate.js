/**
 * Created by whistle ting on 2016/2/25.
 */
function valid(){
    //置空
    $('#username-warning').text('');
    $('#password-warning').text('');
    $('#confirm-warning').text('');
    $('#email-warning').text('');
    $('#telephone-warning').text('');
    $('#url-warning').text('');
    $('#codes-warning').text('');
    $('#agree-warning').text('');
    //非空验证
    if($('#username').val()==''){
        $('#username-warning').text('用户名不能为空');
        $('#username').focus();
        return false;
    }
    if($('#password').val()==''){
        $('#password-warning').text('密码不能为空');
        $('#password').focus();
        return false;
    }
    if($('#confirm-password').val()==''){
        $('#confirm-warning').text('确认密码不能为空');
        $('#confirm-password').focus();
        return false;
    }
    if($('#email').val()==''){
        $('#email-warning').text('邮箱不能为空');
        $('#email').focus();
        return false;
    }
    if($('#codes').val()==''){
        $('#codes-warning').text('请填写验证码');
        $('#codes').focus();
        return false;
    }
    //密码与确认密码
    if(!($('#password').val()==$('#confirm-password').val())){
        $('#confirm-warning').text('确认密码与初次密码不一致');
        $('#confirm-password').focus();
        return false;
    }
    //长度判断
    if($('#username').val().length<5||$('#username').val().length>15){
        $('#username-warning').text('用户名长度不能小于5且不能大于15');
        $('#username').focus();
        return false;
    }
    if($('#password').val().length<8){
        $('#password-warning').text('密码长度不能小于8且不能大于20');
        $('#password').focus();
        return false;
    }
    //字符判断
    var rename = new RegExp('[a-zA-Z_][a-zA-Z_0-9]{0,}', '');
    if(!(rename.test($('#username').val()))){
        $('#username-warning').text('用户名必须是字母数字或下划线, 不能以数字开头');
        $('#username').focus();
        return false;
    }
    var repassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
    if(!(repassword.test($('#password').val()))){
        $('#password-warning').text('密码不能全为数字或字母');
        $('#password').focus();
        return false;
    }
    var reemail = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
    if(!(reemail.test($('#email').val()))){
        $('#email-warning').text('请书写正确的邮箱');
        $('#email').focus();
        return false;
    }
}