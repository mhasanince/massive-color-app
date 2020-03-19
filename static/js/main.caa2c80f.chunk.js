(this["webpackJsonpmassive-colors-app"]=this["webpackJsonpmassive-colors-app"]||[]).push([[0],{114:function(e,a,o){e.exports=o(185)},119:function(e,a,o){},178:function(e,a,o){},183:function(e,a,o){},184:function(e,a,o){},185:function(e,a,o){"use strict";o.r(a);var r=o(0),n=o.n(r),l=o(7),c=o.n(l),t=(o(119),o(29)),m=o(30),i=o(33),s=o(31),u=o(34),d=o(218),f=o(220),h=o(221),p=o(217),b=o(222),g=o(106),v=(o(177),o(178),function(e){function a(){var e,o;Object(t.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(o=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={format:o.props.format,seed:o.props.seed,open:!1},o.handleFormatChange=function(e){o.setState({format:e.target.value,open:!0}),o.props.changeFormat(e.target.value)},o.handleSeedChange=function(e){o.setState({seed:e.target.value}),o.props.changeSeed(e.target.value)},o.closeSnackbar=function(){o.setState({open:!1})},o}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state,a=e.format,o=e.seed,r=e.open,l=this.props,c=l.level,t=l.changeLevel;return n.a.createElement("header",{className:"Navbar"},n.a.createElement("div",{className:"logo"},n.a.createElement("a",{href:"/"},"React Color Picker")),n.a.createElement("div",{className:"slider-container"},n.a.createElement("span",null,"Level: ",c),n.a.createElement("div",{className:"slider"},n.a.createElement(g.a,{defaultValue:c,min:100,max:900,step:100,onAfterChange:t}))),n.a.createElement("div",{className:"select-container"},n.a.createElement(d.a,{className:"seed-selector",value:o,onChange:this.handleSeedChange},n.a.createElement(f.a,{value:0},"Material UI Colors"),n.a.createElement(f.a,{value:1},"Flat UI Colors v1"),n.a.createElement(f.a,{value:2},"Flat UI Colors Dutch"),n.a.createElement(f.a,{value:3},"Flat UI Colors American"),n.a.createElement(f.a,{value:4},"Flat UI Colors Aussie"),n.a.createElement(f.a,{value:5},"Flat UI Colors British"),n.a.createElement(f.a,{value:6},"Flat UI Colors Spanish"),n.a.createElement(f.a,{value:7},"Flat UI Colors Indian"),n.a.createElement(f.a,{value:8},"Flat UI Colors French")),n.a.createElement(d.a,{className:"format-selector",value:a,onChange:this.handleFormatChange},n.a.createElement(f.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(f.a,{value:"rgb"},"RGB - (255, 255, 255)"),n.a.createElement(f.a,{value:"rgba"},"RGBA - (255, 255, 255, 1)"))),n.a.createElement(h.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:this.closeSnackbar,message:n.a.createElement("span",{id:"message-id"},"Format change to ",a.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},action:n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{key:"close","aria-label":"close",color:"inherit",onClick:this.closeSnackbar},n.a.createElement(b.a,null)))}))}}]),a}(r.Component)),C=o(105),E=(o(183),function(e){function a(){var e,o;Object(t.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(o=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={isCopied:!1},o.changeCopyState=function(){o.setState({isCopied:!0},(function(){setTimeout((function(){o.setState({isCopied:!1})}),1500)}))},o}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.background,o=e.name,r=this.state.isCopied;return n.a.createElement(C.CopyToClipboard,{text:a,onCopy:this.changeCopyState},n.a.createElement("div",{style:{backgroundColor:a},className:"ColorBox"},n.a.createElement("div",{style:{backgroundColor:a},className:"copy-overlay ".concat(r&&"show")}),n.a.createElement("div",{className:"copy-message ".concat(r&&"show")},n.a.createElement("h1",null,"Copied!"),n.a.createElement("p",null,a)),n.a.createElement("div",{className:"ColorBox-copy-container"},n.a.createElement("span",{className:"ColorBox-name"},o),n.a.createElement("button",{className:"ColorBox-copy"},"Copy")),n.a.createElement("span",{className:"ColorBox-more"},"MORE")))}}]),a}(r.Component)),F=(o(184),function(e){function a(){var e,o;Object(t.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(o=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={level:500,format:"hex"},o.changeLevel=function(e){o.setState({level:e})},o.changeFormat=function(e){o.setState({format:e})},o}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state,a=e.level,o=e.format,r=this.props,l=r.seed,c=r.changeSeed,t=this.props.palette,m=t.colors,i=t.name,s=t.emoji;console.log(c);var u=m[a].map((function(e,a){return n.a.createElement(E,{key:a,background:e[o],name:e.name})}));return n.a.createElement("div",{className:"Palette"},n.a.createElement(v,{level:a,format:o,seed:l,changeLevel:this.changeLevel,changeFormat:this.changeFormat,changeSeed:c}),n.a.createElement("div",{className:"Palette-colors"},u),n.a.createElement("footer",{className:"Palette-footer"},n.a.createElement("span",{className:"Palette-name"},i),n.a.createElement("span",{className:"Palette-emoji"},s)))}}]),a}(r.Component)),y=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],B=o(57),S=o.n(B),P=[50,100,200,300,400,500,600,700,800,900];function k(e){var a={name:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=!0,r=!1,n=void 0;try{for(var l,c=P[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var t=l.value;a.colors[t]=[]}}catch(v){r=!0,n=v}finally{try{o||null==c.return||c.return()}finally{if(r)throw n}}var m,i,s=!0,u=!1,d=void 0;try{for(var f,h=e.colors[Symbol.iterator]();!(s=(f=h.next()).done);s=!0){var p=f.value,b=(m=p.color,i=10,S.a.scale(function(e){return[S()(e).darken(1.4).hex(),e,"#fff"]}(m)).mode("lab").colors(i)).reverse();for(var g in b)a.colors[P[g]].push({name:"".concat(p.name," ").concat(P[g]),id:p.name.toLowerCase().replace(/ /g,"-"),hex:b[g],rgb:S()(b[g]).css(),rgba:S()(b[g]).css("rgba")})}}catch(v){u=!0,d=v}finally{try{s||null==h.return||h.return()}finally{if(u)throw d}}return a}var A=function(e){function a(){var e,o;Object(t.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(o=Object(i.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).state={seed:2},o.handleSeed=function(e){o.setState({seed:e})},o}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.seed;return n.a.createElement("div",null,n.a.createElement(F,{palette:k(y[e]),seed:e,changeSeed:this.handleSeed}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.caa2c80f.chunk.js.map