#pragma strict

function OnTriggerEnter( col : Collider ){
    this.SendMessage('Explode');
}
