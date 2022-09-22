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
"모가중",
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
"영등포",
"영산중",
"오산SC",
"원당중",
"율곡중",
"인창중",
"제주제일",
"중앙중",
"청담중",
"평촌중",
"화성BC",
"회룡BC"
]

PlayerName=[
["황제인[1]",
"최의현[2]",
"박준서[3]",
"윤석현[6]",
"한예준[7]",
"장재형[9]",
"윤하민[10]",
"조의찬[11]",
"모현민[15]",
"최원석[17]",
"김찬[20]",
"김이안[21]",
"이주형[23]",
"조창민[47]",
"윤찬혁[53]"],
["하동준[1]",
"주강희[2]",
"장철[3]",
"유원석[7]",
"강준[11]",
"임종훈[12]",
"설민한[15]",
"임성표[16]",
"임종연[17]",
"임준영[21]",
"이재호[55]",
"강호민[63]"],
["전민서[1]",
"엄한민[2]",
"김상민[3]",
"김기진[4]",
"전재홍[8]",
"정해성[9]",
"김재훈[10]",
"백동비[11]",
"공은표[12]",
"최시우[13]",
"김기성[16]",
"강우현[23]"],
["오하민[1]",
"이시영[2]",
"김건우[3]",
"우성오[4]",
"성주호[5]",
"이원도[6]",
"김건우[7]",
"차준혁[8]",
"임선우[9]",
"원태호[10]",
"장예찬[11]",
"박루빈[12]",
"남민혁[13]",
"김근영[14]",
"강수찬[15]",
"정래성[16]",
"박지훈[17]",
"김도윤[19]",
"이일규[20]",
"김용환[21]",
"이우진[22]",
"서재민[23]",
"현빈[24]",
"최재이[25]",
"박규정[27]",
"김예찬[29]",
"김태연[32]",
"민경훈[35]",
"박지황[36]"],
["박민[1]",
"이영택[2]",
"김범서[3]",
"김준우[4]",
"최지웅[5]",
"방성민[6]",
"김익현[7]",
"조승현[8]",
"이도겸[9]",
"박예훈[10]",
"전석영[11]",
"김소람[12]",
"신윤도[14]",
"박성준[15]",
"박태용[16]",
"김재훈[17]",
"김성민[18]",
"김범주[19]",
"임석원[21]",
"박시훈[22]",
"최서원[25]",
"정한결[27]",
"김진완[28]",
"부건우[29]",
"김지우[31]",
"장종찬[33]",
"강한성[35]",
"신윤수[41]",
"정우빈[42]",
"이승현[47]"],
["박현규[1]",
"송민준[2]",
"민승혁[3]",
"유승수[4]",
"하예강[5]",
"박종선[7]",
"신영준[8]",
"이유건[10]",
"윤서완[11]",
"김동현[12]",
"윤유노[13]",
"윤재효[14]",
"인재훈[15]",
"유영채[17]",
"이동훈[19]",
"신지우[21]",
"김준모[22]",
"최진명[25]",
"이유현[26]",
"이주안[27]",
"김승모[29]",
"천성현[30]",
"맹근환[31]",
"정지후[33]",
"박세빈[34]",
"함지원[35]",
"김동완[37]",
"황백두[38]",
"김도현[45]"],
["송용진[2]",
"김희재[3]",
"김보현[6]",
"이광준[9]",
"정태원[10]",
"곽민준[11]",
"최은석[12]",
"고수혁[13]",
"고근태[14]",
"인용헌[15]",
"송호찬[16]",
"김하민[17]",
"함수밀[18]",
"최윤우[19]",
"원태웅[20]",
"강동훈[21]",
"박경원[23]"],
["김다민[1]",
"정윤호[3]",
"권대환[5]",
"이준우[6]",
"정민규[7]",
"이서진[9]",
"김준환[10]",
"박성준[11]",
"박민준[14]",
"이건[15]",
"송관호[16]",
"김동윤[17]",
"이근영[18]",
"이의천[19]",
"권민재[20]",
"유용재[21]",
"강민석[23]",
"김열음[24]",
"이주원[29]",
"정민재[32]",
"길은혁[34]",
"임재서[37]",
"이강현[38]",
"정윤찬[42]",
"노영진[44]",
"권혁준[45]",
"명리우[46]",
"박채환[47]",
"최승우[52]",
"김지후[53]"],
["하승민[1]",
"김지훈[2]",
"정시우[3]",
"김민서[5]",
"김윤호[6]",
"김민찬[7]",
"구본학[9]",
"권률이[11]",
"김강휘[12]",
"최수혁[13]",
"임하진[14]",
"김예찬[15]",
"강병진[16]",
"김가람[18]",
"유강빈[19]",
"김도현[20]",
"육성현[21]",
"김재완[22]",
"황재원[24]",
"유주호[29]",
"이주한[30]",
"최민석[31]",
"박시우[32]",
"김은호[36]",
"김성록[40]",
"남건욱[48]"],
["이찬우[1]",
"양준서[2]",
"박정우[3]",
"유예범[4]",
"정규혁[5]",
"주영륜[6]",
"노강민[7]",
"김찬희[8]",
"김재용[9]",
"박민준[10]",
"강준영[11]",
"황윤호[12]",
"조영민[13]",
"우승규[14]",
"장왕희[16]",
"강준혁[17]",
"이서진[18]",
"김재석[19]",
"김민혁[20]",
"이지원[21]",
"서지우[22]",
"김원준[24]",
"송채율[26]",
"김도윤[27]",
"이서율[28]",
"안준혁[29]",
"최정환[30]",
"최중경[32]",
"선도헌[33]",
"한창오[34]"],
["성유석[1]",
"강민재[2]",
"장현명[3]",
"유정윤[4]",
"박지율[5]",
"신재인[6]",
"김성우[7]",
"한승우[10]",
"이성민[11]",
"김재성[12]",
"이원경[13]",
"윤덕우[14]",
"임병현[16]",
"황재승[17]",
"김지혁[18]",
"봉민규[19]",
"유수혁[20]",
"김동진[21]",
"박현중[22]",
"이주찬[23]",
"조승우[24]",
"양현욱[25]",
"장현광[26]",
"이현준[27]",
"이준호[30]",
"김지호[31]",
"허웅[33]",
"오윤제[35]"],
["강연우[4]",
"고율[5]",
"김남휘[6]",
"김서준[7]",
"김은찬[8]",
"김준식[9]",
"김지후[10]",
"김채운[11]",
"김태건[12]",
"김태균[13]",
"김태우[14]",
"문석준[15]",
"박도영[16]",
"박세민[17]",
"박재승[18]",
"박현우[19]",
"배지환[20]",
"손혁진[21]",
"승민재[22]",
"유홍균[23]",
"이승민[24]",
"이승준[25]",
"이정우[26]",
"정온별[27]",
"조희성[28]",
"채현동[29]",
"최강[30]",
"최강민[31]",
"최예담[32]",
"최우성[33]",
"최은우[34]",
"최주헌[35]",
"최치현[36]"],
["정태석[1]",
"이승리[2]",
"한우주[5]",
"정예찬[6]",
"성재훈[7]",
"배창렬[8]",
"이은석[10]",
"신용준[11]",
"구본의[12]",
"최용재[13]",
"소재휘[14]",
"오재원[15]",
"오정환[16]",
"이동윤[17]",
"김승민[18]",
"오승연[19]",
"김서준[20]",
"이승건[21]",
"강동찬[22]",
"정송엽[23]",
"조상욱[24]",
"강기문[26]",
"구본정[29]",
"이수빈[31]",
"도형우[33]"],
["박주한[1]",
"최영웅[2]",
"김준성[3]",
"김도윤[4]",
"이지효[5]",
"조정흠[6]",
"이승언[7]",
"주경민[8]",
"구현욱[9]",
"김민[9]",
"정윤호[10]",
"이승빈[11]",
"최시현[12]",
"유희승[13]",
"이태윤[14]",
"송원영[16]",
"이원준[17]",
"유동욱[19]",
"김동균[20]",
"고정민[21]",
"박다니엘[22]",
"이희준[24]",
"윤교범[25]",
"임선엽[26]",
"임승호[27]",
"한효준[31]",
"서찬호[32]",
"하늘[33]",
"조우진[38]",
"정한울[44]",
"박도영[49]"],
["안을[1]",
"김시완[2]",
"박윤수[3]",
"서재원[4]",
"김리완[6]",
"문유현[7]",
"유동현[8]",
"노유빈[9]",
"이희성[10]",
"정우찬[11]",
"최준민[13]",
"이현준[15]",
"조연후[16]",
"이재성[17]",
"이태훈[18]",
"최태경[19]",
"김병수[20]",
"신유준[21]",
"박유환[22]",
"변수용[23]",
"노승현[24]",
"김재훈[27]",
"강은성[28]",
"조현일[31]",
"강현수[33]",
"박형석[36]",
"고대건[37]",
"조의탐[43]"],
["윤예준[2]",
"강희제[3]",
"황현성[3]",
"김찬호[4]",
"이유찬[5]",
"윤정후[6]",
"박영규[8]",
"강민우[10]",
"최재영[11]",
"정건희[13]",
"이정록[14]",
"김민재[15]",
"천태혁[16]",
"임건희[17]",
"원동권[18]",
"이승민[19]",
"강희온[20]",
"구본영[21]",
"유희상[22]",
"황지후[23]",
"김재훈[25]",
"심수환[25]",
"이준혁[26]",
"홍도희[27]",
"강윤재[31]",
"양시우[32]",
"신우주[33]",
"엄태준[34]",
"이현웅[36]",
"이대한[37]"],
["최요한[1]",
"곽희성[2]",
"이예찬[3]",
"이도경[4]",
"최현우[5]",
"선한빛[7]",
"최지후[8]",
"이호빈[9]",
"박태윤[10]",
"이태성[11]",
"김동현[12]",
"임동원[13]",
"김성훈[15]",
"유주현[16]",
"최주원[17]",
"김찬우[18]",
"김승유[21]",
"윤원영[22]",
"김지원[23]",
"김민찬[25]",
"정진우[27]",
"박주환[28]",
"이찬영[29]",
"이순혁[33]"],
["이지후[1]",
"이지우[2]",
"조하울[3]",
"박시후[4]",
"정명훈[5]",
"최현성[6]",
"주성재[7]",
"배종일[8]",
"김규현[9]",
"김윤우[10]",
"전재민[11]",
"김용완[12]",
"정찬서[14]",
"오세건[15]",
"김세원[16]",
"양우진[18]",
"박상민[19]",
"김진하[20]",
"이준우[21]",
"한준희[22]",
"임준원[23]",
"이서준[24]",
"한태원[25]",
"원지우[27]",
"차윤후[29]",
"박상준[30]",
"김동윤[31]",
"최윤우[35]",
"신재민[39]",
"김서진[41]"],
["김지운[1]",
"이하은[3]",
"강지환[4]",
"김건[5]",
"최지훈[6]",
"김기범[7]",
"김시우[8]",
"장노아[9]",
"김준우[10]",
"장래이[11]",
"김내흔[12]",
"황태훈[13]",
"손우성[14]",
"문규태[15]",
"김민재[16]",
"김성현[17]",
"신민석[18]",
"송찬혁[19]",
"최민영[22]",
"김재웅[23]",
"정선우[24]",
"이시영[25]",
"송내을[26]",
"류하준[28]",
"김석준[29]",
"박지호[30]",
"한재민[31]",
"김연우[32]"],
["박준하[3]",
"정태양[4]",
"김경태[7]",
"김민준[8]",
"장하민[12]",
"고은찬[14]",
"문시훈[15]",
"김준형[16]",
"홍수호[17]",
"이주환[18]",
"양정윤[19]",
"정지원[21]",
"노현우[22]",
"김유잔[23]",
"최정원[24]",
"이한결[25]",
"손지율[26]",
"임동현[27]",
"박도현[28]",
"김동주[29]",
"강민서[31]",
"김동영[32]",
"강찬민[33]",
"최재혁[34]",
"김두호[35]",
"정성조[36]",
"전민석[38]",
"김민준[42]",
"이준서[44]",
"김태운[46]"],
["최영훈[3]",
"민지환[7]",
"장지원[11]",
"유승우[15]",
"임한성[17]",
"정지노[18]",
"안승영[19]",
"김승연[20]",
"심은호[22]",
"최권율[24]",
"최훈[25]",
"황준용[26]"],
["정재일[1]",
"정도윤[3]",
"이강은[5]",
"이호[6]",
"지하람[7]",
"김해인[8]",
"정근호[9]",
"장태희[13]",
"지상우[15]",
"박종현[16]",
"조수환[17]",
"윤준형[19]",
"배제현[20]",
"박시몬[21]",
"박인후[23]",
"김진효[24]",
"조환[25]",
"서인우[26]",
"최준영[27]",
"김성우[32]",
"김범서[36]"],
["우건의[1]",
"곽민준[2]",
"정우찬[3]",
"장승효[4]",
"이석민[5]",
"홍영록[6]",
"이승리[8]",
"이규민[9]",
"한승현[10]",
"고두현[11]",
"배정찬[12]",
"최수환[13]",
"나결[14]",
"임지섭[15]",
"오준석[16]",
"문지환[17]",
"송민우[18]",
"임성빈[19]",
"강승규[20]",
"문서진[21]",
"변지석[22]",
"변세훈[23]",
"이정우[27]",
"권형욱[32]",
"문현우[34]",
"류지헌[35]",
"정민성[36]",
"한현강[37]",
"문석민[38]",
"김건[40]"],
["송지민[1]",
"김윤환[13]",
"조나단[12]",
"황준서[25]",
"이시우[14]",
"송이안[11]",
"김준하[17]",
"최우석[47]",
"김규성[3]",
"김동현[37]",  
"이동욱[27]",
"유도훈[13]",
"김규민[50]",
"이서윤[22]",
"송우현[8]",
"정휘진[29]",
"박예준[10]"],
["영산중[0]",
"윤재연[1]",
"김민재[3]",
"김승호[8]",
"심도윤[10]",
"김태우[11]",
"이선재[12]",
"임주찬[14]",
"김성준[15]",
"이기복[18]",
"박승주[21]",
"김권민[25]",
"김민준[29]",
"이동건[35]",
"장하성[36]",
"이동국[37]"],
["송지율[1]",
"유제인[2]",
"오해성[3]",
"최대성[5]",
"강호진[7]",
"정희종[8]",
"하지성[9]",
"류재혁[10]",
"임준희[11]",
"이연창[12]",
"박은수[13]",
"장동훈[14]",
"곽민정[16]",
"이정우[17]",
"이하루[22]",
"이동건[25]",
"전현민[26]",
"송인용[27]"],
["정동연[1]",
"김준민[2]",
"유현[3]",
"변성호[4]",
"조재일[6]",
"김연수[7]",
"신지호[8]",
"손주홍[9]",
"양서진[10]",
"박한결[11]",
"임충만[12]",
"김민혁[13]",
"남현세[15]",
"이승용[16]",
"여도혁[17]",
"황지호[18]",
"윤준수[20]",
"임우진[21]",
"서민영[23]",
"김주헌[24]",
"방선웅[25]",
"김건중[26]",
"이준서[27]",
"김동휘[29]",
"유민규[30]",
"이찬민[41]",
"김진우[42]",
"강건우[47]",
"정지원[51]",
"임찬영[53]"],
["이승원[1]",
"박시형[2]",
"박찬수[3]",
"이지호[5]",
"안일환[6]",
"박준형[9]",
"송지우[10]",
"김동후[11]",
"최민혁[12]",
"방준원[13]",
"정민준[14]",
"정지우[15]",
"김민성[16]",
"채승민[17]",
"용유빈[18]",
"김태환[19]",
"이승준[20]",
"이문규[21]",
"방진영[22]",
"김정환[23]",
"최종민[25]",
"김두연[26]",
"조동원[27]",
"김석빈[29]",
"김태현[31]",
"윤영서[32]",
"최주환[33]"],
["김도담[1]",
"이시율[2]",
"강지호[3]",
"안예찬[5]",
"손동현[6]",
"송민국[7]",
"박준혁[8]",
"조하윤[9]",
"이시원[11]",
"배성준[12]",
"김신유[13]",
"정해윤[14]",
"이재현[16]",
"이현우[18]",
"모건웅[20]",
"김루하[21]",
"박준성[24]",
"이주용[25]",
"조서준[28]",
"김주형[29]",
"오태유[30]",
"이도영[31]",
"김현균[32]",
"김승준[34]",
"김시온[35]",
"박희준[36]",
"임유빈[37]",
"임현빈[38]",
"이지후[41]",
"조하민[42]"],
["강승준[5]",
"강준서[0]",
"강태헌[0]",
"고강민[9]",
"김대승[8]",
"김준범[0]",
"김준혁[0]",
"김지혁[4]",
"김지환[2]",
"김호혁[1]",
"박윤우[0]",
"부준호[0]",
"송민혁[0]",
"안제하[3]",
"윤열음[7]",
"이성준[0]",
"이재헌[0]",
"장재혁[0]",
"주홍찬[0]",
"허민석[0]",
"허산[6]"],
["성준원[1]",
"박재상[2]",
"이창목[3]",
"이강민[7]",
"정현근[9]",
"김채율[10]",
"이윤수[11]",
"안정혁[13]",
"박도현[14]",
"박지원[15]",
"권대경[16]",
"류호산[17]",
"백야곱[18]",
"동건영[19]",
"김지후[21]",
"이준권[22]",
"소현수[24]",
"김민석[25]",
"오상열[26]",
"박찬희[27]",
"유태준[28]",
"나현서[29]",
"최진용[32]",
"이명재[33]",
"김동혁[34]",
"김재원[35]",
"김용신[36]",
"김건우[39]",
"송영웅[42]",
"최민준[43]"],
["박지완[3]",
"윤규식[4]",
"윤지호[5]",
"박준서[6]",
"장은호[10]",
"신호준[11]",
"방현식[12]",
"송지호[12]",
"장석원[14]",
"오지완[15]",
"이성동[16]",
"박찬현[19]",
"윤도규[20]",
"나유빈[21]",
"김승현[22]",
"황규민[23]",
"박민서[24]",
"황용호[28]",
"이준희[29]",
"황희민[30]",
"이건우[31]",
"박세원[32]",
"오현수[33]",
"김강래[35]",
"김준우[36]",
"한민용[37]",
"유용준[38]",
"장복경[41]",
"김형준[48]",
"김도현[49]",
"김건희[50]",
"김래원[51]"],
["최요셉[1]",
"유승협[3]",
"이수안[4]",
"이정후[5]",
"김시우[6]",
"김민후[7]",
"최어진[9]",
"이시윤[10]",
"김휘연[11]",
"임한결[12]",
"박규민[13]",
"박수찬[14]",
"박재원[15]",
"김용현[16]",
"임범준[18]",
"이도윤[19]",
"원태연[20]",
"황진우[21]",
"김태양[22]",
"유승민[23]",
"지현우[24]",
"오민혁[25]",
"김강연[28]",
"조광일[29]",
"이승준[33]",
"강민호[34]",
"이성민[35]",
"이동우[36]",
"이가온[37]",
"김승수[38]"],
["김재일[1]",
"조규민[3]",
"나건우[6]",
"한재준[7]",
"공연수[9]",
"박종현[10]",
"신희주[11]",
"최재원[12]",
"홍승완[13]",
"이현서[14]",
"장성환[15]",
"배준석[16]",
"채시훈[17]",
"이시헌[18]",
"김병철[19]",
"김상현[20]",
"김태완[21]",
"손영빈[22]",
"함성현[24]",
"차민호[27]",
"이재원[29]"],
["이규진[5]",
"김도현[7]",
"김기준[9]",
"이태현[11]",
"최서원[12]",
"윤태경[13]",
"윤현준[16]",
"안원진[20]",
"정선우[24]",
"김상준[25]",
"서동균[27]",
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
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomBatList[BatterIndexBottom]]
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
		document.getElementById("BatterName-text").innerHTML=PlayerName[TeamIndexBottom][PlayerIndexBottomBatList[BatterIndexBottom]]
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