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
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "Nice Jamp。徹。" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 300, 30 ), "ひ、Hiroko！！本物か？" )  ){
	 			page = 2;
			}
		} else if (page == 2) {
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "いいえ、幻\n本物のわたしはこの先よ\nもう少しだけ、頑張って！" , style);
		}
	}
}
