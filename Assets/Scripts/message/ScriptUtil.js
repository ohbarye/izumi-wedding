#pragma strict

static var text_x = Screen.width / 2 - 250;
static var text_y = Screen.height / 2 + 40;
static var text_w = 200;
static var text_h = 50;

static var button_x = Screen.width / 2 - 250;
static var button_y = Screen.height / 2 + 170;
static var button_w = 400;
static var button_h = 60;

static var fontSize = 30;
static var textColor = Color.white;

static var textRect = function () {
	return Rect ( text_x, text_y, text_w, text_h );
};

static var buttonRect = function () {
	return Rect ( button_x, button_y, button_w, button_h );
};

static var style = function (guistyle:GUIStyle) {
	guistyle.fontSize = fontSize;
	guistyle.normal.textColor = textColor;
	return guistyle;
};

static var q_style = function (guistyle:GUIStyle) {
	guistyle.fontSize = fontSize;
	return guistyle;
};

static var touch = function (col:Collider, after, now) {
	if( col.tag == "Player" ) {
		return after;
	} else {
		return now;
	}
};
