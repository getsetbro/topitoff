var zz = 0,
    ee;
$("body *").each(function() {
    var e = parseInt($(this).css("z-index"));
    if (e > zz) {
        zz = e;
        ee = $(this);
    }
});
if (ee) {
    ee.remove();
}