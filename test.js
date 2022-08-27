//경기 관련 전역 변수 선언
var ScoreA=0;
var ScoreB=0;
var Status1B=0;
var Status2B=0;
var Status3B=0;
var Status1Ball=0;
var Status2Ball=0;
var Status3Ball=0;
var Status1Strike=0;
var Status2Strike=0;
var Status1Out=0;
var Status2Out=0;
var InningCount=0;
var InningTopBottom="말";
var StrikeCount=0;
var BallCount=0;
var OutCount=0;
var PitchingCountTop=0;
var PitchingCountBottom=0;
var PlayerInfoIndex=0;
var BatterIndexTop=0;
var BatterIndexBottom=0;
var PitcherIndexTop=1;
var PitcherIndexBottom=1;
var LineupTop=[];
var LineupBottom=[];
var PlayerName=[];

LineupBottom = [0,18,19,20,21,22,23,24,25,26];
PitcherIndexBottom = 12;

LineupTop = [0,3,6,2,1,4,5,6,7,8,2];
PitcherIndexTop = 17;

PlayerName = ["Null",
	      "채시훈[17]","신희주[11]","나건우[9]","최재원[12]","박종현[10]",
	      "이현서[14]","한재준[7]","홍승완[13]","조규민[3]","손영빈[22]",
	      "장성환[15]","배준석[16]","이시헌[18]","김병철[19]","김상현[20]",
	      "김태완[21]","함성현[]",
	      "하윤[1]","강동훈[21]","고근태[14]","고수혁[13]","곽민준[11]",
	      "김보현[6]","김시우[5]","김하민[17]","박경원[0]","송용진[22]",
	      "원태웅[20]","이광준[9]","정태원[0]","최윤우[19]","최은석[12]",
	      "함수밀[18]","선수17"];

function ScoreMinusA(){
	ScoreA =ScoreA -1
	if (ScoreA <0 ) {
		ScoreA = 0;
	}
	document.getElementById("TeamAScore-text").innerHTML = ScoreA;
}

function ScorePlusA(){
	ScoreA =ScoreA +1
	if (ScoreA <0 ) {
		ScoreA = 0;
	}
	document.getElementById("TeamAScore-text").innerHTML = ScoreA;
}

function ScoreMinusB(){
	ScoreB =ScoreB -1
	if (ScoreB <0 ) {
		ScoreB = 0;
	}
	document.getElementById("TeamBScore-text").innerHTML = ScoreB;
}

function ScorePlusB(){
	ScoreB =ScoreB +1
	if (ScoreB <0 ) {
		ScoreB = 0;
	}
	document.getElementById("TeamBScore-text").innerHTML = ScoreB;
}


function Change1Ball(){
	if (Status1Ball==0 ) {
		Status1Ball = 1;
		document.getElementById("Ball1-Image").src = "./Ball.png";
		PitchesPlus()
	} 
	else {
		Status1Ball = 0;
		document.getElementById("Ball1-Image").src = "./Blank.png";
	}
}
function Change2Ball(){
	if (Status2Ball==0 ) {
		Status2Ball = 1;
		document.getElementById("Ball2-Image").src = "./Ball.png";
		PitchesPlus()
	} 
	else {
		Status2Ball = 0;
		document.getElementById("Ball2-Image").src = "./Blank.png";
	}
}
function Change3Ball(){
	if (Status3Ball==0 ) {
		Status3Ball = 1;
		document.getElementById("Ball3-Image").src = "./Ball.png";
		PitchesPlus()
	} 
	else {
		Status3Ball = 0;
		document.getElementById("Ball3-Image").src = "./Blank.png";
	}
}
function Change1Strike(){
	if (Status1Strike==0 ) {
		Status1Strike = 1;
		document.getElementById("Strike1-Image").src = "./Strike.png";
		PitchesPlus()
	} 
	else {
		Status1Strike = 0;
		document.getElementById("Strike1-Image").src = "./Blank.png";
	}
}
function Change2Strike(){
	if (Status2Strike==0 ) {
		Status2Strike = 1;
		document.getElementById("Strike2-Image").src = "./Strike.png";
		PitchesPlus()
	} 
	else {
		Status2Strike = 0;
		document.getElementById("Strike2-Image").src = "./Blank.png";
	}
}
function Change1Out(){
	if (Status1Out==0 ) {
		Status1Out = 1;
		document.getElementById("Out1-Image").src = "./Out.png";
		PitchesPlus()
	} 
	else {
		Status1Out = 0;
		document.getElementById("Out1-Image").src = "./Blank.png";
	}
}
function Change2Out(){
	if (Status2Out==0 ) {
		Status2Out = 1;
		document.getElementById("Out2-Image").src = "./Out.png";
		PitchesPlus()
	} 
	else {
		Status2Out = 0;
		document.getElementById("Out2-Image").src = "./Blank.png";
	}
}
function Change1B(){
	if (Status1B==0 ) {
		Status1B = 1;
		document.getElementById("Base1B").src = "./RunnerBase.png";

	} 
	else {
		Status1B = 0;
		document.getElementById("Base1B").src = "./EmptyBase.png";
	}
}

