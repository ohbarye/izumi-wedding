#pragma strict

static var respawnPoint : int;
respawnPoint = 0;

static var rollbackTime : int;
rollbackTime = TimeText.startTime;

static var pos = [Vector3(2,10,5),Vector3(2,10,115),Vector3(10,10,235),Vector3(2,10,365)];

function OnTriggerEnter( col : Collider ) {
	if( col.tag == "Player" ) {
		col.transform.position = pos[respawnPoint];
		TimeText.time = rollbackTime + 5;
	}
}

static var setRespawn = function(point:int) {
	respawnPoint = point;
	rollbackTime = TimeText.time;
};
