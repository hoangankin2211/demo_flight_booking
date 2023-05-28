'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "229390b342ec5d77de834b45c3558411",
".git/config": "6059a43cbafebd196a2600cceae0eac6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4127ee054a56a0cf1cb41b5f06601018",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d564fd5429737e656e498e5f205cb52c",
".git/logs/refs/heads/main": "d564fd5429737e656e498e5f205cb52c",
".git/logs/refs/remotes/origin/main": "8d2f9e708118a1becf76d60cc7b49009",
".git/objects/00/1bb4c865c2cda77a2ab7a4b1f6483b7fe1dac6": "043f177329a2d99f4124ad206ecf5786",
".git/objects/02/87faf295a50bfe1fe73ef1b34be89b8a43a0f1": "9e9dc1a12bd77dd56b9cfec344e581e9",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/659ff491a4cf9ebd9b0dbfa830b2c94638e706": "b81e8015db51e70383cc414e68a3f629",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/07/6bfbd78f4c28a0253d45242705b3a36f8d32fa": "c6509cc04f8cf10c9556a53953d2e140",
".git/objects/0a/5c6beda1681a6ab65129a8280a87540c27a0fd": "0a61009c8fc5e559b100ef7d8698793d",
".git/objects/0a/63e6dff7b08730e7431701b0d795fed494b961": "17286b510593e4930099dcd7c8f07889",
".git/objects/0b/04624dd79abd44c5104be0d27b93764a709d5c": "d2c52f41767406cab4f1fd730c7f5fb2",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/c3ac9c29cb870a141d10dd6225c06205c17872": "275c5612ea18552fe336dc16c28958fe",
".git/objects/11/4e1b50d0996d76a67f68ce2d3c9beecfd094a1": "c60303a2ea42d1dab014b8d417f10d97",
".git/objects/11/5b40d634c18056047163b8a108d8efed9d0c5a": "340e83159bd9526609c46ed0498fb9ff",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/83b2a64665a80e415f194229057f399088b20f": "8dcfc439a655cfce087c5c1d2867a4e1",
".git/objects/1a/7bb97b352942141410638aa04028c1b6d8a75e": "0c092328c7501c0589eec5cb5cb33ed8",
".git/objects/1b/caa8761dcc7f77e9cb073613d8bd660fad8e84": "458f9c566163777abc5f4554cb434df7",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/9604046b343269618c3a857bc5c00238db7171": "203cb97ce9b93de601536870c11ef549",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/22/950cb8f70f4ec9860ed65c00e951d836e803d0": "2c6f5f78ad5fbc255a33c77d32b99886",
".git/objects/2c/fc371848dacfd485624076a388f3057a6a9d39": "930e578eac584eae4e3030edd49e2d17",
".git/objects/2f/a249950256c66441a23c787e469e8c0336f027": "0ad57e35a4974b2e8567268ff656c5e2",
".git/objects/30/4c5499e9221632476a84fbf43c377bc89985ad": "dfb759f16a4da7233684416b7e2346b9",
".git/objects/31/cc22a0236697feaadef6e74742bf181fcf0998": "d7bdd22fa1cc5cdd71c138354908d79d",
".git/objects/32/541afa61007662147e97895588188624877264": "4d310e61ee05e3b17364343fe61c1a0b",
".git/objects/32/a2ad9b1904571ef9e70de8ede09e15b4c6f1c0": "a1f11ea8a40e418b075d153ba34db25f",
".git/objects/33/6c56ec0cf2e118410440df4f81bde7fc464b1d": "8bd0f670368139f7292b9ffef26e0396",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/d66cddcf281b3eefb03c483f067b10456b6b25": "a33fda283b47de5d9431377bda48b65d",
".git/objects/37/32df6f71bc9f358e5a7b2261d24d328f561f96": "4a4f3549edefb42c5638b1454e4f73c6",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/a019ca27c2e040e0f10fc7e33f22ace4b10657": "a995b85fa0745dcf69c0f86a4fb5b09f",
".git/objects/3a/225cc207f21544ce209be67c70c76bad30d7a7": "045059d93119f6162923e8c63017014e",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3c/81b4d021a01f3dec238929809b305709c8c431": "b02132a71ec54b9ce4bf374db8c0a87c",
".git/objects/3d/6fc7b13446a595daf3658d67f822d4b222d936": "6f7cfafa3b6bfae25b420338f0aa9d42",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/09aa8f9f4fe4475b3a01950a42755777cac9f0": "c4a7599bfa71b8fd18996aefaa16aa7e",
".git/objects/43/09b43663cb698a71d61eee3722e8bb6c8c67f7": "7575eff0718d62626c39c01e7fc4a552",
".git/objects/43/3dbee950c916f3aa0f29b08fa4e30bb414f555": "20307126c195f0cc3b13637c1b82c4aa",
".git/objects/43/7b1157cb4c32560095c6d40accde2956070c1c": "9e7e2f17a3467d973000e4231368942e",
".git/objects/43/fb02bd8029c518493cb5d3f90c6bedeb867a5d": "9bf4d0dccd1bf85d45149594c892d8cc",
".git/objects/45/88dab1accfd58ee2f854c3c3c4d1efc667fea1": "7fc65771dcafa220aaaaed834663d363",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/fd5ae1034750629ae9448cea30b54054777c58": "5fdf5bdd99673f808c3b2c9a9f140bde",
".git/objects/49/38325c7c74f51dfbade30713d4b298d26f65e3": "d883ac87beff6d182eefcf2bd6011561",
".git/objects/49/4d8f054c301731f216faf63fb70adf5d60230d": "67851219f894ce3d444077745e1ccfc8",
".git/objects/4a/36e0e06236b49650b951973415751f199447f4": "7688bbec144029b321c6609162c51372",
".git/objects/4a/ec674597db5aebea87116d2eabbfa40fbc079a": "83421c11346c1fdad8897a61cec90748",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/1e0a426948c3ca9ed6a5cc3a766efe461dea39": "17407498bd0059563cafa7660a6bc079",
".git/objects/4f/e96b2f444b42463f6d13f01f91260be0c83fff": "683b2f4b6f4758d2091b9523bba69202",
".git/objects/50/46b7ec4420bbdaf73e90322e4475ddad5c211f": "433b053445334284834aa32b29694b73",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/348354c2916fbecf10f9c17e08db7bccd96653": "be2053bfca3824391becd9ce3d15c455",
".git/objects/52/a64f42ed4cf6bfc147dc4a2c20c29abe730905": "5d3cad7ca4fa9594e8c43706d70c3125",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/bc1a243b045557db92d6ac85605c3498719cdf": "febd1684c2b172f1f1669e3f3a5f86fe",
".git/objects/57/001882c9123c396ee585899084458da35c70d3": "259c1c5b6b0f78487365ab8d667d52b0",
".git/objects/58/4e4219636256a4c1942f1dc280def6787f1a31": "3d83afc529077c728a83525054e9f9f0",
".git/objects/5a/6f1e18f0df997a0ee561ed997501f461e017e8": "a67c21e56b147d4a7c98c2f8ef32fa47",
".git/objects/5b/d729bfecd0ab90f71fcfea4329a938a2245455": "5e5ec66f47d33a36c2323817f64c8fad",
".git/objects/5b/f0f15eb970fde8d8394977362332097d0733c0": "5ffef660721f48988c9caae63c6b24d8",
".git/objects/5e/88dda5495d9342cdc340c1ad98e8d1500df33f": "b387d64db4e16c452c187c18e10ef969",
".git/objects/60/ab836dad8da8c8b58cedc9b8d4bd32c02be1f0": "a0e1aff4de49426842a3ee000dfece76",
".git/objects/60/e39abe4d6108fb6ae24025e572f2b801b09e28": "e15c76b4274dc5f923e4aac7d36ee334",
".git/objects/62/2c9c6fd676775b6456341bbf61c31222525d7a": "844daecba4632e60d7485e64a18a2e76",
".git/objects/62/6edccfc0e86d570157c261a021b7be55c1f86b": "c137752128e7b39a0b09e00c5d021659",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/86ad742e3dc38d0155cde1b9e71fdbaee69916": "6a26c74274105589800c323c4737b5f4",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/a25f1a2a5b4881ab2ffb65cccbc540acb917da": "d45f0347ed87b5e25c80c509c655e607",
".git/objects/6b/c760c0ab7e974c54429872debea60ea459f50d": "d4b3235829bea4bb1740b678d336fb39",
".git/objects/6c/666ad982e4c6c28cea3fc70033281e61548dec": "bd73394930fda217b7775a9447d6ea43",
".git/objects/6c/961e1cc944ee69e76b98bdc97c549fafdba31b": "fffdd8f90bcd184fa508766d24fd5035",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/6e/bc0e49c0f4778a26e5bb2322c567923b04c548": "f8bd8fc7491661fbf7a74c37d32bb0c8",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/73dfa827d4bbed47fe6164764a98bbb486e97a": "24f38f7adba76264abb38e75b06cc99a",
".git/objects/72/06bdefb9a9b08e04b90cb0afb44df2ccdcdb12": "83523d8c5cecae1436eb5bad4fee584b",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/51871e5f339424fd33ae5e49dd5838386dd747": "d5b70992f83c7d69d4757a3cd4140372",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/21f832323426d0480253b5ae966e6a66ce0de1": "b2ed3d5cce327757a942dfdb1f813b70",
".git/objects/80/ea8061b046af5af78623788022a3bdd9f79994": "76b11b4e5efcdd1ebbbcdcd298ff6011",
".git/objects/82/de7a38ebac5e7f458af15f410780022fc6dcba": "889c89f2cde1c4631c21be560e2498e4",
".git/objects/83/1d1eb3959d7d9488e09abb15ef5d765cf90c5f": "c1687481c327751fcf7801904b1c3fdc",
".git/objects/83/b2937e3fa4084c65619f3869fb71b5e6ec0928": "036035ae6138fa76b90ea5dd7918070e",
".git/objects/87/cf08b2ea704ada5a06159c57a684b2be3b7119": "4005f9d98bbde7f925e897a60030f330",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/948f9f0f931be5c2dfe4ce8b63aea0f5726f23": "1a17b688ba103cc8a140d70b42ca7fb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bfec9c9d9ccf0d950276966b493cfdd2c4e639": "16538816fdaa58110b7052f2cb4cfbc6",
".git/objects/8b/55b486dd128c375a51aa04997151314d7dc6eb": "0441c7605d7c0a6e4bd718ae2bb8707e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/ee223dd1c6c5769377060f2abf4d178fa12c9e": "96febf1a89979466434631cf3d1f8c09",
".git/objects/90/51d531600188f30f501965f24d57862dc2badd": "2ea4d51d3f68db303636f095ab8158df",
".git/objects/96/71e10c14529c1f64e9d643e0b52202ae8ecb06": "68898cedf754c4c4e7419d1ef27d988d",
".git/objects/98/2008942a6686c5071dd98b40a62500f275f0b6": "da1d7b43f4adb613182fc7e7f05a3337",
".git/objects/99/0857de8e03f4db6c2e1112045dfa37ed2d675d": "c6c0a2e381bb5650bc0bc39a55a42b2d",
".git/objects/99/220b0a811289e6b1281174e93fe7dd6e521d3f": "21f42ec444fdb151e424790776a7e985",
".git/objects/9a/e1c8293e8e11a4573811052dbef7d7cccf029d": "79843a312cc1513e7eb2f6df83d47b13",
".git/objects/9a/e2bd240fee41917519b3d57a2818606e3d9de2": "06c4f51cbb3b3e5f710106bc89885c43",
".git/objects/9c/7d2f0b9f5fbf86cf3cfd6652c1f30366434b7b": "630c903bff125dab267153d512c99cf7",
".git/objects/9f/01e516fc14c3a516f54d65fb7a92d86815f1f8": "f0573e7e0449208bf7a1e5cc27d9c9a4",
".git/objects/9f/48b90a713135e4b5078138652bf2311c6bda53": "7e3831630d2d9c4d60acc8789808a7ae",
".git/objects/9f/c3ddbf4ba635558dfe1a64f430bb90a4e21600": "45653e927f29a256bdf0d6c17be5f609",
".git/objects/a0/a1440097c9592b4f8f9e74fd3df983c29770a9": "eaeece647ee7bdcecb6fee0697b461fe",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/573e526ba8e13ff9f6a040ecc968e78d54bf6d": "f980acdbda6b31292bc72bec1788042a",
".git/objects/a3/381283f7a44800c01b1579063be43efd3696b4": "8f273e30d4cc627459d688da44ecb487",
".git/objects/a6/4cfaed752ff0d069e3664d015a5b5a1b097c40": "1ee81c78d82aba6778ae5ffcc70e106c",
".git/objects/a7/a5f740c19f5875b65722757baa921340e7283f": "dd7f457c124033cb27c967d54d4f2b44",
".git/objects/a8/2f99a420238ef06c8b4b726d3eb3dc133d2736": "231f1455b24ef8957cc34ee08cc9edac",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/9b8f3c3e9f289b3fa1606d149a56e69b67d0ce": "6f0b94975398387395054b5452138d47",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/76081712d660dade4f7c970a488defb504ec21": "6c99482c3fee7e3c8c326c9ec221a9a5",
".git/objects/b5/098c6def858e5f0dbd586217b0782d3cfd7460": "1d489061105248072263d954e104f985",
".git/objects/b6/bd3187abd8ab9c2bf36edec80f2bb7febb740e": "7d18a61bdf01353afdc76356edf0f355",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/858757eb98286718cc526d245ee2ed50e3b68b": "3b20615aa9092e71e91ac6624e0a8649",
".git/objects/ba/d7e7326fc20a667ea3a9e786def81df0ecc592": "c053e3735a027012a00dff5c568a6fee",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/2f398d553136292fd9e51e3b08f3fd1f7aa4e9": "55835cf36d083ab9f3500ede576dd092",
".git/objects/bd/a28dadc9a3016853c553d68a3c876c0d15ff65": "009dc2b35c22968106929d5252e04ce0",
".git/objects/c3/72cf11a720883f172202dbbb2492d6b0aa682d": "3551973c88a45d0ad03baf05980daff4",
".git/objects/c3/f1b452747526382fdecbe3aee780f79b352977": "ca02e964dd9b226b669026d9de72f7bf",
".git/objects/c7/92d03aa4d2d53d287d2069e142fe9a41309fb0": "2c9ad7586b2f34c2ae340713b3887d16",
".git/objects/c9/30bdcef786d5031314273f99f697a3123da68a": "738f2b6f2953621cb9eeacee02b4990f",
".git/objects/ca/0bbb6569d51021125875d40e951ca09e5be5ca": "a6c6b5af18511e82330ce3649aa04f57",
".git/objects/ca/4e343a1ac8fe3bef2114b77be17e66c9bc448b": "80da56f0976dbcc2af916d85f30752c0",
".git/objects/ca/617c6a510804ad542792be8e5cd886e9e29085": "aa1c40aaf71f23692766b1e6b59e1f32",
".git/objects/ca/d7e9b398e06cee1dd764ed3257e3c1627e5b6e": "c95db2b50dc281f2f156c103c3c28649",
".git/objects/cb/72405399c27058f2b6fc1f141da9203534dec4": "f719787217a88cb2c9b5d2a57dbc25b1",
".git/objects/cc/f3399bdf58dda75fc9070f9ffad9b15fb39f37": "670c34760ddccc764dedbaff6d850658",
".git/objects/cd/eba73f88f11bd50f7bbd3a5aee7c01cbba921f": "fc59a4c89124ac4697b26a1858351e37",
".git/objects/ce/129d878206797d881f8b810deae9998725a74f": "4bc14aba86650a29317061fe40a07328",
".git/objects/cf/043098b42cf9a7ab189491f7b0484bf23ec4b6": "cd255fdae3f5c425f1ce13186fe2480f",
".git/objects/cf/5a1828d30fe969ec598b7a2b314a76d0eaa365": "2c05b679ed13efed808568a1a0265465",
".git/objects/d0/963fc758ae5874ae99a8869dd0c44693b2ac73": "6fefca76633efd7cb031f651b67427d1",
".git/objects/d3/b92cf98bfcf014a71d1e51b467182e78e7fa5b": "1e178f519109a6658a5196849e4b1759",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/2a857ffc8194299dc44b52e6609af649934b60": "5bf6fc4cbbf4a64c592e7c179de5e645",
".git/objects/d4/adf0eecde64b8c47e8ce4a41df84e26559ff2c": "961a3b438993c911b13a032dc5b56cf1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b9baa209089d72b23b205aaa3d69f50609061b": "4ac21c7d8f06b66c04295b1801763dfb",
".git/objects/da/4dbea8544736bfa55954513816c5576161941e": "57b0d1510dbf5513ccd308fcd886a34d",
".git/objects/dc/08437c02c0d635ee75455e1bf8c0466d08123f": "2090cdd9034f8d78223a3c1ab5d44ec3",
".git/objects/dc/4ebd08eb0037ce4cea581d7e957906448fef12": "9b45947ea59a768ebaafb9a140f72a25",
".git/objects/dc/e208d03f350dda394d98d0ff7476cb111f5da9": "842abddfc913da349d04ac2a3e3ec5e6",
".git/objects/e0/b7cb08f3d3bdb7f9895492e6a135300e060f8b": "95a0ec48c4a86ed87db8d7d0f087cd10",
".git/objects/e3/4028dd4913aefbd6df09937f367359a5b21e82": "829806547a1b4efa5b123caf04fff7f7",
".git/objects/e4/88998ec79ac8e5bde78cf3ba1f4991d5e25511": "41e1351ae09919a6a33730498d824ce5",
".git/objects/e4/df8b4229a3ffb8f411d2817b7e7d3dae172726": "3a8e94191658a7edf624c36c2b480410",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c1bb237cbbd97e95e48f54c2684b0d78a13caf": "709aa8d6f39ec843e5a262efe7f28672",
".git/objects/e6/d242e774310248789f499be7edca449b3b4464": "c0c65d122875525f0554bba4b06af166",
".git/objects/ea/74e72ca0ec8afbc57588fcab6bf1f151bb18f3": "ea6ef91fbd8d35681b5c62244712ccac",
".git/objects/ea/97ce09c832213ea864358616e6434064f0af8d": "cb8dbc1cd11560c52f30ceb898b52540",
".git/objects/ea/b2ea0ef899a98c362ff73dff173ad9c52a40f5": "94db6efa958296de18f4e23a4fababaf",
".git/objects/eb/4232a0c2cd4970128e5271fec45b6868fa2eae": "82bdd55a92e7f57744f34ab6ab555ae9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/d0735da401928b91b51b32167adcb49d551c08": "892c1d528322b13e033b6c75457c4b0e",
".git/objects/f1/14558620d2542d2c84aea6f565887b36e0e831": "7278bc7c27998cd4fd5adab0c7664fb6",
".git/objects/f3/c1559ec7f7353d50be555554bd1715170d1115": "e756f75d544838f0db4e7785a0a24cd7",
".git/objects/f7/8bc1c6f41d8c18c11b9a4e6924fb27f1817d8a": "08ebee30b30f7031d2a59c251ea09197",
".git/objects/f8/a43f2b203054676b64e38e2b78af5468c39b6d": "c74b50a853cc4b1a5f5dc1f07b4a619a",
".git/objects/fa/b3165ad59f6890afeb58f5dfa17a85f062849e": "a7d864d41e1ea875a4a713180dd6d960",
".git/objects/fc/79f46ee2f0bc5e0d1710f2c52f6c5999e4b96c": "0ef67297815a1b86f8c6b97f5e88a79e",
".git/objects/fd/91070e30be34143d892c80a6b4c6b02d861ad6": "513f14d4703e1fed54d44a76b59bae56",
".git/objects/ff/0371c234807d070e5ae5523af3c765744d2765": "9be066ffd6a53ebf421d4ab0b95e490f",
".git/objects/ff/6ad8ea29dc9e9cdf62226984ac35daacbc9625": "fbf0484fdace9c96fd7559cc2508e912",
".git/refs/heads/main": "d4b02b14bfeca657d77a9a35ec9fd1a7",
".git/refs/remotes/origin/main": "d4b02b14bfeca657d77a9a35ec9fd1a7",
"assets/AssetManifest.json": "9b3c4862610b12c14d3bcc58ed8b005a",
"assets/AssetManifest.smcbin": "062126c2e3be2d3078e914bf9b8c2bce",
"assets/assets/fonts/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/assets/fonts/Montserrat-BlackItalic.ttf": "d9b6ba595b059fc5d48e8f52c30f73b3",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "1b38414956c666bd1df78fe5b9c84756",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/assets/fonts/Montserrat-ExtraBoldItalic.ttf": "52a50ca037f2f96fa567404dc3c5bdfb",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/assets/fonts/Montserrat-ExtraLightItalic.ttf": "1170df5548b7e238df5fa14b6f1a753e",
"assets/assets/fonts/Montserrat-Italic.ttf": "a7063e0c0f0cb546ad45e9e24b27bd3b",
"assets/assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/Montserrat-LightItalic.ttf": "01c4560c9c15069b6700ce7ad2e49a9c",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Montserrat-MediumItalic.ttf": "40a74702035bf9ef19053c84ce9a58b9",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Montserrat-SemiBoldItalic.ttf": "83c1ec1f1db9a6416791f7d9d29536f2",
"assets/assets/fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/assets/fonts/Montserrat-ThinItalic.ttf": "3c2b290f95cd5b33c3ead2911064a2ab",
"assets/assets/icons/airplane.png": "39cbdfaf8a7110693b4915295256e05c",
"assets/assets/icons/atm-card.png": "8b0039c4cf28b1c61243ecab434ffd61",
"assets/assets/icons/barbel_1.svg": "6f15e01262474fde22ae6d4603cc5425",
"assets/assets/icons/blocked.png": "66eca91800f7960418ac42d91fe23ebb",
"assets/assets/icons/Calendar.svg": "846830ce4bb266a7b0ad089f08474b33",
"assets/assets/icons/calories1.svg": "5102bc062d0102a23683860b7da79d62",
"assets/assets/icons/Camera.svg": "13bd92bc1e0cbe562b0cff750c2eae5c",
"assets/assets/icons/Chart.svg": "7d4acc32272110f79cb2dd35106f1917",
"assets/assets/icons/direct-flight.png": "099983c426882d1c5dbac4bb9f9ffe0b",
"assets/assets/icons/Document.svg": "ef739bc66e1667200c93106366129889",
"assets/assets/icons/fare.png": "b2b07116ba0fed94ff904515c47876f1",
"assets/assets/icons/Filter.svg": "087b7e1ba32d604081b2ae4325306abf",
"assets/assets/icons/globe.png": "9df3a2d0314f19cd4e3d50876deab4c6",
"assets/assets/icons/google.jpg": "d3be0aac5b59064d503df82d85cef889",
"assets/assets/icons/Graph.svg": "43427877b98a01a620e15104d5d2738c",
"assets/assets/icons/help-web-button.png": "41349b20dcade9a639847b531d507e3a",
"assets/assets/icons/history.png": "2efe7b8899318a0f751733f027fce20d",
"assets/assets/icons/Home.svg": "41125f2ef08f832eb952844f634701ef",
"assets/assets/icons/Icon-Alaarm.svg": "58c54a1f86c0bcb1564e70f056763f37",
"assets/assets/icons/Icon-Bed.svg": "54668c6666001f54113eb2f7b2603c8d",
"assets/assets/icons/Icon-Bed_alarm.svg": "ccdf6a63c9001e1279f9e8947f3029fa",
"assets/assets/icons/Icon-Repeat.svg": "ffdb2b12fb1362cdd25b0fafdea1ca7f",
"assets/assets/icons/Icon-Repetitions.svg": "f743048d6f1e3788e175f5a04bd5c559",
"assets/assets/icons/Icon-Swap.svg": "294bd4aeee415b255da0a5fb405d697b",
"assets/assets/icons/Icon-Time.svg": "d224c0cbc3f5449e57e8963375dfb667",
"assets/assets/icons/Icon-Vibrate.svg": "de9872aeaab5991ac7028522bf433798",
"assets/assets/icons/Icon-Weight.svg": "f743048d6f1e3788e175f5a04bd5c559",
"assets/assets/icons/Image.svg": "1978c6fc65d8eb85b00022672bb76e25",
"assets/assets/icons/Logout.svg": "ee4475a74e6fcb39756611235f488729",
"assets/assets/icons/Message.svg": "85a8e93c6da0e7b4b1d9dcb77af86b27",
"assets/assets/icons/money.png": "0b42a7d102dbafbbc9c6b635149f23ba",
"assets/assets/icons/Notification-Icon.svg": "d832f5263e85ea8c3834c072bfc3e817",
"assets/assets/icons/Notification-Icon_RedDot.svg": "15ab4b3761d565a9a29831859dbf97f0",
"assets/assets/icons/Notification.svg": "013a33cf626f93858923862fbfa22a5b",
"assets/assets/icons/paypal.png": "9b817b7a19f430e7b9654b29f7ddbb00",
"assets/assets/icons/plane.png": "b70ffca7dce28a5b9d9d3ea569745f0c",
"assets/assets/icons/Profile.svg": "c172b75a7402b422a1c3e4f336727521",
"assets/assets/icons/question.png": "da8360f3b3de4c386581b150d5f324f3",
"assets/assets/icons/receive-amount.png": "4e221534baca4fd06ed072a7c5f94899",
"assets/assets/icons/Search.svg": "4072cc5ac82f301c9cf6b629fb323699",
"assets/assets/icons/Setting.svg": "08209df46f7929b4c64aaf6dd7799213",
"assets/assets/icons/Shield%2520Done.svg": "39789162a63579a3825e50f4e8ff30d2",
"assets/assets/icons/Swap.svg": "8c523fca119989c814d4814ee20cbfa6",
"assets/assets/icons/tax.png": "46c76ad4b78d04934fd52d3d6fd8940e",
"assets/assets/icons/total_customer.png": "27a8e50ea0c5cb878e751014da8e5850",
"assets/assets/icons/total_flight.png": "16a909a1fb14bf2600a409b8bbb9be60",
"assets/assets/icons/total_passenger.png": "82d45cf546ab2ae498d83919d963eafc",
"assets/assets/icons/total_payment.png": "58ca0fa4f1469b62be3d204c3dfbca89",
"assets/assets/icons/visa.png": "77fd8a006ed4d4667ea1e1e973f155b3",
"assets/assets/images/air.png": "e16fd318edf85c89088d24f3dcfba91b",
"assets/assets/images/airplane-ticket.png": "83ce024c54e81ae43396dcb451518194",
"assets/assets/images/airplane.png": "5e98bf7e55dc694ab99e68ea5f4a9169",
"assets/assets/images/airport.jpg": "fd7a5a2d574354875e855b7a6a91aabb",
"assets/assets/images/avatar.jpg": "e96736afe1cd0a014fd88d83c92d0aee",
"assets/assets/images/bacground.jpg": "b6785de56f4c2fea2798018944dc68ac",
"assets/assets/images/bar-chart.png": "c42d4fcfba957e5565ae74bbc21a554a",
"assets/assets/images/bardcode.png": "81d5e9145fe5cd5c81ca8eb5fc8ce8ae",
"assets/assets/images/calendar.png": "dba9e53c1d65f4d2ed50ae2e0f7ab8af",
"assets/assets/images/card.png": "3d35f6e135b8b18d16581da4edc21fa2",
"assets/assets/images/card1.png": "b55241e26e3ecbee9c8d7ee93f5c3479",
"assets/assets/images/folders.png": "663d3c09429063dd1c69bd2336c076db",
"assets/assets/images/goog.png": "51791544f2482d53a28225ae7ef91dfe",
"assets/assets/images/hotel.png": "f5cf5b5872a3692261eb33886c2beb70",
"assets/assets/images/master.png": "815ad935a985d7c0f0fa5480c0fe01a6",
"assets/assets/images/onboard1.png": "857f34c6ad5720589446992a23fcc10a",
"assets/assets/images/onboard2.png": "e9ee935bad7e0e167e704e69c6a5f479",
"assets/assets/images/onboard3.png": "18a73b6d5fffac9af0968126e3c506e6",
"assets/assets/images/password-manager.png": "2587db1f3de33db62dd081d94598fc6e",
"assets/assets/images/plane-ticket.png": "a7487623a46d9236a6939a7a585df6da",
"assets/assets/images/plane.jpg": "f314fa2bf6aee360573dc157d87d400f",
"assets/assets/images/resume.png": "77df3f1dd61603b9fd64370036fe8be5",
"assets/assets/images/seat.png": "190803d2b955be55f95919f453ce8ba4",
"assets/assets/images/splash2.png": "93c84d4d10dc0a176c46168a6f64820c",
"assets/assets/images/splash_gif.gif": "f07dff6966ac48982773fbb149bfde48",
"assets/assets/images/tic.png": "f458725e87912d51a0ab5f7720dd2fb6",
"assets/assets/images/trip.png": "651d95e0570ef3e5392ee444b16eaf94",
"assets/assets/images/vecteezy_airplane.jpg": "8f645436b31f4a4da2aee7a72bf44f4e",
"assets/assets/images/visa.png": "77fd8a006ed4d4667ea1e1e973f155b3",
"assets/FontManifest.json": "6bcafa64c25655d13f39acdb1c068dde",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "313dbff11acafb6e2ba3e1a7f31ba173",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "459f9a0e8e41b9b9caaac54bcc8716c9",
"/": "459f9a0e8e41b9b9caaac54bcc8716c9",
"main.dart.js": "6b86930071f1dd3148c1fe9ef74db4e9",
"main.dart.js_1.part.js": "e2bdc16858e45d1c5bb6fd8a3c1b54e4",
"manifest.json": "31ccd05bf1a41a98b6c9aa4b0e109527",
"version.json": "b0902feee27a84bb61eadc7ab456ebcf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
