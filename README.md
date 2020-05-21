# SailorMoonScoreboard
Stream overlay made for [SuperTiso](https://twitter.com/SuperTiso).

# Setup

## Package

Put the CSS and JS scripts found in the `/package` folder into the respective windows.

## Pages

Put the HTML, CSS, and JS scripts found in the `/pages` folder into the respective pages. `versus.css` will need to be modified to update the character sidebar images after you have uploaded them to your 8wr.io scoreboard package.

### Versus

The versus page displays player names, scores, and the round of the tournament.

#### Fields

The versus page has 6 fields. Set them up like so:

![Versus page field setup](https://raw.githubusercontent.com/DrEvilBrain/SailorMoonScoreboard/master/VersusPageFields.png "Versus page field setup")

```
Round counter (used to keep track of what round the tournament is on):
    Key: round
    Type: Text field

Player names and scoreboard (used to keep track of the score):
    Key: player
    Type: Scoreboard
    Show clear/reset buttons: On

Character names (used to control the movelist sidebars):
    Key: character
    Type: Select menu
    Database:
        Chibi Moon
        Jupiter
        Mars
        Mercury
        Moon
        Neptune
        Pluto
        Uranus
        Venus

Copy match info to clipboard (used to quickly grab match info for Twitter):
    Key: info
    Type: Clipboard
    Database: {event_1} - {game_1} {round_1} - {player_1} ({character_1}) VS {player_2} ({character_2})

Game name (used to set the game name for match info):
    Key: game
    Type: Text field

Event name (used to set the event name for match info):
    Key: event
    Type: Text field
```
## Color Palette

The currently set color palette isn't final and needs to be changed to something that doesn't look bad.
```
var(--font-color): Font color

var(--border-color): Text outline color

var(--main-color1): Player name panel color

var(--main-color2): Score panel color

var(--main-color3): Round panel color
```
## Font

Uses Noto Sans, but can easily be changed in `/package.css`.

## Images

All of the character movelist sidepanels are in `/img`. Upload them to 8wr.io without renaming them.

Then, edit your page's CSS to update the `background-image` properties in the `sidebar.CHARACTER_NAME` styles with the corresponding image's link. 
