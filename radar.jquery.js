

$.fn.radar = function(options)
{
	
	var defaults = {
		prefix: '_rdr_',
		width: 200,
		height: 200,
	}
	options = $.extend(defaults, options);

	console.log(options);

	$radarBackground = $('<div class="' + options.prefix + 'background"></div>');
	$mask = $('<div class="' + options.prefix + 'mask"></div>')
	$blackOverlay = $('<div class="' + options.prefix + 'overlay"></div>')
	$dot = $('<div class="' + options.prefix + 'dot"></div>')

	$(this).css({width: options.width, height: options.height});

	$mask.append($blackOverlay);
	$radarBackground.append($dot);
	$radarBackground.append($mask);

	$(this).append($radarBackground);


}