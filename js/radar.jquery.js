$.fn.radar = function(options)
{	
	options = $.extend({
		prefix: '_rdr_',
		width: 200,
		height: 200
	}, options);

	$radarBackground = $('<div class="' + options.prefix + 'background"></div>');
	$mask = $('<div class="' + options.prefix + 'mask"></div>')
	$blackOverlay = $('<div class="' + options.prefix + 'overlay"></div>')
	$dot = $('<div class="' + options.prefix + 'dot"></div>')

	$(this).css({width: options.width, height: options.height});

	$(this).append(
		$radarBackground.append(
			$dot.append(
				$mask.append(
					$blackOverlay
				)
			)
		)
	);
}