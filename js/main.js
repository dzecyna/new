$(document).ready(function() {
    document.getElementById('mobile-menu-input').onclick = function() {
        if (this.checked) {
            document.body.classList.add('overflow');
        } else {
            document.body.classList.remove('overflow');
        }
    }

    $("#video").on("click",function(){
        $('.popup,.popup_overlay').fadeIn(700);
    });

    $(".closer,.popup_overlay").click(function(){
        $(".popup,.popup_overlay").fadeOut(500);
    });

    document.body.classList.add('visibility-shown');

    const slider = $(".slider");

    if (slider.length) {
        slider.slick()
    }

    new DG.OnOffSwitch({
        el: '#on-off-switch',
        textOn: 'Individual',
        textOff: 'Company',

    });



});
