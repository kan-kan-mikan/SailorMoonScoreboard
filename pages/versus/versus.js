// Preprocess character sidebar names
let c1 = docData['character_1'].toLowerCase();
let c2 = docData['character_2'].toLowerCase();
c1 = (c1 == '') ? (c1 = 'genericLeft') : c1.replace(/\s/g, '');
c2 = (c2 == '') ? (c2 = 'genericRight') : c2.replace(/\s/g, '');

// Update game name at the bottom
/*if ($('#game_1').text() != docData['game_1'])
{
	$('body')
		.queue(elemHide('.game')).delay(500)
		.queue(updateGame()).delay(500)
		.queue(elemShow('.game'));
}*/

// Update scoreboard at the top when changing rounds
if ($('#round_1').text() != docData['round_1'])
{
	$('body')
		.queue(elemHide('.character'))
		.queue(elemHide('.round'))
		.queue(elemHide('.score'))
		.queue(elemHide('.player')).delay(500)
		.queue(updateSidebar())
		.queue(elemUpdate()).delay(500)
		.queue(elemShow('.player'))
		.queue(elemShow('.score'))
		.queue(elemShow('.round'))
		.queue(elemShow('.character'));
}
// Update without animations if only one player needs to be changed
else if (($('#player_1s').text() != docData['player_1s'] &&
   			$('#player_2s').text() == docData['player_2s']) ||
		($('#player_1s').text() == docData['player_1s'] &&
   			$('#player_2s').text() != docData['player_2s']))
{
	$('body')
		.queue(elemUpdate())
}
// Update animations if multiple players need to be changed
else if ($('#player_1s').text() != docData['player_1s'] ||
	$('#player_2s').text() != docData['player_2s'] ||
	$('#player_1').text() != docData['player_1'] ||
 	$('#player_2').text() != docData['player_2'])
{
	$('body')
		.queue(elemHide('.character'))
		.queue(elemHide('.score'))
		.queue(elemHide('.player')).delay(500)
		.queue(updateSidebar())
		.queue(elemUpdate()).delay(500)
		.queue(elemShow('.player'))
		.queue(elemShow('.score'))
		.queue(elemShow('.character'));
}

// Update sidebars if only sidebars need to be changed
if ($('#char1bar').children('div').hasClass('sidebar ' + c1) == false ||
	$('#char2bar').children('div').hasClass('sidebar ' + c2) == false)
{
	$('body')
		.queue(elemHide('.character')).delay(500)
		.queue(updateSidebar()).delay(500)
		.queue(elemShow('.character'));
}
