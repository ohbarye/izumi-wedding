#pragma strict

var style : GUIStyle;
static var touch = false;
static var page = 0;
static var texts = ["酒泉く〜ん\nこっちおいでよ〜"
			,"ここを右に行くと八芳園まで近道だよ〜\n見えない道があるんだ〜"
			,"ウソじゃないよ〜\n中学校からの『付き合い』じゃないか〜"];
static var questions = ["清水淳(あっくん)じゃないか"
				,"本当？何もないけど…"];

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
