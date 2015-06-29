#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["？「女にとっては、」\n？「自分が愛している以上に、」\n？「自分を愛してくれる男と結婚するのが一番良い。」"];
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
