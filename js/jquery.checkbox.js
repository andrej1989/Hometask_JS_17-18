$('.check').mousedown(function(){
	changeCheck($(this));
});

$('.check').each(function(){
	eachCheck($(this));
});

function changeCheck(el){
	var el = el;
	check = el.find('input').eq(0);
	checkbox = el.find('.checkbox');
	if (check.prop('checked')){
		checkbox.css('background-position', '0 0');
	} else {
		checkbox.css('background-position', '0 20px');
	}
}

function eachCheck(el){
	var el = el;
	check = el.find('input').eq(0);
	checkbox = el.find('.checkbox');
	if (!check.prop('checked')){
		checkbox.css('background-position', '0 0');
	} else {
		checkbox.css('background-position', '0 20px');
	}
}