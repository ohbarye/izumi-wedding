#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["ヒロコはこの先…\nでも落盤的な何かのせいで\n手前に回り道しないとダメなの！\n気をつけて！"];
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
	GUI.Label(ScriptUtil.textRect(), texts[page], ScriptUtil.style(style));
}
function question() {
	return GUI.Button(ScriptUtil.buttonRect(), questions[page], ScriptUtil.q_style(GUIStyle("button")));
}
