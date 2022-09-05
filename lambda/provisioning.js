const Alexa = require('ask-sdk-core');
const constants = require('./constants');

const RECIPE_DATA={
23:{imp:1,qual:1,lvl:1,category:11,sr:68,item:[3627],dur:35},
27:{imp:5,qual:3,lvl:1050,category:15,hr:378,mr:347,sr:347,item:[3585,2541,3627,5661],dur:120},
43:{imp:2,qual:2,lvl:25,category:13,hr:236,sr:216,item:[4497,4078,2484],dur:60},
67:{imp:1,qual:1,lvl:1,category:2,m:680,item:[5906],dur:35},
103:{imp:5,qual:1,lvl:1010,category:2,m:4536,item:[6109,253],dur:35},
107:{imp:1,qual:2,lvl:10,category:5,h:1381,s:1264,item:[4878,4622],dur:60},
156:{imp:4,qual:1,lvl:40,category:3,s:3704,item:[1710,3922],dur:35},
170:{imp:1,qual:1,lvl:10,category:2,m:1436,item:[5543,3922],dur:35},
183:{imp:6,qual:2,lvl:1100,category:6,m:4635,s:4635,item:[995,3629,253],dur:60},
190:{imp:1,qual:1,lvl:1,category:10,mr:68,item:[3994],dur:35},
198:{imp:6,qual:1,lvl:1100,category:10,mr:567,item:[3994,1297],dur:35},
203:{imp:6,qual:2,lvl:1100,category:6,m:4635,s:4635,item:[5543,4622,3860],dur:60},
246:{imp:3,qual:1,lvl:35,category:10,mr:332,item:[2030,2215],dur:35},
247:{imp:2,qual:2,lvl:20,category:14,mr:186,sr:186,item:[5104,4078,2484],dur:60},
269:{imp:1,qual:2,lvl:15,category:4,h:1710,m:1565,item:[4878,6109],dur:60},
272:{imp:4,qual:1,lvl:40,category:3,s:3704,item:[4244,2835],dur:35},
285:{imp:3,qual:2,lvl:35,category:5,h:3026,s:2769,item:[4878,4244,253],dur:60},
304:{imp:5,qual:3,lvl:1050,category:15,hr:378,mr:347,sr:347,item:[4936,2541,5905,5661],dur:120},
319:{imp:1,qual:1,lvl:5,category:11,sr:105,item:[4078],dur:35},
332:{imp:2,qual:2,lvl:25,category:4,h:2368,m:2167,item:[2649,1260,3860],dur:60},
339:{imp:3,qual:1,lvl:35,category:9,hr:363,item:[5473,1297],dur:35},
345:{imp:1,qual:1,lvl:15,category:9,hr:198,item:[3585,2626],dur:35},
371:{imp:2,qual:1,lvl:25,category:2,m:2570,item:[1260,2835],dur:35},
372:{imp:5,qual:2,lvl:1050,category:12,hr:454,mr:415,item:[4497,2541,5820],dur:60},
380:{imp:4,qual:1,lvl:45,category:9,hr:446,item:[4497,2215],dur:35},
393:{imp:3,qual:1,lvl:35,category:10,mr:332,item:[2541,2626],dur:35},
403:{imp:1,qual:1,lvl:5,category:3,s:1058,item:[1710],dur:35},
412:{imp:3,qual:2,lvl:30,category:14,mr:246,sr:246,item:[3994,3675,2626],dur:60},
434:{imp:4,qual:1,lvl:40,category:10,mr:370,item:[2197,5820],dur:35},
439:{imp:5,qual:2,lvl:1050,category:13,hr:454,sr:415,item:[5327,3627,2215],dur:60},
445:{imp:3,qual:2,lvl:30,category:4,h:2697,m:2468,item:[3751,995,2835],dur:60},
462:{imp:2,qual:1,lvl:25,category:9,hr:280,item:[5473,4847],dur:35},
487:{imp:5,qual:2,lvl:1050,category:4,h:4540,m:4153,item:[4878,995,2835],dur:60},
499:{imp:2,qual:1,lvl:20,category:10,mr:219,item:[1934,1297],dur:35},
502:{imp:3,qual:1,lvl:30,category:3,s:2948,item:[3192,2835],dur:35},
507:{imp:2,qual:2,lvl:20,category:6,m:1866,s:1866,item:[1260,4622,572],dur:60},
509:{imp:6,qual:2,lvl:1100,category:13,hr:506,sr:463,item:[3585,4697,5820],dur:60},
536:{imp:1,qual:2,lvl:15,category:4,h:1710,m:1565,item:[2649,5906],dur:60},
543:{imp:3,qual:1,lvl:35,category:11,sr:332,item:[3675,2484],dur:35},
556:{imp:4,qual:1,lvl:45,category:11,sr:408,item:[3675,2626],dur:35},
569:{imp:4,qual:1,lvl:45,category:10,mr:408,item:[2030,2626],dur:35},
573:{imp:5,qual:2,lvl:1050,category:5,h:4540,s:4153,item:[3751,4622,253],dur:60},
600:{imp:6,qual:3,lvl:1100,category:7,h:4200,m:3864,s:3864,item:[1427,995,4622,4548],dur:120},
617:{imp:6,qual:1,lvl:1100,category:1,h:6195,item:[1427,2835],dur:35},
618:{imp:4,qual:2,lvl:40,category:12,hr:335,mr:307,item:[3327,2030,2215],dur:60},
619:{imp:4,qual:2,lvl:40,category:13,hr:335,sr:307,item:[4936,3675,4847],dur:60},
620:{imp:5,qual:1,lvl:1010,category:1,h:4956,item:[1427,572],dur:35},
635:{imp:1,qual:2,lvl:15,category:13,hr:171,sr:156,item:[4936,3675],dur:60},
653:{imp:2,qual:2,lvl:20,category:4,h:2039,m:1866,item:[5624,3965,2835],dur:60},
665:{imp:5,qual:1,lvl:1050,category:3,s:5065,item:[1710,572],dur:35},
672:{imp:6,qual:1,lvl:1100,category:2,m:5670,item:[3965,253],dur:35},
673:{imp:6,qual:2,lvl:1100,category:5,h:5066,s:4635,item:[3751,1710,2835],dur:60},
682:{imp:6,qual:1,lvl:1100,category:11,sr:567,item:[4697,2626],dur:35},
686:{imp:5,qual:1,lvl:1010,category:11,sr:453,item:[3627,2484],dur:35},
692:{imp:2,qual:2,lvl:25,category:14,mr:216,sr:216,item:[3994,5905,2626],dur:60},
731:{imp:5,qual:1,lvl:1050,category:3,s:5065,item:[4622,253],dur:35},
736:{imp:1,qual:1,lvl:5,category:2,m:1058,item:[5543],dur:35},
745:{imp:5,qual:3,lvl:1010,category:15,hr:341,mr:313,sr:313,item:[4936,5104,4697,5661],dur:120},
753:{imp:2,qual:1,lvl:20,category:2,m:2192,item:[1260,572],dur:35},
755:{imp:2,qual:3,lvl:20,category:15,hr:178,mr:164,sr:164,item:[4497,2030,5905,5661],dur:120},
762:{imp:4,qual:1,lvl:45,category:11,sr:408,item:[4078,2484],dur:35},
786:{imp:4,qual:2,lvl:45,category:4,h:3684,m:3371,item:[3751,5543,572],dur:60},
802:{imp:1,qual:1,lvl:5,category:11,sr:105,item:[4697],dur:35},
806:{imp:4,qual:1,lvl:40,category:10,mr:370,item:[1934,2484],dur:35},
818:{imp:6,qual:2,lvl:1100,category:13,hr:506,sr:463,item:[4936,5914,2626],dur:60},
820:{imp:2,qual:1,lvl:25,category:2,m:2570,item:[5906,253],dur:35},
826:{imp:1,qual:1,lvl:10,category:1,h:1569,item:[5624,572],dur:35},
834:{imp:5,qual:1,lvl:1050,category:10,mr:506,item:[5104,5820],dur:35},
835:{imp:4,qual:3,lvl:45,category:15,hr:309,mr:284,sr:284,item:[3327,1934,5914,5661],dur:120},
837:{imp:1,qual:1,lvl:10,category:3,s:1436,item:[4622,3860],dur:35},
853:{imp:2,qual:1,lvl:25,category:11,sr:257,item:[3675,2215],dur:35},
856:{imp:2,qual:1,lvl:20,category:10,mr:219,item:[2197,2215],dur:35},
860:{imp:3,qual:2,lvl:30,category:14,mr:246,sr:246,item:[2030,4697,1297],dur:60},
892:{imp:2,qual:2,lvl:25,category:14,mr:216,sr:216,item:[1934,4697,2215],dur:60},
893:{imp:1,qual:1,lvl:15,category:3,s:1814,item:[3629,3922],dur:35},
894:{imp:5,qual:1,lvl:1050,category:11,sr:506,item:[4078,1297],dur:35},
921:{imp:2,qual:2,lvl:25,category:4,h:2368,m:2167,s:2167,item:[4878,5906,2835],dur:60},
927:{imp:3,qual:2,lvl:30,category:12,hr:269,mr:246,item:[3585,5104,4847],dur:60},
929:{imp:3,qual:3,lvl:35,category:15,hr:257,mr:236,sr:236,item:[5327,2030,3675,5661],dur:120},
952:{imp:2,qual:2,lvl:20,category:5,h:2039,s:1866,item:[1427,2129,4643],dur:60},
960:{imp:5,qual:2,lvl:1010,category:6,m:3732,s:3732,item:[6109,1710,2835],dur:60},
985:{imp:6,qual:2,lvl:1100,category:4,h:5066,m:4635,item:[1427,3965,3860],dur:60},
991:{imp:2,qual:2,lvl:20,category:6,m:1866,s:1866,item:[6109,4244,3860],dur:60},
1007:{imp:3,qual:1,lvl:30,category:2,m:2948,item:[3965,572],dur:35},
1013:{imp:4,qual:3,lvl:40,category:7,h:2835,m:2608,s:2608,item:[5624,3965,1710,4548],dur:120},
1035:{imp:5,qual:3,lvl:1010,category:15,hr:341,mr:313,sr:313,item:[4497,2030,4078,5661],dur:120},
1037:{imp:3,qual:1,lvl:35,category:1,h:3634,item:[5624,3922],dur:35},
1038:{imp:2,qual:1,lvl:25,category:10,mr:257,item:[5104,2626],dur:35},
1052:{imp:2,qual:2,lvl:25,category:12,hr:236,mr:216,item:[3327,2197,5820],dur:60},
1070:{imp:6,qual:1,lvl:1100,category:9,hr:619,item:[4497,4847],dur:35},
1078:{imp:1,qual:2,lvl:15,category:4,h:1710,m:1565,item:[5624,3965],dur:60},
1090:{imp:4,qual:2,lvl:45,category:6,m:3371,s:3371,item:[5906,4244,253],dur:60},
1099:{imp:1,qual:1,lvl:1,category:11,sr:68,item:[5905],dur:35},
1129:{imp:5,qual:1,lvl:1050,category:9,hr:553,item:[5327,2215],dur:35},
1133:{imp:1,qual:1,lvl:15,category:11,sr:181,item:[4697,2484],dur:35},
1138:{imp:5,qual:2,lvl:1010,category:14,mr:373,sr:373,item:[2030,4078,4847],dur:60},
1143:{imp:5,qual:2,lvl:1050,category:13,hr:454,sr:415,item:[4936,4078,1297],dur:60},
1152:{imp:4,qual:2,lvl:40,category:12,hr:335,mr:307,item:[4497,3994,2484],dur:60},
1209:{imp:5,qual:2,lvl:1010,category:4,h:4079,m:3732,item:[4878,3965,3922],dur:60},
1222:{imp:5,qual:3,lvl:1010,category:15,hr:341,mr:313,sr:313,item:[3585,2541,4697,5661],dur:120},
1225:{imp:4,qual:1,lvl:40,category:1,h:4047,item:[1427,2835],dur:35},
1239:{imp:4,qual:3,lvl:40,category:7,h:2835,m:2608,s:2608,item:[2649,5906,2129,4548],dur:120},
1245:{imp:1,qual:1,lvl:15,category:9,hr:198,item:[5327,5820],dur:35},
1309:{imp:5,qual:1,lvl:1010,category:9,hr:495,item:[5473,5820],dur:35},
1338:{imp:1,qual:1,lvl:10,category:3,s:1436,item:[3192,3922],dur:35},
1347:{imp:4,qual:2,lvl:45,category:12,hr:368,mr:337,item:[4497,5104,4847],dur:60},
1353:{imp:1,qual:1,lvl:10,category:1,h:1569,item:[3751,3860],dur:35},
1382:{imp:2,qual:2,lvl:20,category:12,hr:203,mr:186,item:[3585,1934,2215],dur:60},
1397:{imp:2,qual:2,lvl:25,category:14,mr:216,sr:216,item:[2541,3675,1297],dur:60},
1405:{imp:5,qual:1,lvl:1050,category:9,hr:553,item:[4936,2484],dur:35},
1417:{imp:4,qual:1,lvl:45,category:9,hr:446,item:[5327],dur:35},
1435:{imp:4,qual:1,lvl:45,category:2,m:4082,item:[6109,4643],dur:35},
1466:{imp:6,qual:1,lvl:1150,category:11,sr:604,item:[5905,1297],dur:35},
1482:{imp:1,qual:2,lvl:10,category:5,h:1381,s:1264,item:[2649,2129],dur:60},
1503:{imp:2,qual:1,lvl:20,category:1,h:2395,item:[3751,2835],dur:35},
1523:{imp:2,qual:2,lvl:25,category:12,hr:236,mr:216,item:[5473,5104,2215],dur:60},
1563:{imp:5,qual:3,lvl:1010,category:7,h:3412,m:3139,s:3139,item:[2426,995,3192,4548],dur:120},
1572:{imp:1,qual:1,lvl:1,category:9,hr:74,item:[5473],dur:35},
1597:{imp:1,qual:1,lvl:15,category:10,mr:181,item:[3994,5820],dur:35},
1612:{imp:4,qual:2,lvl:45,category:13,hr:368,sr:337,item:[5327,3627,5820],dur:60},
1632:{imp:2,qual:1,lvl:25,category:3,s:2570,item:[2129,253],dur:35},
1644:{imp:2,qual:2,lvl:20,category:6,m:1866,s:1866,item:[995,3192,253],dur:60},
1647:{imp:3,qual:2,lvl:35,category:4,h:3026,m:2769,item:[2649,995,253],dur:60},
1669:{imp:5,qual:2,lvl:1050,category:13,hr:454,sr:415,item:[5473,4697,2484],dur:60},
1683:{imp:5,qual:2,lvl:1010,category:14,mr:373,sr:373,item:[2541,5914,2626],dur:60},
1688:{imp:4,qual:3,lvl:45,category:7,h:3097,m:2849,s:2849,item:[3751,3965,4622,4548],dur:120},
1693:{imp:6,qual:2,lvl:1100,category:14,mr:463,sr:463,item:[2030,5905,2484],dur:60},
1696:{imp:1,qual:1,lvl:10,category:9,hr:156,item:[4936,2215],dur:35},
1700:{imp:5,qual:1,lvl:1010,category:3,s:4536,item:[1710,3860],dur:35},
1705:{imp:6,qual:1,lvl:1100,category:3,s:5670,item:[2129,2835],dur:35},
1708:{imp:3,qual:1,lvl:30,category:1,h:3221,item:[3751,4643],dur:35},
1732:{imp:4,qual:3,lvl:45,category:15,hr:309,mr:284,sr:284,item:[5327,3994,5905,5661],dur:120},
1750:{imp:1,qual:1,lvl:10,category:3,s:1436,item:[1710,253],dur:35},
1752:{imp:4,qual:1,lvl:45,category:2,m:4082,item:[5906,2835],dur:35},
1753:{imp:5,qual:2,lvl:1010,category:13,hr:407,sr:373,item:[5327,4697,2484],dur:60},
1759:{imp:4,qual:2,lvl:40,category:4,h:3355,m:3070,item:[2649,3965,572],dur:60},
1767:{imp:4,qual:2,lvl:45,category:12,hr:368,mr:337,item:[3585,2197,2215],dur:60},
1776:{imp:1,qual:1,lvl:15,category:1,h:1982,item:[2426,4643],dur:35},
1794:{imp:5,qual:3,lvl:1010,category:7,h:3412,m:3139,s:3139,item:[1427,5906,4622,4548],dur:120},
1796:{imp:4,qual:2,lvl:45,category:12,hr:368,mr:337,item:[4936,1934,2484],dur:60},
1802:{imp:3,qual:2,lvl:35,category:12,hr:302,mr:276,item:[4497,1934,5820],dur:60},
1803:{imp:4,qual:2,lvl:45,category:4,h:3684,m:3371,item:[4878,995,3860],dur:60},
1830:{imp:1,qual:1,lvl:5,category:2,m:1058,item:[1260],dur:35},
1835:{imp:3,qual:1,lvl:35,category:11,sr:332,item:[4697,5820],dur:35},
1846:{imp:3,qual:2,lvl:30,category:14,mr:246,sr:246,item:[2541,5914,4847],dur:60},
1853:{imp:4,qual:1,lvl:40,category:1,h:4047,item:[5624,253],dur:35},
1854:{imp:3,qual:2,lvl:30,category:5,h:2697,s:2468,item:[1427,3192,4643],dur:60},
1864:{imp:5,qual:2,lvl:1010,category:5,h:4079,s:3732,item:[2426,2129,572],dur:60},
1870:{imp:3,qual:1,lvl:30,category:2,m:2948,item:[5543,4643],dur:35},
1911:{imp:3,qual:1,lvl:35,category:11,sr:332,item:[4078,2626],dur:35},
1921:{imp:3,qual:3,lvl:35,category:7,h:2572,m:2366,s:2366,item:[1427,5543,4244,4548],dur:120},
1944:{imp:4,qual:1,lvl:45,category:2,m:4082,item:[1260,3922],dur:35},
1948:{imp:3,qual:2,lvl:35,category:4,h:3026,m:2769,item:[3751,3965,3860],dur:60},
1982:{imp:5,qual:1,lvl:1010,category:1,h:4956,item:[2649,4643],dur:35},
1984:{imp:1,qual:2,lvl:10,category:13,hr:138,sr:126,item:[3327,5905],dur:60},
1989:{imp:5,qual:2,lvl:1050,category:6,m:4153,s:4153,item:[1260,3629,3922],dur:60},
1993:{imp:6,qual:2,lvl:1150,category:6,m:4936,s:4936,item:[5543,4622,3922],dur:60},
2012:{imp:2,qual:3,lvl:20,category:7,h:1785,m:1642,s:1642,item:[1427,5906,4244,4548],dur:120},
2017:{imp:3,qual:1,lvl:35,category:3,s:3326,item:[2129,4643],dur:35},
2018:{imp:3,qual:1,lvl:35,category:2,m:3326,item:[6109,2835],dur:35},
2021:{imp:5,qual:3,lvl:1050,category:15,hr:378,mr:347,sr:347,item:[3327,2197,3675,5661],dur:120},
2032:{imp:2,qual:1,lvl:25,category:11,sr:257,item:[4697,1297],dur:35},
2043:{imp:1,qual:1,lvl:10,category:9,hr:156,item:[5327,2626],dur:35},
2051:{imp:2,qual:1,lvl:25,category:10,mr:257,item:[2541,2484],dur:35},
2053:{imp:4,qual:1,lvl:40,category:9,hr:404,item:[4497,2626],dur:35},
2058:{imp:5,qual:3,lvl:1050,category:15,hr:378,mr:347,sr:347,item:[5473,3994,4078,5661],dur:120},
2078:{imp:1,qual:2,lvl:15,category:14,mr:156,sr:156,item:[2197,4697],dur:60},
2091:{imp:2,qual:2,lvl:20,category:5,h:2039,s:1866,item:[2426,3629,2835],dur:60},
2092:{imp:2,qual:1,lvl:20,category:3,s:2192,item:[2129,3922],dur:35},
2098:{imp:6,qual:1,lvl:1100,category:11,sr:567,item:[5905,4847],dur:35},
2121:{imp:1,qual:2,lvl:10,category:5,h:1381,s:1264,item:[5624,4244],dur:60},
2122:{imp:1,qual:1,lvl:1,category:2,m:680,item:[3965],dur:35},
2139:{imp:6,qual:3,lvl:1100,category:15,hr:420,mr:386,sr:386,item:[5473,3994,3675,5661],dur:120},
2148:{imp:3,qual:2,lvl:30,category:12,hr:269,mr:246,item:[3327,1934,2215],dur:60},
2152:{imp:2,qual:1,lvl:25,category:1,h:2808,item:[4878,572],dur:35},
2181:{imp:3,qual:1,lvl:30,category:11,sr:294,item:[3627,2626],dur:35},
2183:{imp:4,qual:1,lvl:45,category:3,s:4082,item:[4622,572],dur:35},
2186:{imp:2,qual:2,lvl:25,category:5,h:2368,s:2167,item:[3751,3192,3922],dur:60},
2191:{imp:5,qual:2,lvl:1050,category:14,mr:415,sr:415,item:[1934,5905,5820],dur:60},
2194:{imp:2,qual:1,lvl:25,category:11,sr:257,item:[4078,4847],dur:35},
2209:{imp:6,qual:1,lvl:1100,category:1,h:6195,item:[4878,4643],dur:35},
2213:{imp:2,qual:2,lvl:20,category:14,mr:186,sr:186,item:[2541,5905,2215],dur:60},
2220:{imp:6,qual:1,lvl:1150,category:1,h:6608,item:[3751,253],dur:35},
2253:{imp:3,qual:1,lvl:35,category:3,s:3326,item:[3629,572],dur:35},
2262:{imp:1,qual:1,lvl:10,category:1,h:1569,item:[2426,2835],dur:35},
2263:{imp:5,qual:2,lvl:1050,category:5,h:4540,s:4153,item:[2649,2129,572],dur:60},
2269:{imp:1,qual:2,lvl:10,category:14,mr:126,sr:126,item:[2541,3627],dur:60},
2284:{imp:2,qual:1,lvl:20,category:1,h:2395,item:[4878,3922],dur:35},
2290:{imp:3,qual:3,lvl:35,category:7,h:2572,m:2366,s:2366,item:[2426,5906,2129,4548],dur:120},
2303:{imp:5,qual:1,lvl:1050,category:1,h:5534,item:[4622,572],dur:35},
2315:{imp:4,qual:1,lvl:45,category:1,h:4460,item:[1427,3860],dur:35},
2319:{imp:5,qual:1,lvl:1010,category:11,sr:453,item:[5905,5820],dur:35},
2333:{imp:1,qual:1,lvl:1,category:10,mr:68,item:[2030],dur:35},
2346:{imp:3,qual:3,lvl:35,category:15,hr:257,mr:236,sr:236,item:[3327,2197,3627,5661],dur:120},
2363:{imp:4,qual:2,lvl:40,category:14,mr:307,sr:307,item:[5104,4697,2215],dur:60},
2369:{imp:2,qual:2,lvl:25,category:5,h:2368,s:2167,item:[2426,1710,4643],dur:60},
2371:{imp:1,qual:1,lvl:10,category:10,mr:143,item:[1934,4847],dur:35},
2423:{imp:1,qual:1,lvl:5,category:3,s:1058,item:[4622],dur:35},
2425:{imp:4,qual:2,lvl:40,category:13,hr:335,sr:307,item:[3585,5914,2626],dur:60},
2434:{imp:1,qual:2,lvl:10,category:13,hr:138,sr:126,item:[5473,4697],dur:60},
2436:{imp:1,qual:2,lvl:10,category:6,m:1264,s:1264,item:[3965,1710],dur:60},
2453:{imp:5,qual:1,lvl:1050,category:9,hr:553,item:[3327,2626],dur:35},
2464:{imp:2,qual:1,lvl:20,category:9,hr:239,item:[5473,2484],dur:35},
2487:{imp:3,qual:2,lvl:30,category:4,h:2697,m:2468,item:[4878,1260,3922],dur:60},
2500:{imp:2,qual:2,lvl:25,category:6,m:2167,s:2167,item:[5543,2129,3860],dur:60},
2501:{imp:1,qual:1,lvl:1,category:3,s:680,item:[3192],dur:35},
2532:{imp:5,qual:1,lvl:1050,category:2,m:5065,item:[1260,4643],dur:35},
2577:{imp:1,qual:1,lvl:15,category:10,mr:181,item:[5104,2215],dur:35},
2578:{imp:5,qual:2,lvl:1010,category:6,m:3732,s:3732,item:[1260,3192,253],dur:60},
2584:{imp:4,qual:3,lvl:45,category:7,h:3097,m:2849,s:2849,item:[2426,3965,4244,4548],dur:120},
2602:{imp:1,qual:1,lvl:5,category:10,mr:105,item:[1934],dur:35},
2603:{imp:5,qual:2,lvl:1010,category:5,h:4079,s:3732,item:[5624,3629,3860],dur:60},
2610:{imp:6,qual:1,lvl:1100,category:2,m:5670,item:[5543,3860],dur:35},
2639:{imp:6,qual:2,lvl:1100,category:13,hr:506,sr:463,item:[3327,3627,4847],dur:60},
2645:{imp:5,qual:1,lvl:1010,category:10,mr:453,item:[2197,4847],dur:35},
2657:{imp:3,qual:2,lvl:35,category:4,h:3026,m:2769,item:[1427,5543,4643],dur:60},
2667:{imp:3,qual:1,lvl:35,category:3,s:3326,item:[4622,2835],dur:35},
2704:{imp:6,qual:1,lvl:1100,category:1,h:6195,item:[1427,3922],dur:35},
2706:{imp:2,qual:2,lvl:20,category:13,hr:203,sr:186,item:[4936,5914,4847],dur:60},
2714:{imp:1,qual:2,lvl:10,category:12,hr:138,mr:126,item:[4936,2197],dur:60},
2722:{imp:2,qual:2,lvl:25,category:4,h:2368,m:2167,item:[5624,995,4643],dur:60},
2737:{imp:6,qual:2,lvl:1100,category:5,h:5066,s:4635,item:[5624,3192,3922],dur:60},
2738:{imp:3,qual:2,lvl:35,category:13,hr:302,sr:276,item:[3327,4697,2215],dur:60},
2746:{imp:5,qual:1,lvl:1010,category:11,sr:453,item:[5914,2215],dur:35},
2762:{imp:3,qual:2,lvl:30,category:6,m:2468,s:2468,item:[6109,1710,3922],dur:60},
2765:{imp:5,qual:1,lvl:1050,category:3,s:5065,item:[3192,3860],dur:35},
2779:{imp:4,qual:1,lvl:40,category:3,s:3704,item:[4622,4643],dur:35},
2783:{imp:5,qual:3,lvl:1010,category:7,h:3412,m:3139,s:3139,item:[4878,6109,2129,4548],dur:120},
2803:{imp:4,qual:3,lvl:45,category:15,hr:309,mr:284,sr:284,item:[4936,3994,4697,5661],dur:120},
2810:{imp:2,qual:1,lvl:20,category:9,hr:239,item:[3585,4847],dur:35},
2812:{imp:1,qual:2,lvl:15,category:5,h:1710,s:1565,item:[3751,3629],dur:60},
2816:{imp:1,qual:2,lvl:15,category:14,mr:156,sr:156,item:[5104,4078],dur:60},
2830:{imp:6,qual:2,lvl:1100,category:12,hr:506,mr:463,item:[4497,3994,2215],dur:60},
2843:{imp:4,qual:1,lvl:40,category:2,m:3704,item:[995,4643],dur:35},
2846:{imp:6,qual:1,lvl:1150,category:9,hr:660,item:[4497,5820],dur:35},
2850:{imp:3,qual:3,lvl:35,category:15,hr:257,mr:236,sr:236,item:[4936,2541,5914,5661],dur:120},
2861:{imp:5,qual:3,lvl:1050,category:7,h:3780,m:3477,s:3477,item:[5624,995,3629,4548],dur:120},
2872:{imp:6,qual:2,lvl:1150,category:4,h:5395,m:4936,item:[2649,1260,3922],dur:60},
2878:{imp:2,qual:1,lvl:20,category:1,h:2395,item:[2649,572],dur:35},
2897:{imp:4,qual:3,lvl:40,category:15,hr:283,mr:260,sr:260,item:[5473,2030,4697,5661],dur:120},
2920:{imp:5,qual:2,lvl:1010,category:4,h:4079,m:3732,item:[2649,5543,253],dur:60},
2925:{imp:1,qual:1,lvl:1,category:1,h:743,item:[2649],dur:35},
2949:{imp:1,qual:1,lvl:15,category:9,hr:198,item:[4497,1297],dur:35},
2968:{imp:4,qual:1,lvl:45,category:11,sr:408,item:[5905,2215],dur:35},
2978:{imp:5,qual:1,lvl:1050,category:2,m:5065,item:[6109,3922],dur:35},
2981:{imp:1,qual:1,lvl:5,category:9,hr:115,item:[4497],dur:35},
2983:{imp:4,qual:2,lvl:40,category:4,h:3355,m:3070,item:[5624,5906,3860],dur:60},
2985:{imp:4,qual:1,lvl:45,category:10,mr:408,item:[2541,5820],dur:35},
2990:{imp:5,qual:2,lvl:1050,category:12,hr:454,mr:415,item:[3585,2197,2626],dur:60},
3020:{imp:6,qual:2,lvl:1100,category:5,h:5066,s:4635,item:[4878,2129,4643],dur:60},
3042:{imp:2,qual:3,lvl:25,category:7,h:2047,m:1883,s:1883,item:[2426,6109,2129,4548],dur:120},
3049:{imp:6,qual:1,lvl:1100,category:10,mr:567,item:[1934,2215],dur:35},
3066:{imp:5,qual:2,lvl:1010,category:14,mr:373,sr:373,item:[5104,3627,1297],dur:60},
3082:{imp:1,qual:2,lvl:15,category:12,hr:171,mr:156,item:[5473,2030],dur:60},
3084:{imp:2,qual:1,lvl:25,category:9,hr:280,item:[3585,2484],dur:35},
3102:{imp:5,qual:2,lvl:1010,category:12,hr:407,mr:373,item:[5473,1934,1297],dur:60},
3127:{imp:4,qual:2,lvl:40,category:13,hr:335,sr:307,item:[5473,5905,5820],dur:60},
3151:{imp:4,qual:3,lvl:40,category:15,hr:283,mr:260,sr:260,item:[4497,5104,5905,5661],dur:120},
3164:{imp:6,qual:2,lvl:1100,category:4,h:5066,m:4635,item:[2649,1260,572],dur:60},
3165:{imp:2,qual:1,lvl:20,category:11,sr:219,item:[5914,5820],dur:35},
3179:{imp:4,qual:2,lvl:45,category:13,hr:368,sr:337,item:[5473,3675,2215],dur:60},
3185:{imp:6,qual:1,lvl:1100,category:9,hr:619,item:[5473,2626],dur:35},
3186:{imp:1,qual:1,lvl:5,category:10,mr:105,item:[2197],dur:35},
3214:{imp:2,qual:1,lvl:25,category:3,s:2570,item:[4622,3922],dur:35},
3254:{imp:5,qual:1,lvl:1010,category:2,m:4536,item:[5543,2835],dur:35},
3276:{imp:5,qual:1,lvl:1050,category:11,sr:506,item:[5914,2484],dur:35},
3283:{imp:3,qual:3,lvl:35,category:7,h:2572,m:2366,s:2366,item:[5624,995,3192,4548],dur:120},
3288:{imp:4,qual:3,lvl:45,category:7,h:3097,m:2849,s:2849,item:[5624,5543,1710,4548],dur:120},
3310:{imp:3,qual:2,lvl:30,category:13,hr:269,sr:246,item:[5473,4078,2484],dur:60},
3315:{imp:6,qual:2,lvl:1100,category:12,hr:506,mr:463,item:[5473,5104,2484],dur:60},
3316:{imp:1,qual:1,lvl:15,category:11,sr:181,item:[5914,2626],dur:35},
3318:{imp:3,qual:1,lvl:35,category:2,m:3326,item:[5906,3860],dur:35},
3319:{imp:2,qual:2,lvl:20,category:12,hr:203,mr:186,item:[3327,3994,2626],dur:60},
3331:{imp:1,qual:2,lvl:10,category:6,m:1264,s:1264,item:[5906,3629],dur:60},
3361:{imp:6,qual:2,lvl:1150,category:12,hr:539,mr:493,item:[3585,2197,5820],dur:60},
3368:{imp:3,qual:1,lvl:35,category:10,mr:332,item:[3994,2626],dur:35},
3375:{imp:5,qual:2,lvl:50,category:4,item:[1427,6109,4643],dur:60},
3392:{imp:1,qual:1,lvl:15,category:2,m:1814,item:[995,572],dur:35},
3405:{imp:3,qual:3,lvl:35,category:7,h:2572,m:2366,s:2366,item:[3751,6109,1710,4548],dur:120},
3409:{imp:2,qual:2,lvl:20,category:4,h:2039,m:1866,item:[4878,5543,3860],dur:60},
3425:{imp:3,qual:2,lvl:30,category:5,h:2697,s:2468,item:[2426,4244,3860],dur:60},
3432:{imp:3,qual:2,lvl:30,category:6,m:2468,s:2468,item:[5906,2129,253],dur:60},
3447:{imp:6,qual:1,lvl:1150,category:10,mr:604,item:[3994,4847],dur:35},
3457:{imp:2,qual:2,lvl:25,category:6,m:2167,s:2167,item:[6109,3629,253],dur:60},
3464:{imp:3,qual:3,lvl:35,category:15,hr:257,mr:236,sr:236,item:[4497,1934,5905,5661],dur:120},
3467:{imp:6,qual:1,lvl:1100,category:10,mr:567,item:[2030,2484],dur:35},
3484:{imp:4,qual:1,lvl:45,category:9,hr:446,item:[5473,2215],dur:35},
3496:{imp:3,qual:1,lvl:35,category:1,h:3634,item:[2426,572],dur:35},
3510:{imp:1,qual:2,lvl:10,category:4,h:1381,m:1264,item:[2426,5543],dur:60},
3530:{imp:1,qual:1,lvl:10,category:10,mr:143,item:[2030,5820],dur:35},
3534:{imp:2,qual:2,lvl:25,category:5,h:2368,s:2167,item:[1427,4622,572],dur:60},
3535:{imp:4,qual:2,lvl:40,category:5,h:3355,s:3070,item:[4878,1710,2835],dur:60},
3560:{imp:2,qual:2,lvl:25,category:12,hr:236,mr:216,item:[3585,2030,2626],dur:60},
3573:{imp:5,qual:2,lvl:1010,category:6,m:3732,s:3732,item:[5906,4622,3922],dur:60},
3586:{imp:3,qual:1,lvl:35,category:2,m:3326,item:[3965,2835],dur:35},
3599:{imp:2,qual:2,lvl:25,category:13,hr:236,sr:216,item:[5327,5914,5820],dur:60},
3605:{imp:6,qual:2,lvl:1100,category:4,h:5066,m:4635,item:[2426,6109,253],dur:60},
3606:{imp:3,qual:1,lvl:30,category:9,hr:322,item:[3585,2215],dur:35},
3611:{imp:5,qual:1,lvl:1010,category:9,hr:495,item:[4497,2484],dur:35},
3624:{imp:4,qual:2,lvl:40,category:12,hr:335,mr:307,item:[5327,2197,1297],dur:60},
3638:{imp:5,qual:1,lvl:1010,category:9,hr:495,item:[3327,2215],dur:35},
3655:{imp:2,qual:3,lvl:25,category:15,hr:204,mr:188,sr:188,item:[5327,2541,4697,5661],dur:120},
3657:{imp:1,qual:1,lvl:1,category:2,m:680,item:[6109],dur:35},
3680:{imp:1,qual:1,lvl:15,category:11,sr:181,item:[3675,4847],dur:35},
3686:{imp:5,qual:2,lvl:1050,category:6,m:4153,s:4153,item:[3965,1710,253],dur:60},
3706:{imp:4,qual:2,lvl:45,category:14,mr:337,sr:337,item:[3994,4078,4847],dur:60},
3709:{imp:2,qual:2,lvl:20,category:4,h:2039,m:1866,item:[1427,5906,4643],dur:60},
3713:{imp:3,qual:2,lvl:35,category:12,hr:302,mr:276,item:[5473,2197,1297],dur:60},
3719:{imp:4,qual:1,lvl:40,category:2,m:3704,item:[5543,572],dur:35},
3720:{imp:1,qual:1,lvl:5,category:9,hr:115,item:[5327],dur:35},
3737:{imp:4,qual:1,lvl:45,category:3,s:4082,item:[3629,2835],dur:35},
3761:{imp:2,qual:2,lvl:25,category:6,m:2167,s:2167,item:[3965,4244,2835],dur:60},
3763:{imp:3,qual:1,lvl:30,category:3,s:2948,item:[4244,572],dur:35},
3782:{imp:1,qual:2,lvl:10,category:14,mr:126,sr:126,item:[3994,5914],dur:60},
3793:{imp:1,qual:1,lvl:1,category:11,sr:68,item:[3675],dur:35},
3815:{imp:3,qual:1,lvl:35,category:9,hr:363,item:[3327,4847],dur:35},
3820:{imp:1,qual:2,lvl:15,category:12,hr:171,mr:156,item:[3327,3994],dur:60},
3828:{imp:3,qual:2,lvl:35,category:14,mr:276,sr:276,item:[5104,3675,2626],dur:60},
3829:{imp:1,qual:2,lvl:15,category:6,m:1565,s:1565,item:[995,2129],dur:60},
3833:{imp:6,qual:3,lvl:1150,category:7,h:4462,m:4105,s:4105,item:[4878,1260,1710,4548],dur:120},
3836:{imp:4,qual:1,lvl:45,category:1,h:4460,item:[3751,3922],dur:35},
3841:{imp:6,qual:3,lvl:1100,category:7,h:4200,m:3864,s:3864,item:[2649,3965,3629,4548],dur:120},
3851:{imp:2,qual:1,lvl:20,category:2,m:2192,item:[5543,253],dur:35},
3866:{imp:6,qual:2,lvl:1150,category:14,mr:493,sr:493,item:[1934,4078,4847],dur:60},
3871:{imp:1,qual:1,lvl:1,category:9,hr:74,item:[3585],dur:35},
3927:{imp:5,qual:2,lvl:1050,category:14,mr:415,sr:415,item:[3994,5914,1297],dur:60},
3928:{imp:4,qual:1,lvl:40,category:9,hr:404,item:[5327,4847],dur:35},
3936:{imp:6,qual:1,lvl:1100,category:3,s:5670,item:[3629,253],dur:35},
3937:{imp:4,qual:3,lvl:40,category:7,h:2835,m:2608,s:2608,item:[1427,1260,4244,4548],dur:120},
3947:{imp:4,qual:2,lvl:40,category:14,mr:307,sr:307,item:[2541,4078,1297],dur:60},
3955:{imp:1,qual:1,lvl:5,category:1,h:1156,item:[1427],dur:35},
3957:{imp:3,qual:2,lvl:35,category:13,hr:302,sr:276,item:[3585,5905,1297],dur:60},
3961:{imp:2,qual:1,lvl:25,category:1,h:2808,item:[2649,3922],dur:35},
3966:{imp:1,qual:1,lvl:5,category:2,m:1058,item:[995],dur:35},
3990:{imp:3,qual:1,lvl:30,category:3,s:2948,item:[3629,253],dur:35},
4001:{imp:1,qual:1,lvl:10,category:11,sr:143,item:[5914,1297],dur:35},
4011:{imp:5,qual:1,lvl:1010,category:10,mr:453,item:[1934,2626],dur:35},
4012:{imp:5,qual:3,lvl:1010,category:7,h:3412,m:3139,s:3139,item:[3751,1260,2129,4548],dur:120},
4021:{imp:1,qual:2,lvl:10,category:4,h:1381,m:1264,item:[3751,995],dur:60},
4045:{imp:6,qual:1,lvl:1100,category:2,m:5670,item:[5906,572],dur:35},
4088:{imp:3,qual:1,lvl:35,category:1,h:3634,item:[2649,253],dur:35},
4094:{imp:6,qual:3,lvl:1100,category:15,hr:420,mr:386,sr:386,item:[4497,2197,4078,5661],dur:120},
4097:{imp:3,qual:2,lvl:35,category:14,mr:276,sr:276,item:[2030,5914,5820],dur:60},
4102:{imp:3,qual:2,lvl:30,category:12,hr:269,mr:246,item:[4936,2197,2626],dur:60},
4109:{imp:6,qual:1,lvl:1100,category:3,s:5670,item:[4244,3922],dur:35},
4117:{imp:1,qual:1,lvl:10,category:2,m:1436,item:[1260,253],dur:35},
4120:{imp:3,qual:3,lvl:30,category:15,hr:231,mr:212,sr:212,item:[5473,1934,5914,5661],dur:120},
4126:{imp:1,qual:2,lvl:10,category:4,h:1381,m:1264,item:[1427,1260],dur:60},
4130:{imp:2,qual:1,lvl:20,category:3,s:2192,item:[1710,4643],dur:35},
4135:{imp:1,qual:2,lvl:15,category:14,mr:156,sr:156,item:[1934,5905],dur:60},
4142:{imp:6,qual:2,lvl:1100,category:14,mr:463,sr:463,item:[1934,4078,2215],dur:60},
4166:{imp:5,qual:1,lvl:1010,category:2,m:4536,item:[995,3922],dur:35},
4175:{imp:3,qual:2,lvl:35,category:5,h:3026,s:2769,item:[2426,4622,572],dur:60},
4179:{imp:6,qual:3,lvl:1100,category:7,h:4200,m:3864,s:3864,item:[3751,1260,3192,4548],dur:120},
4215:{imp:4,qual:1,lvl:40,category:1,h:4047,item:[2426,3922],dur:35},
4222:{imp:1,qual:2,lvl:10,category:6,m:1264,s:1264,item:[6109,3192],dur:60},
4235:{imp:5,qual:2,lvl:1050,category:12,hr:454,mr:415,item:[3327,2030,4847],dur:60},
4284:{imp:5,qual:3,lvl:1050,category:7,h:3780,m:3477,s:3477,item:[2649,3965,4622,4548],dur:120},
4349:{imp:4,qual:2,lvl:40,category:5,h:3355,s:3070,item:[3751,3629,3922],dur:60},
4351:{imp:2,qual:1,lvl:25,category:2,m:2570,item:[6109,572],dur:35},
4369:{imp:5,qual:1,lvl:1050,category:10,mr:506,item:[2197,2626],dur:35},
4390:{imp:1,qual:1,lvl:15,category:2,m:1814,item:[1260,3860],dur:35},
4423:{imp:3,qual:2,lvl:35,category:12,hr:302,mr:276,item:[4936,3994,2215],dur:60},
4426:{imp:4,qual:2,lvl:40,category:5,h:3355,s:3070,item:[2649,4244,4643],dur:60},
4448:{imp:4,qual:1,lvl:40,category:10,mr:370,item:[3994,2215],dur:35},
4463:{imp:1,qual:1,lvl:1,category:3,s:680,item:[4244],dur:35},
4466:{imp:1,qual:1,lvl:15,category:3,s:1814,item:[1710,2835],dur:35},
4491:{imp:2,qual:2,lvl:20,category:5,h:2039,s:1866,item:[3751,1710,3922],dur:60},
4493:{imp:6,qual:2,lvl:1100,category:14,mr:463,sr:463,item:[2197,3675,1297],dur:60},
4506:{imp:5,qual:1,lvl:1050,category:2,m:5065,item:[995,2835],dur:35},
4525:{imp:2,qual:1,lvl:20,category:11,sr:219,item:[4697,4847],dur:35},
4527:{imp:5,qual:3,lvl:1050,category:7,h:3780,m:3477,s:3477,item:[4878,6109,3192,4548],dur:120},
4529:{imp:3,qual:1,lvl:35,category:9,hr:363,item:[5327,2484],dur:35},
4535:{imp:6,qual:1,lvl:1150,category:3,s:5320,item:[2129,3860],dur:35},
4568:{imp:5,qual:2,lvl:1010,category:13,hr:407,sr:373,item:[3327,3675,2215],dur:60},
4578:{imp:1,qual:1,lvl:15,category:3,s:1814,item:[2129,572],dur:35},
4591:{imp:6,qual:2,lvl:1100,category:12,hr:506,mr:463,item:[5327,2541,1297],dur:60},
4602:{imp:3,qual:1,lvl:30,category:11,sr:294,item:[3675,1297],dur:35},
4616:{imp:4,qual:3,lvl:40,category:7,h:2835,m:2608,s:2608,item:[4878,1260,3629,4548],dur:120},
4619:{imp:6,qual:1,lvl:1150,category:2,m:6048,item:[6109,3860],dur:35},
4629:{imp:6,qual:2,lvl:1150,category:5,h:5395,s:4936,item:[2426,1710,572],dur:60},
4637:{imp:4,qual:2,lvl:45,category:13,hr:368,sr:337,item:[3327,5914,2626],dur:60},
4639:{imp:1,qual:1,lvl:10,category:10,mr:143,item:[5104,1297],dur:35},
4657:{imp:1,qual:2,lvl:10,category:14,mr:126,sr:126,item:[2030,3675],dur:60},
4665:{imp:3,qual:1,lvl:30,category:9,hr:322,item:[4936,5820],dur:35},
4667:{imp:2,qual:2,lvl:20,category:14,mr:186,sr:186,item:[2197,3627,1297],dur:60},
4668:{imp:4,qual:1,lvl:40,category:9,hr:404,item:[3327,1297],dur:35},
4669:{imp:2,qual:1,lvl:20,category:3,s:2192,item:[3192,253],dur:35},
4680:{imp:1,qual:1,lvl:5,category:11,sr:105,item:[5914],dur:35},
4686:{imp:3,qual:3,lvl:45,category:15,hr:309,mr:284,sr:284,item:[3327,3994,4078,5661],dur:120},
4692:{imp:1,qual:1,lvl:10,category:11,sr:143,item:[3627,4847],dur:35},
4693:{imp:6,qual:2,lvl:1150,category:13,hr:539,sr:493,item:[5327,5914,2484],dur:60},
4707:{imp:4,qual:2,lvl:45,category:5,h:3684,s:3371,item:[2426,3192,4643],dur:60},
4718:{imp:3,qual:2,lvl:35,category:5,h:3026,s:2769,item:[5624,2129,3860],dur:60},
4724:{imp:5,qual:1,lvl:1050,category:10,mr:506,item:[2541,4847],dur:35},
4741:{imp:2,qual:1,lvl:25,category:9,hr:280,item:[3327,5820],dur:35},
4753:{imp:3,qual:1,lvl:30,category:1,h:3221,item:[4878,3860],dur:35},
4758:{imp:3,qual:1,lvl:30,category:1,h:3221,item:[2426,253],dur:35},
4769:{imp:6,qual:3,lvl:1100,category:15,hr:420,mr:386,sr:386,item:[4936,5104,3627,5661],dur:120},
4781:{imp:1,qual:2,lvl:10,category:13,hr:138,sr:126,item:[3585,4078],dur:60},
4793:{imp:2,qual:1,lvl:25,category:10,mr:257,item:[2030,1297],dur:35},
4798:{imp:6,qual:4,lvl:1,category:18,exp:50,item:[6132,4548,5661],dur:30},
4824:{imp:3,qual:1,lvl:30,category:10,mr:294,item:[2030,4847],dur:35},
4835:{imp:5,qual:1,lvl:1010,category:1,h:4956,item:[5624,3860],dur:35},
4841:{imp:3,qual:2,lvl:35,category:14,mr:276,sr:276,item:[2541,3627,4847],dur:60},
4859:{imp:3,qual:2,lvl:35,category:13,hr:302,sr:276,item:[5327,4078,2484],dur:60},
4860:{imp:5,qual:2,lvl:1010,category:4,h:4079,m:3732,item:[1427,995,2835],dur:60},
4896:{imp:1,qual:1,lvl:15,category:2,m:1814,item:[3965,4643],dur:35},
4901:{imp:4,qual:3,lvl:40,category:15,hr:283,mr:260,sr:260,item:[5473,2541,5914,5661],dur:120},
4906:{imp:5,qual:2,lvl:1010,category:12,hr:407,mr:373,item:[4497,2197,2626],dur:60},
4920:{imp:2,qual:2,lvl:25,category:13,hr:236,sr:216,item:[4936,3627,4847],dur:60},
4950:{imp:4,qual:1,lvl:40,category:2,m:3704,item:[3965,3860],dur:35},
4951:{imp:3,qual:2,lvl:30,category:6,m:2468,s:2468,item:[3965,3629,2835],dur:60},
4954:{imp:2,qual:2,lvl:20,category:13,hr:203,sr:186,item:[5327,3675,2626],dur:60},
4978:{imp:1,qual:2,lvl:10,category:12,hr:138,mr:126,item:[5327,1934],dur:60},
4979:{imp:1,qual:1,lvl:1,category:10,mr:68,item:[2541],dur:35},
4996:{imp:2,qual:1,lvl:20,category:10,mr:219,item:[5104,2484],dur:35},
5018:{imp:2,qual:2,lvl:20,category:12,hr:203,mr:186,item:[4497,2030,5820],dur:60},
5031:{imp:1,qual:1,lvl:15,category:10,mr:181,item:[2197,2484],dur:35},
5050:{imp:4,qual:2,lvl:45,category:14,mr:337,sr:337,item:[2541,4697,2484],dur:60},
5051:{imp:6,qual:1,lvl:1100,category:11,sr:567,item:[3675,5820],dur:35},
5081:{imp:5,qual:1,lvl:1050,category:1,h:5534,item:[5624,2835],dur:35},
5087:{imp:1,qual:2,lvl:15,category:5,h:1710,s:1565,item:[2426,1710],dur:60},
5089:{imp:1,qual:1,lvl:10,category:9,hr:156,item:[3327,2484],dur:35},
5091:{imp:5,qual:1,lvl:1010,category:10,mr:453,item:[2541,1297],dur:35},
5098:{imp:6,qual:3,lvl:1100,category:15,hr:420,mr:386,sr:386,item:[3585,1934,5905,5661],dur:120},
5109:{imp:2,qual:1,lvl:20,category:11,sr:219,item:[3627,1297],dur:35},
5128:{imp:3,qual:2,lvl:35,category:6,m:2769,s:2769,item:[6109,3192,3922],dur:60},
5129:{imp:4,qual:1,lvl:45,category:10,mr:408,item:[5104,4847],dur:35},
5190:{imp:3,qual:1,lvl:30,category:2,m:2948,item:[5906,3922],dur:35},
5204:{imp:2,qual:1,lvl:25,category:1,h:2808,item:[5624,4643],dur:35},
5216:{imp:3,qual:2,lvl:35,category:6,m:2769,s:2769,item:[1260,3629,2835],dur:60},
5222:{imp:4,qual:1,lvl:45,category:1,h:4460,item:[2649,3860],dur:35},
5227:{imp:1,qual:2,lvl:15,category:5,h:1710,s:1565,item:[1427,3192],dur:60},
5237:{imp:4,qual:2,lvl:45,category:6,m:3371,s:3371,item:[3965,4622,3922],dur:60},
5254:{imp:1,qual:1,lvl:5,category:10,mr:105,item:[5104],dur:35},
5265:{imp:4,qual:2,lvl:45,category:14,mr:337,sr:337,item:[2030,5905,1297],dur:60},
5292:{imp:4,qual:2,lvl:45,category:6,m:3371,s:3371,item:[6109,2129,572],dur:60},
5310:{imp:4,qual:1,lvl:45,category:3,s:4082,item:[4244,3860],dur:35},
5322:{imp:1,qual:1,lvl:5,category:9,hr:115,item:[4936],dur:35},
5324:{imp:4,qual:2,lvl:45,category:5,h:3684,s:3371,item:[2649,3629,3860],dur:60},
5349:{imp:5,qual:3,lvl:1010,category:15,hr:341,mr:313,sr:313,item:[5327,2197,3627,5661],dur:120},
5352:{imp:3,qual:1,lvl:30,category:9,hr:322,item:[5327,1297],dur:35},
5401:{imp:5,qual:1,lvl:1010,category:3,s:4536,item:[3192,572],dur:35},
5410:{imp:4,qual:1,lvl:40,category:11,sr:370,item:[4078,5820],dur:35},
5419:{imp:4,qual:3,lvl:40,category:15,hr:283,mr:260,sr:260,item:[3585,5104,3675,5661],dur:120},
5468:{imp:3,qual:1,lvl:30,category:11,sr:294,item:[5905,2484],dur:35},
5485:{imp:5,qual:2,lvl:1010,category:12,hr:407,mr:373,item:[3585,3994,4847],dur:60},
5500:{imp:6,qual:3,lvl:1100,category:7,h:4200,m:3864,s:3864,item:[4878,5543,4244,4548],dur:120},
5512:{imp:4,qual:1,lvl:40,category:11,sr:370,item:[5905,2626],dur:35},
5524:{imp:5,qual:2,lvl:1010,category:13,hr:407,sr:373,item:[4936,5905,5820],dur:60},
5554:{imp:5,qual:2,lvl:1050,category:14,mr:415,sr:415,item:[5104,3675,4847],dur:60},
5572:{imp:3,qual:3,lvl:30,category:7,h:2310,m:2125,s:2125,item:[2649,5543,1710,4548],dur:120},
5598:{imp:3,qual:1,lvl:30,category:10,mr:294,item:[1934,5820],dur:35},
5617:{imp:3,qual:2,lvl:30,category:5,h:2697,s:2468,item:[2649,4622,572],dur:60},
5623:{imp:4,qual:3,lvl:45,category:7,h:3097,m:2849,s:2849,item:[2649,6109,3629,4548],dur:120},
5643:{imp:1,qual:1,lvl:5,category:1,h:1156,item:[2426],dur:35},
5665:{imp:1,qual:2,lvl:15,category:6,m:1565,s:1565,item:[5543,4244],dur:60},
5671:{imp:6,qual:3,lvl:1150,category:15,hr:446,mr:410,sr:410,item:[4936,2541,3627,5661],dur:120},
5675:{imp:4,qual:2,lvl:40,category:6,m:3070,s:3070,item:[5543,3192,572],dur:60},
5679:{imp:4,qual:2,lvl:45,category:4,h:3684,m:3371,item:[1427,1260,3922],dur:60},
5686:{imp:3,qual:1,lvl:30,category:10,mr:294,item:[3994,2484],dur:35},
5702:{imp:5,qual:1,lvl:1050,category:1,h:5534,item:[2426,3860],dur:35},
5703:{imp:5,qual:2,lvl:1050,category:6,m:4153,s:4153,item:[5543,4244,4643],dur:60},
5714:{imp:1,qual:1,lvl:15,category:1,h:1982,item:[1427,253],dur:35},
5719:{imp:4,qual:2,lvl:40,category:6,m:3070,s:3070,item:[6109,4622,253],dur:60},
5734:{imp:4,qual:2,lvl:40,category:4,h:3355,m:3070,item:[2426,995,253],dur:60},
5742:{imp:3,qual:2,lvl:35,category:6,m:2769,s:2769,item:[5906,1710,4643],dur:60},
5761:{imp:1,qual:1,lvl:1,category:1,h:743,item:[4878],dur:35},
5810:{imp:1,qual:1,lvl:15,category:1,h:1982,item:[4878,2835],dur:35},
5824:{imp:4,qual:2,lvl:40,category:6,m:3070,s:3070,item:[1260,2129,3860],dur:60},
5826:{imp:5,qual:2,lvl:1050,category:5,h:4540,s:4153,item:[2426,3192,3860],dur:60},
5843:{imp:5,qual:1,lvl:1050,category:11,sr:506,item:[3627,2215],dur:35},
5853:{imp:1,qual:2,lvl:15,category:13,hr:171,sr:156,item:[4497,3627],dur:60},
5854:{imp:1,qual:2,lvl:10,category:12,hr:138,mr:126,item:[4497,5104],dur:60},
5886:{imp:2,qual:1,lvl:20,category:2,m:2192,item:[995,3860],dur:35},
5895:{imp:6,qual:2,lvl:1100,category:6,m:4635,s:4635,item:[5906,4244,572],dur:60},
5907:{imp:1,qual:1,lvl:10,category:2,m:1436,item:[5906,4643],dur:35},
5932:{imp:2,qual:1,lvl:25,category:3,s:2570,item:[3629,3860],dur:35},
5934:{imp:3,qual:2,lvl:30,category:13,hr:269,sr:246,item:[5327,5905,2215],dur:60},
5954:{imp:1,qual:2,lvl:15,category:6,m:1565,s:1565,item:[1260,4622],dur:60},
5957:{imp:1,qual:2,lvl:15,category:12,hr:171,mr:156,item:[3585,2541],dur:60},
5969:{imp:5,qual:2,lvl:1050,category:4,h:4540,m:4153,item:[5624,5906,3922],dur:60},
6010:{imp:4,qual:2,lvl:45,category:5,h:3684,s:3371,item:[5624,1710,2835],dur:60},
6019:{imp:2,qual:1,lvl:20,category:9,hr:239,item:[4936,2626],dur:35},
6024:{imp:1,qual:1,lvl:10,category:11,sr:143,item:[4078,2215],dur:35},
6030:{imp:1,qual:1,lvl:5,category:1,h:1156,item:[3751],dur:35},
6115:{imp:1,qual:1,lvl:1,category:9,hr:74,item:[3327],dur:35},
6136:{imp:4,qual:2,lvl:40,category:14,mr:307,sr:307,item:[1934,3627,2484],dur:60},
6159:{imp:1,qual:1,lvl:1,category:3,s:680,item:[3629],dur:35},
6166:{imp:1,qual:1,lvl:5,category:3,s:700,item:[2129],dur:35},
6170:{imp:4,qual:1,lvl:40,category:11,sr:370,item:[5914,4847],dur:35},
6178:{imp:5,qual:3,lvl:1050,category:7,h:3780,m:3477,s:3477,item:[3751,6109,4244,4548],dur:120},
6186:{imp:3,qual:2,lvl:30,category:13,hr:269,sr:246,item:[4497,3627,5820],dur:60},
6189:{imp:1,qual:1,lvl:1,category:1,h:743,item:[5624],dur:35},
6193:{imp:6,qual:1,lvl:1100,category:9,hr:619,item:[3585,5820],dur:35},
6195:{imp:5,qual:1,lvl:1010,category:3,s:4536,item:[4244,4643],dur:35},
6208:{imp:2,qual:2,lvl:20,category:13,hr:203,sr:186,item:[4497,4697,5820],dur:60},
6224:{imp:1,qual:2,lvl:15,category:13,hr:171,sr:156,item:[5327,5914],dur:60},
6227:{imp:3,qual:2,lvl:30,category:4,h:2697,m:2468,item:[5624,5543,3860],dur:60},
6233:{imp:5,qual:2,lvl:1010,category:5,h:4079,s:3732,item:[3751,4244,4643],dur:60},
6326:{imp:6,qual:1,lvl:1150,category:11,sr:604,item:[4697,2215],dur:35},
6339:{imp:6,qual:2,lvl:1150,category:14,mr:493,sr:493,item:[3994,3675,5820],dur:60},
6345:{imp:6,qual:2,lvl:1150,category:5,h:5395,s:4936,item:[4878,3629,253],dur:60},
6347:{imp:6,qual:3,lvl:1150,category:7,h:4462,m:4105,s:4105,item:[2426,5906,3192,4548],dur:120},
6351:{imp:6,qual:2,lvl:1150,category:12,hr:539,mr:493,item:[5473,5104,4847],dur:60},
6366:{imp:6,qual:2,lvl:1150,category:13,hr:539,sr:493,item:[3585,3675,1297],dur:60},
6404:{imp:6,qual:2,lvl:1150,category:6,m:4936,s:4936,item:[3965,3629,4643],dur:60},
6408:{imp:6,qual:2,lvl:1150,category:14,mr:493,sr:493,item:[1934,4697,2626],dur:60},
6414:{imp:1,qual:4,lvl:1,category:16,h:3724,hr:351,mr:319,sr:319,item:[6132,995,4548,1427,452],dur:120,rest:3},
6426:{imp:6,qual:3,lvl:1150,category:15,hr:446,mr:410,sr:410,item:[3327,2197,4697,5661],dur:120},
6430:{imp:6,qual:1,lvl:1150,category:1,h:6608,item:[4878,253],dur:35},
6435:{imp:6,qual:2,lvl:1150,category:4,h:5395,m:4936,item:[4878,995,4643],dur:60},
6458:{imp:6,qual:1,lvl:1150,category:9,hr:660,item:[3585,1297],dur:35},
6460:{imp:6,qual:1,lvl:1150,category:11,sr:604,item:[3627,5820],dur:35},
6464:{imp:6,qual:3,lvl:1150,category:7,h:4462,m:4105,s:4105,item:[3751,6109,3192,4548],dur:120},
6483:{imp:2,qual:2,lvl:1,category:17,h:5000,mr:457,item:[1934,4847,2030,3435],dur:120,rest:3},
6486:{imp:1,qual:2,lvl:1,category:16,h:5000,hr:500,item:[1427,3629,2590,5059],dur:120,rest:3},
6510:{imp:6,qual:1,lvl:1150,category:3,s:6048,item:[4244,253],dur:35},
6514:{imp:6,qual:2,lvl:1150,category:13,hr:539,sr:493,item:[5473,4078,2626],dur:60},
6517:{imp:6,qual:3,lvl:1150,category:7,h:4462,m:4105,s:4105,item:[5624,995,2129,4548],dur:120},
6526:{imp:6,qual:2,lvl:1150,category:12,hr:539,mr:493,item:[5327,2030,2484],dur:60},
6566:{imp:6,qual:1,lvl:1150,category:1,h:6608,item:[1427,4643],dur:35},
6570:{imp:1,qual:2,lvl:1,category:16,h:5000,sr:457,item:[2129,2649,3200,5059],dur:120,rest:3},
6575:{imp:6,qual:3,lvl:1150,category:15,hr:446,mr:410,sr:410,item:[3585,5104,5914,5661],dur:120},
6592:{imp:6,qual:1,lvl:1150,category:10,mr:604,item:[2197,1297],dur:35},
6593:{imp:6,qual:2,lvl:1150,category:4,h:5395,m:4936,item:[2426,5906,572],dur:60},
6594:{imp:6,qual:1,lvl:1150,category:9,hr:660,item:[4936,1297],dur:35},
6602:{imp:6,qual:2,lvl:1150,category:5,h:5395,s:4936,item:[2649,4622,2835],dur:60},
6603:{imp:6,qual:2,lvl:1150,category:6,m:4936,s:4936,item:[5543,2129,2835],dur:60},
6639:{imp:6,qual:3,lvl:1150,category:15,hr:446,mr:410,sr:410,item:[5327,2030,3627,5661],dur:120},
6641:{imp:6,qual:1,lvl:1150,category:3,s:6048,item:[3192,4643],dur:35},
6649:{imp:6,qual:1,lvl:1150,category:2,m:6048,item:[995,253],dur:35},
6652:{imp:6,qual:1,lvl:1150,category:2,m:6048,item:[3965,3922],dur:35},
6663:{imp:6,qual:1,lvl:1150,category:10,mr:604,item:[2541,2215],dur:35},
11188:{imp:2,qual:1,lvl:1,category:17,sr:532,item:[3965,4497,4847],dur:120,rest:2},
11600:{imp:1,qual:1,lvl:1,category:16,m:5320,item:[6109,4847],dur:120,rest:5},
11615:{imp:2,qual:2,lvl:1,category:17,hr:425,mr:425,item:[3965,572,2835,5327],dur:120,rest:5},
11624:{imp:2,qual:4,lvl:1,category:17,h:5054,m:4575,item:[995,4548,5152,931],dur:120,rest:5},
11650:{imp:1,qual:2,lvl:1,category:16,m:4256,s:4256,item:[5543,3629,2835,2426],dur:120,rest:5},
11652:{imp:2,qual:2,lvl:1,category:17,m:4256,mr:425,item:[5906,3994,8152,4863],dur:120,rest:5},
11654:{imp:1,qual:2,lvl:1,category:16,m:4256,sr:425,item:[3675,572,7920,4909],dur:120,rest:5},
11657:{imp:2,qual:3,lvl:1,category:17,hr:319,mr:319,sr:319,item:[5661,5473,5104,2215],dur:120,rest:5},
11665:{imp:2,qual:3,lvl:1,category:17,m:2856,mr:315,h:3094,item:[5661,4936,2426,8272],dur:120,rest:5},
11666:{imp:1,qual:2,lvl:1,category:16,m:4256,hr:425,item:[2649,4847,4497,4368],dur:120,rest:5},
11819:{imp:6,qual:4,lvl:1,category:18,exp:150,item:[6112,11807],dur:30},
11844:{imp:2,qual:4,lvl:1,category:17,mr:457,sr:457,item:[4878,5473,2215,5661,511],dur:120,rest:2},
11869:{imp:1,qual:2,lvl:1,category:16,s:4575,sr:457,item:[3860,2835,3629,8182],dur:120,rest:2},
11872:{imp:1,qual:1,lvl:1,category:16,m:5320,item:[3585,3994,5543],dur:120,rest:2},
11877:{imp:2,qual:2,lvl:1,category:17,s:4575,hr:500,item:[4697,5914,5104,1412],dur:120,rest:2},
11878:{imp:1,qual:1,lvl:1,category:16,s:5320,item:[4847,4244,2835],dur:120,rest:2},
11885:{imp:1,qual:2,lvl:1,category:16,m:4575,s:4575,item:[4697,2835,572,3922],dur:120,rest:2},
11888:{imp:1,qual:1,lvl:1,category:16,h:5852,item:[1427,572,2835],dur:120,rest:2},
11918:{imp:2,qual:2,lvl:1,category:17,mr:457,hr:5004,item:[3585,4497,4936,4847],dur:120,rest:2},
14416:{imp:6,qual:4,lvl:1,category:18,exp:100,item:[6112,14579],dur:30},
14728:{imp:1,qual:3,lvl:1,category:17,sr:315,s:2856,h:3094,item:[2649,8014,676,5059],dur:120,rest:1},
14729:{imp:1,qual:2,lvl:1,category:16,s:4256,mr:425,item:[2835,4697,5661,3064],dur:120,rest:1},
14730:{imp:1,qual:1,lvl:1,category:16,m:5600,item:[2835,6109,7964],dur:120,rest:1},
14749:{imp:1,qual:3,lvl:1,category:16,mr:319,sr:319,h:3511,item:[3994,2030,5104,5661,3200],dur:120,rest:1},
21066:{imp:1,qual:4,lvl:1,category:16,h:4620,m:4250,s:4250,hr:462,item:[2835,5661,4847,8182,3200],dur:120,rest:5},
21068:{imp:1,qual:4,lvl:1,category:17,m:4620,h:5051,hr:505,item:[4548,8272,20157,931],dur:120,rest:5},
21069:{imp:1,qual:4,lvl:1,category:17,s:4620,h:5051,item:[1427,4548,18028,1242],dur:120,rest:5},
//99905:{imp:6,qual:3,lvl:1,category:16,h:5054,m:4575,item:[4878,4936,4847,17604],dur:120,rest:4},
//99906:{imp:6,qual:4,lvl:1,category:16,h:3724,hr:351,s:3458,sr:319,item:[4878,1260,7919,17523],dur:120,rest:4},
//99907:{imp:1,qual:2,lvl:1,category:16,h:3724,hr:351,m:3458,mr:319,item:[1427,2215,4548,6132],dur:120,rest:0},
//99908:{imp:1,qual:2,lvl:1,category:16,hr:500,mr:457,item:[2426,3839,3064],dur:120,rest:0},
//99909:{imp:1,qual:2,lvl:1,category:17,h:3724,m:3458,s:3458,item:[4878,5661,110,1016],dur:120,rest:0}
22941:{imp:6,qual:4,lvl:10,category:16,war:50,item:[22924,4548,5661,2835,3192],dur:30,rest:5},//colovian war torte
22972:{imp:6,qual:4,lvl:10,category:16,war:100,item:[22716,22659],dur:30,rest:5},//molten war torte
23151:{imp:6,qual:4,lvl:10,category:16,war:150,item:[22940,23002],dur:30,rest:5},//white gold war torte

};

