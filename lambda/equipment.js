const Alexa = require('ask-sdk-core');
const constants = require('./constants');

const STYLE_DATA = {
6359:{motif:12,material:5741}, //Barbaric Style
6362:{motif:14,material:931}, //Daedric Style
6431:{motif:13,material:2204}, //Primal Style
6444:{motif:8,material:4338}, //Orc Style
6500:{motif:6,material:2927}, //Redguard Style
6503:{motif:11,material:3195}, //Ancient Elf Style
6511:{motif:2,material:5232}, //Dunmer Style,Dark Elf Style
6525:{motif:4,material:3222}, //Nord Style
6533:{motif:1,material:2427}, //Altmer Style,High Elf Style
6534:{motif:5,material:1685}, //Breton Style
6573:{motif:7,material:1551}, //Khajiit Style
6580:{motif:3,material:1242}, //Bosmer Style,Wood Elf Style
6610:{motif:10,material:5770}, //Imperial Style
6612:{motif:9,material:5919}, //Argonian Style
6642:{motif:17,material:1507}, //Xivkyn Style
7178:{motif:19,material:7471}, //Mercenary Style
7853:{motif:23,material:7567}, //Malacath Style
7946:{motif:33,material:8213}, //Thieves Guild Style
7949:{motif:29,material:7464}, //Soul-Shriven Style
7965:{motif:34,material:8175}, //Assassins League Style
7987:{motif:21,material:6528}, //Ancient Orc Style
8034:{motif:32,material:8094}, //Abah's Watch Style
8055:{motif:24,material:7671}, //Outlaw Style
8057:{motif:22,material:7684}, //Trinimac Style
9754:{motif:26,material:7543}, //Daggerfall Covenant Style
10417:{motif:39,material:9184}, //Minotaur Style
10730:{motif:25,material:7437}, //Aldmeri Dominion Style
11227:{motif:41,material:9943}, //Celestial Style
11691:{motif:42,material:11612}, //Hollowjack Style
11769:{motif:27,material:7356}, //Ebonheart Pact Style
11792:{motif:20,material:10503}, //Yokudan Style
11793:{motif:16,material:7487}, //Glass Style
11925:{motif:31,material:11861}, //Skinchanger Style
11965:{motif:38,material:10219}, //Draugr Style
12794:{motif:35,material:9254}, //Dro-m'Athra Style
12845:{motif:37,material:13249}, //Ebony Style
13034:{motif:36,material:9571}, //Dark Brotherhood Style
14608:{motif:28,material:12662}, //Ra Gada Style
14611:{motif:15,material:2069}, //Dwemer Style
14854:{motif:40,material:9077}, //Order Hour Style
14855:{motif:18,material:7216}, //Akaviri Style
15009:{motif:45,material:13157}, //Mazzatun Style
16064:{motif:48,material:15434}, //Ashlander Style
16667:{motif:52,material:16635}, //Redoran Style
16678:{motif:50,material:16642}, //Telvanni Style
16796:{motif:51,material:16641}, //Hlaalu Style
17134:{motif:56,material:16991}, //Apostle Style
17243:{motif:57,material:16922}, //Ebonshadow Style
17272:{motif:30,material:15400}, //Morag Tong Style
17296:{motif:54,material:16966}, //Bloodforge Style
17422:{motif:55,material:17033}, //Dreadhorn Style
17432:{motif:44,material:12161}, //Silken Ring Style
17512:{motif:47,material:15408}, //Buoyant Armiger Style
17514:{motif:60,material:17458}, //Worm Cult Style
18223:{motif:64,material:17548}, //Pyandonean Style
18449:{motif:62,material:17750}, //Sapiarch Style
18450:{motif:58,material:18028}, //Fang Lair Style
18557:{motif:59,material:17521}, //Scalecaller Style
18730:{motif:63,material:18739}, //Dremora Style
18758:{motif:67,material:18595}, //Welkynar Style
19122:{motif:69,material:18818}, //Dead-Water Style
19231:{motif:61,material:17749}, //Psijic Style
19338:{motif:66,material:19056}, //Silver Dawn Style
19363:{motif:70,material:18885}, //Elder Argonian Style
19806:{motif:65,material:18970}, //Huntsman Style
20632:{motif:72,material:20298}, //Meridian Style
20679:{motif:73,material:20178}, //Anequina Style
20683:{motif:74,material:20365}, //Pellitine Style
21093:{motif:75,material:20754}, //Sunspire Style
21125:{motif:71,material:20510}, //Coldsnap Style
21155:{motif:78,material:20877}, //Moongrave Fane Style
21163:{motif:76,material:20975}, //Dragonguard Style
21208:{motif:79,material:21034}, //Refabricated Style
21386:{motif:68,material:19939}, //Honor Guard Style
21404:{motif:77,material:21020}, //Stags of Z'en Style
21467:{motif:80,material:21349}, //Shield of Senchal Style
21502:{motif:81,material:21347}, //New Moon Priest Style
21705:{motif:84,material:21637}, //Blackreach Vanguard Style
22421:{motif:83,material:22166}, //Pyre Watch Style
22597:{motif:82,material:22104}, //Icereach Coven Style
22600:{motif:85,material:22519}, //Greymoor Style
22613:{motif:86,material:22490}, //Sea Giant Style
22936:{motif:96,material:22820}, //Arkthzand Armory Style
23107:{motif:91,material:22807}, //hazardous alchemy
23184:{motif:90,material:22760}, //thorn legion
23374:{motif:97,material:23275}, //wayward guardian
23383:{motif:95,material:23273}, //nighthollow
23483:{motif:101,material:23720}, //ivory brigade
24056:{motif:100,material:23751}, //true sworn
24242:{motif:99,material:23775}, //waking flame
24277:{motif:102,material:24150}, //sul xan
24282:{motif:103,material:24143}, //black fin legion
24652:{motif:98,material:24617}, //house hexos
24816:{motif:105,material:24514}, //crimson oath
24857:{motif:106,material:24657 }, //silver rose
25099:{motif:113,material:25342}, //steadfast society
25280:{motif:107,material:24583}, //annihilarchs chosen
25489:{motif:108,material:24548}, //fargrave guardian
80001:{motif:49,material:15439}, //Militant Ordinator Style
80002:{motif:43,material:11630}, //Grim Harlequin Style
80003:{motif:46,material:11903}, //Stalhrim Frostcaster Style,Frostcaster Style
80004:{motif:53,material:18505}, //Tsaesci Style
80010:{motif:87,material:22117}, //Ancestral Nord Style
80011:{motif:88,material:22205}, //Ancestral Orc Style
80012:{motif:89,material:22221}, //Ancestral High Elf Style
80013:{motif:94,material:22812}, //Ancestral Reach Style
19546:{motif:-1,material:-1}, //bloodspawn
19595:{motif:-1,material:-1}, //iceheart
19607:{motif:-1,material:-1}, //troll king
19717:{motif:-1,material:-1}, //ilambris
19756:{motif:-1,material:-1}, //grothdarr
19761:{motif:-1,material:-1}, //molag kena
19831:{motif:-1,material:-1}, //shadowrend
19921:{motif:-1,material:-1}, //swarm mother
19926:{motif:-1,material:-1}, //cadwell
19950:{motif:-1,material:-1}, //sellistrix
19964:{motif:-1,material:-1}, //prophet
19981:{motif:-1,material:-1}, //abnur tharn
19993:{motif:-1,material:-1}, //lyris titanborn
20006:{motif:-1,material:-1}, //engine guardian
20011:{motif:-1,material:-1}, //sai sahan
20645:{motif:-1,material:-1}, //nightflame
20655:{motif:-1,material:-1}, //lord warden
20740:{motif:-1,material:-1}, //mighty chudan
20790:{motif:-1,material:-1}, //the maelstrom
20808:{motif:-1,material:-1}, //velidreth
20829:{motif:-1,material:-1}, //chokethorn
21088:{motif:-1,material:-1}, //glenmoril wyrd
21110:{motif:-1,material:-1}, //opal engine guardian
21133:{motif:-1,material:-1}, //opal troll king
21134:{motif:-1,material:-1}, //opal ilambris
21142:{motif:-1,material:-1}, //opal bloodspawn
21147:{motif:-1,material:-1}, //pirate skeleton
21185:{motif:-1,material:-1}, //skaal explorer
21221:{motif:-1,material:-1}, //legion zero
21345:{motif:-1,material:-1}, //valkyn skoria
21360:{motif:-1,material:-1}, //knight of the circle
21437:{motif:-1,material:-1}, //slimecraw
21456:{motif:-1,material:-1}, //jephrine paladin
21494:{motif:-1,material:-1}, //stormfist
21808:{motif:-1,material:-1}, //balorgh
22375:{motif:-1,material:-1}, //second legion
22382:{motif:-1,material:-1}, //scourge harvester
22425:{motif:-1,material:-1}, //snowhawk mage
22439:{motif:-1,material:-1}, //domihaus
22488:{motif:-1,material:-1}, //nerien'eths
22578:{motif:-1,material:-1}, //legion zero vigiles
22603:{motif:-1,material:-1}, //sovngarde stalwart
22617:{motif:-1,material:-1}, //earthgore
22718:{motif:-1,material:-1}, //maw of the infernal
22987:{motif:-1,material:-1}, //tremorscale
22993:{motif:-1,material:-1}, //opal nightflame
23001:{motif:-1,material:-1}, //opal iceheart
23003:{motif:-1,material:-1}, //opal swarm mother
23028:{motif:-1,material:-1}, //opal lord warden
23059:{motif:-1,material:-1}, //kragh
23140:{motif:-1,material:-1}, //sentinel of rkugamz
23152:{motif:-1,material:-1}, //ebonsteel knight
23239:{motif:-1,material:-1}, //doctrine ordinator
23291:{motif:-1,material:-1}, //infernal guardian
23316:{motif:-1,material:-1}, //regal regalia
23329:{motif:-1,material:-1}, //symphony of blades
23373:{motif:-1,material:-1}, //stonekeeper
23981:{motif:-1,material:-1}, //vykosa
23996:{motif:-1,material:-1}, //zaan
24001:{motif:-1,material:-1}, //nibenese court wizard
24046:{motif:-1,material:-1}, //jazennji siir
24055:{motif:-1,material:-1}, //selene
24268:{motif:-1,material:-1}, //thurvokun
24278:{motif:-1,material:-1}, //maarselok
24359:{motif:-1,material:-1}, //grundwulf
24723:{motif:-1,material:-1}, //opal chokethorn
24736:{motif:-1,material:-1}, //mother ciannait
24763:{motif:-1,material:-1}, //nord carved
24785:{motif:-1,material:-1}, //baron zaudrus
24833:{motif:-1,material:-1}, //black drake clanwrap
25004:{motif:-1,material:-1}, //second seed
25016:{motif:-1,material:-1}, //saberkeel
25039:{motif:-1,material:-1}, //prior thierric
25488:{motif:-1,material:-1}, //lady thorn
25511:{motif:-1,material:-1}, //high rock spellsword
80014:{motif:-1,material:-1}, //tools of domination
80015:{motif:-1,material:-1}, //grave dancer
};

