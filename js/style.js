$(function(){
    // アイコンをクリック
	$(".menu--2 input").click(function(){
		$("#navi").toggleClass("open");
		$(".header").toggleClass("open");
	});
    
    //ハンバーガーメニュークリック時に閉じる
    $('#navi a').on('click', function(){
		$("#navi").removeClass("open");
		$(".header").removeClass("open");
        $(".menu--2.cross input").removeAttr("checked").prop("checked", false).change();
    });

});
