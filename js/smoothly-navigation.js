!function () {
    linstenMenu.call();
    linstenNavA.call();

    function linstenMenu() {
        let liTags = document.querySelectorAll('nav.menu > ul > li');
        for(let i = 0; i < liTags.length; i++){
            liTags[i].onmouseenter = function (e) {
                e.currentTarget.classList.add('active');
            };
            liTags[i].onmouseleave = function (e) {
                e.currentTarget.classList.remove('active');
            }
        }
    }

    function linstenNavA() {
        let aTags = document.querySelectorAll('nav.menu > ul > li > a');
        for(let i = 0; i < aTags.length; i++){
            aTags[i].onclick = function (e) {
                e.preventDefault();
                let a = e.currentTarget;
                let href = a.getAttribute('href');
                let element = document.querySelector(href);
                let targetTop = element.offsetTop - 80;
                let currentTop = window.scrollY;
                let s = (Math.abs(targetTop - currentTop))/ 100;
                /* 缓动  tween插件代码*/
                function animate(time) {
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                requestAnimationFrame(animate);
                let t = s * 300;
                if(t > 900){
                    t = 900;
                }
                var coords = { y: currentTop }; // Start at (0, 0)
                var tween = new TWEEN.Tween(coords)
                    .to({ y : targetTop }, t)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(function() {
                        window.scrollTo(0 , coords.y);
                    })
                    .start();
            }
        }
    }
}.call();


