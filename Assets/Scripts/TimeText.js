#pragma strict

static var time : float;
static var startTime : float;
startTime = 120;

function Start()
{
	time = startTime;
}

function Update()
{
	time -= Time.deltaTime;
	var now : int = time;
	GetComponent.<GUIText>().text = "<Color=red>TIME:" +
		now.ToString() + "</Color>";
}
