// //首页返回键处理
// //处理逻辑：1秒内，连续两次按返回键，则进入后台；
// var first = null;
// mui.back = function() {
// 	//首次按键，提示‘再按一次退出应用’
// 	if (!first) {
// 		first = new Date().getTime();
// 		mui.toast('再按一次退出应用');
// 		setTimeout(function() {
// 			first = null;
// 		}, 1000);
// 	} else {
// 		if (new Date().getTime() - first < 1000) {
// 			var main = plus.android.runtimeMainActivity();
//             main.moveTaskToBack(false);
// 		}
// 	}
// };
abc
123