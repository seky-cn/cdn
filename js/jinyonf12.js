eval(atob('KGZ1bmN0aW9uKCkgewogICAgbGV0IGRldnRvb2xzT3BlbiA9IGZhbHNlOwogICAgY29uc3QgdGhyZXNob2xkID0gMTYwOwogICAgCiAgICBmdW5jdGlvbiBjaGVjaygpIHsKICAgICAgICBjb25zdCB3aWR0aFRocmVzaG9sZCA9IHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGggPiB0aHJlc2hvbGQ7CiAgICAgICAgY29uc3QgaGVpZ2h0VGhyZXNob2xkID0gd2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID4gdGhyZXNob2xkOwogICAgICAgIGNvbnN0IG5ld1N0YXRlID0gd2lkdGhUaHJlc2hvbGQgfHwgaGVpZ2h0VGhyZXNob2xkOwogICAgICAgIAogICAgICAgIGlmIChuZXdTdGF0ZSAhPT0gZGV2dG9vbHNPcGVuKSB7CiAgICAgICAgICAgIGRldnRvb2xzT3BlbiA9IG5ld1N0YXRlOwogICAgICAgICAgICBpZiAoZGV2dG9vbHNPcGVuKSB7CiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICJodHRwczovL3Nla3kuY24vYmFuZjEyIjsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KICAgIAogICAgc2V0SW50ZXJ2YWwoY2hlY2ssIDUwMCk7CiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2spOwp9KSgpOw=='))
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
