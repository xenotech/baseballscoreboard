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