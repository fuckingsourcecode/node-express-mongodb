/**
 * Created by whistle ting on 2016/2/25.
 */
function valid(){
    //置空
    $('#password-warning').text('');
    $('#email-warning').text('');
    $('#codes-warning').text('');
    //非空验证
    if($('#password').val()==''){
        $('#password-warning').text('密码不能为空');
        $('#password').focus();
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
    if($('#password').val().length<8){
        $('#password-warning').text('密码长度不正确');
        $('#password').focus();
        return false;
    }
    var reemail = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
    if(!(reemail.test($('#email').val()))){
        $('#email-warning').text('请书写正确的邮箱');
        $('#email').focus();
        return false;
    }
    var repassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
    if(!(repassword.test($('#password').val()))){
        $('#password-warning').text('密码格式不正确');
        $('#password').focus();
        return false;
    }
}