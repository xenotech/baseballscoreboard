//경기 상태 관련 전역 변수 선언
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

//경기 선수 관련 전역 변수 선언
var TeamIndexTop=31
var TeamIndexBottom=31

var PlayerIndexTopBatList=[];
var PlayerIndexBottomBatList=[];

var PlayerIndexTopPitcher=0;
var PlayerIndexBottomPitcher=0;

var BatterIndexTop=0;
var BatterIndexBottom=0;

//팀 및 선수 DB 관련 전역 변수 선언
var TeamName=[];
var PlayerName=[];

PlayerIndexTopBatList=[0,0,1,2,3,4,5,6,7,8];
PlayerIndexBottomBatList=[0,0,1,2,3,4,5,6,7,8];

TeamName=[
"HBC",
"PB클럽",
"SDF투칸스",
"개군중",
"경민중",
"금릉중",
"김포BC",
"대원중",
"라온중",
"매송중",
"매향중",
"모과중",
"부천중",
"서호중",
"성일중",
"소래중",
"송전중",
"수원북중",
"신일중",
"신흥중",
"안산시",
"여강BC",
"연세중",
"오산SC",
"원당중",
"율곡중",
"인창중",
"중앙중",
"청담중",
"평촌중",
"화성BC",
"회룡BC"
]

