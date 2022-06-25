const mousePath = [
  'https://www.jib.co.th/web/product/readProduct/10627/LOGITECH-M100R-USB-OPTICAL--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/14280/MICROSOFT-BASIC-OPTICAL--MCS-P58-00065---BLACK-',
  'https://www.jib.co.th/web/product/readProduct/26007/LOGITECH-USB-B100--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/14352/NUBWO-SILENT-NM019--RED-',
  'https://www.jib.co.th/web/product/readProduct/19025/NUBWO-LUCIEN-NM010--RED-',
  'https://www.jib.co.th/web/product/readProduct/14281/BASIC-OPTICAL-MOUSE--MCS-P58-00066---WHITE-',
  'https://www.jib.co.th/web/product/readProduct/31990/DELL-OPTICAL-MS116--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/18392/NUBWO-RADOLF-NM056--RED-',
  'https://www.jib.co.th/web/product/readProduct/18391/NUBWO-RADOLF-NM056--YELLOW-',
  'https://www.jib.co.th/web/product/readProduct/41313/DX-110--USB--Black',
  'https://www.jib.co.th/web/product/readProduct/43010/N1200',
  'https://www.jib.co.th/web/product/readProduct/41329/DX-150X--USB--Black',
  'https://www.jib.co.th/web/product/readProduct/39510/MP-216-BLACK',
  'https://www.jib.co.th/web/product/readProduct/41324/DX-130--USB--Black',
  'https://www.jib.co.th/web/product/readProduct/41306/DX-110--USB---Green',
  'https://www.jib.co.th/web/product/readProduct/39511/MP-216-WHITE',
  'https://www.jib.co.th/web/product/readProduct/41312/DX-110--USB--Blue',
  'https://www.jib.co.th/web/product/readProduct/46779/GX30M39704',
  'https://www.jib.co.th/web/product/readProduct/46499/NUBWO-NM-152-USB-OPTICAL--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/41314/DX-110--USB--White',
  'https://www.jib.co.th/web/product/readProduct/41308/DX-110--USB-Red',
  'https://www.jib.co.th/web/product/readProduct/48640/PN7-00025',
  'https://www.jib.co.th/web/product/readProduct/48639/PN7-00015',
  'https://www.jib.co.th/web/product/readProduct/48637/PN7-00005',
  'https://www.jib.co.th/web/product/readProduct/48644/GMF-00104',
  'https://www.jib.co.th/web/product/readProduct/48642/GMF-00006',
  'https://www.jib.co.th/web/product/readProduct/48632/D5D-00007',
  'https://www.jib.co.th/web/product/readProduct/51938/ARROW-X-M-250-OPTICAL-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52095/S-GEAR-WIRED-OPTICAL-MOUSE--MS-S30BX-',
  'https://www.jib.co.th/web/product/readProduct/51937/ARROW-X-M-170-OPTICAL-BLACK',
  'https://www.jib.co.th/web/product/readProduct/53189/4FD-00027',
  'https://www.jib.co.th/web/product/readProduct/52896/MOUSE--เมาส์--DELL-LASER-WIRED-MS3220-TITAN-GRAY',
  'https://www.jib.co.th/web/product/readProduct/53305/A101',
  'https://www.jib.co.th/web/product/readProduct/53310/A547',
  'https://www.jib.co.th/web/product/readProduct/53307/A522-BK',
  'https://www.jib.co.th/web/product/readProduct/53309/A534',
  'https://www.jib.co.th/web/product/readProduct/53361/MOUSE--เมาส์--ANITECH-A547-OPTICAL-BLACK',
  'https://www.jib.co.th/web/product/readProduct/53818/ANITECH--SNOOPY--USB-A548-BLACK',
  'https://www.jib.co.th/web/product/readProduct/53819/ANITECH--SNOOPY--USB-A548-WHITE',
  'https://www.jib.co.th/web/product/readProduct/53816/ANITECH--SNOOPY--USB-A548-BLUE',
  'https://www.jib.co.th/web/product/readProduct/53817/ANITECH--SNOOPY--USB-A548-RED',
  'https://www.jib.co.th/web/product/readProduct/25287/ASUS-ROG-GLADIUS-II',
  'https://www.jib.co.th/web/product/readProduct/15002/LOGITECH-G402-HYPERION-FURY',
  'https://www.jib.co.th/web/product/readProduct/21037/ASUS-CERBERUS-GAMING-GEAR',
  'https://www.jib.co.th/web/product/readProduct/30343/LOGITECH-G304-LIGHTSPEED-WIRELESS',
  'https://www.jib.co.th/web/product/readProduct/32312/LOGITECH-G502-HERO',
  'https://www.jib.co.th/web/product/readProduct/30959/RAZER-DEATHADDER-ESSENTIAL--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48218/ASUS-ROG-STRIX-KERIS',
  'https://www.jib.co.th/web/product/readProduct/41159/LOGITECH-G-PRO-WIRELESS--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/34535/LOGITECH-G403-HERO-GAMING-MOUSE',
  'https://www.jib.co.th/web/product/readProduct/28460/FANTECH-THOR-X9-MACRO-RGB-GAMING-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/44603/LOGITECH-G-PRO-X-SUPERLIGHT--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/25223/ASUS-ROG-STRIX-IMPACT',
  'https://www.jib.co.th/web/product/readProduct/37565/RAZER-VIPER-MINI',
  'https://www.jib.co.th/web/product/readProduct/36321/RAZER-DEATHADDER-V2',
  'https://www.jib.co.th/web/product/readProduct/35707/RAZER-VIPER-ULTIMATE',
  'https://www.jib.co.th/web/product/readProduct/34124/LOGITECH-G502-LIGHTSPEED-WIRELESS',
  'https://www.jib.co.th/web/product/readProduct/35987/RAZER-BASILISK-X-HYPERSPEED-WIRELESS-GAMING',
  'https://www.jib.co.th/web/product/readProduct/39950/LOGITECH-G-G102-LIGHTSYNC--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/32054/HyperX-PULSEFIRE-FPS-PRO',
  'https://www.jib.co.th/web/product/readProduct/33355/CORSAIR-HARPOON-RGB-WIRELESS--CH-9311011-AP-',
  'https://www.jib.co.th/web/product/readProduct/34160/CORSAIR-M55-RGB-PRO--CH-9308011-AP-',
  'https://www.jib.co.th/web/product/readProduct/35576/ASUS-ROG-GLADIUS-II-CORE',
  'https://www.jib.co.th/web/product/readProduct/32055/HyperX-PULSEFIRE-CORE',
  'https://www.jib.co.th/web/product/readProduct/33698/CORSAIR-HARPOON-RGB-PRO--CH-9301111-AP-',
  'https://www.jib.co.th/web/product/readProduct/37739/LOGITECH-G-PRO-GAMING-MOUSE--HERO-16K-SENSOR-',
  'https://www.jib.co.th/web/product/readProduct/33268/ASUS-ROG-GLADIUS-II',
  'https://www.jib.co.th/web/product/readProduct/38018/ASUS-TUF-GAMING-M3',
  'https://www.jib.co.th/web/product/readProduct/31774/HyperX-PULSEFIRE-SURGE',
  'https://www.jib.co.th/web/product/readProduct/34698/LOGITECH-G903-16000-DPI-WIRELESS-HREO',
  'https://www.jib.co.th/web/product/readProduct/37328/HyperX-PULSEFIRE-DART-WIRELESS--RGB-',
  'https://www.jib.co.th/web/product/readProduct/44604/LOGITECH-G-PRO-X-SUPERLIGHT--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/43659/LOGITECH-G304-LIGHTSPEED-WIRELESS--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/30554/FANTECH-GAMING-ZEUS-X5s-MACRO-PRO-GAMING-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/43067/RAZER-DEATHADDER-V2-PRO-WIRELESS',
  'https://www.jib.co.th/web/product/readProduct/34893/SIGNO-GM-907-CENTRO-MACRO-GAMING-MOUSE',
  'https://www.jib.co.th/web/product/readProduct/39941/LOGITECH-G-G102-LIGHTSYNC--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/45094/RAZER-VIPER-8KHz',
  'https://www.jib.co.th/web/product/readProduct/45214/HyperX-PULSEFIRE-HASTE--RGB-',
  'https://www.jib.co.th/web/product/readProduct/36004/NEOLUTION-E-SPORT-ELYSIUM-RGB-HUANO-SWITCH',
  'https://www.jib.co.th/web/product/readProduct/36004/NEOLUTION-E-SPORT-ELYSIUM-RGB-HUANO-SWITCH',
  'https://www.jib.co.th/web/product/readProduct/37326/HyperX-PULSEFIRE-RAID--RGB-',
  'https://www.jib.co.th/web/product/readProduct/35523/ZOWIE-S2--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/35750/FANTECH-GAMING-THOR-II-X16-MACRO-RGB-GAMING-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/23671/MD-TECH-GAMING-MD-36--BLACK-RED-',
  'https://www.jib.co.th/web/product/readProduct/14347/NUBWO-PHELAN-NM018--YELLOW-',
  'https://www.jib.co.th/web/product/readProduct/43991/CORSAIR-KATAR-PRO-WIRELESS--CH-931C011-AP-',
  'https://www.jib.co.th/web/product/readProduct/39311/RAZER-VIPER-ULTIMATE-WIRELESS-GAMING--WITHOUT-DOCK-',
  'https://www.jib.co.th/web/product/readProduct/47216/RAZER-DEATHADDER-ESSENTIAL--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/36018/NEOLUTION-E-SPORT-EMPEROR-RGB-7200DPI',
  'https://www.jib.co.th/web/product/readProduct/44249/NUBWO-ARCADIA-X55',
  'https://www.jib.co.th/web/product/readProduct/33110/COUGAR-MINOS-XT',
  'https://www.jib.co.th/web/product/readProduct/35113/FANTECH-PHANTOM-X15-RGB-GAMING-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/35567/ZOWIE-S1-ESPORTS-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/32345/MEETION-MT-M930--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/35118/SIGNO-GM-908-COSTRA-MACRO--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48525/RAZER-BASILISK-V3',
  'https://www.jib.co.th/web/product/readProduct/32341/MEETION-MT-GM21--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/46542/CORSAIR-SABRE-RGB-PRO-CHAMPION-SERIES--CH-9303111-AP-',
  'https://www.jib.co.th/web/product/readProduct/36548/NUBWO-PLESIOS-NM-89M--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/43070/RAZER-NAGA-PRO-WIRELESS',
  'https://www.jib.co.th/web/product/readProduct/32344/MEETION-MT-M361-OPTICAL--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/47273/SIGNO-WG-900-VORTEX',
  'https://www.jib.co.th/web/product/readProduct/49703/RAZER-DEATHADDER-V2-X-HYPERSPEED',
  'https://www.jib.co.th/web/product/readProduct/44327/SIGNO-GM-991-MAXXIS--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/43993/CORSAIR-KATAR-PRO--CH-930C011-AP-',
  'https://www.jib.co.th/web/product/readProduct/38528/CORSAIR-DARK-CORE-RGB-PRO-SE--CH-9315511-AP-',
  'https://www.jib.co.th/web/product/readProduct/36020/NEOLUTION-E-SPORT-MOUSE-AORURA-V2',
  'https://www.jib.co.th/web/product/readProduct/42522/NUBWO-NM090--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/46639/RAZER-OROCHI-V2--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/42114/SIGNO-GM-951-NAVONA--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/45677/ONIKUMA-SAKURA-RGB--PINK-',
  'https://www.jib.co.th/web/product/readProduct/36017/NEOLUTION-E-SPORT-MOUSE-GUARDIAN-3200DPI',
  'https://www.jib.co.th/web/product/readProduct/42183/GLORIOUS-MODEL-D--MATTE-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/32346/MEETION-MT-M359-OPTICAL--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/46695/ASUS-ROG-GLADIUS-III',
  'https://www.jib.co.th/web/product/readProduct/44502/DUCKY-FEATHER---16-000-DPI-ARGB-GAMING-MOUSE',
  'https://www.jib.co.th/web/product/readProduct/36016/NEOLUTION-E-SPORT-CHAOS-RGB-12000DPI',
  'https://www.jib.co.th/web/product/readProduct/42191/GLORIOUS-MODEL-O--GLOSSY-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/43736/ASUS-ROG-CHAKRAM-CORE',
  'https://www.jib.co.th/web/product/readProduct/38188/NP-MCE11-00U',
  'https://www.jib.co.th/web/product/readProduct/36232/COUGAR-MINOS-XC---SPEED-XC',
  'https://www.jib.co.th/web/product/readProduct/45228/ONIKUMA-MIZU--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/37791/COUGAR-MINOS-XT--PINK-',
  'https://www.jib.co.th/web/product/readProduct/44940/RAZER-NAGA-X',
  'https://www.jib.co.th/web/product/readProduct/43457/ZOWIE-ZA13-B-3360-SENSOR--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/43483/NUBWO-PLESIOS-NM-89M--PINK-',
  'https://www.jib.co.th/web/product/readProduct/43456/ZOWIE-ZA12-B-MEDIUM--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/36547/NUBWO-HERACLES-X53--WHITE---TYPE-A-',
  'https://www.jib.co.th/web/product/readProduct/42194/GLORIOUS-MODEL-O---GLOSSY-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/44955/FANTECH-CRYPTO-VX7--SAKURA-EDITION---PINK-',
  'https://www.jib.co.th/web/product/readProduct/50083/LOGITECH-PRO-WIRELESS-LEAGUE-OF-LEGENDS-EDITION',
  'https://www.jib.co.th/web/product/readProduct/42198/GLORIOUS-MODEL-O--MATTE-WHITE',
  'https://www.jib.co.th/web/product/readProduct/36241/MEETION-M371--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/43455/ZOWIE-ZA11-B-3360-SENSOR-LARGE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/42184/GLORIOUS-MODEL-D---MATTE-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/42192/GLORIOUS-MODEL-O---GLOSSY-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/42193/GLORIOUS-MODEL-O--GLOSSY-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/43451/ZOWIE-S2-DIVINA-BLUE',
  'https://www.jib.co.th/web/product/readProduct/38942/ACER-PREDATOR-CESTUS-330',
  'https://www.jib.co.th/web/product/readProduct/42182/GLORIOUS-MODEL-D--GLOSSY-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/45806/ZOWIE-ZA13-B-3360-SENSOR--WHITE-EDITION-',
  'https://www.jib.co.th/web/product/readProduct/42185/GLORIOUS-MODEL-D--MATTE-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/43675/NUBWO-GAMING-NM089--GRAY-',
  'https://www.jib.co.th/web/product/readProduct/36779/ZOWIE-FK1-B-DIVINA-VERSION-BLUE',
  'https://www.jib.co.th/web/product/readProduct/46165/LNV-GY50X79385',
  'https://www.jib.co.th/web/product/readProduct/42181/GLORIOUS-MODEL-D--GLOSSY-BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48056/FANTECH-BLAKE-X17-MACRO-RGB-GAMING-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/42942/LENOVO-LEGION-M300-RGB',
  'https://www.jib.co.th/web/product/readProduct/47016/DUCKY-FEATHER--BLACK-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/48474/NUBWO-SOLAKA-X42--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/43449/ZOWIE-S1-DIVINA-BLUE',
  'https://www.jib.co.th/web/product/readProduct/42186/GLORIOUS-MODEL-D---MATTE-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/36777/ZOWIE-FK1--B-DIVINA-VERSION-PINK',
  'https://www.jib.co.th/web/product/readProduct/41848/XTRFY-M4-RGB--MIAMI-BLUE-',
  'https://www.jib.co.th/web/product/readProduct/42667/GNS-31040035100',
  'https://www.jib.co.th/web/product/readProduct/48058/FANTECH-BLAKE-X17-SPACE-EDITION-MACRO-RGB-GAMING-MOUSE--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/49511/GLORIOUS-MODEL-D-WIRELESS--MATTE-WHITE-',
  'https://www.jib.co.th/web/product/readProduct/45416/SIGNO-GM-951P-PINKKER',
  'https://www.jib.co.th/web/product/readProduct/43448/ZOWIE-S1-DIVINA-PINK',
  'https://www.jib.co.th/web/product/readProduct/36780/ZOWIE-FK1-B-DIVINA-VERSION-PINK',
  'https://www.jib.co.th/web/product/readProduct/36776/ZOWIE-FK1--B-DIVINA-VERSION-BLUE',
  'https://www.jib.co.th/web/product/readProduct/48060/SIGNO-GM-952-NEXTRA--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/41854/XTRFY-M4-RGB--PINK-',
  'https://www.jib.co.th/web/product/readProduct/48383/NUBWO-ARCADIA-X55--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/47969/COUGAR-AIRBLADER',
  'https://www.jib.co.th/web/product/readProduct/46826/GP-MCE11-014',
  'https://www.jib.co.th/web/product/readProduct/48974/SIGNO-GM-961S-LASTER--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/47769/NUBWO-DESTROY-NM85',
  'https://www.jib.co.th/web/product/readProduct/48600/NUBWO-ERGONOMIC-X54S-RGB--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48475/NUBWO-SOLAKA-X42--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49938/CORSAIR-MOUSE-SABRE-RGB-PRO-WIRELESS--CH-9313211-AP-',
  'https://www.jib.co.th/web/product/readProduct/47568/SIGNO-GM-962-LANGER--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/51957/LOGITECH-G-PRO-X-SUPERLIGHT--MAGENTA-PINK-',
  'https://www.jib.co.th/web/product/readProduct/45970/TT-PREMIUM-ARGENT-M5-RGB',
  'https://www.jib.co.th/web/product/readProduct/42939/LENOVO-LEGION-M500-RGB',
  'https://www.jib.co.th/web/product/readProduct/49897/ASUS-ROG-STRIX-IMPACT-II-MOONLIGHT',
  'https://www.jib.co.th/web/product/readProduct/49706/FANTECH-BLAST-X7S-MACRO-RGB-GAMING-MOUSE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/48975/SIGNO-GM-992-MAGTEX--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/52207/FANTECH-VENOM-II-WGC2--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/51633/REDRAGON-M910-RANGER',
  'https://www.jib.co.th/web/product/readProduct/51353/MOUSE-ONIKUMA-GAMING-FUJIN--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/49886/NUBWO-BALROG-X43--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49883/TT-PREMIUM-ARGENT-M5-RGB',
  'https://www.jib.co.th/web/product/readProduct/52557/LOGITECH-G-G203-LIGHTSYNC-LILAC',
  'https://www.jib.co.th/web/product/readProduct/49108/AOC-GAMING-GM200--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49887/NUBWO-BALROG-X43--PINK-',
  'https://www.jib.co.th/web/product/readProduct/43742/MSI-CLUTCH-GM11',
  'https://www.jib.co.th/web/product/readProduct/52556/LOGITECH-G-G203-LIGHTSYNC-BLUE',
  'https://www.jib.co.th/web/product/readProduct/49585/ONIKUMA-YUKI--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/52442/GG-STEELSERIES-MOUSE-AEROX-3-BLACK',
  'https://www.jib.co.th/web/product/readProduct/49885/NUBWO-BALROG-X43--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/49225/XPG-75260144',
  'https://www.jib.co.th/web/product/readProduct/51354/ONIKUMA-GAMING-FUJIN--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/49487/MM-720-KKOL1',
  'https://www.jib.co.th/web/product/readProduct/51259/SIGNO-WG-901-WARROX',
  'https://www.jib.co.th/web/product/readProduct/52441/STEELSERIES-RIVAL-3-WIRELESS-BLACK',
  'https://www.jib.co.th/web/product/readProduct/49499/MM-720-WWOL2',
  'https://www.jib.co.th/web/product/readProduct/51257/NUBWO-CERBERUS-NM-92M--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/51965/FANTECH-GAMING-ZEUS-X5S-V2-MACRO-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52447/STEELSERIES-RIVAL-5-BLACK',
  'https://www.jib.co.th/web/product/readProduct/53166/STEELSERIES-AEROX-3-2020-EDITION-WIRELESS-WHITE',
  'https://www.jib.co.th/web/product/readProduct/49228/XPG-75260010',
  'https://www.jib.co.th/web/product/readProduct/50115/NUBWO-LEDOLF-NM-60--YELLOW-',
  'https://www.jib.co.th/web/product/readProduct/49495/MM-720-KKOL2',
  'https://www.jib.co.th/web/product/readProduct/49498/MM-720-WWOL1',
  'https://www.jib.co.th/web/product/readProduct/53623/RAZER-VIPER-V2-PRO-BLACK',
  'https://www.jib.co.th/web/product/readProduct/50117/NUBWO-LEDOLF-NM-60--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/52440/STEELSERIES--RIVAL-3-BLACK',
  'https://www.jib.co.th/web/product/readProduct/51632/REDRAGON-M602-1-NEMEANLION-2',
  'https://www.jib.co.th/web/product/readProduct/51627/MSI-CLUTCH-GM20-ELITE--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/52427/GLORIOUS-MODEL-D--WIRELESS-MATTE-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52443/GG-STEELSERIES-MOUSE-AEROX-3-WHITE',
  'https://www.jib.co.th/web/product/readProduct/52013/NUBWO-X7S-RGB-WHITE',
  'https://www.jib.co.th/web/product/readProduct/52012/NUBWO-ABIGAIL-X45--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/51933/ARROW-X-X7-BLACK',
  'https://www.jib.co.th/web/product/readProduct/51255/NUBWO-CERBERUS-NM-92M--PINK-',
  'https://www.jib.co.th/web/product/readProduct/52428/GLORIOUS-MODEL-D--WIRELESS-MATTE-WHITE',
  'https://www.jib.co.th/web/product/readProduct/50116/NUBWO-LEDOLF-NM-60--RED-',
  'https://www.jib.co.th/web/product/readProduct/51930/ARROW-X-T60-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52448/GG-STEELSERIES-MOUSE-SENSEI-TEN-BLACK',
  'https://www.jib.co.th/web/product/readProduct/53338/WIRELESS-MOUSE--เมาส์ไร้สาย--FANTECH-VENOM-II-WGC2-WHITE',
  'https://www.jib.co.th/web/product/readProduct/51857/MOUSE--เมาส์--NUBWO-ICARUS--NM93--BLACK',
  'https://www.jib.co.th/web/product/readProduct/52297/MM-731-KKOH1',
  'https://www.jib.co.th/web/product/readProduct/51932/ARROW-X-T97-BLACK',
  'https://www.jib.co.th/web/product/readProduct/51931/ARROW-X-T91-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52653/MOUSE--เมาส์--FANTECH-GAMING-THOR-II--X16--V2-BLACK',
  'https://www.jib.co.th/web/product/readProduct/51631/MOUSE--เมาส์--REDRAGON--M719-INVADER',
  'https://www.jib.co.th/web/product/readProduct/52267/NUBWO-VISITOR-X44--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/51858/MOUSE--เมาส์--NUBWO-ICARUS--NM93--WHITE',
  'https://www.jib.co.th/web/product/readProduct/52462/REDRAGON-M612-PREDATOR',
  'https://www.jib.co.th/web/product/readProduct/52886/MOUSE--เมาส์--NUBWO-MURDERER--NM094M--BLACK',
  'https://www.jib.co.th/web/product/readProduct/52413/P307-TUF-Gaming-M4-AIR',
  'https://www.jib.co.th/web/product/readProduct/52298/ACER-PREDATOR-CESTUS-350--BLACK---GP-MCE11-00Q-',
  'https://www.jib.co.th/web/product/readProduct/52300/ACER-PREDATOR-CESTUS-315--BLACK---GP-MCE11-014-',
  'https://www.jib.co.th/web/product/readProduct/51966/NUBWO--NM153--USB-OPTICAL-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52889/NZXT-LIFT--BLACK---MATTE-BLACK---BLACK-',
  'https://www.jib.co.th/web/product/readProduct/52888/NZXT-LIFT--WHITE---MATTE-WHITE---BLACK-',
  'https://www.jib.co.th/web/product/readProduct/52279/REDRAGON-COBRA-M711',
  'https://www.jib.co.th/web/product/readProduct/51859/NUBWO-ICARUS--NM93--PINK',
  'https://www.jib.co.th/web/product/readProduct/52269/NUBWO-VISITOR-X44--GREEN-',
  'https://www.jib.co.th/web/product/readProduct/52887/MOUSE--เมาส์--NUBWO-MURDERER--NM094M--WHITE',
  'https://www.jib.co.th/web/product/readProduct/52268/NUBWO-VISITOR-X44--WHITE-',
  'https://www.jib.co.th/web/product/readProduct/53461/RAZER--DEATHADDER-ESSENTIAL---GOLIATHUS-MOUSE-MAT---BUNDLE-HELLO-KITTY-AND-FRIEND-EDITION',
  'https://www.jib.co.th/web/product/readProduct/53389/MOUSE--เมาส์--GENIUS-DX-110-PS-2--BLACK-',
  'https://www.jib.co.th/web/product/readProduct/53543/HyperX-PULSEFIRE-HASTE--WHITE-PINK-',
  'https://www.jib.co.th/web/product/readProduct/52829/MOUSE--เมาส์--NUBWO-OPTICAL-NM155-USB-BLACK',
  'https://www.jib.co.th/web/product/readProduct/52831/MOUSE--เมาส์--NUBWO-OPTICAL-NM155-USB-BLUE',
  'https://www.jib.co.th/web/product/readProduct/53542/HyperX-PULSEFIRE-HASTE--BLACK-RED-',
  'https://www.jib.co.th/web/product/readProduct/52832/MOUSE--เมาส์--NUBWO-OPTICAL-NM155-USB-WHITE',
  'https://www.jib.co.th/web/product/readProduct/52830/MOUSE--เมาส์--NUBWO-OPTICAL-NM155-USB-PINK',
  'https://www.jib.co.th/web/product/readProduct/53507/FANTECH-BLAST-X7S-MACRO-RGB-GAMING-MOUSE-SAKURA-EDITION',
  'https://www.jib.co.th/web/product/readProduct/53135/MOUSE--เมาส์--ONIKUMA-GAMING---FUJI---PURPLE',
  'https://www.jib.co.th/web/product/readProduct/53136/MOUSE--เมาส์--ONIKUMA-GAMING---KIKU---WHITE-PINK',
];