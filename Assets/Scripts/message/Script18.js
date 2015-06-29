#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["Nice Jamp。徹。"
			,"いいえ、幻\n本物のわたしはこの先よ\nもう少しだけ、頑張って！"];
static var questions = ["ひ、Hiroko！！本物か？"];

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
