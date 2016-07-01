/* 内容管理对象 */
var H5 = function() {
	this.id = ( 'h5_' + Math.random() ).replace('.', '_');
	this.el = $('<div class="h5" id="' + this.id + '">').hide();
	$('body').append( this.el );

	// 新增一個頁
	this.addPage = function(name, text) {
		var page = $('<div class="h5_page">');

		if ( name != undefined ) {
			page.addClass('h5_page_' + name);
		}
		if ( text != undefined ) {
			page.text(text);
		}
		this.el.append(page);
		return this;
	}

	// 新增一個組件
	this.addComponent = function() {

	}

	// H5對象初始化呈現
	this.loader = function() {
		this.el.show();
	}

	return this;
}
