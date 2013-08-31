(function (document, window) {

    var maxWidth = window.innerWidth;
    var fifty = document.getElementById('fifty');
    
    var reference = document.getElementById('reference');
    reference.innerHTML = 'rgb(0, 0, 0)';
    var refOffsetHeight = reference.offsetHeight * 1.5;
    console.log(refOffsetHeight);

    var main = document.getElementById('main');
    main.style.height = (window.innerHeight - refOffsetHeight) + 'px';

    window.onresize = null;
    window.onresize = function () {
        maxWidth = window.innerWidth;
        main.style.height = (window.innerHeight - refOffsetHeight)+ 'px';
    };

    main.onmousemove = null;
    main.onmousemove = function (e) {
        var scaled = 255 - Math.floor(e.clientX / maxWidth * 255);
        var rgbStr = "rgb(" + scaled + ", " + scaled + ", " + scaled + ")";
        
        fifty.style.color = rgbStr;
        reference.innerHTML = rgbStr;
    };

})(document, window);