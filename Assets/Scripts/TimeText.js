#pragma strict

static var time : float;

function Start()
{
	time = 180;
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
	guiText.text = "<Color=red>TIME:" +
		now.ToString() + "</Color>";
}
