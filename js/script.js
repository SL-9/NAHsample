jQuery(function ($) {
	$('.mv').bgSwitcher({
		images: ['img/bg_mv1.jpg', 'img/bg_mv2.jpg', 'img/bg_mv3.jpg'], // 切り替える背景画像を指定
		interval: 5000, // 背景画像を切り替える間隔を指定 5000=5秒
		duration: 1800, // エフェクトの時間を指定します。
	});
});