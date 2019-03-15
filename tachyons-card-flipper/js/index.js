var small_screen = window.matchMedia('only screen and (max-width: 767px)').matches;
if (!small_screen){
    flipper = document.querySelectorAll('.flipper');
    
    Array.prototype.forEach.call(flipper, function(el, i){
        // el.classList.add('dim');
        el.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        }, false);
    })
}