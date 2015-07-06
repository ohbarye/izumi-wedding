#pragma strict

var messageNo : int;
var style : GUIStyle;
private var touch = false;
private var page = 0;
private var texts = [
/*  1 */	["徹（とおる）…\nこんな大切な日に何をしている！？\n結婚式まで時間がないぞ…！八芳園へ急げ！！","僕？\n僕のことは気にするな…\nちなみに左に行くと死ぬぞ"]
/*  2 */	,["酒泉く〜ん　結婚おめでとう〜"]
/*  3 */	,["結婚…？？僕が…？"]
/*  4 */	,["東武東上線から伝える、おめでとう！！"]
/*  5 */	,["？「あ、酒泉くん！」","？「ヒロコを幸せにしてよね！」\n？「徹…わたし待ってるよ！」"]
/*  6 */	,["僕はヒロコ…さんと……？"]
/*  7 */	,["うっ！下半身が熱い……！！\n何か思い出してきたぞ！"]
/*  8 */	,["酒泉く〜ん\nこっちおいでよ〜","ここを右に行くと八芳園まで近道だよ〜\n見えない道があるんだ〜","ウソじゃないよ〜\n中学校からの『付き合い』じゃないか〜"]
/*  9 */	,["淳…絶対に許さない"]
/* 10 */	,["絶対にヒロコを幸せにしてね！"]
/* 11 */	,["いつまでもお幸せに…"]
/* 12 */	,["ヒロコを裏切ったらブッ飛ばすからな！！"]
/* 13 */	,["幸せな家庭を築けますように……"]
/* 14 */	,["Happy Wedding!"]
/* 15 */	,["そうか、思い出してきた！\n僕は、結婚するんだ…！！\n八芳園へ急がないと！！"]
/* 16 */	,["ヒロコはこの先…\nでも落盤的な何かのせいで\n手前に回り道しないとダメなの！\n気をつけて！"]
/* 17 */	,["待って！止まって徹！","このわたしはあなたの記憶にすぎない…\n本物のわたしはこの先よ","そうね、でもコレだけは伝えておくわ\nこの先には床が抜けているところがあるの\nSpaceキーでジャンプして飛び越えてね！\nピンク色のラインがキーを押すタイミングよ！"]
/* 18 */	,["ナイスジャンプ。徹。","いいえ、幻\n本物のわたしはこの先よ\nもう少しだけ、頑張って！"]
/* 19 */	,["よし、全力で行くぞ！\nみんな…僕に力をくれ！"]
/* 20 */	,["できる！できる！\nきみならできる！"]
/* 21 */	,["みんな…祝辞をありがとう…！\n絶対たどり着くんだ、ヒロコのところへ……！"]
/* 22 */	,["よくぞここまで来ました、徹よ。\nこれが最後の試練です。","良い度胸ね。\nじゃあ問うわ。この先にある3色のうち、\nヒロコの好きな色はどれ？","そうよ。その程度のことを間違えたら\nあなたには『資格』が無いということ…\nさぁ、行きなさい…"]
/* 23 */	,["いざ八芳園！！！"]
];
private var questions = [
/*  1 */	["誰だ？"]
/*  2 */	,[""]
/*  3 */	,[""]
/*  4 */	,[""]
/*  5 */	,["きみたちは……？"]
/*  6 */	,[""]
/*  7 */	,[""]
/*  8 */	,["淳じゃないか！","本当？何もないけど…"]
/*  9 */	,[""]
/* 10 */	,[""]
/* 11 */	,[""]
/* 12 */	,[""]
/* 13 */	,[""]
/* 14 */	,[""]
/* 15 */	,[""]
/* 16 */	,[""]
/* 17 */	,["ひ、Hiroko！！","そうか…じゃあ急がないと！"]
/* 18 */	,["ほ、本物のひろこ！！？"]
/* 19 */	,[""]
/* 20 */	,[""]
/* 21 */	,[""]
/* 22 */	,["なんでもこいって気分だぜ","好きな色…だと？？"]
/* 23 */	,[""]
];

function OnTriggerEnter( col : Collider ){
	touch = isTouch(col, true, touch);
}

function OnTriggerExit( col : Collider ){
	touch = isTouch(col, false, touch);
}

function OnGUI(){
	if(touch) {
		displayText();
		if (page < texts[messageNo].length-1 && question()) { page += 1; }
	}
}

function displayText() {
	var style = textStyle(style);
	if (messageNo == 8) {
		style.fontSize = 60;
		style.normal.textColor = Color.red;
	}

	GUI.Label(textRect(), texts[messageNo][page], style);
}
function question() {
	return GUI.Button(buttonRect(), questions[messageNo][page], questioinStyle(GUIStyle("button")));
}

static var text_x = Screen.width / 2 - 250;
static var text_y = Screen.height / 2 + 40;
static var text_w = 200;
static var text_h = 50;

static var button_x = Screen.width / 2 - 250;
static var button_y = Screen.height / 2 + 170;
static var button_w = 400;
static var button_h = 60;

static var fontSize = 30;
static var textColor = Color.white;

static var textRect = function () {
	return Rect ( text_x, text_y, text_w, text_h );
};

static var buttonRect = function () {
	return Rect ( button_x, button_y, button_w, button_h );
};

static var textStyle = function (guistyle:GUIStyle) {
	guistyle.fontSize = fontSize;
	guistyle.normal.textColor = textColor;
	return guistyle;
};

static var questioinStyle = function (guistyle:GUIStyle) {
	guistyle.fontSize = fontSize;
	return guistyle;
};

static var isTouch = function (col:Collider, after, now) {
	if( col.tag == "Player" ) {
		return after;
	} else {
		return now;
	}
};
