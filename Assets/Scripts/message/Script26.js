#pragma strict

var style : GUIStyle;
static var touch : boolean;
touch = false;

style.fontSize = 20;
style.normal.textColor = Color.white;

function OnTriggerEnter( col : Collider )
{
	if( col.tag == "Player" ) {
		touch = true;
	}
}

function OnTriggerExit( col : Collider )
{
	if( col.tag == "Player" ) {
		touch = false;
		page = 1;
	}
}

static var page : int;
page = 1;

function OnGUI(){
	if( touch ) {
		if (page == 1) {
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "よくぞここまで来ました、酒泉徹よ。\nこれが最後の試練です。" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 300, 30 ), "なんでもかかってこいって気分だぜ" )  ){
	 			page = 2;
			}
		} else if (page == 2) {
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "良い度胸ね。\nじゃあ問うわ。この先にある3色のうち、\nヒロコの好きな色はどれ？" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 300, 30 ), "好きな色…だと？？" )  ){
				page = 3;
			}
		} else if (page == 3) {
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "そうよ。その程度のことを間違えたら\nあなたには『資格』が無いということ…\nさぁ、行きなさい…" , style);
		}
	}
}