PlayerName=[
["조창민[47]",
"조의찬[11]",
"최원석[17]",
"황제인[1]",
"박준서[3]",
"모현민[15]",
"윤석현[6]",
"김찬[20]",
"한예준[7]",
"김이안[21]",
"이주형[23]",
"윤찬혁[53]",
"최의현[2]",
"장재형[9]",
"윤하민[10]"],
["하동준[1]",
"강준[11]",
"설민한[15]",
"임성표[16]",
"주강희[2]",
"유원석[7]",
"임종훈[12]",
"임준영[21]",
"장철[3]",
"강호민[63]",
"임종연[17]",
"이재호[55]"],
["김기성[16]",
"공은표[12]",
"김재훈[10]",
"백동비[11]",
"전민서[1]",
"전재홍[8]",
"엄한민[2]",
"강우현[23]",
"김기진[4]",
"김상민[3]",
"정해성[9]",
"최시우[13]"],
["강수찬[15]",
"김예찬[29]",
"민경훈[35]",
"박지훈[17]",
"오하민[1]",
"원태호[10]",
"장예찬[11]",
"정래성[16]",
"박루빈[12]",
"이시영[2]",
"김건우[7]",
"성주호[5]",
"이원도[6]",
"임선우[9]",
"현빈[24]",
"김도윤[19]",
"우성오[4]",
"김태연[32]",
"차준혁[8]",
"이우진[22]",
"김근영[14]",
"박지황[36]",
"이일규[20]",
"남민혁[13]",
"김건우[3]",
"박규정[27]",
"서재민[23]",
"최재이[25]",
"김용환[21]"],
["전석영[11]",
"박민[1]",
"김성민[18]",
"이도겸[9]",
"김소람[12]",
"김범주[19]",
"임석원[21]",
"부건우[29]",
"장종찬[33]",
"김지우[31]",
"박예훈[10]",
"박시훈[22]",
"박성준[15]",
"정우빈[42]",
"김익현[7]",
"이영택[2]",
"방성민[6]",
"최지웅[5]",
"김범서[3]",
"신윤수[41]",
"정한결[27]",
"김준우[4]",
"김진완[28]",
"박태용[16]",
"김재훈[17]",
"조승현[8]",
"신윤도[14]",
"이승현[47]",
"강한성[35]",
"최서원[25]"],
["박현규[1]",
"신지우[21]",
"윤재효[14]",
"김승모[29]",
"이동훈[19]",
"유영채[17]",
"윤서완[11]",
"김도현[45]",
"박세빈[34]",
"천성현[30]",
"김동현[12]",
"이주안[27]",
"최진명[25]",
"인재훈[15]",
"함지원[35]",
"김준모[22]",
"윤유노[13]",
"이유건[10]",
"박종선[7]",
"하예강[5]",
"송민준[2]",
"맹근환[31]",
"신영준[8]",
"이유현[26]",
"김동완[37]",
"정지후[33]",
"민승혁[3]",
"황백두[38]",
"유승수[4]"],
["강동훈[21]",
"송용진[2]",
"정태원[10]",
"고수혁[13]",
"이광준[9]",
"고근태[14]",
"원태웅[20]",
"곽민준[11]",
"김하민[17]",
"김희재[3]",
"함수밀[18]",
"최윤우[19]",
"김보현[6]",
"인용헌[15]",
"박경원[23]",
"송호찬[16]",
"최은석[12]"],
["이의천[19]",
"이건[15]",
"명리우[46]",
"권민재[20]",
"길은혁[34]",
"박성준[11]",
"권대환[5]",
"이근영[18]",
"김준환[10]",
"정윤찬[42]",
"강민석[23]",
"정민규[7]",
"유용재[21]",
"송관호[16]",
"이주원[29]",
"정민재[32]",
"이서진[9]",
"이준우[6]",
"김지후[53]",
"정윤호[3]",
"김다민[1]",
"권혁준[45]",
"김동윤[17]",
"박민준[14]",
"임재서[37]",
"노영진[44]",
"최승우[52]",
"이강현[38]",
"김열음[24]",
"박채환[47]"],
["유강빈[19]",
"유주호[29]",
"권률이[11]",
"임하진[14]",
"박시우[32]",
"김성록[40]",
"최민석[31]",
"김예찬[15]",
"김도현[20]",
"김은호[36]",
"김강휘[12]",
"이주한[30]",
"하승민[1]",
"강병진[16]",
"김재완[22]",
"김민찬[7]",
"남건욱[48]",
"김민서[5]",
"김지훈[2]",
"최수혁[13]",
"정시우[3]",
"황재원[24]",
"육성현[21]",
"김윤호[6]",
"김가람[18]",
"구본학[9]"],
["강준영[11]",
"김민혁[20]",
"서지우[22]",
"이서진[18]",
"황윤호[12]",
"강준혁[17]",
"김도윤[27]",
"이지원[21]",
"최정환[30]",
"한창오[34]",
"이서율[28]",
"최중경[32]",
"김원준[24]",
"송채율[26]",
"박민준[10]",
"노강민[7]",
"장왕희[16]",
"우승규[14]",
"정규혁[5]",
"주영륜[6]",
"김찬희[8]",
"안준혁[29]",
"조영민[13]",
"박정우[3]",
"양준서[2]",
"이찬우[1]",
"김재석[19]",
"김재용[9]",
"선도헌[33]",
"유예범[4]"],
["김동진[21]",
"김지혁[18]",
"김재성[12]",
"성유석[1]",
"이성민[11]",
"황재승[17]",
"봉민규[19]",
"유수혁[20]",
"윤덕우[14]",
"이주찬[23]",
"이준호[30]",
"장현광[26]",
"오윤제[35]",
"양현욱[25]",
"이현준[27]",
"조승우[24]",
"박현중[22]",
"신재인[6]",
"강민재[2]",
"임병현[16]",
"김성우[7]",
"이원경[13]",
"한승우[10]",
"유정윤[4]",
"허웅[33]",
"장현명[3]",
"김지호[31]",
"박지율[5]"],
["승민재[11]",
"유홍균[16]",
"강연우[1]",
"박재승[13]",
"고율[31]",
"김준식[10]",
"정온별[45]",
"최우성[27]",
"최강[25]",
"채현동[8]",
"김남휘[7]",
"손혁진[18]",
"이승준[17]",
"최예담[38]",
"이정우[15]",
"김은찬[20]",
"최강민[37]",
"김지후[32]",
"김서준[2]",
"최치현[21]",
"박현우[9]",
"김태건[4]",
"박도영[14]",
"배지환[33]",
"조희성[12]",
"박세민[5]",
"김채운[29]",
"문석준[28]",
"김태균[39]",
"이승민[34]"],
["한우주[5]",
"김승민[18]",
"이승건[21]",
"정태석[1]",
"이동윤[17]",
"신용준[11]",
"오정환[16]",
"구본의[12]",
"오재원[15]",
"김서준[20]",
"정예찬[6]",
"성재훈[7]",
"구본정[29]",
"이은석[10]",
"강기문[26]",
"오승연[19]",
"조상욱[24]",
"소재휘[14]",
"이수빈[31]",
"최용재[13]",
"배창렬[8]",
"도형우[33]",
"정송엽[23]",
"강동찬[22]",
"이승리[2]"],
["고정민[21]",
"유동욱[19]",
"이승빈[11]",
"박주한[1]",
"박다니엘[22]",
"송원영[16]",
"이승언[7]",
"조정흠[6]",
"정윤호[10]",
"주경민[8]",
"서찬호[32]",
"이원준[17]",
"이태윤[14]",
"정한울[44]",
"조우진[38]",
"한효준[31]",
"최영웅[2]",
"윤교범[25]",
"이지효[5]",
"임선엽[26]",
"구현욱[9]",
"김도윤[4]",
"김동균[20]",
"김민[9]",
"김준성[3]",
"박도영[49]",
"유희승[13]",
"이희준[24]",
"임승호[27]",
"최시현[12]",
"하늘[33]"],
["박윤수[3]",
"이희성[10]",
"정우찬[11]",
"최태경[19]",
"안을[1]",
"신유준[21]",
"이재성[17]",
"문유현[7]",
"김리완[6]",
"이태훈[18]",
"조의탐[43]",
"김재훈[27]",
"김시완[2]",
"강현수[33]",
"조연후[16]",
"유동현[8]",
"강은성[28]",
"변수용[23]",
"최준민[13]",
"박형석[36]",
"노유빈[9]",
"김병수[20]",
"고대건[37]",
"조현일[31]",
"박유환[22]",
"서재원[4]",
"노승현[24]",
"이현준[15]"],
["구본영[21]",
"최재영[11]",
"이대한[37]",
"윤예준[2]",
"강희제[3]",
"강민우[10]",
"황현성[3]",
"홍도희[27]",
"김민재[15]",
"임건희[17]",
"유희상[22]",
"신우주[33]",
"양시우[32]",
"이승민[19]",
"이준혁[26]",
"이현웅[36]",
"황지후[23]",
"강희온[20]",
"김재훈[25]",
"이정록[14]",
"윤정후[6]",
"천태혁[16]",
"심수환[25]",
"박영규[8]",
"원동권[18]",
"정건희[13]",
"김찬호[4]",
"이유찬[5]",
"엄태준[34]",
"강윤재[31]"],
["이예찬[3]",
"이순혁[33]",
"최요한[1]",
"이태성[11]",
"곽희성[2]",
"이도경[4]",
"최지후[8]",
"선한빛[7]",
"임동원[13]",
"유주현[16]",
"최주원[17]",
"김민찬[25]",
"정진우[27]",
"김찬우[18]",
"김승유[21]",
"윤원영[22]",
"박태윤[10]",
"김동현[12]",
"최현우[5]",
"김지원[23]",
"이호빈[9]",
"박주환[28]",
"이찬영[29]",
"김성훈[15]"],
["이지후[1]",
"오세건[15]",
"양우진[18]",
"김동윤[31]",
"임준원[23]",
"박상민[19]",
"이준우[21]",
"한준희[22]",
"김세원[16]",
"김윤우[10]",
"이서준[24]",
"주성재[7]",
"전재민[11]",
"신재민[39]",
"정찬서[14]",
"박상준[30]",
"김진하[20]",
"김서진[41]",
"원지우[27]",
"배종일[8]",
"박시후[4]",
"김규현[9]",
"정명훈[5]",
"최현성[6]",
"김용완[12]",
"조하울[3]",
"한태원[25]",
"최윤우[35]",
"이지우[2]",
"차윤후[29]"],
["김기범[7]",
"김시우[8]",
"이하은[3]",
"장래이[11]",
"최지훈[6]",
"김건[5]",
"김내흔[12]",
"김민재[16]",
"김재웅[23]",
"김준우[10]",
"김지운[1]",
"손우성[14]",
"이시영[25]",
"장노아[9]",
"최민영[22]",
"강지환[4]",
"김석준[29]",
"김성현[17]",
"김연우[32]",
"류하준[28]",
"문규태[15]",
"박지호[30]",
"송내을[26]",
"송찬혁[19]",
"신민석[18]",
"정선우[24]",
"한재민[31]",
"황태훈[13]"],
["김동영[32]",
"홍수호[17]",
"정성조[36]",
"강찬민[33]",
"최정원[24]",
"김유잔[23]",
"양정윤[19]",
"임동현[27]",
"강민서[31]",
"장하민[12]",
"김민준[42]",
"고은찬[14]",
"김동주[29]",
"최재혁[34]",
"이준서[44]",
"노현우[22]",
"김두호[35]",
"박준하[3]",
"김준형[16]",
"김민준[8]",
"정태양[4]",
"박도현[28]",
"김태운[46]",
"이한결[25]",
"문시훈[15]",
"전민석[38]",
"손지율[26]",
"이주환[18]",
"김경태[7]",
"정지원[21]"],
["최훈[25]",
"최권율[24]",
"최영훈[3]",
"민지환[7]",
"심은호[22]",
"유승우[15]",
"정지노[18]",
"안승영[19]",
"장지원[11]",
"김승연[20]",
"황준용[26]",
"임한성[17]"],
["정재일[1]",
"박시몬[21]",
"윤준형[19]",
"김범서[36]",
"서인우[26]",
"배제현[20]",
"김성우[32]",
"김진효[24]",
"지하람[7]",
"이호[6]",
"조수환[17]",
"박종현[16]",
"이강은[5]",
"김해인[8]",
"조환[25]",
"최준영[27]",
"정근호[9]",
"정도윤[3]",
"장태희[13]",
"박인후[23]",
"지상우[15]"],
["고두현[11]",
"문지환[17]",
"우건의[1]",
"이정우[27]",
"임지섭[15]",
"한승현[10]",
"강승규[20]",
"변지석[22]",
"송민우[18]",
"이승리[8]",
"한현강[37]",
"김건[40]",
"배정찬[12]",
"곽민준[2]",
"문현우[34]",
"장승효[4]",
"문서진[21]",
"오준석[16]",
"정우찬[3]",
"변세훈[23]",
"이석민[5]",
"최수환[13]",
"홍영록[6]",
"정민성[36]",
"나결[14]",
"이규민[9]",
"임성빈[19]",
"권형욱[32]",
"류지헌[35]",
"문석민[38]"],
["곽민정[16]",
"오해성[3]",
"임준희[11]",
"하지성[9]",
"이정우[17]",
"송인용[27]",
"전현민[26]",
"이동건[25]",
"강호진[7]",
"송지율[1]",
"유제인[2]",
"류재혁[10]",
"최대성[5]",
"박은수[13]",
"정희종[8]",
"이연창[12]",
"이하루[22]",
"장동훈[14]"],
["김진우[42]",
"강건우[47]",
"여도혁[17]",
"임충만[12]",
"남현세[15]",
"김준민[2]",
"손주홍[9]",
"정지원[51]",
"박한결[11]",
"김주헌[24]",
"윤준수[20]",
"이찬민[41]",
"양서진[10]",
"김건중[26]",
"이승용[16]",
"변성호[4]",
"김연수[7]",
"조재일[6]",
"황지호[18]",
"유현[3]",
"유민규[30]",
"김민혁[13]",
"서민영[23]",
"김동휘[29]",
"방선웅[25]",
"이준서[27]",
"정동연[1]",
"임찬영[53]",
"신지호[8]",
"임우진[21]"],
["김동후[11]",
"조동원[27]",
"김태환[19]",
"방준원[13]",
"김민성[16]",
"용유빈[18]",
"김석빈[29]",
"채승민[17]",
"안일환[6]",
"윤영서[32]",
"박찬수[3]",
"김태현[31]",
"최민혁[12]",
"이문규[21]",
"이승원[1]",
"이지호[5]",
"최주환[33]",
"김두연[26]",
"김정환[23]",
"박준형[9]",
"박시형[2]",
"이승준[20]",
"정지우[15]",
"방진영[22]",
"정민준[14]",
"송지우[10]",
"최종민[25]"],
["모건웅[20]",
"김도담[1]",
"김루하[21]",
"김시온[35]",
"송민국[7]",
"이시원[11]",
"이현우[18]",
"김주형[29]",
"이재현[16]",
"이주용[25]",
"안예찬[5]",
"이지후[41]",
"조서준[28]",
"배성준[12]",
"이도영[31]",
"이시율[2]",
"손동현[6]",
"강지호[3]",
"김승준[34]",
"김신유[13]",
"박희준[36]",
"임유빈[37]",
"조하민[42]",
"김현균[32]",
"정해윤[14]",
"임현빈[38]",
"박준성[24]",
"조하윤[9]",
"박준혁[8]",
"오태유[30]"],
["성준원[1]",
"이명재[33]",
"유태준[28]",
"김지후[21]",
"김용신[36]",
"송영웅[42]",
"이윤수[11]",
"김동혁[34]",
"박찬희[27]",
"류호산[17]",
"김채율[10]",
"김건우[39]",
"동건영[19]",
"나현서[29]",
"권대경[16]",
"오상열[26]",
"소현수[24]",
"이준권[22]",
"김민석[25]",
"최민준[43]",
"정현근[9]",
"이강민[7]",
"박재상[2]",
"안정혁[13]",
"이창목[3]",
"박도현[14]",
"백야곱[18]",
"김재원[35]",
"최진용[32]",
"박지원[15]"],
["윤도규[20]",
"김래원[51]",
"김승현[22]",
"나유빈[21]",
"황용호[28]",
"장석원[14]",
"이건우[31]",
"윤지호[5]",
"박준서[6]",
"방현식[12]",
"장복경[41]",
"이성동[16]",
"이준희[29]",
"황희민[30]",
"김도현[49]",
"김건희[50]",
"박지완[3]",
"황규민[23]",
"박민서[24]",
"오지완[15]",
"김강래[35]",
"김형준[48]",
"오현수[33]",
"박찬현[19]",
"박세원[32]",
"김준우[36]",
"윤규식[4]",
"신호준[11]",
"장은호[10]",
"유용준[38]",
"한민용[37]",
"송지호[12]"],
["박규민[13]",
"강민호[34]",
"김용현[16]",
"김휘연[11]",
"이시윤[10]",
"유승민[23]",
"최요셉[1]",
"김민후[7]",
"김시우[6]",
"박수찬[14]",
"박재원[15]",
"오민혁[25]",
"이성민[35]",
"이수안[4]",
"이정후[5]",
"임범준[18]",
"임한결[12]",
"최어진[9]",
"황진우[21]",
"김강연[28]",
"김태양[22]",
"원태연[20]",
"이가온[37]",
"이도윤[19]",
"이동우[36]",
"조광일[29]",
"지현우[24]",
"김승수[38]",
"유승협[3]",
"이승준[33]"],
["최재원[12]",
"배준석[16]",
"김상현[20]",
"김태완[21]",
"손영빈[22]",
"나건우[6]",
"한재준[7]",
"신희주[11]",
"이현서[14]",
"홍승완[13]",
"채시훈[17]",
"김병철[19]",
"박종현[10]",
"이시헌[18]",
"조규민[3]",
"장성환[15]",
"함성현[24]",
"김재일[1]",
"이재원[29]",
"공연수[9]",
"차민호[27]"],
["윤태경[13]",
"김상준[25]",
"서동균[27]",
"이태현[11]",
"안원진[20]",
"정선우[24]",
"최서원[12]",
"김기준[9]",
"김도현[7]",
"이규진[5]",
"윤현준[16]",
"김한준[30]",
"권상균[35]",
"정현우[58]"]
]

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
		document.getElementById("TeamASelectMinus-text").style.visibility = "hidden"
		document.getElementById("TeamASelectPlus-text").style.visibility = "hidden"
		document.getElementById("TeamBSelectMinus-text").style.visibility = "hidden"
		document.getElementById("TeamBSelectPlus-text").style.visibility = "hidden"
		Nextinning();
	} else {
		InningTopBottom="초";
		document.getElementById("InningTop").style.visibility = "visible"
		document.getElementById("InningBottom").style.visibility = "hidden"
		document.getElementById("Base1B").style.visibility = "visible"
		document.getElementById("Base2B").style.visibility = "visible"
		document.getElementById("Base3B").style.visibility = "visible"
		document.getElementById("TeamASelectMinus-text").style.visibility = "hidden"
		document.getElementById("TeamASelectPlus-text").style.visibility = "hidden"
		document.getElementById("TeamBSelectMinus-text").style.visibility = "hidden"
		document.getElementById("TeamBSelectPlus-text").style.visibility = "hidden"
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

//팀 선택

function ChangeTopteamMinus(){
	TeamIndexTop=TeamIndexTop - 1
	if (TeamIndexTop<0) {
		TeamIndexTop=TeamName.length-1
	}
	document.getElementById("TeamA-text").innerHTML=TeamName[TeamIndexTop]
}

function ChangeTopteamPlus(){
	TeamIndexTop=TeamIndexTop + 1
	if (TeamIndexTop>TeamName.length-1) {
		TeamIndexTop=0
	}
	document.getElementById("TeamA-text").innerHTML=TeamName[TeamIndexTop]
}

function ChangeBottomteamMinus(){
	TeamIndexBottom=TeamIndexBottom - 1
	if (TeamIndexBottom<0) {
		TeamIndexBottom=TeamName.length-1
	}
	document.getElementById("TeamB-text").innerHTML=TeamName[TeamIndexBottom]
}

function ChangeBottomteamPlus(){
	TeamIndexBottom=TeamIndexBottom + 1
	if (TeamIndexBottom>TeamName.length-1) {
		TeamIndexBottom=0
	}
	document.getElementById("TeamB-text").innerHTML=TeamName[TeamIndexBottom]
}

//현재 타자 입력

function Nextbatter(){
	if (InningTopBottom=="초") {
		CountClear()
		BatterIndexTop=BatterIndexTop+1
		if (BatterIndexTop > 9 ) {
			BatterIndexTop=1
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexTop
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopBatList[BatterIndexTop]]
	} else {
		CountClear()
		BatterIndexBottom = BatterIndexBottom+1
		if (BatterIndexBottom > 9 ) {
			BatterIndexBottom= 1;
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexBottom
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexTopBatList[BatterIndexBottom]]
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
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopBatList[BatterIndexTop]]
	} else {
		CountClear()
		BatterIndexBottom = BatterIndexBottom-1
		if (BatterIndexBottom < 1 ) {
			BatterIndexBottom= 9;
		}
		document.getElementById("BatterIndex-text").innerHTML=BatterIndexBottom
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexTopBatList[BatterIndexBottom]]
	}
}

