'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "c5b1b88bd913bc39085902e24e477a92",
"/": "c5b1b88bd913bc39085902e24e477a92",
"canvaskit/wimp.js.symbols": "04c101a7c3fa4a746530dfeac4454914",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_heavy.js": "0295b54061e33621fdd7658234588ee3",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_heavy.js.symbols": "5fd20b278f5a4fc136132117750e767c",
"canvaskit/skwasm_heavy.wasm": "d93bec627f040de8d0c2f69091903956",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/wimp.js": "fd6185aed0230a04a3aacc9ff9692f7d",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/wimp.wasm": "28ede597cf38defbf0a6ad6f5d9bdeb0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "010f0f4790824d8ab0812402afd48763",
"assets/AssetManifest.bin.json": "99a97df8255cc1642883bc1b4df3e618",
"assets/AssetManifest.bin": "e22653ede92eaa0b547b48b0c8b2bc0c",
"assets/NOTICES": "6a9067a514357b2a63d796347d8ba7aa",
"assets/AssetManifest.json": "e21f0de3e9ae975381dc3c047df17ba2",
"assets/shaders/stretch_effect.frag": "860208b8cde709357b2dd8817c942dbc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3c398d77cfb7085bd1f659ae11388780",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter_bootstrap.js": "294bf58b497c227dda9ee3ab76644f4b",
"main.dart.js": "4c1216f556aa367a0fc5227ffd77b7eb",
"version.json": "b4d595260bf4fce073328f4235045a35",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "3257415c56212318f3862373699120d3",
".git/index": "ce282da6a4af4af18fca5abfff1bb0ce",
".git/FETCH_HEAD": "b50573a2ea34a6cedb521486a68b30b7",
".git/logs/refs/heads/main": "ee0cc8654e00df21eb4ce069f9e739d3",
".git/logs/refs/remotes/origin/main": "8575409b66b34c7b67398c9d9e837520",
".git/logs/HEAD": "ee0cc8654e00df21eb4ce069f9e739d3",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/7b/6ad5335558557491009db13081ad9ad712c390": "a78f5da34ebd05420ab88a57fc598be1",
".git/objects/84/0751741b6da45b30f82796d166ace17263e01f": "c7fbf208cae86d33a14c96f0dc05f585",
".git/objects/82/bab5fb74649401f0f20668294b17ed7820ef1b": "268e62c48cb6682535949daaae85f501",
".git/objects/da/3ac51219964ddce076395c2dcedc2c140c4a81": "14a680268afae1e306a4dd2811384cf6",
".git/objects/d0/ef0c289e531e4f8aa0986da75a5df8bc503204": "f12b528c71322bce636437b663920aa5",
".git/objects/2e/cecaf83a2e46be5952cf18f249003547a429c7": "5605f1964729dd2a6e55574bdbe5a45b",
".git/objects/54/5919c1b517a20efc975bb9304cedd2d0850af2": "c9dba75b2d047558f3fb825662b00419",
".git/objects/75/ff0f2cf9a7a5a2ac9ffc0ceb8df3127148ca1b": "ec7cefe17b313fd82d655a298d01433b",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/caa452b53e10c17bfea4d0f03269191bc70785": "fd4299c9f55e9b5540277f1e9db47eb2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/72/757fe869a6d74a4c35358ead456be1d57b517a": "cd39d813d0f2ad6c0b33af55ca0d21e5",
".git/objects/70/476f6835033d6494934aa08ec8266f141e069b": "016e848b28d2dec2ef41e6ffa9f14f3d",
".git/objects/c0/5fdb76d2926c842c17925893a392e5c1893357": "935725eac40c1dce62f9a1875ff69a90",
".git/objects/c0/fe95f9d07c4f5bfb1a4100d94c78377a520b52": "b4659277173b019193007652bc2a1278",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/fd/d9fbc1391cf3c091a912c585c6557601aff856": "8dc4220cf983ca29a360e9c9e4cac45b",
".git/objects/dd/15b940a2d1e25091260ac3b6bf63f8f09f5bf6": "6c6d32daec907a6b05dc515b04befdcf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/d7/a2e8f88273253b4617e7e09a23d2cc6d61084a": "ca83166ec3217b47516a37d64cde7ffa",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/5c1aabcbe130c8cc1aa3636958de07ae02e633": "c53b368a3981639df9b7de6dc13f66a3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/66/2e1618b4ec289e31c52597278e5dbc016b41ef": "3419739f96f7fdeb6c86388951abc4c3",
".git/objects/66/69fa6136d07876aa1c2c4bb9490e01b3ebc865": "c796105711b2b7ef0e8b627680606438",
".git/objects/66/de3c549a494fbd8bb308e7f74f4051c04d30ec": "e7df7c6afc09b1ff8c3317c1b5da995c",
".git/objects/a4/f58be35f7fc52061533581c6e9439c5e3146ff": "08cf26339b02d2999af59c38d5d74c80",
".git/objects/04/266d84fed97ff02ddc8c47304adae9a7fe0650": "5b7b62df116a209a4b0c3521a4f86f9e",
".git/objects/f6/bf363b0706081f2b8660d995496ded40a17c06": "74d1ff68079dc68021ede4cfb75440fa",
".git/objects/f6/9a5d88427998058707f5e7a5de8ad4e7fbd5b3": "3efcd92a22e526b8f3ec688864c9b872",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/de/dcbb41c7e143940dbfe2eb5bae3ba6264e247a": "eabc353bf4bea5e8a711708b6390b3e1",
".git/objects/f7/c93174d010888ab6bb760b5e03be5c8a7c11d3": "cc3784e94b0003531ce93b93b2a90918",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/5c6308cdb49d6b936469e8d63425e447d111a8": "df105d6450256912d7ddb4f96c8521ac",
".git/objects/b8/005d3e1ff265ac6f56c4f74530abfba3e18dbd": "90f5b1180ea01bdcab544c69983b72f3",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/783c1deeab57c05a1d689fbff30fa89a6f100f": "8246423201dc7e7b7f8692149b37f822",
".git/objects/c1/65102a016e31d68692e9986bc2c9c56421fc12": "9b685dab796b3e224aeb9b3a69de569b",
".git/objects/c1/4dea26909e24308cadfb5678608bce59a54789": "d863737a056ef1a7ccf36ed9a0af2709",
".git/objects/df/3ff301dea1b0974b411b296c25ab999bf44418": "9ac749ba46a019f21060bcbf3015dd54",
".git/objects/95/b983faff5d2c512404866c4820aad10908a770": "4dc7db6e123fb8bf9ee49f46ab748606",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/1c19c09c87db807c29ce98c88117b69c0b71cd": "c907509709b723d1f0b3db0818ddeba3",
".git/objects/c5/86369a34c3bfdf349e29e2233524c68601e69c": "36e6f6a633f41752fbc775f2f6615794",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/a5/597a45408ab59419cb5dbdc3285795f6b2cd9f": "6bb6e676786dd553b9beffa762a7e2fb",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/59/d107c3ba749e8da058aa25fa6736c5d40f7a3b": "c9792a589a7ab135c83683e8f55ddec8",
".git/objects/67/da44d3470c25d34b60cab89e82203487c24868": "0d30ae920d40158d22876f8dc51bec88",
".git/objects/49/c9e6cc669b2d5207a1a1cf2067707b780d5c7b": "25600c0b19a55ff26d4f216567fc7cbc",
".git/objects/76/083241d59ad0e3fd4129adb70a0b79f9cf6752": "8acd5521bfd12fd1ab55d03efd77e2b5",
".git/objects/76/af2a5e85b19ba3b9f9b9ce5d788de3f49b3a07": "73c1b2d9fb7c5ae3d267095050415fcf",
".git/objects/40/b402477f2858b521b480461c20926572f1b813": "953bf72d770266885f9917f0a67f52b1",
".git/objects/40/4a9921ab7e35f6fe17148e62b718cd1ba18d0a": "8505dededc9a96bd0ce341c71c351ba5",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4a/c55209a20ef7ac65f2e67320c59e309093e301": "f301bcada6d48f07a4b968251419a070",
".git/objects/c7/735e526a7e82c82e5c00c619f7d304cde9e1b2": "b57932e0aebc296b84cce00a220ac62f",
".git/objects/f1/4018281cd81de3c252bebbc27f0ce4692c0bf3": "1133a4afeaed36920cfad886789fb862",
".git/objects/af/d43b4c14c213b18d6217f4a569cae63f1f15e0": "3a015b43caf05bbe66396b8eb28d2c67",
".git/objects/8b/1cf0e7b4fec5425337608f464c68a48e77ee60": "cfe995c7423119e188dcaa76d5c844e3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8f/94c0d574ccbfdcf53f6371761134b021dd0af9": "ce5501f14db72e67753174ebd0df33a7",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/2bdd9bdd51190908a388eca13962b661400580": "d73659dc619cea6e113ba1d917664576",
".git/objects/b7/d99965b9cc5b921c45bb2f375a7e72961a6aa8": "5f1808044f3df9646c040417018f3d27",
".git/objects/b7/c8936ea5046f92212cb069ce0a820425383cfa": "644583343035eaa2dc1d1733b0dabb9d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/a2/208334659e45571cb364b288b1aee674a5005f": "6d0b3997067ff039c9c05fc4a3e70da0",
".git/objects/6a/555a4135022dda8fdfe3e83eb293f5d1c345ba": "d6a14c80800edac5690e8fd30eec48a3",
".git/objects/17/645b58bf625e6ab74f4430a3ebe6d0452c6bdc": "f11263713d5e1f7a25afe668a4c745f0",
".git/objects/17/fa746add0121ea0bffc9f5194db51f95cb16dd": "114df4ee66fe174d0bcdd6e117e44da6",
".git/objects/b4/bdaf4e09459982623da0edd1ca4bef62171716": "5fd34f93ce5c7f14ade871a86e0b3b70",
".git/objects/b4/845533eccbc5851a4b6290d9ab550a2d6288da": "3955c4599253ee1fba06ec0d4a588ef1",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a8/d7d93ef2fdd738851b17d4781564e2486ac289": "9a5ac0dd070af16fa1a1cef2e99737ed",
".git/objects/5b/2cf802efabd7e50cb5da26305add4233bdebe8": "dc4b0910f66a3d3dd7c2a50ac152f4d3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/9a/3b7742bbb248ecdb17ca96194a3c9534dbc7c4": "777f1defa24cc0290777a925cc3c29f1",
".git/objects/1e/822d341204c28243c07765e9049f3925bc6458": "71cc7f39941c491ee8c5c2673393d3e5",
".git/objects/13/1b573920a28d73d534accc414f64e3efc27e7e": "05f73083384fdb8e89b2cac276b38860",
".git/objects/83/ede00987570577e22772c5ee05f8846934915a": "cf4500e7ea5cf7ee9a2b661e418d517d",
".git/objects/f8/6be6bb834e2aebd4928d9953978df58996ec68": "f7e2677e05b23ea5610df1d0f0230dbb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ff/fca7878462e67fde905dd74392fd9a79bdcf31": "53b60473556ba8b045ef60206e858c7d",
".git/objects/fa/552ae947c0b9f34c0e80caa2d158eae7234496": "bc72d9dd4d9015febcff1eae148b3455",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/08/79ed021fa3abb24d40ca8e7c3f3f9cfc13d603": "4c30da618297b14437d4125119682b8d",
".git/objects/ef/ba083986da986dd4507e9c3856b61db9eed80a": "47caf09ac1ee07316674b0a81522690a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ee/9fc99078a3ffed30ba1f0bde7e17de8f522553": "ade51ea7f7730514442e4d61a8c69553",
".git/objects/e1/6af6812737b48b2cabe4b6c0efbca613186bee": "652a3cd3ee3b4bbfd043525cbc45f7e9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/7c/736c86afe51c38ad8a43d4c07a72f90633346e": "142d085fa3d8d4a376f6f3ceb1a73fdf",
".git/objects/52/7b665b052f9cf5f47314ee9406230e8d86aad9": "fd1354f45879ace3f7c471e9c358d463",
".git/objects/4e/7e9044e5071ce290633ff3cf139e32ac0012c0": "33ace5fde84a17e24e6474811c06e306",
".git/objects/bc/5ea9c20991cf389802d5924b6716395bcea66a": "20b5c0c0e36fd5721ea0a9e1e0e573ad",
".git/objects/bc/50dbf0b00adf4f6890966a4ee0d5eabc9b42a0": "322eabc621c8cce2ffbf4318f4cbc126",
".git/objects/5c/687ecd25a108307a8d1d800972422c877c1356": "ed6daac4cdcf0f412bbb2975d787e01c",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bf/d9f4628b9a54520c8cc87c86b31451ab45a04a": "6d58bb099a57f434cafab9c11203051c",
".git/objects/bf/d1a8cadc32a271ad3ff6212be7bbd877862b11": "24efe6a14db5483409b8ef200357823e",
".git/objects/bf/d6a61be8dc677fdf2f92c17291ba451d70e7f6": "7cb2c311e1452e8eb06f3084a17846f1",
".git/objects/ea/644298b14798dcd61f6382c82e37df240d49c6": "deae0cc79bc78c090817ff6b071c7128",
".git/objects/d5/30e2048e4cb33c2c81d0dfad3ae506b3418c80": "c623bf351ddfa086dc11b2f8e60cad83",
".git/objects/ab/089d006d6710c14a0cb5efc85899451d917865": "06cce85f416cb7c02344504853910db2",
".git/objects/b6/fe8fceb8c67b1f870cf0790ad33bc0a10cea81": "081972dffa826cd52b5e4748359d9096",
".git/objects/f0/2f52cf459329d3812b662e5f91dbda6110e6e6": "755f4cea985d11705480cefcdb4cbeed",
".git/objects/f0/5aa4b22b9ce0e755d5137acab86484d2fe073f": "f03f4df39849dc66eb1d8bd9022795c7",
".git/objects/c2/0fb2490958d6f201d1d2469f4dbf35443ea282": "d34c1ec376df41529ad614d86beffd32",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "6dbd751087937d31c1235c64a12d7570",
".git/refs/heads/main": "8c10cefa72cde36badc4320561c7987b",
".git/refs/remotes/origin/main": "8c10cefa72cde36badc4320561c7987b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
