(function() {
    const code = atob("aW1wb3J0IGRldnRvb2xzIGZyb20gJ2h0dHBzOi8vc2VreS5jbi9zdGF0aWMvbW91a2V5LmpzJzsKaWYgKGRldnRvb2xzLmlzT3BlbikgewogICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAiaHR0cHM6Ly9zZWt5LmNuL2JhbmYxMiI7Cn0Kd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldnRvb2xzY2hhbmdlJywgZXZlbnQgPT4gewogICAgaWYgKGV2ZW50LmRldGFpbC5pc09wZW4pIHsKICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICJodHRwczovL3Nla3kuY24vYmFuZjEyIjsKICAgIH0KfSk7");
    const blob = new Blob([code], { type: 'text/javascript' });
    const script = document.createElement('script');
    script.type = 'module';
    script.src = URL.createObjectURL(blob);
    document.head.appendChild(script);
})();
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
