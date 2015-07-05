#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["徹（とおる）…\nこんな大切な日に何をしている！？\n結婚式まで時間がないぞ…！八芳園へ急げ！！"
			,"僕？\n僕のことは気にするな…\nちなみに左に行くと死ぬぞ"];
static var questions = ["誰だ？"];

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
