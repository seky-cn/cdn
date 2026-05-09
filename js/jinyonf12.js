/* 禁用右键菜单并提醒 */
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
(function() {
    const code = atob("aW1wb3J0IGRldnRvb2xzIGZyb20gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zZWt5LWNuL2NkbkB2MS4wLjIvanMveWluZ2h1YS5qcyc7CmlmIChkZXZ0b29scy5pc09wZW4pIHsKICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gImh0dHBzOi8vc2VreS5jbi9iYW5mMTIiOwp9CndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZ0b29sc2NoYW5nZScsIGV2ZW50ID0+IHsKICAgIGlmIChldmVudC5kZXRhaWwuaXNPcGVuKSB7CiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAiaHR0cHM6Ly9zZWt5LmNuL2JhbmYxMiI7CiAgICB9Cn0pOw==");
    const blob = new Blob([code], { type: 'text/javascript' });
    const script = document.createElement('script');
    script.type = 'module';
    script.src = URL.createObjectURL(blob);
    document.head.appendChild(script);
})();
