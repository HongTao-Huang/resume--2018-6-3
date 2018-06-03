!function () {
    loading.call();

    /****************加载动画********************************/
    function loading() {
        setTimeout(function () {
            upload.classList.remove('active');
        },1000);
    }
}.call();
