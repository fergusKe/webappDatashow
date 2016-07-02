/* 散点图表组件对象 */
var H5ComponentPoint = function(name, cfg) {
	var component = new H5ComponentBase( name, cfg );
	var base = cfg.data[0][1];  // 以第一個數據的比例為大小的100%
	// 輸出每個Point
	$.each( cfg.data, function(idx, item) {
		console.log('cfg.data = ', cfg.data);
		var point = $('<div class="point point_' + idx +'">');
		point.text(item[0] + '-' + item[1]);
		var per = (item[1] / base * 100) + '%';
		point.width(per).height(per);
		if (item[2]) {
			point.css('background-color', item[2]);
		}
		component.append(point);
	})
	return component;
}