const TRAIT_DATA = {
0:{gems:[2046,null,null]}, //powered
1:{gems:[5160,null,null]}, //charged
2:{gems:[707,null,null]}, //precise
3:{gems:[3043,5764,17989]}, //infused
4:{gems:[622,null,null]}, //defending
5:{gems:[883,2740,null]}, //training
6:{gems:[302,null,null]}, //sharpened
7:{gems:[2009,null,null]}, //decisive
8:{gems:[null,4279,null]}, //sturdy
9:{gems:[null,713,null]}, //impenetrable
10:{gems:[null,4778,null]}, //reinforced
11:{gems:[null,1547,null]}, //well fitted
12:{gems:[null,4915,null]}, //invigorating
13:{gems:[null,5444,null]}, //divines
14:{gems:[3790,688,null]}, //nirnhorned
15:{gems:[-1,-1,-1]}, //intricate
16:{gems:[-1,-1,-1]}, //ornate
17:{gems:[null,null,17883]}, //arcane
18:{gems:[null,null,17965]}, //healthy
19:{gems:[null,null,17919]}, //robust
//20 ?
21:{gems:[null,null,17868]}, //bloodthirsty
22:{gems:[null,null,17854]}, //harmony
23:{gems:[null,null,17910]}, //protective
24:{gems:[null,null,18092]}, //swift
25:{gems:[null,null,18099]}, //triune
26:{isCompanion:true}, //aggressive
27:{isCompanion:true}, //augmented
28:{isCompanion:true}, //bolstered
29:{isCompanion:true}, //focused
30:{isCompanion:true}, //prolific
31:{isCompanion:true}, //quickened
32:{isCompanion:true}, //shattering
33:{isCompanion:true}, //soothing
34:{isCompanion:true}, //vigorous
};

