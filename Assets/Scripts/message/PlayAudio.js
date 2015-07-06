#pragma strict

function OnTriggerEnter( col : Collider ){
	GetComponent.<AudioSource>().Play();
}
