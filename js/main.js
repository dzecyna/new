$(document).ready(function() {
    document.getElementById('menu').onclick = function() {
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

});
