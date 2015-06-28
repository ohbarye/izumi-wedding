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
			GUI.Label( Rect ( Screen.width / 2 -150, 300, 200, 50 ), "東武東上線から伝える、おめでとう！！" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 200, 30 ), "東上線…高校生……？" )  ){
	 			page = 2;
			}
		} else if (page == 2) {
			GUI.Label( Rect ( Screen.width / 2 -150, 300, 200, 50 ), "通りすがりの新井くんです" , style);
		}
	}
}
