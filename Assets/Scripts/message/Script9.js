#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["淳…殺す"];
static var questions = [""];

function OnTriggerEnter( col : Collider ){
	touch = ScriptUtil.touch(col, true, touch);
}

function OnTriggerExit( col : Collider ){
	touch = ScriptUtil.touch(col, false, touch);
}

function OnGUI(){
	if(touch) {
		displayText();
		if (page < texts.length-1 && question()) { page += 1; }
	}
}

function displayText() {
	var style = ScriptUtil.style(style);
	style.fontSize = 60;
	style.normal.textColor = Color.red;
	GUI.Label(ScriptUtil.textRect(), texts[page], style);
}
function question() {
	return GUI.Button(ScriptUtil.buttonRect(), questions[page], ScriptUtil.q_style(GUIStyle("button")));
}
