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
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "徹（とおる）…\nこんな大切な日に何をしている！？\n結婚式まであと3分もないぞ…！八芳園へ急げ！！" , style);
			if( GUI.Button( Rect( Screen.width / 2 -150, 350, 200, 30 ), "お前は誰だ？" )  ){
	 			page = 2;
			}
		} else if (page == 2) {
			GUI.Label( Rect ( Screen.width / 2 -150, 250, 200, 50 ), "僕？\n僕のことは気にするな…\nちなみに左に行くと死ぬぞ" , style);
		}
	}
}
