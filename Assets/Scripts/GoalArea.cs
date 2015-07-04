using UnityEngine;
using System.Collections;
using Novel;

public class GoalArea : MonoBehaviour {

    void OnTriggerEnter(Collider col) {
		NovelSingleton.StatusManager.callJoker("wide/scene4","");
	}
}
