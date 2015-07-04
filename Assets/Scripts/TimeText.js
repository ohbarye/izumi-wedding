#pragma strict

static var time : float;
static var startTime : float;
startTime = 180;

function Start()
{
	time = startTime;
}

function Update()
{
	if( GoalArea.goal == false )
	{
		// timeout
		if( time < 0 ) {
			Application.LoadLevel( Application.loadedLevel );
		}
		time -= Time.deltaTime;
	}

	var now : int = time;
	GetComponent.<GUIText>().text = "<Color=red>TIME:" +
		now.ToString() + "</Color>";
}
