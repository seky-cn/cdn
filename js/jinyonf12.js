eval(atob('KGZ1bmN0aW9uKCkgewogICAgbGV0IGRldnRvb2xzT3BlbiA9IGZhbHNlOwogICAgY29uc3QgdGhyZXNob2xkID0gMTYwOwogICAgCiAgICBmdW5jdGlvbiBjaGVjaygpIHsKICAgICAgICBjb25zdCB3aWR0aFRocmVzaG9sZCA9IHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGggPiB0aHJlc2hvbGQ7CiAgICAgICAgY29uc3QgaGVpZ2h0VGhyZXNob2xkID0gd2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID4gdGhyZXNob2xkOwogICAgICAgIGNvbnN0IG5ld1N0YXRlID0gd2lkdGhUaHJlc2hvbGQgfHwgaGVpZ2h0VGhyZXNob2xkOwogICAgICAgIAogICAgICAgIGlmIChuZXdTdGF0ZSAhPT0gZGV2dG9vbHNPcGVuKSB7CiAgICAgICAgICAgIGRldnRvb2xzT3BlbiA9IG5ld1N0YXRlOwogICAgICAgICAgICBpZiAoZGV2dG9vbHNPcGVuKSB7CiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICJodHRwczovL3Nla3kuY24vYmFuZjEyIjsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KICAgIAogICAgc2V0SW50ZXJ2YWwoY2hlY2ssIDUwMCk7CiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2spOwp9KSgpOw=='));

if (window.ActiveXObject || "ActiveXObject" in window) {
    $('#load_title').html("暂时不支持IE浏览器访问，请使用其他浏览器");
} else {
    $('#load_title').html("欢迎使用 𝓜𝓇•𝒲𝓊云盘");
}

var start = new Date().getTime();

function timestamp() {
    let outcome = Math.round(new Date().getTime() / 1000).toString();
    return outcome;
}

function timer(intDiff) {
    myTimer = window.setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0;
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

var nowtime = timestamp();
var mytime = 1675180800;
timer(nowtime - mytime);

$(function () {
    let now = new Date();
    let year = now.getFullYear();
    $('#load_show').html((new Date().getTime() - start) + 'ms');
    $('#load_year').html('2023 - ' + year);
    setInterval(() => {
        if (window.localStorage) {
            if (localStorage.token) {
                $("#gm").attr("href", "/@manage");
                $("#gm").attr("target", "_blank");
            } else {
                $("#gm").attr("href", "/@login");
                $("#gm").attr("target", "");
            }
        }
    }, 1000);
});

window.onload = function () {
    // console.log("onload"+(new Date().getTime()));
}

document.oncontextmenu = function () {
    new Vue({
        data: function () {
            this.$notify({
                title: "嘿！没有右键菜单",
                message: "复制请用键盘快捷键",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type: "warning"
            });
            return { visible: false }
        }
    })
    return false;
};
(function replaceFooter() {
    var footer = document.querySelector('.footer');
    if (footer) {
        footer.innerHTML = `<div class="hope-c-PJLV hope-c-PJLV-iicyfOA-css">
        <div class="body hope-stack hope-c-dhzjXW hope-c-PJLV hope-c-PJLV-iiHckfM-css">
            <div class="obj-box hope-stack hope-c-dhzjXW hope-c-PJLV hope-c-PJLV-igScBhH-css hope-c-PJLV-ikSuVsl-css"
                style="width: 100%;">
                <div class="markdown-body" style="text-align: center;">
                    <h2 key="h2-1-1-0" id="load_title"></h2>
                    <strong><span class="far fa-clock"></span> 本站已稳定运行：</strong>
                    <strong id="day_show">载入中...</strong>
                    <br>
                    <strong>
                        <span class="far fa-copyright"></span>
                        <strong id="load_year"></strong>
                        <a href="/@manage" rel="noopener noreferrer"
                            style="background-color: transparent;color: inherit;text-decoration: inherit;"
                            id="gm">𝓜𝓇•𝒲𝓊-云盘</a>
                    </strong>
                    <span>|</span>
                    <strong><span class="fas fa-hourglass-half"></span> 页面载入耗时:</strong>
                    <strong id="load_show">载入中...</strong>
                    <br>
                    <strong><span class="fas fa-regular fa-chart-column"></span> 本站总访问量 <span
                            id="busuanzi_value_site_pv"></span> 次，您是第 <span id="busuanzi_value_site_uv">99</span>
                        位访客</strong>
                    <br>
                    <strong>
                        <span class="fas fa-bullhorn"></span>
                        <span>本网站由</span>
                        <a href="https://seky.cn"
                            rel="noopener nofollow" target="_blank">
                            <img src="https://seky.cn/banf12/img/touxiang1.webp" alt="𝓜𝓇•𝒲𝓊-博客"
                                style="height: 20px; display: inline-block;">
                        </a>
                        <span>提供支持维护服务</span>
                    </strong>
                </div>
            </div>
        </div>
      </div>`;
    } else {
        setTimeout(replaceFooter, 100);
    }
})();
