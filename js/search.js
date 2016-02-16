function search(v) {
    reset();

    var out = document.querySelectorAll('img:not([alt*="' + v + '"])');
    [].forEach.call(out, function(x) {
    x.style.display = 'none';
    });
}

function reset() {
    [].forEach.call(document.querySelectorAll('img'), function(x) {
    x.removeAttribute('style');
    });
}

$('input').keyup(search(this.value));