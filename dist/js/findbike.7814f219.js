(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["findbike"],{"21f2":function(t,e,n){},2961:function(t,e,n){"use strict";n("21f2")},"3a5e":function(t,e,n){t.exports=n.p+"img/icon_gps_return.86f458f7.svg"},"408a":function(t,e,n){var i=n("e330");t.exports=i(1..valueOf)},"486d":function(t,e,n){t.exports=n.p+"img/location.c00078c4.svg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("e330"),o=n("1d80"),a=n("577e"),s=n("5899"),r=i("".replace),c="["+s+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t){return function(e){var n=a(o(e));return 1&t&&(n=r(n,l,"")),2&t&&(n=r(n,u,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},7156:function(t,e,n){var i=n("1626"),o=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var s,r;return a&&i(s=e.constructor)&&s!==n&&o(r=s.prototype)&&r!==n.prototype&&a(t,r),t}},"7df0":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-full h-full flex-css"},[i("div",{staticClass:"flex-rcc bg-main-500 relative"},[i("img",{staticClass:"hidden lg:block absolute-vcenter left-20 h-10 cursor-pointer",attrs:{src:n("b44a"),alt:""},on:{click:function(e){return t.goBack()}}}),i("div",{staticClass:"block lg:hidden h-16 lg:h-auto"},[i("button",{staticClass:"absolute-vcenter left-4 w-12 h-12 flex-ccc",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[i("img",{attrs:{src:n("e233"),alt:""}})])]),i("div",{staticClass:"hidden lg:block"},[i("div",{staticClass:"my-6 max-w-max flex-rcc"},[i("ToggleRent",{staticClass:"rounded-full before:rounded-full",model:{value:t.isRent,callback:function(e){t.isRent=e},expression:"isRent"}})],1)])]),i("div",{staticClass:"h-full"},[i("MapFindBike",{attrs:{"show-rent":t.isRent}})],1),i("div",{staticClass:"block lg:hidden"},[i("div",{staticClass:"w-full flex-rcc"},[i("ToggleRent",{staticClass:"w-full",model:{value:t.isRent,callback:function(e){t.isRent=e},expression:"isRent"}})],1)])])},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 relative grid grid-cols-2 bg-white toggle",class:[t.isRent?"rent":"return"],on:{click:function(e){return t.switchRendReturn()}}},[n("div",{staticClass:"z-10 px-4 fill-current flex-rcc",class:[t.isRent?"text-main-500":"text-second-900"]},[n("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.0902 19.0469C10.3705 18.3272 9.41875 17.9326 8.41473 17.9326C7.41071 17.9326 6.45893 18.333 5.73929 19.0527C5.01964 19.7723 4.625 20.7241 4.625 21.7281C4.625 22.7321 5.01964 23.6839 5.73929 24.3978C6.45893 25.1174 7.41071 25.5121 8.41473 25.5121C9.41875 25.5121 10.3705 25.1174 11.0902 24.3978C11.8098 23.6781 12.2045 22.7263 12.2045 21.7223C12.2045 20.7183 11.8098 19.7665 11.0902 19.0469ZM3 21.7223C3 18.7451 5.4375 16.3076 8.41473 16.3076C11.3978 16.3076 13.8353 18.7451 13.8295 21.7281C13.8295 24.7054 11.392 27.1429 8.41473 27.1429C5.4375 27.1429 3 24.7054 3 21.7223ZM21.5598 6.70268C21.5598 7.73571 20.7357 8.55982 19.7027 8.55982C18.6754 8.55982 17.8455 7.72991 17.8455 6.70268C17.8455 5.66964 18.6812 4.85714 19.7143 4.85714C20.7473 4.85714 21.5598 5.66964 21.5598 6.70268ZM26.2607 19.0469C25.5411 18.3272 24.5893 17.9326 23.5853 17.9326C22.5754 17.9326 21.6237 18.333 20.9098 19.0527C20.1902 19.7723 19.7955 20.7241 19.7955 21.7281C19.7955 22.7321 20.1902 23.6839 20.9098 24.4036C21.6295 25.1232 22.5813 25.5179 23.5853 25.5179C24.5893 25.5179 25.5411 25.1232 26.2607 24.3978C26.9804 23.6781 27.375 22.7263 27.375 21.7223C27.375 20.7183 26.9804 19.7665 26.2607 19.0469ZM18.1705 21.7223C18.1705 18.7451 20.608 16.3076 23.5853 16.3076C26.5625 16.3076 29 18.7451 29 21.7223C29 24.6996 26.5625 27.1371 23.5853 27.1371C20.608 27.1371 18.1705 24.6996 18.1705 21.7223ZM19.7142 12.2857H22.4999C23.0107 12.2857 23.4285 12.7036 23.4285 13.2143C23.4285 13.725 23.0107 14.1429 22.4999 14.1429H19.1687C18.7393 14.1429 18.3681 13.5045 17.8211 12.5638C17.5771 12.1441 17.2981 11.6643 16.9633 11.154L14.1254 14.1429C14.4814 14.4213 14.9226 14.678 15.3488 14.9259C16.1663 15.4013 16.9285 15.8447 16.9285 16.3482V21.5714C16.9285 22.0822 16.5107 22.5 15.9999 22.5C15.4892 22.5 15.0714 22.0822 15.0714 21.5714V17.7469C15.0714 17.2115 14.6108 16.9696 13.416 16.3423C12.9143 16.0789 12.2831 15.7475 11.5022 15.2978C11.4815 15.2855 11.4593 15.2726 11.436 15.2591C11.074 15.0487 10.4285 14.6737 10.4285 13.725C10.4285 13.2375 10.6433 12.75 10.9683 12.425L15.1294 8.41475C15.4544 8.08975 15.9419 7.87501 16.4294 7.87501C17.0794 7.87501 17.6772 8.25805 18.0022 8.79778L19.7142 12.2857Z"}})]),n("div",{staticClass:"ml-2 letter-space-title"},[t._v("租車")])]),n("div",{staticClass:"z-10 px-4 fill-current flex-rcc",class:[t.isRent?"text-second-900":"text-main-500"]},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("rect",{attrs:{x:"2",y:"2",width:"20",height:"20",rx:"3",fill:"black"}}),n("path",{attrs:{d:"M12.3846 5.07692H7V18.9231H10.0769V14.3077H12.3846C14.9308 14.3077 17 12.2385 17 9.69231C17 7.14615 14.9308 5.07692 12.3846 5.07692ZM12.5385 11.2308H10.0769V8.15385H12.5385C13.3846 8.15385 14.0769 8.84615 14.0769 9.69231C14.0769 10.5385 13.3846 11.2308 12.5385 11.2308Z",fill:"white"}})]),n("div",{staticClass:"ml-2 letter-space-title"},[t._v("還車")])])])},s=[],r={name:"ToggleRent",model:{prop:"isRent",event:"change"},data:function(){return{isRent:!0}},methods:{switchRendReturn:function(){this.isRent=!this.isRent,this.$emit("change",this.isRent)}}},c=r,l=(n("2961"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,null,null),f=u.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-full h-full relative"},[i("button",{staticClass:"z-top absolute bottom-4 right-4 shadow",attrs:{type:"button"},on:{click:t.getUserLocation}},[i("img",{attrs:{src:n("d2b6"),alt:""}})]),i("div",{staticClass:"z-top absolute top-2.5 left-12 bg-white font-bold px-2 py-1 rounded border-2"},[t._v(t._s(t.zoom))]),i("button",{staticClass:"z-top absolute-hcenter top-2.5 btn-second px-4 py-2 rounded shadow",attrs:{type:"button"},on:{click:t.searchHere}},[t._v(" 搜尋此處站點 ")]),i("l-map",{ref:"map",attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated}},[i("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t.userLocation?i("l-marker",{attrs:{"lat-lng":t.userLocation}},[i("l-icon",{attrs:{"icon-anchor":t.userMarkerIcon.iconAnchor}},[i("img",{staticClass:"bg-main-500 rounded-full",attrs:{src:n("486d"),alt:""}})]),i("l-popup",{attrs:{options:{offset:[0,-t.userMarkerIcon.iconSize[1]]},content:"You\\'re here"}})],1):t._e(),t.bikeStations?[t._l(t.bikeStations,(function(e){return[i("l-marker",{key:e.StationUID,attrs:{"lat-lng":[e.StationPosition.PositionLat,e.StationPosition.PositionLon]}},[i("l-icon",{attrs:{"icon-anchor":t.stationMarkerIcon.iconAnchor}},[i("div",{staticClass:"absolute top-0 left-0 font-bold flex-ccc",class:[t.showRent?"text-second-900":"text-main-500"],style:t.styleStationMarkerText},[t._v(t._s(t.displayAvailableNum(e)))]),t.showRent?i("img",{attrs:{src:n("9f7a"),alt:""}}):t._e(),t.showRent?t._e():i("img",{attrs:{src:n("3a5e"),alt:""}})])],1)]}))]:t._e()],2)],1)},p=[],g=n("5530"),h=(n("a9e3"),n("d81d"),n("99af"),n("2f62")),b=n("0298"),m=n("3fa5"),v={1:1e3,2:1e3,3:1e3,4:1e3,5:1e3,6:1e3,7:1e3,8:1e3,9:1e3,10:1e3,11:1e3,12:1e3,13:1e3,14:1e3,15:1e3,16:1e3,17:800,18:400,19:200,20:100},C={name:"MapFindBike",components:{},props:{lat:{type:Number,default:25.0413064},long:{typs:Number,default:121.5143706},showRent:Boolean},data:function(){return{map:null,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoom:15,center:[this.lat,this.long],userLocation:null,userMarker:null,userMarkerJson:b,userMarkerIcon:{iconUrl:"@/assets/kt/location.svg",iconSize:[24,24],iconAnchor:[12,24]},source:1,stationMarkerIcon:{iconUrl:"@/assets/kt/icon_gps_rent.svg",iconSize:[36,50],iconAnchor:[18,50]}}},mounted:function(){var t=this;this.$nextTick((function(){t.map=t.$refs.map.mapObject,t.getUserLocation()}))},methods:Object(g["a"])({getUserLocation:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){t.userLocation=[e.coords.latitude,e.coords.longitude],t.map.flyTo(t.userLocation),t.getBikeStations({latlong:t.userLocation,dist:v[t.zoom]}).then((function(){})).catch((function(){}))}),(function(){console.log("gps get failed")}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:3e4}):alert("Geolocation is not supported by this browser.")},searchHere:function(){this.getBikeStations({latlong:this.center,dist:v[this.zoom]}).then((function(){})).catch((function(t){Object(m["a"])(t,!0,!1,!1,!0)}))},zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=[t.lat,t.lng]},displayAvailableNum:function(t){return t&&t.availability?this.showRent?t.availability.AvailableRentBikes:t.availability.AvailableReturnBikes:"n/a"}},Object(h["b"])("bike",["getBikeStations"])),computed:Object(g["a"])({styleStationMarkerText:function(){return"width: ".concat(this.stationMarkerIcon.iconSize[0],"px; height: ").concat(this.stationMarkerIcon.iconSize[0],"px")},bikeStations:function(){return 1===this.source?this.bikeStationsV1:this.bikeStationsV2}},Object(h["c"])("bike",["bikeStationsTmp","bikeStationsV1","bikeStationsV2"]))},k=C,x=Object(l["a"])(k,d,p,!1,null,null,null),w=x.exports,R={name:"FindBike",components:{ToggleRent:f,MapFindBike:w},data:function(){return{isRent:!0}},methods:{goBack:function(){this.$router.back()}}},y=R,_=Object(l["a"])(y,i,o,!1,null,null,null);e["default"]=_.exports},"9f7a":function(t,e,n){t.exports=n.p+"img/icon_gps_rent.df7c0faa.svg"},a9e3:function(t,e,n){"use strict";var i=n("83ab"),o=n("da84"),a=n("e330"),s=n("94ca"),r=n("6eeb"),c=n("1a2d"),l=n("7156"),u=n("3a9b"),f=n("d9b5"),d=n("c04e"),p=n("d039"),g=n("241c").f,h=n("06cf").f,b=n("9bf2").f,m=n("408a"),v=n("58a8").trim,C="Number",k=o[C],x=k.prototype,w=o.TypeError,R=a("".slice),y=a("".charCodeAt),_=function(t){var e=d(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,n,i,o,a,s,r,c,l=d(t,"number");if(f(l))throw w("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=v(l),e=y(l,0),43===e||45===e){if(n=y(l,2),88===n||120===n)return NaN}else if(48===e){switch(y(l,1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+l}for(a=R(l,2),s=a.length,r=0;r<s;r++)if(c=y(a,r),c<48||c>o)return NaN;return parseInt(a,i)}return+l};if(s(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var M,I=function(t){var e=arguments.length<1?0:k(_(t)),n=this;return u(x,n)&&p((function(){m(n)}))?l(Object(e),n,I):e},N=i?g(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;N.length>z;z++)c(k,M=N[z])&&!c(I,M)&&b(I,M,h(k,M));I.prototype=x,x.constructor=I,r(o,C,I)}},d2b6:function(t,e,n){t.exports=n.p+"img/GPS-2.5fd4120f.svg"},d81d:function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").map,a=n("1dde"),s=a("map");i({target:"Array",proto:!0,forced:!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},e233:function(t,e,n){t.exports=n.p+"img/back.2cd26aee.svg"}}]);
//# sourceMappingURL=findbike.7814f219.js.map