function Change2B(){
	if (Status2B==0 ) {
		Status2B = 1;
		document.getElementById("Base2B").src = "./RunnerBase.png";
	} else {
		Status2B = 0;
		document.getElementById("Base2B").src = "./EmptyBase.png";
	}
}

function Change3B(){
	if (Status3B==0 ) {
		Status3B = 1;
		document.getElementById("Base3B").src = "./RunnerBase.png";
	} else {
		Status3B = 0;
		document.getElementById("Base3B").src = "./EmptyBase.png";
	}
}

function InningChange(){
	if (InningTopBottom=="초") {
		InningTopBottom="말";
		document.getElementById("InningTop").style.visibility = "hidden"
		document.getElementById("InningBottom").style.visibility = "visible"
		document.getElementById("Base1B").style.visibility = "visible"
		document.getElementById("Base2B").style.visibility = "visible"
		document.getElementById("Base3B").style.visibility = "visible"
		Nextinning();
	} else {
		InningTopBottom="초";
		document.getElementById("InningTop").style.visibility = "visible"
		document.getElementById("InningBottom").style.visibility = "hidden"
		document.getElementById("Base1B").style.visibility = "visible"
		document.getElementById("Base2B").style.visibility = "visible"
		document.getElementById("Base3B").style.visibility = "visible"
		Nextinning();
		InningPlus();
	} 

	document.getElementById("InningCount-text").innerHTML=InningCount;
	document.getElementById("InningTopBottom-text").innerHTML=InningTopBottom;
}
function InningPlus(){
	InningCount =  InningCount +1 
	if (InningCount<1 ) {
		InningCount = 1;
	}
	document.getElementById("InningCount-text").innerHTML=InningCount
	document.getElementById("InningTopBottom-text").innerHTML=InningTopBottom
}
function InningMinus(){
	InningCount =  InningCount -1 
	if (InningCount<1 ) {
		InningCount = 1;
	}
	document.getElementById("InningCount-text").innerHTML=InningCount
	document.getElementById("InningTopBottom-text").innerHTML=InningTopBottom
}

