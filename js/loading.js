!function () {
    var view = document.querySelector('#upload');
    var contorller = {
        view : null,
        init : function(view){
            this.view = view;
            this.setTimerloading.call(this);
        },
        setTimerloading : function(){
            setTimeout(function () {
                view.classList.remove('active');
            },1000);
        }
    }
    /****************加载动画********************************/
    contorller.init.call(contorler,view);
}.call();
