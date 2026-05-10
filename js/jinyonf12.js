eval(atob('KGZ1bmN0aW9uKCkgewogICAgbGV0IGRldnRvb2xzT3BlbiA9IGZhbHNlOwogICAgY29uc3QgdGhyZXNob2xkID0gMTYwOwogICAgCiAgICBmdW5jdGlvbiBjaGVjaygpIHsKICAgICAgICBjb25zdCB3aWR0aFRocmVzaG9sZCA9IHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGggPiB0aHJlc2hvbGQ7CiAgICAgICAgY29uc3QgaGVpZ2h0VGhyZXNob2xkID0gd2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID4gdGhyZXNob2xkOwogICAgICAgIGNvbnN0IG5ld1N0YXRlID0gd2lkdGhUaHJlc2hvbGQgfHwgaGVpZ2h0VGhyZXNob2xkOwogICAgICAgIAogICAgICAgIGlmIChuZXdTdGF0ZSAhPT0gZGV2dG9vbHNPcGVuKSB7CiAgICAgICAgICAgIGRldnRvb2xzT3BlbiA9IG5ld1N0YXRlOwogICAgICAgICAgICBpZiAoZGV2dG9vbHNPcGVuKSB7CiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICJodHRwczovL3Nla3kuY24vYmFuZjEyIjsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KICAgIAogICAgc2V0SW50ZXJ2YWwoY2hlY2ssIDUwMCk7CiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2spOwp9KSgpOw=='))
if (window.ActiveXObject || "ActiveXObject" in window){
        $('#load_title').html("暂时不支持IE浏览器访问，请使用其他浏览器")
    }else{
        $('#load_title').html("欢迎使用 𝓜𝓇•𝒲𝓊云盘")
    }
     
    var start = new Date().getTime();

    function timestamp() {
        let outcome = Math.round(new Date().getTime() / 1000).toString();
        return outcome
    }

    function timer(intDiff) {
        myTimer = window.setInterval(function () {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值
            if (intDiff > 0) {
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (hour <= 9) hour = "0" + hour;
            if (minute <= 9) minute = "0" + minute;
            if (second <= 9) second = "0" + second;

            $('#day_show').html(day + '天 ' + hour + '时 ' + minute + '分 ' + second + '秒');

            intDiff++;
        }, 1000);
    }
    var nowtime = timestamp(); // 现行时间戳
    var mytime = 1675180800; // 设置安装时间（安装日期时间戳）
    timer(nowtime - mytime); // 启动循环

    // 页面加载完成后执行
    $(function () {
        // console.log("ready"+(new Date().getTime()));
        // $('.footer-new').hide(); // 隐藏底部
        // $('.footer-new').show(); // 显示底部
        let now = new Date();
        let year = now.getFullYear(); // 得到年份
        $('#load_show').html((new Date().getTime() - start) + 'ms');
        $('#load_year').html('2023 - ' + year);
        setInterval(() =>{
            if (window.localStorage) {
                // console.log(new Date().getTime() +" "+ !localStorage.token)
                if (localStorage.token) {
                    $("#gm").attr("href", "/@manage");
					$("#gm").attr("target", "_blank");
                } else {
                    $("#gm").attr("href", "/@login");
					$("#gm").attr("target", "");
                }
            }
        },1000)
    });
    window.onload = function () {
        // console.log("onload"+(new Date().getTime()));
    }
document.oncontextmenu = function () {
new Vue({
    data:function(){
        this.$notify({
            title:"嘿！没有右键菜单",
            message:"复制请用键盘快捷键",
            position: 'bottom-right',
            offset: 50,
            showClose: false,
            type:"warning"
        });
        return{visible:false}
    }
})
return false;
}
/* 禁用F12按键并提醒 */
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
  event.keyCode = 0;
  event.returnValue = false;
    new Vue({
            data:function(){
                this.$notify({
                    title:"嘿！别瞎按",
                    message:"坏孩子！打你屁屁哦！",
                    position: 'bottom-right',
                    offset: 50,
                    showClose: false,
                    type:"error"
                });
                return{visible:false}
            }
        })
  return false;
}
};
/* 复制提醒 */
document.addEventListener("copy",function(e){
    new Vue({
        data:function(){
            this.$notify({
                title:"嘿！复制成功",
                message:"若要转载请务必保留原文链接！爱你呦~",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type:"success"
            });
            return{visible:false}
        }
    })
})
