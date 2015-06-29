#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["よくぞここまで来ました、酒泉徹よ。\nこれが最後の試練です。"
			,"良い度胸ね。\nじゃあ問うわ。この先にある3色のうち、\nヒロコの好きな色はどれ？"
			,"そうよ。その程度のことを間違えたら\nあなたには『資格』が無いということ…\nさぁ、行きなさい…"];
static var questions = ["なんでもこいって気分だぜ"
				,"好きな色…だと？？"];

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
