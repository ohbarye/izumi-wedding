#pragma strict

function OnTriggerEnter( col : Collider ) {
	if( col.tag == "Player" ) {
		Couseout.setRespawn(3);
	}
}
