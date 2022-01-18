function ea(){}function ta(n){return n()}function na(){return Object.create(null)}function Ui(n){n.forEach(ta)}function Iu(n){return typeof n=="function"}function $_(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let qi;function G_(n,e){return qi||(qi=document.createElement("a")),qi.href=e,n===qi.href}function Su(n){return Object.keys(n).length===0}function Y_(n,e){n.appendChild(e)}function z_(n,e,t){n.insertBefore(e,t||null)}function xu(n){n.parentNode.removeChild(n)}function j_(n){return document.createElement(n)}function K_(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Mu(n){return document.createTextNode(n)}function Q_(){return Mu(" ")}function Z_(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function X_(n){return function(e){return e.preventDefault(),n.call(this,e)}}function J_(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Au(n){return Array.from(n.childNodes)}function ev(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function tv(n,e){n.value=e==null?"":e}function nv(n,e,t){n.classList[t?"add":"remove"](e)}let Zn;function Xn(n){Zn=n}function Nu(){if(!Zn)throw new Error("Function called outside component initialization");return Zn}function iv(n){Nu().$$.on_mount.push(n)}const Jn=[],ia=[],Vi=[],ra=[],Ru=Promise.resolve();let es=!1;function ku(){es||(es=!0,Ru.then(sa))}function ts(n){Vi.push(n)}const ns=new Set;let Hi=0;function sa(){const n=Zn;do{for(;Hi<Jn.length;){const e=Jn[Hi];Hi++,Xn(e),Pu(e.$$)}for(Xn(null),Jn.length=0,Hi=0;ia.length;)ia.pop()();for(let e=0;e<Vi.length;e+=1){const t=Vi[e];ns.has(t)||(ns.add(t),t())}Vi.length=0}while(Jn.length);for(;ra.length;)ra.pop()();es=!1,ns.clear(),Xn(n)}function Pu(n){if(n.fragment!==null){n.update(),Ui(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ts)}}const $i=new Set;let Ou;function oa(n,e){n&&n.i&&($i.delete(n),n.i(e))}function rv(n,e,t,i){if(n&&n.o){if($i.has(n))return;$i.add(n),Ou.c.push(()=>{$i.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function sv(n,e){n.d(1),e.delete(n.key)}function ov(n,e,t,i,r,s,o,l,c,u,m,p){let g=n.length,b=s.length,E=g;const N={};for(;E--;)N[n[E].key]=E;const I=[],G=new Map,R=new Map;for(E=b;E--;){const j=p(r,s,E),x=t(j);let Y=o.get(x);Y?i&&Y.p(j,e):(Y=u(x,j),Y.c()),G.set(x,I[E]=Y),x in N&&R.set(x,Math.abs(E-N[x]))}const ee=new Set,be=new Set;function S(j){oa(j,1),j.m(l,m),o.set(j.key,j),m=j.first,b--}for(;g&&b;){const j=I[b-1],x=n[g-1],Y=j.key,J=x.key;j===x?(m=j.first,g--,b--):G.has(J)?!o.has(Y)||ee.has(Y)?S(j):be.has(J)?g--:R.get(Y)>R.get(J)?(be.add(Y),S(j)):(ee.add(J),g--):(c(x,o),g--)}for(;g--;){const j=n[g];G.has(j.key)||c(j,o)}for(;b;)S(I[b-1]);return I}function av(n){n&&n.c()}function Du(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=n.$$;r&&r.m(e,t),i||ts(()=>{const c=s.map(ta).filter(Iu);o?o.push(...c):Ui(c),n.$$.on_mount=[]}),l.forEach(ts)}function Fu(n,e){const t=n.$$;t.fragment!==null&&(Ui(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Lu(n,e){n.$$.dirty[0]===-1&&(Jn.push(n),ku(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function lv(n,e,t,i,r,s,o,l=[-1]){const c=Zn;Xn(n);const u=n.$$={fragment:null,ctx:null,props:s,update:ea,not_equal:r,bound:na(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:na(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let m=!1;if(u.ctx=t?t(n,e.props||{},(p,g,...b)=>{const E=b.length?b[0]:g;return u.ctx&&r(u.ctx[p],u.ctx[p]=E)&&(!u.skip_bound&&u.bound[p]&&u.bound[p](E),m&&Lu(n,p)),g}):[],u.update(),m=!0,Ui(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const p=Au(e.target);u.fragment&&u.fragment.l(p),p.forEach(xu)}else u.fragment&&u.fragment.c();e.intro&&oa(n.$$.fragment),Du(n,e.target,e.anchor,e.customElement),sa()}Xn(c)}class cv{$destroy(){Fu(this,1),this.$destroy=ea}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Su(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Wu={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},aa={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},se={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},we={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},It={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class _{static getFirstMatch(e,t){const i=t.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,t){const i=t.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,t,i){if(e.test(t))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,i=!1){const r=_.getVersionPrecision(e),s=_.getVersionPrecision(t);let o=Math.max(r,s),l=0;const c=_.map([e,t],u=>{const m=o-_.getVersionPrecision(u),p=u+new Array(m+1).join(".0");return _.map(p.split("."),g=>new Array(20-g.length).join("0")+g).reverse()});for(i&&(l=o-Math.min(r,s)),o-=1;o>=l;){if(c[0][o]>c[1][o])return 1;if(c[0][o]===c[1][o]){if(o===l)return 0;o-=1}else if(c[0][o]<c[1][o])return-1}}static map(e,t){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i}static find(e,t){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(t(s,i))return s}}static assign(e,...t){const i=e;let r,s;if(Object.assign)return Object.assign(e,...t);for(r=0,s=t.length;r<s;r+=1){const o=t[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(c=>{i[c]=o[c]})}return e}static getBrowserAlias(e){return Wu[e]}static getBrowserTypeByAlias(e){return aa[e]||""}}const K=/version\/(\d+(\.?_?\d+)+)/i,Bu=[{test:[/googlebot/i],describe(n){const e={name:"Googlebot"},t=_.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/opera/i],describe(n){const e={name:"Opera"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(n){const e={name:"Opera"},t=_.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(n){const e={name:"Samsung Internet for Android"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Whale/i],describe(n){const e={name:"NAVER Whale Browser"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(n){const e={name:"MZ Browser"},t=_.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/focus/i],describe(n){const e={name:"Focus"},t=_.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/swing/i],describe(n){const e={name:"Swing"},t=_.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/coast/i],describe(n){const e={name:"Opera Coast"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(n){const e={name:"Opera Touch"},t=_.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(n){const e={name:"Yandex Browser"},t=_.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(n){const e={name:"UC Browser"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(n){const e={name:"Maxthon"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(n){const e={name:"Epiphany"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/puffin/i],describe(n){const e={name:"Puffin"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(n){const e={name:"Sleipnir"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(n){const e={name:"K-Meleon"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(n){const e={name:"WeChat"},t=_.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(n){const e={name:/qqbrowserlite/i.test(n)?"QQ Browser Lite":"QQ Browser"},t=_.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(n){const e={name:"Internet Explorer"},t=_.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(n){const e={name:"Microsoft Edge"},t=_.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(n){const e={name:"Microsoft Edge"},t=_.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(n){const e={name:"Vivaldi"},t=_.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(n){const e={name:"SeaMonkey"},t=_.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(n){const e={name:"Sailfish"},t=_.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,n);return t&&(e.version=t),e}},{test:[/silk/i],describe(n){const e={name:"Amazon Silk"},t=_.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/phantom/i],describe(n){const e={name:"PhantomJS"},t=_.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(n){const e={name:"SlimerJS"},t=_.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e={name:"BlackBerry"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(n){const e={name:"WebOS Browser"},t=_.getFirstMatch(K,n)||_.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/bada/i],describe(n){const e={name:"Bada"},t=_.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/tizen/i],describe(n){const e={name:"Tizen"},t=_.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(n){const e={name:"QupZilla"},t=_.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(n){const e={name:"Firefox"},t=_.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/electron/i],describe(n){const e={name:"Electron"},t=_.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(n){const e={name:"Miui"},t=_.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/chromium/i],describe(n){const e={name:"Chromium"},t=_.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,n)||_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(n){const e={name:"Chrome"},t=_.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/GSA/i],describe(n){const e={name:"Google Search"},t=_.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e={name:"Android Browser"},t=_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(n){const e={name:"PlayStation 4"},t=_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(n){const e={name:"Safari"},t=_.getFirstMatch(K,n);return t&&(e.version=t),e}},{test:[/.*/i],describe(n){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,r=n.search("\\(")!==-1?t:e;return{name:_.getFirstMatch(r,n),version:_.getSecondMatch(r,n)}}}];var Uu=[{test:[/Roku\/DVP/],describe(n){const e=_.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,n);return{name:we.Roku,version:e}}},{test:[/windows phone/i],describe(n){const e=_.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,n);return{name:we.WindowsPhone,version:e}}},{test:[/windows /i],describe(n){const e=_.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,n),t=_.getWindowsVersionName(e);return{name:we.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(n){const e={name:we.iOS},t=_.getSecondMatch(/(Version\/)(\d[\d.]+)/,n);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(n){const e=_.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,n).replace(/[_\s]/g,"."),t=_.getMacOSVersionName(e),i={name:we.MacOS,version:e};return t&&(i.versionName=t),i}},{test:[/(ipod|iphone|ipad)/i],describe(n){const e=_.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,n).replace(/[_\s]/g,".");return{name:we.iOS,version:e}}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e=_.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,n),t=_.getAndroidVersionName(e),i={name:we.Android,version:e};return t&&(i.versionName=t),i}},{test:[/(web|hpw)[o0]s/i],describe(n){const e=_.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,n),t={name:we.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e=_.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,n)||_.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,n)||_.getFirstMatch(/\bbb(\d+)/i,n);return{name:we.BlackBerry,version:e}}},{test:[/bada/i],describe(n){const e=_.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,n);return{name:we.Bada,version:e}}},{test:[/tizen/i],describe(n){const e=_.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,n);return{name:we.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:we.Linux}}},{test:[/CrOS/],describe(){return{name:we.ChromeOS}}},{test:[/PlayStation 4/],describe(n){const e=_.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,n);return{name:we.PlayStation4,version:e}}}],qu=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(n){const e=_.getFirstMatch(/(can-l01)/i,n)&&"Nova",t={type:se.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:se.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:se.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:se.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:se.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:se.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:se.tablet}}},{test(n){const e=n.test(/ipod|iphone/i),t=n.test(/like (ipod|iphone)/i);return e&&!t},describe(n){const e=_.getFirstMatch(/(ipod|iphone)/i,n);return{type:se.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:se.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:se.mobile}}},{test(n){return n.getBrowserName(!0)==="blackberry"},describe(){return{type:se.mobile,vendor:"BlackBerry"}}},{test(n){return n.getBrowserName(!0)==="bada"},describe(){return{type:se.mobile}}},{test(n){return n.getBrowserName()==="windows phone"},describe(){return{type:se.mobile,vendor:"Microsoft"}}},{test(n){const e=Number(String(n.getOSVersion()).split(".")[0]);return n.getOSName(!0)==="android"&&e>=3},describe(){return{type:se.tablet}}},{test(n){return n.getOSName(!0)==="android"},describe(){return{type:se.mobile}}},{test(n){return n.getOSName(!0)==="macos"},describe(){return{type:se.desktop,vendor:"Apple"}}},{test(n){return n.getOSName(!0)==="windows"},describe(){return{type:se.desktop}}},{test(n){return n.getOSName(!0)==="linux"},describe(){return{type:se.desktop}}},{test(n){return n.getOSName(!0)==="playstation 4"},describe(){return{type:se.tv}}},{test(n){return n.getOSName(!0)==="roku"},describe(){return{type:se.tv}}}],Vu=[{test(n){return n.getBrowserName(!0)==="microsoft edge"},describe(n){if(/\sedg\//i.test(n))return{name:It.Blink};const t=_.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,n);return{name:It.EdgeHTML,version:t}}},{test:[/trident/i],describe(n){const e={name:It.Trident},t=_.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){return n.test(/presto/i)},describe(n){const e={name:It.Presto},t=_.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=n.test(/gecko/i),t=n.test(/like gecko/i);return e&&!t},describe(n){const e={name:It.Gecko},t=_.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:It.Blink}}},{test:[/(apple)?webkit/i],describe(n){const e={name:It.WebKit},t=_.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}}];class la{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=_.find(Bu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=_.find(Uu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=_.find(qu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=_.find(Vu,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return _.assign({},this.parsedResult)}satisfies(e){const t={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(l=>{const c=e[l];typeof c=="string"?(r[l]=c,s+=1):typeof c=="object"&&(t[l]=c,i+=1)}),i>0){const l=Object.keys(t),c=_.find(l,m=>this.isOS(m));if(c){const m=this.satisfies(t[c]);if(m!==void 0)return m}const u=_.find(l,m=>this.isPlatform(m));if(u){const m=this.satisfies(t[u]);if(m!==void 0)return m}}if(s>0){const l=Object.keys(r),c=_.find(l,u=>this.isBrowser(u,!0));if(c!==void 0)return this.compareVersion(r[c])}}isBrowser(e,t=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=_.getBrowserTypeByAlias(r);return t&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let t=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),t.indexOf(_.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class uv{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new la(e,t)}static parse(e){return new la(e).getResult()}static get BROWSER_MAP(){return aa}static get ENGINE_MAP(){return It}static get OS_MAP(){return we}static get PLATFORMS_MAP(){return se}}function Le(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function he(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function He(n){he(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function Hu(n,e){he(2,arguments);var t=He(n).getTime(),i=Le(e);return new Date(t+i)}function is(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function ca(n){he(1,arguments);var e=He(n);return e.setHours(0,0,0,0),e}var $u=864e5;function dv(n,e){he(2,arguments);var t=ca(n),i=ca(e),r=t.getTime()-is(t),s=i.getTime()-is(i);return Math.round((r-s)/$u)}function Gu(n){return he(1,arguments),n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Yu(n){if(he(1,arguments),!Gu(n)&&typeof n!="number")return!1;var e=He(n);return!isNaN(Number(e))}var zu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ju=function(n,e,t){var i,r=zu[n];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i},Ku=ju;function rs(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,i=n.formats[t]||n.formats[n.defaultWidth];return i}}var Qu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Zu={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Xu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ju={date:rs({formats:Qu,defaultWidth:"full"}),time:rs({formats:Zu,defaultWidth:"full"}),dateTime:rs({formats:Xu,defaultWidth:"full"})},ed=Ju,td={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},nd=function(n,e,t,i){return td[n]},id=nd;function ei(n){return function(e,t){var i=t||{},r=i.context?String(i.context):"standalone",s;if(r==="formatting"&&n.formattingValues){var o=n.defaultFormattingWidth||n.defaultWidth,l=i.width?String(i.width):o;s=n.formattingValues[l]||n.formattingValues[o]}else{var c=n.defaultWidth,u=i.width?String(i.width):n.defaultWidth;s=n.values[u]||n.values[c]}var m=n.argumentCallback?n.argumentCallback(e):e;return s[m]}}var rd={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},sd={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},od={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ad={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ld={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},cd={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ud=function(n,e){var t=Number(n),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},dd={ordinalNumber:ud,era:ei({values:rd,defaultWidth:"wide"}),quarter:ei({values:sd,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:ei({values:od,defaultWidth:"wide"}),day:ei({values:ad,defaultWidth:"wide"}),dayPeriod:ei({values:ld,defaultWidth:"wide",formattingValues:cd,defaultFormattingWidth:"wide"})},hd=dd;function ti(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,r=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],s=e.match(r);if(!s)return null;var o=s[0],l=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(l)?pd(l,function(p){return p.test(o)}):fd(l,function(p){return p.test(o)}),u;u=n.valueCallback?n.valueCallback(c):c,u=t.valueCallback?t.valueCallback(u):u;var m=e.slice(o.length);return{value:u,rest:m}}}function fd(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function pd(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function md(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(n.matchPattern);if(!i)return null;var r=i[0],s=e.match(n.parsePattern);if(!s)return null;var o=n.valueCallback?n.valueCallback(s[0]):s[0];o=t.valueCallback?t.valueCallback(o):o;var l=e.slice(r.length);return{value:o,rest:l}}}var gd=/^(\d+)(th|st|nd|rd)?/i,_d=/\d+/i,vd={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},yd={any:[/^b/i,/^(a|c)/i]},wd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},bd={any:[/1/i,/2/i,/3/i,/4/i]},Cd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ed={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Td={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Id={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Sd={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},xd={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Md={ordinalNumber:md({matchPattern:gd,parsePattern:_d,valueCallback:function(n){return parseInt(n,10)}}),era:ti({matchPatterns:vd,defaultMatchWidth:"wide",parsePatterns:yd,defaultParseWidth:"any"}),quarter:ti({matchPatterns:wd,defaultMatchWidth:"wide",parsePatterns:bd,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:ti({matchPatterns:Cd,defaultMatchWidth:"wide",parsePatterns:Ed,defaultParseWidth:"any"}),day:ti({matchPatterns:Td,defaultMatchWidth:"wide",parsePatterns:Id,defaultParseWidth:"any"}),dayPeriod:ti({matchPatterns:Sd,defaultMatchWidth:"any",parsePatterns:xd,defaultParseWidth:"any"})},Ad=Md,Nd={code:"en-US",formatDistance:Ku,formatLong:ed,formatRelative:id,localize:hd,match:Ad,options:{weekStartsOn:0,firstWeekContainsDate:1}},Rd=Nd;function kd(n,e){he(2,arguments);var t=Le(e);return Hu(n,-t)}var Pd=864e5;function Od(n){he(1,arguments);var e=He(n),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),r=t-i;return Math.floor(r/Pd)+1}function Gi(n){he(1,arguments);var e=1,t=He(n),i=t.getUTCDay(),r=(i<e?7:0)+i-e;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function ua(n){he(1,arguments);var e=He(n),t=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(t+1,0,4),i.setUTCHours(0,0,0,0);var r=Gi(i),s=new Date(0);s.setUTCFullYear(t,0,4),s.setUTCHours(0,0,0,0);var o=Gi(s);return e.getTime()>=r.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Dd(n){he(1,arguments);var e=ua(n),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var i=Gi(t);return i}var Fd=6048e5;function Ld(n){he(1,arguments);var e=He(n),t=Gi(e).getTime()-Dd(e).getTime();return Math.round(t/Fd)+1}function Yi(n,e){he(1,arguments);var t=e||{},i=t.locale,r=i&&i.options&&i.options.weekStartsOn,s=r==null?0:Le(r),o=t.weekStartsOn==null?s:Le(t.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=He(n),c=l.getUTCDay(),u=(c<o?7:0)+c-o;return l.setUTCDate(l.getUTCDate()-u),l.setUTCHours(0,0,0,0),l}function da(n,e){he(1,arguments);var t=He(n),i=t.getUTCFullYear(),r=e||{},s=r.locale,o=s&&s.options&&s.options.firstWeekContainsDate,l=o==null?1:Le(o),c=r.firstWeekContainsDate==null?l:Le(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(i+1,0,c),u.setUTCHours(0,0,0,0);var m=Yi(u,e),p=new Date(0);p.setUTCFullYear(i,0,c),p.setUTCHours(0,0,0,0);var g=Yi(p,e);return t.getTime()>=m.getTime()?i+1:t.getTime()>=g.getTime()?i:i-1}function Wd(n,e){he(1,arguments);var t=e||{},i=t.locale,r=i&&i.options&&i.options.firstWeekContainsDate,s=r==null?1:Le(r),o=t.firstWeekContainsDate==null?s:Le(t.firstWeekContainsDate),l=da(n,e),c=new Date(0);c.setUTCFullYear(l,0,o),c.setUTCHours(0,0,0,0);var u=Yi(c,e);return u}var Bd=6048e5;function Ud(n,e){he(1,arguments);var t=He(n),i=Yi(t,e).getTime()-Wd(t,e).getTime();return Math.round(i/Bd)+1}function $(n,e){for(var t=n<0?"-":"",i=Math.abs(n).toString();i.length<e;)i="0"+i;return t+i}var qd={y:function(n,e){var t=n.getUTCFullYear(),i=t>0?t:1-t;return $(e==="yy"?i%100:i,e.length)},M:function(n,e){var t=n.getUTCMonth();return e==="M"?String(t+1):$(t+1,2)},d:function(n,e){return $(n.getUTCDate(),e.length)},a:function(n,e){var t=n.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(n,e){return $(n.getUTCHours()%12||12,e.length)},H:function(n,e){return $(n.getUTCHours(),e.length)},m:function(n,e){return $(n.getUTCMinutes(),e.length)},s:function(n,e){return $(n.getUTCSeconds(),e.length)},S:function(n,e){var t=e.length,i=n.getUTCMilliseconds(),r=Math.floor(i*Math.pow(10,t-3));return $(r,e.length)}},St=qd,bn={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Vd={G:function(n,e,t){var i=n.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){var i=n.getUTCFullYear(),r=i>0?i:1-i;return t.ordinalNumber(r,{unit:"year"})}return St.y(n,e)},Y:function(n,e,t,i){var r=da(n,i),s=r>0?r:1-r;if(e==="YY"){var o=s%100;return $(o,2)}return e==="Yo"?t.ordinalNumber(s,{unit:"year"}):$(s,e.length)},R:function(n,e){var t=ua(n);return $(t,e.length)},u:function(n,e){var t=n.getUTCFullYear();return $(t,e.length)},Q:function(n,e,t){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return $(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(n,e,t){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return $(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(n,e,t){var i=n.getUTCMonth();switch(e){case"M":case"MM":return St.M(n,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(n,e,t){var i=n.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return $(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(n,e,t,i){var r=Ud(n,i);return e==="wo"?t.ordinalNumber(r,{unit:"week"}):$(r,e.length)},I:function(n,e,t){var i=Ld(n);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):$(i,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getUTCDate(),{unit:"date"}):St.d(n,e)},D:function(n,e,t){var i=Od(n);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):$(i,e.length)},E:function(n,e,t){var i=n.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(n,e,t,i){var r=n.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return $(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(n,e,t,i){var r=n.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return $(s,e.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(n,e,t){var i=n.getUTCDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return $(r,e.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(n,e,t){var i=n.getUTCHours(),r=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){var i=n.getUTCHours(),r;switch(i===12?r=bn.noon:i===0?r=bn.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,e,t){var i=n.getUTCHours(),r;switch(i>=17?r=bn.evening:i>=12?r=bn.afternoon:i>=4?r=bn.morning:r=bn.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){var i=n.getUTCHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return St.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getUTCHours(),{unit:"hour"}):St.H(n,e)},K:function(n,e,t){var i=n.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):$(i,e.length)},k:function(n,e,t){var i=n.getUTCHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):$(i,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getUTCMinutes(),{unit:"minute"}):St.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getUTCSeconds(),{unit:"second"}):St.s(n,e)},S:function(n,e){return St.S(n,e)},X:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return fa(s);case"XXXX":case"XX":return Vt(s);case"XXXXX":case"XXX":default:return Vt(s,":")}},x:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"x":return fa(s);case"xxxx":case"xx":return Vt(s);case"xxxxx":case"xxx":default:return Vt(s,":")}},O:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ha(s,":");case"OOOO":default:return"GMT"+Vt(s,":")}},z:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ha(s,":");case"zzzz":default:return"GMT"+Vt(s,":")}},t:function(n,e,t,i){var r=i._originalDate||n,s=Math.floor(r.getTime()/1e3);return $(s,e.length)},T:function(n,e,t,i){var r=i._originalDate||n,s=r.getTime();return $(s,e.length)}};function ha(n,e){var t=n>0?"-":"+",i=Math.abs(n),r=Math.floor(i/60),s=i%60;if(s===0)return t+String(r);var o=e||"";return t+String(r)+o+$(s,2)}function fa(n,e){if(n%60==0){var t=n>0?"-":"+";return t+$(Math.abs(n)/60,2)}return Vt(n,e)}function Vt(n,e){var t=e||"",i=n>0?"-":"+",r=Math.abs(n),s=$(Math.floor(r/60),2),o=$(r%60,2);return i+s+t+o}var Hd=Vd;function pa(n,e){switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function ma(n,e){switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function $d(n,e){var t=n.match(/(P+)(p+)?/)||[],i=t[1],r=t[2];if(!r)return pa(n,e);var s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",pa(i,e)).replace("{{time}}",ma(r,e))}var Gd={p:ma,P:$d},Yd=Gd,zd=["D","DD"],jd=["YY","YYYY"];function Kd(n){return zd.indexOf(n)!==-1}function Qd(n){return jd.indexOf(n)!==-1}function ga(n,e,t){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"))}var Zd=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xd=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Jd=/^'([^]*?)'?$/,eh=/''/g,th=/[a-zA-Z]/;function hv(n,e,t){he(2,arguments);var i=String(e),r=t||{},s=r.locale||Rd,o=s.options&&s.options.firstWeekContainsDate,l=o==null?1:Le(o),c=r.firstWeekContainsDate==null?l:Le(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=s.options&&s.options.weekStartsOn,m=u==null?0:Le(u),p=r.weekStartsOn==null?m:Le(r.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=He(n);if(!Yu(g))throw new RangeError("Invalid time value");var b=is(g),E=kd(g,b),N={firstWeekContainsDate:c,weekStartsOn:p,locale:s,_originalDate:g},I=i.match(Xd).map(function(G){var R=G[0];if(R==="p"||R==="P"){var ee=Yd[R];return ee(G,s.formatLong,N)}return G}).join("").match(Zd).map(function(G){if(G==="''")return"'";var R=G[0];if(R==="'")return nh(G);var ee=Hd[R];if(ee)return!r.useAdditionalWeekYearTokens&&Qd(G)&&ga(G,e,n),!r.useAdditionalDayOfYearTokens&&Kd(G)&&ga(G,e,n),ee(E,G,s.localize,N);if(R.match(th))throw new RangeError("Format string contains an unescaped latin alphabet character `"+R+"`");return G}).join("");return I}function nh(n){return n.match(Jd)[1].replace(eh,"'")}var _a=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},va={exports:{}};/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */(function(n,e){(function(t,i){n.exports=i()})(_a,function(){var t=function(i,r,s,o){var l={features:null,bind:function(a,d,h,f){var v=(f?"remove":"add")+"EventListener";d=d.split(" ");for(var w=0;w<d.length;w++)d[w]&&a[v](d[w],h,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,d){var h=document.createElement(d||"div");return a&&(h.className=a),h},getScrollY:function(){var a=window.pageYOffset;return a!==void 0?a:document.documentElement.scrollTop},unbind:function(a,d,h){l.bind(a,d,h,!0)},removeClass:function(a,d){var h=new RegExp("(\\s|^)"+d+"(\\s|$)");a.className=a.className.replace(h," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,d){l.hasClass(a,d)||(a.className+=(a.className?" ":"")+d)},hasClass:function(a,d){return a.className&&new RegExp("(^|\\s)"+d+"(\\s|$)").test(a.className)},getChildByClass:function(a,d){for(var h=a.firstChild;h;){if(l.hasClass(h,d))return h;h=h.nextSibling}},arraySearch:function(a,d,h){for(var f=a.length;f--;)if(a[f][h]===d)return f;return-1},extend:function(a,d,h){for(var f in d)if(d.hasOwnProperty(f)){if(h&&a.hasOwnProperty(f))continue;a[f]=d[f]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(l.features)return l.features;var a=l.createEl(),d=a.style,h="",f={};if(f.oldIE=document.all&&!document.addEventListener,f.touch="ontouchstart"in window,window.requestAnimationFrame&&(f.raf=window.requestAnimationFrame,f.caf=window.cancelAnimationFrame),f.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!f.pointerEvent){var v=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var w=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);w&&w.length>0&&(w=parseInt(w[1],10),w>=1&&w<8&&(f.isOldIOSPhone=!0))}var M=v.match(/Android\s([0-9\.]*)/),O=M?M[1]:0;O=parseFloat(O),O>=1&&(O<4.4&&(f.isOldAndroid=!0),f.androidVersion=O),f.isMobileOpera=/opera mini|opera mobi/i.test(v)}for(var k=["transform","perspective","animationName"],q=["","webkit","Moz","ms","O"],ae,tt,ut=0;ut<4;ut++){h=q[ut];for(var wn=0;wn<3;wn++)ae=k[wn],tt=h+(h?ae.charAt(0).toUpperCase()+ae.slice(1):ae),!f[ae]&&tt in d&&(f[ae]=tt);h&&!f.raf&&(h=h.toLowerCase(),f.raf=window[h+"RequestAnimationFrame"],f.raf&&(f.caf=window[h+"CancelAnimationFrame"]||window[h+"CancelRequestAnimationFrame"]))}if(!f.raf){var Qn=0;f.raf=function(nt){var Xr=new Date().getTime(),Jr=Math.max(0,16-(Xr-Qn)),Tu=window.setTimeout(function(){nt(Xr+Jr)},Jr);return Qn=Xr+Jr,Tu},f.caf=function(nt){clearTimeout(nt)}}return f.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,l.features=f,f}};l.detectFeatures(),l.features.oldIE&&(l.bind=function(a,d,h,f){d=d.split(" ");for(var v=(f?"detach":"attach")+"Event",w,M=function(){h.handleEvent.call(h)},O=0;O<d.length;O++)if(w=d[O],w)if(typeof h=="object"&&h.handleEvent){if(!f)h["oldIE"+w]=M;else if(!h["oldIE"+w])return!1;a[v]("on"+w,h["oldIE"+w])}else a[v]("on"+w,h)});var c=this,u=25,m=3,p={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return a.tagName==="A"},getDoubleTapZoom:function(a,d){return a||d.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};l.extend(p,o);var g=function(){return{x:0,y:0}},b,E,N,I,G,R,ee=g(),be=g(),S=g(),j,x,Y,J={},F,ot,ze,an,ln,je,Ke=0,mt={},de=g(),te,cn,ye=0,gt,Rt,kt,Pt,Ue,Qe,un=!0,qe,_t=[],dn,y,T,H,oe,ge,L,Ne={},Ve=!1,Ot,Ln=function(a,d){l.extend(c,d.publicMethods),_t.push(a)},Mi=function(a){var d=ke();return a>d-1?a-d:a<0?d+a:a},Wn={},ne=function(a,d){return Wn[a]||(Wn[a]=[]),Wn[a].push(d)},U=function(a){var d=Wn[a];if(d){var h=Array.prototype.slice.call(arguments);h.shift();for(var f=0;f<d.length;f++)d[f].apply(c,h)}},Ze=function(){return new Date().getTime()},at=function(a){Di=a,c.bg.style.opacity=a*p.bgOpacity},Mo=function(a,d,h,f,v){(!Ve||v&&v!==c.currItem)&&(f=f/(v?v.fitRatio:c.currItem.fitRatio)),a[Ue]=ze+d+"px, "+h+"px"+an+" scale("+f+")"},_e=function(a){Je&&(a&&(F>c.currItem.fitRatio?Ve||(qt(c.currItem,!1,!0),Ve=!0):Ve&&(qt(c.currItem),Ve=!1)),Mo(Je,S.x,S.y,F))},Bn=function(a){a.container&&Mo(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},hn=function(a,d){d[Ue]=ze+a+"px, 0px"+an},Ai=function(a,d){if(!p.loop&&d){var h=I+(de.x*Ke-a)/de.x,f=Math.round(a-ct.x);(h<0&&f>0||h>=ke()-1&&f<0)&&(a=ct.x+f*p.mainScrollEndFriction)}ct.x=a,hn(a,G)},Ar=function(a,d){var h=Yn[a]-mt[a];return be[a]+ee[a]+h-h*(d/ot)},Ce=function(a,d){a.x=d.x,a.y=d.y,d.id&&(a.id=d.id)},Ao=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Nr=null,Rr=function(){Nr&&(l.unbind(document,"mousemove",Rr),l.addClass(i,"pswp--has_mouse"),p.mouseUsed=!0,U("mouseUsed")),Nr=setTimeout(function(){Nr=null},100)},tu=function(){l.bind(document,"keydown",c),L.transform&&l.bind(c.scrollWrap,"click",c),p.mouseUsed||l.bind(document,"mousemove",Rr),l.bind(window,"resize scroll orientationchange",c),U("bindEvents")},nu=function(){l.unbind(window,"resize scroll orientationchange",c),l.unbind(window,"scroll",Y.scroll),l.unbind(document,"keydown",c),l.unbind(document,"mousemove",Rr),L.transform&&l.unbind(c.scrollWrap,"click",c),Xe&&l.unbind(window,j,c),clearTimeout(Ot),U("unbindEvents")},kr=function(a,d){var h=jn(c.currItem,J,a);return d&&(P=h),h},No=function(a){return a||(a=c.currItem),a.initialZoomLevel},Ro=function(a){return a||(a=c.currItem),a.w>0?p.maxSpreadZoom:1},ko=function(a,d,h,f){return f===c.currItem.initialZoomLevel?(h[a]=c.currItem.initialPosition[a],!0):(h[a]=Ar(a,f),h[a]>d.min[a]?(h[a]=d.min[a],!0):h[a]<d.max[a]?(h[a]=d.max[a],!0):!1)},iu=function(){if(Ue){var a=L.perspective&&!qe;ze="translate"+(a?"3d(":"("),an=L.perspective?", 0px)":")";return}Ue="left",l.addClass(i,"pswp--ie"),hn=function(d,h){h.left=d+"px"},Bn=function(d){var h=d.fitRatio>1?1:d.fitRatio,f=d.container.style,v=h*d.w,w=h*d.h;f.width=v+"px",f.height=w+"px",f.left=d.initialPosition.x+"px",f.top=d.initialPosition.y+"px"},_e=function(){if(Je){var d=Je,h=c.currItem,f=h.fitRatio>1?1:h.fitRatio,v=f*h.w,w=f*h.h;d.width=v+"px",d.height=w+"px",d.left=S.x+"px",d.top=S.y+"px"}}},ru=function(a){var d="";p.escKey&&a.keyCode===27?d="close":p.arrowKeys&&(a.keyCode===37?d="prev":a.keyCode===39&&(d="next")),d&&!a.ctrlKey&&!a.altKey&&!a.shiftKey&&!a.metaKey&&(a.preventDefault?a.preventDefault():a.returnValue=!1,c[d]())},su=function(a){!a||(gn||Wt||Se||$n)&&(a.preventDefault(),a.stopPropagation())},Po=function(){c.setScrollOffset(0,l.getScrollY())},Re={},fn=0,Un=function(a){Re[a]&&(Re[a].raf&&y(Re[a].raf),fn--,delete Re[a])},Pr=function(a){Re[a]&&Un(a),Re[a]||(fn++,Re[a]={})},qn=function(){for(var a in Re)Re.hasOwnProperty(a)&&Un(a)},Vn=function(a,d,h,f,v,w,M){var O=Ze(),k;Pr(a);var q=function(){if(Re[a]){if(k=Ze()-O,k>=f){Un(a),w(h),M&&M();return}w((h-d)*v(k/f)+d),Re[a].raf=dn(q)}};q()},ou={shout:U,listen:ne,viewportSize:J,options:p,isMainScrollAnimating:function(){return Se},getZoomLevel:function(){return F},getCurrentIndex:function(){return I},isDragging:function(){return Xe},isZooming:function(){return lt},setScrollOffset:function(a,d){mt.x=a,ge=mt.y=d,U("updateScrollOffset",mt)},applyZoomPan:function(a,d,h,f){S.x=d,S.y=h,F=a,_e(f)},init:function(){if(!(b||E)){var a;c.framework=l,c.template=i,c.bg=l.getChildByClass(i,"pswp__bg"),T=i.className,b=!0,L=l.detectFeatures(),dn=L.raf,y=L.caf,Ue=L.transform,oe=L.oldIE,c.scrollWrap=l.getChildByClass(i,"pswp__scroll-wrap"),c.container=l.getChildByClass(c.scrollWrap,"pswp__container"),G=c.container.style,c.itemHolders=te=[{el:c.container.children[0],wrap:0,index:-1},{el:c.container.children[1],wrap:0,index:-1},{el:c.container.children[2],wrap:0,index:-1}],te[0].el.style.display=te[2].el.style.display="none",iu(),Y={resize:c.updateSize,orientationchange:function(){clearTimeout(Ot),Ot=setTimeout(function(){J.x!==c.scrollWrap.clientWidth&&c.updateSize()},500)},scroll:Po,keydown:ru,click:su};var d=L.isOldIOSPhone||L.isOldAndroid||L.isMobileOpera;for((!L.animationName||!L.transform||d)&&(p.showAnimationDuration=p.hideAnimationDuration=0),a=0;a<_t.length;a++)c["init"+_t[a]]();if(r){var h=c.ui=new r(c,l);h.init()}U("firstUpdate"),I=I||p.index||0,(isNaN(I)||I<0||I>=ke())&&(I=0),c.currItem=Et(I),(L.isOldIOSPhone||L.isOldAndroid)&&(un=!1),i.setAttribute("aria-hidden","false"),p.modal&&(un?i.style.position="fixed":(i.style.position="absolute",i.style.top=l.getScrollY()+"px")),ge===void 0&&(U("initialLayout"),ge=H=l.getScrollY());var f="pswp--open ";for(p.mainClass&&(f+=p.mainClass+" "),p.showHideOpacity&&(f+="pswp--animate_opacity "),f+=qe?"pswp--touch":"pswp--notouch",f+=L.animationName?" pswp--css_animation":"",f+=L.svg?" pswp--svg":"",l.addClass(i,f),c.updateSize(),R=-1,ye=null,a=0;a<m;a++)hn((a+R)*de.x,te[a].el.style);oe||l.bind(c.scrollWrap,x,c),ne("initialZoomInEnd",function(){c.setContent(te[0],I-1),c.setContent(te[2],I+1),te[0].el.style.display=te[2].el.style.display="block",p.focus&&i.focus(),tu()}),c.setContent(te[1],I),c.updateCurrItem(),U("afterInit"),un||(ln=setInterval(function(){!fn&&!Xe&&!lt&&F===c.currItem.initialZoomLevel&&c.updateSize()},1e3)),l.addClass(i,"pswp--visible")}},close:function(){!b||(b=!1,E=!0,U("close"),nu(),Go(c.currItem,null,!0,c.destroy))},destroy:function(){U("destroy"),Bt&&clearTimeout(Bt),i.setAttribute("aria-hidden","true"),i.className=T,ln&&clearInterval(ln),l.unbind(c.scrollWrap,x,c),l.unbind(window,"scroll",c),Br(),qn(),Wn=null},panTo:function(a,d,h){h||(a>P.min.x?a=P.min.x:a<P.max.x&&(a=P.max.x),d>P.min.y?d=P.min.y:d<P.max.y&&(d=P.max.y)),S.x=a,S.y=d,_e()},handleEvent:function(a){a=a||window.event,Y[a.type]&&Y[a.type](a)},goTo:function(a){a=Mi(a);var d=a-I;ye=d,I=a,c.currItem=Et(I),Ke-=d,Ai(de.x*Ke),qn(),Se=!1,c.updateCurrItem()},next:function(){c.goTo(I+1)},prev:function(){c.goTo(I-1)},updateCurrZoomItem:function(a){if(a&&U("beforeChange",0),te[1].el.children.length){var d=te[1].el.children[0];l.hasClass(d,"pswp__zoom-wrap")?Je=d.style:Je=null}else Je=null;P=c.currItem.bounds,ot=F=c.currItem.initialZoomLevel,S.x=P.center.x,S.y=P.center.y,a&&U("afterChange")},invalidateCurrItems:function(){je=!0;for(var a=0;a<m;a++)te[a].item&&(te[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(ye!==0){var d=Math.abs(ye),h;if(!(a&&d<2)){c.currItem=Et(I),Ve=!1,U("beforeChange",ye),d>=m&&(R+=ye+(ye>0?-m:m),d=m);for(var f=0;f<d;f++)ye>0?(h=te.shift(),te[m-1]=h,R++,hn((R+2)*de.x,h.el.style),c.setContent(h,I-d+f+1+1)):(h=te.pop(),te.unshift(h),R--,hn(R*de.x,h.el.style),c.setContent(h,I+d-f-1-1));if(Je&&Math.abs(ye)===1){var v=Et(cn);v.initialZoomLevel!==F&&(jn(v,J),qt(v),Bn(v))}ye=0,c.updateCurrZoomItem(),cn=I,U("afterChange")}}},updateSize:function(a){if(!un&&p.modal){var d=l.getScrollY();if(ge!==d&&(i.style.top=d+"px",ge=d),!a&&Ne.x===window.innerWidth&&Ne.y===window.innerHeight)return;Ne.x=window.innerWidth,Ne.y=window.innerHeight,i.style.height=Ne.y+"px"}if(J.x=c.scrollWrap.clientWidth,J.y=c.scrollWrap.clientHeight,Po(),de.x=J.x+Math.round(J.x*p.spacing),de.y=J.y,Ai(de.x*Ke),U("beforeResize"),R!==void 0){for(var h,f,v,w=0;w<m;w++)h=te[w],hn((w+R)*de.x,h.el.style),v=I+w-1,p.loop&&ke()>2&&(v=Mi(v)),f=Et(v),f&&(je||f.needsUpdate||!f.bounds)?(c.cleanSlide(f),c.setContent(h,v),w===1&&(c.currItem=f,c.updateCurrZoomItem(!0)),f.needsUpdate=!1):h.index===-1&&v>=0&&c.setContent(h,v),f&&f.container&&(jn(f,J),qt(f),Bn(f));je=!1}ot=F=c.currItem.initialZoomLevel,P=c.currItem.bounds,P&&(S.x=P.center.x,S.y=P.center.y,_e(!0)),U("resize")},zoomTo:function(a,d,h,f,v){d&&(ot=F,Yn.x=Math.abs(d.x)-S.x,Yn.y=Math.abs(d.y)-S.y,Ce(be,S));var w=kr(a,!1),M={};ko("x",w,M,a),ko("y",w,M,a);var O=F,k={x:S.x,y:S.y};Ao(M);var q=function(ae){ae===1?(F=a,S.x=M.x,S.y=M.y):(F=(a-O)*ae+O,S.x=(M.x-k.x)*ae+k.x,S.y=(M.y-k.y)*ae+k.y),v&&v(ae),_e(ae===1)};h?Vn("customZoomTo",0,1,h,f||l.easing.sine.inOut,q):q(1)}},Oo=30,Or=10,Do,Ni,Ee={},Dt={},Te={},Ie={},pn={},vt=[],Ft={},Hn,Lt=[],mn={},Dr,$n,Gn,Ri=0,ki=g(),Fr=0,Xe,Lr,Wt,gn,Pi,yt,De,lt,Fo,P,ct=g(),Je,Se,Yn=g(),_n=g(),wt,Wr,Oi,Di,Fi,au=function(a,d){return a.x===d.x&&a.y===d.y},lu=function(a,d){return Math.abs(a.x-d.x)<u&&Math.abs(a.y-d.y)<u},Lo=function(a,d){return mn.x=Math.abs(a.x-d.x),mn.y=Math.abs(a.y-d.y),Math.sqrt(mn.x*mn.x+mn.y*mn.y)},Br=function(){Pi&&(y(Pi),Pi=null)},Wo=function(){Xe&&(Pi=dn(Wo),pu())},cu=function(){return!(p.scaleMode==="fit"&&F===c.currItem.initialZoomLevel)},Bo=function(a,d){return!a||a===document||a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:d(a)?a:Bo(a.parentNode,d)},Ur={},Uo=function(a,d){return Ur.prevent=!Bo(a.target,p.isClickableElement),U("preventDragEvent",a,d,Ur),Ur.prevent},qo=function(a,d){return d.x=a.pageX,d.y=a.pageY,d.id=a.identifier,d},Vo=function(a,d,h){h.x=(a.x+d.x)*.5,h.y=(a.y+d.y)*.5},uu=function(a,d,h){if(a-Ni>50){var f=Lt.length>2?Lt.shift():{};f.x=d,f.y=h,Lt.push(f),Ni=a}},Ho=function(){var a=S.y-c.currItem.initialPosition.y;return 1-Math.abs(a/(J.y/2))},zn={},du={},bt=[],Li,qr=function(a){for(;bt.length>0;)bt.pop();return Qe?(Li=0,vt.forEach(function(d){Li===0?bt[0]=d:Li===1&&(bt[1]=d),Li++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(bt[0]=qo(a.touches[0],zn),a.touches.length>1&&(bt[1]=qo(a.touches[1],du))):(zn.x=a.pageX,zn.y=a.pageY,zn.id="",bt[0]=zn),bt},$o=function(a,d){var h,f=S[a]+d[a],v,w=d[a]>0,M=ct.x+d.x,O=ct.x-Ft.x,k,q;if(f>P.min[a]||f<P.max[a]?h=p.panEndFriction:h=1,f=S[a]+d[a]*h,(p.allowPanToNext||F===c.currItem.initialZoomLevel)&&(Je?wt==="h"&&a==="x"&&!Wt&&(w?(f>P.min[a]&&(h=p.panEndFriction,P.min[a]-f,v=P.min[a]-be[a]),(v<=0||O<0)&&ke()>1?(q=M,O<0&&M>Ft.x&&(q=Ft.x)):P.min.x!==P.max.x&&(k=f)):(f<P.max[a]&&(h=p.panEndFriction,f-P.max[a],v=be[a]-P.max[a]),(v<=0||O>0)&&ke()>1?(q=M,O>0&&M<Ft.x&&(q=Ft.x)):P.min.x!==P.max.x&&(k=f))):q=M,a==="x"))return q!==void 0&&(Ai(q,!0),q===Ft.x?yt=!1:yt=!0),P.min.x!==P.max.x&&(k!==void 0?S.x=k:yt||(S.x+=d.x*h)),q!==void 0;Se||yt||F>c.currItem.fitRatio&&(S[a]+=d[a]*h)},hu=function(a){if(!(a.type==="mousedown"&&a.button>0)){if(vn){a.preventDefault();return}if(!(Gn&&a.type==="mousedown")){if(Uo(a,!0)&&a.preventDefault(),U("pointerDown"),Qe){var d=l.arraySearch(vt,a.pointerId,"id");d<0&&(d=vt.length),vt[d]={x:a.pageX,y:a.pageY,id:a.pointerId}}var h=qr(a),f=h.length;De=null,qn(),(!Xe||f===1)&&(Xe=Wr=!0,l.bind(window,j,c),Dr=Fi=Oi=$n=yt=gn=Lr=Wt=!1,wt=null,U("firstTouchStart",h),Ce(be,S),ee.x=ee.y=0,Ce(Ie,h[0]),Ce(pn,Ie),Ft.x=de.x*Ke,Lt=[{x:Ie.x,y:Ie.y}],Ni=Do=Ze(),kr(F,!0),Br(),Wo()),!lt&&f>1&&!Se&&!yt&&(ot=F,Wt=!1,lt=Lr=!0,ee.y=ee.x=0,Ce(be,S),Ce(Ee,h[0]),Ce(Dt,h[1]),Vo(Ee,Dt,_n),Yn.x=Math.abs(_n.x)-S.x,Yn.y=Math.abs(_n.y)-S.y,Fo=Lo(Ee,Dt))}}},fu=function(a){if(a.preventDefault(),Qe){var d=l.arraySearch(vt,a.pointerId,"id");if(d>-1){var h=vt[d];h.x=a.pageX,h.y=a.pageY}}if(Xe){var f=qr(a);if(!wt&&!gn&&!lt)if(ct.x!==de.x*Ke)wt="h";else{var v=Math.abs(f[0].x-Ie.x)-Math.abs(f[0].y-Ie.y);Math.abs(v)>=Or&&(wt=v>0?"h":"v",De=f)}else De=f}},pu=function(){if(!!De){var a=De.length;if(a!==0)if(Ce(Ee,De[0]),Te.x=Ee.x-Ie.x,Te.y=Ee.y-Ie.y,lt&&a>1){if(Ie.x=Ee.x,Ie.y=Ee.y,!Te.x&&!Te.y&&au(De[1],Dt))return;Ce(Dt,De[1]),Wt||(Wt=!0,U("zoomGestureStarted"));var d=Lo(Ee,Dt),h=yu(d);h>c.currItem.initialZoomLevel+c.currItem.initialZoomLevel/15&&(Fi=!0);var f=1,v=No(),w=Ro();if(h<v)if(p.pinchToClose&&!Fi&&ot<=c.currItem.initialZoomLevel){var M=v-h,O=1-M/(v/1.2);at(O),U("onPinchClose",O),Oi=!0}else f=(v-h)/v,f>1&&(f=1),h=v-f*(v/3);else h>w&&(f=(h-w)/(v*6),f>1&&(f=1),h=w+f*v);f<0&&(f=0),Vo(Ee,Dt,ki),ee.x+=ki.x-_n.x,ee.y+=ki.y-_n.y,Ce(_n,ki),S.x=Ar("x",h),S.y=Ar("y",h),Dr=h>F,F=h,_e()}else{if(!wt||(Wr&&(Wr=!1,Math.abs(Te.x)>=Or&&(Te.x-=De[0].x-pn.x),Math.abs(Te.y)>=Or&&(Te.y-=De[0].y-pn.y)),Ie.x=Ee.x,Ie.y=Ee.y,Te.x===0&&Te.y===0))return;if(wt==="v"&&p.closeOnVerticalDrag&&!cu()){ee.y+=Te.y,S.y+=Te.y;var k=Ho();$n=!0,U("onVerticalDrag",k),at(k),_e();return}uu(Ze(),Ee.x,Ee.y),gn=!0,P=c.currItem.bounds;var q=$o("x",Te);q||($o("y",Te),Ao(S),_e())}}},mu=function(a){if(L.isOldAndroid){if(Gn&&a.type==="mouseup")return;a.type.indexOf("touch")>-1&&(clearTimeout(Gn),Gn=setTimeout(function(){Gn=0},600))}U("pointerUp"),Uo(a,!1)&&a.preventDefault();var d;if(Qe){var h=l.arraySearch(vt,a.pointerId,"id");if(h>-1)if(d=vt.splice(h,1)[0],navigator.msPointerEnabled){var f={4:"mouse",2:"touch",3:"pen"};d.type=f[a.pointerType],d.type||(d.type=a.pointerType||"mouse")}else d.type=a.pointerType||"mouse"}var v=qr(a),w,M=v.length;if(a.type==="mouseup"&&(M=0),M===2)return De=null,!0;M===1&&Ce(pn,v[0]),M===0&&!wt&&!Se&&(d||(a.type==="mouseup"?d={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(d={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),U("touchRelease",a,d));var O=-1;if(M===0&&(Xe=!1,l.unbind(window,j,c),Br(),lt?O=0:Fr!==-1&&(O=Ze()-Fr)),Fr=M===1?Ze():-1,O!==-1&&O<150?w="zoom":w="swipe",lt&&M<2&&(lt=!1,M===1&&(w="zoomPointerUp"),U("zoomGestureEnded")),De=null,!(!gn&&!Wt&&!Se&&!$n)){if(qn(),Hn||(Hn=gu()),Hn.calculateSwipeSpeed("x"),$n){var k=Ho();if(k<p.verticalDragRange)c.close();else{var q=S.y,ae=Di;Vn("verticalDrag",0,1,300,l.easing.cubic.out,function(ut){S.y=(c.currItem.initialPosition.y-q)*ut+q,at((1-ae)*ut+ae),_e()}),U("onVerticalDrag",1)}return}if((yt||Se)&&M===0){var tt=vu(w,Hn);if(tt)return;w="zoomPointerUp"}if(!Se){if(w!=="swipe"){wu();return}!yt&&F>c.currItem.fitRatio&&_u(Hn)}}},gu=function(){var a,d,h={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(f){Lt.length>1?(a=Ze()-Ni+50,d=Lt[Lt.length-2][f]):(a=Ze()-Do,d=pn[f]),h.lastFlickOffset[f]=Ie[f]-d,h.lastFlickDist[f]=Math.abs(h.lastFlickOffset[f]),h.lastFlickDist[f]>20?h.lastFlickSpeed[f]=h.lastFlickOffset[f]/a:h.lastFlickSpeed[f]=0,Math.abs(h.lastFlickSpeed[f])<.1&&(h.lastFlickSpeed[f]=0),h.slowDownRatio[f]=.95,h.slowDownRatioReverse[f]=1-h.slowDownRatio[f],h.speedDecelerationRatio[f]=1},calculateOverBoundsAnimOffset:function(f,v){h.backAnimStarted[f]||(S[f]>P.min[f]?h.backAnimDestination[f]=P.min[f]:S[f]<P.max[f]&&(h.backAnimDestination[f]=P.max[f]),h.backAnimDestination[f]!==void 0&&(h.slowDownRatio[f]=.7,h.slowDownRatioReverse[f]=1-h.slowDownRatio[f],h.speedDecelerationRatioAbs[f]<.05&&(h.lastFlickSpeed[f]=0,h.backAnimStarted[f]=!0,Vn("bounceZoomPan"+f,S[f],h.backAnimDestination[f],v||300,l.easing.sine.out,function(w){S[f]=w,_e()}))))},calculateAnimOffset:function(f){h.backAnimStarted[f]||(h.speedDecelerationRatio[f]=h.speedDecelerationRatio[f]*(h.slowDownRatio[f]+h.slowDownRatioReverse[f]-h.slowDownRatioReverse[f]*h.timeDiff/10),h.speedDecelerationRatioAbs[f]=Math.abs(h.lastFlickSpeed[f]*h.speedDecelerationRatio[f]),h.distanceOffset[f]=h.lastFlickSpeed[f]*h.speedDecelerationRatio[f]*h.timeDiff,S[f]+=h.distanceOffset[f])},panAnimLoop:function(){if(Re.zoomPan&&(Re.zoomPan.raf=dn(h.panAnimLoop),h.now=Ze(),h.timeDiff=h.now-h.lastNow,h.lastNow=h.now,h.calculateAnimOffset("x"),h.calculateAnimOffset("y"),_e(),h.calculateOverBoundsAnimOffset("x"),h.calculateOverBoundsAnimOffset("y"),h.speedDecelerationRatioAbs.x<.05&&h.speedDecelerationRatioAbs.y<.05)){S.x=Math.round(S.x),S.y=Math.round(S.y),_e(),Un("zoomPan");return}}};return h},_u=function(a){if(a.calculateSwipeSpeed("y"),P=c.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05)return a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0;Pr("zoomPan"),a.lastNow=Ze(),a.panAnimLoop()},vu=function(a,d){var h;Se||(Ri=I);var f;if(a==="swipe"){var v=Ie.x-pn.x,w=d.lastFlickDist.x<10;v>Oo&&(w||d.lastFlickOffset.x>20)?f=-1:v<-Oo&&(w||d.lastFlickOffset.x<-20)&&(f=1)}var M;f&&(I+=f,I<0?(I=p.loop?ke()-1:0,M=!0):I>=ke()&&(I=p.loop?0:ke()-1,M=!0),(!M||p.loop)&&(ye+=f,Ke-=f,h=!0));var O=de.x*Ke,k=Math.abs(O-ct.x),q;return!h&&O>ct.x!=d.lastFlickSpeed.x>0?q=333:(q=Math.abs(d.lastFlickSpeed.x)>0?k/Math.abs(d.lastFlickSpeed.x):333,q=Math.min(q,400),q=Math.max(q,250)),Ri===I&&(h=!1),Se=!0,U("mainScrollAnimStart"),Vn("mainScroll",ct.x,O,q,l.easing.cubic.out,Ai,function(){qn(),Se=!1,Ri=-1,(h||Ri!==I)&&c.updateCurrItem(),U("mainScrollAnimComplete")}),h&&c.updateCurrItem(!0),h},yu=function(a){return 1/Fo*a*ot},wu=function(){var a=F,d=No(),h=Ro();F<d?a=d:F>h&&(a=h);var f=1,v,w=Di;return Oi&&!Dr&&!Fi&&F<d?(c.close(),!0):(Oi&&(v=function(M){at((f-w)*M+w)}),c.zoomTo(a,0,200,l.easing.cubic.out,v),!0)};Ln("Gestures",{publicMethods:{initGestures:function(){var a=function(d,h,f,v,w){gt=d+h,Rt=d+f,kt=d+v,w?Pt=d+w:Pt=""};Qe=L.pointerEvent,Qe&&L.touch&&(L.touch=!1),Qe?navigator.msPointerEnabled?a("MSPointer","Down","Move","Up","Cancel"):a("pointer","down","move","up","cancel"):L.touch?(a("touch","start","move","end","cancel"),qe=!0):a("mouse","down","move","up"),j=Rt+" "+kt+" "+Pt,x=gt,Qe&&!qe&&(qe=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),c.likelyTouchDevice=qe,Y[gt]=hu,Y[Rt]=fu,Y[kt]=mu,Pt&&(Y[Pt]=Y[kt]),L.touch&&(x+=" mousedown",j+=" mousemove mouseup",Y.mousedown=Y[gt],Y.mousemove=Y[Rt],Y.mouseup=Y[kt]),qe||(p.allowPanToNext=!1)}}});var Bt,Go=function(a,d,h,f){Bt&&clearTimeout(Bt),vn=!0,Vr=!0;var v;a.initialLayout?(v=a.initialLayout,a.initialLayout=null):v=p.getThumbBoundsFn&&p.getThumbBoundsFn(I);var w=h?p.hideAnimationDuration:p.showAnimationDuration,M=function(){Un("initialZoom"),h?(c.template.removeAttribute("style"),c.bg.removeAttribute("style")):(at(1),d&&(d.style.display="block"),l.addClass(i,"pswp--animated-in"),U("initialZoom"+(h?"OutEnd":"InEnd"))),f&&f(),vn=!1};if(!w||!v||v.x===void 0){U("initialZoom"+(h?"Out":"In")),F=a.initialZoomLevel,Ce(S,a.initialPosition),_e(),i.style.opacity=h?0:1,at(1),w?setTimeout(function(){M()},w):M();return}var O=function(){var k=N,q=!c.currItem.src||c.currItem.loadError||p.showHideOpacity;a.miniImg&&(a.miniImg.style.webkitBackfaceVisibility="hidden"),h||(F=v.w/a.w,S.x=v.x,S.y=v.y-H,c[q?"template":"bg"].style.opacity=.001,_e()),Pr("initialZoom"),h&&!k&&l.removeClass(i,"pswp--animated-in"),q&&(h?l[(k?"remove":"add")+"Class"](i,"pswp--animate_opacity"):setTimeout(function(){l.addClass(i,"pswp--animate_opacity")},30)),Bt=setTimeout(function(){if(U("initialZoom"+(h?"Out":"In")),!h)F=a.initialZoomLevel,Ce(S,a.initialPosition),_e(),at(1),q?i.style.opacity=1:at(1),Bt=setTimeout(M,w+20);else{var ae=v.w/a.w,tt={x:S.x,y:S.y},ut=F,wn=Di,Qn=function(nt){nt===1?(F=ae,S.x=v.x,S.y=v.y-ge):(F=(ae-ut)*nt+ut,S.x=(v.x-tt.x)*nt+tt.x,S.y=(v.y-ge-tt.y)*nt+tt.y),_e(),q?i.style.opacity=1-nt:at(wn-nt*wn)};k?Vn("initialZoom",0,1,w,l.easing.cubic.out,Qn,M):(Qn(1),Bt=setTimeout(M,w+20))}},h?25:90)};O()},Ct,Fe={},Ut=[],Vr,vn,bu={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Ct.length}},Et,ke,Yo=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},Cu=function(a,d,h){var f=a.bounds;f.center.x=Math.round((Fe.x-d)/2),f.center.y=Math.round((Fe.y-h)/2)+a.vGap.top,f.max.x=d>Fe.x?Math.round(Fe.x-d):f.center.x,f.max.y=h>Fe.y?Math.round(Fe.y-h)+a.vGap.top:f.center.y,f.min.x=d>Fe.x?0:f.center.x,f.min.y=h>Fe.y?a.vGap.top:f.center.y},jn=function(a,d,h){if(a.src&&!a.loadError){var f=!h;if(f&&(a.vGap||(a.vGap={top:0,bottom:0}),U("parseVerticalMargin",a)),Fe.x=d.x,Fe.y=d.y-a.vGap.top-a.vGap.bottom,f){var v=Fe.x/a.w,w=Fe.y/a.h;a.fitRatio=v<w?v:w;var M=p.scaleMode;M==="orig"?h=1:M==="fit"&&(h=a.fitRatio),h>1&&(h=1),a.initialZoomLevel=h,a.bounds||(a.bounds=Yo())}return h?(Cu(a,a.w*h,a.h*h),f&&h===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds):void 0}else return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=Yo(),a.initialPosition=a.bounds.center,a.bounds},Wi=function(a,d,h,f,v,w){d.loadError||f&&(d.imageAppended=!0,qt(d,f,d===c.currItem&&Ve),h.appendChild(f),w&&setTimeout(function(){d&&d.loaded&&d.placeholder&&(d.placeholder.style.display="none",d.placeholder=null)},500))},zo=function(a){a.loading=!0,a.loaded=!1;var d=a.img=l.createEl("pswp__img","img"),h=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,d.onload=d.onerror=null,d=null};return d.onload=h,d.onerror=function(){a.loadError=!0,h()},d.src=a.src,d},jo=function(a,d){if(a.src&&a.loadError&&a.container)return d&&(a.container.innerHTML=""),a.container.innerHTML=p.errorMsg.replace("%url%",a.src),!0},qt=function(a,d,h){if(!!a.src){d||(d=a.container.lastChild);var f=h?a.w:Math.round(a.w*a.fitRatio),v=h?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=f+"px",a.placeholder.style.height=v+"px"),d.style.width=f+"px",d.style.height=v+"px"}},Ko=function(){if(Ut.length){for(var a,d=0;d<Ut.length;d++)a=Ut[d],a.holder.index===a.index&&Wi(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);Ut=[]}};Ln("Controller",{publicMethods:{lazyLoadItem:function(a){a=Mi(a);var d=Et(a);!d||(d.loaded||d.loading)&&!je||(U("gettingData",a,d),!!d.src&&zo(d))},initController:function(){l.extend(p,bu,!0),c.items=Ct=s,Et=c.getItemAt,ke=p.getNumItemsFn,ke()<3&&(p.loop=!1),ne("beforeChange",function(a){var d=p.preload,h=a===null?!0:a>=0,f=Math.min(d[0],ke()),v=Math.min(d[1],ke()),w;for(w=1;w<=(h?v:f);w++)c.lazyLoadItem(I+w);for(w=1;w<=(h?f:v);w++)c.lazyLoadItem(I-w)}),ne("initialLayout",function(){c.currItem.initialLayout=p.getThumbBoundsFn&&p.getThumbBoundsFn(I)}),ne("mainScrollAnimComplete",Ko),ne("initialZoomInEnd",Ko),ne("destroy",function(){for(var a,d=0;d<Ct.length;d++)a=Ct[d],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);Ut=null})},getItemAt:function(a){return a>=0&&Ct[a]!==void 0?Ct[a]:!1},allowProgressiveImg:function(){return p.forceProgressiveLoading||!qe||p.mouseUsed||screen.width>1200},setContent:function(a,d){p.loop&&(d=Mi(d));var h=c.getItemAt(a.index);h&&(h.container=null);var f=c.getItemAt(d),v;if(!f){a.el.innerHTML="";return}U("gettingData",d,f),a.index=d,a.item=f;var w=f.container=l.createEl("pswp__zoom-wrap");if(!f.src&&f.html&&(f.html.tagName?w.appendChild(f.html):w.innerHTML=f.html),jo(f),jn(f,J),f.src&&!f.loadError&&!f.loaded){if(f.loadComplete=function(k){if(!!b){if(a&&a.index===d){if(jo(k,!0)){k.loadComplete=k.img=null,jn(k,J),Bn(k),a.index===I&&c.updateCurrZoomItem();return}k.imageAppended?!vn&&k.placeholder&&(k.placeholder.style.display="none",k.placeholder=null):L.transform&&(Se||vn)?Ut.push({item:k,baseDiv:w,img:k.img,index:d,holder:a,clearPlaceholder:!0}):Wi(d,k,w,k.img,Se||vn,!0)}k.loadComplete=null,k.img=null,U("imageLoadComplete",d,k)}},l.features.transform){var M="pswp__img pswp__img--placeholder";M+=f.msrc?"":" pswp__img--placeholder--blank";var O=l.createEl(M,f.msrc?"img":"");f.msrc&&(O.src=f.msrc),qt(f,O),w.appendChild(O),f.placeholder=O}f.loading||zo(f),c.allowProgressiveImg()&&(!Vr&&L.transform?Ut.push({item:f,baseDiv:w,img:f.img,index:d,holder:a}):Wi(d,f,w,f.img,!0,!0))}else f.src&&!f.loadError&&(v=l.createEl("pswp__img","img"),v.style.opacity=1,v.src=f.src,qt(f,v),Wi(d,f,w,v));!Vr&&d===I?(Je=w.style,Go(f,v||f.img)):Bn(f),a.el.innerHTML="",a.el.appendChild(w)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var Tt,Hr={},$r=function(a,d,h){var f=document.createEvent("CustomEvent"),v={origEvent:a,target:a.target,releasePoint:d,pointerType:h||"touch"};f.initCustomEvent("pswpTap",!0,!0,v),a.target.dispatchEvent(f)};Ln("Tap",{publicMethods:{initTap:function(){ne("firstTouchStart",c.onTapStart),ne("touchRelease",c.onTapRelease),ne("destroy",function(){Hr={},Tt=null})},onTapStart:function(a){a.length>1&&(clearTimeout(Tt),Tt=null)},onTapRelease:function(a,d){if(!!d&&!gn&&!Lr&&!fn){var h=d;if(Tt&&(clearTimeout(Tt),Tt=null,lu(h,Hr))){U("doubleTap",h);return}if(d.type==="mouse"){$r(a,d,"mouse");return}var f=a.target.tagName.toUpperCase();if(f==="BUTTON"||l.hasClass(a.target,"pswp__single-tap")){$r(a,d);return}Ce(Hr,h),Tt=setTimeout(function(){$r(a,d),Tt=null},300)}}}});var Pe;Ln("DesktopZoom",{publicMethods:{initDesktopZoom:function(){oe||(qe?ne("mouseUsed",function(){c.setupDesktopZoom()}):c.setupDesktopZoom(!0))},setupDesktopZoom:function(a){Pe={};var d="wheel mousewheel DOMMouseScroll";ne("bindEvents",function(){l.bind(i,d,c.handleMouseWheel)}),ne("unbindEvents",function(){Pe&&l.unbind(i,d,c.handleMouseWheel)}),c.mouseZoomedIn=!1;var h,f=function(){c.mouseZoomedIn&&(l.removeClass(i,"pswp--zoomed-in"),c.mouseZoomedIn=!1),F<1?l.addClass(i,"pswp--zoom-allowed"):l.removeClass(i,"pswp--zoom-allowed"),v()},v=function(){h&&(l.removeClass(i,"pswp--dragging"),h=!1)};ne("resize",f),ne("afterChange",f),ne("pointerDown",function(){c.mouseZoomedIn&&(h=!0,l.addClass(i,"pswp--dragging"))}),ne("pointerUp",v),a||f()},handleMouseWheel:function(a){if(F<=c.currItem.fitRatio)return p.modal&&(!p.closeOnScroll||fn||Xe?a.preventDefault():Ue&&Math.abs(a.deltaY)>2&&(N=!0,c.close())),!0;if(a.stopPropagation(),Pe.x=0,"deltaX"in a)a.deltaMode===1?(Pe.x=a.deltaX*18,Pe.y=a.deltaY*18):(Pe.x=a.deltaX,Pe.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(Pe.x=-.16*a.wheelDeltaX),a.wheelDeltaY?Pe.y=-.16*a.wheelDeltaY:Pe.y=-.16*a.wheelDelta;else if("detail"in a)Pe.y=a.detail;else return;kr(F,!0);var d=S.x-Pe.x,h=S.y-Pe.y;(p.modal||d<=P.min.x&&d>=P.max.x&&h<=P.min.y&&h>=P.max.y)&&a.preventDefault(),c.panTo(d,h)},toggleDesktopZoom:function(a){a=a||{x:J.x/2+mt.x,y:J.y/2+mt.y};var d=p.getDoubleTapZoom(!0,c.currItem),h=F===d;c.mouseZoomedIn=!h,c.zoomTo(h?c.currItem.initialZoomLevel:d,a,333),l[(h?"remove":"add")+"Class"](i,"pswp--zoomed-in")}}});var Eu={history:!0,galleryUID:1},Gr,Qo,Kn,Bi,Yr,Zo,ve,yn,zr,jr,et,Kr,Qr=function(){return et.hash.substring(1)},Xo=function(){Gr&&clearTimeout(Gr),Kn&&clearTimeout(Kn)},Jo=function(){var a=Qr(),d={};if(a.length<5)return d;var h,f=a.split("&");for(h=0;h<f.length;h++)if(!!f[h]){var v=f[h].split("=");v.length<2||(d[v[0]]=v[1])}if(p.galleryPIDs){var w=d.pid;for(d.pid=0,h=0;h<Ct.length;h++)if(Ct[h].pid===w){d.pid=h;break}}else d.pid=parseInt(d.pid,10)-1;return d.pid<0&&(d.pid=0),d},Zr=function(){if(Kn&&clearTimeout(Kn),fn||Xe){Kn=setTimeout(Zr,500);return}Bi?clearTimeout(Qo):Bi=!0;var a=I+1,d=Et(I);d.hasOwnProperty("pid")&&(a=d.pid);var h=ve+"&gid="+p.galleryUID+"&pid="+a;yn||et.hash.indexOf(h)===-1&&(jr=!0);var f=et.href.split("#")[0]+"#"+h;Kr?"#"+h!==window.location.hash&&history[yn?"replaceState":"pushState"]("",document.title,f):yn?et.replace(f):et.hash=h,yn=!0,Qo=setTimeout(function(){Bi=!1},60)};Ln("History",{publicMethods:{initHistory:function(){if(l.extend(p,Eu,!0),!!p.history){et=window.location,jr=!1,zr=!1,yn=!1,ve=Qr(),Kr="pushState"in history,ve.indexOf("gid=")>-1&&(ve=ve.split("&gid=")[0],ve=ve.split("?gid=")[0]),ne("afterChange",c.updateURL),ne("unbindEvents",function(){l.unbind(window,"hashchange",c.onHashChange)});var a=function(){Zo=!0,zr||(jr?history.back():ve?et.hash=ve:Kr?history.pushState("",document.title,et.pathname+et.search):et.hash=""),Xo()};ne("unbindEvents",function(){N&&a()}),ne("destroy",function(){Zo||a()}),ne("firstUpdate",function(){I=Jo().pid});var d=ve.indexOf("pid=");d>-1&&(ve=ve.substring(0,d),ve.slice(-1)==="&"&&(ve=ve.slice(0,-1))),setTimeout(function(){b&&l.bind(window,"hashchange",c.onHashChange)},40)}},onHashChange:function(){if(Qr()===ve){zr=!0,c.close();return}Bi||(Yr=!0,c.goTo(Jo().pid),Yr=!1)},updateURL:function(){Xo(),!Yr&&(yn?Gr=setTimeout(Zr,800):Zr())}}}),l.extend(c,ou)};return t})})(va);var fv=va.exports,ya={exports:{}};/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */(function(n,e){(function(t,i){n.exports=i()})(_a,function(){var t=function(i,r){var s=this,o=!1,l=!0,c,u,m,p,g,b,E,N=!0,I,G,R,ee,be,S,j,x,Y={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(y,T){return y.title?(T.children[0].innerHTML=y.title,!0):(T.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return i.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return i.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},J,F=function(y){if(J)return!0;y=y||window.event,x.timeToIdle&&x.mouseUsed&&!G&&gt();for(var T=y.target||y.srcElement,H,oe=T.getAttribute("class")||"",ge,L=0;L<_t.length;L++)H=_t[L],H.onTap&&oe.indexOf("pswp__"+H.name)>-1&&(H.onTap(),ge=!0);if(ge){y.stopPropagation&&y.stopPropagation(),J=!0;var Ne=r.features.isOldAndroid?600:30;setTimeout(function(){J=!1},Ne)}},ot=function(){return!i.likelyTouchDevice||x.mouseUsed||screen.width>x.fitControlsWidth},ze=function(y,T,H){r[(H?"add":"remove")+"Class"](y,"pswp__"+T)},an=function(){var y=x.getNumItemsFn()===1;y!==j&&(ze(u,"ui--one-slide",y),j=y)},ln=function(){ze(E,"share-modal--hidden",N)},je=function(){return N=!N,N?(r.removeClass(E,"pswp__share-modal--fade-in"),setTimeout(function(){N&&ln()},300)):(ln(),setTimeout(function(){N||r.addClass(E,"pswp__share-modal--fade-in")},30)),N||mt(),!1},Ke=function(y){y=y||window.event;var T=y.target||y.srcElement;return i.shout("shareLinkClick",y,T),T.href?T.hasAttribute("download")?!0:(window.open(T.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),N||je(),!1):!1},mt=function(){for(var y="",T,H,oe,ge,L,Ne=0;Ne<x.shareButtons.length;Ne++)T=x.shareButtons[Ne],oe=x.getImageURLForShare(T),ge=x.getPageURLForShare(T),L=x.getTextForShare(T),H=T.url.replace("{{url}}",encodeURIComponent(ge)).replace("{{image_url}}",encodeURIComponent(oe)).replace("{{raw_image_url}}",oe).replace("{{text}}",encodeURIComponent(L)),y+='<a href="'+H+'" target="_blank" class="pswp__share--'+T.id+'"'+(T.download?"download":"")+">"+T.label+"</a>",x.parseShareButtonOut&&(y=x.parseShareButtonOut(T,y));E.children[0].innerHTML=y,E.children[0].onclick=Ke},de=function(y){for(var T=0;T<x.closeElClasses.length;T++)if(r.hasClass(y,"pswp__"+x.closeElClasses[T]))return!0},te,cn,ye=0,gt=function(){clearTimeout(cn),ye=0,G&&s.setIdle(!1)},Rt=function(y){y=y||window.event;var T=y.relatedTarget||y.toElement;(!T||T.nodeName==="HTML")&&(clearTimeout(cn),cn=setTimeout(function(){s.setIdle(!0)},x.timeToIdleOutside))},kt=function(){x.fullscreenEl&&!r.features.isOldAndroid&&(c||(c=s.getFullscreenAPI()),c?(r.bind(document,c.eventK,s.updateFullscreen),s.updateFullscreen(),r.addClass(i.template,"pswp--supports-fs")):r.removeClass(i.template,"pswp--supports-fs"))},Pt=function(){x.preloaderEl&&(Ue(!0),R("beforeChange",function(){clearTimeout(S),S=setTimeout(function(){i.currItem&&i.currItem.loading?(!i.allowProgressiveImg()||i.currItem.img&&!i.currItem.img.naturalWidth)&&Ue(!1):Ue(!0)},x.loadingIndicatorDelay)}),R("imageLoadComplete",function(y,T){i.currItem===T&&Ue(!0)}))},Ue=function(y){be!==y&&(ze(ee,"preloader--active",!y),be=y)},Qe=function(y){var T=y.vGap;if(ot()){var H=x.barsSize;if(x.captionEl&&H.bottom==="auto")if(p||(p=r.createEl("pswp__caption pswp__caption--fake"),p.appendChild(r.createEl("pswp__caption__center")),u.insertBefore(p,m),r.addClass(u,"pswp__ui--fit")),x.addCaptionHTMLFn(y,p,!0)){var oe=p.clientHeight;T.bottom=parseInt(oe,10)||44}else T.bottom=H.top;else T.bottom=H.bottom==="auto"?0:H.bottom;T.top=H.top}else T.top=T.bottom=0},un=function(){x.timeToIdle&&R("mouseUsed",function(){r.bind(document,"mousemove",gt),r.bind(document,"mouseout",Rt),te=setInterval(function(){ye++,ye===2&&s.setIdle(!0)},x.timeToIdle/2)})},qe=function(){R("onVerticalDrag",function(T){l&&T<.95?s.hideControls():!l&&T>=.95&&s.showControls()});var y;R("onPinchClose",function(T){l&&T<.9?(s.hideControls(),y=!0):y&&!l&&T>.9&&s.showControls()}),R("zoomGestureEnded",function(){y=!1,y&&!l&&s.showControls()})},_t=[{name:"caption",option:"captionEl",onInit:function(y){m=y}},{name:"share-modal",option:"shareEl",onInit:function(y){E=y},onTap:function(){je()}},{name:"button--share",option:"shareEl",onInit:function(y){b=y},onTap:function(){je()}},{name:"button--zoom",option:"zoomEl",onTap:i.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(y){g=y}},{name:"button--close",option:"closeEl",onTap:i.close},{name:"button--arrow--left",option:"arrowEl",onTap:i.prev},{name:"button--arrow--right",option:"arrowEl",onTap:i.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(y){ee=y}}],dn=function(){var y,T,H,oe=function(L){if(!!L)for(var Ne=L.length,Ve=0;Ve<Ne;Ve++){y=L[Ve],T=y.className;for(var Ot=0;Ot<_t.length;Ot++)H=_t[Ot],T.indexOf("pswp__"+H.name)>-1&&(x[H.option]?(r.removeClass(y,"pswp__element--disabled"),H.onInit&&H.onInit(y)):r.addClass(y,"pswp__element--disabled"))}};oe(u.children);var ge=r.getChildByClass(u,"pswp__top-bar");ge&&oe(ge.children)};s.init=function(){r.extend(i.options,Y,!0),x=i.options,u=r.getChildByClass(i.scrollWrap,"pswp__ui"),R=i.listen,qe(),R("beforeChange",s.update),R("doubleTap",function(y){var T=i.currItem.initialZoomLevel;i.getZoomLevel()!==T?i.zoomTo(T,y,333):i.zoomTo(x.getDoubleTapZoom(!1,i.currItem),y,333)}),R("preventDragEvent",function(y,T,H){var oe=y.target||y.srcElement;oe&&oe.getAttribute("class")&&y.type.indexOf("mouse")>-1&&(oe.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(oe.tagName))&&(H.prevent=!1)}),R("bindEvents",function(){r.bind(u,"pswpTap click",F),r.bind(i.scrollWrap,"pswpTap",s.onGlobalTap),i.likelyTouchDevice||r.bind(i.scrollWrap,"mouseover",s.onMouseOver)}),R("unbindEvents",function(){N||je(),te&&clearInterval(te),r.unbind(document,"mouseout",Rt),r.unbind(document,"mousemove",gt),r.unbind(u,"pswpTap click",F),r.unbind(i.scrollWrap,"pswpTap",s.onGlobalTap),r.unbind(i.scrollWrap,"mouseover",s.onMouseOver),c&&(r.unbind(document,c.eventK,s.updateFullscreen),c.isFullscreen()&&(x.hideAnimationDuration=0,c.exit()),c=null)}),R("destroy",function(){x.captionEl&&(p&&u.removeChild(p),r.removeClass(m,"pswp__caption--empty")),E&&(E.children[0].onclick=null),r.removeClass(u,"pswp__ui--over-close"),r.addClass(u,"pswp__ui--hidden"),s.setIdle(!1)}),x.showAnimationDuration||r.removeClass(u,"pswp__ui--hidden"),R("initialZoomIn",function(){x.showAnimationDuration&&r.removeClass(u,"pswp__ui--hidden")}),R("initialZoomOut",function(){r.addClass(u,"pswp__ui--hidden")}),R("parseVerticalMargin",Qe),dn(),x.shareEl&&b&&E&&(N=!0),an(),un(),kt(),Pt()},s.setIdle=function(y){G=y,ze(u,"ui--idle",y)},s.update=function(){l&&i.currItem?(s.updateIndexIndicator(),x.captionEl&&(x.addCaptionHTMLFn(i.currItem,m),ze(m,"caption--empty",!i.currItem.title)),o=!0):o=!1,N||je(),an()},s.updateFullscreen=function(y){y&&setTimeout(function(){i.setScrollOffset(0,r.getScrollY())},50),r[(c.isFullscreen()?"add":"remove")+"Class"](i.template,"pswp--fs")},s.updateIndexIndicator=function(){x.counterEl&&(g.innerHTML=i.getCurrentIndex()+1+x.indexIndicatorSep+x.getNumItemsFn())},s.onGlobalTap=function(y){y=y||window.event;var T=y.target||y.srcElement;if(!J){if(y.detail&&y.detail.pointerType==="mouse"){if(de(T)){i.close();return}r.hasClass(T,"pswp__img")&&(i.getZoomLevel()===1&&i.getZoomLevel()<=i.currItem.fitRatio?x.clickToCloseNonZoomable&&i.close():i.toggleDesktopZoom(y.detail.releasePoint))}else if(x.tapToToggleControls&&(l?s.hideControls():s.showControls()),x.tapToClose&&(r.hasClass(T,"pswp__img")||de(T))){i.close();return}}},s.onMouseOver=function(y){y=y||window.event;var T=y.target||y.srcElement;ze(u,"ui--over-close",de(T))},s.hideControls=function(){r.addClass(u,"pswp__ui--hidden"),l=!1},s.showControls=function(){l=!0,o||s.update(),r.removeClass(u,"pswp__ui--hidden")},s.supportsFullscreen=function(){var y=document;return!!(y.exitFullscreen||y.mozCancelFullScreen||y.webkitExitFullscreen||y.msExitFullscreen)},s.getFullscreenAPI=function(){var y=document.documentElement,T,H="fullscreenchange";return y.requestFullscreen?T={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:H}:y.mozRequestFullScreen?T={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+H}:y.webkitRequestFullscreen?T={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+H}:y.msRequestFullscreen&&(T={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),T&&(T.enter=function(){if(I=x.closeOnScroll,x.closeOnScroll=!1,this.enterK==="webkitRequestFullscreen")i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);else return i.template[this.enterK]()},T.exit=function(){return x.closeOnScroll=I,document[this.exitK]()},T.isFullscreen=function(){return document[this.elementK]}),T}};return t})})(ya);var pv=ya.exports;/**
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
 */const wa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(n,e){if(!n)throw Cn(e)},Cn=function(n){return new Error("Firebase Database ("+wa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ba=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ih=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,m=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,b=u&63;c||(b=64,o||(g=64)),i.push(t[m],t[p],t[g],t[b])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ba(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ih(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||u==null||p==null)throw Error();const g=s<<2|l>>4;if(i.push(g),u!==64){const b=l<<4&240|u>>2;if(i.push(b),p!==64){const E=u<<6&192|p;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},rh=function(n){const e=ba(n);return ss.encodeByteArray(e,!0)},Ca=function(n){try{return ss.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sh(n){return Ea(void 0,n)}function Ea(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oh(t)||(n[t]=Ea(n[t],e[t]));return n}function oh(n){return n!=="__proto__"}/**
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
 */class zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ah(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ta(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ah())}function lh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ch(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ia(){return wa.NODE_ADMIN===!0}function uh(){return typeof indexedDB=="object"}function dh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function hh(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const fh="FirebaseError";class ni extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=fh,Object.setPrototypeOf(this,ni.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ph(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ni(r,l,i)}}function ph(n,e){return n.replace(mh,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const mh=/\{\$([^}]+)}/g;/**
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
 */function ii(n){return JSON.parse(n)}function le(n){return JSON.stringify(n)}/**
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
 */const Sa=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=ii(Ca(s[0])||""),t=ii(Ca(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},gh=function(n){const e=Sa(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},_h=function(n){const e=Sa(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function it(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function En(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function xa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ki(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Qi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Ma(s)&&Ma(o)){if(!Qi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Ma(n){return n!==null&&typeof n=="object"}/**
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
 */function vh(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class yh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,m;for(let p=0;p<80;p++){p<40?p<20?(u=l^s&(o^l),m=1518500249):(u=s^o^l,m=1859775393):p<60?(u=s&o|l&(s|o),m=2400959708):(u=s^o^l,m=3395469782);const g=(r<<5|r>>>27)+u+c+m+i[p]&4294967295;c=l,l=o,o=(s<<30|s>>>2)&4294967295,s=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function os(n,e){return`${n} failed: ${e} argument `}/**
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
 */const wh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,C(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const bh=1e3,Ch=2,Eh=4*60*60*1e3,Th=.5;function Aa(n,e=bh,t=Ch){const i=e*Math.pow(t,n),r=Math.round(Th*i*(Math.random()-.5)*2);return Math.min(Eh,i+r)}/**
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
 */function ri(n){return n&&n._delegate?n._delegate:n}class xt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ht="[DEFAULT]";/**
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
 */class Ih{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new zi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xh(e))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ht){return this.instances.has(e)}getOptions(e=Ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ht){return this.component?this.component.multipleInstances?e:Ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(n){return n===Ht?void 0:n}function xh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Mh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ih(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const Ah={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Nh=Q.INFO,Rh={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},kh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Rh[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class as{constructor(e){this.name=e,this._logLevel=Nh,this._logHandler=kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ah[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}/**
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
 */class Ph{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Oh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Oh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ls="@firebase/app",Na="0.7.13";/**
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
 */const cs=new as("@firebase/app"),Dh="@firebase/app-compat",Fh="@firebase/analytics-compat",Lh="@firebase/analytics",Wh="@firebase/app-check-compat",Bh="@firebase/app-check",Uh="@firebase/auth",qh="@firebase/auth-compat",Vh="@firebase/database",Hh="@firebase/database-compat",$h="@firebase/functions",Gh="@firebase/functions-compat",Yh="@firebase/installations",zh="@firebase/installations-compat",jh="@firebase/messaging",Kh="@firebase/messaging-compat",Qh="@firebase/performance",Zh="@firebase/performance-compat",Xh="@firebase/remote-config",Jh="@firebase/remote-config-compat",ef="@firebase/storage",tf="@firebase/storage-compat",nf="@firebase/firestore",rf="@firebase/firestore-compat",sf="firebase",of="9.6.3";/**
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
 */const Ra="[DEFAULT]",af={[ls]:"fire-core",[Dh]:"fire-core-compat",[Lh]:"fire-analytics",[Fh]:"fire-analytics-compat",[Bh]:"fire-app-check",[Wh]:"fire-app-check-compat",[Uh]:"fire-auth",[qh]:"fire-auth-compat",[Vh]:"fire-rtdb",[Hh]:"fire-rtdb-compat",[$h]:"fire-fn",[Gh]:"fire-fn-compat",[Yh]:"fire-iid",[zh]:"fire-iid-compat",[jh]:"fire-fcm",[Kh]:"fire-fcm-compat",[Qh]:"fire-perf",[Zh]:"fire-perf-compat",[Xh]:"fire-rc",[Jh]:"fire-rc-compat",[ef]:"fire-gcs",[tf]:"fire-gcs-compat",[nf]:"fire-fst",[rf]:"fire-fst-compat","fire-js":"fire-js",[sf]:"fire-js-all"};/**
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
 */const Xi=new Map,us=new Map;function lf(n,e){try{n.container.addComponent(e)}catch(t){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $t(n){const e=n.name;if(us.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;us.set(e,n);for(const t of Xi.values())lf(t,n);return!0}function si(n,e){return n.container.getProvider(e)}/**
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
 */const cf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ji=new ji("app","Firebase",cf);/**
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
 */class uf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ji.create("app-deleted",{appName:this._name})}}/**
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
 */const df=of;function mv(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Ra,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Ji.create("bad-app-name",{appName:String(i)});const r=Xi.get(i);if(r){if(Qi(n,r.options)&&Qi(t,r.config))return r;throw Ji.create("duplicate-app",{appName:i})}const s=new Mh(i);for(const l of us.values())s.addComponent(l);const o=new uf(n,t,s);return Xi.set(i,o),o}function ka(n=Ra){const e=Xi.get(n);if(!e)throw Ji.create("no-app",{appName:n});return e}function rt(n,e,t){var i;let r=(i=af[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(l.join(" "));return}$t(new xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function hf(n){$t(new xt("platform-logger",e=>new Ph(e),"PRIVATE")),rt(ls,Na,n),rt(ls,Na,"esm2017"),rt("fire-js","")}hf("");var ff="firebase",pf="9.6.3";/**
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
 */rt(ff,pf,"app");const Pa="@firebase/database",Oa="0.12.5";/**
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
 */let Da="";function mf(n){Da=n}/**
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
 */class gf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ii(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _f{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Fa=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gf(e)}}catch{}return new _f},Gt=Fa("localStorage"),ds=Fa("sessionStorage");/**
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
 */const Tn=new as("@firebase/database"),vf=function(){let n=1;return function(){return n++}}(),La=function(n){const e=wh(n),t=new yh;t.update(e);const i=t.digest();return ss.encodeByteArray(i)},oi=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=oi.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let Yt=null,Wa=!0;const yf=function(n,e){C(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Tn.logLevel=Q.VERBOSE,Yt=Tn.log.bind(Tn),e&&ds.set("logging_enabled",!0)):typeof n=="function"?Yt=n:(Yt=null,ds.remove("logging_enabled"))},fe=function(...n){if(Wa===!0&&(Wa=!1,Yt===null&&ds.get("logging_enabled")===!0&&yf(!0)),Yt){const e=oi.apply(null,n);Yt(e)}},ai=function(n){return function(...e){fe(n,...e)}},hs=function(...n){const e="FIREBASE INTERNAL ERROR: "+oi(...n);Tn.error(e)},zt=function(...n){const e=`FIREBASE FATAL ERROR: ${oi(...n)}`;throw Tn.error(e),new Error(e)},xe=function(...n){const e="FIREBASE WARNING: "+oi(...n);Tn.warn(e)},wf=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},bf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},In="[MIN_NAME]",jt="[MAX_NAME]",Kt=function(n,e){if(n===e)return 0;if(n===In||e===jt)return-1;if(e===In||n===jt)return 1;{const t=qa(n),i=qa(e);return t!==null?i!==null?t-i==0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Cf=function(n,e){return n===e?0:n<e?-1:1},li=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+le(e))},ps=function(n){if(typeof n!="object"||n===null)return le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=le(e[i]),t+=":",t+=ps(n[e[i]]);return t+="}",t},Ba=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function pe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ua=function(n){C(!fs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,l,c;n===0?(s=0,o=0,r=1/n==-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const m=u.join("");let p="";for(c=0;c<64;c+=8){let g=parseInt(m.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},Ef=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function If(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Sf=new RegExp("^-?(0*)\\d{1,10}$"),xf=-2147483648,Mf=2147483647,qa=function(n){if(Sf.test(n)){const e=Number(n);if(e>=xf&&e<=Mf)return e}return null},Sn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xe("Exception was thrown by user callback.",t),e},Math.floor(0))}},Af=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ci=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Nf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Rf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class ms{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ms.OWNER="owner";/**
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
 */const gs="5",Va="v",Ha="s",$a="r",Ga="f",Ya=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,za="ls",kf="p",_s="ac",ja="websocket",Ka="long_polling";/**
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
 */class Pf{constructor(e,t,i,r,s=!1,o="",l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Of(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Qa(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let i;if(e===ja)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ka)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Of(n)&&(t.ns=n.namespace);const r=[];return pe(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class Df{constructor(){this.counters_={}}incrementCounter(e,t=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sh(this.counters_)}}/**
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
 */const vs={},ys={};function ws(n){const e=n.toString();return vs[e]||(vs[e]=new Df),vs[e]}function Ff(n,e){const t=n.toString();return ys[t]||(ys[t]=e()),ys[t]}/**
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
 */class Lf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Sn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Za="start",Wf="close",Bf="pLPCommand",Uf="pRTLPCB",Xa="id",Ja="pw",el="ser",qf="cb",Vf="seg",Hf="ts",$f="d",Gf="dframe",tl=1870,nl=30,Yf=tl-nl,zf=25e3,jf=3e4;class xn{constructor(e,t,i,r,s,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ai(e),this.stats_=ws(t),this.urlFn=c=>(this.appCheckToken&&(c[_s]=this.appCheckToken),Qa(t,Ka,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Lf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jf)),bf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bs((...s)=>{const[o,l,c,u,m]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Za)this.id=l,this.password=c;else if(o===Wf)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Za]="t",i[el]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[qf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Va]=gs,this.transportSessionId&&(i[Ha]=this.transportSessionId),this.lastSessionId&&(i[za]=this.lastSessionId),this.applicationId&&(i[kf]=this.applicationId),this.appCheckToken&&(i[_s]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Ya.test(location.hostname)&&(i[$a]=Ga);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xn.forceAllow_=!0}static forceDisallow(){xn.forceDisallow_=!0}static isAvailable(){return xn.forceAllow_?!0:!xn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!Ef()&&!Tf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=rh(t),r=Ba(i,Yf);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Gf]="t",i[Xa]=e,i[Ja]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bs{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vf(),window[Bf+this.uniqueCallbackIdentifier]=e,window[Uf+this.uniqueCallbackIdentifier]=t,this.myIFrame=bs.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){fe("frame writing exception"),l.stack&&fe(l.stack),fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xa]=this.myID,e[Ja]=this.myPW,e[el]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nl+i.length<=tl;){const o=this.pendingSegs.shift();i=i+"&"+Vf+r+"="+o.seg+"&"+Hf+r+"="+o.ts+"&"+$f+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(zf)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Kf=16384,Qf=45e3;let er=null;typeof MozWebSocket!="undefined"?er=MozWebSocket:typeof WebSocket!="undefined"&&(er=WebSocket);class $e{constructor(e,t,i,r,s,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ai(this.connId),this.stats_=ws(t),this.connURL=$e.connectionURL_(t,o,l,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r){const s={};return s[Va]=gs,typeof location!="undefined"&&location.hostname&&Ya.test(location.hostname)&&(s[$a]=Ga),t&&(s[Ha]=t),i&&(s[za]=i),r&&(s[_s]=r),Qa(e,ja,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gt.set("previous_websocket_failure",!0);try{if(!Ia()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new er(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&er!==null&&!$e.forceDisallow_}static previouslyFailed(){return Gt.isInMemoryStorage||Gt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ii(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ba(t,Kf);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
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
 */class Cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[xn,$e]}initTransports_(e){const t=$e&&$e.isAvailable();let i=t&&!$e.previouslyFailed();if(e.webSocketOnly&&(t||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[$e];else{const r=this.transports_=[];for(const s of Cs.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const Zf=6e4,Xf=5e3,Jf=10*1024,ep=100*1024,Es="t",il="d",tp="s",rl="r",np="e",sl="o",ol="a",al="n",ll="p",ip="h";class rp{constructor(e,t,i,r,s,o,l,c,u,m){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=m,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ai("c:"+this.id+":"),this.transportManager_=new Cs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ep?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Es in e){const t=e[Es];t===ol?this.upgradeIfSecondaryHealthy_():t===rl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===sl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=li("t",e),i=li("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ll,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ol,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:al,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=li("t",e),i=li("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=li(Es,e);if(il in e){const i=e[il];if(t===ip)this.onHandshake_(i);else if(t===al){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tp?this.onConnectionShutdown_(i):t===rl?this.onReset_(i):t===np?hs("Server Error: "+i):t===sl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gs!==i&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ll,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cl{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ul{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class tr extends ul{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ta()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new tr}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const dl=32,hl=768;class z{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function V(){return new z("")}function W(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Mt(n){return n.pieces_.length-n.pieceNum_}function Z(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new z(n.pieces_,e)}function Ts(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function sp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ui(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function fl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new z(e,0)}function ie(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof z)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new z(t,0)}function B(n){return n.pieceNum_>=n.pieces_.length}function Me(n,e){const t=W(n),i=W(e);if(t===null)return e;if(t===i)return Me(Z(n),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function op(n,e){const t=ui(n,0),i=ui(e,0);for(let r=0;r<t.length&&r<i.length;r++){const s=Kt(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function Is(n,e){if(Mt(n)!==Mt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function We(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Mt(n)>Mt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ap{constructor(e,t){this.errorPrefix_=t,this.parts_=ui(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Zi(this.parts_[i]);pl(this)}}function lp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Zi(e),pl(n)}function cp(n){const e=n.parts_.pop();n.byteLength_-=Zi(e),n.parts_.length>0&&(n.byteLength_-=1)}function pl(n){if(n.byteLength_>hl)throw new Error(n.errorPrefix_+"has a key path longer than "+hl+" bytes ("+n.byteLength_+").");if(n.parts_.length>dl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dl+") or object contains a cycle "+Qt(n))}function Qt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ss extends ul{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ss}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const di=1e3,up=60*5*1e3,dp=3*1e3,ml=30*1e3,hp=1.3,fp=3e4,pp="server_kill",gl=3;class dt extends cl{constructor(e,t,i,r,s,o,l,c){super();if(this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=dt.nextPersistentConnectionId_++,this.log_=ai("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=di,this.maxReconnectDelay_=up,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ia())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ss.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&tr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(le(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new zi,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,l,!1,null),t.resolve(l)):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))},dp),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const c=l.d,u=l.s;dt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&it(e,"w")){const i=En(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_h(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ml)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):hs("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fp&&(this.reconnectDelay_=di),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(p){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const m=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(m),this.appCheckTokenProvider_.getToken(m)]);o?fe("getToken() completed but was canceled"):(fe("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,l=new rp(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,b=>{xe(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(pp)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&xe(p),c())}}}interrupt(e){fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xa(this.interruptReasons_)&&(this.reconnectDelay_=di,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>ps(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new z(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){fe("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gl&&(this.reconnectDelay_=ml,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){fe("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Da.replace(/\./g,"-")]=1,Ta()?e["framework.cordova"]=1:ch()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tr.getInstance().currentlyOnline();return xa(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
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
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
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
 */class nr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new D(In,e),r=new D(In,t);return this.compare(i,r)!==0}minPost(){return D.MIN}}/**
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
 */let ir;class _l extends nr{static get __EMPTY_NODE(){return ir}static set __EMPTY_NODE(e){ir=e}compare(e,t){return Kt(e.name,t.name)}isDefinedOn(e){throw Cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(jt,ir)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,ir)}toString(){return".key"}}const Mn=new _l;/**
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
 */class rr{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:ce.RED,this.left=r!=null?r:Ae.EMPTY_NODE,this.right=s!=null?s:Ae.EMPTY_NODE}copy(e,t,i,r,s){return new ce(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class mp{copy(e,t,i,r,s){return this}insert(e,t,i){return new ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,t=Ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new rr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new rr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new rr(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new mp;/**
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
 */function gp(n,e){return Kt(n.name,e.name)}function xs(n,e){return Kt(n,e)}/**
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
 */let Ms;function _p(n){Ms=n}const vl=function(n){return typeof n=="number"?"number:"+Ua(n):"string:"+n},yl=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else C(n===Ms||n.isEmpty(),"priority of unexpected type.");C(n===Ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wl;class ue{constructor(e,t=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yl(this.priorityNode_)}static set __childrenNodeConstructor(e){wl=e}static get __childrenNodeConstructor(){return wl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:W(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=W(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||Mt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+vl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ua(this.value_):e+=this.value_,this.lazyHash_=La(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=ue.VALUE_TYPE_ORDER.indexOf(t),s=ue.VALUE_TYPE_ORDER.indexOf(i);return C(r>=0,"Unknown leaf type: "+t),C(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bl,Cl;function vp(n){bl=n}function yp(n){Cl=n}class wp extends nr{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Kt(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(jt,new ue("[PRIORITY-POST]",Cl))}makePost(e,t){const i=bl(e);return new D(t,new ue("[PRIORITY-POST]",i))}toString(){return".priority"}}const re=new wp;/**
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
 */const bp=Math.log(2);class Cp{constructor(e){const t=s=>parseInt(Math.log(s)/bp,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sr=function(n,e,t,i){n.sort(e);const r=function(c,u){const m=u-c;let p,g;if(m===0)return null;if(m===1)return p=n[c],g=t?t(p):p,new ce(g,p.node,ce.BLACK,null,null);{const b=parseInt(m/2,10)+c,E=r(c,b),N=r(b+1,u);return p=n[b],g=t?t(p):p,new ce(g,p.node,ce.BLACK,E,N)}},s=function(c){let u=null,m=null,p=n.length;const g=function(E,N){const I=p-E,G=p;p-=E;const R=r(I+1,G),ee=n[I],be=t?t(ee):ee;b(new ce(be,ee.node,N,null,R))},b=function(E){u?(u.left=E,u=E):(m=E,u=E)};for(let E=0;E<c.count;++E){const N=c.nextBitIsOne(),I=Math.pow(2,c.count-(E+1));N?g(I,ce.BLACK):(g(I,ce.BLACK),g(I,ce.RED))}return m},o=new Cp(n.length),l=s(o);return new Ae(i||e,l)};/**
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
 */let As;const An={};class ht{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return C(An&&re,"ChildrenNode.ts has not been loaded"),As=As||new ht({".priority":An},{".priority":re}),As}get(e){const t=En(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ae?t:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,t){C(e!==Mn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(D.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let l;r?l=sr(i,e.getCompare()):l=An;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const m=Object.assign({},this.indexes_);return m[c]=l,new ht(m,u)}addToIndexes(e,t){const i=Ki(this.indexes_,(r,s)=>{const o=En(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),r===An)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(D.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),sr(l,o.getCompare())}else return An;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new D(e.name,l))),c.insert(e,e.node)}});return new ht(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ki(this.indexes_,r=>{if(r===An)return r;{const s=t.get(e.name);return s?r.remove(new D(e.name,s)):r}});return new ht(i,this.indexSet_)}}/**
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
 */let hi;class A{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&yl(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hi||(hi=new A(new Ae(xs),null,ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?hi:t}}getChild(e){const t=W(e);return t===null?this:this.getImmediateChild(t).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new D(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?hi:this.priorityNode_;return new A(r,o,s)}}updateChild(e,t){const i=W(e);if(i===null)return t;{C(W(e)!==".priority"||Mt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Z(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(re,(o,l)=>{t[o]=l.val(e),i++,s&&A.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+vl(this.getPriority().val())+":"),this.forEachChild(re,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":La(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new D(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,D.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fi?-1:0}withIndex(e){if(e===Mn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(re),r=t.getIterator(re);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ep extends A{constructor(){super(new Ae(xs),A.EMPTY_NODE,ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const fi=new Ep;Object.defineProperties(D,{MIN:{value:new D(In,A.EMPTY_NODE)},MAX:{value:new D(jt,fi)}});_l.__EMPTY_NODE=A.EMPTY_NODE;ue.__childrenNodeConstructor=A;_p(fi);yp(fi);/**
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
 */const Tp=!0;function me(n,e=null){if(n===null)return A.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ue(t,me(e))}if(!(n instanceof Array)&&Tp){const t=[];let i=!1;if(pe(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=me(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new D(o,c)))}}),t.length===0)return A.EMPTY_NODE;const s=sr(t,gp,o=>o.name,xs);if(i){const o=sr(t,re.getCompare());return new A(s,me(e),new ht({".priority":o},{".priority":re}))}else return new A(s,me(e),ht.Default)}else{let t=A.EMPTY_NODE;return pe(n,(i,r)=>{if(it(n,i)&&i.substring(0,1)!=="."){const s=me(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(me(e))}}vp(me);/**
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
 */class Ip extends nr{constructor(e){super();this.indexPath_=e,C(!B(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Kt(e.name,t.name):s}makePost(e,t){const i=me(e),r=A.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(t,r)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,fi);return new D(jt,e)}toString(){return ui(this.indexPath_,0).join("/")}}/**
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
 */class Sp extends nr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Kt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const i=me(e);return new D(t,i)}toString(){return".value"}}const xp=new Sp;/**
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
 */function El(n){return{type:"value",snapshotNode:n}}function Nn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function pi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function mi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Mp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ns{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(pi(t,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Nn(t,i)):o.trackChildChange(mi(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(re,(r,s)=>{t.hasChild(r)||i.trackChildChange(pi(r,s))}),t.isLeafNode()||t.forEachChild(re,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(mi(r,s,o))}else i.trackChildChange(Nn(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gi{constructor(e){this.indexedFilter_=new Ns(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gi.getStartPost_(e),this.endPost_=gi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,r,s,o){return this.matches(new D(t,i))||(i=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=A.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(A.EMPTY_NODE);const s=this;return t.forEachChild(re,(o,l)=>{s.matches(new D(o,l))||(r=r.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ap{constructor(e){this.rangedFilter_=new gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new D(t,i))||(i=A.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)r=r.updateImmediateChild(l.name,l.node),o++;else break}}else{r=t.withIndex(this.index_),r=r.updatePriority(A.EMPTY_NODE);let s,o,l,c;if(this.reverse_){c=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const p=this.index_.getCompare();l=(g,b)=>p(b,g)}else c=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,m=!1;for(;c.hasNext();){const p=c.getNext();!m&&l(s,p)<=0&&(m=!0),m&&u<this.limit_&&l(p,o)<=0?u++:r=r.updateImmediateChild(p.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(g,b)=>p(b,g)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const c=new D(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),m=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let g=r.getChildAfterChild(this.index_,u,this.reverse_);for(;g!=null&&(g.name===t||l.hasChild(g.name));)g=r.getChildAfterChild(this.index_,g,this.reverse_);const b=g==null?1:o(g,c);if(m&&!i.isEmpty()&&b>=0)return s!=null&&s.trackChildChange(mi(t,i,p)),l.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(pi(t,p));const N=l.updateImmediateChild(t,A.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(Nn(g.name,g.node)),N.updateImmediateChild(g.name,g.node)):N}}else return i.isEmpty()?e:m&&o(u,c)>=0?(s!=null&&(s.trackChildChange(pi(u.name,u.node)),s.trackChildChange(Nn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class Rs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:In}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new Rs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Np(n){return n.loadsAllData()?new Ns(n.getIndex()):n.hasLimit()?new Ap(n):new gi(n)}function Tl(n){const e={};if(n.isDefault())return e;let t;return n.index_===re?t="$priority":n.index_===xp?t="$value":n.index_===Mn?t="$key":(C(n.index_ instanceof Ip,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=le(t),n.startSet_&&(e.startAt=le(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+le(n.indexStartName_))),n.endSet_&&(e.endAt=le(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+le(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Il(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==re&&(e.i=n.index_.toString()),e}/**
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
 */class or extends cl{constructor(e,t,i,r){super();this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=ai("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=or.getListenId_(e,i),l={};this.listens_[o]=l;const c=Tl(e._queryParams);this.restRequest_(s+".json",c,(u,m)=>{let p=m;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(s,p,!1,i),En(this.listens_,o)===l){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,t){const i=or.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Tl(e._queryParams),i=e._path.toString(),r=new zi;return this.restRequest_(i+".json",t,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vh(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ii(l.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Rp{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ar(){return{value:null,children:new Map}}function Sl(n,e,t){if(B(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=W(e);n.children.has(i)||n.children.set(i,ar());const r=n.children.get(i);e=Z(e),Sl(r,e,t)}}function ks(n,e,t){n.value!==null?t(e,n.value):kp(n,(i,r)=>{const s=new z(e.toString()+"/"+i);ks(r,s,t)})}function kp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Pp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&pe(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const xl=10*1e3,Op=30*1e3,Dp=5*60*1e3;class Fp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Pp(e);const i=xl+(Op-xl)*Math.random();ci(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;pe(e,(r,s)=>{s>0&&it(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dp))}}/**
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
 */var Ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ge||(Ge={}));function Ps(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Os(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ds(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class lr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ge.ACK_USER_WRITE,this.source=Ps()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new z(e));return new lr(V(),t,this.revert)}}else return C(W(this.path)===e,"operationForChild called for unrelated child."),new lr(Z(this.path),this.affectedTree,this.revert)}}/**
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
 */class _i{constructor(e,t){this.source=e,this.path=t,this.type=Ge.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new _i(this.source,V()):new _i(this.source,Z(this.path))}}/**
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
 */class Zt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ge.OVERWRITE}operationForChild(e){return B(this.path)?new Zt(this.source,V(),this.snap.getImmediateChild(e)):new Zt(this.source,Z(this.path),this.snap)}}/**
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
 */class Rn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ge.MERGE}operationForChild(e){if(B(this.path)){const t=this.children.subtree(new z(e));return t.isEmpty()?null:t.value?new Zt(this.source,V(),t.value):new Rn(this.source,V(),t)}else return C(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rn(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Xt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const t=W(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Lp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wp(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Mp(o.childName,o.snapshotNode))}),vi(n,r,"child_removed",e,i,t),vi(n,r,"child_added",e,i,t),vi(n,r,"child_moved",s,i,t),vi(n,r,"child_changed",e,i,t),vi(n,r,"value",e,i,t),r}function vi(n,e,t,i,r,s){const o=i.filter(l=>l.type===t);o.sort((l,c)=>Up(n,l,c)),o.forEach(l=>{const c=Bp(n,l,s);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function Bp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Up(n,e,t){if(e.childName==null||t.childName==null)throw Cn("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),r=new D(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function cr(n,e){return{eventCache:n,serverCache:e}}function yi(n,e,t,i){return cr(new Xt(e,t,i),n.serverCache)}function Ml(n,e,t,i){return cr(n.eventCache,new Xt(e,t,i))}function Fs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Jt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ls;const qp=()=>(Ls||(Ls=new Ae(Cf)),Ls);class X{constructor(e,t=qp()){this.value=e,this.children=t}static fromObject(e){let t=new X(null);return pe(e,(i,r)=>{t=t.set(new z(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:V(),value:this.value};if(B(e))return null;{const i=W(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Z(e),t);return s!=null?{path:ie(new z(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const t=W(e),i=this.children.get(t);return i!==null?i.subtree(Z(e)):new X(null)}}set(e,t){if(B(e))return new X(t,this.children);{const i=W(e),s=(this.children.get(i)||new X(null)).set(Z(e),t),o=this.children.insert(i,s);return new X(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const t=W(e),i=this.children.get(t);if(i){const r=i.remove(Z(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const t=W(e),i=this.children.get(t);return i?i.get(Z(e)):null}}setTree(e,t){if(B(e))return t;{const i=W(e),s=(this.children.get(i)||new X(null)).setTree(Z(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new X(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ie(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,V(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(B(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),ie(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,V(),t)}foreachOnPath_(e,t,i){if(B(e))return this;{this.value&&i(t,this.value);const r=W(e),s=this.children.get(r);return s?s.foreachOnPath_(Z(e),ie(t,r),i):new X(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(ie(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ye{constructor(e){this.writeTree_=e}static empty(){return new Ye(new X(null))}}function wi(n,e,t){if(B(e))return new Ye(new X(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Me(r,e);return s=s.updateChild(o,t),new Ye(n.writeTree_.set(r,s))}else{const r=new X(t),s=n.writeTree_.setTree(e,r);return new Ye(s)}}}function Ws(n,e,t){let i=n;return pe(t,(r,s)=>{i=wi(i,ie(e,r),s)}),i}function Al(n,e){if(B(e))return Ye.empty();{const t=n.writeTree_.setTree(e,new X(null));return new Ye(t)}}function Bs(n,e){return en(n,e)!=null}function en(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Me(t.path,e)):null}function Nl(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(re,(i,r)=>{e.push(new D(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new D(i,r.value))}),e}function At(n,e){if(B(e))return n;{const t=en(n,e);return t!=null?new Ye(new X(t)):new Ye(n.writeTree_.subtree(e))}}function Us(n){return n.writeTree_.isEmpty()}function kn(n,e){return Rl(V(),n.writeTree_,e)}function Rl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=Rl(ie(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ie(n,".priority"),i)),t}}/**
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
 */function qs(n,e){return Fl(e,n)}function Vp(n,e,t,i,r){C(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=wi(n.visibleWrites,e,t)),n.lastWriteId=i}function Hp(n,e,t,i){C(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ws(n.visibleWrites,e,t),n.lastWriteId=i}function $p(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Gp(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Yp(l,i.path)?r=!1:We(i.path,l.path)&&(s=!0)),o--}if(r){if(s)return zp(n),!0;if(i.snap)n.visibleWrites=Al(n.visibleWrites,i.path);else{const l=i.children;pe(l,c=>{n.visibleWrites=Al(n.visibleWrites,ie(i.path,c))})}return!0}else return!1}function Yp(n,e){if(n.snap)return We(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&We(ie(n.path,t),e))return!0;return!1}function zp(n){n.visibleWrites=kl(n.allWrites,jp,V()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jp(n){return n.visible}function kl(n,e,t){let i=Ye.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let l;if(s.snap)We(t,o)?(l=Me(t,o),i=wi(i,l,s.snap)):We(o,t)&&(l=Me(o,t),i=wi(i,V(),s.snap.getChild(l)));else if(s.children){if(We(t,o))l=Me(t,o),i=Ws(i,l,s.children);else if(We(o,t))if(l=Me(o,t),B(l))i=Ws(i,V(),s.children);else{const c=En(s.children,W(l));if(c){const u=c.getChild(Z(l));i=wi(i,V(),u)}}}else throw Cn("WriteRecord should have .snap or .children")}}return i}function Pl(n,e,t,i,r){if(!i&&!r){const s=en(n.visibleWrites,e);if(s!=null)return s;{const o=At(n.visibleWrites,e);if(Us(o))return t;if(t==null&&!Bs(o,V()))return null;{const l=t||A.EMPTY_NODE;return kn(o,l)}}}else{const s=At(n.visibleWrites,e);if(!r&&Us(s))return t;if(!r&&t==null&&!Bs(s,V()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(We(u.path,e)||We(e,u.path))},l=kl(n.allWrites,o,e),c=t||A.EMPTY_NODE;return kn(l,c)}}}function Kp(n,e,t){let i=A.EMPTY_NODE;const r=en(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(re,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=At(n.visibleWrites,e);return t.forEachChild(re,(o,l)=>{const c=kn(At(s,new z(o)),l);i=i.updateImmediateChild(o,c)}),Nl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=At(n.visibleWrites,e);return Nl(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Qp(n,e,t,i,r){C(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ie(e,t);if(Bs(n.visibleWrites,s))return null;{const o=At(n.visibleWrites,s);return Us(o)?r.getChild(t):kn(o,r.getChild(t))}}function Zp(n,e,t,i){const r=ie(e,t),s=en(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=At(n.visibleWrites,r);return kn(o,i.getNode().getImmediateChild(t))}else return null}function Xp(n,e){return en(n.visibleWrites,e)}function Jp(n,e,t,i,r,s,o){let l;const c=At(n.visibleWrites,e),u=en(c,V());if(u!=null)l=u;else if(t!=null)l=kn(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const m=[],p=o.getCompare(),g=s?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let b=g.getNext();for(;b&&m.length<r;)p(b,i)!==0&&m.push(b),b=g.getNext();return m}else return[]}function em(){return{visibleWrites:Ye.empty(),allWrites:[],lastWriteId:-1}}function ur(n,e,t,i){return Pl(n.writeTree,n.treePath,e,t,i)}function Vs(n,e){return Kp(n.writeTree,n.treePath,e)}function Ol(n,e,t,i){return Qp(n.writeTree,n.treePath,e,t,i)}function dr(n,e){return Xp(n.writeTree,ie(n.treePath,e))}function tm(n,e,t,i,r,s){return Jp(n.writeTree,n.treePath,e,t,i,r,s)}function Hs(n,e,t){return Zp(n.writeTree,n.treePath,e,t)}function Dl(n,e){return Fl(ie(n.treePath,e),n.writeTree)}function Fl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class nm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,mi(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,pi(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,Nn(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,mi(i,e.snapshotNode,r.oldSnap));else throw Cn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class im{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Ll=new im;class $s{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Xt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jt(this.viewCache_),s=tm(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function rm(n){return{filter:n}}function sm(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function om(n,e,t,i,r){const s=new nm;let o,l;if(t.type===Ge.OVERWRITE){const u=t;u.source.fromUser?o=Gs(n,e,u.path,u.snap,i,r,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=hr(n,e,u.path,u.snap,i,r,l,s))}else if(t.type===Ge.MERGE){const u=t;u.source.fromUser?o=lm(n,e,u.path,u.children,i,r,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Ys(n,e,u.path,u.children,i,r,l,s))}else if(t.type===Ge.ACK_USER_WRITE){const u=t;u.revert?o=dm(n,e,u.path,i,r,s):o=cm(n,e,u.path,u.affectedTree,i,r,s)}else if(t.type===Ge.LISTEN_COMPLETE)o=um(n,e,t.path,i,s);else throw Cn("Unknown operation type: "+t.type);const c=s.getChanges();return am(e,o,c),{viewCache:o,changes:c}}function am(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Fs(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(El(Fs(e)))}}function Wl(n,e,t,i,r,s){const o=e.eventCache;if(dr(i,t)!=null)return e;{let l,c;if(B(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Jt(e),m=u instanceof A?u:A.EMPTY_NODE,p=Vs(i,m);l=n.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const u=ur(i,Jt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(t);if(u===".priority"){C(Mt(t)===1,"Can't have a priority with additional path components");const m=o.getNode();c=e.serverCache.getNode();const p=Ol(i,t,m,c);p!=null?l=n.filter.updatePriority(m,p):l=o.getNode()}else{const m=Z(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=Ol(i,t,o.getNode(),c);g!=null?p=o.getNode().getImmediateChild(u).updateChild(m,g):p=o.getNode().getImmediateChild(u)}else p=Hs(i,u,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),u,p,m,r,s):l=o.getNode()}}return yi(e,l,o.isFullyInitialized()||B(t),n.filter.filtersNodes())}}function hr(n,e,t,i,r,s,o,l){const c=e.serverCache;let u;const m=o?n.filter:n.filter.getIndexedFilter();if(B(t))u=m.updateFullNode(c.getNode(),i,null);else if(m.filtersNodes()&&!c.isFiltered()){const b=c.getNode().updateChild(t,i);u=m.updateFullNode(c.getNode(),b,null)}else{const b=W(t);if(!c.isCompleteForPath(t)&&Mt(t)>1)return e;const E=Z(t),I=c.getNode().getImmediateChild(b).updateChild(E,i);b===".priority"?u=m.updatePriority(c.getNode(),I):u=m.updateChild(c.getNode(),b,I,E,Ll,null)}const p=Ml(e,u,c.isFullyInitialized()||B(t),m.filtersNodes()),g=new $s(r,p,s);return Wl(n,p,t,r,g,l)}function Gs(n,e,t,i,r,s,o){const l=e.eventCache;let c,u;const m=new $s(r,e,s);if(B(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=yi(e,u,!0,n.filter.filtersNodes());else{const p=W(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),c=yi(e,u,l.isFullyInitialized(),l.isFiltered());else{const g=Z(t),b=l.getNode().getImmediateChild(p);let E;if(B(g))E=i;else{const N=m.getCompleteChild(p);N!=null?Ts(g)===".priority"&&N.getChild(fl(g)).isEmpty()?E=N:E=N.updateChild(g,i):E=A.EMPTY_NODE}if(b.equals(E))c=e;else{const N=n.filter.updateChild(l.getNode(),p,E,g,m,o);c=yi(e,N,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Bl(n,e){return n.eventCache.isCompleteForChild(e)}function lm(n,e,t,i,r,s,o){let l=e;return i.foreach((c,u)=>{const m=ie(t,c);Bl(e,W(m))&&(l=Gs(n,l,m,u,r,s,o))}),i.foreach((c,u)=>{const m=ie(t,c);Bl(e,W(m))||(l=Gs(n,l,m,u,r,s,o))}),l}function Ul(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Ys(n,e,t,i,r,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;B(t)?u=i:u=new X(null).setTree(t,i);const m=e.serverCache.getNode();return u.children.inorderTraversal((p,g)=>{if(m.hasChild(p)){const b=e.serverCache.getNode().getImmediateChild(p),E=Ul(n,b,g);c=hr(n,c,new z(p),E,r,s,o,l)}}),u.children.inorderTraversal((p,g)=>{const b=!e.serverCache.isCompleteForChild(p)&&g.value===void 0;if(!m.hasChild(p)&&!b){const E=e.serverCache.getNode().getImmediateChild(p),N=Ul(n,E,g);c=hr(n,c,new z(p),N,r,s,o,l)}}),c}function cm(n,e,t,i,r,s,o){if(dr(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(B(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return hr(n,e,t,c.getNode().getChild(t),r,s,l,o);if(B(t)){let u=new X(null);return c.getNode().forEachChild(Mn,(m,p)=>{u=u.set(new z(m),p)}),Ys(n,e,t,u,r,s,l,o)}else return e}else{let u=new X(null);return i.foreach((m,p)=>{const g=ie(t,m);c.isCompleteForPath(g)&&(u=u.set(m,c.getNode().getChild(g)))}),Ys(n,e,t,u,r,s,l,o)}}function um(n,e,t,i,r){const s=e.serverCache,o=Ml(e,s.getNode(),s.isFullyInitialized()||B(t),s.isFiltered());return Wl(n,o,t,i,Ll,r)}function dm(n,e,t,i,r,s){let o;if(dr(i,t)!=null)return e;{const l=new $s(i,e,r),c=e.eventCache.getNode();let u;if(B(t)||W(t)===".priority"){let m;if(e.serverCache.isFullyInitialized())m=ur(i,Jt(e));else{const p=e.serverCache.getNode();C(p instanceof A,"serverChildren would be complete if leaf node"),m=Vs(i,p)}m=m,u=n.filter.updateFullNode(c,m,s)}else{const m=W(t);let p=Hs(i,m,e.serverCache);p==null&&e.serverCache.isCompleteForChild(m)&&(p=c.getImmediateChild(m)),p!=null?u=n.filter.updateChild(c,m,p,Z(t),l,s):e.eventCache.getNode().hasChild(m)?u=n.filter.updateChild(c,m,A.EMPTY_NODE,Z(t),l,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ur(i,Jt(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||dr(i,V())!=null,yi(e,u,o,n.filter.filtersNodes())}}/**
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
 */class hm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ns(i.getIndex()),s=Np(i);this.processor_=rm(s);const o=t.serverCache,l=t.eventCache,c=r.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),m=new Xt(c,o.isFullyInitialized(),r.filtersNodes()),p=new Xt(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=cr(p,m),this.eventGenerator_=new Lp(this.query_)}get query(){return this.query_}}function fm(n){return n.viewCache_.serverCache.getNode()}function pm(n,e){const t=Jt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!B(e)&&!t.getImmediateChild(W(e)).isEmpty())?t.getChild(e):null}function ql(n){return n.eventRegistrations_.length===0}function mm(n,e){n.eventRegistrations_.push(e)}function Vl(n,e,t){const i=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Hl(n,e,t,i){e.type===Ge.MERGE&&e.source.queryId!==null&&(C(Jt(n.viewCache_),"We should always have a full cache before handling merges"),C(Fs(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=om(n.processor_,r,e,t,i);return sm(n.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,$l(n,s.changes,s.viewCache.eventCache.getNode(),null)}function gm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(re,(s,o)=>{i.push(Nn(s,o))}),t.isFullyInitialized()&&i.push(El(t.getNode())),$l(n,i,t.getNode(),e)}function $l(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return Wp(n.eventGenerator_,e,t,r)}/**
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
 */let fr;class _m{constructor(){this.views=new Map}}function vm(n){C(!fr,"__referenceConstructor has already been defined"),fr=n}function ym(){return C(fr,"Reference.ts has not been loaded"),fr}function wm(n){return n.views.size===0}function zs(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return C(s!=null,"SyncTree gave us an op for an invalid query."),Hl(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Hl(o,e,t,i));return s}}function bm(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let l=ur(t,r?i:null),c=!1;l?c=!0:i instanceof A?(l=Vs(t,i),c=!1):(l=A.EMPTY_NODE,c=!1);const u=cr(new Xt(l,c,!1),new Xt(i,r,!1));return new hm(e,u)}return o}function Cm(n,e,t,i,r,s){const o=bm(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),mm(o,t),gm(o,t)}function Em(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const l=Nt(n);if(r==="default")for(const[c,u]of n.views.entries())o=o.concat(Vl(u,t,i)),ql(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||s.push(u.query));else{const c=n.views.get(r);c&&(o=o.concat(Vl(c,t,i)),ql(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return l&&!Nt(n)&&s.push(new(ym())(e._repo,e._path)),{removed:s,events:o}}function Gl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Pn(n,e){let t=null;for(const i of n.views.values())t=t||pm(i,e);return t}function Yl(n,e){if(e._queryParams.loadsAllData())return pr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function zl(n,e){return Yl(n,e)!=null}function Nt(n){return pr(n)!=null}function pr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let mr;function Tm(n){C(!mr,"__referenceConstructor has already been defined"),mr=n}function Im(){return C(mr,"Reference.ts has not been loaded"),mr}let Sm=1;class jl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=em(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xm(n,e,t,i,r){return Vp(n.pendingWriteTree_,e,t,i,r),r?On(n,new Zt(Ps(),e,t)):[]}function Mm(n,e,t,i){Hp(n.pendingWriteTree_,e,t,i);const r=X.fromObject(t);return On(n,new Rn(Ps(),e,r))}function tn(n,e,t=!1){const i=$p(n.pendingWriteTree_,e);if(Gp(n.pendingWriteTree_,e)){let s=new X(null);return i.snap!=null?s=s.set(V(),!0):pe(i.children,o=>{s=s.set(new z(o),!0)}),On(n,new lr(i.path,s,t))}else return[]}function gr(n,e,t){return On(n,new Zt(Os(),e,t))}function Am(n,e,t){const i=X.fromObject(t);return On(n,new Rn(Os(),e,i))}function Nm(n,e){return On(n,new _i(Os(),e))}function Rm(n,e,t){const i=Ks(n,t);if(i){const r=Qs(i),s=r.path,o=r.queryId,l=Me(s,e),c=new _i(Ds(o),l);return Zs(n,s,c)}else return[]}function js(n,e,t,i){const r=e._path,s=n.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||zl(s,e))){const l=Em(s,e,t,i);wm(s)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;o=l.events;const u=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,m=n.syncPointTree_.findOnPath(r,(p,g)=>Nt(g));if(u&&!m){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const g=Om(p);for(let b=0;b<g.length;++b){const E=g[b],N=E.query,I=Jl(n,E);n.listenProvider_.startListening(bi(N),_r(n,N),I.hashFn,I.onComplete)}}}if(!m&&c.length>0&&!i)if(u){const p=null;n.listenProvider_.stopListening(bi(e),p)}else c.forEach(p=>{const g=n.queryToTagMap.get(vr(p));n.listenProvider_.stopListening(bi(p),g)});Dm(n,c)}return o}function km(n,e,t,i){const r=Ks(n,i);if(r!=null){const s=Qs(r),o=s.path,l=s.queryId,c=Me(o,e),u=new Zt(Ds(l),c,t);return Zs(n,o,u)}else return[]}function Pm(n,e,t,i){const r=Ks(n,i);if(r){const s=Qs(r),o=s.path,l=s.queryId,c=Me(o,e),u=X.fromObject(t),m=new Rn(Ds(l),c,u);return Zs(n,o,m)}else return[]}function Kl(n,e,t){const i=e._path;let r=null,s=!1;n.syncPointTree_.foreachOnPath(i,(p,g)=>{const b=Me(p,i);r=r||Pn(g,b),s=s||Nt(g)});let o=n.syncPointTree_.get(i);o?(s=s||Nt(o),r=r||Pn(o,V())):(o=new _m,n.syncPointTree_=n.syncPointTree_.set(i,o));let l;r!=null?l=!0:(l=!1,r=A.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((g,b)=>{const E=Pn(b,V());E&&(r=r.updateImmediateChild(g,E))}));const c=zl(o,e);if(!c&&!e._queryParams.loadsAllData()){const p=vr(e);C(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const g=Fm();n.queryToTagMap.set(p,g),n.tagToQueryMap.set(g,p)}const u=qs(n.pendingWriteTree_,i);let m=Cm(o,e,t,u,r,l);if(!c&&!s){const p=Yl(o,e);m=m.concat(Lm(n,e,p))}return m}function Ql(n,e,t){const i=!0,r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Me(o,e),u=Pn(l,c);if(u)return u});return Pl(r,e,s,t,i)}function On(n,e){return Zl(e,n.syncPointTree_,null,qs(n.pendingWriteTree_,V()))}function Zl(n,e,t,i){if(B(n.path))return Xl(n,e,t,i);{const r=e.get(V());t==null&&r!=null&&(t=Pn(r,V()));let s=[];const o=W(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,m=Dl(i,o);s=s.concat(Zl(l,c,u,m))}return r&&(s=s.concat(zs(r,n,i,t))),s}}function Xl(n,e,t,i){const r=e.get(V());t==null&&r!=null&&(t=Pn(r,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=Dl(i,o),m=n.operationForChild(o);m&&(s=s.concat(Xl(m,l,c,u)))}),r&&(s=s.concat(zs(r,n,i,t))),s}function Jl(n,e){const t=e.query,i=_r(n,t);return{hashFn:()=>(fm(e)||A.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?Rm(n,t._path,i):Nm(n,t._path);{const s=If(r,t);return js(n,t,null,s)}}}}function _r(n,e){const t=vr(e);return n.queryToTagMap.get(t)}function vr(n){return n._path.toString()+"$"+n._queryIdentifier}function Ks(n,e){return n.tagToQueryMap.get(e)}function Qs(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new z(n.substr(0,e))}}function Zs(n,e,t){const i=n.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const r=qs(n.pendingWriteTree_,e);return zs(i,t,r,null)}function Om(n){return n.fold((e,t,i)=>{if(t&&Nt(t))return[pr(t)];{let r=[];return t&&(r=Gl(t)),pe(i,(s,o)=>{r=r.concat(o)}),r}})}function bi(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Im())(n._repo,n._path):n}function Dm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=vr(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function Fm(){return Sm++}function Lm(n,e,t){const i=e._path,r=_r(n,e),s=Jl(n,t),o=n.listenProvider_.startListening(bi(e),r,s.hashFn,s.onComplete),l=n.syncPointTree_.subtree(i);if(r)C(!Nt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,m,p)=>{if(!B(u)&&m&&Nt(m))return[pr(m).query];{let g=[];return m&&(g=g.concat(Gl(m).map(b=>b.query))),pe(p,(b,E)=>{g=g.concat(E)}),g}});for(let u=0;u<c.length;++u){const m=c[u];n.listenProvider_.stopListening(bi(m),_r(n,m))}}return o}/**
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
 */class Xs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xs(t)}node(){return this.node_}}class Js{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ie(this.path_,e);return new Js(this.syncTree_,t)}node(){return Ql(this.syncTree_,this.path_)}}const Wm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ec=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Bm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Um(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Bm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},Um=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const r=e.node();if(C(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},tc=function(n,e,t,i){return eo(e,new Js(t,n),i)},qm=function(n,e,t){return eo(n,new Xs(e),t)};function eo(n,e,t){const i=n.getPriority().val(),r=ec(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,l=ec(o.getValue(),e,t);return l!==o.getValue()||r!==o.getPriority().val()?new ue(l,me(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new ue(r))),o.forEachChild(re,(l,c)=>{const u=eo(c,e.getImmediateChild(l),t);u!==c&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class to{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function no(n,e){let t=e instanceof z?e:new z(e),i=n,r=W(t);for(;r!==null;){const s=En(i.node.children,r)||{children:{},childCount:0};i=new to(r,i,s),t=Z(t),r=W(t)}return i}function Dn(n){return n.node.value}function nc(n,e){n.node.value=e,io(n)}function ic(n){return n.node.childCount>0}function Vm(n){return Dn(n)===void 0&&!ic(n)}function yr(n,e){pe(n.node.children,(t,i)=>{e(new to(t,n,i))})}function rc(n,e,t,i){t&&!i&&e(n),yr(n,r=>{rc(r,e,!0,i)}),t&&i&&e(n)}function Hm(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ci(n){return new z(n.parent===null?n.name:Ci(n.parent)+"/"+n.name)}function io(n){n.parent!==null&&$m(n.parent,n.name,n)}function $m(n,e,t){const i=Vm(t),r=it(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,io(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,io(n))}/**
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
 */const Gm=/[\[\].#$\/\u0000-\u001F\u007F]/,Ym=/[\[\].#$\u0000-\u001F\u007F]/,ro=10*1024*1024,so=function(n){return typeof n=="string"&&n.length!==0&&!Gm.test(n)},sc=function(n){return typeof n=="string"&&n.length!==0&&!Ym.test(n)},zm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sc(n)},jm=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!fs(n)||n&&typeof n=="object"&&it(n,".sv")},oo=function(n,e,t){const i=t instanceof z?new ap(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Qt(i)+" with contents = "+e.toString());if(fs(e))throw new Error(n+"contains "+e.toString()+" "+Qt(i));if(typeof e=="string"&&e.length>ro/3&&Zi(e)>ro)throw new Error(n+"contains a string greater than "+ro+" utf8 bytes "+Qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(pe(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!so(o)))throw new Error(n+" contains an invalid key ("+o+") "+Qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lp(i,o),oo(n,l,i),cp(i)}),r&&s)throw new Error(n+' contains ".value" child '+Qt(i)+" in addition to actual children.")}},Km=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const s=ui(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!so(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(op);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&We(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Qm=function(n,e,t,i){if(i&&e===void 0)return;const r=os(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];pe(e,(o,l)=>{const c=new z(o);if(oo(r,l,ie(t,c)),Ts(c)===".priority"&&!jm(l))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),Km(r,s)},oc=function(n,e,t,i){if(!(i&&t===void 0)&&!sc(t))throw new Error(os(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Zm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),oc(n,e,t,i)},Xm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!so(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!zm(t))throw new Error(os(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Jm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ao(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Is(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function ac(n,e,t){ao(n,t),lc(n,i=>Is(i,e))}function ft(n,e,t){ao(n,t),lc(n,i=>We(i,e)||We(e,i))}function lc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(eg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Yt&&fe("event: "+t.toString()),Sn(i)}}}/**
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
 */const tg="repo_interrupt",ng=25;class ig{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ar(),this.transactionQueueTree_=new to,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rg(n,e,t){if(n.stats_=ws(n.repoInfo_),n.forceRestClient_||Af())n.server_=new or(n.repoInfo_,(i,r,s,o)=>{cc(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>uc(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new dt(n.repoInfo_,e,(i,r,s,o)=>{cc(n,i,r,s,o)},i=>{uc(n,i)},i=>{og(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ff(n.repoInfo_,()=>new Fp(n.stats_,n.server_)),n.infoData_=new Rp,n.infoSyncTree_=new jl({startListening:(i,r,s,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=gr(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),co(n,"connected",!1),n.serverSyncTree_=new jl({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(l,c)=>{const u=o(l,c);ft(n.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function sg(n){const t=n.infoData_.getNode(new z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function lo(n){return Wm({timestamp:sg(n)})}function cc(n,e,t,i,r){n.dataUpdateCount++;const s=new z(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=Ki(t,u=>me(u));o=Pm(n.serverSyncTree_,s,c,r)}else{const c=me(t);o=km(n.serverSyncTree_,s,c,r)}else if(i){const c=Ki(t,u=>me(u));o=Am(n.serverSyncTree_,s,c)}else{const c=me(t);o=gr(n.serverSyncTree_,s,c)}let l=s;o.length>0&&(l=Ei(n,s)),ft(n.eventQueue_,l,o)}function uc(n,e){co(n,"connected",e),e===!1&&lg(n)}function og(n,e){pe(e,(t,i)=>{co(n,t,i)})}function co(n,e,t){const i=new z("/.info/"+e),r=me(t);n.infoData_.updateSnapshot(i,r);const s=gr(n.infoSyncTree_,i,r);ft(n.eventQueue_,i,s)}function dc(n){return n.nextWriteId_++}function ag(n,e,t,i){uo(n,"update",{path:e.toString(),value:t});let r=!0;const s=lo(n),o={};if(pe(t,(l,c)=>{r=!1,o[l]=tc(ie(e,l),me(c),n.serverSyncTree_,s)}),r)fe("update() called with empty data.  Don't do anything."),fc(n,i,"ok",void 0);else{const l=dc(n),c=Mm(n.serverSyncTree_,e,o,l);ao(n.eventQueue_,c),n.server_.merge(e.toString(),t,(u,m)=>{const p=u==="ok";p||xe("update at "+e+" failed: "+u);const g=tn(n.serverSyncTree_,l,!p),b=g.length>0?Ei(n,e):e;ft(n.eventQueue_,b,g),fc(n,i,u,m)}),pe(t,u=>{const m=vc(n,ie(e,u));Ei(n,m)}),ft(n.eventQueue_,e,[])}}function lg(n){uo(n,"onDisconnectEvents");const e=lo(n),t=ar();ks(n.onDisconnect_,V(),(r,s)=>{const o=tc(r,s,n.serverSyncTree_,e);Sl(t,r,o)});let i=[];ks(t,V(),(r,s)=>{i=i.concat(gr(n.serverSyncTree_,r,s));const o=vc(n,r);Ei(n,o)}),n.onDisconnect_=ar(),ft(n.eventQueue_,V(),i)}function cg(n,e,t){let i;W(e._path)===".info"?i=Kl(n.infoSyncTree_,e,t):i=Kl(n.serverSyncTree_,e,t),ac(n.eventQueue_,e._path,i)}function hc(n,e,t){let i;W(e._path)===".info"?i=js(n.infoSyncTree_,e,t):i=js(n.serverSyncTree_,e,t),ac(n.eventQueue_,e._path,i)}function ug(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tg)}function uo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),fe(t,...e)}function fc(n,e,t,i){e&&Sn(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function pc(n,e,t){return Ql(n.serverSyncTree_,e,t)||A.EMPTY_NODE}function ho(n,e=n.transactionQueueTree_){if(e||wr(n,e),Dn(e)){const t=gc(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&dg(n,Ci(e),t)}else ic(e)&&yr(e,t=>{ho(n,t)})}function dg(n,e,t){const i=t.map(u=>u.currentWriteId),r=pc(n,e,i);let s=r;const o=r.hash();for(let u=0;u<t.length;u++){const m=t[u];C(m.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;const p=Me(e,m.path);s=s.updateChild(p,m.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;n.server_.put(c.toString(),l,u=>{uo(n,"transaction put response",{path:c.toString(),status:u});let m=[];if(u==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,m=m.concat(tn(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();wr(n,no(n.transactionQueueTree_,e)),ho(n,n.transactionQueueTree_),ft(n.eventQueue_,e,m);for(let g=0;g<p.length;g++)Sn(p[g])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{xe("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Ei(n,e)}},o)}function Ei(n,e){const t=mc(n,e),i=Ci(t),r=gc(n,t);return hg(n,r,i),i}function hg(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Me(t,c.path);let m=!1,p;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)m=!0,p=c.abortReason,r=r.concat(tn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=ng)m=!0,p="maxretry",r=r.concat(tn(n.serverSyncTree_,c.currentWriteId,!0));else{const g=pc(n,c.path,o);c.currentInputSnapshot=g;const b=e[l].update(g.val());if(b!==void 0){oo("transaction failed: Data returned ",b,c.path);let E=me(b);typeof b=="object"&&b!=null&&it(b,".priority")||(E=E.updatePriority(g.getPriority()));const I=c.currentWriteId,G=lo(n),R=qm(E,g,G);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=R,c.currentWriteId=dc(n),o.splice(o.indexOf(I),1),r=r.concat(xm(n.serverSyncTree_,c.path,R,c.currentWriteId,c.applyLocally)),r=r.concat(tn(n.serverSyncTree_,I,!0))}else m=!0,p="nodata",r=r.concat(tn(n.serverSyncTree_,c.currentWriteId,!0))}ft(n.eventQueue_,t,r),r=[],m&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}wr(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Sn(i[l]);ho(n,n.transactionQueueTree_)}function mc(n,e){let t,i=n.transactionQueueTree_;for(t=W(e);t!==null&&Dn(i)===void 0;)i=no(i,t),e=Z(e),t=W(e);return i}function gc(n,e){const t=[];return _c(n,e,t),t.sort((i,r)=>i.order-r.order),t}function _c(n,e,t){const i=Dn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);yr(e,r=>{_c(n,r,t)})}function wr(n,e){const t=Dn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,nc(e,t.length>0?t:void 0)}yr(e,i=>{wr(n,i)})}function vc(n,e){const t=Ci(mc(n,e)),i=no(n.transactionQueueTree_,e);return Hm(i,r=>{fo(n,r)}),fo(n,i),rc(i,r=>{fo(n,r)}),t}function fo(n,e){const t=Dn(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(tn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nc(e,void 0):t.length=s+1,ft(n.eventQueue_,Ci(e),r);for(let o=0;o<i.length;o++)Sn(i[o])}}/**
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
 */function fg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function pg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xe(`Invalid query segment '${t}' in query '${n}'`)}return e}const yc=function(n,e){const t=mg(n),i=t.namespace;t.domain==="firebase.com"&&zt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||wf();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Pf(t.host,t.secure,i,e,r,"",i!==t.subdomain),path:new z(t.pathString)}},mg=function(n){let e="",t="",i="",r="",s="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let m=n.indexOf("/");m===-1&&(m=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(m,p)),m<p&&(r=fg(n.substring(m,p)));const g=pg(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const b=e.slice(0,u);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),t=e.substring(E+1),s=i}"ns"in g&&(s=g.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:r,namespace:s}};/**
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
 */class wc{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+le(this.snapshot.exportVal())}}class bc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class po{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return B(this._path)?null:Ts(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=Il(this._queryParams),t=ps(e);return t==="{}"?"default":t}get _queryObject(){return Il(this._queryParams)}isEqual(e){if(e=ri(e),!(e instanceof po))return!1;const t=this._repo===e._repo,i=Is(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+sp(this._path)}}class pt extends po{constructor(e,t){super(e,t,new Rs,!1)}get parent(){const e=fl(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ti{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new z(e),i=br(this.ref,e);return new Ti(this._node.getChild(t),i,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ti(r,br(this.ref,i),re)))}hasChild(e){const t=new z(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gv(n,e){return n=ri(n),n._checkNotDeleted("ref"),e!==void 0?br(n._root,e):n._root}function br(n,e){return n=ri(n),W(n._path)===null?Zm("child","path",e,!1):oc("child","path",e,!1),new pt(n._repo,ie(n._path,e))}function _v(n,e){Qm("update",e,n._path,!1);const t=new zi;return ag(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class mo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new wc("value",this,new Ti(e.snapshotNode,new pt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bc(this,e,t):null}matches(e){return e instanceof mo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class go{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new bc(this,e,t):null}createEvent(e,t){C(e.childName!=null,"Child events should have a childName.");const i=br(new pt(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new wc(e.type,this,new Ti(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof go?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function _g(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const c=t,u=(m,p)=>{hc(n._repo,n,l),c(m,p)};u.userCallback=t.userCallback,u.context=t.context,t=u}const o=new gg(t,s||void 0),l=e==="value"?new mo(o):new go(e,o);return cg(n._repo,n,l),()=>hc(n._repo,n,l)}function vv(n,e,t,i){return _g(n,"value",e,t,i)}vm(pt);Tm(pt);/**
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
 */const vg="FIREBASE_DATABASE_EMULATOR_HOST",_o={};let yg=!1;function wg(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fe("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=yc(s,r),l=o.repoInfo,c,u;typeof process!="undefined"&&(u=process.env[vg]),u?(c=!0,s=`http://${u}?ns=${l.namespace}`,o=yc(s,r),l=o.repoInfo):c=!o.repoInfo.secure;const m=r&&c?new ms(ms.OWNER):new Rf(n.name,n.options,e);Xm("Invalid Firebase Database URL",o),B(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const p=Cg(l,n,m,new Nf(n.name,t));return new Eg(p,n)}function bg(n,e){const t=_o[e];(!t||t[n.key]!==n)&&zt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ug(n),delete t[n.key]}function Cg(n,e,t,i){let r=_o[e.name];r||(r={},_o[e.name]=r);let s=r[n.toURLString()];return s&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ig(n,yg,t,i),r[n.toURLString()]=s,s}class Eg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function yv(n=ka(),e){return si(n,"database").getImmediate({identifier:e})}/**
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
 */function Tg(n){mf(df),$t(new xt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wg(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),rt(Pa,Oa,n),rt(Pa,Oa,"esm2017")}function wv(n){return{".sv":{increment:n}}}dt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};dt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Tg();function Ig(n){return Array.prototype.slice.call(n)}function Cc(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function vo(n,e,t){var i,r=new Promise(function(s,o){i=n[e].apply(n,t),Cc(i).then(s,o)});return r.request=i,r}function Sg(n,e,t){var i=vo(n,e,t);return i.then(function(r){if(!!r)return new Ii(r,i.request)})}function Fn(n,e,t){t.forEach(function(i){Object.defineProperty(n.prototype,i,{get:function(){return this[e][i]},set:function(r){this[e][i]=r}})})}function yo(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return vo(this[e],r,arguments)})})}function Cr(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function Ec(n,e,t,i){i.forEach(function(r){r in t.prototype&&(n.prototype[r]=function(){return Sg(this[e],r,arguments)})})}function nn(n){this._index=n}Fn(nn,"_index",["name","keyPath","multiEntry","unique"]);yo(nn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Ec(nn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Ii(n,e){this._cursor=n,this._request=e}Fn(Ii,"_cursor",["direction","key","primaryKey","value"]);yo(Ii,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(Ii.prototype[n]=function(){var e=this,t=arguments;return Promise.resolve().then(function(){return e._cursor[n].apply(e._cursor,t),Cc(e._request).then(function(i){if(!!i)return new Ii(i,e._request)})})})});function st(n){this._store=n}st.prototype.createIndex=function(){return new nn(this._store.createIndex.apply(this._store,arguments))};st.prototype.index=function(){return new nn(this._store.index.apply(this._store,arguments))};Fn(st,"_store",["name","keyPath","indexNames","autoIncrement"]);yo(st,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Ec(st,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Cr(st,"_store",IDBObjectStore,["deleteIndex"]);function Si(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}Si.prototype.objectStore=function(){return new st(this._tx.objectStore.apply(this._tx,arguments))};Fn(Si,"_tx",["objectStoreNames","mode"]);Cr(Si,"_tx",IDBTransaction,["abort"]);function Er(n,e,t){this._db=n,this.oldVersion=e,this.transaction=new Si(t)}Er.prototype.createObjectStore=function(){return new st(this._db.createObjectStore.apply(this._db,arguments))};Fn(Er,"_db",["name","version","objectStoreNames"]);Cr(Er,"_db",IDBDatabase,["deleteObjectStore","close"]);function Tr(n){this._db=n}Tr.prototype.transaction=function(){return new Si(this._db.transaction.apply(this._db,arguments))};Fn(Tr,"_db",["name","version","objectStoreNames"]);Cr(Tr,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(n){[st,nn].forEach(function(e){n in e.prototype&&(e.prototype[n.replace("open","iterate")]=function(){var t=Ig(arguments),i=t[t.length-1],r=this._store||this._index,s=r[n].apply(r,t.slice(0,-1));s.onsuccess=function(){i(s.result)}})})});[nn,st].forEach(function(n){n.prototype.getAll||(n.prototype.getAll=function(e,t){var i=this,r=[];return new Promise(function(s){i.iterateCursor(e,function(o){if(!o){s(r);return}if(r.push(o.value),t!==void 0&&r.length==t){s(r);return}o.continue()})})})});function xg(n,e,t){var i=vo(indexedDB,"open",[n,e]),r=i.request;return r&&(r.onupgradeneeded=function(s){t&&t(new Er(r.result,s.oldVersion,r.transaction))}),i.then(function(s){return new Tr(s)})}const Tc="@firebase/installations",wo="0.5.5";/**
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
 */const Ic=1e4,Sc=`w:${wo}`,xc="FIS_v2",Mg="https://firebaseinstallations.googleapis.com/v1",Ag=60*60*1e3,Ng="installations",Rg="Installations";/**
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
 */const kg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},rn=new ji(Ng,Rg,kg);function Mc(n){return n instanceof ni&&n.code.includes("request-failed")}/**
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
 */function Ac({projectId:n}){return`${Mg}/projects/${n}/installations`}function Nc(n){return{token:n.token,requestStatus:2,expiresIn:Og(n.expiresIn),creationTime:Date.now()}}async function Rc(n,e){const i=(await e.json()).error;return rn.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function kc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Pg(n,{refreshToken:e}){const t=kc(n);return t.append("Authorization",Dg(e)),t}async function Pc(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Og(n){return Number(n.replace("s","000"))}function Dg(n){return`${xc} ${n}`}/**
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
 */async function Fg(n,{fid:e}){const t=Ac(n),i=kc(n),r={fid:e,authVersion:xc,appId:n.appId,sdkVersion:Sc},s={method:"POST",headers:i,body:JSON.stringify(r)},o=await Pc(()=>fetch(t,s));if(o.ok){const l=await o.json();return{fid:l.fid||e,registrationStatus:2,refreshToken:l.refreshToken,authToken:Nc(l.authToken)}}else throw await Rc("Create Installation",o)}/**
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
 */function Oc(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Lg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Wg=/^[cdef][\w-]{21}$/,bo="";function Bg(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Ug(n);return Wg.test(t)?t:bo}catch{return bo}}function Ug(n){return Lg(n).substr(0,22)}/**
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
 */function Ir(n){return`${n.appName}!${n.appId}`}/**
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
 */const Dc=new Map;function Fc(n,e){const t=Ir(n);Lc(t,e),qg(t,e)}function Lc(n,e){const t=Dc.get(n);if(!!t)for(const i of t)i(e)}function qg(n,e){const t=Vg();t&&t.postMessage({key:n,fid:e}),Hg()}let sn=null;function Vg(){return!sn&&"BroadcastChannel"in self&&(sn=new BroadcastChannel("[Firebase] FID Change"),sn.onmessage=n=>{Lc(n.data.key,n.data.fid)}),sn}function Hg(){Dc.size===0&&sn&&(sn.close(),sn=null)}/**
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
 */const $g="firebase-installations-database",Gg=1,on="firebase-installations-store";let Co=null;function Eo(){return Co||(Co=xg($g,Gg,n=>{switch(n.oldVersion){case 0:n.createObjectStore(on)}})),Co}async function Sr(n,e){const t=Ir(n),r=(await Eo()).transaction(on,"readwrite"),s=r.objectStore(on),o=await s.get(t);return await s.put(e,t),await r.complete,(!o||o.fid!==e.fid)&&Fc(n,e.fid),e}async function Wc(n){const e=Ir(n),i=(await Eo()).transaction(on,"readwrite");await i.objectStore(on).delete(e),await i.complete}async function xr(n,e){const t=Ir(n),r=(await Eo()).transaction(on,"readwrite"),s=r.objectStore(on),o=await s.get(t),l=e(o);return l===void 0?await s.delete(t):await s.put(l,t),await r.complete,l&&(!o||o.fid!==l.fid)&&Fc(n,l.fid),l}/**
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
 */async function To(n){let e;const t=await xr(n,i=>{const r=Yg(i),s=zg(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===bo?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Yg(n){const e=n||{fid:Bg(),registrationStatus:0};return Uc(e)}function zg(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(rn.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=jg(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Kg(n)}:{installationEntry:e}}async function jg(n,e){try{const t=await Fg(n,e);return Sr(n,t)}catch(t){throw Mc(t)&&t.customData.serverCode===409?await Wc(n):await Sr(n,{fid:e.fid,registrationStatus:0}),t}}async function Kg(n){let e=await Bc(n);for(;e.registrationStatus===1;)await Oc(100),e=await Bc(n);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await To(n);return i||t}return e}function Bc(n){return xr(n,e=>{if(!e)throw rn.create("installation-not-found");return Uc(e)})}function Uc(n){return Qg(n)?{fid:n.fid,registrationStatus:0}:n}function Qg(n){return n.registrationStatus===1&&n.registrationTime+Ic<Date.now()}/**
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
 */async function Zg({appConfig:n,platformLoggerProvider:e},t){const i=Xg(n,t),r=Pg(n,t),s=e.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Sc}},l={method:"POST",headers:r,body:JSON.stringify(o)},c=await Pc(()=>fetch(i,l));if(c.ok){const u=await c.json();return Nc(u)}else throw await Rc("Generate Auth Token",c)}function Xg(n,{fid:e}){return`${Ac(n)}/${e}/authTokens:generate`}/**
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
 */async function Io(n,e=!1){let t;const i=await xr(n.appConfig,s=>{if(!Vc(s))throw rn.create("not-registered");const o=s.authToken;if(!e&&t_(o))return s;if(o.requestStatus===1)return t=Jg(n,e),s;{if(!navigator.onLine)throw rn.create("app-offline");const l=i_(s);return t=e_(n,l),l}});return t?await t:i.authToken}async function Jg(n,e){let t=await qc(n.appConfig);for(;t.authToken.requestStatus===1;)await Oc(100),t=await qc(n.appConfig);const i=t.authToken;return i.requestStatus===0?Io(n,e):i}function qc(n){return xr(n,e=>{if(!Vc(e))throw rn.create("not-registered");const t=e.authToken;return r_(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function e_(n,e){try{const t=await Zg(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Sr(n.appConfig,i),t}catch(t){if(Mc(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Wc(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Sr(n.appConfig,i)}throw t}}function Vc(n){return n!==void 0&&n.registrationStatus===2}function t_(n){return n.requestStatus===2&&!n_(n)}function n_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Ag}function i_(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function r_(n){return n.requestStatus===1&&n.requestTime+Ic<Date.now()}/**
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
 */async function s_(n){const e=n,{installationEntry:t,registrationPromise:i}=await To(e.appConfig);return i?i.catch(console.error):Io(e).catch(console.error),t.fid}/**
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
 */async function o_(n,e=!1){const t=n;return await a_(t.appConfig),(await Io(t,e)).token}async function a_(n){const{registrationPromise:e}=await To(n);e&&await e}/**
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
 */function l_(n){if(!n||!n.options)throw So("App Configuration");if(!n.name)throw So("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw So(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function So(n){return rn.create("missing-app-config-values",{valueName:n})}/**
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
 */const Hc="installations",c_="installations-internal",u_=n=>{const e=n.getProvider("app").getImmediate(),t=l_(e),i=si(e,"platform-logger");return{app:e,appConfig:t,platformLoggerProvider:i,_delete:()=>Promise.resolve()}},d_=n=>{const e=n.getProvider("app").getImmediate(),t=si(e,Hc).getImmediate();return{getId:()=>s_(t),getToken:r=>o_(t,r)}};function h_(){$t(new xt(Hc,u_,"PUBLIC")),$t(new xt(c_,d_,"PRIVATE"))}h_();rt(Tc,wo);rt(Tc,wo,"esm2017");/**
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
 */const Mr="analytics",f_="firebase_id",p_="origin",m_=60*1e3,g_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$c="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new as("@firebase/analytics");/**
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
 */function Gc(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function __(n,e){const t=document.createElement("script");t.src=`${$c}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function v_(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function y_(n,e,t,i,r,s){const o=i[r];try{if(o)await e[o];else{const c=(await Gc(t)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(l){Oe.error(l)}n("config",r,s)}async function w_(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const l=await Gc(t);for(const c of o){const u=l.find(p=>p.measurementId===c),m=u&&e[u.appId];if(m)s.push(m);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){Oe.error(s)}}function b_(n,e,t,i){async function r(s,o,l){try{s==="event"?await w_(n,e,t,o,l):s==="config"?await y_(n,e,t,i,o,l):n("set",o)}catch(c){Oe.error(c)}}return r}function C_(n,e,t,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=b_(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function E_(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes($c))return e;return null}/**
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
 */const T_={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Be=new ji("analytics","Analytics",T_);/**
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
 */const I_=30,S_=1e3;class x_{constructor(e={},t=S_){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yc=new x_;function M_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function A_(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:M_(i)},s=g_.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let l="";try{const c=await o.json();((e=c.error)===null||e===void 0?void 0:e.message)&&(l=c.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function N_(n,e=Yc,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw Be.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Be.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new P_;return setTimeout(async()=>{l.abort()},t!==void 0?t:m_),zc({appId:i,apiKey:r,measurementId:s},o,l,e)}async function zc(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=Yc){const{appId:s,measurementId:o}=n;try{await R_(i,e)}catch(l){if(o)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await A_(n);return r.deleteThrottleMetadata(s),l}catch(l){if(!k_(l)){if(r.deleteThrottleMetadata(s),o)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:s,measurementId:o};throw l}const c=Number(l.customData.httpStatus)===503?Aa(t,r.intervalMillis,I_):Aa(t,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return r.setThrottleMetadata(s,u),Oe.debug(`Calling attemptFetch again in ${c} millis`),zc(n,u,i,r)}}function R_(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(Be.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function k_(n){if(!(n instanceof ni)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class P_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
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
 */async function O_(){if(uh())try{await dh()}catch(n){return Oe.warn(Be.create("indexeddb-unavailable",{errorInfo:n}).message),!1}else return Oe.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D_(n,e,t,i,r,s,o){var l;const c=N_(n);c.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Oe.error(b)),e.push(c);const u=O_().then(b=>{if(b)return i.getId()}),[m,p]=await Promise.all([c,u]);E_()||__(s,m.measurementId),r("js",new Date);const g=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return g[p_]="firebase",g.update=!0,p!=null&&(g[f_]=p),r("config",m.measurementId,g),m.measurementId}/**
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
 */class F_{constructor(e){this.app=e}_delete(){return delete xi[this.app.options.appId],Promise.resolve()}}let xi={},jc=[];const Kc={};let xo="dataLayer",L_="gtag",Qc,Zc,Xc=!1;function W_(){const n=[];if(lh()&&n.push("This is a browser extension environment."),hh()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=Be.create("invalid-analytics-context",{errorInfo:e});Oe.warn(t.message)}}function B_(n,e,t){W_();const i=n.options.appId;if(!i)throw Be.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(xi[i]!=null)throw Be.create("already-exists",{id:i});if(!Xc){v_(xo);const{wrappedGtag:s,gtagCore:o}=C_(xi,jc,Kc,xo,L_);Zc=s,Qc=o,Xc=!0}return xi[i]=D_(n,jc,Kc,e,Qc,xo,t),new F_(n)}/**
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
 */async function U_(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});n("event",t,o)}}function bv(n=ka()){n=ri(n);const e=si(n,Mr);return e.isInitialized()?e.getImmediate():q_(n)}function q_(n,e={}){const t=si(n,Mr);if(t.isInitialized()){const r=t.getImmediate();if(Qi(e,t.getOptions()))return r;throw Be.create("already-initialized")}return t.initialize({options:e})}function V_(n,e,t,i){n=ri(n),U_(Zc,xi[n.app.options.appId],e,t,i).catch(r=>Oe.error(r))}const Jc="@firebase/analytics",eu="0.7.5";function H_(){$t(new xt(Mr,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return B_(i,r,t)},"PUBLIC")),$t(new xt("analytics-internal",n,"PRIVATE")),rt(Jc,eu),rt(Jc,eu,"esm2017");function n(e){try{const t=e.getProvider(Mr).getImmediate();return{logEvent:(i,r,s)=>V_(t,i,r,s)}}catch(t){throw Be.create("interop-component-reg-failed",{reason:t})}}}H_();export{oa as A,rv as B,Fu as C,mv as D,bv as E,yv as F,gv as G,vv as H,_v as I,hv as J,wv as K,uv as L,fv as P,cv as S,J_ as a,z_ as b,Q_ as c,xu as d,j_ as e,Y_ as f,dv as g,G_ as h,lv as i,sv as j,ia as k,Z_ as l,pv as m,ea as n,iv as o,nv as p,K_ as q,Ui as r,$_ as s,Mu as t,ov as u,ev as v,av as w,Du as x,tv as y,X_ as z};