function StrikePlus(){
	StrikeCount=StrikeCount+1
	if (StrikeCount==3) {
		StrikeCount=0
	} 
	document.getElementById("Strike-text").innerHTML=StrikeCount
	PitchesPlus()
}
function BallPlus(){
	BallCount=BallCount+1
	if (BallCount==4) {
		BallCount=0
	} 
	document.getElementById("Ball-text").innerHTML=BallCount
	PitchesPlus()
}
function OutPlus(){
	OutCount=OutCount+1
	if (OutCount>=3) {
		OutCount=0
	} 
	document.getElementById("Out-text").innerHTML=OutCount
	PitchesPlus()
}
function PitchesPlus(){
	if (InningTopBottom=="초") {
		PitchingCountTop = PitchingCountTop+1
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		PitchingCountBottom = PitchingCountBottom+1
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}
function PitchesMinus(){
	if (InningTopBottom=="초") {
		PitchingCountTop = PitchingCountTop-1
		if (PitchingCountTop<0 ) {
			PitchingCountTop= 0;
		}
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		PitchingCountBottom = PitchingCountBottom-1
		if (PitchingCountBottom<0 ) {
			PitchingCountBottom= 0;
		}
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}
function Nextinning(){
	Status1B=1;
		Change1B()
	Status2B=1;
		Change2B()
	Status3B=1;
		Change3B()
	Status1Ball=1;
		Change1Ball()
	Status2Ball=1;
		Change2Ball()
	Status3Ball=1;
		Change3Ball()
	Status1Strike=1;
		Change1Strike()
	Status2Strike=1;
		Change2Strike()
	Status1Out=1;
		Change1Out()
	Status2Out=1;
		Change2Out()
		Nextbatter()
		ChangeinningPitcher()
}
function GameStart(){
	Status1B=1;
		Change1B()
	Status2B=1;
		Change2B()
	Status3B=1;
		Change3B()
	Status1Ball=1;
		Change1Ball()
	Status2Ball=1;
		Change2Ball()
	Status3Ball=1;
		Change3Ball()
	Status1Strike=1;
		Change1Strike()
	Status2Strike=1;
		Change2Strike()
	Status1Out=1;
		Change1Out()
	Status2Out=1;
		Change2Out()
	InningCount=0;
	InningTopBottom="말";
		 InningChange()
}
function CountClear(){
	Status1Ball=1;
		Change1Ball()
	Status2Ball=1;
		Change2Ball()
	Status3Ball=1;
		Change3Ball()
	Status1Strike=1;
		Change1Strike()
	Status2Strike=1;
		Change2Strike()
}
function BaseClear(){
	Status1B=1;
		Change1B()
	Status2B=1;
		Change2B()
	Status3B=1;
		Change3B()
	Status1Ball=1;
		Change1Ball()
}
function Nextbatter(){
	if (InningTopBottom=="초") {
		CountClear()
		BatterIndexTop=BatterIndexTop+1
		if (BatterIndexTop > 9 ) {
			BatterIndexTop=1
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexTop
		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupTop[BatterIndexTop]]
	} else {
		CountClear()
		BatterIndexBottom = BatterIndexBottom+1
		if (BatterIndexBottom > 9 ) {
			BatterIndexBottom= 1;
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexBottom
		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupBottom[BatterIndexBottom]]
	}
}
function Lastbatter(){
	if (InningTopBottom=="초") {
		CountClear()
		BatterIndexTop=BatterIndexTop-1
		if (BatterIndexTop < 1 ) {
			BatterIndexTop=9
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexTop
		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupTop[BatterIndexTop]]
	} else {
		CountClear()
		BatterIndexBottom = BatterIndexBottom-1
		if (BatterIndexBottom < 1 ) {
			BatterIndexBottom= 9;
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexBottom
		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupBottom[BatterIndexBottom]]
	}
}
function ChangeinningPitcher(){
	if (InningTopBottom=="초") {
		document.getElementById("PitcherName-text").innerHTML=PlayerName[PitcherIndexTop]
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		document.getElementById("PitcherName-text").innerHTML=PlayerName[PitcherIndexBottom]
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}
function ChangebatterPlus(){
	if (InningTopBottom=="초") {
		LineupTop[BatterIndexTop]=LineupTop[BatterIndexTop]+1
		if (LineupTop[BatterIndexTop] > 26 ) {
			LineupTop[BatterIndexTop]=1
		}

		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupTop[BatterIndexTop]]
	} else {
		LineupBottom[BatterIndexBottom]=LineupBottom[BatterIndexBottom]+1
		if (LineupBottom[BatterIndexBottom] > 26 ) {
			LineupBottom[BatterIndexBottom]=1
		}
		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupBottom[BatterIndexBottom]]
	}
}
function ChangebatterMinus(){
	if (InningTopBottom=="초") {
		LineupTop[BatterIndexTop]=LineupTop[BatterIndexTop]-1
		if (LineupTop[BatterIndexTop] < 1 ) {
			LineupTop[BatterIndexTop]=25
		}
		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupTop[BatterIndexTop]]
	} else {
		LineupBottom[BatterIndexBottom]=LineupBottom[BatterIndexBottom]-1
		if (LineupBottom[BatterIndexBottom] < 1 ) {
			LineupBottom[BatterIndexBottom]=25
		}

		document.getElementById("BatterName-text").innerHTML=PlayerName[LineupBottom[BatterIndexBottom]]
	}
}
function ChangePitcherPlus(){
	if (InningTopBottom=="초") {
		PitcherIndexTop=PitcherIndexTop+1
		if (PitcherIndexTop > 26 ) {
			PitcherIndexTop=1
		}		
		document.getElementById("PitcherName-text").innerHTML=PlayerName[PitcherIndexTop]
		PitchingCountTop=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		PitcherIndexBottom=PitcherIndexBottom+1
		if (PitcherIndexBottom > 26 ) {
			PitcherIndexBottom=1
		}
		document.getElementById("PitcherName-text").innerHTML=PlayerName[PitcherIndexBottom]
		PitchingCountBottom=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}
function ChangePitcherMinus(){
	if (InningTopBottom=="초") {
		PitcherIndexTop=PitcherIndexTop-1
		if (PitcherIndexTop < 1 ) {
			PitcherIndexTop=25
		}
		document.getElementById("PitcherName-text").innerHTML=PlayerName[PitcherIndexTop]
		PitchingCountTop=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		PitcherIndexBottom=PitcherIndexBottom-1
		if (PitcherIndexBottom < 1 ) {
			PitcherIndexBottom=25
		}
		document.getElementById("PitcherName-text").innerHTML=PlayerName[PitcherIndexBottom]
		PitchingCountBottom=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}
