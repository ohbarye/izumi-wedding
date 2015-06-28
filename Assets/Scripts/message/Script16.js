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
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "ヒロコはこの先…\nでも落盤的な何かのせいで 回り道しないとダメなの！\n気をつけて！" , style);
		}
	}
}
