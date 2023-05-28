'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6838a7e2f9948a844650def0263b7da0",
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
".git/index": "f1f86bfb325a8df1d4fcbf3a68ed78cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de4603683a566d58e6cc540108c0df3f",
".git/logs/refs/heads/main": "de4603683a566d58e6cc540108c0df3f",
".git/logs/refs/remotes/origin/main": "f0ac22a63515b46fa6dc62973ddfb76a",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/07/6bfbd78f4c28a0253d45242705b3a36f8d32fa": "c6509cc04f8cf10c9556a53953d2e140",
".git/objects/0a/5c6beda1681a6ab65129a8280a87540c27a0fd": "0a61009c8fc5e559b100ef7d8698793d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/83b2a64665a80e415f194229057f399088b20f": "8dcfc439a655cfce087c5c1d2867a4e1",
".git/objects/2f/a249950256c66441a23c787e469e8c0336f027": "0ad57e35a4974b2e8567268ff656c5e2",
".git/objects/32/541afa61007662147e97895588188624877264": "4d310e61ee05e3b17364343fe61c1a0b",
".git/objects/32/a2ad9b1904571ef9e70de8ede09e15b4c6f1c0": "a1f11ea8a40e418b075d153ba34db25f",
".git/objects/36/d66cddcf281b3eefb03c483f067b10456b6b25": "a33fda283b47de5d9431377bda48b65d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/a019ca27c2e040e0f10fc7e33f22ace4b10657": "a995b85fa0745dcf69c0f86a4fb5b09f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/fb02bd8029c518493cb5d3f90c6bedeb867a5d": "9bf4d0dccd1bf85d45149594c892d8cc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/4d8f054c301731f216faf63fb70adf5d60230d": "67851219f894ce3d444077745e1ccfc8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/e96b2f444b42463f6d13f01f91260be0c83fff": "683b2f4b6f4758d2091b9523bba69202",
".git/objects/50/46b7ec4420bbdaf73e90322e4475ddad5c211f": "433b053445334284834aa32b29694b73",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/001882c9123c396ee585899084458da35c70d3": "259c1c5b6b0f78487365ab8d667d52b0",
".git/objects/5b/d729bfecd0ab90f71fcfea4329a938a2245455": "5e5ec66f47d33a36c2323817f64c8fad",
".git/objects/5b/f0f15eb970fde8d8394977362332097d0733c0": "5ffef660721f48988c9caae63c6b24d8",
".git/objects/60/ab836dad8da8c8b58cedc9b8d4bd32c02be1f0": "a0e1aff4de49426842a3ee000dfece76",
".git/objects/62/6edccfc0e86d570157c261a021b7be55c1f86b": "c137752128e7b39a0b09e00c5d021659",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/a25f1a2a5b4881ab2ffb65cccbc540acb917da": "d45f0347ed87b5e25c80c509c655e607",
".git/objects/6b/c760c0ab7e974c54429872debea60ea459f50d": "d4b3235829bea4bb1740b678d336fb39",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/51871e5f339424fd33ae5e49dd5838386dd747": "d5b70992f83c7d69d4757a3cd4140372",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/21f832323426d0480253b5ae966e6a66ce0de1": "b2ed3d5cce327757a942dfdb1f813b70",
".git/objects/82/de7a38ebac5e7f458af15f410780022fc6dcba": "889c89f2cde1c4631c21be560e2498e4",
".git/objects/83/b2937e3fa4084c65619f3869fb71b5e6ec0928": "036035ae6138fa76b90ea5dd7918070e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/948f9f0f931be5c2dfe4ce8b63aea0f5726f23": "1a17b688ba103cc8a140d70b42ca7fb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/ee223dd1c6c5769377060f2abf4d178fa12c9e": "96febf1a89979466434631cf3d1f8c09",
".git/objects/90/51d531600188f30f501965f24d57862dc2badd": "2ea4d51d3f68db303636f095ab8158df",
".git/objects/98/2008942a6686c5071dd98b40a62500f275f0b6": "da1d7b43f4adb613182fc7e7f05a3337",
".git/objects/99/220b0a811289e6b1281174e93fe7dd6e521d3f": "21f42ec444fdb151e424790776a7e985",
".git/objects/9a/e1c8293e8e11a4573811052dbef7d7cccf029d": "79843a312cc1513e7eb2f6df83d47b13",
".git/objects/9c/7d2f0b9f5fbf86cf3cfd6652c1f30366434b7b": "630c903bff125dab267153d512c99cf7",
".git/objects/9f/01e516fc14c3a516f54d65fb7a92d86815f1f8": "f0573e7e0449208bf7a1e5cc27d9c9a4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/573e526ba8e13ff9f6a040ecc968e78d54bf6d": "f980acdbda6b31292bc72bec1788042a",
".git/objects/a7/a5f740c19f5875b65722757baa921340e7283f": "dd7f457c124033cb27c967d54d4f2b44",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/d7e7326fc20a667ea3a9e786def81df0ecc592": "c053e3735a027012a00dff5c568a6fee",
".git/objects/c3/72cf11a720883f172202dbbb2492d6b0aa682d": "3551973c88a45d0ad03baf05980daff4",
".git/objects/c9/30bdcef786d5031314273f99f697a3123da68a": "738f2b6f2953621cb9eeacee02b4990f",
".git/objects/ca/617c6a510804ad542792be8e5cd886e9e29085": "aa1c40aaf71f23692766b1e6b59e1f32",
".git/objects/ca/d7e9b398e06cee1dd764ed3257e3c1627e5b6e": "c95db2b50dc281f2f156c103c3c28649",
".git/objects/ce/129d878206797d881f8b810deae9998725a74f": "4bc14aba86650a29317061fe40a07328",
".git/objects/cf/043098b42cf9a7ab189491f7b0484bf23ec4b6": "cd255fdae3f5c425f1ce13186fe2480f",
".git/objects/cf/5a1828d30fe969ec598b7a2b314a76d0eaa365": "2c05b679ed13efed808568a1a0265465",
".git/objects/d0/963fc758ae5874ae99a8869dd0c44693b2ac73": "6fefca76633efd7cb031f651b67427d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4dbea8544736bfa55954513816c5576161941e": "57b0d1510dbf5513ccd308fcd886a34d",
".git/objects/dc/08437c02c0d635ee75455e1bf8c0466d08123f": "2090cdd9034f8d78223a3c1ab5d44ec3",
".git/objects/e0/b7cb08f3d3bdb7f9895492e6a135300e060f8b": "95a0ec48c4a86ed87db8d7d0f087cd10",
".git/objects/e4/df8b4229a3ffb8f411d2817b7e7d3dae172726": "3a8e94191658a7edf624c36c2b480410",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/c1bb237cbbd97e95e48f54c2684b0d78a13caf": "709aa8d6f39ec843e5a262efe7f28672",
".git/objects/ea/74e72ca0ec8afbc57588fcab6bf1f151bb18f3": "ea6ef91fbd8d35681b5c62244712ccac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/91070e30be34143d892c80a6b4c6b02d861ad6": "513f14d4703e1fed54d44a76b59bae56",
".git/objects/ff/0371c234807d070e5ae5523af3c765744d2765": "9be066ffd6a53ebf421d4ab0b95e490f",
".git/refs/heads/main": "d27fd7dea9dd56fa9f26b0b68edf919f",
".git/refs/remotes/origin/main": "d27fd7dea9dd56fa9f26b0b68edf919f",
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
"index.html": "48f5a8adeaaa964485181e008ce9098c",
"/": "48f5a8adeaaa964485181e008ce9098c",
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
