function losuj() {
    // tresc
    var arr = []
    while (arr.length < 3) {
        var randomnumber = Math.ceil(Math.random() * $zbiory.length)
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == randomnumber)
                found = true;
            break
        }
        if (!found)
            arr[arr.length] = randomnumber;
    }

    // polozenie
    $('.dataset').each(function (idx, el) {
        jel = $(el);
        jel.text(arr[idx] + '. ' + $zbiory[arr[idx]]);
        jel.css('left', Math.random() * 70 + '%');
        jel.css('top', 200 + Math.random() * 80  + idx * 200 + 'px');
    });

    targetNo = Math.ceil(Math.random() * target.length);
    $('.target-group span').text(target[targetNo]);
}

$(function () {
    $('#losuj').on('click', function (ev) {
        losuj();
    });

    losuj();
});