function ChangeinningPitcher(){
	if (InningTopBottom=="초") {
		document.getElementById("PitcherName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomPitcher]
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		document.getElementById("PitcherName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopPitcher]
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}

function ChangebatterPlus(){
	if (InningTopBottom=="초") {
		PlayerIndexTopBatList[BatterIndexTop]=PlayerIndexTopBatList[BatterIndexTop]+1
		if (PlayerIndexTopBatList[BatterIndexTop] > PlayerName[TeamIndexTop].length-1 ) {
			PlayerIndexTopBatList[BatterIndexTop]=0
		}
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopBatList[BatterIndexTop]]
	} else {
		PlayerIndexBottomBatList[BatterIndexBottom]=PlayerIndexBottomBatList[BatterIndexBottom]+1
		if (PlayerIndexBottomBatList[BatterIndexBottom]> PlayerName[TeamIndexBottom].length-1 ) {
			PlayerIndexBottomBatList[BatterIndexBottom]=0
		}
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomBatList[BatterIndexBottom]]
	}
}

function ChangebatterMinus(){
	if (InningTopBottom=="초") {
		PlayerIndexTopBatList[BatterIndexTop]=PlayerIndexTopBatList[BatterIndexTop]-1
		if (PlayerIndexTopBatList[BatterIndexTop] < 0 ) {
			PlayerIndexTopBatList[BatterIndexTop]= PlayerName[TeamIndexTop].length-1
		}
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopBatList[BatterIndexTop]]
	} else {
		PlayerIndexBottomBatList[BatterIndexBottom]=PlayerIndexBottomBatList[BatterIndexBottom]-1
		if (PlayerIndexBottomBatList[BatterIndexBottom] < 0) {
			PlayerIndexBottomBatList[BatterIndexBottom]=PlayerName[TeamIndexBottom].length-1 
		}
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomBatList[BatterIndexBottom]]
	}
}

