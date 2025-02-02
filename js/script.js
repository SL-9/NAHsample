jQuery(function ($) {
	$('.mv').bgSwitcher({
		images: ['img/bg_mv1.jpg', 'img/bg_mv2.jpg', 'img/bg_mv3.jpg'], // 切り替える背景画像を指定
		interval: 5000, // 背景画像を切り替える間隔を指定 5000=5秒
		duration: 1800, // エフェクトの時間を指定します。
	});
});

$(function () {
	//ハンバーガーメニュー( sp )
	$btnMenu = $("#js-btn-menu");
	$gnav = $(".gnav");

	$btnMenu.on("click", function () {
		$btnMenu.toggleClass("active");
		$gnav.toggleClass("show");
		$gnav.animate({ width: "toggle" }, 200);
		// 横方向に開閉する
	});

	$(document).on("click", function (e) {
		if (
			!$(e.target).closest($gnav).length &&
			!$(e.target).closest($btnMenu).length
		) {
			if ($gnav.hasClass("show")) {
				$gnav.removeClass("show");
				$btnMenu.toggleClass("active");
				$gnav.animate({ width: "toggle" }, 200);
			}
		}
	});
});