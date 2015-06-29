#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["待って！止まって徹！"
			,"このわたしはあなたの記憶にすぎない…\n本物のわたしはこの先よ"
			,"そうね、でもコレだけは伝えておくわ\nこの先には床が抜けているところがあるの\nSpaceキーでジャンプして飛び越えてね！\nピンク色のラインがキーを押すタイミングよ！"];
static var questions = ["ひ、Hiroko！！"
				,"そうか…じゃあ急がないと！"];

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