function getRecipeIdsForIngredients(ingredientIds) {
    let recipeIdsForIngredients = [];
    for (const [recipeId, recipe] of Object.entries(RECIPE_DATA)) {
        if (recipe.item) {
            let found = true;
            for (var i = 0; i < ingredientIds.length; i++) {
                if (recipe.item.indexOf(ingredientIds[i]) === -1) {
                    found = false;
                }
            }
            if (found) {
                recipeIdsForIngredients.push(recipeId);
            }
        }
    }
    return recipeIdsForIngredients;
}

const RecipeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'RecipeIntent' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'FullRecipeIntent');
    },
    handle(handlerInput) {
        const RESULT_KEY = (Alexa.getIntentName(handlerInput.requestEnvelope) === 'FullRecipeIntent') ? 'FULL_RECIPE_RESULT' : 'RECIPE_RESULT';
	    const recipeSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'recipe');
        console.log('RecipeIntentHandler', '#1aa recipeSlot='+JSON.stringify(recipeSlot));

	    let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_RECIPE')});
	    let id = constants.GET_ID(recipeSlot);
	    if (id === -1) {
	        speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_RECIPE'),entry:recipeSlot.value});
	    } else {
		    let recipe = RECIPE_DATA[id];
		    let conjunction = handlerInput.t('CONJUNCTION_MSG');
		    let recipeData = null;
		    let ingredientsArray = [];
		    if (recipe) {
		        for (var i = 0; i < recipe.item.length; i++) {
		            ingredientsArray.push(recipe.item[i]);
		        }
		        let ingredients = constants.EXPAND_ARRAY(handlerInput,ingredientsArray,["INGREDIENT","REAGENT","STYLE_MAT","BAIT","RECIPE_OTHER"]);
		        let effectArray = [];
		        if (recipe.h) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_H',{health:recipe.h}));
		        }
		        if (recipe.s) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_S',{stamina:recipe.s}));
		        }
		        if (recipe.m) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_M',{magicka:recipe.m}));
		        }
		        if (recipe.hr) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_HR',{health_recovery:recipe.hr}));
		        }
		        if (recipe.sr) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_SR',{stamina_recovery:recipe.sr}));
		        }
		        if (recipe.mr) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_MR',{magicka_recovery:recipe.mr}));
		        }
		        if (recipe.exp) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_EXP',{experience:recipe.exp}));
		        }
	            if (recipe.war) {
		            effectArray.push(handlerInput.t('RECIPE_BONUS_WAR',{experience:recipe.war}));
		        }
		        let effect = effectArray.join(' ' + conjunction + ' ');
		        let level = recipe.lvl;
		        if (level >= 1000) {
		            level = 'c. p. ' + (level - 1000);
		        }
		        let additional = '';
		        if (recipe.rest) {
		            additional = handlerInput.t('RECIPE_RESTRICTION') + handlerInput.t('RECIPE_RESTRICTION_'+recipe.rest);
		        }
		        recipeData = {recipe:recipeSlot.value, category:recipe.category, ingredients:ingredients, improvement:recipe.imp, quality:recipe.qual, level:level, effect:effect, duration:recipe.dur, additional:additional};
	            speechText = handlerInput.t(RESULT_KEY, recipeData).replace('<<category>>',handlerInput.t('RECIPE_CATEGORY_'+recipeData.category)).replace('<<quality>>',handlerInput.t('RECIPE_QUALITY_'+recipeData.quality));
		    }
	    }
        return constants.FINISH(handlerInput, speechText);
    }
};

const RecipesForIngredientsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RecipesForIngredientsIntent';
    },
    handle(handlerInput) {
        let speechText = '';
        let conjunction = handlerInput.t('CONJUNCTION_MSG');
        let ingredientSlots = [];
        const ingredient1Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'ingredient_one');
        if (ingredient1Slot && ingredient1Slot.value) {
            ingredientSlots.push(ingredient1Slot);
        }
        const ingredient2Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'ingredient_two');
        if (ingredient2Slot && ingredient2Slot.value) {
            ingredientSlots.push(ingredient2Slot);
        }
        const ingredient3Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'ingredient_three');
        if (ingredient3Slot && ingredient3Slot.value) {
            ingredientSlots.push(ingredient3Slot);
        }
        const ingredient4Slot = Alexa.getSlot(handlerInput.requestEnvelope, 'ingredient_four');
        if (ingredient4Slot && ingredient4Slot.value) {
            ingredientSlots.push(ingredient4Slot);
        }
        let ingredientIds = [];
        let ingredientValues = [];
        let not_found_ingredients = [];
        for (var i = 0; i < ingredientSlots.length; i++) {
            let ingredientId = constants.GET_ID(ingredientSlots[i]);
            let ingredientValue = ingredientSlots[i].value;
            ingredientIds.push(ingredientId);
            ingredientValues.push(ingredientValue);
            if (ingredientId === -1) {
                not_found_ingredients.push(ingredientValue);
            }
        }
        if (ingredientSlots.length === 0) {
            speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_INGREDIENT')});
        } else if (not_found_ingredients.length === 0) {
            let recipeIdsForIngredients = getRecipeIdsForIngredients(ingredientIds);
            if (recipeIdsForIngredients.length === 0) {
                speechText = (ingredientSlots.length === 1) ?
                    handlerInput.t('RECIPES_FOR_INGREDIENT_NOT_FOUND',{ingredient:ingredientValues[0]}) :
                    handlerInput.t('RECIPES_FOR_INGREDIENTS_NOT_FOUND',{ingredients:ingredientValues.join(', ' + conjunction + ' ')});
            } else {
                speechText = handlerInput.t('RECIPES_FOR_INGREDIENTS_RESULT', {ingredients:ingredientValues.join(', ' + conjunction + ' '),recipes:constants.EXPAND_ARRAY(handlerInput,recipeIdsForIngredients,["RECIPE"])});
            }
        } else {
            speechText = (not_found_ingredients.length === 1) ?
                handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_INGREDIENT'),entry:not_found_ingredients[0]}) :
                handlerInput.t('CATEGORY_ENTRY_NOT_FOUND_PLURAL',{category:handlerInput.t('CATEGORY_INGREDIENTS'),entry:not_found_ingredients.join(', ' + conjunction + ' ')});
        }
        return constants.FINISH(handlerInput, speechText);
    }
};

module.exports = {
    RecipeIntentHandler:RecipeIntentHandler,
    RecipesForIngredientsIntentHandler:RecipesForIngredientsIntentHandler
}