function ChangePitcherPlus(){
	if (InningTopBottom=="초") {
		PlayerIndexBottomPitcher=PlayerIndexBottomPitcher+1
		if (PlayerIndexBottomPitcher > PlayerName[TeamIndexBottom].length-1 ) {
			PlayerIndexBottomPitcher=0
		}		
		document.getElementById("PitcherName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomPitcher]
		PitchingCountTop=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		PlayerIndexTopPitcher=PlayerIndexTopPitcher+1
		if (PlayerIndexTopPitcher > PlayerName[TeamIndexTop].length-1 ) {
			PlayerIndexTopPitcher=0
		}		
		document.getElementById("PitcherName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopPitcher]
		PitchingCountBottom=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}

function ChangePitcherMinus(){
	if (InningTopBottom=="초") {
		PlayerIndexBottomPitcher=PlayerIndexBottomPitcher-1
		if (PlayerIndexBottomPitcher < 0 ) {
			PlayerIndexBottomPitcher=PlayerName[TeamIndexBottom].length-1
		}		
		document.getElementById("PitcherName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomPitcher]
		PitchingCountTop=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountTop
	} else {
		PlayerIndexTopPitcher=PlayerIndexTopPitcher-1
		if (PlayerIndexTopPitcher < 0 ) {
			PlayerIndexTopPitcher=PlayerName[TeamIndexTop].length-1 
		}		
		document.getElementById("PitcherName-text").innerHTML=PlayerName[TeamIndexTop][PlayerIndexTopPitcher]
		PitchingCountBottom=0
		document.getElementById("Pitches-text").innerHTML=PitchingCountBottom
	}
}