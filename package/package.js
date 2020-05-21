function elemHide(elem)
{
	return function (next)
	{
		$(elem).addClass('fast hidden');
		next();
	}
}

function elemShow(elem)
{
	return function (next)
	{
		$(elem).removeClass('fast hidden');
		next();
	}
}

function elemUpdate()
{
	return function (next)
	{
		for(var prop in docData)
		{
			$('#'+prop).text(docData[prop]);
		}
		next();
	}
}

function updateGame()
{
	return function (next)
	{
		$('#game_1').text(docData['game_1']);
		next();
	}
}

function updateSidebar()
{
	return function (next)
	{
		// Preprocess character sidebar names
		let c1 = docData['character_1'].toLowerCase();
		let c2 = docData['character_2'].toLowerCase();
		c1 = (c1 == '') ? (c1 = 'genericLeft') : c1.replace(/\s/g, '');
		c2 = (c2 == '') ? (c2 = 'genericRight') : c2.replace(/\s/g, '');
		
		// Update sidebars with the correct image
		$('#char1bar .sidebar').removeClass().addClass('sidebar ' + c1);
		$('#char2bar .sidebar').removeClass().addClass('sidebar ' + c2);
		next();
	}
}
