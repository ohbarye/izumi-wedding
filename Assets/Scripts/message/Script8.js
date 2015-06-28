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
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "酒泉く〜ん" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 300, 30 ), "あ…清水淳(あっくん)じゃないか" )  ){
	 			page = 2;
			}
		} else if (page == 2) {
			GUI.Label( Rect ( Screen.width / 2 -150, 300, 200, 50 ), "ここを右に行くと八芳園まで近道だよ〜\n見えない道があるんだ〜" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 300, 30 ), "本当…？何もないけど…" )  ){
				page = 3;
			}
		} else if (page == 3) {
			GUI.Label( Rect ( Screen.width / 2 -150, 300, 200, 50 ), "ウソじゃないよ〜\n中学校からの『付き合い』じゃないか〜" , style);
		}
	}
}