const SET_DATA = {
	1:{category:0,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"dragonstar arena"},
	2:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"dragonstar arena"},
	3:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"maelstrom arena",DLC:3},
	4:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"maelstrom arena",DLC:3},
	5:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"dragonstar arena"},
	6:{category:0,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"maelstrom arena",DLC:3},
	7:{category:0,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"dragonstar arena"},
	8:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	9:{category:0,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"maelstrom arena",DLC:3},
	10:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"dragonstar arena"},
	11:{category:0,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"dragonstar arena"},
	12:{category:0,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"maelstrom arena",DLC:3},
	13:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	14:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"maelstrom arena",DLC:3},
	15:{category:0,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"maelstrom arena",DLC:3},
	16:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	17:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	18:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	19:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	20:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	21:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	22:{category:0,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"maelstrom arena",DLC:3},
	23:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"maelstrom arena",DLC:3},
	24:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"dragonstar arena"},
	25:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	26:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"maelstrom arena",DLC:3},
	27:{category:0,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"dragonstar arena"},
	28:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	29:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"dragonstar arena"},
	30:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"maelstrom arena",DLC:3},
	31:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"dragonstar arena"},
	32:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	33:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"blackrose prison",DLC:12},
	34:{category:0,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"maelstrom arena",DLC:3},
	35:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"summerset",DLC:10,traits:3},
	36:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"alik'r desert, eastmarch, malabal tor",traits:5},
	37:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"southern elsweyr",DLC:16,traits:6},
	38:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"imperial city",DLC:4,traits:9},
	39:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"deshaan, grahtwood, stormhaven",traits:3},
	40:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"auridon, glenumbra, stonefalls",traits:2},
	41:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"vvardenfell",DLC:6,traits:3},
	42:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"hew's bane",DLC:1,traits:7},
	43:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"northern elsweyr",DLC:14,traits:8},
	44:{category:1,equip:31,bonus:[[],[],[{amt:424,category:"cr"}],[{"amt":1206,"category":"h"}],[{"amt":424,"category":"cr"}],[{"category":"x"}]],location:"cyrodiil",traits:3},
	45:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"vvardenfell",DLC:6,traits:8},
	46:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"mr"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"southern elsweyr",DLC:16,traits:3},
	47:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cyrodiil",traits:3},
	48:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"auridon, glenumbra, stonefalls",traits:2},
	49:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"western skyrim",DLC:18,traits:7},
	50:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"hew's bane",DLC:1,traits:9},
	51:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"eyevea",traits:8},
	52:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"clockwork city",DLC:8,traits:4},
	53:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"s"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"murkmire",DLC:12,traits:7},
	54:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1096,"category":"s"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"greenshade, rivenspire, shadowfen",traits:4},
	55:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"bangkorai, reaper's march, the rift",traits:6},
	56:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"},{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"clockwork city",DLC:8,traits:2},
	57:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"the earth forge",traits:8},
	58:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"gold coast",DLC:2,traits:5},
	59:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"wrothgar",DLC:3,traits:6},
	60:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"greenshade, rivenspire, shadowfen",traits:4},
	61:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"clockwork city",DLC:8,traits:6},
	62:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"murkmire",DLC:12,traits:4},
	63:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"wrothgar",DLC:3,traits:9},
	64:{category:1,equip:31,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":4,"category":"hd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"murkmire",DLC:12,traits:2},
	65:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"southern elsweyr",DLC:16,traits:9},
	66:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"bangkorai, reaper's march, the rift",traits:6},
	67:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"auridon, glenumbra, stonefalls",traits:2},
	68:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"imperial city",DLC:4,traits:5},
	69:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"summerset",DLC:10,traits:9},
	70:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"coldharbour",traits:8},
	71:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"hr"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"the earth forge",traits:8},
	72:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"gold coast",DLC:2,traits:9},
	73:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"imperial city",DLC:4,traits:7},
	74:{category:1,equip:31,bonus:[[],[],[{amt:4,category:"hd"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"northern elsweyr",traits:5},
	75:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"vvardenfell",DLC:6,traits:6},
	76:{category:1,equip:31,bonus:[[],[],[{amt:841,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":841,"category":"h"}],[{"category":"x"}]],location:"eyevea",traits:8},
	77:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"artaeum",DLC:10,traits:6},
	78:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"alik'r desert, eastmarch, malabal tor",traits:5},
	79:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1096,"category":"m"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"coldharbour",traits:8},
	80:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"blackreach: greymoor caverns",DLC:18,traits:3},
	81:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"western skyrim",DLC:18,traits:5},
	82:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"hew's bane",DLC:1,traits:5},
	83:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"deshaan, grahtwood, stormhaven",traits:3},
	84:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"wrothgar",DLC:3,traits:3},
	85:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"craglorn",traits:9},
	86:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"deshaan, grahtwood, stormhaven",traits:3},
	87:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil",traits:3},
	88:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"s"},{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"alik'r desert, eastmarch, malabal tor",traits:5},
	89:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"gold coast",DLC:2,traits:7},
	90:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"northern elsweyr",DLC:14,traits:3},
	91:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"craglorn",traits:8},
	92:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":129,"category":"hr"}],[{"category":"x"}]],location:"greenshade, rivenspire, shadowfen",traits:4},
	93:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"hr"}],[{"category":"x"}]],location:"bangkorai, reaper's march, the rift",traits:6},
	94:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"unhallowed grave",DLC:17},
	95:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"ruins of mazzatun",DLC:5},
	96:{category:2,equip:28,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"darkshade caverns i, darkshade caverns ii"},
	97:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"ruins of mazzatun",DLC:5},
	98:{category:2,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"depths of malatar",DLC:13},
	99:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"lair of maarselok",DLC:15},
	100:{category:2,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"icereach",DLC:17},
	101:{category:2,equip:26,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"sr"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"elden hollow i, elden hollow ii"},
	102:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"march of sacrifices",DLC:11},
	103:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"bloodroot forge",DLC:7},
	104:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"blackheart haven"},
	105:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"white-gold tower",DLC:4},
	106:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"city of ash i, city of ash ii"},
	107:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"fang lair",DLC:9},
	108:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"wayrest sewers i, wayrest sewers ii"},
	109:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"volenfell"},
	110:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"scalecaller peak",DLC:9},
	111:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"lair of maarselok",DLC:15},
	112:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"direfrost keep"},
	113:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"falkreath hold",DLC:7},
	114:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1487,"category":"op"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"unhallowed grave",DLC:17},
	115:{category:2,equip:28,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"fungal grotto i, fungal grotto ii"},
	116:{category:2,equip:26,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"moongrave fane",DLC:15},
	117:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"volenfell"},
	118:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"hr"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"selene's web"},
	119:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"crypt of hearts i, crypt of hearts ii"},
	120:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"city of ash i, city of ash ii"},
	121:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"white-gold tower",DLC:4},
	122:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"bloodroot forge",DLC:7},
	123:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"depths of malatar",DLC:13},
	124:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cradle of shadows",DLC:5},
	125:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"unhallowed grave",DLC:17},
	126:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"hr"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"bloodroot forge",DLC:7},
	127:{category:2,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"cradle of shadows",DLC:5},
	128:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"march of sacrifices",DLC:11},
	129:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"march of sacrifices",DLC:11},
	130:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"ruins of mazzatun",DLC:5},
	131:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"selene's web"},
	132:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"mr"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"icereach",DLC:17},
	133:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"moongrave fane",DLC:15},
	134:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"frostvault",DLC:13},
	135:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"falkreath hold",DLC:7},
	136:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"the banished cells i, the banished cells ii"},
	137:{category:2,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"moon hunter keep",DLC:11},
	138:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"tempest island"},
	139:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"mr"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"scalecaller peak",DLC:9},
	140:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"blackheart haven"},
	141:{category:2,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"spindleclutch i, spindleclutch ii"},
	142:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"arx corinium"},
	143:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"imperial city prison",DLC:4},
	144:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"crypt of hearts i, crypt of hearts ii"},
	145:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"elden hollow i, elden hollow ii"},
	146:{category:2,equip:25,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"direfrost keep"},
	147:{category:2,equip:28,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"arx corinium"},
	148:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"sr"},{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"frostvault",DLC:13},
	149:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"moon hunter keep",DLC:11},
	150:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"darkshade caverns i, darkshade caverns ii"},
	151:{category:2,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"blessed crucible"},
	152:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"blessed crucible"},
	153:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"vaults of madness"},
	154:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"tempest island"},
	155:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"falkreath hold",DLC:7},
	156:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1206,"category":"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"scalecaller peak",DLC:9},
	157:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"spindleclutch i, spindleclutch ii"},
	158:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"vaults of madness"},
	159:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"moongrave fane",DLC:15},
	160:{category:2,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"the banished cells i, the banished cells ii"},
	161:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"moon hunter keep",DLC:11},
	162:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"imperial city prison",DLC:4},
	163:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"depths of malatar",DLC:13},
	164:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"hr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"wayrest sewers i, wayrest sewers ii"},
	165:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial city prison",DLC:4},
	166:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"crypt of hearts i, crypt of hearts ii"},
	167:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"white-gold tower",DLC:4},
	168:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"spindleclutch i, spindleclutch ii"},
	169:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"fungal grotto i, fungal grotto ii"},
	170:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"tempest island"},
	171:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"darkshade caverns i, darkshade caverns ii"},
	172:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"city of ash i, city of ash ii"},
	173:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"blessed crucible"},
	174:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"direfrost keep"},
	175:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"vaults of madness"},
	176:{category:2,equip:26,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"icereach",DLC:17},
	177:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"wayrest sewers i, wayrest sewers ii"},
	178:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"the banished cells i, the banished cells ii"},
	179:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"fang lair",DLC:9},
	180:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"volenfell"},
	181:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"frostvault",DLC:13},
	182:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"mr"},{"amt":129,"category":"sr"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"fang lair",DLC:9},
	183:{category:2,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"elden hollow i, elden hollow ii"},
	184:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"arx corinium"},
	185:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"blackheart haven"},
	186:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"selene's web"},
	187:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"fungal grotto i, fungal grotto ii"},
	188:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"cradle of shadows",DLC:5},
	189:{category:2,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"lair of maarselok",DLC:15},
	190:{category:3,equip:7,bonus:[[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"march of sacrifices",DLC:11},
	191:{category:3,equip:7,bonus:[[],[{amt:129,category:"sr"}],[{"category":"x"}]],location:"spindleclutch ii"},
	192:{category:3,equip:7,bonus:[[],[{amt:129,category:"mr"}],[{"category":"x"}]],location:"elden hollow i"},
	193:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"},{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"falkreath hold",DLC:7},
	194:{category:3,equip:7,bonus:[[],[{amt:4,category:"hd"}],[{"category":"x"}]],location:"bloodroot forge",DLC:7},
	195:{category:3,equip:7,bonus:[[],[{amt:129,category:"hr"}],[{"category":"x"}]],location:"darkshade caverns ii"},
	196:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"vaults of madness"},
	197:{category:3,equip:7,bonus:[[],[{amt:657,category:"cc"}],[{"category":"x"}]],location:"moongrave fane",DLC:15},
	198:{category:3,equip:7,bonus:[[],[{amt:657,category:"cc"}],[{"category":"x"}]],location:"direfrost keep"},
	199:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"crypt of hearts i"},
	200:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"city of ash i"},
	201:{category:3,equip:7,bonus:[[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"unhallowed grave",DLC:17},
	202:{category:3,equip:7,bonus:[[],[{amt:1487,category:"op"}],[{"category":"x"}]],location:"fungal grotto i"},
	203:{category:3,equip:7,bonus:[[],[{amt:1487,category:"a"}],[{"category":"x"}]],location:"imperial city prison",DLC:4},
	204:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"}],[{"category":"x"}]],location:"lair of maarselok",DLC:15},
	205:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"the banished cells ii"},
	206:{category:3,equip:7,bonus:[[],[{amt:1487,category:"a"}],[{"category":"x"}]],location:"ruins of mazzatun",DLC:5},
	207:{category:3,equip:7,bonus:[[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"white-gold tower",DLC:4},
	208:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"icereach",DLC:17},
	209:{category:3,equip:7,bonus:[[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"crypt of hearts ii"},
	210:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"elden hollow ii"},
	211:{category:3,equip:7,bonus:[[],[{amt:1487,category:"a"}],[{"category":"x"}]],location:"blackheart haven"},
	212:{category:3,equip:7,bonus:[[],[{amt:1206,category:"h"}],[{"category":"x"}]],location:"wayrest sewers ii"},
	213:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"}],[{"category":"x"}]],location:"selene's web"},
	214:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"}],[{"category":"x"}]],location:"arx corinium"},
	215:{category:3,equip:7,bonus:[[],[{amt:4,category:"hd"}],[{"category":"x"}]],location:"darkshade caverns i"},
	216:{category:3,equip:7,bonus:[[],[{amt:129,category:"mr"}],[{"category":"x"}]],location:"the banished cells i"},
	217:{category:3,equip:7,bonus:[[],[{amt:771,category:"cc"}],[{"category":"x"}]],location:"wayrest sewers i"},
	218:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"}],[{"category":"x"}]],location:"fungal grotto ii"},
	219:{category:3,equip:7,bonus:[[],[{amt:548,category:"s"},{"amt":548,"category":"m"},{"amt":603,"category":"h"}],[{"category":"x"}]],location:"frostvault",DLC:13},
	220:{category:3,equip:7,bonus:[[],[{amt:129,category:"sr"}],[{"category":"x"}]],location:"tempest island"},
	221:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"},{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"spindleclutch i"},
	222:{category:3,equip:7,bonus:[[],[{amt:4,category:"hd"}],[{"category":"x"}]],location:"depths of malatar",DLC:13},
	223:{category:3,equip:7,bonus:[[],[{amt:4,category:"hd"}],[{"category":"x"}]],location:"blessed crucible"},
	224:{category:3,equip:7,bonus:[[],[{amt:1206,category:"h"}],[{"category":"x"}]],location:"fang lair",DLC:9},
	225:{category:3,equip:7,bonus:[[],[{amt:1096,category:"s"}],[{"category":"x"}]],location:"volenfell"},
	226:{category:3,equip:7,bonus:[[],[{amt:1487,category:"op"}],[{"category":"x"}]],location:"city of ash ii"},
	227:{category:3,equip:7,bonus:[[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cradle of shadows",DLC:5},
	228:{category:3,equip:7,bonus:[[],[{amt:4,category:"ht"}],[{"category":"x"}]],location:"moon hunter keep",DLC:11},
	229:{category:3,equip:7,bonus:[[],[{amt:657,category:"cc"}],[{"category":"x"}]],location:"scalecaller peak",DLC:9},
	230:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":4,"category":"ht"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"eastmarch"},
	231:{category:4,equip:31,bonus:[[],[{amt:1454,category:"h"}],[{"amt":1454,"category":"m"}],[{"category":"x"}]],location:"bal foyen, betnikh, bleakrock isle, khenarthi's roost, stros m'kai"},
	232:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"auridon"},
	233:{category:4,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"s"},{"amt":40,"category":"re"}],[{"category":"x"}]],location:"hew's bane",DLC:1},
	234:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"greenshade"},
	235:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"glenumbra"},
	236:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"wrothgar",DLC:3},
	237:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"blackrose prison, murkmire",DLC:12},
	238:{category:4,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"northern elsweyr",DLC:14},
	239:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"blackrose prison, murkmire",DLC:12},
	240:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"northern elsweyr",DLC:14},
	241:{category:4,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"rivenspire"},
	242:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"blackrose prison, murkmire",DLC:12},
	243:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"vvardenfell",DLC:6},
	244:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"southern elsweyr",DLC:16},
	245:{category:4,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"the rift"},
	246:{category:4,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"stormhaven"},
	247:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"hr"}],[{"category":"x"}]],location:"western skyrim",DLC:18},
	248:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"eastmarch"},
	249:{category:4,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"gold coast",DLC:2},
	250:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"summerset",DLC:10},
	251:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"hr"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"grahtwood"},
	252:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"summerset",DLC:10},
	253:{category:4,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"shadowfen"},
	254:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"gold coast",DLC:2},
	255:{category:4,equip:26,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"glenumbra"},
	256:{category:4,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"asylum sanctorium, clockwork city",DLC:8},
	257:{category:4,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"asylum sanctorium, clockwork city",DLC:8},
	258:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"southern elsweyr",DLC:16},
	259:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"wrothgar",DLC:3},
	260:{category:4,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":129,"category":"sr"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"coldharbour"},
	261:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"deshaan"},
	262:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"rivenspire"},
	263:{category:4,equip:30,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"deshaan"},
	264:{category:4,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":2,"category":"rs"},{"amt":27,"category":"rc"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"stormhaven"},
	265:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"alik'r desert"},
	266:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"deshaan"},
	267:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"coldharbour"},
	268:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"auridon"},
	269:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":657,"category":"cc"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"grahtwood"},
	270:{category:4,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"shadowfen"},
	271:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"alik'r desert"},
	272:{category:4,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"malabal tor"},
	273:{category:4,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"southern elsweyr",DLC:16},
	274:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":657,"category":"cc"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"reaper's march"},
	275:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"hr"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"bangkorai"},
	276:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"greenshade"},
	277:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"stonefalls"},
	278:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"stonefalls"},
	279:{category:4,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"stonefalls"},
	280:{category:4,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"gold coast",DLC:2},
	281:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"reaper's march"},
	282:{category:4,equip:28,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"reaper's march"},
	283:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"malabal tor"},
	284:{category:4,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"bangkorai"},
	285:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"eastmarch"},
	286:{category:4,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"stormhaven"},
	287:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"coldharbour"},
	288:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"shadowfen"},
	289:{category:4,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"alik'r desert"},
	290:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"grahtwood"},
	291:{category:4,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"},{"amt":20,"category":"rg"}],[{"category":"x"}]],location:"hew's bane",DLC:1},
	292:{category:4,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"malabal tor"},
	293:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"wrothgar",DLC:3},
	294:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"auridon"},
	295:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1487,"category":"op"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"asylum sanctorium, clockwork city",DLC:8},
	296:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"rivenspire"},
	297:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"bangkorai"},
	298:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"western skyrim",DLC:18},
	299:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"sr"}],[{"amt":2,"category":"rs"},{"amt":10,"category":"rc"}],[{"category":"x"}]],location:"northern elsweyr",DLC:14},
	300:{category:4,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"vvardenfell",DLC:6},
	301:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"vvardenfell",DLC:6},
	302:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"sr"}],[{"amt":2,"category":"is"}],[{"category":"x"}]],location:"craglorn"},
	303:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"craglorn"},
	304:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"craglorn"},
	305:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"sr"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"greenshade"},
	306:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"western skyrim",DLC:18},
	307:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"summerset",DLC:10},
	308:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"the rift"},
	309:{category:4,equip:28,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"glenumbra"},
	310:{category:4,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"the rift"},
	311:{category:5,equip:28,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"cyrodiil"},
	312:{category:5,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"cyrodiil"},
	313:{category:5,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"cyrodiil"},
	314:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":3,"category":"rp"}],[{"category":"x"}]],location:"cyrodiil"},
	315:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"cyrodiil"},
	316:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"sr"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"cyrodiil"},
	317:{category:5,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"cyrodiil"},
	318:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	319:{category:5,equip:24,bonus:[[],[],[{amt:3,category:"rp"}],[{"category":"x"}]],location:"cyrodiil"},
	320:{category:5,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1487,"category":"a"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"cyrodiil"},
	321:{category:5,equip:26,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"battlegrounds"},
	322:{category:5,equip:28,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1206,"category":"h"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"cyrodiil"},
	323:{category:5,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"cyrodiil"},
	324:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	325:{category:5,equip:25,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cyrodiil"},
	326:{category:5,equip:24,bonus:[[],[],[{amt:657,category:"cc"}],[{"category":"x"}]],location:"cyrodiil"},
	327:{category:5,equip:28,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	328:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"cyrodiil"},
	329:{category:5,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	330:{category:5,equip:24,bonus:[[],[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"cyrodiil"},
	331:{category:5,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	332:{category:5,equip:31,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	333:{category:5,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"battlegrounds",DLC:6},
	334:{category:5,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"cyrodiil"},
	335:{category:5,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"battlegrounds"},
	336:{category:5,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cyrodiil"},
	337:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"cyrodiil"},
	338:{category:5,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cyrodiil"},
	339:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	340:{category:5,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	341:{category:5,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	342:{category:5,equip:26,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	343:{category:5,equip:28,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1206,"category":"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	344:{category:5,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	345:{category:5,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"mr"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cyrodiil"},
	346:{category:5,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"mr"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cyrodiil"},
	347:{category:5,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cyrodiil"},
	348:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"cyrodiil"},
	349:{category:5,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	350:{category:5,equip:26,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":3,"category":"rp"}],[{"category":"x"}]],location:"cyrodiil"},
	351:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	352:{category:5,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	353:{category:5,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"cyrodiil"},
	354:{category:5,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cyrodiil"},
	355:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"cyrodiil"},
	356:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	357:{category:5,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"imperial sewers",DLC:4},
	358:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"battlegrounds"},
	359:{category:5,equip:24,bonus:[[],[],[{amt:1206,category:"h"}],[{"category":"x"}]],location:"cyrodiil"},
	360:{category:5,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"imperial city",DLC:4},
	361:{category:5,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cyrodiil"},
	362:{category:5,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"cyrodiil"},
	363:{category:5,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	364:{category:5,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"battlegrounds, vvardenfell"},
	365:{category:5,equip:24,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"cyrodiil"},
	366:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	367:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	368:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"halls of fabrication",DLC:6},
	369:{category:6,equip:28,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"hel ra citadel"},
	370:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	371:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	372:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	373:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	374:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	375:{category:6,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"aetherian archive"},
	376:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	377:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	378:{category:6,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"hel ra citadel"},
	379:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	380:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	381:{category:6,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":5,"category":"ma"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"aetherian archive, hel ra citadel, sanctum ophidia"},
	382:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	383:{category:6,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	384:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":1096,"category":"m"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"aetherian archive"},
	385:{category:6,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1206,"category":"h"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"sanctum ophidia"},
	386:{category:6,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"aetherian archive, hel ra citadel, sanctum ophidia"},
	387:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"halls of fabrication",DLC:6},
	388:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	389:{category:6,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":5,"category":"ma"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"maw of lorkhaj",DLC:1},
	390:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	391:{category:6,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"halls of fabrication",DLC:6},
	392:{category:6,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"maw of lorkhaj",DLC:1},
	393:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	394:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	395:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"hd"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	396:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	397:{category:6,equip:25,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	398:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	399:{category:6,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":5,"category":"ma"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	400:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	401:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	402:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	403:{category:6,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	404:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	405:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	406:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	407:{category:6,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"hel ra citadel"},
	408:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"aetherian archive"},
	409:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"maw of lorkhaj",DLC:1},
	410:{category:6,equip:25,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	411:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	412:{category:6,equip:8,bonus:[[],[],[{category:"x"}]],location:"asylum sanctorium",DLC:8},
	413:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"sunspire",DLC:14},
	414:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"sanctum ophidia"},
	415:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"maw of lorkhaj",DLC:1},
	416:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"cloudrest",DLC:10},
	417:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"aetherian archive, hel ra citadel, sanctum ophidia"},
	418:{category:6,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":5,"category":"ma"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	419:{category:6,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"halls of fabrication",DLC:6},
	420:{category:6,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"sanctum ophidia"},
	421:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"kyne's aegis",DLC:18},
	422:{category:7,equip:4,bonus:[[],[{category:"x"}]],location:"",DLC:18},
	423:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:18},
	424:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:18},
	425:{category:7,equip:2,bonus:[[],[{category:"x"}]],location:"",DLC:18},
	426:{category:7,equip:1,bonus:[[],[{category:"x"}]],location:"",DLC:18},
	427:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:18},
	428:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"stone garden",DLC:19},
	429:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":4,"category":"ht"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"castle thorn",DLC:19},
	430:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":657,"category":"cc"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"stone garden",DLC:19},
	431:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"stone garden",DLC:19},
	432:{category:3,equip:7,bonus:[[],[{amt:1206,category:"h"}],[{"category":"x"}]],location:"castle thorn",DLC:19},
	433:{category:3,equip:7,bonus:[[],[{amt:657,category:"cc"}],[{"category":"x"}]],location:"stone garden",DLC:19},
	434:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"castle thorn",DLC:19},
	435:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"castle thorn",DLC:19},
	436:{category:1,equip:31,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"the reach",DLC:20,traits:9},
	437:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	438:{category:0,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"vateshran hollows",DLC:20},
	439:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	440:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	441:{category:0,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"vateshran hollows",DLC:20},
	442:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"the reach",DLC:20,traits:6},
	443:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:20},
	444:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	445:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	446:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	447:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	448:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	449:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	450:{category:0,equip:26,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"vateshran hollows",DLC:20},
	451:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	452:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"the reach",DLC:20},
	453:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"the reach",DLC:20,traits:3},
	454:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:20},
	455:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	456:{category:4,equip:25,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"the reach",DLC:20},
	457:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"the reach",DLC:20},
	458:{category:0,equip:8,bonus:[[],[],[{category:"x"}]],location:"vateshran hollows",DLC:20},
	459:{category:3,equip:7,bonus:[[],[{amt:548,category:"s"},{"amt":548,"category":"m"},{"amt":603,"category":"h"}],[{"category":"x"}]],location:"the cauldron",DLC:21},
	460:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"the cauldron",DLC:21},
	461:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"black drake villa",DLC:21},
	462:{category:3,equip:7,bonus:[[],[{amt:1096,category:"m"}],[{"category":"x"}]],location:"black drake villa",DLC:21},
	463:{category:2,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1487,"category":"a"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"the cauldron",DLC:21},
	464:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"black drake villa",DLC:21},
	465:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"black drake villa",DLC:21},
	466:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"the cauldron",DLC:21},
	467:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	468:{category:4,equip:28,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"blackwood",DLC:22},
	469:{category:4,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"blackwood",DLC:22},
	470:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:22},
	471:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"blackwood",DLC:22,traits:5},
	472:{category:4,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"blackwood",DLC:22},
	473:{category:7,equip:4,bonus:[[],[{category:"x"}]],location:"",DLC:22},
	474:{category:7,equip:2,bonus:[[],[{category:"x"}]],location:"",DLC:22},
	475:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"blackwood",DLC:22,traits:7},
	476:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"hr"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"blackwood",DLC:22,traits:3},
	477:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	478:{category:6,equip:28,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	479:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	480:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	481:{category:6,equip:28,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	482:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"",DLC:22},
	483:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":5,"category":"ma"}],[{"amt":129,"category":"mr"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	484:{category:6,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"rockgrove",DLC:22},
	485:{category:2,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"the dread cellar"},
	486:{category:2,equip:26,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"red petal bastion"},
	487:{category:3,equip:7,bonus:[[],[{amt:129,category:"mr"},{"amt":129,"category":"sr"}],[{"category":"x"}]],location:"the dread cellar"},
	488:{category:3,equip:7,bonus:[[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"red petal bastion"},
	489:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"the dread cellar"},
	490:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"the dread cellar"},
	491:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"red petal bastion"},
	492:{category:2,equip:25,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"red petal bastion"},
	493:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"deadlands"},
	494:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"deadlands",traits:7},
	495:{category:4,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"deadlands"},
	496:{category:4,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"deadlands"},
	497:{category:1,equip:31,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1206,"category":"h"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"deadlands",traits:5},
	498:{category:4,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":129,"category":"sr"}],[{"amt":1487,"category":"a"}],[{"category":"x"}]],location:"deadlands"},
	499:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"deadlands"},
	500:{category:7,equip:1,bonus:[[],[{category:"x"}]],location:"deadlands"},
	501:{category:1,equip:31,bonus:[[],[],[{amt:129,category:"mr"}],[{"amt":129,"category":"sr"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"deadlands",traits:3},
	502:{category:2,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"hr"}],[{"category":"x"}]],location:"coral aerie"},
	503:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1487,"category":"op"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"coral aerie"},
	504:{category:3,equip:7,bonus:[[],[{amt:731,category:"m"},{"amt":731,"category":"s"}],[{"category":"x"}]],location:"coral aerie"},
	505:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":4,"category":"hd"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"coral aerie"},
	506:{category:3,equip:7,bonus:[[],[{amt:1206,category:"h"}],[{"category":"x"}]],location:"shipwright's regret"},
	507:{category:2,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":1096,"category":"s"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"shipwright's regret"},
	508:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:"shipwright's regret"},
	509:{category:2,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"s"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"shipwright's regret"},
	510:{category:4,equip:29,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":129,"category":"mr"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"high isle and amenos"},
	511:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"dreadsail reef"},
	512:{category:7,equip:4,bonus:[[],[{category:"x"}]],location:"high isle and amenos"},
	513:{category:1,equip:31,bonus:[[],[{amt:1206,category:"h"}],[{"amt":1096,"category":"m"}],[{"amt":1096,"category":"s"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"high isle and amenos",traits:7},
	514:{category:7,equip:2,bonus:[[],[{category:"x"}]],location:"high isle and amenos"},
	515:{category:7,equip:1,bonus:[[],[{category:"x"}]],location:"high isle and amenos"},
	516:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"high isle and amenos"},
	517:{category:1,equip:31,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"high isle and amenos",traits:3},
	518:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"dreadsail reef"},
	519:{category:6,equip:26,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"dreadsail reef"},
	520:{category:6,equip:28,bonus:[[],[],[{amt:1206,category:"h"}],[{"amt":5,"category":"ma"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:"dreadsail reef"},
	521:{category:6,equip:25,bonus:[[],[],[{amt:4,category:"hd"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"dreadsail reef"},
	522:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"dreadsail reef"},
	523:{category:6,equip:25,bonus:[[],[],[{amt:4,category:"hd"}],[{"amt":5,"category":"ma"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"dreadsail reef"},
	524:{category:7,equip:16,bonus:[[],[{category:"x"}]],location:"high isle and amenos"},
	525:{category:1,equip:31,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"high isle and amenos",traits:5},
	526:{category:4,equip:30,bonus:[[],[],[{amt:129,category:"sr"}],[{"amt":1096,"category":"s"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"high isle and amenos"},
	527:{category:4,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1206,"category":"h"}],[{"amt":1096,"category":"s"}],[{"category":"x"}]],location:"high isle and amenos"},
	528:{category:6,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":5,"category":"ms"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"category":"x"}]],location:"dreadsail reef"},
	529:{category:3,equip:7,bonus:[[],[{amt:1487,category:"op"}],[{"category":"x"}]],location:"earthen root enclave"},
	530:{category:2,equip:28,bonus:[[],[],[{amt:1096,category:"s"}],[{"amt":1096,"category":"m"}],[{"amt":1206,"category":"h"}],[{"category":"x"}]],location:"earthen root enclave"},
	531:{category:3,equip:7,bonus:[[],[{amt:129,category:"sr"}],[{"category":"x"}]],location:"graven deep"},
	532:{category:2,equip:25,bonus:[[],[],[{amt:657,category:"cc"}],[{"amt":129,"category":"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"graven deep"},
	533:{category:5,equip:25,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":424,"category":"cr"}],[{"amt":1487,"category":"op"}],[{"category":"x"}]],location:""},
	534:{category:5,equip:28,bonus:[[],[],[{amt:1487,category:"a"}],[{"amt":424,"category":"cr"}],[{"amt":4,"category":"ht"}],[{"category":"x"}]],location:""},
	535:{category:5,equip:26,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":424,"category":"cr"}],[{"amt":129,"category":"sr"}],[{"category":"x"}]],location:""},
	536:{category:2,equip:28,bonus:[[],[],[{amt:4,category:"ht"}],[{"amt":1487,"category":"a"}],[{"amt":129,"category":"hr"}],[{"category":"x"}]],location:"graven deep"},
	537:{category:2,equip:26,bonus:[[],[],[{amt:129,category:"wd"},{"amt":129,"category":"sd"}],[{"amt":657,"category":"cc"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"graven deep"},
	538:{category:2,equip:26,bonus:[[],[],[{amt:1487,category:"op"}],[{"amt":1487,"category":"op"}],[{"amt":657,"category":"cc"}],[{"category":"x"}]],location:"earthen root enclave"},
	539:{category:2,equip:25,bonus:[[],[],[{amt:1096,category:"m"}],[{"amt":4,"category":"hd"}],[{"amt":1096,"category":"m"}],[{"category":"x"}]],location:"earthen root enclave"},
}

// set SET_DLC not translated
const SET_DLC = ["","thieves guild","dark brotherhood","orsinium","imperial city","shadows of the hist","morrowind","horns of the reach","clockwork city","dragon bones","summerset","wolfhunter","murkmire","wrathstone","elsweyr","scalebreaker","dragonhold","harrowstorm","greymoor","stonethorn","markarth","flames of ambition","blackwood"];

const BONUS_CODES = ['','a','h','m','s','hr','mr','sr','sc','sd','sp','wd','wc','ht','hd','pp','cr','ma','ms','re','rg','rp','rs','rc','is','op','cc'];

function getSetIdsForBonuses(bonusIds) {
    let setIdsForBonuses = [];
    for (const [setId, setData] of Object.entries(SET_DATA)) {
        let foundBonuses = [];
        for (var i = 0; i < setData.bonus.length; i++) {
            for (var j = 0; j < setData.bonus[i].length; j++) {
                let loopBonusId = BONUS_CODES.indexOf(setData.bonus[i][j].category);
                if (loopBonusId > -1 && bonusIds.indexOf(loopBonusId) > -1 && foundBonuses.indexOf(loopBonusId) === -1) {
                    foundBonuses.push(loopBonusId);
                }
            }
        }
        if (foundBonuses.length === bonusIds.length) {
            setIdsForBonuses.push(setId);
        }
    }
    return setIdsForBonuses;
}

const StyleIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StyleIntent';
    },
    handle(handlerInput) {
        const styleSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'style');
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_STYLE')});
        if (styleSlot && styleSlot.value) {
            let styleId = constants.GET_ID(styleSlot);
            if (styleId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_STYLE'),entry:styleSlot.value});
            } else {
                let styleData = STYLE_DATA[styleId];
                if (styleData.motif > 0) {
                    let styleMat = handlerInput.t('STYLE_MAT_'+styleData.material);
                    speechText = handlerInput.t('STYLE_RESULT_MOTIF',{style:styleSlot.value,styleMat:styleMat,motif:styleData.motif});
                } else {
                    speechText = handlerInput.t('STYLE_RESULT_PAGE',{style:styleSlot.value});
                }
            }
        }
        return constants.FINISH(handlerInput, speechText);
    }
};
const TraitIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TraitIntent';
    },
    handle(handlerInput) {
        const traitSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'trait');
        let conjunction = handlerInput.t('CONJUNCTION_MSG');
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_TRAIT')});
        if (traitSlot && traitSlot.value) {
            let traitId = constants.GET_ID(traitSlot);
            if (traitId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_TRAIT'),entry:traitSlot.value});
            } else if (TRAIT_DATA[traitId].isCompanion) {
                let effect = handlerInput.t('TRAIT_EFFECT_'+traitId);
                speechText = handlerInput.t('TRAIT_COMPANION_RESULT',{trait:traitSlot.value,effect:effect});
            } else {
                let gems = TRAIT_DATA[traitId].gems;
                let categoryTextArray = [];
                for (var categoryLoop = 0; categoryLoop < 3; categoryLoop++) {
                    if (gems[categoryLoop] !== null) {
                        let effect = handlerInput.t('TRAIT_EFFECT_'+traitId+'_'+categoryLoop);
                        let traitCategory = handlerInput.t('TRAIT_CATEGORY_'+categoryLoop);
                        let categoryText = (gems[categoryLoop] === -1) ? handlerInput.t('TRAIT_CATEGORY_NO_GEM_RESULT',{category:traitCategory,effect:effect}) : handlerInput.t('TRAIT_CATEGORY_RESULT',{gem:handlerInput.t('TRAIT_MAT_'+gems[categoryLoop]),category:traitCategory,effect:effect});
                        categoryTextArray.push(categoryText);
                    }
                }
                speechText = handlerInput.t('TRAIT_RESULT',{trait:traitSlot.value,categoryText:categoryTextArray.join(' ' + conjunction + ' ')});
            }
        }
        return constants.FINISH(handlerInput, speechText);
    }
};
const SetIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'SetIntent' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'FullSetIntent');
    },
    handle(handlerInput) {
        const setSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'set');
        let conjunction = handlerInput.t('CONJUNCTION_MSG');
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_SET')});
        if (setSlot && setSlot.value) {
            let setId = constants.GET_ID(setSlot);
            if (setId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_SET'),entry:setSlot.value});
            } else {
                let setData = SET_DATA[setId];
                const RESULT_KEY = (Alexa.getIntentName(handlerInput.requestEnvelope) === 'FullSetIntent') ? 'FULL_SET_RESULT' : 'SET_RESULT';
                let category = handlerInput.t('SET_CATEGORY_'+setData.category);
                let equip = handlerInput.t('SET_EQUIP_'+setData.equip);
                let bonuses = [];
                let fullBonusArray = [];
                for (var i = 0; i < setData.bonus.length; i++) {
                    if (setData.bonus[i].length > 0) {
                        let fullBonusPrefix = (i === 1) ? handlerInput.t('SET_ITEM') : handlerInput.t('SET_ITEMS',{count:i});
                        let fullBonusTextArray = [];
                        for (var j = 0; j < setData.bonus[i].length; j++) {
                            let bonusCode = setData.bonus[i][j].category.toUpperCase();
                            if (bonusCode === 'X') {
                                fullBonusTextArray.push(handlerInput.t('SET_BONUS_DETAIL_'+setId+'_'+i));
                            } else {
                                if (bonuses.indexOf(bonusCode) === -1) {
                                    bonuses.push(bonusCode);
                                }
                                fullBonusTextArray.push(handlerInput.t('SET_BONUS_'+bonusCode,{amt:setData.bonus[i][j].amt}));
                            }
                        }
                        fullBonusArray.push(fullBonusPrefix + fullBonusTextArray.join(' ' + conjunction + ' '));
                    }
                }
                let bonus = constants.EXPAND_ARRAY(handlerInput,bonuses,["SET_BONUS"]).replace(/{amt}/g,'').replace(/%/g,'');
                let fullBonus = fullBonusArray.join(' ' + conjunction + ' ');
                let extraArray = [];
                if (setData.location) {
                    extraArray.push(handlerInput.t('CATEGORY_LOCATION') + " " + setData.location);
                }
                if (setData.style) {
                    extraArray.push(handlerInput.t('CATEGORY_STYLE') + " " + handlerInput.t('STYLE_' + setData.style));
                }
                if (setData.DLC) {
                    extraArray.push(handlerInput.t('CATEGORY_DLC') + " " + SET_DLC[setData.DLC]);
                }
                let extra = extraArray.length > 0 ? ", " + handlerInput.t('QUALIFIER_MSG') + " " + extraArray.join(' ' + conjunction + ' ') : "";
                speechText = handlerInput.t(RESULT_KEY,{set:setSlot.value,category:category,equip:equip,bonus:bonus,fullBonus:fullBonus,extra:extra});
            }
        }
        return constants.FINISH(handlerInput, speechText);
    }
};
const SetBonusIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SetBonusIntent';
    },
    handle(handlerInput) {
        let speechText = '';
        let conjunction = handlerInput.t('CONJUNCTION_MSG');
        let bonusSlots = [];
        const bonus1Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'bonus_one');
        if (bonus1Slot && bonus1Slot.value) {
            bonusSlots.push(bonus1Slot);
        }
        const bonus2Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'bonus_two');
        if (bonus2Slot && bonus2Slot.value) {
            bonusSlots.push(bonus2Slot);
        }
        const bonus3Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'bonus_three');
        if (bonus3Slot && bonus3Slot.value) {
            bonusSlots.push(bonus3Slot);
        }
        let bonusIds = [];
        let bonusValues = [];
        let not_found_bonuses = [];
        for (var i = 0; i < bonusSlots.length; i++) {
            let bonusId = constants.GET_ID(bonusSlots[i]);
            let bonusValue = bonusSlots[i].value;
            bonusIds.push(bonusId);
            bonusValues.push(bonusValue);
            if (bonusId === -1) {
                not_found_bonuses.push(bonusValue);
            }
        }
        if (bonusSlots.length === 0) {
            speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_BONUS')});
        } else if (not_found_bonuses.length === 0) {
            let setIdsForBonuses = getSetIdsForBonuses(bonusIds);
            if (setIdsForBonuses.length === 0) {
                speechText = (bonusSlots.length === 1) ?
                    handlerInput.t('SETS_FOR_BONUS_NOT_FOUND',{bonus:bonusValues[0]}) :
                    handlerInput.t('SETS_FOR_BONUSES_NOT_FOUND',{bonuses:bonusValues.join(', ' + conjunction + ' ')});
            } else {
                speechText = handlerInput.t('SET_BONUS_RESULT', {bonuses:bonusValues.join(', ' + conjunction + ' '),sets:constants.EXPAND_ARRAY(handlerInput,setIdsForBonuses,["SET"])});
            }
        } else {
            speechText = (not_found_bonuses.length === 1) ?
                handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_BONUS'),entry:not_found_bonuses[0]}) :
                handlerInput.t('CATEGORY_ENTRY_NOT_FOUND_PLURAL',{category:handlerInput.t('CATEGORY_BONUSES'),entry:not_found_bonuses.join(', ' + conjunction + ' ')});
        }
        return constants.FINISH(handlerInput, speechText);
    }
};

module.exports = {
    TraitIntentHandler: TraitIntentHandler,
    StyleIntentHandler: StyleIntentHandler,
    SetIntentHandler: SetIntentHandler,
    SetBonusIntentHandler: SetBonusIntentHandler
}