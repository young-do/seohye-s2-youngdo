function Mo(){}function No(n){return n()}function Ao(){return Object.create(null)}function Di(n){n.forEach(No)}function Jc(n){return typeof n=="function"}function t_(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ki;function n_(n,e){return ki||(ki=document.createElement("a")),ki.href=e,n===ki.href}function eu(n){return Object.keys(n).length===0}function i_(n,e){n.appendChild(e)}function r_(n,e,t){n.insertBefore(e,t||null)}function tu(n){n.parentNode.removeChild(n)}function s_(n){return document.createElement(n)}function o_(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function nu(n){return document.createTextNode(n)}function a_(){return nu(" ")}function l_(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function c_(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function iu(n){return Array.from(n.childNodes)}function u_(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function d_(n,e,t){n.classList[t?"add":"remove"](e)}let Yn;function zn(n){Yn=n}function ru(){if(!Yn)throw new Error("Function called outside component initialization");return Yn}function h_(n){ru().$$.on_mount.push(n)}const jn=[],Ro=[],Fi=[],Oo=[],su=Promise.resolve();let Vr=!1;function ou(){Vr||(Vr=!0,su.then(Po))}function $r(n){Fi.push(n)}const Gr=new Set;let Li=0;function Po(){const n=Yn;do{for(;Li<jn.length;){const e=jn[Li];Li++,zn(e),au(e.$$)}for(zn(null),jn.length=0,Li=0;Ro.length;)Ro.pop()();for(let e=0;e<Fi.length;e+=1){const t=Fi[e];Gr.has(t)||(Gr.add(t),t())}Fi.length=0}while(jn.length);for(;Oo.length;)Oo.pop()();Vr=!1,Gr.clear(),zn(n)}function au(n){if(n.fragment!==null){n.update(),Di(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach($r)}}const Wi=new Set;let lu;function Do(n,e){n&&n.i&&(Wi.delete(n),n.i(e))}function f_(n,e,t,i){if(n&&n.o){if(Wi.has(n))return;Wi.add(n),lu.c.push(()=>{Wi.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function p_(n,e){n.d(1),e.delete(n.key)}function m_(n,e,t,i,r,s,o,l,c,d,m,p){let g=n.length,b=s.length,T=g;const O={};for(;T--;)O[n[T].key]=T;const S=[],G=new Map,A=new Map;for(T=b;T--;){const z=p(r,s,T),x=t(z);let Y=o.get(x);Y?i&&Y.p(z,e):(Y=d(x,z),Y.c()),G.set(x,S[T]=Y),x in O&&A.set(x,Math.abs(T-O[x]))}const ee=new Set,we=new Set;function I(z){Do(z,1),z.m(l,m),o.set(z.key,z),m=z.first,b--}for(;g&&b;){const z=S[b-1],x=n[g-1],Y=z.key,Q=x.key;z===x?(m=z.first,g--,b--):G.has(Q)?!o.has(Y)||ee.has(Y)?I(z):we.has(Q)?g--:A.get(Y)>A.get(Q)?(we.add(Y),I(z)):(ee.add(Q),g--):(c(x,o),g--)}for(;g--;){const z=n[g];G.has(z.key)||c(z,o)}for(;b;)I(S[b-1]);return S}function g_(n){n&&n.c()}function cu(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=n.$$;r&&r.m(e,t),i||$r(()=>{const c=s.map(No).filter(Jc);o?o.push(...c):Di(c),n.$$.on_mount=[]}),l.forEach($r)}function uu(n,e){const t=n.$$;t.fragment!==null&&(Di(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function du(n,e){n.$$.dirty[0]===-1&&(jn.push(n),ou(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function __(n,e,t,i,r,s,o,l=[-1]){const c=Yn;zn(n);const d=n.$$={fragment:null,ctx:null,props:s,update:Mo,not_equal:r,bound:Ao(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ao(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(d.root);let m=!1;if(d.ctx=t?t(n,e.props||{},(p,g,...b)=>{const T=b.length?b[0]:g;return d.ctx&&r(d.ctx[p],d.ctx[p]=T)&&(!d.skip_bound&&d.bound[p]&&d.bound[p](T),m&&du(n,p)),g}):[],d.update(),m=!0,Di(d.before_update),d.fragment=i?i(d.ctx):!1,e.target){if(e.hydrate){const p=iu(e.target);d.fragment&&d.fragment.l(p),p.forEach(tu)}else d.fragment&&d.fragment.c();e.intro&&Do(n.$$.fragment),cu(n,e.target,e.anchor,e.customElement),Po()}zn(c)}class y_{$destroy(){uu(this,1),this.$destroy=Mo}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!eu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const hu={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},ko={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},ie={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},ve={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Et={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class _{static getFirstMatch(e,t){const i=t.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,t){const i=t.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,t,i){if(e.test(t))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,i=!1){const r=_.getVersionPrecision(e),s=_.getVersionPrecision(t);let o=Math.max(r,s),l=0;const c=_.map([e,t],d=>{const m=o-_.getVersionPrecision(d),p=d+new Array(m+1).join(".0");return _.map(p.split("."),g=>new Array(20-g.length).join("0")+g).reverse()});for(i&&(l=o-Math.min(r,s)),o-=1;o>=l;){if(c[0][o]>c[1][o])return 1;if(c[0][o]===c[1][o]){if(o===l)return 0;o-=1}else if(c[0][o]<c[1][o])return-1}}static map(e,t){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i}static find(e,t){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(t(s,i))return s}}static assign(e,...t){const i=e;let r,s;if(Object.assign)return Object.assign(e,...t);for(r=0,s=t.length;r<s;r+=1){const o=t[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(c=>{i[c]=o[c]})}return e}static getBrowserAlias(e){return hu[e]}static getBrowserTypeByAlias(e){return ko[e]||""}}const j=/version\/(\d+(\.?_?\d+)+)/i,fu=[{test:[/googlebot/i],describe(n){const e={name:"Googlebot"},t=_.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/opera/i],describe(n){const e={name:"Opera"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(n){const e={name:"Opera"},t=_.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(n){const e={name:"Samsung Internet for Android"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Whale/i],describe(n){const e={name:"NAVER Whale Browser"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(n){const e={name:"MZ Browser"},t=_.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/focus/i],describe(n){const e={name:"Focus"},t=_.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/swing/i],describe(n){const e={name:"Swing"},t=_.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/coast/i],describe(n){const e={name:"Opera Coast"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(n){const e={name:"Opera Touch"},t=_.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(n){const e={name:"Yandex Browser"},t=_.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(n){const e={name:"UC Browser"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(n){const e={name:"Maxthon"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(n){const e={name:"Epiphany"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/puffin/i],describe(n){const e={name:"Puffin"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(n){const e={name:"Sleipnir"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(n){const e={name:"K-Meleon"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(n){const e={name:"WeChat"},t=_.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(n){const e={name:/qqbrowserlite/i.test(n)?"QQ Browser Lite":"QQ Browser"},t=_.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(n){const e={name:"Internet Explorer"},t=_.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(n){const e={name:"Microsoft Edge"},t=_.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(n){const e={name:"Microsoft Edge"},t=_.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(n){const e={name:"Vivaldi"},t=_.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(n){const e={name:"SeaMonkey"},t=_.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(n){const e={name:"Sailfish"},t=_.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,n);return t&&(e.version=t),e}},{test:[/silk/i],describe(n){const e={name:"Amazon Silk"},t=_.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/phantom/i],describe(n){const e={name:"PhantomJS"},t=_.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(n){const e={name:"SlimerJS"},t=_.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e={name:"BlackBerry"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(n){const e={name:"WebOS Browser"},t=_.getFirstMatch(j,n)||_.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/bada/i],describe(n){const e={name:"Bada"},t=_.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/tizen/i],describe(n){const e={name:"Tizen"},t=_.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(n){const e={name:"QupZilla"},t=_.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(n){const e={name:"Firefox"},t=_.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/electron/i],describe(n){const e={name:"Electron"},t=_.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(n){const e={name:"Miui"},t=_.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/chromium/i],describe(n){const e={name:"Chromium"},t=_.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(n){const e={name:"Chrome"},t=_.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/GSA/i],describe(n){const e={name:"Google Search"},t=_.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e={name:"Android Browser"},t=_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(n){const e={name:"PlayStation 4"},t=_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(n){const e={name:"Safari"},t=_.getFirstMatch(j,n);return t&&(e.version=t),e}},{test:[/.*/i],describe(n){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,r=n.search("\\(")!==-1?t:e;return{name:_.getFirstMatch(r,n),version:_.getSecondMatch(r,n)}}}];var pu=[{test:[/Roku\/DVP/],describe(n){const e=_.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,n);return{name:ve.Roku,version:e}}},{test:[/windows phone/i],describe(n){const e=_.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,n);return{name:ve.WindowsPhone,version:e}}},{test:[/windows /i],describe(n){const e=_.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,n),t=_.getWindowsVersionName(e);return{name:ve.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(n){const e={name:ve.iOS},t=_.getSecondMatch(/(Version\/)(\d[\d.]+)/,n);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(n){const e=_.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,n).replace(/[_\s]/g,"."),t=_.getMacOSVersionName(e),i={name:ve.MacOS,version:e};return t&&(i.versionName=t),i}},{test:[/(ipod|iphone|ipad)/i],describe(n){const e=_.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,n).replace(/[_\s]/g,".");return{name:ve.iOS,version:e}}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e=_.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,n),t=_.getAndroidVersionName(e),i={name:ve.Android,version:e};return t&&(i.versionName=t),i}},{test:[/(web|hpw)[o0]s/i],describe(n){const e=_.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,n),t={name:ve.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e=_.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,n)||_.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,n)||_.getFirstMatch(/\bbb(\d+)/i,n);return{name:ve.BlackBerry,version:e}}},{test:[/bada/i],describe(n){const e=_.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,n);return{name:ve.Bada,version:e}}},{test:[/tizen/i],describe(n){const e=_.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,n);return{name:ve.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:ve.Linux}}},{test:[/CrOS/],describe(){return{name:ve.ChromeOS}}},{test:[/PlayStation 4/],describe(n){const e=_.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,n);return{name:ve.PlayStation4,version:e}}}],mu=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(n){const e=_.getFirstMatch(/(can-l01)/i,n)&&"Nova",t={type:ie.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:ie.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:ie.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:ie.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:ie.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:ie.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:ie.tablet}}},{test(n){const e=n.test(/ipod|iphone/i),t=n.test(/like (ipod|iphone)/i);return e&&!t},describe(n){const e=_.getFirstMatch(/(ipod|iphone)/i,n);return{type:ie.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:ie.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:ie.mobile}}},{test(n){return n.getBrowserName(!0)==="blackberry"},describe(){return{type:ie.mobile,vendor:"BlackBerry"}}},{test(n){return n.getBrowserName(!0)==="bada"},describe(){return{type:ie.mobile}}},{test(n){return n.getBrowserName()==="windows phone"},describe(){return{type:ie.mobile,vendor:"Microsoft"}}},{test(n){const e=Number(String(n.getOSVersion()).split(".")[0]);return n.getOSName(!0)==="android"&&e>=3},describe(){return{type:ie.tablet}}},{test(n){return n.getOSName(!0)==="android"},describe(){return{type:ie.mobile}}},{test(n){return n.getOSName(!0)==="macos"},describe(){return{type:ie.desktop,vendor:"Apple"}}},{test(n){return n.getOSName(!0)==="windows"},describe(){return{type:ie.desktop}}},{test(n){return n.getOSName(!0)==="linux"},describe(){return{type:ie.desktop}}},{test(n){return n.getOSName(!0)==="playstation 4"},describe(){return{type:ie.tv}}},{test(n){return n.getOSName(!0)==="roku"},describe(){return{type:ie.tv}}}],gu=[{test(n){return n.getBrowserName(!0)==="microsoft edge"},describe(n){if(/\sedg\//i.test(n))return{name:Et.Blink};const t=_.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,n);return{name:Et.EdgeHTML,version:t}}},{test:[/trident/i],describe(n){const e={name:Et.Trident},t=_.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){return n.test(/presto/i)},describe(n){const e={name:Et.Presto},t=_.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=n.test(/gecko/i),t=n.test(/like gecko/i);return e&&!t},describe(n){const e={name:Et.Gecko},t=_.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:Et.Blink}}},{test:[/(apple)?webkit/i],describe(n){const e={name:Et.WebKit},t=_.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}}];class Fo{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=_.find(fu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=_.find(pu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=_.find(mu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=_.find(gu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return _.assign({},this.parsedResult)}satisfies(e){const t={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(l=>{const c=e[l];typeof c=="string"?(r[l]=c,s+=1):typeof c=="object"&&(t[l]=c,i+=1)}),i>0){const l=Object.keys(t),c=_.find(l,m=>this.isOS(m));if(c){const m=this.satisfies(t[c]);if(m!==void 0)return m}const d=_.find(l,m=>this.isPlatform(m));if(d){const m=this.satisfies(t[d]);if(m!==void 0)return m}}if(s>0){const l=Object.keys(r),c=_.find(l,d=>this.isBrowser(d,!0));if(c!==void 0)return this.compareVersion(r[c])}}isBrowser(e,t=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=_.getBrowserTypeByAlias(r);return t&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let t=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),t.indexOf(_.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class v_{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new Fo(e,t)}static parse(e){return new Fo(e).getResult()}static get BROWSER_MAP(){return ko}static get ENGINE_MAP(){return Et}static get OS_MAP(){return ve}static get PLATFORMS_MAP(){return ie}}function Fe(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function he(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function qe(n){he(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function _u(n,e){he(2,arguments);var t=qe(n).getTime(),i=Fe(e);return new Date(t+i)}function Yr(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function Lo(n){he(1,arguments);var e=qe(n);return e.setHours(0,0,0,0),e}var yu=864e5;function w_(n,e){he(2,arguments);var t=Lo(n),i=Lo(e),r=t.getTime()-Yr(t),s=i.getTime()-Yr(i);return Math.round((r-s)/yu)}function vu(n){return he(1,arguments),n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function wu(n){if(he(1,arguments),!vu(n)&&typeof n!="number")return!1;var e=qe(n);return!isNaN(Number(e))}var bu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Cu=function(n,e,t){var i,r=bu[n];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i},Eu=Cu;function zr(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,i=n.formats[t]||n.formats[n.defaultWidth];return i}}var Tu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Iu={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Su={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},xu={date:zr({formats:Tu,defaultWidth:"full"}),time:zr({formats:Iu,defaultWidth:"full"}),dateTime:zr({formats:Su,defaultWidth:"full"})},Mu=xu,Nu={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Au=function(n,e,t,i){return Nu[n]},Ru=Au;function Kn(n){return function(e,t){var i=t||{},r=i.context?String(i.context):"standalone",s;if(r==="formatting"&&n.formattingValues){var o=n.defaultFormattingWidth||n.defaultWidth,l=i.width?String(i.width):o;s=n.formattingValues[l]||n.formattingValues[o]}else{var c=n.defaultWidth,d=i.width?String(i.width):n.defaultWidth;s=n.values[d]||n.values[c]}var m=n.argumentCallback?n.argumentCallback(e):e;return s[m]}}var Ou={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Pu={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Du={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ku={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Fu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Lu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Wu=function(n,e){var t=Number(n),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Bu={ordinalNumber:Wu,era:Kn({values:Ou,defaultWidth:"wide"}),quarter:Kn({values:Pu,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:Kn({values:Du,defaultWidth:"wide"}),day:Kn({values:ku,defaultWidth:"wide"}),dayPeriod:Kn({values:Fu,defaultWidth:"wide",formattingValues:Lu,defaultFormattingWidth:"wide"})},Uu=Bu;function Zn(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,r=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],s=e.match(r);if(!s)return null;var o=s[0],l=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(l)?qu(l,function(p){return p.test(o)}):Hu(l,function(p){return p.test(o)}),d;d=n.valueCallback?n.valueCallback(c):c,d=t.valueCallback?t.valueCallback(d):d;var m=e.slice(o.length);return{value:d,rest:m}}}function Hu(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function qu(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function Vu(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(n.matchPattern);if(!i)return null;var r=i[0],s=e.match(n.parsePattern);if(!s)return null;var o=n.valueCallback?n.valueCallback(s[0]):s[0];o=t.valueCallback?t.valueCallback(o):o;var l=e.slice(r.length);return{value:o,rest:l}}}var $u=/^(\d+)(th|st|nd|rd)?/i,Gu=/\d+/i,Yu={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zu={any:[/^b/i,/^(a|c)/i]},ju={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ku={any:[/1/i,/2/i,/3/i,/4/i]},Zu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qu={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xu={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ju={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ed={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},td={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},nd={ordinalNumber:Vu({matchPattern:$u,parsePattern:Gu,valueCallback:function(n){return parseInt(n,10)}}),era:Zn({matchPatterns:Yu,defaultMatchWidth:"wide",parsePatterns:zu,defaultParseWidth:"any"}),quarter:Zn({matchPatterns:ju,defaultMatchWidth:"wide",parsePatterns:Ku,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:Zn({matchPatterns:Zu,defaultMatchWidth:"wide",parsePatterns:Qu,defaultParseWidth:"any"}),day:Zn({matchPatterns:Xu,defaultMatchWidth:"wide",parsePatterns:Ju,defaultParseWidth:"any"}),dayPeriod:Zn({matchPatterns:ed,defaultMatchWidth:"any",parsePatterns:td,defaultParseWidth:"any"})},id=nd,rd={code:"en-US",formatDistance:Eu,formatLong:Mu,formatRelative:Ru,localize:Uu,match:id,options:{weekStartsOn:0,firstWeekContainsDate:1}},sd=rd;function od(n,e){he(2,arguments);var t=Fe(e);return _u(n,-t)}var ad=864e5;function ld(n){he(1,arguments);var e=qe(n),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),r=t-i;return Math.floor(r/ad)+1}function Bi(n){he(1,arguments);var e=1,t=qe(n),i=t.getUTCDay(),r=(i<e?7:0)+i-e;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function Wo(n){he(1,arguments);var e=qe(n),t=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(t+1,0,4),i.setUTCHours(0,0,0,0);var r=Bi(i),s=new Date(0);s.setUTCFullYear(t,0,4),s.setUTCHours(0,0,0,0);var o=Bi(s);return e.getTime()>=r.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function cd(n){he(1,arguments);var e=Wo(n),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var i=Bi(t);return i}var ud=6048e5;function dd(n){he(1,arguments);var e=qe(n),t=Bi(e).getTime()-cd(e).getTime();return Math.round(t/ud)+1}function Ui(n,e){he(1,arguments);var t=e||{},i=t.locale,r=i&&i.options&&i.options.weekStartsOn,s=r==null?0:Fe(r),o=t.weekStartsOn==null?s:Fe(t.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=qe(n),c=l.getUTCDay(),d=(c<o?7:0)+c-o;return l.setUTCDate(l.getUTCDate()-d),l.setUTCHours(0,0,0,0),l}function Bo(n,e){he(1,arguments);var t=qe(n),i=t.getUTCFullYear(),r=e||{},s=r.locale,o=s&&s.options&&s.options.firstWeekContainsDate,l=o==null?1:Fe(o),c=r.firstWeekContainsDate==null?l:Fe(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(i+1,0,c),d.setUTCHours(0,0,0,0);var m=Ui(d,e),p=new Date(0);p.setUTCFullYear(i,0,c),p.setUTCHours(0,0,0,0);var g=Ui(p,e);return t.getTime()>=m.getTime()?i+1:t.getTime()>=g.getTime()?i:i-1}function hd(n,e){he(1,arguments);var t=e||{},i=t.locale,r=i&&i.options&&i.options.firstWeekContainsDate,s=r==null?1:Fe(r),o=t.firstWeekContainsDate==null?s:Fe(t.firstWeekContainsDate),l=Bo(n,e),c=new Date(0);c.setUTCFullYear(l,0,o),c.setUTCHours(0,0,0,0);var d=Ui(c,e);return d}var fd=6048e5;function pd(n,e){he(1,arguments);var t=qe(n),i=Ui(t,e).getTime()-hd(t,e).getTime();return Math.round(i/fd)+1}function V(n,e){for(var t=n<0?"-":"",i=Math.abs(n).toString();i.length<e;)i="0"+i;return t+i}var md={y:function(n,e){var t=n.getUTCFullYear(),i=t>0?t:1-t;return V(e==="yy"?i%100:i,e.length)},M:function(n,e){var t=n.getUTCMonth();return e==="M"?String(t+1):V(t+1,2)},d:function(n,e){return V(n.getUTCDate(),e.length)},a:function(n,e){var t=n.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(n,e){return V(n.getUTCHours()%12||12,e.length)},H:function(n,e){return V(n.getUTCHours(),e.length)},m:function(n,e){return V(n.getUTCMinutes(),e.length)},s:function(n,e){return V(n.getUTCSeconds(),e.length)},S:function(n,e){var t=e.length,i=n.getUTCMilliseconds(),r=Math.floor(i*Math.pow(10,t-3));return V(r,e.length)}},Tt=md,yn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},gd={G:function(n,e,t){var i=n.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){var i=n.getUTCFullYear(),r=i>0?i:1-i;return t.ordinalNumber(r,{unit:"year"})}return Tt.y(n,e)},Y:function(n,e,t,i){var r=Bo(n,i),s=r>0?r:1-r;if(e==="YY"){var o=s%100;return V(o,2)}return e==="Yo"?t.ordinalNumber(s,{unit:"year"}):V(s,e.length)},R:function(n,e){var t=Wo(n);return V(t,e.length)},u:function(n,e){var t=n.getUTCFullYear();return V(t,e.length)},Q:function(n,e,t){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return V(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(n,e,t){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return V(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(n,e,t){var i=n.getUTCMonth();switch(e){case"M":case"MM":return Tt.M(n,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(n,e,t){var i=n.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return V(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(n,e,t,i){var r=pd(n,i);return e==="wo"?t.ordinalNumber(r,{unit:"week"}):V(r,e.length)},I:function(n,e,t){var i=dd(n);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):V(i,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getUTCDate(),{unit:"date"}):Tt.d(n,e)},D:function(n,e,t){var i=ld(n);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):V(i,e.length)},E:function(n,e,t){var i=n.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(n,e,t,i){var r=n.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return V(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(n,e,t,i){var r=n.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return V(s,e.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(n,e,t){var i=n.getUTCDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return V(r,e.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(n,e,t){var i=n.getUTCHours(),r=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){var i=n.getUTCHours(),r;switch(i===12?r=yn.noon:i===0?r=yn.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,e,t){var i=n.getUTCHours(),r;switch(i>=17?r=yn.evening:i>=12?r=yn.afternoon:i>=4?r=yn.morning:r=yn.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){var i=n.getUTCHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Tt.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getUTCHours(),{unit:"hour"}):Tt.H(n,e)},K:function(n,e,t){var i=n.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):V(i,e.length)},k:function(n,e,t){var i=n.getUTCHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):V(i,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getUTCMinutes(),{unit:"minute"}):Tt.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getUTCSeconds(),{unit:"second"}):Tt.s(n,e)},S:function(n,e){return Tt.S(n,e)},X:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return Ho(s);case"XXXX":case"XX":return Ht(s);case"XXXXX":case"XXX":default:return Ht(s,":")}},x:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"x":return Ho(s);case"xxxx":case"xx":return Ht(s);case"xxxxx":case"xxx":default:return Ht(s,":")}},O:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Uo(s,":");case"OOOO":default:return"GMT"+Ht(s,":")}},z:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Uo(s,":");case"zzzz":default:return"GMT"+Ht(s,":")}},t:function(n,e,t,i){var r=i._originalDate||n,s=Math.floor(r.getTime()/1e3);return V(s,e.length)},T:function(n,e,t,i){var r=i._originalDate||n,s=r.getTime();return V(s,e.length)}};function Uo(n,e){var t=n>0?"-":"+",i=Math.abs(n),r=Math.floor(i/60),s=i%60;if(s===0)return t+String(r);var o=e||"";return t+String(r)+o+V(s,2)}function Ho(n,e){if(n%60==0){var t=n>0?"-":"+";return t+V(Math.abs(n)/60,2)}return Ht(n,e)}function Ht(n,e){var t=e||"",i=n>0?"-":"+",r=Math.abs(n),s=V(Math.floor(r/60),2),o=V(r%60,2);return i+s+t+o}var _d=gd;function qo(n,e){switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Vo(n,e){switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function yd(n,e){var t=n.match(/(P+)(p+)?/)||[],i=t[1],r=t[2];if(!r)return qo(n,e);var s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",qo(i,e)).replace("{{time}}",Vo(r,e))}var vd={p:Vo,P:yd},wd=vd,bd=["D","DD"],Cd=["YY","YYYY"];function Ed(n){return bd.indexOf(n)!==-1}function Td(n){return Cd.indexOf(n)!==-1}function $o(n,e,t){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"))}var Id=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Sd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,xd=/^'([^]*?)'?$/,Md=/''/g,Nd=/[a-zA-Z]/;function b_(n,e,t){he(2,arguments);var i=String(e),r=t||{},s=r.locale||sd,o=s.options&&s.options.firstWeekContainsDate,l=o==null?1:Fe(o),c=r.firstWeekContainsDate==null?l:Fe(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=s.options&&s.options.weekStartsOn,m=d==null?0:Fe(d),p=r.weekStartsOn==null?m:Fe(r.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=qe(n);if(!wu(g))throw new RangeError("Invalid time value");var b=Yr(g),T=od(g,b),O={firstWeekContainsDate:c,weekStartsOn:p,locale:s,_originalDate:g},S=i.match(Sd).map(function(G){var A=G[0];if(A==="p"||A==="P"){var ee=wd[A];return ee(G,s.formatLong,O)}return G}).join("").match(Id).map(function(G){if(G==="''")return"'";var A=G[0];if(A==="'")return Ad(G);var ee=_d[A];if(ee)return!r.useAdditionalWeekYearTokens&&Td(G)&&$o(G,e,n),!r.useAdditionalDayOfYearTokens&&Ed(G)&&$o(G,e,n),ee(T,G,s.localize,O);if(A.match(Nd))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");return G}).join("");return S}function Ad(n){return n.match(xd)[1].replace(Md,"'")}var Go=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Yo={exports:{}};/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */(function(n,e){(function(t,i){n.exports=i()})(Go,function(){var t=function(i,r,s,o){var l={features:null,bind:function(a,u,h,f){var y=(f?"remove":"add")+"EventListener";u=u.split(" ");for(var w=0;w<u.length;w++)u[w]&&a[y](u[w],h,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,u){var h=document.createElement(u||"div");return a&&(h.className=a),h},getScrollY:function(){var a=window.pageYOffset;return a!==void 0?a:document.documentElement.scrollTop},unbind:function(a,u,h){l.bind(a,u,h,!0)},removeClass:function(a,u){var h=new RegExp("(\\s|^)"+u+"(\\s|$)");a.className=a.className.replace(h," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,u){l.hasClass(a,u)||(a.className+=(a.className?" ":"")+u)},hasClass:function(a,u){return a.className&&new RegExp("(^|\\s)"+u+"(\\s|$)").test(a.className)},getChildByClass:function(a,u){for(var h=a.firstChild;h;){if(l.hasClass(h,u))return h;h=h.nextSibling}},arraySearch:function(a,u,h){for(var f=a.length;f--;)if(a[f][h]===u)return f;return-1},extend:function(a,u,h){for(var f in u)if(u.hasOwnProperty(f)){if(h&&a.hasOwnProperty(f))continue;a[f]=u[f]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(l.features)return l.features;var a=l.createEl(),u=a.style,h="",f={};if(f.oldIE=document.all&&!document.addEventListener,f.touch="ontouchstart"in window,window.requestAnimationFrame&&(f.raf=window.requestAnimationFrame,f.caf=window.cancelAnimationFrame),f.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!f.pointerEvent){var y=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var w=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);w&&w.length>0&&(w=parseInt(w[1],10),w>=1&&w<8&&(f.isOldIOSPhone=!0))}var M=y.match(/Android\s([0-9\.]*)/),D=M?M[1]:0;D=parseFloat(D),D>=1&&(D<4.4&&(f.isOldAndroid=!0),f.androidVersion=D),f.isMobileOpera=/opera mini|opera mobi/i.test(y)}for(var R=["transform","perspective","animationName"],B=["","webkit","Moz","ms","O"],oe,et,ct=0;ct<4;ct++){h=B[ct];for(var _n=0;_n<3;_n++)oe=R[_n],et=h+(h?oe.charAt(0).toUpperCase()+oe.slice(1):oe),!f[oe]&&et in u&&(f[oe]=et);h&&!f.raf&&(h=h.toLowerCase(),f.raf=window[h+"RequestAnimationFrame"],f.raf&&(f.caf=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]))}if(!f.raf){var Gn=0;f.raf=function(tt){var Hr=new Date().getTime(),qr=Math.max(0,16-(Hr-Gn)),Xc=window.setTimeout(function(){tt(Hr+qr)},qr);return Gn=Hr+qr,Xc},f.caf=function(tt){clearTimeout(tt)}}return f.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,l.features=f,f}};l.detectFeatures(),l.features.oldIE&&(l.bind=function(a,u,h,f){u=u.split(" ");for(var y=(f?"detach":"attach")+"Event",w,M=function(){h.handleEvent.call(h)},D=0;D<u.length;D++)if(w=u[D],w)if(typeof h=="object"&&h.handleEvent){if(!f)h["oldIE"+w]=M;else if(!h["oldIE"+w])return!1;a[y]("on"+w,h["oldIE"+w])}else a[y]("on"+w,h)});var c=this,d=25,m=3,p={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return a.tagName==="A"},getDoubleTapZoom:function(a,u){return a||u.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};l.extend(p,o);var g=function(){return{x:0,y:0}},b,T,O,S,G,A,ee=g(),we=g(),I=g(),z,x,Y,Q={},F,st,Ye,rn,sn,ze,je=0,ft={},de=g(),te,on,ye=0,pt,At,Rt,Ot,Be,Ke,an=!0,Ue,mt=[],ln,v,E,q,se,pe,L,xe={},He=!1,Pt,On=function(a,u){l.extend(c,u.publicMethods),mt.push(a)},Ci=function(a){var u=Ne();return a>u-1?a-u:a<0?u+a:a},Pn={},ne=function(a,u){return Pn[a]||(Pn[a]=[]),Pn[a].push(u)},W=function(a){var u=Pn[a];if(u){var h=Array.prototype.slice.call(arguments);h.shift();for(var f=0;f<u.length;f++)u[f].apply(c,h)}},Ze=function(){return new Date().getTime()},ot=function(a){Ni=a,c.bg.style.opacity=a*p.bgOpacity},to=function(a,u,h,f,y){(!He||y&&y!==c.currItem)&&(f=f/(y?y.fitRatio:c.currItem.fitRatio)),a[Be]=Ye+u+"px, "+h+"px"+rn+" scale("+f+")"},me=function(a){Xe&&(a&&(F>c.currItem.fitRatio?He||(Ut(c.currItem,!1,!0),He=!0):He&&(Ut(c.currItem),He=!1)),to(Xe,I.x,I.y,F))},Dn=function(a){a.container&&to(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},cn=function(a,u){u[Be]=Ye+a+"px, 0px"+rn},Ei=function(a,u){if(!p.loop&&u){var h=S+(de.x*je-a)/de.x,f=Math.round(a-lt.x);(h<0&&f>0||h>=Ne()-1&&f<0)&&(a=lt.x+f*p.mainScrollEndFriction)}lt.x=a,cn(a,G)},yr=function(a,u){var h=Hn[a]-ft[a];return we[a]+ee[a]+h-h*(u/st)},be=function(a,u){a.x=u.x,a.y=u.y,u.id&&(a.id=u.id)},no=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},vr=null,wr=function(){vr&&(l.unbind(document,"mousemove",wr),l.addClass(i,"pswp--has_mouse"),p.mouseUsed=!0,W("mouseUsed")),vr=setTimeout(function(){vr=null},100)},Nc=function(){l.bind(document,"keydown",c),L.transform&&l.bind(c.scrollWrap,"click",c),p.mouseUsed||l.bind(document,"mousemove",wr),l.bind(window,"resize scroll orientationchange",c),W("bindEvents")},Ac=function(){l.unbind(window,"resize scroll orientationchange",c),l.unbind(window,"scroll",Y.scroll),l.unbind(document,"keydown",c),l.unbind(document,"mousemove",wr),L.transform&&l.unbind(c.scrollWrap,"click",c),Qe&&l.unbind(window,z,c),clearTimeout(Pt),W("unbindEvents")},br=function(a,u){var h=Vn(c.currItem,Q,a);return u&&(P=h),h},io=function(a){return a||(a=c.currItem),a.initialZoomLevel},ro=function(a){return a||(a=c.currItem),a.w>0?p.maxSpreadZoom:1},so=function(a,u,h,f){return f===c.currItem.initialZoomLevel?(h[a]=c.currItem.initialPosition[a],!0):(h[a]=yr(a,f),h[a]>u.min[a]?(h[a]=u.min[a],!0):h[a]<u.max[a]?(h[a]=u.max[a],!0):!1)},Rc=function(){if(Be){var a=L.perspective&&!Ue;Ye="translate"+(a?"3d(":"("),rn=L.perspective?", 0px)":")";return}Be="left",l.addClass(i,"pswp--ie"),cn=function(u,h){h.left=u+"px"},Dn=function(u){var h=u.fitRatio>1?1:u.fitRatio,f=u.container.style,y=h*u.w,w=h*u.h;f.width=y+"px",f.height=w+"px",f.left=u.initialPosition.x+"px",f.top=u.initialPosition.y+"px"},me=function(){if(Xe){var u=Xe,h=c.currItem,f=h.fitRatio>1?1:h.fitRatio,y=f*h.w,w=f*h.h;u.width=y+"px",u.height=w+"px",u.left=I.x+"px",u.top=I.y+"px"}}},Oc=function(a){var u="";p.escKey&&a.keyCode===27?u="close":p.arrowKeys&&(a.keyCode===37?u="prev":a.keyCode===39&&(u="next")),u&&!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&(a.preventDefault?a.preventDefault():a.returnValue=!1,c[u]())},Pc=function(a){!a||(fn||Lt||Ie||Bn)&&(a.preventDefault(),a.stopPropagation())},oo=function(){c.setScrollOffset(0,l.getScrollY())},Me={},un=0,kn=function(a){Me[a]&&(Me[a].raf&&v(Me[a].raf),un--,delete Me[a])},Cr=function(a){Me[a]&&kn(a),Me[a]||(un++,Me[a]={})},Fn=function(){for(var a in Me)Me.hasOwnProperty(a)&&kn(a)},Ln=function(a,u,h,f,y,w,M){var D=Ze(),R;Cr(a);var B=function(){if(Me[a]){if(R=Ze()-D,R>=f){kn(a),w(h),M&&M();return}w((h-u)*y(R/f)+u),Me[a].raf=ln(B)}};B()},Dc={shout:W,listen:ne,viewportSize:Q,options:p,isMainScrollAnimating:function(){return Ie},getZoomLevel:function(){return F},getCurrentIndex:function(){return S},isDragging:function(){return Qe},isZooming:function(){return at},setScrollOffset:function(a,u){ft.x=a,pe=ft.y=u,W("updateScrollOffset",ft)},applyZoomPan:function(a,u,h,f){I.x=u,I.y=h,F=a,me(f)},init:function(){if(!(b||T)){var a;c.framework=l,c.template=i,c.bg=l.getChildByClass(i,"pswp__bg"),E=i.className,b=!0,L=l.detectFeatures(),ln=L.raf,v=L.caf,Be=L.transform,se=L.oldIE,c.scrollWrap=l.getChildByClass(i,"pswp__scroll-wrap"),c.container=l.getChildByClass(c.scrollWrap,"pswp__container"),G=c.container.style,c.itemHolders=te=[{el:c.container.children[0],wrap:0,index:-1},{el:c.container.children[1],wrap:0,index:-1},{el:c.container.children[2],wrap:0,index:-1}],te[0].el.style.display=te[2].el.style.display="none",Rc(),Y={resize:c.updateSize,orientationchange:function(){clearTimeout(Pt),Pt=setTimeout(function(){Q.x!==c.scrollWrap.clientWidth&&c.updateSize()},500)},scroll:oo,keydown:Oc,click:Pc};var u=L.isOldIOSPhone||L.isOldAndroid||L.isMobileOpera;for((!L.animationName||!L.transform||u)&&(p.showAnimationDuration=p.hideAnimationDuration=0),a=0;a<mt.length;a++)c["init"+mt[a]]();if(r){var h=c.ui=new r(c,l);h.init()}W("firstUpdate"),S=S||p.index||0,(isNaN(S)||S<0||S>=Ne())&&(S=0),c.currItem=bt(S),(L.isOldIOSPhone||L.isOldAndroid)&&(an=!1),i.setAttribute("aria-hidden","false"),p.modal&&(an?i.style.position="fixed":(i.style.position="absolute",i.style.top=l.getScrollY()+"px")),pe===void 0&&(W("initialLayout"),pe=q=l.getScrollY());var f="pswp--open ";for(p.mainClass&&(f+=p.mainClass+" "),p.showHideOpacity&&(f+="pswp--animate_opacity "),f+=Ue?"pswp--touch":"pswp--notouch",f+=L.animationName?" pswp--css_animation":"",f+=L.svg?" pswp--svg":"",l.addClass(i,f),c.updateSize(),A=-1,ye=null,a=0;a<m;a++)cn((a+A)*de.x,te[a].el.style);se||l.bind(c.scrollWrap,x,c),ne("initialZoomInEnd",function(){c.setContent(te[0],S-1),c.setContent(te[2],S+1),te[0].el.style.display=te[2].el.style.display="block",p.focus&&i.focus(),Nc()}),c.setContent(te[1],S),c.updateCurrItem(),W("afterInit"),an||(sn=setInterval(function(){!un&&!Qe&&!at&&F===c.currItem.initialZoomLevel&&c.updateSize()},1e3)),l.addClass(i,"pswp--visible")}},close:function(){!b||(b=!1,T=!0,W("close"),Ac(),vo(c.currItem,null,!0,c.destroy))},destroy:function(){W("destroy"),Wt&&clearTimeout(Wt),i.setAttribute("aria-hidden","true"),i.className=E,sn&&clearInterval(sn),l.unbind(c.scrollWrap,x,c),l.unbind(window,"scroll",c),Mr(),Fn(),Pn=null},panTo:function(a,u,h){h||(a>P.min.x?a=P.min.x:a<P.max.x&&(a=P.max.x),u>P.min.y?u=P.min.y:u<P.max.y&&(u=P.max.y)),I.x=a,I.y=u,me()},handleEvent:function(a){a=a||window.event,Y[a.type]&&Y[a.type](a)},goTo:function(a){a=Ci(a);var u=a-S;ye=u,S=a,c.currItem=bt(S),je-=u,Ei(de.x*je),Fn(),Ie=!1,c.updateCurrItem()},next:function(){c.goTo(S+1)},prev:function(){c.goTo(S-1)},updateCurrZoomItem:function(a){if(a&&W("beforeChange",0),te[1].el.children.length){var u=te[1].el.children[0];l.hasClass(u,"pswp__zoom-wrap")?Xe=u.style:Xe=null}else Xe=null;P=c.currItem.bounds,st=F=c.currItem.initialZoomLevel,I.x=P.center.x,I.y=P.center.y,a&&W("afterChange")},invalidateCurrItems:function(){ze=!0;for(var a=0;a<m;a++)te[a].item&&(te[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(ye!==0){var u=Math.abs(ye),h;if(!(a&&u<2)){c.currItem=bt(S),He=!1,W("beforeChange",ye),u>=m&&(A+=ye+(ye>0?-m:m),u=m);for(var f=0;f<u;f++)ye>0?(h=te.shift(),te[m-1]=h,A++,cn((A+2)*de.x,h.el.style),c.setContent(h,S-u+f+1+1)):(h=te.pop(),te.unshift(h),A--,cn(A*de.x,h.el.style),c.setContent(h,S+u-f-1-1));if(Xe&&Math.abs(ye)===1){var y=bt(on);y.initialZoomLevel!==F&&(Vn(y,Q),Ut(y),Dn(y))}ye=0,c.updateCurrZoomItem(),on=S,W("afterChange")}}},updateSize:function(a){if(!an&&p.modal){var u=l.getScrollY();if(pe!==u&&(i.style.top=u+"px",pe=u),!a&&xe.x===window.innerWidth&&xe.y===window.innerHeight)return;xe.x=window.innerWidth,xe.y=window.innerHeight,i.style.height=xe.y+"px"}if(Q.x=c.scrollWrap.clientWidth,Q.y=c.scrollWrap.clientHeight,oo(),de.x=Q.x+Math.round(Q.x*p.spacing),de.y=Q.y,Ei(de.x*je),W("beforeResize"),A!==void 0){for(var h,f,y,w=0;w<m;w++)h=te[w],cn((w+A)*de.x,h.el.style),y=S+w-1,p.loop&&Ne()>2&&(y=Ci(y)),f=bt(y),f&&(ze||f.needsUpdate||!f.bounds)?(c.cleanSlide(f),c.setContent(h,y),w===1&&(c.currItem=f,c.updateCurrZoomItem(!0)),f.needsUpdate=!1):h.index===-1&&y>=0&&c.setContent(h,y),f&&f.container&&(Vn(f,Q),Ut(f),Dn(f));ze=!1}st=F=c.currItem.initialZoomLevel,P=c.currItem.bounds,P&&(I.x=P.center.x,I.y=P.center.y,me(!0)),W("resize")},zoomTo:function(a,u,h,f,y){u&&(st=F,Hn.x=Math.abs(u.x)-I.x,Hn.y=Math.abs(u.y)-I.y,be(we,I));var w=br(a,!1),M={};so("x",w,M,a),so("y",w,M,a);var D=F,R={x:I.x,y:I.y};no(M);var B=function(oe){oe===1?(F=a,I.x=M.x,I.y=M.y):(F=(a-D)*oe+D,I.x=(M.x-R.x)*oe+R.x,I.y=(M.y-R.y)*oe+R.y),y&&y(oe),me(oe===1)};h?Ln("customZoomTo",0,1,h,f||l.easing.sine.inOut,B):B(1)}},ao=30,Er=10,lo,Ti,Ce={},Dt={},Ee={},Te={},dn={},gt=[],kt={},Wn,Ft=[],hn={},Tr,Bn,Un,Ii=0,Si=g(),Ir=0,Qe,Sr,Lt,fn,xi,_t,De,at,co,P,lt=g(),Xe,Ie,Hn=g(),pn=g(),yt,xr,Mi,Ni,Ai,kc=function(a,u){return a.x===u.x&&a.y===u.y},Fc=function(a,u){return Math.abs(a.x-u.x)<d&&Math.abs(a.y-u.y)<d},uo=function(a,u){return hn.x=Math.abs(a.x-u.x),hn.y=Math.abs(a.y-u.y),Math.sqrt(hn.x*hn.x+hn.y*hn.y)},Mr=function(){xi&&(v(xi),xi=null)},ho=function(){Qe&&(xi=ln(ho),qc())},Lc=function(){return!(p.scaleMode==="fit"&&F===c.currItem.initialZoomLevel)},fo=function(a,u){return!a||a===document||a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:u(a)?a:fo(a.parentNode,u)},Nr={},po=function(a,u){return Nr.prevent=!fo(a.target,p.isClickableElement),W("preventDragEvent",a,u,Nr),Nr.prevent},mo=function(a,u){return u.x=a.pageX,u.y=a.pageY,u.id=a.identifier,u},go=function(a,u,h){h.x=(a.x+u.x)*.5,h.y=(a.y+u.y)*.5},Wc=function(a,u,h){if(a-Ti>50){var f=Ft.length>2?Ft.shift():{};f.x=u,f.y=h,Ft.push(f),Ti=a}},_o=function(){var a=I.y-c.currItem.initialPosition.y;return 1-Math.abs(a/(Q.y/2))},qn={},Bc={},vt=[],Ri,Ar=function(a){for(;vt.length>0;)vt.pop();return Ke?(Ri=0,gt.forEach(function(u){Ri===0?vt[0]=u:Ri===1&&(vt[1]=u),Ri++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(vt[0]=mo(a.touches[0],qn),a.touches.length>1&&(vt[1]=mo(a.touches[1],Bc))):(qn.x=a.pageX,qn.y=a.pageY,qn.id="",vt[0]=qn),vt},yo=function(a,u){var h,f=I[a]+u[a],y,w=u[a]>0,M=lt.x+u.x,D=lt.x-kt.x,R,B;if(f>P.min[a]||f<P.max[a]?h=p.panEndFriction:h=1,f=I[a]+u[a]*h,(p.allowPanToNext||F===c.currItem.initialZoomLevel)&&(Xe?yt==="h"&&a==="x"&&!Lt&&(w?(f>P.min[a]&&(h=p.panEndFriction,P.min[a]-f,y=P.min[a]-we[a]),(y<=0||D<0)&&Ne()>1?(B=M,D<0&&M>kt.x&&(B=kt.x)):P.min.x!==P.max.x&&(R=f)):(f<P.max[a]&&(h=p.panEndFriction,f-P.max[a],y=we[a]-P.max[a]),(y<=0||D>0)&&Ne()>1?(B=M,D>0&&M<kt.x&&(B=kt.x)):P.min.x!==P.max.x&&(R=f))):B=M,a==="x"))return B!==void 0&&(Ei(B,!0),B===kt.x?_t=!1:_t=!0),P.min.x!==P.max.x&&(R!==void 0?I.x=R:_t||(I.x+=u.x*h)),B!==void 0;Ie||_t||F>c.currItem.fitRatio&&(I[a]+=u[a]*h)},Uc=function(a){if(!(a.type==="mousedown"&&a.button>0)){if(mn){a.preventDefault();return}if(!(Un&&a.type==="mousedown")){if(po(a,!0)&&a.preventDefault(),W("pointerDown"),Ke){var u=l.arraySearch(gt,a.pointerId,"id");u<0&&(u=gt.length),gt[u]={x:a.pageX,y:a.pageY,id:a.pointerId}}var h=Ar(a),f=h.length;De=null,Fn(),(!Qe||f===1)&&(Qe=xr=!0,l.bind(window,z,c),Tr=Ai=Mi=Bn=_t=fn=Sr=Lt=!1,yt=null,W("firstTouchStart",h),be(we,I),ee.x=ee.y=0,be(Te,h[0]),be(dn,Te),kt.x=de.x*je,Ft=[{x:Te.x,y:Te.y}],Ti=lo=Ze(),br(F,!0),Mr(),ho()),!at&&f>1&&!Ie&&!_t&&(st=F,Lt=!1,at=Sr=!0,ee.y=ee.x=0,be(we,I),be(Ce,h[0]),be(Dt,h[1]),go(Ce,Dt,pn),Hn.x=Math.abs(pn.x)-I.x,Hn.y=Math.abs(pn.y)-I.y,co=uo(Ce,Dt))}}},Hc=function(a){if(a.preventDefault(),Ke){var u=l.arraySearch(gt,a.pointerId,"id");if(u>-1){var h=gt[u];h.x=a.pageX,h.y=a.pageY}}if(Qe){var f=Ar(a);if(!yt&&!fn&&!at)if(lt.x!==de.x*je)yt="h";else{var y=Math.abs(f[0].x-Te.x)-Math.abs(f[0].y-Te.y);Math.abs(y)>=Er&&(yt=y>0?"h":"v",De=f)}else De=f}},qc=function(){if(!!De){var a=De.length;if(a!==0)if(be(Ce,De[0]),Ee.x=Ce.x-Te.x,Ee.y=Ce.y-Te.y,at&&a>1){if(Te.x=Ce.x,Te.y=Ce.y,!Ee.x&&!Ee.y&&kc(De[1],Dt))return;be(Dt,De[1]),Lt||(Lt=!0,W("zoomGestureStarted"));var u=uo(Ce,Dt),h=zc(u);h>c.currItem.initialZoomLevel+c.currItem.initialZoomLevel/15&&(Ai=!0);var f=1,y=io(),w=ro();if(h<y)if(p.pinchToClose&&!Ai&&st<=c.currItem.initialZoomLevel){var M=y-h,D=1-M/(y/1.2);ot(D),W("onPinchClose",D),Mi=!0}else f=(y-h)/y,f>1&&(f=1),h=y-f*(y/3);else h>w&&(f=(h-w)/(y*6),f>1&&(f=1),h=w+f*y);f<0&&(f=0),go(Ce,Dt,Si),ee.x+=Si.x-pn.x,ee.y+=Si.y-pn.y,be(pn,Si),I.x=yr("x",h),I.y=yr("y",h),Tr=h>F,F=h,me()}else{if(!yt||(xr&&(xr=!1,Math.abs(Ee.x)>=Er&&(Ee.x-=De[0].x-dn.x),Math.abs(Ee.y)>=Er&&(Ee.y-=De[0].y-dn.y)),Te.x=Ce.x,Te.y=Ce.y,Ee.x===0&&Ee.y===0))return;if(yt==="v"&&p.closeOnVerticalDrag&&!Lc()){ee.y+=Ee.y,I.y+=Ee.y;var R=_o();Bn=!0,W("onVerticalDrag",R),ot(R),me();return}Wc(Ze(),Ce.x,Ce.y),fn=!0,P=c.currItem.bounds;var B=yo("x",Ee);B||(yo("y",Ee),no(I),me())}}},Vc=function(a){if(L.isOldAndroid){if(Un&&a.type==="mouseup")return;a.type.indexOf("touch")>-1&&(clearTimeout(Un),Un=setTimeout(function(){Un=0},600))}W("pointerUp"),po(a,!1)&&a.preventDefault();var u;if(Ke){var h=l.arraySearch(gt,a.pointerId,"id");if(h>-1)if(u=gt.splice(h,1)[0],navigator.msPointerEnabled){var f={4:"mouse",2:"touch",3:"pen"};u.type=f[a.pointerType],u.type||(u.type=a.pointerType||"mouse")}else u.type=a.pointerType||"mouse"}var y=Ar(a),w,M=y.length;if(a.type==="mouseup"&&(M=0),M===2)return De=null,!0;M===1&&be(dn,y[0]),M===0&&!yt&&!Ie&&(u||(a.type==="mouseup"?u={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(u={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),W("touchRelease",a,u));var D=-1;if(M===0&&(Qe=!1,l.unbind(window,z,c),Mr(),at?D=0:Ir!==-1&&(D=Ze()-Ir)),Ir=M===1?Ze():-1,D!==-1&&D<150?w="zoom":w="swipe",at&&M<2&&(at=!1,M===1&&(w="zoomPointerUp"),W("zoomGestureEnded")),De=null,!(!fn&&!Lt&&!Ie&&!Bn)){if(Fn(),Wn||(Wn=$c()),Wn.calculateSwipeSpeed("x"),Bn){var R=_o();if(R<p.verticalDragRange)c.close();else{var B=I.y,oe=Ni;Ln("verticalDrag",0,1,300,l.easing.cubic.out,function(ct){I.y=(c.currItem.initialPosition.y-B)*ct+B,ot((1-oe)*ct+oe),me()}),W("onVerticalDrag",1)}return}if((_t||Ie)&&M===0){var et=Yc(w,Wn);if(et)return;w="zoomPointerUp"}if(!Ie){if(w!=="swipe"){jc();return}!_t&&F>c.currItem.fitRatio&&Gc(Wn)}}},$c=function(){var a,u,h={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(f){Ft.length>1?(a=Ze()-Ti+50,u=Ft[Ft.length-2][f]):(a=Ze()-lo,u=dn[f]),h.lastFlickOffset[f]=Te[f]-u,h.lastFlickDist[f]=Math.abs(h.lastFlickOffset[f]),h.lastFlickDist[f]>20?h.lastFlickSpeed[f]=h.lastFlickOffset[f]/a:h.lastFlickSpeed[f]=0,Math.abs(h.lastFlickSpeed[f])<.1&&(h.lastFlickSpeed[f]=0),h.slowDownRatio[f]=.95,h.slowDownRatioReverse[f]=1-h.slowDownRatio[f],h.speedDecelerationRatio[f]=1},calculateOverBoundsAnimOffset:function(f,y){h.backAnimStarted[f]||(I[f]>P.min[f]?h.backAnimDestination[f]=P.min[f]:I[f]<P.max[f]&&(h.backAnimDestination[f]=P.max[f]),h.backAnimDestination[f]!==void 0&&(h.slowDownRatio[f]=.7,h.slowDownRatioReverse[f]=1-h.slowDownRatio[f],h.speedDecelerationRatioAbs[f]<.05&&(h.lastFlickSpeed[f]=0,h.backAnimStarted[f]=!0,Ln("bounceZoomPan"+f,I[f],h.backAnimDestination[f],y||300,l.easing.sine.out,function(w){I[f]=w,me()}))))},calculateAnimOffset:function(f){h.backAnimStarted[f]||(h.speedDecelerationRatio[f]=h.speedDecelerationRatio[f]*(h.slowDownRatio[f]+h.slowDownRatioReverse[f]-h.slowDownRatioReverse[f]*h.timeDiff/10),h.speedDecelerationRatioAbs[f]=Math.abs(h.lastFlickSpeed[f]*h.speedDecelerationRatio[f]),h.distanceOffset[f]=h.lastFlickSpeed[f]*h.speedDecelerationRatio[f]*h.timeDiff,I[f]+=h.distanceOffset[f])},panAnimLoop:function(){if(Me.zoomPan&&(Me.zoomPan.raf=ln(h.panAnimLoop),h.now=Ze(),h.timeDiff=h.now-h.lastNow,h.lastNow=h.now,h.calculateAnimOffset("x"),h.calculateAnimOffset("y"),me(),h.calculateOverBoundsAnimOffset("x"),h.calculateOverBoundsAnimOffset("y"),h.speedDecelerationRatioAbs.x<.05&&h.speedDecelerationRatioAbs.y<.05)){I.x=Math.round(I.x),I.y=Math.round(I.y),me(),kn("zoomPan");return}}};return h},Gc=function(a){if(a.calculateSwipeSpeed("y"),P=c.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05)return a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0;Cr("zoomPan"),a.lastNow=Ze(),a.panAnimLoop()},Yc=function(a,u){var h;Ie||(Ii=S);var f;if(a==="swipe"){var y=Te.x-dn.x,w=u.lastFlickDist.x<10;y>ao&&(w||u.lastFlickOffset.x>20)?f=-1:y<-ao&&(w||u.lastFlickOffset.x<-20)&&(f=1)}var M;f&&(S+=f,S<0?(S=p.loop?Ne()-1:0,M=!0):S>=Ne()&&(S=p.loop?0:Ne()-1,M=!0),(!M||p.loop)&&(ye+=f,je-=f,h=!0));var D=de.x*je,R=Math.abs(D-lt.x),B;return!h&&D>lt.x!=u.lastFlickSpeed.x>0?B=333:(B=Math.abs(u.lastFlickSpeed.x)>0?R/Math.abs(u.lastFlickSpeed.x):333,B=Math.min(B,400),B=Math.max(B,250)),Ii===S&&(h=!1),Ie=!0,W("mainScrollAnimStart"),Ln("mainScroll",lt.x,D,B,l.easing.cubic.out,Ei,function(){Fn(),Ie=!1,Ii=-1,(h||Ii!==S)&&c.updateCurrItem(),W("mainScrollAnimComplete")}),h&&c.updateCurrItem(!0),h},zc=function(a){return 1/co*a*st},jc=function(){var a=F,u=io(),h=ro();F<u?a=u:F>h&&(a=h);var f=1,y,w=Ni;return Mi&&!Tr&&!Ai&&F<u?(c.close(),!0):(Mi&&(y=function(M){ot((f-w)*M+w)}),c.zoomTo(a,0,200,l.easing.cubic.out,y),!0)};On("Gestures",{publicMethods:{initGestures:function(){var a=function(u,h,f,y,w){pt=u+h,At=u+f,Rt=u+y,w?Ot=u+w:Ot=""};Ke=L.pointerEvent,Ke&&L.touch&&(L.touch=!1),Ke?navigator.msPointerEnabled?a("MSPointer","Down","Move","Up","Cancel"):a("pointer","down","move","up","cancel"):L.touch?(a("touch","start","move","end","cancel"),Ue=!0):a("mouse","down","move","up"),z=At+" "+Rt+" "+Ot,x=pt,Ke&&!Ue&&(Ue=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),c.likelyTouchDevice=Ue,Y[pt]=Uc,Y[At]=Hc,Y[Rt]=Vc,Ot&&(Y[Ot]=Y[Rt]),L.touch&&(x+=" mousedown",z+=" mousemove mouseup",Y.mousedown=Y[pt],Y.mousemove=Y[At],Y.mouseup=Y[Rt]),Ue||(p.allowPanToNext=!1)}}});var Wt,vo=function(a,u,h,f){Wt&&clearTimeout(Wt),mn=!0,Rr=!0;var y;a.initialLayout?(y=a.initialLayout,a.initialLayout=null):y=p.getThumbBoundsFn&&p.getThumbBoundsFn(S);var w=h?p.hideAnimationDuration:p.showAnimationDuration,M=function(){kn("initialZoom"),h?(c.template.removeAttribute("style"),c.bg.removeAttribute("style")):(ot(1),u&&(u.style.display="block"),l.addClass(i,"pswp--animated-in"),W("initialZoom"+(h?"OutEnd":"InEnd"))),f&&f(),mn=!1};if(!w||!y||y.x===void 0){W("initialZoom"+(h?"Out":"In")),F=a.initialZoomLevel,be(I,a.initialPosition),me(),i.style.opacity=h?0:1,ot(1),w?setTimeout(function(){M()},w):M();return}var D=function(){var R=O,B=!c.currItem.src||c.currItem.loadError||p.showHideOpacity;a.miniImg&&(a.miniImg.style.webkitBackfaceVisibility="hidden"),h||(F=y.w/a.w,I.x=y.x,I.y=y.y-q,c[B?"template":"bg"].style.opacity=.001,me()),Cr("initialZoom"),h&&!R&&l.removeClass(i,"pswp--animated-in"),B&&(h?l[(R?"remove":"add")+"Class"](i,"pswp--animate_opacity"):setTimeout(function(){l.addClass(i,"pswp--animate_opacity")},30)),Wt=setTimeout(function(){if(W("initialZoom"+(h?"Out":"In")),!h)F=a.initialZoomLevel,be(I,a.initialPosition),me(),ot(1),B?i.style.opacity=1:ot(1),Wt=setTimeout(M,w+20);else{var oe=y.w/a.w,et={x:I.x,y:I.y},ct=F,_n=Ni,Gn=function(tt){tt===1?(F=oe,I.x=y.x,I.y=y.y-pe):(F=(oe-ct)*tt+ct,I.x=(y.x-et.x)*tt+et.x,I.y=(y.y-pe-et.y)*tt+et.y),me(),B?i.style.opacity=1-tt:ot(_n-tt*_n)};R?Ln("initialZoom",0,1,w,l.easing.cubic.out,Gn,M):(Gn(1),Wt=setTimeout(M,w+20))}},h?25:90)};D()},wt,ke={},Bt=[],Rr,mn,Kc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return wt.length}},bt,Ne,wo=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},Zc=function(a,u,h){var f=a.bounds;f.center.x=Math.round((ke.x-u)/2),f.center.y=Math.round((ke.y-h)/2)+a.vGap.top,f.max.x=u>ke.x?Math.round(ke.x-u):f.center.x,f.max.y=h>ke.y?Math.round(ke.y-h)+a.vGap.top:f.center.y,f.min.x=u>ke.x?0:f.center.x,f.min.y=h>ke.y?a.vGap.top:f.center.y},Vn=function(a,u,h){if(a.src&&!a.loadError){var f=!h;if(f&&(a.vGap||(a.vGap={top:0,bottom:0}),W("parseVerticalMargin",a)),ke.x=u.x,ke.y=u.y-a.vGap.top-a.vGap.bottom,f){var y=ke.x/a.w,w=ke.y/a.h;a.fitRatio=y<w?y:w;var M=p.scaleMode;M==="orig"?h=1:M==="fit"&&(h=a.fitRatio),h>1&&(h=1),a.initialZoomLevel=h,a.bounds||(a.bounds=wo())}return h?(Zc(a,a.w*h,a.h*h),f&&h===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds):void 0}else return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=wo(),a.initialPosition=a.bounds.center,a.bounds},Oi=function(a,u,h,f,y,w){u.loadError||f&&(u.imageAppended=!0,Ut(u,f,u===c.currItem&&He),h.appendChild(f),w&&setTimeout(function(){u&&u.loaded&&u.placeholder&&(u.placeholder.style.display="none",u.placeholder=null)},500))},bo=function(a){a.loading=!0,a.loaded=!1;var u=a.img=l.createEl("pswp__img","img"),h=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,u.onload=u.onerror=null,u=null};return u.onload=h,u.onerror=function(){a.loadError=!0,h()},u.src=a.src,u},Co=function(a,u){if(a.src&&a.loadError&&a.container)return u&&(a.container.innerHTML=""),a.container.innerHTML=p.errorMsg.replace("%url%",a.src),!0},Ut=function(a,u,h){if(!!a.src){u||(u=a.container.lastChild);var f=h?a.w:Math.round(a.w*a.fitRatio),y=h?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=f+"px",a.placeholder.style.height=y+"px"),u.style.width=f+"px",u.style.height=y+"px"}},Eo=function(){if(Bt.length){for(var a,u=0;u<Bt.length;u++)a=Bt[u],a.holder.index===a.index&&Oi(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);Bt=[]}};On("Controller",{publicMethods:{lazyLoadItem:function(a){a=Ci(a);var u=bt(a);!u||(u.loaded||u.loading)&&!ze||(W("gettingData",a,u),!!u.src&&bo(u))},initController:function(){l.extend(p,Kc,!0),c.items=wt=s,bt=c.getItemAt,Ne=p.getNumItemsFn,Ne()<3&&(p.loop=!1),ne("beforeChange",function(a){var u=p.preload,h=a===null?!0:a>=0,f=Math.min(u[0],Ne()),y=Math.min(u[1],Ne()),w;for(w=1;w<=(h?y:f);w++)c.lazyLoadItem(S+w);for(w=1;w<=(h?f:y);w++)c.lazyLoadItem(S-w)}),ne("initialLayout",function(){c.currItem.initialLayout=p.getThumbBoundsFn&&p.getThumbBoundsFn(S)}),ne("mainScrollAnimComplete",Eo),ne("initialZoomInEnd",Eo),ne("destroy",function(){for(var a,u=0;u<wt.length;u++)a=wt[u],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);Bt=null})},getItemAt:function(a){return a>=0&&wt[a]!==void 0?wt[a]:!1},allowProgressiveImg:function(){return p.forceProgressiveLoading||!Ue||p.mouseUsed||screen.width>1200},setContent:function(a,u){p.loop&&(u=Ci(u));var h=c.getItemAt(a.index);h&&(h.container=null);var f=c.getItemAt(u),y;if(!f){a.el.innerHTML="";return}W("gettingData",u,f),a.index=u,a.item=f;var w=f.container=l.createEl("pswp__zoom-wrap");if(!f.src&&f.html&&(f.html.tagName?w.appendChild(f.html):w.innerHTML=f.html),Co(f),Vn(f,Q),f.src&&!f.loadError&&!f.loaded){if(f.loadComplete=function(R){if(!!b){if(a&&a.index===u){if(Co(R,!0)){R.loadComplete=R.img=null,Vn(R,Q),Dn(R),a.index===S&&c.updateCurrZoomItem();return}R.imageAppended?!mn&&R.placeholder&&(R.placeholder.style.display="none",R.placeholder=null):L.transform&&(Ie||mn)?Bt.push({item:R,baseDiv:w,img:R.img,index:u,holder:a,clearPlaceholder:!0}):Oi(u,R,w,R.img,Ie||mn,!0)}R.loadComplete=null,R.img=null,W("imageLoadComplete",u,R)}},l.features.transform){var M="pswp__img pswp__img--placeholder";M+=f.msrc?"":" pswp__img--placeholder--blank";var D=l.createEl(M,f.msrc?"img":"");f.msrc&&(D.src=f.msrc),Ut(f,D),w.appendChild(D),f.placeholder=D}f.loading||bo(f),c.allowProgressiveImg()&&(!Rr&&L.transform?Bt.push({item:f,baseDiv:w,img:f.img,index:u,holder:a}):Oi(u,f,w,f.img,!0,!0))}else f.src&&!f.loadError&&(y=l.createEl("pswp__img","img"),y.style.opacity=1,y.src=f.src,Ut(f,y),Oi(u,f,w,y));!Rr&&u===S?(Xe=w.style,vo(f,y||f.img)):Dn(f),a.el.innerHTML="",a.el.appendChild(w)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var Ct,Or={},Pr=function(a,u,h){var f=document.createEvent("CustomEvent"),y={origEvent:a,target:a.target,releasePoint:u,pointerType:h||"touch"};f.initCustomEvent("pswpTap",!0,!0,y),a.target.dispatchEvent(f)};On("Tap",{publicMethods:{initTap:function(){ne("firstTouchStart",c.onTapStart),ne("touchRelease",c.onTapRelease),ne("destroy",function(){Or={},Ct=null})},onTapStart:function(a){a.length>1&&(clearTimeout(Ct),Ct=null)},onTapRelease:function(a,u){if(!!u&&!fn&&!Sr&&!un){var h=u;if(Ct&&(clearTimeout(Ct),Ct=null,Fc(h,Or))){W("doubleTap",h);return}if(u.type==="mouse"){Pr(a,u,"mouse");return}var f=a.target.tagName.toUpperCase();if(f==="BUTTON"||l.hasClass(a.target,"pswp__single-tap")){Pr(a,u);return}be(Or,h),Ct=setTimeout(function(){Pr(a,u),Ct=null},300)}}}});var Ae;On("DesktopZoom",{publicMethods:{initDesktopZoom:function(){se||(Ue?ne("mouseUsed",function(){c.setupDesktopZoom()}):c.setupDesktopZoom(!0))},setupDesktopZoom:function(a){Ae={};var u="wheel mousewheel DOMMouseScroll";ne("bindEvents",function(){l.bind(i,u,c.handleMouseWheel)}),ne("unbindEvents",function(){Ae&&l.unbind(i,u,c.handleMouseWheel)}),c.mouseZoomedIn=!1;var h,f=function(){c.mouseZoomedIn&&(l.removeClass(i,"pswp--zoomed-in"),c.mouseZoomedIn=!1),F<1?l.addClass(i,"pswp--zoom-allowed"):l.removeClass(i,"pswp--zoom-allowed"),y()},y=function(){h&&(l.removeClass(i,"pswp--dragging"),h=!1)};ne("resize",f),ne("afterChange",f),ne("pointerDown",function(){c.mouseZoomedIn&&(h=!0,l.addClass(i,"pswp--dragging"))}),ne("pointerUp",y),a||f()},handleMouseWheel:function(a){if(F<=c.currItem.fitRatio)return p.modal&&(!p.closeOnScroll||un||Qe?a.preventDefault():Be&&Math.abs(a.deltaY)>2&&(O=!0,c.close())),!0;if(a.stopPropagation(),Ae.x=0,"deltaX"in a)a.deltaMode===1?(Ae.x=a.deltaX*18,Ae.y=a.deltaY*18):(Ae.x=a.deltaX,Ae.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(Ae.x=-.16*a.wheelDeltaX),a.wheelDeltaY?Ae.y=-.16*a.wheelDeltaY:Ae.y=-.16*a.wheelDelta;else if("detail"in a)Ae.y=a.detail;else return;br(F,!0);var u=I.x-Ae.x,h=I.y-Ae.y;(p.modal||u<=P.min.x&&u>=P.max.x&&h<=P.min.y&&h>=P.max.y)&&a.preventDefault(),c.panTo(u,h)},toggleDesktopZoom:function(a){a=a||{x:Q.x/2+ft.x,y:Q.y/2+ft.y};var u=p.getDoubleTapZoom(!0,c.currItem),h=F===u;c.mouseZoomedIn=!h,c.zoomTo(h?c.currItem.initialZoomLevel:u,a,333),l[(h?"remove":"add")+"Class"](i,"pswp--zoomed-in")}}});var Qc={history:!0,galleryUID:1},Dr,To,$n,Pi,kr,Io,ge,gn,Fr,Lr,Je,Wr,Br=function(){return Je.hash.substring(1)},So=function(){Dr&&clearTimeout(Dr),$n&&clearTimeout($n)},xo=function(){var a=Br(),u={};if(a.length<5)return u;var h,f=a.split("&");for(h=0;h<f.length;h++)if(!!f[h]){var y=f[h].split("=");y.length<2||(u[y[0]]=y[1])}if(p.galleryPIDs){var w=u.pid;for(u.pid=0,h=0;h<wt.length;h++)if(wt[h].pid===w){u.pid=h;break}}else u.pid=parseInt(u.pid,10)-1;return u.pid<0&&(u.pid=0),u},Ur=function(){if($n&&clearTimeout($n),un||Qe){$n=setTimeout(Ur,500);return}Pi?clearTimeout(To):Pi=!0;var a=S+1,u=bt(S);u.hasOwnProperty("pid")&&(a=u.pid);var h=ge+"&gid="+p.galleryUID+"&pid="+a;gn||Je.hash.indexOf(h)===-1&&(Lr=!0);var f=Je.href.split("#")[0]+"#"+h;Wr?"#"+h!==window.location.hash&&history[gn?"replaceState":"pushState"]("",document.title,f):gn?Je.replace(f):Je.hash=h,gn=!0,To=setTimeout(function(){Pi=!1},60)};On("History",{publicMethods:{initHistory:function(){if(l.extend(p,Qc,!0),!!p.history){Je=window.location,Lr=!1,Fr=!1,gn=!1,ge=Br(),Wr="pushState"in history,ge.indexOf("gid=")>-1&&(ge=ge.split("&gid=")[0],ge=ge.split("?gid=")[0]),ne("afterChange",c.updateURL),ne("unbindEvents",function(){l.unbind(window,"hashchange",c.onHashChange)});var a=function(){Io=!0,Fr||(Lr?history.back():ge?Je.hash=ge:Wr?history.pushState("",document.title,Je.pathname+Je.search):Je.hash=""),So()};ne("unbindEvents",function(){O&&a()}),ne("destroy",function(){Io||a()}),ne("firstUpdate",function(){S=xo().pid});var u=ge.indexOf("pid=");u>-1&&(ge=ge.substring(0,u),ge.slice(-1)==="&"&&(ge=ge.slice(0,-1))),setTimeout(function(){b&&l.bind(window,"hashchange",c.onHashChange)},40)}},onHashChange:function(){if(Br()===ge){Fr=!0,c.close();return}Pi||(kr=!0,c.goTo(xo().pid),kr=!1)},updateURL:function(){So(),!kr&&(gn?Dr=setTimeout(Ur,800):Ur())}}}),l.extend(c,Dc)};return t})})(Yo);var C_=Yo.exports,zo={exports:{}};/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */(function(n,e){(function(t,i){n.exports=i()})(Go,function(){var t=function(i,r){var s=this,o=!1,l=!0,c,d,m,p,g,b,T,O=!0,S,G,A,ee,we,I,z,x,Y={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(v,E){return v.title?(E.children[0].innerHTML=v.title,!0):(E.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return i.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return i.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},Q,F=function(v){if(Q)return!0;v=v||window.event,x.timeToIdle&&x.mouseUsed&&!G&&pt();for(var E=v.target||v.srcElement,q,se=E.getAttribute("class")||"",pe,L=0;L<mt.length;L++)q=mt[L],q.onTap&&se.indexOf("pswp__"+q.name)>-1&&(q.onTap(),pe=!0);if(pe){v.stopPropagation&&v.stopPropagation(),Q=!0;var xe=r.features.isOldAndroid?600:30;setTimeout(function(){Q=!1},xe)}},st=function(){return!i.likelyTouchDevice||x.mouseUsed||screen.width>x.fitControlsWidth},Ye=function(v,E,q){r[(q?"add":"remove")+"Class"](v,"pswp__"+E)},rn=function(){var v=x.getNumItemsFn()===1;v!==z&&(Ye(d,"ui--one-slide",v),z=v)},sn=function(){Ye(T,"share-modal--hidden",O)},ze=function(){return O=!O,O?(r.removeClass(T,"pswp__share-modal--fade-in"),setTimeout(function(){O&&sn()},300)):(sn(),setTimeout(function(){O||r.addClass(T,"pswp__share-modal--fade-in")},30)),O||ft(),!1},je=function(v){v=v||window.event;var E=v.target||v.srcElement;return i.shout("shareLinkClick",v,E),E.href?E.hasAttribute("download")?!0:(window.open(E.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),O||ze(),!1):!1},ft=function(){for(var v="",E,q,se,pe,L,xe=0;xe<x.shareButtons.length;xe++)E=x.shareButtons[xe],se=x.getImageURLForShare(E),pe=x.getPageURLForShare(E),L=x.getTextForShare(E),q=E.url.replace("{{url}}",encodeURIComponent(pe)).replace("{{image_url}}",encodeURIComponent(se)).replace("{{raw_image_url}}",se).replace("{{text}}",encodeURIComponent(L)),v+='<a href="'+q+'" target="_blank" class="pswp__share--'+E.id+'"'+(E.download?"download":"")+">"+E.label+"</a>",x.parseShareButtonOut&&(v=x.parseShareButtonOut(E,v));T.children[0].innerHTML=v,T.children[0].onclick=je},de=function(v){for(var E=0;E<x.closeElClasses.length;E++)if(r.hasClass(v,"pswp__"+x.closeElClasses[E]))return!0},te,on,ye=0,pt=function(){clearTimeout(on),ye=0,G&&s.setIdle(!1)},At=function(v){v=v||window.event;var E=v.relatedTarget||v.toElement;(!E||E.nodeName==="HTML")&&(clearTimeout(on),on=setTimeout(function(){s.setIdle(!0)},x.timeToIdleOutside))},Rt=function(){x.fullscreenEl&&!r.features.isOldAndroid&&(c||(c=s.getFullscreenAPI()),c?(r.bind(document,c.eventK,s.updateFullscreen),s.updateFullscreen(),r.addClass(i.template,"pswp--supports-fs")):r.removeClass(i.template,"pswp--supports-fs"))},Ot=function(){x.preloaderEl&&(Be(!0),A("beforeChange",function(){clearTimeout(I),I=setTimeout(function(){i.currItem&&i.currItem.loading?(!i.allowProgressiveImg()||i.currItem.img&&!i.currItem.img.naturalWidth)&&Be(!1):Be(!0)},x.loadingIndicatorDelay)}),A("imageLoadComplete",function(v,E){i.currItem===E&&Be(!0)}))},Be=function(v){we!==v&&(Ye(ee,"preloader--active",!v),we=v)},Ke=function(v){var E=v.vGap;if(st()){var q=x.barsSize;if(x.captionEl&&q.bottom==="auto")if(p||(p=r.createEl("pswp__caption pswp__caption--fake"),p.appendChild(r.createEl("pswp__caption__center")),d.insertBefore(p,m),r.addClass(d,"pswp__ui--fit")),x.addCaptionHTMLFn(v,p,!0)){var se=p.clientHeight;E.bottom=parseInt(se,10)||44}else E.bottom=q.top;else E.bottom=q.bottom==="auto"?0:q.bottom;E.top=q.top}else E.top=E.bottom=0},an=function(){x.timeToIdle&&A("mouseUsed",function(){r.bind(document,"mousemove",pt),r.bind(document,"mouseout",At),te=setInterval(function(){ye++,ye===2&&s.setIdle(!0)},x.timeToIdle/2)})},Ue=function(){A("onVerticalDrag",function(E){l&&E<.95?s.hideControls():!l&&E>=.95&&s.showControls()});var v;A("onPinchClose",function(E){l&&E<.9?(s.hideControls(),v=!0):v&&!l&&E>.9&&s.showControls()}),A("zoomGestureEnded",function(){v=!1,v&&!l&&s.showControls()})},mt=[{name:"caption",option:"captionEl",onInit:function(v){m=v}},{name:"share-modal",option:"shareEl",onInit:function(v){T=v},onTap:function(){ze()}},{name:"button--share",option:"shareEl",onInit:function(v){b=v},onTap:function(){ze()}},{name:"button--zoom",option:"zoomEl",onTap:i.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(v){g=v}},{name:"button--close",option:"closeEl",onTap:i.close},{name:"button--arrow--left",option:"arrowEl",onTap:i.prev},{name:"button--arrow--right",option:"arrowEl",onTap:i.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(v){ee=v}}],ln=function(){var v,E,q,se=function(L){if(!!L)for(var xe=L.length,He=0;He<xe;He++){v=L[He],E=v.className;for(var Pt=0;Pt<mt.length;Pt++)q=mt[Pt],E.indexOf("pswp__"+q.name)>-1&&(x[q.option]?(r.removeClass(v,"pswp__element--disabled"),q.onInit&&q.onInit(v)):r.addClass(v,"pswp__element--disabled"))}};se(d.children);var pe=r.getChildByClass(d,"pswp__top-bar");pe&&se(pe.children)};s.init=function(){r.extend(i.options,Y,!0),x=i.options,d=r.getChildByClass(i.scrollWrap,"pswp__ui"),A=i.listen,Ue(),A("beforeChange",s.update),A("doubleTap",function(v){var E=i.currItem.initialZoomLevel;i.getZoomLevel()!==E?i.zoomTo(E,v,333):i.zoomTo(x.getDoubleTapZoom(!1,i.currItem),v,333)}),A("preventDragEvent",function(v,E,q){var se=v.target||v.srcElement;se&&se.getAttribute("class")&&v.type.indexOf("mouse")>-1&&(se.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(se.tagName))&&(q.prevent=!1)}),A("bindEvents",function(){r.bind(d,"pswpTap click",F),r.bind(i.scrollWrap,"pswpTap",s.onGlobalTap),i.likelyTouchDevice||r.bind(i.scrollWrap,"mouseover",s.onMouseOver)}),A("unbindEvents",function(){O||ze(),te&&clearInterval(te),r.unbind(document,"mouseout",At),r.unbind(document,"mousemove",pt),r.unbind(d,"pswpTap click",F),r.unbind(i.scrollWrap,"pswpTap",s.onGlobalTap),r.unbind(i.scrollWrap,"mouseover",s.onMouseOver),c&&(r.unbind(document,c.eventK,s.updateFullscreen),c.isFullscreen()&&(x.hideAnimationDuration=0,c.exit()),c=null)}),A("destroy",function(){x.captionEl&&(p&&d.removeChild(p),r.removeClass(m,"pswp__caption--empty")),T&&(T.children[0].onclick=null),r.removeClass(d,"pswp__ui--over-close"),r.addClass(d,"pswp__ui--hidden"),s.setIdle(!1)}),x.showAnimationDuration||r.removeClass(d,"pswp__ui--hidden"),A("initialZoomIn",function(){x.showAnimationDuration&&r.removeClass(d,"pswp__ui--hidden")}),A("initialZoomOut",function(){r.addClass(d,"pswp__ui--hidden")}),A("parseVerticalMargin",Ke),ln(),x.shareEl&&b&&T&&(O=!0),rn(),an(),Rt(),Ot()},s.setIdle=function(v){G=v,Ye(d,"ui--idle",v)},s.update=function(){l&&i.currItem?(s.updateIndexIndicator(),x.captionEl&&(x.addCaptionHTMLFn(i.currItem,m),Ye(m,"caption--empty",!i.currItem.title)),o=!0):o=!1,O||ze(),rn()},s.updateFullscreen=function(v){v&&setTimeout(function(){i.setScrollOffset(0,r.getScrollY())},50),r[(c.isFullscreen()?"add":"remove")+"Class"](i.template,"pswp--fs")},s.updateIndexIndicator=function(){x.counterEl&&(g.innerHTML=i.getCurrentIndex()+1+x.indexIndicatorSep+x.getNumItemsFn())},s.onGlobalTap=function(v){v=v||window.event;var E=v.target||v.srcElement;if(!Q){if(v.detail&&v.detail.pointerType==="mouse"){if(de(E)){i.close();return}r.hasClass(E,"pswp__img")&&(i.getZoomLevel()===1&&i.getZoomLevel()<=i.currItem.fitRatio?x.clickToCloseNonZoomable&&i.close():i.toggleDesktopZoom(v.detail.releasePoint))}else if(x.tapToToggleControls&&(l?s.hideControls():s.showControls()),x.tapToClose&&(r.hasClass(E,"pswp__img")||de(E))){i.close();return}}},s.onMouseOver=function(v){v=v||window.event;var E=v.target||v.srcElement;Ye(d,"ui--over-close",de(E))},s.hideControls=function(){r.addClass(d,"pswp__ui--hidden"),l=!1},s.showControls=function(){l=!0,o||s.update(),r.removeClass(d,"pswp__ui--hidden")},s.supportsFullscreen=function(){var v=document;return!!(v.exitFullscreen||v.mozCancelFullScreen||v.webkitExitFullscreen||v.msExitFullscreen)},s.getFullscreenAPI=function(){var v=document.documentElement,E,q="fullscreenchange";return v.requestFullscreen?E={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:q}:v.mozRequestFullScreen?E={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+q}:v.webkitRequestFullscreen?E={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+q}:v.msRequestFullscreen&&(E={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),E&&(E.enter=function(){if(S=x.closeOnScroll,x.closeOnScroll=!1,this.enterK==="webkitRequestFullscreen")i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);else return i.template[this.enterK]()},E.exit=function(){return x.closeOnScroll=S,document[this.exitK]()},E.isFullscreen=function(){return document[this.elementK]}),E}};return t})})(zo);var E_=zo.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(n,e){if(!n)throw vn(e)},vn=function(n){return new Error("Firebase Database ("+jo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Rd=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,c=r+2<n.length,d=c?n[r+2]:0,m=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|d>>6,b=d&63;c||(b=64,o||(g=64)),i.push(t[m],t[p],t[g],t[b])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ko(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const d=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||d==null||p==null)throw Error();const g=s<<2|l>>4;if(i.push(g),d!==64){const b=l<<4&240|d>>2;if(i.push(b),p!==64){const T=d<<6&192|p;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Od=function(n){const e=Ko(n);return jr.encodeByteArray(e,!0)},Zo=function(n){try{return jr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n){return Qo(void 0,n)}function Qo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Dd(t)||(n[t]=Qo(n[t],e[t]));return n}function Dd(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kd())}function Fd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jo(){return jo.NODE_ADMIN===!0}function Wd(){return typeof indexedDB=="object"}function Bd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Ud(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="FirebaseError";class Qn extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=Hd,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?qd(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Qn(r,l,i)}}function qd(n,e){return n.replace(Vd,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Vd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){return JSON.parse(n)}function le(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=Xn(Zo(s[0])||""),t=Xn(Zo(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},$d=function(n){const e=ea(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Gd=function(n){const e=ea(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ta(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qi(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Vi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(na(s)&&na(o)){if(!Vi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function na(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],d,m;for(let p=0;p<80;p++){p<40?p<20?(d=l^s&(o^l),m=1518500249):(d=s^o^l,m=1859775393):p<60?(d=s&o|l&(s|o),m=2400959708):(d=s^o^l,m=3395469782);const g=(r<<5|r>>>27)+d+c+m+i[p]&4294967295;c=l,l=o,o=(s<<30|s>>>2)&4294967295,s=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function ia(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,C(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},$i=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=1e3,Zd=2,Qd=4*60*60*1e3,Xd=.5;function ra(n,e=Kd,t=Zd){const i=e*Math.pow(t,n),r=Math.round(Xd*i*(Math.random()-.5)*2);return Math.min(Qd,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){return n&&n._delegate?n._delegate:n}class It{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Kr;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(th(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:eh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eh(n){return n===qt?void 0:n}function th(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const ih={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},rh=Z.INFO,sh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},oh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=sh[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=rh,this._logHandler=oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ih[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qr="@firebase/app",sa="0.7.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Zr("@firebase/app"),ch="@firebase/app-compat",uh="@firebase/analytics-compat",dh="@firebase/analytics",hh="@firebase/app-check-compat",fh="@firebase/app-check",ph="@firebase/auth",mh="@firebase/auth-compat",gh="@firebase/database",_h="@firebase/database-compat",yh="@firebase/functions",vh="@firebase/functions-compat",wh="@firebase/installations",bh="@firebase/installations-compat",Ch="@firebase/messaging",Eh="@firebase/messaging-compat",Th="@firebase/performance",Ih="@firebase/performance-compat",Sh="@firebase/remote-config",xh="@firebase/remote-config-compat",Mh="@firebase/storage",Nh="@firebase/storage-compat",Ah="@firebase/firestore",Rh="@firebase/firestore-compat",Oh="firebase",Ph="9.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]",Dh={[Qr]:"fire-core",[ch]:"fire-core-compat",[dh]:"fire-analytics",[uh]:"fire-analytics-compat",[fh]:"fire-app-check",[hh]:"fire-app-check-compat",[ph]:"fire-auth",[mh]:"fire-auth-compat",[gh]:"fire-rtdb",[_h]:"fire-rtdb-compat",[yh]:"fire-fn",[vh]:"fire-fn-compat",[wh]:"fire-iid",[bh]:"fire-iid-compat",[Ch]:"fire-fcm",[Eh]:"fire-fcm-compat",[Th]:"fire-perf",[Ih]:"fire-perf-compat",[Sh]:"fire-rc",[xh]:"fire-rc-compat",[Mh]:"fire-gcs",[Nh]:"fire-gcs-compat",[Ah]:"fire-fst",[Rh]:"fire-fst-compat","fire-js":"fire-js",[Oh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Map,Jr=new Map;function kh(n,e){try{n.container.addComponent(e)}catch(t){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vt(n){const e=n.name;if(Jr.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,n);for(const t of Gi.values())kh(t,n);return!0}function Jn(n,e){return n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Yi=new Hi("app","Firebase",Fh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=Ph;function T_(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Yi.create("bad-app-name",{appName:String(i)});const r=Gi.get(i);if(r){if(Vi(n,r.options)&&Vi(t,r.config))return r;throw Yi.create("duplicate-app",{appName:i})}const s=new nh(i);for(const l of Jr.values())s.addComponent(l);const o=new Lh(n,t,s);return Gi.set(i,o),o}function aa(n=oa){const e=Gi.get(n);if(!e)throw Yi.create("no-app",{appName:n});return e}function nt(n,e,t){var i;let r=(i=Dh[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(l.join(" "));return}Vt(new It(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){Vt(new It("platform-logger",e=>new ah(e),"PRIVATE")),nt(Qr,sa,n),nt(Qr,sa,"esm2017"),nt("fire-js","")}Bh("");var Uh="firebase",Hh="9.6.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(Uh,Hh,"app");const la="@firebase/database",ca="0.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua="";function qh(n){ua=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Xn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vh(e)}}catch{}return new $h},$t=da("localStorage"),es=da("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Zr("@firebase/database"),Gh=function(){let n=1;return function(){return n++}}(),ha=function(n){const e=jd(n),t=new zd;t.update(e);const i=t.digest();return jr.encodeByteArray(i)},ei=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ei.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let Gt=null,fa=!0;const Yh=function(n,e){C(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Cn.logLevel=Z.VERBOSE,Gt=Cn.log.bind(Cn),e&&es.set("logging_enabled",!0)):typeof n=="function"?Gt=n:(Gt=null,es.remove("logging_enabled"))},_e=function(...n){if(fa===!0&&(fa=!1,Gt===null&&es.get("logging_enabled")===!0&&Yh(!0)),Gt){const e=ei.apply(null,n);Gt(e)}},ti=function(n){return function(...e){_e(n,...e)}},ts=function(...n){const e="FIREBASE INTERNAL ERROR: "+ei(...n);Cn.error(e)},Yt=function(...n){const e=`FIREBASE FATAL ERROR: ${ei(...n)}`;throw Cn.error(e),new Error(e)},Re=function(...n){const e="FIREBASE WARNING: "+ei(...n);Cn.warn(e)},zh=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},jh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},En="[MIN_NAME]",zt="[MAX_NAME]",Tn=function(n,e){if(n===e)return 0;if(n===En||e===zt)return-1;if(e===En||n===zt)return 1;{const t=_a(n),i=_a(e);return t!==null?i!==null?t-i==0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Kh=function(n,e){return n===e?0:n<e?-1:1},ni=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+le(e))},ns=function(n){if(typeof n!="object"||n===null)return le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=le(e[i]),t+=":",t+=ns(n[e[i]]);return t+="}",t},ma=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function Le(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ga=function(n){C(!pa(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,l,c;n===0?(s=0,o=0,r=1/n==-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const d=[];for(c=t;c;c-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)d.push(s%2?1:0),s=Math.floor(s/2);d.push(r?1:0),d.reverse();const m=d.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(m.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},Zh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Qh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Xh=new RegExp("^-?(0*)\\d{1,10}$"),Jh=-2147483648,ef=2147483647,_a=function(n){if(Xh.test(n)){const e=Number(n);if(e>=Jh&&e<=ef)return e}return null},ii=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Re("Exception was thrown by user callback.",t),e},Math.floor(0))}},tf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ri=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(_e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class is{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}is.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="5",ya="v",va="s",wa="r",ba="f",Ca=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ea="ls",sf="p",ss="ac",Ta="websocket",Ia="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,i,r,s=!1,o="",l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$t.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function af(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Sa(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let i;if(e===Ta)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ia)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);af(n)&&(t.ns=n.namespace);const r=[];return Le(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.counters_={}}incrementCounter(e,t=1){ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Pd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={},as={};function ls(n){const e=n.toString();return os[e]||(os[e]=new lf),os[e]}function cf(n,e){const t=n.toString();return as[t]||(as[t]=e()),as[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&ii(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="start",df="close",hf="pLPCommand",ff="pRTLPCB",Ma="id",Na="pw",Aa="ser",pf="cb",mf="seg",gf="ts",_f="d",yf="dframe",Ra=1870,Oa=30,vf=Ra-Oa,wf=25e3,bf=3e4;class In{constructor(e,t,i,r,s,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=ls(t),this.urlFn=c=>(this.appCheckToken&&(c[ss]=this.appCheckToken),Sa(t,Ia,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(bf)),jh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cs((...s)=>{const[o,l,c,d,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xa)this.id=l,this.password=c;else if(o===df)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[xa]="t",i[Aa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[pf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ya]=rs,this.transportSessionId&&(i[va]=this.transportSessionId),this.lastSessionId&&(i[Ea]=this.lastSessionId),this.applicationId&&(i[sf]=this.applicationId),this.appCheckToken&&(i[ss]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ca.test(location.hostname)&&(i[wa]=ba);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){In.forceAllow_=!0}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){return In.forceAllow_?!0:!In.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Zh()&&!Qh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Od(t),r=ma(i,vf);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[yf]="t",i[Ma]=e,i[Na]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class cs{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Gh(),window[hf+this.uniqueCallbackIdentifier]=e,window[ff+this.uniqueCallbackIdentifier]=t,this.myIFrame=cs.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){_e("frame writing exception"),l.stack&&_e(l.stack),_e(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_e("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ma]=this.myID,e[Na]=this.myPW,e[Aa]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Oa+i.length<=Ra;){const o=this.pendingSegs.shift();i=i+"&"+mf+r+"="+o.seg+"&"+gf+r+"="+o.ts+"&"+_f+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(wf)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{_e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=16384,Ef=45e3;let zi=null;typeof MozWebSocket!="undefined"?zi=MozWebSocket:typeof WebSocket!="undefined"&&(zi=WebSocket);class Ve{constructor(e,t,i,r,s,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=ls(t),this.connURL=Ve.connectionURL_(t,o,l,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r){const s={};return s[ya]=rs,typeof location!="undefined"&&location.hostname&&Ca.test(location.hostname)&&(s[wa]=ba),t&&(s[va]=t),i&&(s[Ea]=i),r&&(s[ss]=r),Sa(e,Ta,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$t.set("previous_websocket_failure",!0);try{if(!Jo()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new zi(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ve.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zi!==null&&!Ve.forceDisallow_}static previouslyFailed(){return $t.isInMemoryStorage||$t.get("previous_websocket_failure")===!0}markConnectionHealthy(){$t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Xn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ma(t,Cf);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ef))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ve.responsesRequiredToBeHealthy=2;Ve.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[In,Ve]}initTransports_(e){const t=Ve&&Ve.isAvailable();let i=t&&!Ve.previouslyFailed();if(e.webSocketOnly&&(t||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ve];else{const r=this.transports_=[];for(const s of us.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=6e4,If=5e3,Sf=10*1024,xf=100*1024,ds="t",Pa="d",Mf="s",Da="r",Nf="e",ka="o",Fa="a",La="n",Wa="p",Af="h";class Rf{constructor(e,t,i,r,s,o,l,c,d,m){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=d,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new us(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Sf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ds in e){const t=e[ds];t===Fa?this.upgradeIfSecondaryHealthy_():t===Da?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ka&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ni("t",e),i=ni("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wa,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fa,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:La,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ni("t",e),i=ni("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ni(ds,e);if(Pa in e){const i=e[Pa];if(t===Af)this.onHandshake_(i);else if(t===La){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Mf?this.onConnectionShutdown_(i):t===Da?this.onReset_(i):t===Nf?ts("Server Error: "+i):t===ka?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ts("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),rs!==i&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(If))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wa,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ua{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Xo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ji}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=32,qa=768;class K{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $(){return new K("")}function U(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function St(n){return n.pieces_.length-n.pieceNum_}function X(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new K(n.pieces_,e)}function Va(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Of(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $a(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ga(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new K(e,0)}function ae(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof K)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new K(t,0)}function H(n){return n.pieceNum_>=n.pieces_.length}function Oe(n,e){const t=U(n),i=U(e);if(t===null)return e;if(t===i)return Oe(X(n),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function hs(n,e){if(St(n)!==St(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function $e(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(St(n)>St(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Pf{constructor(e,t){this.errorPrefix_=t,this.parts_=$a(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$i(this.parts_[i]);Ya(this)}}function Df(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$i(e),Ya(n)}function kf(n){const e=n.parts_.pop();n.byteLength_-=$i(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ya(n){if(n.byteLength_>qa)throw new Error(n.errorPrefix_+"has a key path longer than "+qa+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ha)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ha+") or object contains a cycle "+jt(n))}function jt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Ua{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new fs}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=1e3,Ff=60*5*1e3,Lf=3*1e3,za=30*1e3,Wf=1.3,Bf=3e4,Uf="server_kill",ja=3;class dt extends Ba{constructor(e,t,i,r,s,o,l,c){super();if(this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=dt.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=si,this.maxReconnectDelay_=Ff,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Jo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ji.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(le(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new Kr,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,l,!1,null),t.resolve(l)):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))},Lf),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const c=l.d,d=l.s;dt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(d,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ut(e,"w")){const i=wn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=za)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$d(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ts("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bf&&(this.reconnectDelay_=si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},d=function(p){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:d};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);o?_e("getToken() completed but was canceled"):(_e("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new Rf(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,b=>{Re(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(Uf)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Re(p),c())}}}interrupt(e){_e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ta(this.interruptReasons_)&&(this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>ns(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new K(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){_e("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ja&&(this.reconnectDelay_=za,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_e("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ja&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ua.replace(/\./g,"-")]=1,Xo()?e["framework.cordova"]=1:Ld()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ji.getInstance().currentlyOnline();return ta(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new k(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new k(En,e),r=new k(En,t);return this.compare(i,r)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;class Ka extends Ki{static get __EMPTY_NODE(){return Zi}static set __EMPTY_NODE(e){Zi=e}compare(e,t){return Tn(e.name,t.name)}isDefinedOn(e){throw vn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return k.MIN}maxPost(){return new k(zt,Zi)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,Zi)}toString(){return".key"}}const Sn=new Ka;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:ce.RED,this.left=r!=null?r:Se.EMPTY_NODE,this.right=s!=null?s:Se.EMPTY_NODE}copy(e,t,i,r,s){return new ce(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Hf{copy(e,t,i,r,s){return this}insert(e,t,i){return new ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,t=Se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Qi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Qi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Qi(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new Hf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n,e){return Tn(n.name,e.name)}function ps(n,e){return Tn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;function Vf(n){ms=n}const Za=function(n){return typeof n=="number"?"number:"+ga(n):"string:"+n},Qa=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ut(e,".sv"),"Priority must be a string or number.")}else C(n===ms||n.isEmpty(),"priority of unexpected type.");C(n===ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;class ue{constructor(e,t=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qa(this.priorityNode_)}static set __childrenNodeConstructor(e){Xa=e}static get __childrenNodeConstructor(){return Xa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:U(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=U(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||St(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Za(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ga(this.value_):e+=this.value_,this.lazyHash_=ha(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=ue.VALUE_TYPE_ORDER.indexOf(t),s=ue.VALUE_TYPE_ORDER.indexOf(i);return C(r>=0,"Unknown leaf type: "+t),C(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja,el;function $f(n){Ja=n}function Gf(n){el=n}class Yf extends Ki{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Tn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return k.MIN}maxPost(){return new k(zt,new ue("[PRIORITY-POST]",el))}makePost(e,t){const i=Ja(e);return new k(t,new ue("[PRIORITY-POST]",i))}toString(){return".priority"}}const re=new Yf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=Math.log(2);class jf{constructor(e){const t=s=>parseInt(Math.log(s)/zf,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xi=function(n,e,t,i){n.sort(e);const r=function(c,d){const m=d-c;let p,g;if(m===0)return null;if(m===1)return p=n[c],g=t?t(p):p,new ce(g,p.node,ce.BLACK,null,null);{const b=parseInt(m/2,10)+c,T=r(c,b),O=r(b+1,d);return p=n[b],g=t?t(p):p,new ce(g,p.node,ce.BLACK,T,O)}},s=function(c){let d=null,m=null,p=n.length;const g=function(T,O){const S=p-T,G=p;p-=T;const A=r(S+1,G),ee=n[S],we=t?t(ee):ee;b(new ce(we,ee.node,O,null,A))},b=function(T){d?(d.left=T,d=T):(m=T,d=T)};for(let T=0;T<c.count;++T){const O=c.nextBitIsOne(),S=Math.pow(2,c.count-(T+1));O?g(S,ce.BLACK):(g(S,ce.BLACK),g(S,ce.RED))}return m},o=new jf(n.length),l=s(o);return new Se(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;const xn={};class ht{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return C(xn&&re,"ChildrenNode.ts has not been loaded"),gs=gs||new ht({".priority":xn},{".priority":re}),gs}get(e){const t=wn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Se?t:null}hasIndex(e){return ut(this.indexSet_,e.toString())}addIndex(e,t){C(e!==Sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(k.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let l;r?l=Xi(i,e.getCompare()):l=xn;const c=e.toString(),d=Object.assign({},this.indexSet_);d[c]=e;const m=Object.assign({},this.indexes_);return m[c]=l,new ht(m,d)}addToIndexes(e,t){const i=qi(this.indexes_,(r,s)=>{const o=wn(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),r===xn)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(k.Wrap);let d=c.getNext();for(;d;)d.name!==e.name&&l.push(d),d=c.getNext();return l.push(e),Xi(l,o.getCompare())}else return xn;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new k(e.name,l))),c.insert(e,e.node)}});return new ht(i,this.indexSet_)}removeFromIndexes(e,t){const i=qi(this.indexes_,r=>{if(r===xn)return r;{const s=t.get(e.name);return s?r.remove(new k(e.name,s)):r}});return new ht(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;class N{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Qa(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oi||(oi=new N(new Se(ps),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oi}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?oi:t}}getChild(e){const t=U(e);return t===null?this:this.getImmediateChild(t).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new k(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?oi:this.priorityNode_;return new N(r,o,s)}}updateChild(e,t){const i=U(e);if(i===null)return t;{C(U(e)!==".priority"||St(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(X(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(re,(o,l)=>{t[o]=l.val(e),i++,s&&N.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Za(this.getPriority().val())+":"),this.forEachChild(re,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":ha(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new k(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new k(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new k(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,k.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ai?-1:0}withIndex(e){if(e===Sn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(re),r=t.getIterator(re);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Sn?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kf extends N{constructor(){super(new Se(ps),N.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const ai=new Kf;Object.defineProperties(k,{MIN:{value:new k(En,N.EMPTY_NODE)},MAX:{value:new k(zt,ai)}});Ka.__EMPTY_NODE=N.EMPTY_NODE;ue.__childrenNodeConstructor=N;Vf(ai);Gf(ai);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=!0;function fe(n,e=null){if(n===null)return N.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ue(t,fe(e))}if(!(n instanceof Array)&&Zf){const t=[];let i=!1;if(Le(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=fe(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new k(o,c)))}}),t.length===0)return N.EMPTY_NODE;const s=Xi(t,qf,o=>o.name,ps);if(i){const o=Xi(t,re.getCompare());return new N(s,fe(e),new ht({".priority":o},{".priority":re}))}else return new N(s,fe(e),ht.Default)}else{let t=N.EMPTY_NODE;return Le(n,(i,r)=>{if(ut(n,i)&&i.substring(0,1)!=="."){const s=fe(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(fe(e))}}$f(fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Ki{constructor(e){super();this.indexPath_=e,C(!H(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Tn(e.name,t.name):s}makePost(e,t){const i=fe(e),r=N.EMPTY_NODE.updateChild(this.indexPath_,i);return new k(t,r)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,ai);return new k(zt,e)}toString(){return $a(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Ki{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Tn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,t){const i=fe(e);return new k(t,i)}toString(){return".value"}}const Jf=new Xf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n){return{type:"value",snapshotNode:n}}function li(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ci(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ui(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function tp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(ci(t,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(li(t,i)):o.trackChildChange(ui(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(re,(r,s)=>{t.hasChild(r)||i.trackChildChange(ci(r,s))}),t.isLeafNode()||t.forEachChild(re,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(ui(r,s,o))}else i.trackChildChange(li(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.indexedFilter_=new _s(e.getIndex()),this.index_=e.getIndex(),this.startPost_=di.getStartPost_(e),this.endPost_=di.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,r,s,o){return this.matches(new k(t,i))||(i=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=N.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(N.EMPTY_NODE);const s=this;return t.forEachChild(re,(o,l)=>{s.matches(new k(o,l))||(r=r.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.rangedFilter_=new di(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new k(t,i))||(i=N.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=N.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)r=r.updateImmediateChild(l.name,l.node),o++;else break}}else{r=t.withIndex(this.index_),r=r.updatePriority(N.EMPTY_NODE);let s,o,l,c;if(this.reverse_){c=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const p=this.index_.getCompare();l=(g,b)=>p(b,g)}else c=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let d=0,m=!1;for(;c.hasNext();){const p=c.getNext();!m&&l(s,p)<=0&&(m=!0),m&&d<this.limit_&&l(p,o)<=0?d++:r=r.updateImmediateChild(p.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,b)=>p(b,g)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const c=new k(t,i),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),m=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let g=r.getChildAfterChild(this.index_,d,this.reverse_);for(;g!=null&&(g.name===t||l.hasChild(g.name));)g=r.getChildAfterChild(this.index_,g,this.reverse_);const b=g==null?1:o(g,c);if(m&&!i.isEmpty()&&b>=0)return s!=null&&s.trackChildChange(ui(t,i,p)),l.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(ci(t,p));const O=l.updateImmediateChild(t,N.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(li(g.name,g.node)),O.updateImmediateChild(g.name,g.node)):O}}else return i.isEmpty()?e:m&&o(d,c)>=0?(s!=null&&(s.trackChildChange(ci(d.name,d.node)),s.trackChildChange(li(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(d.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:En}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new ys;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ip(n){return n.loadsAllData()?new _s(n.getIndex()):n.hasLimit()?new np(n):new di(n)}function tl(n){const e={};if(n.isDefault())return e;let t;return n.index_===re?t="$priority":n.index_===Jf?t="$value":n.index_===Sn?t="$key":(C(n.index_ instanceof Qf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=le(t),n.startSet_&&(e.startAt=le(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+le(n.indexStartName_))),n.endSet_&&(e.endAt=le(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+le(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==re&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Ba{constructor(e,t,i,r){super();this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ji.getListenId_(e,i),l={};this.listens_[o]=l;const c=tl(e._queryParams);this.restRequest_(s+".json",c,(d,m)=>{let p=m;if(d===404&&(p=null,d=null),d===null&&this.onDataUpdate_(s,p,!1,i),wn(this.listens_,o)===l){let g;d?d===401?g="permission_denied":g="rest_error:"+d:g="ok",r(g,null)}})}unlisten(e,t){const i=Ji.getListenId_(e,t);delete this.listens_[i]}get(e){const t=tl(e._queryParams),i=e._path.toString(),r=new Kr;return this.restRequest_(i+".json",t,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yd(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Xn(l.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return{value:null,children:new Map}}function il(n,e,t){if(H(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=U(e);n.children.has(i)||n.children.set(i,er());const r=n.children.get(i);e=X(e),il(r,e,t)}}function vs(n,e,t){n.value!==null?t(e,n.value):sp(n,(i,r)=>{const s=new K(e.toString()+"/"+i);vs(r,s,t)})}function sp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Le(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=10*1e3,ap=30*1e3,lp=5*60*1e3;class cp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new op(e);const i=rl+(ap-rl)*Math.random();ri(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Le(e,(r,s)=>{s>0&&ut(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*lp))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function sl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ol(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function al(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=it.ACK_USER_WRITE,this.source=sl()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new K(e));return new tr($(),t,this.revert)}}else return C(U(this.path)===e,"operationForChild called for unrelated child."),new tr(X(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=it.OVERWRITE}operationForChild(e){return H(this.path)?new Kt(this.source,$(),this.snap.getImmediateChild(e)):new Kt(this.source,X(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=it.MERGE}operationForChild(e){if(H(this.path)){const t=this.children.subtree(new K(e));return t.isEmpty()?null:t.value?new Kt(this.source,$(),t.value):new hi(this.source,$(),t)}else return C(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const t=U(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dp(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(tp(o.childName,o.snapshotNode))}),fi(n,r,"child_removed",e,i,t),fi(n,r,"child_added",e,i,t),fi(n,r,"child_moved",s,i,t),fi(n,r,"child_changed",e,i,t),fi(n,r,"value",e,i,t),r}function fi(n,e,t,i,r,s){const o=i.filter(l=>l.type===t);o.sort((l,c)=>fp(n,l,c)),o.forEach(l=>{const c=hp(n,l,s);r.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(c,n.query_))})})}function hp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function fp(n,e,t){if(e.childName==null||t.childName==null)throw vn("Should only compare child_ events.");const i=new k(e.childName,e.snapshotNode),r=new k(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n,e){return{eventCache:n,serverCache:e}}function pi(n,e,t,i){return nr(new xt(e,t,i),n.serverCache)}function ll(n,e,t,i){return nr(n.eventCache,new xt(e,t,i))}function ir(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Zt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;const pp=()=>(ws||(ws=new Se(Kh)),ws);class J{constructor(e,t=pp()){this.value=e,this.children=t}static fromObject(e){let t=new J(null);return Le(e,(i,r)=>{t=t.set(new K(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$(),value:this.value};if(H(e))return null;{const i=U(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(X(e),t);return s!=null?{path:ae(new K(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const t=U(e),i=this.children.get(t);return i!==null?i.subtree(X(e)):new J(null)}}set(e,t){if(H(e))return new J(t,this.children);{const i=U(e),s=(this.children.get(i)||new J(null)).set(X(e),t),o=this.children.insert(i,s);return new J(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const t=U(e),i=this.children.get(t);if(i){const r=i.remove(X(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(H(e))return this.value;{const t=U(e),i=this.children.get(t);return i?i.get(X(e)):null}}setTree(e,t){if(H(e))return t;{const i=U(e),s=(this.children.get(i)||new J(null)).setTree(X(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new J(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ae(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,$(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(H(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ae(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$(),t)}foreachOnPath_(e,t,i){if(H(e))return this;{this.value&&i(t,this.value);const r=U(e),s=this.children.get(r);return s?s.foreachOnPath_(X(e),ae(t,r),i):new J(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(ae(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.writeTree_=e}static empty(){return new Ge(new J(null))}}function mi(n,e,t){if(H(e))return new Ge(new J(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Oe(r,e);return s=s.updateChild(o,t),new Ge(n.writeTree_.set(r,s))}else{const r=new J(t),s=n.writeTree_.setTree(e,r);return new Ge(s)}}}function cl(n,e,t){let i=n;return Le(t,(r,s)=>{i=mi(i,ae(e,r),s)}),i}function ul(n,e){if(H(e))return Ge.empty();{const t=n.writeTree_.setTree(e,new J(null));return new Ge(t)}}function bs(n,e){return Qt(n,e)!=null}function Qt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Oe(t.path,e)):null}function dl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(re,(i,r)=>{e.push(new k(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new k(i,r.value))}),e}function Mt(n,e){if(H(e))return n;{const t=Qt(n,e);return t!=null?new Ge(new J(t)):new Ge(n.writeTree_.subtree(e))}}function Cs(n){return n.writeTree_.isEmpty()}function Mn(n,e){return hl($(),n.writeTree_,e)}function hl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=hl(ae(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ae(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n,e){return _l(e,n)}function mp(n,e,t,i,r){C(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=mi(n.visibleWrites,e,t)),n.lastWriteId=i}function gp(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function _p(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&yp(l,i.path)?r=!1:$e(i.path,l.path)&&(s=!0)),o--}if(r){if(s)return vp(n),!0;if(i.snap)n.visibleWrites=ul(n.visibleWrites,i.path);else{const l=i.children;Le(l,c=>{n.visibleWrites=ul(n.visibleWrites,ae(i.path,c))})}return!0}else return!1}function yp(n,e){if(n.snap)return $e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$e(ae(n.path,t),e))return!0;return!1}function vp(n){n.visibleWrites=fl(n.allWrites,wp,$()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function wp(n){return n.visible}function fl(n,e,t){let i=Ge.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let l;if(s.snap)$e(t,o)?(l=Oe(t,o),i=mi(i,l,s.snap)):$e(o,t)&&(l=Oe(o,t),i=mi(i,$(),s.snap.getChild(l)));else if(s.children){if($e(t,o))l=Oe(t,o),i=cl(i,l,s.children);else if($e(o,t))if(l=Oe(o,t),H(l))i=cl(i,$(),s.children);else{const c=wn(s.children,U(l));if(c){const d=c.getChild(X(l));i=mi(i,$(),d)}}}else throw vn("WriteRecord should have .snap or .children")}}return i}function pl(n,e,t,i,r){if(!i&&!r){const s=Qt(n.visibleWrites,e);if(s!=null)return s;{const o=Mt(n.visibleWrites,e);if(Cs(o))return t;if(t==null&&!bs(o,$()))return null;{const l=t||N.EMPTY_NODE;return Mn(o,l)}}}else{const s=Mt(n.visibleWrites,e);if(!r&&Cs(s))return t;if(!r&&t==null&&!bs(s,$()))return null;{const o=function(d){return(d.visible||r)&&(!i||!~i.indexOf(d.writeId))&&($e(d.path,e)||$e(e,d.path))},l=fl(n.allWrites,o,e),c=t||N.EMPTY_NODE;return Mn(l,c)}}}function bp(n,e,t){let i=N.EMPTY_NODE;const r=Qt(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(re,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=Mt(n.visibleWrites,e);return t.forEachChild(re,(o,l)=>{const c=Mn(Mt(s,new K(o)),l);i=i.updateImmediateChild(o,c)}),dl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Mt(n.visibleWrites,e);return dl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Cp(n,e,t,i,r){C(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,t);if(bs(n.visibleWrites,s))return null;{const o=Mt(n.visibleWrites,s);return Cs(o)?r.getChild(t):Mn(o,r.getChild(t))}}function Ep(n,e,t,i){const r=ae(e,t),s=Qt(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=Mt(n.visibleWrites,r);return Mn(o,i.getNode().getImmediateChild(t))}else return null}function Tp(n,e){return Qt(n.visibleWrites,e)}function Ip(n,e,t,i,r,s,o){let l;const c=Mt(n.visibleWrites,e),d=Qt(c,$());if(d!=null)l=d;else if(t!=null)l=Mn(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const m=[],p=o.getCompare(),g=s?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let b=g.getNext();for(;b&&m.length<r;)p(b,i)!==0&&m.push(b),b=g.getNext();return m}else return[]}function Sp(){return{visibleWrites:Ge.empty(),allWrites:[],lastWriteId:-1}}function rr(n,e,t,i){return pl(n.writeTree,n.treePath,e,t,i)}function Ts(n,e){return bp(n.writeTree,n.treePath,e)}function ml(n,e,t,i){return Cp(n.writeTree,n.treePath,e,t,i)}function sr(n,e){return Tp(n.writeTree,ae(n.treePath,e))}function xp(n,e,t,i,r,s){return Ip(n.writeTree,n.treePath,e,t,i,r,s)}function Is(n,e,t){return Ep(n.writeTree,n.treePath,e,t)}function gl(n,e){return _l(ae(n.treePath,e),n.writeTree)}function _l(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,ui(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,ci(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,li(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,ui(i,e.snapshotNode,r.oldSnap));else throw vn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const yl=new Np;class Ss{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new xt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Is(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zt(this.viewCache_),s=xp(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n){return{filter:n}}function Rp(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Op(n,e,t,i,r){const s=new Mp;let o,l;if(t.type===it.OVERWRITE){const d=t;d.source.fromUser?o=xs(n,e,d.path,d.snap,i,r,s):(C(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!H(d.path),o=or(n,e,d.path,d.snap,i,r,l,s))}else if(t.type===it.MERGE){const d=t;d.source.fromUser?o=Dp(n,e,d.path,d.children,i,r,s):(C(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),o=Ms(n,e,d.path,d.children,i,r,l,s))}else if(t.type===it.ACK_USER_WRITE){const d=t;d.revert?o=Lp(n,e,d.path,i,r,s):o=kp(n,e,d.path,d.affectedTree,i,r,s)}else if(t.type===it.LISTEN_COMPLETE)o=Fp(n,e,t.path,i,s);else throw vn("Unknown operation type: "+t.type);const c=s.getChanges();return Pp(e,o,c),{viewCache:o,changes:c}}function Pp(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ir(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(ep(ir(e)))}}function vl(n,e,t,i,r,s){const o=e.eventCache;if(sr(i,t)!=null)return e;{let l,c;if(H(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Zt(e),m=d instanceof N?d:N.EMPTY_NODE,p=Ts(i,m);l=n.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const d=rr(i,Zt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const d=U(t);if(d===".priority"){C(St(t)===1,"Can't have a priority with additional path components");const m=o.getNode();c=e.serverCache.getNode();const p=ml(i,t,m,c);p!=null?l=n.filter.updatePriority(m,p):l=o.getNode()}else{const m=X(t);let p;if(o.isCompleteForChild(d)){c=e.serverCache.getNode();const g=ml(i,t,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(d).updateChild(m,g):p=o.getNode().getImmediateChild(d)}else p=Is(i,d,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),d,p,m,r,s):l=o.getNode()}}return pi(e,l,o.isFullyInitialized()||H(t),n.filter.filtersNodes())}}function or(n,e,t,i,r,s,o,l){const c=e.serverCache;let d;const m=o?n.filter:n.filter.getIndexedFilter();if(H(t))d=m.updateFullNode(c.getNode(),i,null);else if(m.filtersNodes()&&!c.isFiltered()){const b=c.getNode().updateChild(t,i);d=m.updateFullNode(c.getNode(),b,null)}else{const b=U(t);if(!c.isCompleteForPath(t)&&St(t)>1)return e;const T=X(t),S=c.getNode().getImmediateChild(b).updateChild(T,i);b===".priority"?d=m.updatePriority(c.getNode(),S):d=m.updateChild(c.getNode(),b,S,T,yl,null)}const p=ll(e,d,c.isFullyInitialized()||H(t),m.filtersNodes()),g=new Ss(r,p,s);return vl(n,p,t,r,g,l)}function xs(n,e,t,i,r,s,o){const l=e.eventCache;let c,d;const m=new Ss(r,e,s);if(H(t))d=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=pi(e,d,!0,n.filter.filtersNodes());else{const p=U(t);if(p===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),i),c=pi(e,d,l.isFullyInitialized(),l.isFiltered());else{const g=X(t),b=l.getNode().getImmediateChild(p);let T;if(H(g))T=i;else{const O=m.getCompleteChild(p);O!=null?Va(g)===".priority"&&O.getChild(Ga(g)).isEmpty()?T=O:T=O.updateChild(g,i):T=N.EMPTY_NODE}if(b.equals(T))c=e;else{const O=n.filter.updateChild(l.getNode(),p,T,g,m,o);c=pi(e,O,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function wl(n,e){return n.eventCache.isCompleteForChild(e)}function Dp(n,e,t,i,r,s,o){let l=e;return i.foreach((c,d)=>{const m=ae(t,c);wl(e,U(m))&&(l=xs(n,l,m,d,r,s,o))}),i.foreach((c,d)=>{const m=ae(t,c);wl(e,U(m))||(l=xs(n,l,m,d,r,s,o))}),l}function bl(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Ms(n,e,t,i,r,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,d;H(t)?d=i:d=new J(null).setTree(t,i);const m=e.serverCache.getNode();return d.children.inorderTraversal((p,g)=>{if(m.hasChild(p)){const b=e.serverCache.getNode().getImmediateChild(p),T=bl(n,b,g);c=or(n,c,new K(p),T,r,s,o,l)}}),d.children.inorderTraversal((p,g)=>{const b=!e.serverCache.isCompleteForChild(p)&&g.value===void 0;if(!m.hasChild(p)&&!b){const T=e.serverCache.getNode().getImmediateChild(p),O=bl(n,T,g);c=or(n,c,new K(p),O,r,s,o,l)}}),c}function kp(n,e,t,i,r,s,o){if(sr(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(H(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return or(n,e,t,c.getNode().getChild(t),r,s,l,o);if(H(t)){let d=new J(null);return c.getNode().forEachChild(Sn,(m,p)=>{d=d.set(new K(m),p)}),Ms(n,e,t,d,r,s,l,o)}else return e}else{let d=new J(null);return i.foreach((m,p)=>{const g=ae(t,m);c.isCompleteForPath(g)&&(d=d.set(m,c.getNode().getChild(g)))}),Ms(n,e,t,d,r,s,l,o)}}function Fp(n,e,t,i,r){const s=e.serverCache,o=ll(e,s.getNode(),s.isFullyInitialized()||H(t),s.isFiltered());return vl(n,o,t,i,yl,r)}function Lp(n,e,t,i,r,s){let o;if(sr(i,t)!=null)return e;{const l=new Ss(i,e,r),c=e.eventCache.getNode();let d;if(H(t)||U(t)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=rr(i,Zt(e));else{const p=e.serverCache.getNode();C(p instanceof N,"serverChildren would be complete if leaf node"),m=Ts(i,p)}m=m,d=n.filter.updateFullNode(c,m,s)}else{const m=U(t);let p=Is(i,m,e.serverCache);p==null&&e.serverCache.isCompleteForChild(m)&&(p=c.getImmediateChild(m)),p!=null?d=n.filter.updateChild(c,m,p,X(t),l,s):e.eventCache.getNode().hasChild(m)?d=n.filter.updateChild(c,m,N.EMPTY_NODE,X(t),l,s):d=c,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rr(i,Zt(e)),o.isLeafNode()&&(d=n.filter.updateFullNode(d,o,s)))}return o=e.serverCache.isFullyInitialized()||sr(i,$())!=null,pi(e,d,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new _s(i.getIndex()),s=ip(i);this.processor_=Ap(s);const o=t.serverCache,l=t.eventCache,c=r.updateFullNode(N.EMPTY_NODE,o.getNode(),null),d=s.updateFullNode(N.EMPTY_NODE,l.getNode(),null),m=new xt(c,o.isFullyInitialized(),r.filtersNodes()),p=new xt(d,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=nr(p,m),this.eventGenerator_=new up(this.query_)}get query(){return this.query_}}function Bp(n){return ir(n.viewCache_)}function Up(n,e){const t=Zt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!H(e)&&!t.getImmediateChild(U(e)).isEmpty())?t.getChild(e):null}function Cl(n,e,t,i){e.type===it.MERGE&&e.source.queryId!==null&&(C(Zt(n.viewCache_),"We should always have a full cache before handling merges"),C(ir(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=Op(n.processor_,r,e,t,i);return Rp(n.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,Hp(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Hp(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return dp(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El;class qp{constructor(){this.views=new Map}}function Vp(n){C(!El,"__referenceConstructor has already been defined"),El=n}function Ns(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return C(s!=null,"SyncTree gave us an op for an invalid query."),Cl(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Cl(o,e,t,i));return s}}function $p(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let l=rr(t,r?i:null),c=!1;l?c=!0:i instanceof N?(l=Ts(t,i),c=!1):(l=N.EMPTY_NODE,c=!1);const d=nr(new xt(l,c,!1),new xt(i,r,!1));return new Wp(e,d)}return o}function gi(n,e){let t=null;for(const i of n.views.values())t=t||Up(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;function Gp(n){C(!Tl,"__referenceConstructor has already been defined"),Tl=n}class Il{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=Sp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Yp(n,e,t,i,r){return mp(n.pendingWriteTree_,e,t,i,r),r?ar(n,new Kt(sl(),e,t)):[]}function Nn(n,e,t=!1){const i=gp(n.pendingWriteTree_,e);if(_p(n.pendingWriteTree_,e)){let s=new J(null);return i.snap!=null?s=s.set($(),!0):Le(i.children,o=>{s=s.set(new K(o),!0)}),ar(n,new tr(i.path,s,t))}else return[]}function _i(n,e,t){return ar(n,new Kt(ol(),e,t))}function zp(n,e,t){const i=J.fromObject(t);return ar(n,new hi(ol(),e,i))}function jp(n,e,t,i){const r=Nl(n,i);if(r!=null){const s=Al(r),o=s.path,l=s.queryId,c=Oe(o,e),d=new Kt(al(l),c,t);return Rl(n,o,d)}else return[]}function Kp(n,e,t,i){const r=Nl(n,i);if(r){const s=Al(r),o=s.path,l=s.queryId,c=Oe(o,e),d=J.fromObject(t),m=new hi(al(l),c,d);return Rl(n,o,m)}else return[]}function Sl(n,e,t){const i=!0,r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Oe(o,e),d=gi(l,c);if(d)return d});return pl(r,e,s,t,i)}function Zp(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(d,m)=>{const p=Oe(d,t);i=i||gi(m,p)});let r=n.syncPointTree_.get(t);r?i=i||gi(r,$()):(r=new qp,n.syncPointTree_=n.syncPointTree_.set(t,r));const s=i!=null,o=s?new xt(i,!0,!1):null,l=Es(n.pendingWriteTree_,e._path),c=$p(r,e,l,s?o.getNode():N.EMPTY_NODE,s);return Bp(c)}function ar(n,e){return xl(e,n.syncPointTree_,null,Es(n.pendingWriteTree_,$()))}function xl(n,e,t,i){if(H(n.path))return Ml(n,e,t,i);{const r=e.get($());t==null&&r!=null&&(t=gi(r,$()));let s=[];const o=U(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const d=t?t.getImmediateChild(o):null,m=gl(i,o);s=s.concat(xl(l,c,d,m))}return r&&(s=s.concat(Ns(r,n,i,t))),s}}function Ml(n,e,t,i){const r=e.get($());t==null&&r!=null&&(t=gi(r,$()));let s=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,d=gl(i,o),m=n.operationForChild(o);m&&(s=s.concat(Ml(m,l,c,d)))}),r&&(s=s.concat(Ns(r,n,i,t))),s}function Nl(n,e){return n.tagToQueryMap.get(e)}function Al(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new K(n.substr(0,e))}}function Rl(n,e,t){const i=n.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const r=Es(n.pendingWriteTree_,e);return Ns(i,t,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new As(t)}node(){return this.node_}}class Rs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ae(this.path_,e);return new Rs(this.syncTree_,t)}node(){return Sl(this.syncTree_,this.path_)}}const Qp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ol=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Xp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Jp(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Xp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},Jp=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const r=e.node();if(C(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},em=function(n,e,t,i){return Os(e,new Rs(t,n),i)},tm=function(n,e,t){return Os(n,new As(e),t)};function Os(n,e,t){const i=n.getPriority().val(),r=Ol(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,l=Ol(o.getValue(),e,t);return l!==o.getValue()||r!==o.getPriority().val()?new ue(l,fe(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new ue(r))),o.forEachChild(re,(l,c)=>{const d=Os(c,e.getImmediateChild(l),t);d!==c&&(s=s.updateImmediateChild(l,d))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ds(n,e){let t=e instanceof K?e:new K(e),i=n,r=U(t);for(;r!==null;){const s=wn(i.node.children,r)||{children:{},childCount:0};i=new Ps(r,i,s),t=X(t),r=U(t)}return i}function An(n){return n.node.value}function Pl(n,e){n.node.value=e,ks(n)}function Dl(n){return n.node.childCount>0}function nm(n){return An(n)===void 0&&!Dl(n)}function lr(n,e){Le(n.node.children,(t,i)=>{e(new Ps(t,n,i))})}function kl(n,e,t,i){t&&!i&&e(n),lr(n,r=>{kl(r,e,!0,i)}),t&&i&&e(n)}function im(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function yi(n){return new K(n.parent===null?n.name:yi(n.parent)+"/"+n.name)}function ks(n){n.parent!==null&&rm(n.parent,n.name,n)}function rm(n,e,t){const i=nm(t),r=ut(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,ks(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,ks(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=/[\[\].#$\/\u0000-\u001F\u007F]/,om=/[\[\].#$\u0000-\u001F\u007F]/,Fs=10*1024*1024,Fl=function(n){return typeof n=="string"&&n.length!==0&&!sm.test(n)},Ll=function(n){return typeof n=="string"&&n.length!==0&&!om.test(n)},am=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ll(n)},Wl=function(n,e,t){const i=t instanceof K?new Pf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+jt(i));if(typeof e=="function")throw new Error(n+"contains a function "+jt(i)+" with contents = "+e.toString());if(pa(e))throw new Error(n+"contains "+e.toString()+" "+jt(i));if(typeof e=="string"&&e.length>Fs/3&&$i(e)>Fs)throw new Error(n+"contains a string greater than "+Fs+" utf8 bytes "+jt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Le(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Fl(o)))throw new Error(n+" contains an invalid key ("+o+") "+jt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Df(i,o),Wl(n,l,i),kf(i)}),r&&s)throw new Error(n+' contains ".value" child '+jt(i)+" in addition to actual children.")}},Bl=function(n,e,t,i){if(!(i&&t===void 0)&&!Ll(t))throw new Error(ia(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Bl(n,e,t,i)},cm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!am(t))throw new Error(ia(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ul(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!hs(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function dm(n,e,t){Ul(n,t),Hl(n,i=>hs(i,e))}function Xt(n,e,t){Ul(n,t),Hl(n,i=>$e(i,e)||$e(e,i))}function Hl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(hm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function hm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Gt&&_e("event: "+t.toString()),ii(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="repo_interrupt",pm=25;class mm{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new um,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=er(),this.transactionQueueTree_=new Ps,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gm(n,e,t){if(n.stats_=ls(n.repoInfo_),n.forceRestClient_||tf())n.server_=new Ji(n.repoInfo_,(i,r,s,o)=>{Vl(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$l(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new dt(n.repoInfo_,e,(i,r,s,o)=>{Vl(n,i,r,s,o)},i=>{$l(n,i)},i=>{ym(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=cf(n.repoInfo_,()=>new cp(n.stats_,n.server_)),n.infoData_=new rp,n.infoSyncTree_=new Il({startListening:(i,r,s,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=_i(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ls(n,"connected",!1),n.serverSyncTree_=new Il({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(l,c)=>{const d=o(l,c);Xt(n.eventQueue_,i._path,d)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function _m(n){const t=n.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ql(n){return Qp({timestamp:_m(n)})}function Vl(n,e,t,i,r){n.dataUpdateCount++;const s=new K(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=qi(t,d=>fe(d));o=Kp(n.serverSyncTree_,s,c,r)}else{const c=fe(t);o=jp(n.serverSyncTree_,s,c,r)}else if(i){const c=qi(t,d=>fe(d));o=zp(n.serverSyncTree_,s,c)}else{const c=fe(t);o=_i(n.serverSyncTree_,s,c)}let l=s;o.length>0&&(l=Us(n,s)),Xt(n.eventQueue_,l,o)}function $l(n,e){Ls(n,"connected",e),e===!1&&bm(n)}function ym(n,e){Le(e,(t,i)=>{Ls(n,t,i)})}function Ls(n,e,t){const i=new K("/.info/"+e),r=fe(t);n.infoData_.updateSnapshot(i,r);const s=_i(n.infoSyncTree_,i,r);Xt(n.eventQueue_,i,s)}function vm(n){return n.nextWriteId_++}function wm(n,e){const t=Zp(n.serverSyncTree_,e);return t!=null?Promise.resolve(t):n.server_.get(e).then(i=>{const r=fe(i).withIndex(e._queryParams.getIndex()),s=_i(n.serverSyncTree_,e._path,r);return dm(n.eventQueue_,e._path,s),Promise.resolve(r)},i=>(Ws(n,"get for query "+le(e)+" failed: "+i),Promise.reject(new Error(i))))}function bm(n){Ws(n,"onDisconnectEvents");const e=ql(n),t=er();vs(n.onDisconnect_,$(),(r,s)=>{const o=em(r,s,n.serverSyncTree_,e);il(t,r,o)});let i=[];vs(t,$(),(r,s)=>{i=i.concat(_i(n.serverSyncTree_,r,s));const o=Im(n,r);Us(n,o)}),n.onDisconnect_=er(),Xt(n.eventQueue_,$(),i)}function Cm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(fm)}function Ws(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),_e(t,...e)}function Gl(n,e,t){return Sl(n.serverSyncTree_,e,t)||N.EMPTY_NODE}function Bs(n,e=n.transactionQueueTree_){if(e||cr(n,e),An(e)){const t=zl(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&Em(n,yi(e),t)}else Dl(e)&&lr(e,t=>{Bs(n,t)})}function Em(n,e,t){const i=t.map(d=>d.currentWriteId),r=Gl(n,e,i);let s=r;const o=r.hash();for(let d=0;d<t.length;d++){const m=t[d];C(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const p=Oe(e,m.path);s=s.updateChild(p,m.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;n.server_.put(c.toString(),l,d=>{Ws(n,"transaction put response",{path:c.toString(),status:d});let m=[];if(d==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,m=m.concat(Nn(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();cr(n,Ds(n.transactionQueueTree_,e)),Bs(n,n.transactionQueueTree_),Xt(n.eventQueue_,e,m);for(let g=0;g<p.length;g++)ii(p[g])}else{if(d==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Re("transaction at "+c.toString()+" failed: "+d);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=d}Us(n,e)}},o)}function Us(n,e){const t=Yl(n,e),i=yi(t),r=zl(n,t);return Tm(n,r,i),i}function Tm(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],d=Oe(t,c.path);let m=!1,p;if(C(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)m=!0,p=c.abortReason,r=r.concat(Nn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=pm)m=!0,p="maxretry",r=r.concat(Nn(n.serverSyncTree_,c.currentWriteId,!0));else{const g=Gl(n,c.path,o);c.currentInputSnapshot=g;const b=e[l].update(g.val());if(b!==void 0){Wl("transaction failed: Data returned ",b,c.path);let T=fe(b);typeof b=="object"&&b!=null&&ut(b,".priority")||(T=T.updatePriority(g.getPriority()));const S=c.currentWriteId,G=ql(n),A=tm(T,g,G);c.currentOutputSnapshotRaw=T,c.currentOutputSnapshotResolved=A,c.currentWriteId=vm(n),o.splice(o.indexOf(S),1),r=r.concat(Yp(n.serverSyncTree_,c.path,A,c.currentWriteId,c.applyLocally)),r=r.concat(Nn(n.serverSyncTree_,S,!0))}else m=!0,p="nodata",r=r.concat(Nn(n.serverSyncTree_,c.currentWriteId,!0))}Xt(n.eventQueue_,t,r),r=[],m&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}cr(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)ii(i[l]);Bs(n,n.transactionQueueTree_)}function Yl(n,e){let t,i=n.transactionQueueTree_;for(t=U(e);t!==null&&An(i)===void 0;)i=Ds(i,t),e=X(e),t=U(e);return i}function zl(n,e){const t=[];return jl(n,e,t),t.sort((i,r)=>i.order-r.order),t}function jl(n,e,t){const i=An(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);lr(e,r=>{jl(n,r,t)})}function cr(n,e){const t=An(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,Pl(e,t.length>0?t:void 0)}lr(e,i=>{cr(n,i)})}function Im(n,e){const t=yi(Yl(n,e)),i=Ds(n.transactionQueueTree_,e);return im(i,r=>{Hs(n,r)}),Hs(n,i),kl(i,r=>{Hs(n,r)}),t}function Hs(n,e){const t=An(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Nn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Pl(e,void 0):t.length=s+1,Xt(n.eventQueue_,yi(e),r);for(let o=0;o<i.length;o++)ii(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function xm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Re(`Invalid query segment '${t}' in query '${n}'`)}return e}const Kl=function(n,e){const t=Mm(n),i=t.namespace;t.domain==="firebase.com"&&Yt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||zh();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new of(t.host,t.secure,i,e,r,"",i!==t.subdomain),path:new K(t.pathString)}},Mm=function(n){let e="",t="",i="",r="",s="",o=!0,l="https",c=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(l=n.substring(0,d-1),n=n.substring(d+2));let m=n.indexOf("/");m===-1&&(m=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(m,p)),m<p&&(r=Sm(n.substring(m,p)));const g=xm(n.substring(Math.min(n.length,p)));d=e.indexOf(":"),d>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(d+1),10)):d=e.length;const b=e.slice(0,d);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const T=e.indexOf(".");i=e.substring(0,T).toLowerCase(),t=e.substring(T+1),s=i}"ns"in g&&(s=g.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return H(this._path)?null:Va(this._path)}get ref(){return new Nt(this._repo,this._path)}get _queryIdentifier(){const e=nl(this._queryParams),t=ns(e);return t==="{}"?"default":t}get _queryObject(){return nl(this._queryParams)}isEqual(e){if(e=bn(e),!(e instanceof qs))return!1;const t=this._repo===e._repo,i=hs(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Of(this._path)}}class Nt extends qs{constructor(e,t){super(e,t,new ys,!1)}get parent(){const e=Ga(this._path);return e===null?null:new Nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ur{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new K(e),i=Vs(this.ref,e);return new ur(this._node.getChild(t),i,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new ur(r,Vs(this.ref,i),re)))}hasChild(e){const t=new K(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function I_(n,e){return n=bn(n),n._checkNotDeleted("ref"),e!==void 0?Vs(n._root,e):n._root}function Vs(n,e){return n=bn(n),U(n._path)===null?lm("child","path",e,!1):Bl("child","path",e,!1),new Nt(n._repo,ae(n._path,e))}function S_(n){return n=bn(n),wm(n._repo,n).then(e=>new ur(e,new Nt(n._repo,n._path),n._queryParams.getIndex()))}Vp(Nt);Gp(Nt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="FIREBASE_DATABASE_EMULATOR_HOST",$s={};let Am=!1;function Rm(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_e("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Kl(s,r),l=o.repoInfo,c,d;typeof process!="undefined"&&(d=process.env[Nm]),d?(c=!0,s=`http://${d}?ns=${l.namespace}`,o=Kl(s,r),l=o.repoInfo):c=!o.repoInfo.secure;const m=r&&c?new is(is.OWNER):new rf(n.name,n.options,e);cm("Invalid Firebase Database URL",o),H(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const p=Pm(l,n,m,new nf(n.name,t));return new Dm(p,n)}function Om(n,e){const t=$s[e];(!t||t[n.key]!==n)&&Yt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cm(n),delete t[n.key]}function Pm(n,e,t,i){let r=$s[e.name];r||(r={},$s[e.name]=r);let s=r[n.toURLString()];return s&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new mm(n,Am,t,i),r[n.toURLString()]=s,s}class Dm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Om(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function x_(n=aa(),e){return Jn(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(n){qh(Wh),Vt(new It("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Rm(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),nt(la,ca,n),nt(la,ca,"esm2017")}dt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};dt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};km();function Fm(n){return Array.prototype.slice.call(n)}function Zl(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function Gs(n,e,t){var i,r=new Promise(function(s,o){i=n[e].apply(n,t),Zl(i).then(s,o)});return r.request=i,r}function Lm(n,e,t){var i=Gs(n,e,t);return i.then(function(r){if(!!r)return new vi(r,i.request)})}function Rn(n,e,t){t.forEach(function(i){Object.defineProperty(n.prototype,i,{get:function(){return this[e][i]},set:function(r){this[e][i]=r}})})}function Ys(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Gs(this[e],r,arguments)})})}function dr(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Ql(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Lm(this[e],r,arguments)})})}function Jt(n){this._index=n}Rn(Jt,"_index",["name","keyPath","multiEntry","unique"]);Ys(Jt,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Ql(Jt,"_index",IDBIndex,["openCursor","openKeyCursor"]);function vi(n,e){this._cursor=n,this._request=e}Rn(vi,"_cursor",["direction","key","primaryKey","value"]);Ys(vi,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(vi.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),Zl(e._request).then(function(i){if(!!i)return new vi(i,e._request)})})})});function rt(n){this._store=n}rt.prototype.createIndex=function(){return new Jt(this._store.createIndex.apply(this._store,arguments))};rt.prototype.index=function(){return new Jt(this._store.index.apply(this._store,arguments))};Rn(rt,"_store",["name","keyPath","indexNames","autoIncrement"]);Ys(rt,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Ql(rt,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);dr(rt,"_store",IDBObjectStore,["deleteIndex"]);function wi(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}wi.prototype.objectStore=function(){return new rt(this._tx.objectStore.apply(this._tx,arguments))};Rn(wi,"_tx",["objectStoreNames","mode"]);dr(wi,"_tx",IDBTransaction,["abort"]);function hr(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new wi(t)}hr.prototype.createObjectStore=function(){return new rt(this._db.createObjectStore.apply(this._db,arguments))};Rn(hr,"_db",["name","version","objectStoreNames"]);dr(hr,"_db",IDBDatabase,["deleteObjectStore","close"]);function fr(n){this._db=n}fr.prototype.transaction=function(){return new wi(this._db.transaction.apply(this._db,arguments))};Rn(fr,"_db",["name","version","objectStoreNames"]);dr(fr,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[rt,Jt].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=Fm(arguments),i=t[t.length-1],r=this._store||this._index,s=r[n].apply(r,t.slice(0,-1));s.onsuccess=function(){i(s.result)}})})});[Jt,rt].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var i=this,r=[];return new Promise(function(s){i.iterateCursor(e,function(o){if(!o){s(r);return}if(r.push(o.value),t!==void 0&&r.length==t){s(r);return}o.continue()})})})});function Wm(n,e,t){var i=Gs(indexedDB,"open",[n,e]),r=i.request;return r&&(r.onupgradeneeded=function(s){t&&t(new hr(r.result,s.oldVersion,r.transaction))}),i.then(function(s){return new fr(s)})}const Xl="@firebase/installations",zs="0.5.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=1e4,ec=`w:${zs}`,tc="FIS_v2",Bm="https://firebaseinstallations.googleapis.com/v1",Um=60*60*1e3,Hm="installations",qm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},en=new Hi(Hm,qm,Vm);function nc(n){return n instanceof Qn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic({projectId:n}){return`${Bm}/projects/${n}/installations`}function rc(n){return{token:n.token,requestStatus:2,expiresIn:Gm(n.expiresIn),creationTime:Date.now()}}async function sc(n,e){const i=(await e.json()).error;return en.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function oc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function $m(n,{refreshToken:e}){const t=oc(n);return t.append("Authorization",Ym(e)),t}async function ac(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Gm(n){return Number(n.replace("s","000"))}function Ym(n){return`${tc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(n,{fid:e}){const t=ic(n),i=oc(n),r={fid:e,authVersion:tc,appId:n.appId,sdkVersion:ec},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await ac(()=>fetch(t,s));if(o.ok){const l=await o.json();return{fid:l.fid||e,registrationStatus:2,refreshToken:l.refreshToken,authToken:rc(l.authToken)}}else throw await sc("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^[cdef][\w-]{21}$/,js="";function Zm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Qm(n);return Km.test(t)?t:js}catch{return js}}function Qm(n){return jm(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function uc(n,e){const t=pr(n);dc(t,e),Xm(t,e)}function dc(n,e){const t=cc.get(n);if(!!t)for(const i of t)i(e)}function Xm(n,e){const t=Jm();t&&t.postMessage({key:n,fid:e}),eg()}let tn=null;function Jm(){return!tn&&"BroadcastChannel"in self&&(tn=new BroadcastChannel("[Firebase] FID Change"),tn.onmessage=n=>{dc(n.data.key,n.data.fid)}),tn}function eg(){cc.size===0&&tn&&(tn.close(),tn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebase-installations-database",ng=1,nn="firebase-installations-store";let Ks=null;function Zs(){return Ks||(Ks=Wm(tg,ng,n=>{switch(n.oldVersion){case 0:n.createObjectStore(nn)}})),Ks}async function mr(n,e){const t=pr(n),r=(await Zs()).transaction(nn,"readwrite"),s=r.objectStore(nn),o=await s.get(t);return await s.put(e,t),await r.complete,(!o||o.fid!==e.fid)&&uc(n,e.fid),e}async function hc(n){const e=pr(n),i=(await Zs()).transaction(nn,"readwrite");await i.objectStore(nn).delete(e),await i.complete}async function gr(n,e){const t=pr(n),r=(await Zs()).transaction(nn,"readwrite"),s=r.objectStore(nn),o=await s.get(t),l=e(o);return l===void 0?await s.delete(t):await s.put(l,t),await r.complete,l&&(!o||o.fid!==l.fid)&&uc(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(n){let e;const t=await gr(n,i=>{const r=ig(i),s=rg(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===js?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ig(n){const e=n||{fid:Zm(),registrationStatus:0};return pc(e)}function rg(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(en.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=sg(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:og(n)}:{installationEntry:e}}async function sg(n,e){try{const t=await zm(n,e);return mr(n,t)}catch(t){throw nc(t)&&t.customData.serverCode===409?await hc(n):await mr(n,{fid:e.fid,registrationStatus:0}),t}}async function og(n){let e=await fc(n);for(;e.registrationStatus===1;)await lc(100),e=await fc(n);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Qs(n);return i||t}return e}function fc(n){return gr(n,e=>{if(!e)throw en.create("installation-not-found");return pc(e)})}function pc(n){return ag(n)?{fid:n.fid,registrationStatus:0}:n}function ag(n){return n.registrationStatus===1&&n.registrationTime+Jl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg({appConfig:n,platformLoggerProvider:e},t){const i=cg(n,t),r=$m(n,t),s=e.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:ec}},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await ac(()=>fetch(i,l));if(c.ok){const d=await c.json();return rc(d)}else throw await sc("Generate Auth Token",c)}function cg(n,{fid:e}){return`${ic(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(n,e=!1){let t;const i=await gr(n.appConfig,s=>{if(!gc(s))throw en.create("not-registered");const o=s.authToken;if(!e&&hg(o))return s;if(o.requestStatus===1)return t=ug(n,e),s;{if(!navigator.onLine)throw en.create("app-offline");const l=pg(s);return t=dg(n,l),l}});return t?await t:i.authToken}async function ug(n,e){let t=await mc(n.appConfig);for(;t.authToken.requestStatus===1;)await lc(100),t=await mc(n.appConfig);const i=t.authToken;return i.requestStatus===0?Xs(n,e):i}function mc(n){return gr(n,e=>{if(!gc(e))throw en.create("not-registered");const t=e.authToken;return mg(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dg(n,e){try{const t=await lg(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await mr(n.appConfig,i),t}catch(t){if(nc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hc(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mr(n.appConfig,i)}throw t}}function gc(n){return n!==void 0&&n.registrationStatus===2}function hg(n){return n.requestStatus===2&&!fg(n)}function fg(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Um}function pg(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function mg(n){return n.requestStatus===1&&n.requestTime+Jl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(n){const e=n,{installationEntry:t,registrationPromise:i}=await Qs(e.appConfig);return i?i.catch(console.error):Xs(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(n,e=!1){const t=n;return await yg(t.appConfig),(await Xs(t,e)).token}async function yg(n){const{registrationPromise:e}=await Qs(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){if(!n||!n.options)throw Js("App Configuration");if(!n.name)throw Js("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Js(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Js(n){return en.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="installations",wg="installations-internal",bg=n=>{const e=n.getProvider("app").getImmediate(),t=vg(e),i=Jn(e,"platform-logger");return{app:e,appConfig:t,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},Cg=n=>{const e=n.getProvider("app").getImmediate(),t=Jn(e,_c).getImmediate();return{getId:()=>gg(t),getToken:r=>_g(t,r)}};function Eg(){Vt(new It(_c,bg,"PUBLIC")),Vt(new It(wg,Cg,"PRIVATE"))}Eg();nt(Xl,zs);nt(Xl,zs,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="analytics",Tg="firebase_id",Ig="origin",Sg=60*1e3,xg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Zr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Mg(n,e){const t=document.createElement("script");t.src=`${yc}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function Ng(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ag(n,e,t,i,r,s){const o=i[r];try{if(o)await e[o];else{const c=(await vc(t)).find(d=>d.measurementId===r);c&&await e[c.appId]}}catch(l){Pe.error(l)}n("config",r,s)}async function Rg(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const l=await vc(t);for(const c of o){const d=l.find(p=>p.measurementId===c),m=d&&e[d.appId];if(m)s.push(m);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){Pe.error(s)}}function Og(n,e,t,i){async function r(s,o,l){try{s==="event"?await Rg(n,e,t,o,l):s==="config"?await Ag(n,e,t,i,o,l):n("set",o)}catch(c){Pe.error(c)}}return r}function Pg(n,e,t,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Og(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function Dg(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(yc))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},We=new Hi("analytics","Analytics",kg);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=30,Lg=1e3;class Wg{constructor(e={},t=Lg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wc=new Wg;function Bg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ug(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:Bg(i)},s=xg.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();((e=c.error)===null||e===void 0?void 0:e.message)&&(l=c.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Hg(n,e=wc,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw We.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw We.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new $g;return setTimeout(async()=>{l.abort()},t!==void 0?t:Sg),bc({appId:i,apiKey:r,measurementId:s},o,l,e)}async function bc(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=wc){const{appId:s,measurementId:o}=n;try{await qg(i,e)}catch(l){if(o)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await Ug(n);return r.deleteThrottleMetadata(s),l}catch(l){if(!Vg(l)){if(r.deleteThrottleMetadata(s),o)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:s,measurementId:o};throw l}const c=Number(l.customData.httpStatus)===503?ra(t,r.intervalMillis,Fg):ra(t,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return r.setThrottleMetadata(s,d),Pe.debug(`Calling attemptFetch again in ${c} millis`),bc(n,d,i,r)}}function qg(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(We.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Vg(n){if(!(n instanceof Qn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class $g{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(){if(Wd())try{await Bd()}catch(n){return Pe.warn(We.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return Pe.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Yg(n,e,t,i,r,s,o){var l;const c=Hg(n);c.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Pe.error(b)),e.push(c);const d=Gg().then(b=>{if(b)return i.getId()}),[m,p]=await Promise.all([c,d]);Dg()||Mg(s,m.measurementId),r("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[Ig]="firebase",g.update=!0,p!=null&&(g[Tg]=p),r("config",m.measurementId,g),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.app=e}_delete(){return delete bi[this.app.options.appId],Promise.resolve()}}let bi={},Cc=[];const Ec={};let eo="dataLayer",jg="gtag",Tc,Ic,Sc=!1;function Kg(){const n=[];if(Fd()&&n.push("This is a browser extension environment."),Ud()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=We.create("invalid-analytics-context",{errorInfo:e});Pe.warn(t.message)}}function Zg(n,e,t){Kg();const i=n.options.appId;if(!i)throw We.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(bi[i]!=null)throw We.create("already-exists",{id:i});if(!Sc){Ng(eo);const{wrappedGtag:s,gtagCore:o}=Pg(bi,Cc,Ec,eo,jg);Ic=s,Tc=o,Sc=!0}return bi[i]=Yg(n,Cc,Ec,e,Tc,eo,t),new zg(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});n("event",t,o)}}function M_(n=aa()){n=bn(n);const e=Jn(n,_r);return e.isInitialized()?e.getImmediate():Xg(n)}function Xg(n,e={}){const t=Jn(n,_r);if(t.isInitialized()){const r=t.getImmediate();if(Vi(e,t.getOptions()))return r;throw We.create("already-initialized")}return t.initialize({options:e})}function Jg(n,e,t,i){n=bn(n),Qg(Ic,bi[n.app.options.appId],e,t,i).catch(r=>Pe.error(r))}const xc="@firebase/analytics",Mc="0.7.5";function e_(){Vt(new It(_r,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Zg(i,r,t)},"PUBLIC")),Vt(new It("analytics-internal",n,"PRIVATE")),nt(xc,Mc),nt(xc,Mc,"esm2017");function n(e){try{const t=e.getProvider(_r).getImmediate();return{logEvent:(i,r,s)=>Jg(t,i,r,s)}}catch(t){throw We.create("interop-component-reg-failed",{reason:t})}}}e_();export{uu as A,T_ as B,M_ as C,x_ as D,I_ as E,S_ as F,b_ as G,v_ as H,C_ as P,y_ as S,c_ as a,r_ as b,a_ as c,tu as d,s_ as e,i_ as f,w_ as g,n_ as h,__ as i,p_ as j,Ro as k,l_ as l,E_ as m,Mo as n,h_ as o,d_ as p,o_ as q,Di as r,t_ as s,nu as t,m_ as u,u_ as v,g_ as w,cu as x,Do as y,f_ as z};
