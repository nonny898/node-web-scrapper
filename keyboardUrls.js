const keyboardPath = [
  'https://www.jib.co.th/web/product/readProduct/23793/LOGITECH-G213-PRODIGY--MEMBRANE---RGB-LED---EN-TH---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/25142/SIGNO-KB-730-CENTAURUS--SEMI-MECHANICAL---RGB-LED---EN-TH---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/35556/HyperX-ALLOY-ORIGINS--RED-SWITCH--MECHANICAL--THAI-',
  'https://www.jib.co.th/web/product/readProduct/26677/NUBWO-NK-018-SAVAGE--BLACK---SEMI-MECHANICAL---RAINBOW-LED---EN-TH---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/26274/CELERITAS-II--OPTICAL-SWITCH---RED-LED---EN-TH---WIRED-PS2-or-USB-',
  'https://www.jib.co.th/web/product/readProduct/32086/HyperX-ALLOY-CORE-RGB--MEMBRANE---EN---RGB-LED---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/35833/LOGITECH-G-PRO-X-GX-BLUE-CLICKY--RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/24170/NUBWO-NK030-VAKANT--RUBBER-DOME---7-COLORS-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/33334/NUBWO-X-X28-SORCERER--BLUE-SWITCH---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/29785/FANTECH-HUNTER-PRO-K511--MEMBRANE---RAINBOW-LED---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/37831/NUBWO-X30-TERMINATOR--OUTEMU-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/24835/NEOLUTION-E-SPORT-AGIS--MEMBRANE---RAINBOW-LED-',
  'https://www.jib.co.th/web/product/readProduct/33626/SIGNO-KB-738-INFESTA--BLUE-OPTICAL-SWITCH---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41868/RAZER-CYNOSA-V2--THAI-EN-',
  'https://www.jib.co.th/web/product/readProduct/30920/CORSAIR-K70-RGB-MK-2-RAPIDFIRE--CHERRY-MX-SPEED---EN-TH---CH-9109014-TH---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/42294/RAZER-BLACKWIDOW-V3-TENKEYLESS--RAZER-GREEN-SWITCH---RGB---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/35390/LOGITECH-G-G913-LIGHTSPEED-WIRELESS-RGB--GL-TACTILE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/46099/HyperX-ALLOY-ORIGINS-CORE--HyperX-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/30178/CORSAIR-K70-RGB-MK-2--CHERRY-MX-BLUE---RGB-LED---EN-TH---CH-9109011-TH---WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/33805/FANTECH-FIGHTER-TKL-II-K613L---MEMBRANE---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42984/HyperX-ALLOY-ORIGINS--HyperX-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42343/SIGNO-KB-718-INDIGO-TKL--MINI-RGB-LED---RED-OPTICAL-SWITCH---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/47386/CORSAIR-K55-RGB-PRO---KATAR-PRO-GAMING-BUNDLE--CH-9226965-TH-',
  'https://www.jib.co.th/web/product/readProduct/36022/NEOLUTION-E-SPORT-MYSTIC-PLUS-RAINBOW-LED',
  'https://www.jib.co.th/web/product/readProduct/35116/SIGNO-KB-728-INVEGO-BLUE-OPTICAL-SWITCH--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/45470/RAZER-BLACKWIDOW-V3-GREEN-SWITCH--RAZER-GREEN-MECHANICAL-SWITCH---TH-EN---RGB-LED-',
  'https://www.jib.co.th/web/product/readProduct/40865/LOGITECH-G-G512--GX-BLUE--CLICKY--SWITCH---RGB-LED---US-TH-',
  'https://www.jib.co.th/web/product/readProduct/40892/RAZER-ORNATA-V2--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/43990/CORSAIR-K60-RGB-PRO-CHERRY-VIOLA--RGB-LED---EN-TH---CH-910D019-TH-',
  'https://www.jib.co.th/web/product/readProduct/37830/NUBWO-X30-TERMINATOR--OUTEMU-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/33287/MEETION-MT-K9300-BACKLIT--MEMBRANE---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41158/LOGITECH-G913-TKL-WIRELESS-RGB-GL-LINEAR-SWITCH--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/40753/LOGITECH-G512-LIGHTSYNC-RGB-GX-RED-SWITCH--RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/35476/LOGITECH-G-G913-LIGHTSPEED-WIRELESS-RGB-GL-CLICKY-SWITCH--RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/35477/LOGITECH-G-G913-LIGHTSPEED-WIRELESS-RGB-GL-LINEAR-SWITCH--RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41185/NUBWO-FORTUNE-NK32--PINK---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44307/RAZER-BLACKWIDOW-V3--YELLOW-SWITCH---TH-EN-',
  'https://www.jib.co.th/web/product/readProduct/44253/FANTECH-MAXPOWER-MK853-MECHANICAL-KEYBOARD--BLUE-SWITCH-',
  'https://www.jib.co.th/web/product/readProduct/41566/LOGITECH-G-G512--GX-BROWN--TACTILE--SWITCH---RGB-LED---US-TH-',
  'https://www.jib.co.th/web/product/readProduct/46658/HyperX-ALLOY-ORIGINS-60--HyperX-RED-SWITCH---RGB---EN-',
  'https://www.jib.co.th/web/product/readProduct/35509/ELGATO-STREAM-DECK-XL--10GAT9901-',
  'https://www.jib.co.th/web/product/readProduct/36342/CORSAIR-K95-RGB-PLATINUM-XT--CHERRY-MX-BLUE---RGB-LED---EN---CH-9127411-NA-',
  'https://www.jib.co.th/web/product/readProduct/36343/CORSAIR-K95-RGB-PLATINUM-XT--CHERRY-MX-SPEED---RGB-LED---EN---CH-9127414-NA-',
  'https://www.jib.co.th/web/product/readProduct/45151/RAZER-BLACKWIDOW-V3-TENKEYLESS--RAZER-YELLOW-SWITCH---RGB---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42344/SIGNO-KB-718-INDIGO-TKL--MINI-RGB-LED---BLUE-OPTICAL-SWITCH---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42652/RAZER-HUNTSMAN-MINI-LINEAR-RED-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/36229/COUGAR-PURI-TKL-RGB-MECHANICAL-BLUE-SWITCH--EN---FREE-KEYCAP-',
  'https://www.jib.co.th/web/product/readProduct/33359/TT-PREMIUM-LEVEL-20--CHERRY-MX-BLUE---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/43989/CORSAIR-K60-PRO--CHERRY-VIOLA---RED-LED---EN-TH---CH-910D029-TH-',
  'https://www.jib.co.th/web/product/readProduct/46534/CORSAIR-K70-RGB-TKL-CHAMPION-SERIES--CHERRY-MX-RGB-SPEED-SILVER---RGB---EN---CH-9119014-NA-',
  'https://www.jib.co.th/web/product/readProduct/42653/RAZER-HUNTSMAN-MINI--MERCURY-EDITION--CLICKY-PURPLE-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/45449/FANTECH-MAXPOWER-MK853--RGB-LED---TH-EN---MECHANICAL-RED-SWITCH-',
  'https://www.jib.co.th/web/product/readProduct/44308/RAZER-BLACKWIDOW-V3-PRO--GREEN-SWITCH---TH-EN-',
  'https://www.jib.co.th/web/product/readProduct/43097/NUBWO-X-LUTION-X21-TKL--PINK-WHITE---OUTEMU-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/46929/NEOLUTION-E-SPORT-TERRABLADE-2-COVER',
  'https://www.jib.co.th/web/product/readProduct/42325/NUBWO-GAMING-SAVAGE-NK018--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/42654/RAZER-HUNTSMAN-MINI--MERCURY-EDITION--LINEAR-RED-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/48602/NUBWO-NK-38-WIZARDY-MINI-KEYBOARD--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/46538/CORSAIR-K65-RGB-MINI--CHERRY-MX-SPEED---RGB-LED---EN---CH-9194014-NA-',
  'https://www.jib.co.th/web/product/readProduct/44686/CORSAIR-K100-RGB-OPX-SWITCH-US-LG--CH-912A01A-NA-',
  'https://www.jib.co.th/web/product/readProduct/43095/NUBWO-X-LUTION-X21-TKL--BLACK---OUTEMU-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41157/LOGITECH-G913-TKL-WIRELESS-RGB-GL-TACTILE-SWITCH--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/40960/SIGNO-KB-770-EMPERRO--OPTICAL-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/43923/SIGNO-E-SPORT-GAMING-KB-781-MAGUSTA--BLUE-OPTICAL-SWITCH-',
  'https://www.jib.co.th/web/product/readProduct/41153/LOGITECH-G913-TKL-WIRELESS-RGB--GL-CLICKY-SWITCH---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/43096/NUBWO-X-LUTION-X21-TKL--WHITE---OUTEMU-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42651/RAZER-HUNTSMAN-MINI-CLICKY-PURPLE-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/40057/NUBWO-FORTUNE-NK032--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/42487/SIGNO-KB-771-TROOPER--BLUE-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41360/SIGNO-KB-738-INFESTA--RED-OPTICAL-SWITCH---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/46539/CORSAIR-K55-RGB-PRO--RUBBER-DOME---RGB---EN-TH---CH-9226765-TH-',
  'https://www.jib.co.th/web/product/readProduct/44989/NUBWO-NB-34-FLICKER--SILVER-WHITE---BLUE-SWITCH---RAINBOW-BACKLIGHT---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42578/COUGAR-VANTAR-MX--BLUE-SWITCH---TH-EN-',
  'https://www.jib.co.th/web/product/readProduct/48720/FANTECH-MK856-MAXFIT87--RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44685/CORSAIR-K60-RGB-PRO-SE-US-LG--CH-910D119-NA-',
  'https://www.jib.co.th/web/product/readProduct/46467/NUBWO-NK-36-MARS--RUBBER-DOME---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/43093/NUBWO-X-LUTION-X21-TKL--BLACK---OUTEMU-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44602/SIGNO-KB-741P-PINKKER--BLUE-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48357/FANTECH-MK855-MAXFIT108--BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/49929/ASUS-ROG-STRIX-SCOPE-NX-TKL--ROG-NX-RED---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42189/GLORIOUS-GMMK-TKL-PREBUILT--EN---GATERON-BROWN-SWITCH-',
  'https://www.jib.co.th/web/product/readProduct/47411/HyperX-ALLOY-ELITE-2--HyperX-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/44516/DUCKY-ONE-2-MINI-PURE-WHITE-RGB--CHERRY-MX-BLUE---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42692/NUBWO-GAMING-SAVIOR-NK031--SILVER-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/46657/NUBWO-NK-34-FLICKER--ROSE-GOLD---BLUE-SWITCH---RAINBOW-BACKLIGHT---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/45340/NUBWO-X30-TERMINATOR-WHITE--OTEMU-MECHANICAL-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/42262/NUBWO-FORTUNE-NK32--WHITE---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/45968/TT-PREMIUM-ARGENT-K5-RGB--CHERRY-MX-RGB-SPEED-SILVER---RGB---EN-',
  'https://www.jib.co.th/web/product/readProduct/50394/LOGITECH-G-PRO--GX-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44912/NUBWO-X-LUTION-X21-TKL--BLACK---BROWN-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44309/RAZER-BLACKWIDOW-V3-PRO--YELLOW-SWITCH---TH-EN-',
  'https://www.jib.co.th/web/product/readProduct/37963/COUGAR-700K-EVO--CHERRY-MX-RED---RGB-LED---EN---FREE-KEYCAP-',
  'https://www.jib.co.th/web/product/readProduct/45339/NUBWO-X30-TERMINATOR-WHITE--OTEMU-MECHANICAL-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41847/XTRFY-K4-RGB--KAILH-RED-RGB-SWITCH---RGB-LED---EN-TH---XG-K4-RGB-R-US-',
  'https://www.jib.co.th/web/product/readProduct/48719/FANTECH-MK856-MAXFIT87--BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/46177/LNV-GY40Y57717',
  'https://www.jib.co.th/web/product/readProduct/42693/KEYBOARD--คีย์บอร์ด--NUBWO-GAMING-SAVIOR--NK031--SUPER-BLACK',
  'https://www.jib.co.th/web/product/readProduct/44251/SIGNO-E-SPORT-GAMING-MEC-OPTICAL-RED-SW-KB-781R--MAGUSTA-',
  'https://www.jib.co.th/web/product/readProduct/42691/NUBWO-GAMING-SAVIOR-NK031--SILVER-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49107/AOC-GAMING-GK200-RAINBOW-LED--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48716/FANTECH-MK855-MAXFIT108--RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51752/REDRAGON-DRAGONBORN-K630-RGB--RED-SWITCH---RGB---EN-',
  'https://www.jib.co.th/web/product/readProduct/45473/NUBWO-X-LUTION-X21-TKL--PINK-WHITE---OUTEMU-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48850/RAZER-BLACKWIDOW-V3--GREEN-SWITCH--QUARTZ--EN-',
  'https://www.jib.co.th/web/product/readProduct/49707/ONIKUMA-G27-MAJIN--BLUE-SWITCH---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48767/RAZER-HUNTSMAN-V2-CLICKY-PURPLE-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/45474/NUBWO-X-LUTION-X21-TKL--PINK-WHITE---OUTEMU-BROWN-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/50695/ROYAL-KLUDGE-RK61--WHITE---RK-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48114/RAZER-BLACKWIDOW-V3-MINI-HYPERSPEED--RAZER-GREEN-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/49931/ASUS-ROG-STRIX-SCOPE-NX-TKL--ROG-NX-BLUE---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48613/NUBWO-X33-ALISTAR--BLUE-SWITCH---BLACK-',
  'https://www.jib.co.th/web/product/readProduct/52116/GLORIOUS-GMMK-PRO-PRE-BUILT--BLACK-SLATE---GLORIOUS-FOX-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/48766/RAZER-HUNTSMAN-V2-LINEAR-RED-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/48765/RAZER-HUNTSMAN-V2-TKL-CLICKY-PURPLE-SWITCH--EN-',
  'https://www.jib.co.th/web/product/readProduct/52024/TT-PREMIUM-LEVEL-20-GT-RGB--CHERRY-MX-BLUE---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/50697/ROYAL-KLUDGE-RK61--WHITE---RK-BROWN-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/46300/NUBWO-X27-FENRIR--BLACK---NUBWO-OPTICAL-BLUE-SWITCH---SPECTRUM-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/49900/NUBWO-NK-32-FORTUNE-SUPER--BLACK---MEMBRANE---MULTI-COLOR-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48612/NUBWO-X33-ALISTAR--BLUE-SWITCH--RED-WHITE',
  'https://www.jib.co.th/web/product/readProduct/50889/NUBWO-ORCA-NK40--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49708/ONIKUMA-G21-SAKURA--MEMBRANE---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/50317/NUBWO-NK38-WIZARDY--PINK-',
  'https://www.jib.co.th/web/product/readProduct/49892/TT-PREMIUM-W1-WIRELESS-GAMING-KEYBOARD-CHERRY-MX-BLUE--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/50691/ROYAL-KLUDGE-RK61--WHITE---RK-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/50155/SIGNO-KB-771-TROOPER--RED-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51756/REDRAGON-K568-RGB-DARK-AVENGER--BLUE-SWITCH---RGB---EN-',
  'https://www.jib.co.th/web/product/readProduct/48611/NUBWO-X33-ALISTAR--BLUE-SWITCH--BLUE-WHITE',
  'https://www.jib.co.th/web/product/readProduct/46301/NUBWO-X27-FENRIR--BLACK---NUBWO-OPTICAL-RED-SWITCH---SPECTRUM-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51145/DUCKY-ONE-2-ROSA--CHERRY-MX-BLUE---EN-',
  'https://www.jib.co.th/web/product/readProduct/49514/CK-351-SKOL1-TA',
  'https://www.jib.co.th/web/product/readProduct/48605/NUBWO-X33-ALISTAR--RED-SWITCH---PURPLE-YELLOW-',
  'https://www.jib.co.th/web/product/readProduct/50156/SIGNO-KB-741P-PINKKER--RED-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52393/CORSAIR-K70-RGB-PRO--CHERRY-MX-RGB-BLUE---RGB-LED---EN-TH---CH-9109411-TH-',
  'https://www.jib.co.th/web/product/readProduct/49240/XPG-75260076',
  'https://www.jib.co.th/web/product/readProduct/48607/KEYBOARD-NUBWO-X33-ALISTAR--RED-SWITCH---BLUE-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/52418/STEELSERIES-APEX-3-TKL--STEELSERIES-WHISPER-QUIET---MEMBRANE---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/48614/NUBWO-X33-ALISTAR--RED-SWITCH--RED-WHITE',
  'https://www.jib.co.th/web/product/readProduct/49517/CK-351-SKOR1-TA',
  'https://www.jib.co.th/web/product/readProduct/51144/DUCKY-ONE-2-ROSA--CHERRY-MX-RED---EN-',
  'https://www.jib.co.th/web/product/readProduct/51143/DUCKY-ONE-2-ROSA--CHERRY-MX-BROWN---EN-',
  'https://www.jib.co.th/web/product/readProduct/49238/XPG-75260075',
  'https://www.jib.co.th/web/product/readProduct/49516/CK-351-SKOM1-TA',
  'https://www.jib.co.th/web/product/readProduct/52238/NUBWO-X33-ALISTAR--BLACK-GRAY---RED-SWITCH---MINI-RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52432/STEELSERIES-APEX-5--STEELSERIES-HYBRID-BLUE-MECHANICAL-RGB-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/52014/NUBWO-NK-41-ZENITH--RUBBER-DOME---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52439/STEELSERIES-APEX-7--STEELSERIES-QX2-RGB-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51883/NEOLUTION-E-SPORT-AVATAR--RED-SWITCH---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/48609/NUBWO-X33-ALISTAR--BLUE-SWITCH--PURPLE-YELLOW',
  'https://www.jib.co.th/web/product/readProduct/52564/ASUS-ROG-FALCHION-NX--ASUS-ROG-NX-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51757/REDRAGON-RUDRA-K565--OUTEMU-BLUE-SWITCH---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52412/STEELSERIES-APEX-3--STEELSERIES-WHISPER-QUIET---MEMBRANE---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52361/CORSAIR-K65-RGB-MINI--CHERRY-MX-RGB-RED---RGB-LED---EN---WHITE---CH-9194110-NA-',
  'https://www.jib.co.th/web/product/readProduct/52377/CORSAIR-K65-RGB-MINI--CHERRY-MX-RGB-SPEED-SILVER---RGB-LED---EN---WHITE---CH-9194114-NA-',
  'https://www.jib.co.th/web/product/readProduct/52237/NUBWO-X33-ALISTAR--RED-BLACK---RED-SWITCH---MINI-RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52781/NUBWO-X33-ALISTAR--BLACK-GRAY---BLUE-SWITCH---MINI-RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51976/ARROW-X-YDK-AK-600--RUBBER-DOME---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52358/CORSAIR-K65-RGB-MINI--CHERRY-MX-RGB-RED---RGB-LED---EN---BLACK---CH-9194010-NA-',
  'https://www.jib.co.th/web/product/readProduct/53097/CORSAIR-K70-RGB-TKL-CHAMPION--CORSAIR-OPX-OPTICAL-SWITCH---RGB-LED---EN---CH-911901A-NA-',
  'https://www.jib.co.th/web/product/readProduct/51977/ARROW-X-YDK-AK-900--RUBBER-DOME---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/51975/ARROW-X-YDK-AK-400--RUBBER-DOME---RAINBOW-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52873/NZXT-FUNCTION-MINITKL--MATTE-WHITE---GATERON-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53451/ASUS-ROG-STRIX-FLARE-II-ANIMATE--ASUS-ROG-NX-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53449/ASUS-ROG-STRIX-FLARE-II-ANIMATE--ASUS-ROG-NX-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52868/NZXT-FUNCTION-TENKEYLESS--MATTE-WHITE---GATERON-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/52782/NUBWO-X33-ALISTAR--BLACK-RED---BLUE-SWITCH---MINI-RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52029/GK-10',
  'https://www.jib.co.th/web/product/readProduct/52558/ASUS-ROG-FALCHION-NX--ASUS-ROG-NX-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52648/LENOVO-LEGION-K300-RGB--MEMBRANE---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52862/NZXT-FUNCTION--MATTE-BLACK---GATERON-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53220/SIGNO-KB-791-MARRAZE--RED-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/52867/NZXT-FUNCTION--MATTE-WHITE---GATERON-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/52869/NZXT-FUNCTION-TENKEYLESS--MATTE-BLACK---GATERON-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53634/REDRAGON-DRAGONBORN-K630-RGB--BLUE-SWITCH---RGB---EN-',
  'https://www.jib.co.th/web/product/readProduct/53214/SIGNO-KB-791-MARRAZE--BLUE-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53547/HYPERX-ALLOY-ORIGINS-60--PINK---HYPERX-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/52871/NZXT-FUNCTION-MINITKL--MATTE-BLACK---GATERON-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53544/KEYBOARD--คีย์บอร์ด--HYPERX-ALLOY-MKW100--TTC-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53550/HYPERX-ALLOY-ORIGINS-65--HYPERX-AQUA-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53549/HYPERX-ALLOY-ORIGINS-65--HYPERX-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53834/ROYAL-KLUDGE-RK84--BLACK---RK-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53830/ROYAL-KLUDGE-RK84--WHITE---RK-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53837/ROYAL-KLUDGE-RK84--BLACK---RK-BROWN-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53828/ROYAL-KLUDGE-RK84--WHITE---RK-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53832/ROYAL-KLUDGE-RK84--WHITE---RK-BROWN-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53833/ROYAL-KLUDGE-RK84--BLACK---RK-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53805/ROYAL-KLUDGE-RK61--BLACK---RK-BLUE-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53807/ROYAL-KLUDGE-RK61--BLACK---RK-BROWN-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53811/ROYAL-KLUDGE-RK61-CHRISTMAS-EDITION--WHITE---RK-BROWN-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53879/SIGNO-KB-751BLK-NUZZON--BLACK---RED-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53881/SIGNO-KB-751W-NUZZON--WHITE---RED-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53809/ROYAL-KLUDGE-RK61-CHRISTMAS-EDITION--WHITE---RK-RED-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53876/SIGNO-KB-751BLK-NUZZON--BLACK---BLUE-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53806/ROYAL-KLUDGE-RK61--BLACK---RK-RED-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53810/ROYAL-KLUDGE-RK61-CHRISTMAS-EDITION--WHITE---RK-BLUE-SWITCH---RGB-LED---EN-',
  'https://www.jib.co.th/web/product/readProduct/53880/SIGNO-KB-751W-NUZZON--WHITE---BLUE-OPTICAL-SWITCH---RGB-LED---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/9626/LOGITECH-MK220-WIRELESS--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/6776/MICROSOFT-WIRELESS-DESKTOP-2000--MCS-M7J-00027-',
  'https://www.jib.co.th/web/product/readProduct/14717/LOGITECH-MK270R-WIRELESS-CORDLESS--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/6808/LOGITECH-MK200-MEDIA--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/10083/MICROSOFT-DESKTOP-600--MCS-APB-00021-',
  'https://www.jib.co.th/web/product/readProduct/20166/MICROSOFT-WIRELESS-DESKTOP-850-WITH-AES--MCS-PY9-00025-',
  'https://www.jib.co.th/web/product/readProduct/25455/LOGITECH-MK345-WIRELESS--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/19356/LOGITECH-K400-PLUS--BLACK--WIRELESS-TOUCH-PAD',
  'https://www.jib.co.th/web/product/readProduct/20330/MD-TECH-K7--EN-TH----M199--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/21599/MICROSOFT-ALL-IN-ONE--MCS-N9Z-00027-',
  'https://www.jib.co.th/web/product/readProduct/14548/MD-TECH-KB117--EN-TH----M27--WIRED-USB-',
  'https://www.jib.co.th/web/product/readProduct/16050/MICROSOFT-SCULPT-ERGONOMIC-DESKTOP--MCS-L5V-00026-',
  'https://www.jib.co.th/web/product/readProduct/24310/LOGITECH-MK240--BLACK--WIRELESS-NANO',
  'https://www.jib.co.th/web/product/readProduct/29258/LOGITECH-MK545-WIRELESS-ADVANCED--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/24842/ANITECH-DESKTOP-PA800',
  'https://www.jib.co.th/web/product/readProduct/31368/MICROSOFT-WIRELESS-DESKTOP-900--MCS-PT3-00026-',
  'https://www.jib.co.th/web/product/readProduct/33742/LOGITECH-MK235-WIRELESS-COMBO',
  'https://www.jib.co.th/web/product/readProduct/34589/LOGITECH-MK470-SLIM-WIRELESS-KEYBOARD-AND-MOUSE-COMBO--BLACK---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/47975/ASUS-TUF-GAMING-K1--RGB-LED---EN-TH----ASUS-TUF-GAMING-M3',
  'https://www.jib.co.th/web/product/readProduct/34590/LOGITECH-MK470-SLIM-WIRELESS-COMBO--WHITE---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41121/NUBWO-INFAREZ-NKM-300--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/33306/MEETION-MT-4100-DESKTOP-WIRELESS-COMBO-SET--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44056/LOGITECH-MK295-WIRELESS-SILENT--GRAPHITE-',
  'https://www.jib.co.th/web/product/readProduct/33289/MEETION-MT-AT100-COMBO--MEMBRANE---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/41886/NUBWO-SAVITAR-NKM-623--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/41438/MICROSOFT-BLUETOOTH-DESKTOP--MCS-QHG-00027-',
  'https://www.jib.co.th/web/product/readProduct/42371/MICROSOFT-DESIGNER-BLUETOOTH-DESKTOP--7N9-00027---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/44345/MICROSOFT-BLUETOOTH-DESKTOP--MCS-QHG-00057-',
  'https://www.jib.co.th/web/product/readProduct/41176/NUBWO-MINI-STELLAR-NKM-624--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/41093/NUBWO-MINI-STELLAR-NKM-624--PINK-',
  'https://www.jib.co.th/web/product/readProduct/47210/WIRELESS-KEYBOARD---MOUSE-ANITECH-PA804--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/39512/KM-232W',
  'https://www.jib.co.th/web/product/readProduct/42763/9300M-WHITE',
  'https://www.jib.co.th/web/product/readProduct/46039/KB-8050T-BK',
  'https://www.jib.co.th/web/product/readProduct/43934/NUBWO-VIRGO-WIRELESS-NKM-625--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/49359/SIGNO-SUNDAZE-KB-712-GM-112--ILLUMINATED-',
  'https://www.jib.co.th/web/product/readProduct/43936/NUBWO-VIRGO-WIRELESS-NKM-625--PINK-',
  'https://www.jib.co.th/web/product/readProduct/41318/SMART-KM-8100',
  'https://www.jib.co.th/web/product/readProduct/41302/KM-160',
  'https://www.jib.co.th/web/product/readProduct/39515/KM-232W-B',
  'https://www.jib.co.th/web/product/readProduct/39558/KM-203W',
  'https://www.jib.co.th/web/product/readProduct/39556/KM-2003',
  'https://www.jib.co.th/web/product/readProduct/46041/KB-9000M-BK',
  'https://www.jib.co.th/web/product/readProduct/45376/X1800S',
  'https://www.jib.co.th/web/product/readProduct/48380/NUBWO-LUXURY-NKM620--GRAY-',
  'https://www.jib.co.th/web/product/readProduct/46038/KB-8000M-WH',
  'https://www.jib.co.th/web/product/readProduct/48821/X260-BLACK',
  'https://www.jib.co.th/web/product/readProduct/46761/NUBWO-NKM626-QUINN--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/46763/NUBWO-NKM626-QUINN--GREEN-',
  'https://www.jib.co.th/web/product/readProduct/48379/NUBWO-LUXURY-NKM620--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49418/NUBWO-SAVITAR-NKM-623--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/49417/NUBWO-SAVITAR-NKM-623--PINK-',
  'https://www.jib.co.th/web/product/readProduct/48819/X260-PINK',
  'https://www.jib.co.th/web/product/readProduct/49813/NUBWO-WIRELESS-NKM627--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48729/NUBWO-VIRGO-WIRELESS-NKM-625--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/51497/DELL-PREMIER-WIRELESS-BLUETOOTH-KM7321W--TH-',
  'https://www.jib.co.th/web/product/readProduct/51780/DELL-KM5221W-PRO-WIRELESS-KEYBOARD-AND-MOUSE--EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/50344/ZL-G01ST-001',
  'https://www.jib.co.th/web/product/readProduct/49821/NUBWO-WIRELESS-SENCILLO-NKM240--GRAY-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/51090/L3V-00026',
  'https://www.jib.co.th/web/product/readProduct/49817/NUBWO-WIRELESS-SENCILLO-NKM240--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/50347/ZL-G01ST-003',
  'https://www.jib.co.th/web/product/readProduct/50345/ZL-G01ST-002',
  'https://www.jib.co.th/web/product/readProduct/49820/NUBWO-WIRELESS-SENCILLO-NKM240--RED-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/53001/KEYBOARD---MOUSE--คีย์บอร์ดและเมาส์--DELL-WIRELESS-KM3322W-EN-TH',
  'https://www.jib.co.th/web/product/readProduct/52079/S-GEAR-WIRELESS-MOUSE---KEYBOARD-MULTIMEDIA--MK-S110-',
  'https://www.jib.co.th/web/product/readProduct/52078/S-GEAR-WIRELESS-MOUSE---KEYBOARD-SUPER-THIN-MINT--MK-M411-MI-',
  'https://www.jib.co.th/web/product/readProduct/52076/S-GEAR-WIRELESS-MOUSE---KEYBOARD-SUPER-THIN-PINK--MK-M411-PK-',
  'https://www.jib.co.th/web/product/readProduct/52291/ACER-WIRELESS-COMBO--PINK---ZL-G01ST-002-',
  'https://www.jib.co.th/web/product/readProduct/52290/ACER-WIRELESS-COMBO--WHITE---ZL-G01ST-001-',
  'https://www.jib.co.th/web/product/readProduct/53620/MICROSOFT-SCULPT-COMFORT-DESKTOP--L3V-00026---EN-TH-',
  'https://www.jib.co.th/web/product/readProduct/53823/ANITECH--SNOOPY--PA807-WHITE',
  'https://www.jib.co.th/web/product/readProduct/53822/ANITECH--SNOOPY--PA807-BLACK',
];