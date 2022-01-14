function vo(){}function yo(n){return n()}function Co(){return Object.create(null)}function yi(n){n.forEach(yo)}function lc(n){return typeof n=="function"}function Zp(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let Ci;function Xp(n,e){return Ci||(Ci=document.createElement("a")),Ci.href=e,n===Ci.href}function cc(n){return Object.keys(n).length===0}function Jp(n,e){n.appendChild(e)}function e_(n,e,t){n.insertBefore(e,t||null)}function uc(n){n.parentNode.removeChild(n)}function t_(n){return document.createElement(n)}function n_(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function hc(n){return document.createTextNode(n)}function i_(){return hc(" ")}function r_(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function s_(n){return function(e){return e.preventDefault(),n.call(this,e)}}function o_(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function dc(n){return Array.from(n.childNodes)}function a_(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function l_(n,e){n.value=e==null?"":e}function c_(n,e,t){n.classList[t?"add":"remove"](e)}let Fn;function Ln(n){Fn=n}function fc(){if(!Fn)throw new Error("Function called outside component initialization");return Fn}function u_(n){fc().$$.on_mount.push(n)}const Wn=[],wo=[],wi=[],Eo=[],pc=Promise.resolve();let Ir=!1;function _c(){Ir||(Ir=!0,pc.then(bo))}function Sr(n){wi.push(n)}const xr=new Set;let Ei=0;function bo(){const n=Fn;do{for(;Ei<Wn.length;){const e=Wn[Ei];Ei++,Ln(e),mc(e.$$)}for(Ln(null),Wn.length=0,Ei=0;wo.length;)wo.pop()();for(let e=0;e<wi.length;e+=1){const t=wi[e];xr.has(t)||(xr.add(t),t())}wi.length=0}while(Wn.length);for(;Eo.length;)Eo.pop()();Ir=!1,xr.clear(),Ln(n)}function mc(n){if(n.fragment!==null){n.update(),yi(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Sr)}}const bi=new Set;let gc;function To(n,e){n&&n.i&&(bi.delete(n),n.i(e))}function h_(n,e,t,i){if(n&&n.o){if(bi.has(n))return;bi.add(n),gc.c.push(()=>{bi.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function d_(n,e){n.d(1),e.delete(n.key)}function f_(n,e,t,i,r,s,a,l,c,h,_,p){let m=n.length,w=s.length,E=m;const R={};for(;E--;)R[n[E].key]=E;const T=[],q=new Map,D=new Map;for(E=w;E--;){const z=p(r,s,E),S=t(z);let G=a.get(S);G?i&&G.p(z,e):(G=h(S,z),G.c()),q.set(S,T[E]=G),S in R&&D.set(S,Math.abs(E-R[S]))}const X=new Set,ge=new Set;function I(z){To(z,1),z.m(l,_),a.set(z.key,z),_=z.first,w--}for(;m&&w;){const z=T[w-1],S=n[m-1],G=z.key,Z=S.key;z===S?(_=z.first,m--,w--):q.has(Z)?!a.has(G)||X.has(G)?I(z):ge.has(Z)?m--:D.get(G)>D.get(Z)?(ge.add(G),I(z)):(X.add(Z),m--):(c(S,a),m--)}for(;m--;){const z=n[m];q.has(z.key)||c(z,a)}for(;w;)I(T[w-1]);return T}function p_(n){n&&n.c()}function vc(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:a,after_update:l}=n.$$;r&&r.m(e,t),i||Sr(()=>{const c=s.map(yo).filter(lc);a?a.push(...c):yi(c),n.$$.on_mount=[]}),l.forEach(Sr)}function yc(n,e){const t=n.$$;t.fragment!==null&&(yi(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Cc(n,e){n.$$.dirty[0]===-1&&(Wn.push(n),_c(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function __(n,e,t,i,r,s,a,l=[-1]){const c=Fn;Ln(n);const h=n.$$={fragment:null,ctx:null,props:s,update:vo,not_equal:r,bound:Co(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Co(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};a&&a(h.root);let _=!1;if(h.ctx=t?t(n,e.props||{},(p,m,...w)=>{const E=w.length?w[0]:m;return h.ctx&&r(h.ctx[p],h.ctx[p]=E)&&(!h.skip_bound&&h.bound[p]&&h.bound[p](E),_&&Cc(n,p)),m}):[],h.update(),_=!0,yi(h.before_update),h.fragment=i?i(h.ctx):!1,e.target){if(e.hydrate){const p=dc(e.target);h.fragment&&h.fragment.l(p),p.forEach(uc)}else h.fragment&&h.fragment.c();e.intro&&To(n.$$.fragment),vc(n,e.target,e.anchor,e.customElement),bo()}Ln(c)}class m_{$destroy(){yc(this,1),this.$destroy=vo}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!cc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ae(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function ce(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function Le(n){ce(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function wc(n,e){ce(2,arguments);var t=Le(n).getTime(),i=Ae(e);return new Date(t+i)}function Nr(n){var e=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return e.setUTCFullYear(n.getFullYear()),n.getTime()-e.getTime()}function Io(n){ce(1,arguments);var e=Le(n);return e.setHours(0,0,0,0),e}var Ec=864e5;function g_(n,e){ce(2,arguments);var t=Io(n),i=Io(e),r=t.getTime()-Nr(t),s=i.getTime()-Nr(i);return Math.round((r-s)/Ec)}function bc(n){return ce(1,arguments),n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Tc(n){if(ce(1,arguments),!bc(n)&&typeof n!="number")return!1;var e=Le(n);return!isNaN(Number(e))}var Ic={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Sc=function(n,e,t){var i,r=Ic[n];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i},xc=Sc;function Rr(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,i=n.formats[t]||n.formats[n.defaultWidth];return i}}var Nc={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Rc={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Dc={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Pc={date:Rr({formats:Nc,defaultWidth:"full"}),time:Rr({formats:Rc,defaultWidth:"full"}),dateTime:Rr({formats:Dc,defaultWidth:"full"})},Ac=Pc,kc={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Mc=function(n,e,t,i){return kc[n]},Oc=Mc;function Un(n){return function(e,t){var i=t||{},r=i.context?String(i.context):"standalone",s;if(r==="formatting"&&n.formattingValues){var a=n.defaultFormattingWidth||n.defaultWidth,l=i.width?String(i.width):a;s=n.formattingValues[l]||n.formattingValues[a]}else{var c=n.defaultWidth,h=i.width?String(i.width):n.defaultWidth;s=n.values[h]||n.values[c]}var _=n.argumentCallback?n.argumentCallback(e):e;return s[_]}}var Fc={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Lc={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Wc={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Uc={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Hc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Bc={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Yc=function(n,e){var t=Number(n),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Vc={ordinalNumber:Yc,era:Un({values:Fc,defaultWidth:"wide"}),quarter:Un({values:Lc,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:Un({values:Wc,defaultWidth:"wide"}),day:Un({values:Uc,defaultWidth:"wide"}),dayPeriod:Un({values:Hc,defaultWidth:"wide",formattingValues:Bc,defaultFormattingWidth:"wide"})},qc=Vc;function Hn(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,r=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],s=e.match(r);if(!s)return null;var a=s[0],l=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(l)?$c(l,function(p){return p.test(a)}):Gc(l,function(p){return p.test(a)}),h;h=n.valueCallback?n.valueCallback(c):c,h=t.valueCallback?t.valueCallback(h):h;var _=e.slice(a.length);return{value:h,rest:_}}}function Gc(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function $c(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}function zc(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(n.matchPattern);if(!i)return null;var r=i[0],s=e.match(n.parsePattern);if(!s)return null;var a=n.valueCallback?n.valueCallback(s[0]):s[0];a=t.valueCallback?t.valueCallback(a):a;var l=e.slice(r.length);return{value:a,rest:l}}}var jc=/^(\d+)(th|st|nd|rd)?/i,Kc=/\d+/i,Qc={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Zc={any:[/^b/i,/^(a|c)/i]},Xc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Jc={any:[/1/i,/2/i,/3/i,/4/i]},eu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},tu={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},nu={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},iu={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ru={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},su={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ou={ordinalNumber:zc({matchPattern:jc,parsePattern:Kc,valueCallback:function(n){return parseInt(n,10)}}),era:Hn({matchPatterns:Qc,defaultMatchWidth:"wide",parsePatterns:Zc,defaultParseWidth:"any"}),quarter:Hn({matchPatterns:Xc,defaultMatchWidth:"wide",parsePatterns:Jc,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:Hn({matchPatterns:eu,defaultMatchWidth:"wide",parsePatterns:tu,defaultParseWidth:"any"}),day:Hn({matchPatterns:nu,defaultMatchWidth:"wide",parsePatterns:iu,defaultParseWidth:"any"}),dayPeriod:Hn({matchPatterns:ru,defaultMatchWidth:"any",parsePatterns:su,defaultParseWidth:"any"})},au=ou,lu={code:"en-US",formatDistance:xc,formatLong:Ac,formatRelative:Oc,localize:qc,match:au,options:{weekStartsOn:0,firstWeekContainsDate:1}},cu=lu;function uu(n,e){ce(2,arguments);var t=Ae(e);return wc(n,-t)}var hu=864e5;function du(n){ce(1,arguments);var e=Le(n),t=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),r=t-i;return Math.floor(r/hu)+1}function Ti(n){ce(1,arguments);var e=1,t=Le(n),i=t.getUTCDay(),r=(i<e?7:0)+i-e;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function So(n){ce(1,arguments);var e=Le(n),t=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(t+1,0,4),i.setUTCHours(0,0,0,0);var r=Ti(i),s=new Date(0);s.setUTCFullYear(t,0,4),s.setUTCHours(0,0,0,0);var a=Ti(s);return e.getTime()>=r.getTime()?t+1:e.getTime()>=a.getTime()?t:t-1}function fu(n){ce(1,arguments);var e=So(n),t=new Date(0);t.setUTCFullYear(e,0,4),t.setUTCHours(0,0,0,0);var i=Ti(t);return i}var pu=6048e5;function _u(n){ce(1,arguments);var e=Le(n),t=Ti(e).getTime()-fu(e).getTime();return Math.round(t/pu)+1}function Ii(n,e){ce(1,arguments);var t=e||{},i=t.locale,r=i&&i.options&&i.options.weekStartsOn,s=r==null?0:Ae(r),a=t.weekStartsOn==null?s:Ae(t.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=Le(n),c=l.getUTCDay(),h=(c<a?7:0)+c-a;return l.setUTCDate(l.getUTCDate()-h),l.setUTCHours(0,0,0,0),l}function xo(n,e){ce(1,arguments);var t=Le(n),i=t.getUTCFullYear(),r=e||{},s=r.locale,a=s&&s.options&&s.options.firstWeekContainsDate,l=a==null?1:Ae(a),c=r.firstWeekContainsDate==null?l:Ae(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,c),h.setUTCHours(0,0,0,0);var _=Ii(h,e),p=new Date(0);p.setUTCFullYear(i,0,c),p.setUTCHours(0,0,0,0);var m=Ii(p,e);return t.getTime()>=_.getTime()?i+1:t.getTime()>=m.getTime()?i:i-1}function mu(n,e){ce(1,arguments);var t=e||{},i=t.locale,r=i&&i.options&&i.options.firstWeekContainsDate,s=r==null?1:Ae(r),a=t.firstWeekContainsDate==null?s:Ae(t.firstWeekContainsDate),l=xo(n,e),c=new Date(0);c.setUTCFullYear(l,0,a),c.setUTCHours(0,0,0,0);var h=Ii(c,e);return h}var gu=6048e5;function vu(n,e){ce(1,arguments);var t=Le(n),i=Ii(t,e).getTime()-mu(t,e).getTime();return Math.round(i/gu)+1}function V(n,e){for(var t=n<0?"-":"",i=Math.abs(n).toString();i.length<e;)i="0"+i;return t+i}var yu={y:function(n,e){var t=n.getUTCFullYear(),i=t>0?t:1-t;return V(e==="yy"?i%100:i,e.length)},M:function(n,e){var t=n.getUTCMonth();return e==="M"?String(t+1):V(t+1,2)},d:function(n,e){return V(n.getUTCDate(),e.length)},a:function(n,e){var t=n.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(n,e){return V(n.getUTCHours()%12||12,e.length)},H:function(n,e){return V(n.getUTCHours(),e.length)},m:function(n,e){return V(n.getUTCMinutes(),e.length)},s:function(n,e){return V(n.getUTCSeconds(),e.length)},S:function(n,e){var t=e.length,i=n.getUTCMilliseconds(),r=Math.floor(i*Math.pow(10,t-3));return V(r,e.length)}},gt=yu,on={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Cu={G:function(n,e,t){var i=n.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){var i=n.getUTCFullYear(),r=i>0?i:1-i;return t.ordinalNumber(r,{unit:"year"})}return gt.y(n,e)},Y:function(n,e,t,i){var r=xo(n,i),s=r>0?r:1-r;if(e==="YY"){var a=s%100;return V(a,2)}return e==="Yo"?t.ordinalNumber(s,{unit:"year"}):V(s,e.length)},R:function(n,e){var t=So(n);return V(t,e.length)},u:function(n,e){var t=n.getUTCFullYear();return V(t,e.length)},Q:function(n,e,t){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return V(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(n,e,t){var i=Math.ceil((n.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return V(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(n,e,t){var i=n.getUTCMonth();switch(e){case"M":case"MM":return gt.M(n,e);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(n,e,t){var i=n.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return V(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(n,e,t,i){var r=vu(n,i);return e==="wo"?t.ordinalNumber(r,{unit:"week"}):V(r,e.length)},I:function(n,e,t){var i=_u(n);return e==="Io"?t.ordinalNumber(i,{unit:"week"}):V(i,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getUTCDate(),{unit:"date"}):gt.d(n,e)},D:function(n,e,t){var i=du(n);return e==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):V(i,e.length)},E:function(n,e,t){var i=n.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(n,e,t,i){var r=n.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return V(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(r,{width:"short",context:"formatting"});case"eeee":default:return t.day(r,{width:"wide",context:"formatting"})}},c:function(n,e,t,i){var r=n.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return V(s,e.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(r,{width:"narrow",context:"standalone"});case"cccccc":return t.day(r,{width:"short",context:"standalone"});case"cccc":default:return t.day(r,{width:"wide",context:"standalone"})}},i:function(n,e,t){var i=n.getUTCDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return V(r,e.length);case"io":return t.ordinalNumber(r,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(n,e,t){var i=n.getUTCHours(),r=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){var i=n.getUTCHours(),r;switch(i===12?r=on.noon:i===0?r=on.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(n,e,t){var i=n.getUTCHours(),r;switch(i>=17?r=on.evening:i>=12?r=on.afternoon:i>=4?r=on.morning:r=on.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){var i=n.getUTCHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return gt.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getUTCHours(),{unit:"hour"}):gt.H(n,e)},K:function(n,e,t){var i=n.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(i,{unit:"hour"}):V(i,e.length)},k:function(n,e,t){var i=n.getUTCHours();return i===0&&(i=24),e==="ko"?t.ordinalNumber(i,{unit:"hour"}):V(i,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getUTCMinutes(),{unit:"minute"}):gt.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getUTCSeconds(),{unit:"second"}):gt.s(n,e)},S:function(n,e){return gt.S(n,e)},X:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return Ro(s);case"XXXX":case"XX":return At(s);case"XXXXX":case"XXX":default:return At(s,":")}},x:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"x":return Ro(s);case"xxxx":case"xx":return At(s);case"xxxxx":case"xxx":default:return At(s,":")}},O:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+No(s,":");case"OOOO":default:return"GMT"+At(s,":")}},z:function(n,e,t,i){var r=i._originalDate||n,s=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+No(s,":");case"zzzz":default:return"GMT"+At(s,":")}},t:function(n,e,t,i){var r=i._originalDate||n,s=Math.floor(r.getTime()/1e3);return V(s,e.length)},T:function(n,e,t,i){var r=i._originalDate||n,s=r.getTime();return V(s,e.length)}};function No(n,e){var t=n>0?"-":"+",i=Math.abs(n),r=Math.floor(i/60),s=i%60;if(s===0)return t+String(r);var a=e||"";return t+String(r)+a+V(s,2)}function Ro(n,e){if(n%60==0){var t=n>0?"-":"+";return t+V(Math.abs(n)/60,2)}return At(n,e)}function At(n,e){var t=e||"",i=n>0?"-":"+",r=Math.abs(n),s=V(Math.floor(r/60),2),a=V(r%60,2);return i+s+t+a}var wu=Cu;function Do(n,e){switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Po(n,e){switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function Eu(n,e){var t=n.match(/(P+)(p+)?/)||[],i=t[1],r=t[2];if(!r)return Do(n,e);var s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Do(i,e)).replace("{{time}}",Po(r,e))}var bu={p:Po,P:Eu},Tu=bu,Iu=["D","DD"],Su=["YY","YYYY"];function xu(n){return Iu.indexOf(n)!==-1}function Nu(n){return Su.indexOf(n)!==-1}function Ao(n,e,t){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"))}var Ru=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Du=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Pu=/^'([^]*?)'?$/,Au=/''/g,ku=/[a-zA-Z]/;function v_(n,e,t){ce(2,arguments);var i=String(e),r=t||{},s=r.locale||cu,a=s.options&&s.options.firstWeekContainsDate,l=a==null?1:Ae(a),c=r.firstWeekContainsDate==null?l:Ae(r.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,_=h==null?0:Ae(h),p=r.weekStartsOn==null?_:Ae(r.weekStartsOn);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var m=Le(n);if(!Tc(m))throw new RangeError("Invalid time value");var w=Nr(m),E=uu(m,w),R={firstWeekContainsDate:c,weekStartsOn:p,locale:s,_originalDate:m},T=i.match(Du).map(function(q){var D=q[0];if(D==="p"||D==="P"){var X=Tu[D];return X(q,s.formatLong,R)}return q}).join("").match(Ru).map(function(q){if(q==="''")return"'";var D=q[0];if(D==="'")return Mu(q);var X=wu[D];if(X)return!r.useAdditionalWeekYearTokens&&Nu(q)&&Ao(q,e,n),!r.useAdditionalDayOfYearTokens&&xu(q)&&Ao(q,e,n),X(E,q,s.localize,R);if(D.match(ku))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return q}).join("");return T}function Mu(n){return n.match(Pu)[1].replace(Au,"'")}var ko=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Mo={exports:{}};/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */(function(n,e){(function(t,i){n.exports=i()})(ko,function(){var t=function(i,r,s,a){var l={features:null,bind:function(o,u,d,f){var g=(f?"remove":"add")+"EventListener";u=u.split(" ");for(var y=0;y<u.length;y++)u[y]&&o[g](u[y],d,!1)},isArray:function(o){return o instanceof Array},createEl:function(o,u){var d=document.createElement(u||"div");return o&&(d.className=o),d},getScrollY:function(){var o=window.pageYOffset;return o!==void 0?o:document.documentElement.scrollTop},unbind:function(o,u,d){l.bind(o,u,d,!0)},removeClass:function(o,u){var d=new RegExp("(\\s|^)"+u+"(\\s|$)");o.className=o.className.replace(d," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(o,u){l.hasClass(o,u)||(o.className+=(o.className?" ":"")+u)},hasClass:function(o,u){return o.className&&new RegExp("(^|\\s)"+u+"(\\s|$)").test(o.className)},getChildByClass:function(o,u){for(var d=o.firstChild;d;){if(l.hasClass(d,u))return d;d=d.nextSibling}},arraySearch:function(o,u,d){for(var f=o.length;f--;)if(o[f][d]===u)return f;return-1},extend:function(o,u,d){for(var f in u)if(u.hasOwnProperty(f)){if(d&&o.hasOwnProperty(f))continue;o[f]=u[f]}},easing:{sine:{out:function(o){return Math.sin(o*(Math.PI/2))},inOut:function(o){return-(Math.cos(Math.PI*o)-1)/2}},cubic:{out:function(o){return--o*o*o+1}}},detectFeatures:function(){if(l.features)return l.features;var o=l.createEl(),u=o.style,d="",f={};if(f.oldIE=document.all&&!document.addEventListener,f.touch="ontouchstart"in window,window.requestAnimationFrame&&(f.raf=window.requestAnimationFrame,f.caf=window.cancelAnimationFrame),f.pointerEvent=!!window.PointerEvent||navigator.msPointerEnabled,!f.pointerEvent){var g=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var y=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);y&&y.length>0&&(y=parseInt(y[1],10),y>=1&&y<8&&(f.isOldIOSPhone=!0))}var x=g.match(/Android\s([0-9\.]*)/),k=x?x[1]:0;k=parseFloat(k),k>=1&&(k<4.4&&(f.isOldAndroid=!0),f.androidVersion=k),f.isMobileOpera=/opera mini|opera mobi/i.test(g)}for(var P=["transform","perspective","animationName"],H=["","webkit","Moz","ms","O"],re,Ke,nt=0;nt<4;nt++){d=H[nt];for(var sn=0;sn<3;sn++)re=P[sn],Ke=d+(d?re.charAt(0).toUpperCase()+re.slice(1):re),!f[re]&&Ke in u&&(f[re]=Ke);d&&!f.raf&&(d=d.toLowerCase(),f.raf=window[d+"RequestAnimationFrame"],f.raf&&(f.caf=window[d+"CancelAnimationFrame"]||window[d+"CancelRequestAnimationFrame"]))}if(!f.raf){var On=0;f.raf=function(Qe){var br=new Date().getTime(),Tr=Math.max(0,16-(br-On)),ac=window.setTimeout(function(){Qe(br+Tr)},Tr);return On=br+Tr,ac},f.caf=function(Qe){clearTimeout(Qe)}}return f.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,l.features=f,f}};l.detectFeatures(),l.features.oldIE&&(l.bind=function(o,u,d,f){u=u.split(" ");for(var g=(f?"detach":"attach")+"Event",y,x=function(){d.handleEvent.call(d)},k=0;k<u.length;k++)if(y=u[k],y)if(typeof d=="object"&&d.handleEvent){if(!f)d["oldIE"+y]=x;else if(!d["oldIE"+y])return!1;o[g]("on"+y,d["oldIE"+y])}else o[g]("on"+y,d)});var c=this,h=25,_=3,p={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(o){return o.tagName==="A"},getDoubleTapZoom:function(o,u){return o||u.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};l.extend(p,a);var m=function(){return{x:0,y:0}},w,E,R,T,q,D,X=m(),ge=m(),I=m(),z,S,G,Z={},O,Xe,Be,Gt,$t,Ye,Ve=0,at={},le=m(),J,zt,me=0,lt,wt,Et,bt,Me,qe,jt=!0,Oe,ct=[],Kt,v,b,Y,ie,fe,F,Se={},Fe=!1,Tt,En=function(o,u){l.extend(c,u.publicMethods),ct.push(o)},ai=function(o){var u=Ne();return o>u-1?o-u:o<0?u+o:o},bn={},ee=function(o,u){return bn[o]||(bn[o]=[]),bn[o].push(u)},U=function(o){var u=bn[o];if(u){var d=Array.prototype.slice.call(arguments);d.shift();for(var f=0;f<u.length;f++)u[f].apply(c,d)}},Ge=function(){return new Date().getTime()},Je=function(o){pi=o,c.bg.style.opacity=o*p.bgOpacity},Gs=function(o,u,d,f,g){(!Fe||g&&g!==c.currItem)&&(f=f/(g?g.fitRatio:c.currItem.fitRatio)),o[Me]=Be+u+"px, "+d+"px"+Gt+" scale("+f+")"},pe=function(o){ze&&(o&&(O>c.currItem.fitRatio?Fe||(Pt(c.currItem,!1,!0),Fe=!0):Fe&&(Pt(c.currItem),Fe=!1)),Gs(ze,I.x,I.y,O))},Tn=function(o){o.container&&Gs(o.container.style,o.initialPosition.x,o.initialPosition.y,o.initialZoomLevel,o)},Qt=function(o,u){u[Me]=Be+o+"px, 0px"+Gt},li=function(o,u){if(!p.loop&&u){var d=T+(le.x*Ve-o)/le.x,f=Math.round(o-tt.x);(d<0&&f>0||d>=Ne()-1&&f<0)&&(o=tt.x+f*p.mainScrollEndFriction)}tt.x=o,Qt(o,q)},er=function(o,u){var d=Pn[o]-at[o];return ge[o]+X[o]+d-d*(u/Xe)},ve=function(o,u){o.x=u.x,o.y=u.y,u.id&&(o.id=u.id)},$s=function(o){o.x=Math.round(o.x),o.y=Math.round(o.y)},tr=null,nr=function(){tr&&(l.unbind(document,"mousemove",nr),l.addClass(i,"pswp--has_mouse"),p.mouseUsed=!0,U("mouseUsed")),tr=setTimeout(function(){tr=null},100)},Wl=function(){l.bind(document,"keydown",c),F.transform&&l.bind(c.scrollWrap,"click",c),p.mouseUsed||l.bind(document,"mousemove",nr),l.bind(window,"resize scroll orientationchange",c),U("bindEvents")},Ul=function(){l.unbind(window,"resize scroll orientationchange",c),l.unbind(window,"scroll",G.scroll),l.unbind(document,"keydown",c),l.unbind(document,"mousemove",nr),F.transform&&l.unbind(c.scrollWrap,"click",c),$e&&l.unbind(window,z,c),clearTimeout(Tt),U("unbindEvents")},ir=function(o,u){var d=kn(c.currItem,Z,o);return u&&(A=d),d},zs=function(o){return o||(o=c.currItem),o.initialZoomLevel},js=function(o){return o||(o=c.currItem),o.w>0?p.maxSpreadZoom:1},Ks=function(o,u,d,f){return f===c.currItem.initialZoomLevel?(d[o]=c.currItem.initialPosition[o],!0):(d[o]=er(o,f),d[o]>u.min[o]?(d[o]=u.min[o],!0):d[o]<u.max[o]?(d[o]=u.max[o],!0):!1)},Hl=function(){if(Me){var o=F.perspective&&!Oe;Be="translate"+(o?"3d(":"("),Gt=F.perspective?", 0px)":")";return}Me="left",l.addClass(i,"pswp--ie"),Qt=function(u,d){d.left=u+"px"},Tn=function(u){var d=u.fitRatio>1?1:u.fitRatio,f=u.container.style,g=d*u.w,y=d*u.h;f.width=g+"px",f.height=y+"px",f.left=u.initialPosition.x+"px",f.top=u.initialPosition.y+"px"},pe=function(){if(ze){var u=ze,d=c.currItem,f=d.fitRatio>1?1:d.fitRatio,g=f*d.w,y=f*d.h;u.width=g+"px",u.height=y+"px",u.left=I.x+"px",u.top=I.y+"px"}}},Bl=function(o){var u="";p.escKey&&o.keyCode===27?u="close":p.arrowKeys&&(o.keyCode===37?u="prev":o.keyCode===39&&(u="next")),u&&!o.ctrlKey&&!o.altKey&&!o.shiftKey&&!o.metaKey&&(o.preventDefault?o.preventDefault():o.returnValue=!1,c[u]())},Yl=function(o){!o||(en||Nt||Ee||Rn)&&(o.preventDefault(),o.stopPropagation())},Qs=function(){c.setScrollOffset(0,l.getScrollY())},xe={},Zt=0,In=function(o){xe[o]&&(xe[o].raf&&v(xe[o].raf),Zt--,delete xe[o])},rr=function(o){xe[o]&&In(o),xe[o]||(Zt++,xe[o]={})},Sn=function(){for(var o in xe)xe.hasOwnProperty(o)&&In(o)},xn=function(o,u,d,f,g,y,x){var k=Ge(),P;rr(o);var H=function(){if(xe[o]){if(P=Ge()-k,P>=f){In(o),y(d),x&&x();return}y((d-u)*g(P/f)+u),xe[o].raf=Kt(H)}};H()},Vl={shout:U,listen:ee,viewportSize:Z,options:p,isMainScrollAnimating:function(){return Ee},getZoomLevel:function(){return O},getCurrentIndex:function(){return T},isDragging:function(){return $e},isZooming:function(){return et},setScrollOffset:function(o,u){at.x=o,fe=at.y=u,U("updateScrollOffset",at)},applyZoomPan:function(o,u,d,f){I.x=u,I.y=d,O=o,pe(f)},init:function(){if(!(w||E)){var o;c.framework=l,c.template=i,c.bg=l.getChildByClass(i,"pswp__bg"),b=i.className,w=!0,F=l.detectFeatures(),Kt=F.raf,v=F.caf,Me=F.transform,ie=F.oldIE,c.scrollWrap=l.getChildByClass(i,"pswp__scroll-wrap"),c.container=l.getChildByClass(c.scrollWrap,"pswp__container"),q=c.container.style,c.itemHolders=J=[{el:c.container.children[0],wrap:0,index:-1},{el:c.container.children[1],wrap:0,index:-1},{el:c.container.children[2],wrap:0,index:-1}],J[0].el.style.display=J[2].el.style.display="none",Hl(),G={resize:c.updateSize,orientationchange:function(){clearTimeout(Tt),Tt=setTimeout(function(){Z.x!==c.scrollWrap.clientWidth&&c.updateSize()},500)},scroll:Qs,keydown:Bl,click:Yl};var u=F.isOldIOSPhone||F.isOldAndroid||F.isMobileOpera;for((!F.animationName||!F.transform||u)&&(p.showAnimationDuration=p.hideAnimationDuration=0),o=0;o<ct.length;o++)c["init"+ct[o]]();if(r){var d=c.ui=new r(c,l);d.init()}U("firstUpdate"),T=T||p.index||0,(isNaN(T)||T<0||T>=Ne())&&(T=0),c.currItem=_t(T),(F.isOldIOSPhone||F.isOldAndroid)&&(jt=!1),i.setAttribute("aria-hidden","false"),p.modal&&(jt?i.style.position="fixed":(i.style.position="absolute",i.style.top=l.getScrollY()+"px")),fe===void 0&&(U("initialLayout"),fe=Y=l.getScrollY());var f="pswp--open ";for(p.mainClass&&(f+=p.mainClass+" "),p.showHideOpacity&&(f+="pswp--animate_opacity "),f+=Oe?"pswp--touch":"pswp--notouch",f+=F.animationName?" pswp--css_animation":"",f+=F.svg?" pswp--svg":"",l.addClass(i,f),c.updateSize(),D=-1,me=null,o=0;o<_;o++)Qt((o+D)*le.x,J[o].el.style);ie||l.bind(c.scrollWrap,S,c),ee("initialZoomInEnd",function(){c.setContent(J[0],T-1),c.setContent(J[2],T+1),J[0].el.style.display=J[2].el.style.display="block",p.focus&&i.focus(),Wl()}),c.setContent(J[1],T),c.updateCurrItem(),U("afterInit"),jt||($t=setInterval(function(){!Zt&&!$e&&!et&&O===c.currItem.initialZoomLevel&&c.updateSize()},1e3)),l.addClass(i,"pswp--visible")}},close:function(){!w||(w=!1,E=!0,U("close"),Ul(),lo(c.currItem,null,!0,c.destroy))},destroy:function(){U("destroy"),Rt&&clearTimeout(Rt),i.setAttribute("aria-hidden","true"),i.className=b,$t&&clearInterval($t),l.unbind(c.scrollWrap,S,c),l.unbind(window,"scroll",c),ur(),Sn(),bn=null},panTo:function(o,u,d){d||(o>A.min.x?o=A.min.x:o<A.max.x&&(o=A.max.x),u>A.min.y?u=A.min.y:u<A.max.y&&(u=A.max.y)),I.x=o,I.y=u,pe()},handleEvent:function(o){o=o||window.event,G[o.type]&&G[o.type](o)},goTo:function(o){o=ai(o);var u=o-T;me=u,T=o,c.currItem=_t(T),Ve-=u,li(le.x*Ve),Sn(),Ee=!1,c.updateCurrItem()},next:function(){c.goTo(T+1)},prev:function(){c.goTo(T-1)},updateCurrZoomItem:function(o){if(o&&U("beforeChange",0),J[1].el.children.length){var u=J[1].el.children[0];l.hasClass(u,"pswp__zoom-wrap")?ze=u.style:ze=null}else ze=null;A=c.currItem.bounds,Xe=O=c.currItem.initialZoomLevel,I.x=A.center.x,I.y=A.center.y,o&&U("afterChange")},invalidateCurrItems:function(){Ye=!0;for(var o=0;o<_;o++)J[o].item&&(J[o].item.needsUpdate=!0)},updateCurrItem:function(o){if(me!==0){var u=Math.abs(me),d;if(!(o&&u<2)){c.currItem=_t(T),Fe=!1,U("beforeChange",me),u>=_&&(D+=me+(me>0?-_:_),u=_);for(var f=0;f<u;f++)me>0?(d=J.shift(),J[_-1]=d,D++,Qt((D+2)*le.x,d.el.style),c.setContent(d,T-u+f+1+1)):(d=J.pop(),J.unshift(d),D--,Qt(D*le.x,d.el.style),c.setContent(d,T+u-f-1-1));if(ze&&Math.abs(me)===1){var g=_t(zt);g.initialZoomLevel!==O&&(kn(g,Z),Pt(g),Tn(g))}me=0,c.updateCurrZoomItem(),zt=T,U("afterChange")}}},updateSize:function(o){if(!jt&&p.modal){var u=l.getScrollY();if(fe!==u&&(i.style.top=u+"px",fe=u),!o&&Se.x===window.innerWidth&&Se.y===window.innerHeight)return;Se.x=window.innerWidth,Se.y=window.innerHeight,i.style.height=Se.y+"px"}if(Z.x=c.scrollWrap.clientWidth,Z.y=c.scrollWrap.clientHeight,Qs(),le.x=Z.x+Math.round(Z.x*p.spacing),le.y=Z.y,li(le.x*Ve),U("beforeResize"),D!==void 0){for(var d,f,g,y=0;y<_;y++)d=J[y],Qt((y+D)*le.x,d.el.style),g=T+y-1,p.loop&&Ne()>2&&(g=ai(g)),f=_t(g),f&&(Ye||f.needsUpdate||!f.bounds)?(c.cleanSlide(f),c.setContent(d,g),y===1&&(c.currItem=f,c.updateCurrZoomItem(!0)),f.needsUpdate=!1):d.index===-1&&g>=0&&c.setContent(d,g),f&&f.container&&(kn(f,Z),Pt(f),Tn(f));Ye=!1}Xe=O=c.currItem.initialZoomLevel,A=c.currItem.bounds,A&&(I.x=A.center.x,I.y=A.center.y,pe(!0)),U("resize")},zoomTo:function(o,u,d,f,g){u&&(Xe=O,Pn.x=Math.abs(u.x)-I.x,Pn.y=Math.abs(u.y)-I.y,ve(ge,I));var y=ir(o,!1),x={};Ks("x",y,x,o),Ks("y",y,x,o);var k=O,P={x:I.x,y:I.y};$s(x);var H=function(re){re===1?(O=o,I.x=x.x,I.y=x.y):(O=(o-k)*re+k,I.x=(x.x-P.x)*re+P.x,I.y=(x.y-P.y)*re+P.y),g&&g(re),pe(re===1)};d?xn("customZoomTo",0,1,d,f||l.easing.sine.inOut,H):H(1)}},Zs=30,sr=10,Xs,ci,ye={},It={},Ce={},we={},Xt={},ut=[],St={},Nn,xt=[],Jt={},or,Rn,Dn,ui=0,hi=m(),ar=0,$e,lr,Nt,en,di,ht,De,et,Js,A,tt=m(),ze,Ee,Pn=m(),tn=m(),dt,cr,fi,pi,_i,ql=function(o,u){return o.x===u.x&&o.y===u.y},Gl=function(o,u){return Math.abs(o.x-u.x)<h&&Math.abs(o.y-u.y)<h},eo=function(o,u){return Jt.x=Math.abs(o.x-u.x),Jt.y=Math.abs(o.y-u.y),Math.sqrt(Jt.x*Jt.x+Jt.y*Jt.y)},ur=function(){di&&(v(di),di=null)},to=function(){$e&&(di=Kt(to),Zl())},$l=function(){return!(p.scaleMode==="fit"&&O===c.currItem.initialZoomLevel)},no=function(o,u){return!o||o===document||o.getAttribute("class")&&o.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:u(o)?o:no(o.parentNode,u)},hr={},io=function(o,u){return hr.prevent=!no(o.target,p.isClickableElement),U("preventDragEvent",o,u,hr),hr.prevent},ro=function(o,u){return u.x=o.pageX,u.y=o.pageY,u.id=o.identifier,u},so=function(o,u,d){d.x=(o.x+u.x)*.5,d.y=(o.y+u.y)*.5},zl=function(o,u,d){if(o-ci>50){var f=xt.length>2?xt.shift():{};f.x=u,f.y=d,xt.push(f),ci=o}},oo=function(){var o=I.y-c.currItem.initialPosition.y;return 1-Math.abs(o/(Z.y/2))},An={},jl={},ft=[],mi,dr=function(o){for(;ft.length>0;)ft.pop();return qe?(mi=0,ut.forEach(function(u){mi===0?ft[0]=u:mi===1&&(ft[1]=u),mi++})):o.type.indexOf("touch")>-1?o.touches&&o.touches.length>0&&(ft[0]=ro(o.touches[0],An),o.touches.length>1&&(ft[1]=ro(o.touches[1],jl))):(An.x=o.pageX,An.y=o.pageY,An.id="",ft[0]=An),ft},ao=function(o,u){var d,f=I[o]+u[o],g,y=u[o]>0,x=tt.x+u.x,k=tt.x-St.x,P,H;if(f>A.min[o]||f<A.max[o]?d=p.panEndFriction:d=1,f=I[o]+u[o]*d,(p.allowPanToNext||O===c.currItem.initialZoomLevel)&&(ze?dt==="h"&&o==="x"&&!Nt&&(y?(f>A.min[o]&&(d=p.panEndFriction,A.min[o]-f,g=A.min[o]-ge[o]),(g<=0||k<0)&&Ne()>1?(H=x,k<0&&x>St.x&&(H=St.x)):A.min.x!==A.max.x&&(P=f)):(f<A.max[o]&&(d=p.panEndFriction,f-A.max[o],g=ge[o]-A.max[o]),(g<=0||k>0)&&Ne()>1?(H=x,k>0&&x<St.x&&(H=St.x)):A.min.x!==A.max.x&&(P=f))):H=x,o==="x"))return H!==void 0&&(li(H,!0),H===St.x?ht=!1:ht=!0),A.min.x!==A.max.x&&(P!==void 0?I.x=P:ht||(I.x+=u.x*d)),H!==void 0;Ee||ht||O>c.currItem.fitRatio&&(I[o]+=u[o]*d)},Kl=function(o){if(!(o.type==="mousedown"&&o.button>0)){if(nn){o.preventDefault();return}if(!(Dn&&o.type==="mousedown")){if(io(o,!0)&&o.preventDefault(),U("pointerDown"),qe){var u=l.arraySearch(ut,o.pointerId,"id");u<0&&(u=ut.length),ut[u]={x:o.pageX,y:o.pageY,id:o.pointerId}}var d=dr(o),f=d.length;De=null,Sn(),(!$e||f===1)&&($e=cr=!0,l.bind(window,z,c),or=_i=fi=Rn=ht=en=lr=Nt=!1,dt=null,U("firstTouchStart",d),ve(ge,I),X.x=X.y=0,ve(we,d[0]),ve(Xt,we),St.x=le.x*Ve,xt=[{x:we.x,y:we.y}],ci=Xs=Ge(),ir(O,!0),ur(),to()),!et&&f>1&&!Ee&&!ht&&(Xe=O,Nt=!1,et=lr=!0,X.y=X.x=0,ve(ge,I),ve(ye,d[0]),ve(It,d[1]),so(ye,It,tn),Pn.x=Math.abs(tn.x)-I.x,Pn.y=Math.abs(tn.y)-I.y,Js=eo(ye,It))}}},Ql=function(o){if(o.preventDefault(),qe){var u=l.arraySearch(ut,o.pointerId,"id");if(u>-1){var d=ut[u];d.x=o.pageX,d.y=o.pageY}}if($e){var f=dr(o);if(!dt&&!en&&!et)if(tt.x!==le.x*Ve)dt="h";else{var g=Math.abs(f[0].x-we.x)-Math.abs(f[0].y-we.y);Math.abs(g)>=sr&&(dt=g>0?"h":"v",De=f)}else De=f}},Zl=function(){if(!!De){var o=De.length;if(o!==0)if(ve(ye,De[0]),Ce.x=ye.x-we.x,Ce.y=ye.y-we.y,et&&o>1){if(we.x=ye.x,we.y=ye.y,!Ce.x&&!Ce.y&&ql(De[1],It))return;ve(It,De[1]),Nt||(Nt=!0,U("zoomGestureStarted"));var u=eo(ye,It),d=nc(u);d>c.currItem.initialZoomLevel+c.currItem.initialZoomLevel/15&&(_i=!0);var f=1,g=zs(),y=js();if(d<g)if(p.pinchToClose&&!_i&&Xe<=c.currItem.initialZoomLevel){var x=g-d,k=1-x/(g/1.2);Je(k),U("onPinchClose",k),fi=!0}else f=(g-d)/g,f>1&&(f=1),d=g-f*(g/3);else d>y&&(f=(d-y)/(g*6),f>1&&(f=1),d=y+f*g);f<0&&(f=0),so(ye,It,hi),X.x+=hi.x-tn.x,X.y+=hi.y-tn.y,ve(tn,hi),I.x=er("x",d),I.y=er("y",d),or=d>O,O=d,pe()}else{if(!dt||(cr&&(cr=!1,Math.abs(Ce.x)>=sr&&(Ce.x-=De[0].x-Xt.x),Math.abs(Ce.y)>=sr&&(Ce.y-=De[0].y-Xt.y)),we.x=ye.x,we.y=ye.y,Ce.x===0&&Ce.y===0))return;if(dt==="v"&&p.closeOnVerticalDrag&&!$l()){X.y+=Ce.y,I.y+=Ce.y;var P=oo();Rn=!0,U("onVerticalDrag",P),Je(P),pe();return}zl(Ge(),ye.x,ye.y),en=!0,A=c.currItem.bounds;var H=ao("x",Ce);H||(ao("y",Ce),$s(I),pe())}}},Xl=function(o){if(F.isOldAndroid){if(Dn&&o.type==="mouseup")return;o.type.indexOf("touch")>-1&&(clearTimeout(Dn),Dn=setTimeout(function(){Dn=0},600))}U("pointerUp"),io(o,!1)&&o.preventDefault();var u;if(qe){var d=l.arraySearch(ut,o.pointerId,"id");if(d>-1)if(u=ut.splice(d,1)[0],navigator.msPointerEnabled){var f={4:"mouse",2:"touch",3:"pen"};u.type=f[o.pointerType],u.type||(u.type=o.pointerType||"mouse")}else u.type=o.pointerType||"mouse"}var g=dr(o),y,x=g.length;if(o.type==="mouseup"&&(x=0),x===2)return De=null,!0;x===1&&ve(Xt,g[0]),x===0&&!dt&&!Ee&&(u||(o.type==="mouseup"?u={x:o.pageX,y:o.pageY,type:"mouse"}:o.changedTouches&&o.changedTouches[0]&&(u={x:o.changedTouches[0].pageX,y:o.changedTouches[0].pageY,type:"touch"})),U("touchRelease",o,u));var k=-1;if(x===0&&($e=!1,l.unbind(window,z,c),ur(),et?k=0:ar!==-1&&(k=Ge()-ar)),ar=x===1?Ge():-1,k!==-1&&k<150?y="zoom":y="swipe",et&&x<2&&(et=!1,x===1&&(y="zoomPointerUp"),U("zoomGestureEnded")),De=null,!(!en&&!Nt&&!Ee&&!Rn)){if(Sn(),Nn||(Nn=Jl()),Nn.calculateSwipeSpeed("x"),Rn){var P=oo();if(P<p.verticalDragRange)c.close();else{var H=I.y,re=pi;xn("verticalDrag",0,1,300,l.easing.cubic.out,function(nt){I.y=(c.currItem.initialPosition.y-H)*nt+H,Je((1-re)*nt+re),pe()}),U("onVerticalDrag",1)}return}if((ht||Ee)&&x===0){var Ke=tc(y,Nn);if(Ke)return;y="zoomPointerUp"}if(!Ee){if(y!=="swipe"){ic();return}!ht&&O>c.currItem.fitRatio&&ec(Nn)}}},Jl=function(){var o,u,d={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(f){xt.length>1?(o=Ge()-ci+50,u=xt[xt.length-2][f]):(o=Ge()-Xs,u=Xt[f]),d.lastFlickOffset[f]=we[f]-u,d.lastFlickDist[f]=Math.abs(d.lastFlickOffset[f]),d.lastFlickDist[f]>20?d.lastFlickSpeed[f]=d.lastFlickOffset[f]/o:d.lastFlickSpeed[f]=0,Math.abs(d.lastFlickSpeed[f])<.1&&(d.lastFlickSpeed[f]=0),d.slowDownRatio[f]=.95,d.slowDownRatioReverse[f]=1-d.slowDownRatio[f],d.speedDecelerationRatio[f]=1},calculateOverBoundsAnimOffset:function(f,g){d.backAnimStarted[f]||(I[f]>A.min[f]?d.backAnimDestination[f]=A.min[f]:I[f]<A.max[f]&&(d.backAnimDestination[f]=A.max[f]),d.backAnimDestination[f]!==void 0&&(d.slowDownRatio[f]=.7,d.slowDownRatioReverse[f]=1-d.slowDownRatio[f],d.speedDecelerationRatioAbs[f]<.05&&(d.lastFlickSpeed[f]=0,d.backAnimStarted[f]=!0,xn("bounceZoomPan"+f,I[f],d.backAnimDestination[f],g||300,l.easing.sine.out,function(y){I[f]=y,pe()}))))},calculateAnimOffset:function(f){d.backAnimStarted[f]||(d.speedDecelerationRatio[f]=d.speedDecelerationRatio[f]*(d.slowDownRatio[f]+d.slowDownRatioReverse[f]-d.slowDownRatioReverse[f]*d.timeDiff/10),d.speedDecelerationRatioAbs[f]=Math.abs(d.lastFlickSpeed[f]*d.speedDecelerationRatio[f]),d.distanceOffset[f]=d.lastFlickSpeed[f]*d.speedDecelerationRatio[f]*d.timeDiff,I[f]+=d.distanceOffset[f])},panAnimLoop:function(){if(xe.zoomPan&&(xe.zoomPan.raf=Kt(d.panAnimLoop),d.now=Ge(),d.timeDiff=d.now-d.lastNow,d.lastNow=d.now,d.calculateAnimOffset("x"),d.calculateAnimOffset("y"),pe(),d.calculateOverBoundsAnimOffset("x"),d.calculateOverBoundsAnimOffset("y"),d.speedDecelerationRatioAbs.x<.05&&d.speedDecelerationRatioAbs.y<.05)){I.x=Math.round(I.x),I.y=Math.round(I.y),pe(),In("zoomPan");return}}};return d},ec=function(o){if(o.calculateSwipeSpeed("y"),A=c.currItem.bounds,o.backAnimDestination={},o.backAnimStarted={},Math.abs(o.lastFlickSpeed.x)<=.05&&Math.abs(o.lastFlickSpeed.y)<=.05)return o.speedDecelerationRatioAbs.x=o.speedDecelerationRatioAbs.y=0,o.calculateOverBoundsAnimOffset("x"),o.calculateOverBoundsAnimOffset("y"),!0;rr("zoomPan"),o.lastNow=Ge(),o.panAnimLoop()},tc=function(o,u){var d;Ee||(ui=T);var f;if(o==="swipe"){var g=we.x-Xt.x,y=u.lastFlickDist.x<10;g>Zs&&(y||u.lastFlickOffset.x>20)?f=-1:g<-Zs&&(y||u.lastFlickOffset.x<-20)&&(f=1)}var x;f&&(T+=f,T<0?(T=p.loop?Ne()-1:0,x=!0):T>=Ne()&&(T=p.loop?0:Ne()-1,x=!0),(!x||p.loop)&&(me+=f,Ve-=f,d=!0));var k=le.x*Ve,P=Math.abs(k-tt.x),H;return!d&&k>tt.x!=u.lastFlickSpeed.x>0?H=333:(H=Math.abs(u.lastFlickSpeed.x)>0?P/Math.abs(u.lastFlickSpeed.x):333,H=Math.min(H,400),H=Math.max(H,250)),ui===T&&(d=!1),Ee=!0,U("mainScrollAnimStart"),xn("mainScroll",tt.x,k,H,l.easing.cubic.out,li,function(){Sn(),Ee=!1,ui=-1,(d||ui!==T)&&c.updateCurrItem(),U("mainScrollAnimComplete")}),d&&c.updateCurrItem(!0),d},nc=function(o){return 1/Js*o*Xe},ic=function(){var o=O,u=zs(),d=js();O<u?o=u:O>d&&(o=d);var f=1,g,y=pi;return fi&&!or&&!_i&&O<u?(c.close(),!0):(fi&&(g=function(x){Je((f-y)*x+y)}),c.zoomTo(o,0,200,l.easing.cubic.out,g),!0)};En("Gestures",{publicMethods:{initGestures:function(){var o=function(u,d,f,g,y){lt=u+d,wt=u+f,Et=u+g,y?bt=u+y:bt=""};qe=F.pointerEvent,qe&&F.touch&&(F.touch=!1),qe?navigator.msPointerEnabled?o("MSPointer","Down","Move","Up","Cancel"):o("pointer","down","move","up","cancel"):F.touch?(o("touch","start","move","end","cancel"),Oe=!0):o("mouse","down","move","up"),z=wt+" "+Et+" "+bt,S=lt,qe&&!Oe&&(Oe=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),c.likelyTouchDevice=Oe,G[lt]=Kl,G[wt]=Ql,G[Et]=Xl,bt&&(G[bt]=G[Et]),F.touch&&(S+=" mousedown",z+=" mousemove mouseup",G.mousedown=G[lt],G.mousemove=G[wt],G.mouseup=G[Et]),Oe||(p.allowPanToNext=!1)}}});var Rt,lo=function(o,u,d,f){Rt&&clearTimeout(Rt),nn=!0,fr=!0;var g;o.initialLayout?(g=o.initialLayout,o.initialLayout=null):g=p.getThumbBoundsFn&&p.getThumbBoundsFn(T);var y=d?p.hideAnimationDuration:p.showAnimationDuration,x=function(){In("initialZoom"),d?(c.template.removeAttribute("style"),c.bg.removeAttribute("style")):(Je(1),u&&(u.style.display="block"),l.addClass(i,"pswp--animated-in"),U("initialZoom"+(d?"OutEnd":"InEnd"))),f&&f(),nn=!1};if(!y||!g||g.x===void 0){U("initialZoom"+(d?"Out":"In")),O=o.initialZoomLevel,ve(I,o.initialPosition),pe(),i.style.opacity=d?0:1,Je(1),y?setTimeout(function(){x()},y):x();return}var k=function(){var P=R,H=!c.currItem.src||c.currItem.loadError||p.showHideOpacity;o.miniImg&&(o.miniImg.style.webkitBackfaceVisibility="hidden"),d||(O=g.w/o.w,I.x=g.x,I.y=g.y-Y,c[H?"template":"bg"].style.opacity=.001,pe()),rr("initialZoom"),d&&!P&&l.removeClass(i,"pswp--animated-in"),H&&(d?l[(P?"remove":"add")+"Class"](i,"pswp--animate_opacity"):setTimeout(function(){l.addClass(i,"pswp--animate_opacity")},30)),Rt=setTimeout(function(){if(U("initialZoom"+(d?"Out":"In")),!d)O=o.initialZoomLevel,ve(I,o.initialPosition),pe(),Je(1),H?i.style.opacity=1:Je(1),Rt=setTimeout(x,y+20);else{var re=g.w/o.w,Ke={x:I.x,y:I.y},nt=O,sn=pi,On=function(Qe){Qe===1?(O=re,I.x=g.x,I.y=g.y-fe):(O=(re-nt)*Qe+nt,I.x=(g.x-Ke.x)*Qe+Ke.x,I.y=(g.y-fe-Ke.y)*Qe+Ke.y),pe(),H?i.style.opacity=1-Qe:Je(sn-Qe*sn)};P?xn("initialZoom",0,1,y,l.easing.cubic.out,On,x):(On(1),Rt=setTimeout(x,y+20))}},d?25:90)};k()},pt,Pe={},Dt=[],fr,nn,rc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return pt.length}},_t,Ne,co=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},sc=function(o,u,d){var f=o.bounds;f.center.x=Math.round((Pe.x-u)/2),f.center.y=Math.round((Pe.y-d)/2)+o.vGap.top,f.max.x=u>Pe.x?Math.round(Pe.x-u):f.center.x,f.max.y=d>Pe.y?Math.round(Pe.y-d)+o.vGap.top:f.center.y,f.min.x=u>Pe.x?0:f.center.x,f.min.y=d>Pe.y?o.vGap.top:f.center.y},kn=function(o,u,d){if(o.src&&!o.loadError){var f=!d;if(f&&(o.vGap||(o.vGap={top:0,bottom:0}),U("parseVerticalMargin",o)),Pe.x=u.x,Pe.y=u.y-o.vGap.top-o.vGap.bottom,f){var g=Pe.x/o.w,y=Pe.y/o.h;o.fitRatio=g<y?g:y;var x=p.scaleMode;x==="orig"?d=1:x==="fit"&&(d=o.fitRatio),d>1&&(d=1),o.initialZoomLevel=d,o.bounds||(o.bounds=co())}return d?(sc(o,o.w*d,o.h*d),f&&d===o.initialZoomLevel&&(o.initialPosition=o.bounds.center),o.bounds):void 0}else return o.w=o.h=0,o.initialZoomLevel=o.fitRatio=1,o.bounds=co(),o.initialPosition=o.bounds.center,o.bounds},gi=function(o,u,d,f,g,y){u.loadError||f&&(u.imageAppended=!0,Pt(u,f,u===c.currItem&&Fe),d.appendChild(f),y&&setTimeout(function(){u&&u.loaded&&u.placeholder&&(u.placeholder.style.display="none",u.placeholder=null)},500))},uo=function(o){o.loading=!0,o.loaded=!1;var u=o.img=l.createEl("pswp__img","img"),d=function(){o.loading=!1,o.loaded=!0,o.loadComplete?o.loadComplete(o):o.img=null,u.onload=u.onerror=null,u=null};return u.onload=d,u.onerror=function(){o.loadError=!0,d()},u.src=o.src,u},ho=function(o,u){if(o.src&&o.loadError&&o.container)return u&&(o.container.innerHTML=""),o.container.innerHTML=p.errorMsg.replace("%url%",o.src),!0},Pt=function(o,u,d){if(!!o.src){u||(u=o.container.lastChild);var f=d?o.w:Math.round(o.w*o.fitRatio),g=d?o.h:Math.round(o.h*o.fitRatio);o.placeholder&&!o.loaded&&(o.placeholder.style.width=f+"px",o.placeholder.style.height=g+"px"),u.style.width=f+"px",u.style.height=g+"px"}},fo=function(){if(Dt.length){for(var o,u=0;u<Dt.length;u++)o=Dt[u],o.holder.index===o.index&&gi(o.index,o.item,o.baseDiv,o.img,!1,o.clearPlaceholder);Dt=[]}};En("Controller",{publicMethods:{lazyLoadItem:function(o){o=ai(o);var u=_t(o);!u||(u.loaded||u.loading)&&!Ye||(U("gettingData",o,u),!!u.src&&uo(u))},initController:function(){l.extend(p,rc,!0),c.items=pt=s,_t=c.getItemAt,Ne=p.getNumItemsFn,Ne()<3&&(p.loop=!1),ee("beforeChange",function(o){var u=p.preload,d=o===null?!0:o>=0,f=Math.min(u[0],Ne()),g=Math.min(u[1],Ne()),y;for(y=1;y<=(d?g:f);y++)c.lazyLoadItem(T+y);for(y=1;y<=(d?f:g);y++)c.lazyLoadItem(T-y)}),ee("initialLayout",function(){c.currItem.initialLayout=p.getThumbBoundsFn&&p.getThumbBoundsFn(T)}),ee("mainScrollAnimComplete",fo),ee("initialZoomInEnd",fo),ee("destroy",function(){for(var o,u=0;u<pt.length;u++)o=pt[u],o.container&&(o.container=null),o.placeholder&&(o.placeholder=null),o.img&&(o.img=null),o.preloader&&(o.preloader=null),o.loadError&&(o.loaded=o.loadError=!1);Dt=null})},getItemAt:function(o){return o>=0&&pt[o]!==void 0?pt[o]:!1},allowProgressiveImg:function(){return p.forceProgressiveLoading||!Oe||p.mouseUsed||screen.width>1200},setContent:function(o,u){p.loop&&(u=ai(u));var d=c.getItemAt(o.index);d&&(d.container=null);var f=c.getItemAt(u),g;if(!f){o.el.innerHTML="";return}U("gettingData",u,f),o.index=u,o.item=f;var y=f.container=l.createEl("pswp__zoom-wrap");if(!f.src&&f.html&&(f.html.tagName?y.appendChild(f.html):y.innerHTML=f.html),ho(f),kn(f,Z),f.src&&!f.loadError&&!f.loaded){if(f.loadComplete=function(P){if(!!w){if(o&&o.index===u){if(ho(P,!0)){P.loadComplete=P.img=null,kn(P,Z),Tn(P),o.index===T&&c.updateCurrZoomItem();return}P.imageAppended?!nn&&P.placeholder&&(P.placeholder.style.display="none",P.placeholder=null):F.transform&&(Ee||nn)?Dt.push({item:P,baseDiv:y,img:P.img,index:u,holder:o,clearPlaceholder:!0}):gi(u,P,y,P.img,Ee||nn,!0)}P.loadComplete=null,P.img=null,U("imageLoadComplete",u,P)}},l.features.transform){var x="pswp__img pswp__img--placeholder";x+=f.msrc?"":" pswp__img--placeholder--blank";var k=l.createEl(x,f.msrc?"img":"");f.msrc&&(k.src=f.msrc),Pt(f,k),y.appendChild(k),f.placeholder=k}f.loading||uo(f),c.allowProgressiveImg()&&(!fr&&F.transform?Dt.push({item:f,baseDiv:y,img:f.img,index:u,holder:o}):gi(u,f,y,f.img,!0,!0))}else f.src&&!f.loadError&&(g=l.createEl("pswp__img","img"),g.style.opacity=1,g.src=f.src,Pt(f,g),gi(u,f,y,g));!fr&&u===T?(ze=y.style,lo(f,g||f.img)):Tn(f),o.el.innerHTML="",o.el.appendChild(y)},cleanSlide:function(o){o.img&&(o.img.onload=o.img.onerror=null),o.loaded=o.loading=o.img=o.imageAppended=!1}}});var mt,pr={},_r=function(o,u,d){var f=document.createEvent("CustomEvent"),g={origEvent:o,target:o.target,releasePoint:u,pointerType:d||"touch"};f.initCustomEvent("pswpTap",!0,!0,g),o.target.dispatchEvent(f)};En("Tap",{publicMethods:{initTap:function(){ee("firstTouchStart",c.onTapStart),ee("touchRelease",c.onTapRelease),ee("destroy",function(){pr={},mt=null})},onTapStart:function(o){o.length>1&&(clearTimeout(mt),mt=null)},onTapRelease:function(o,u){if(!!u&&!en&&!lr&&!Zt){var d=u;if(mt&&(clearTimeout(mt),mt=null,Gl(d,pr))){U("doubleTap",d);return}if(u.type==="mouse"){_r(o,u,"mouse");return}var f=o.target.tagName.toUpperCase();if(f==="BUTTON"||l.hasClass(o.target,"pswp__single-tap")){_r(o,u);return}ve(pr,d),mt=setTimeout(function(){_r(o,u),mt=null},300)}}}});var Re;En("DesktopZoom",{publicMethods:{initDesktopZoom:function(){ie||(Oe?ee("mouseUsed",function(){c.setupDesktopZoom()}):c.setupDesktopZoom(!0))},setupDesktopZoom:function(o){Re={};var u="wheel mousewheel DOMMouseScroll";ee("bindEvents",function(){l.bind(i,u,c.handleMouseWheel)}),ee("unbindEvents",function(){Re&&l.unbind(i,u,c.handleMouseWheel)}),c.mouseZoomedIn=!1;var d,f=function(){c.mouseZoomedIn&&(l.removeClass(i,"pswp--zoomed-in"),c.mouseZoomedIn=!1),O<1?l.addClass(i,"pswp--zoom-allowed"):l.removeClass(i,"pswp--zoom-allowed"),g()},g=function(){d&&(l.removeClass(i,"pswp--dragging"),d=!1)};ee("resize",f),ee("afterChange",f),ee("pointerDown",function(){c.mouseZoomedIn&&(d=!0,l.addClass(i,"pswp--dragging"))}),ee("pointerUp",g),o||f()},handleMouseWheel:function(o){if(O<=c.currItem.fitRatio)return p.modal&&(!p.closeOnScroll||Zt||$e?o.preventDefault():Me&&Math.abs(o.deltaY)>2&&(R=!0,c.close())),!0;if(o.stopPropagation(),Re.x=0,"deltaX"in o)o.deltaMode===1?(Re.x=o.deltaX*18,Re.y=o.deltaY*18):(Re.x=o.deltaX,Re.y=o.deltaY);else if("wheelDelta"in o)o.wheelDeltaX&&(Re.x=-.16*o.wheelDeltaX),o.wheelDeltaY?Re.y=-.16*o.wheelDeltaY:Re.y=-.16*o.wheelDelta;else if("detail"in o)Re.y=o.detail;else return;ir(O,!0);var u=I.x-Re.x,d=I.y-Re.y;(p.modal||u<=A.min.x&&u>=A.max.x&&d<=A.min.y&&d>=A.max.y)&&o.preventDefault(),c.panTo(u,d)},toggleDesktopZoom:function(o){o=o||{x:Z.x/2+at.x,y:Z.y/2+at.y};var u=p.getDoubleTapZoom(!0,c.currItem),d=O===u;c.mouseZoomedIn=!d,c.zoomTo(d?c.currItem.initialZoomLevel:u,o,333),l[(d?"remove":"add")+"Class"](i,"pswp--zoomed-in")}}});var oc={history:!0,galleryUID:1},mr,po,Mn,vi,gr,_o,_e,rn,vr,yr,je,Cr,wr=function(){return je.hash.substring(1)},mo=function(){mr&&clearTimeout(mr),Mn&&clearTimeout(Mn)},go=function(){var o=wr(),u={};if(o.length<5)return u;var d,f=o.split("&");for(d=0;d<f.length;d++)if(!!f[d]){var g=f[d].split("=");g.length<2||(u[g[0]]=g[1])}if(p.galleryPIDs){var y=u.pid;for(u.pid=0,d=0;d<pt.length;d++)if(pt[d].pid===y){u.pid=d;break}}else u.pid=parseInt(u.pid,10)-1;return u.pid<0&&(u.pid=0),u},Er=function(){if(Mn&&clearTimeout(Mn),Zt||$e){Mn=setTimeout(Er,500);return}vi?clearTimeout(po):vi=!0;var o=T+1,u=_t(T);u.hasOwnProperty("pid")&&(o=u.pid);var d=_e+"&gid="+p.galleryUID+"&pid="+o;rn||je.hash.indexOf(d)===-1&&(yr=!0);var f=je.href.split("#")[0]+"#"+d;Cr?"#"+d!==window.location.hash&&history[rn?"replaceState":"pushState"]("",document.title,f):rn?je.replace(f):je.hash=d,rn=!0,po=setTimeout(function(){vi=!1},60)};En("History",{publicMethods:{initHistory:function(){if(l.extend(p,oc,!0),!!p.history){je=window.location,yr=!1,vr=!1,rn=!1,_e=wr(),Cr="pushState"in history,_e.indexOf("gid=")>-1&&(_e=_e.split("&gid=")[0],_e=_e.split("?gid=")[0]),ee("afterChange",c.updateURL),ee("unbindEvents",function(){l.unbind(window,"hashchange",c.onHashChange)});var o=function(){_o=!0,vr||(yr?history.back():_e?je.hash=_e:Cr?history.pushState("",document.title,je.pathname+je.search):je.hash=""),mo()};ee("unbindEvents",function(){R&&o()}),ee("destroy",function(){_o||o()}),ee("firstUpdate",function(){T=go().pid});var u=_e.indexOf("pid=");u>-1&&(_e=_e.substring(0,u),_e.slice(-1)==="&"&&(_e=_e.slice(0,-1))),setTimeout(function(){w&&l.bind(window,"hashchange",c.onHashChange)},40)}},onHashChange:function(){if(wr()===_e){vr=!0,c.close();return}vi||(gr=!0,c.goTo(go().pid),gr=!1)},updateURL:function(){mo(),!gr&&(rn?mr=setTimeout(Er,800):Er())}}}),l.extend(c,Vl)};return t})})(Mo);var y_=Mo.exports,Oo={exports:{}};/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */(function(n,e){(function(t,i){n.exports=i()})(ko,function(){var t=function(i,r){var s=this,a=!1,l=!0,c,h,_,p,m,w,E,R=!0,T,q,D,X,ge,I,z,S,G={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(v,b){return v.title?(b.children[0].innerHTML=v.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return i.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return i.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},Z,O=function(v){if(Z)return!0;v=v||window.event,S.timeToIdle&&S.mouseUsed&&!q&&lt();for(var b=v.target||v.srcElement,Y,ie=b.getAttribute("class")||"",fe,F=0;F<ct.length;F++)Y=ct[F],Y.onTap&&ie.indexOf("pswp__"+Y.name)>-1&&(Y.onTap(),fe=!0);if(fe){v.stopPropagation&&v.stopPropagation(),Z=!0;var Se=r.features.isOldAndroid?600:30;setTimeout(function(){Z=!1},Se)}},Xe=function(){return!i.likelyTouchDevice||S.mouseUsed||screen.width>S.fitControlsWidth},Be=function(v,b,Y){r[(Y?"add":"remove")+"Class"](v,"pswp__"+b)},Gt=function(){var v=S.getNumItemsFn()===1;v!==z&&(Be(h,"ui--one-slide",v),z=v)},$t=function(){Be(E,"share-modal--hidden",R)},Ye=function(){return R=!R,R?(r.removeClass(E,"pswp__share-modal--fade-in"),setTimeout(function(){R&&$t()},300)):($t(),setTimeout(function(){R||r.addClass(E,"pswp__share-modal--fade-in")},30)),R||at(),!1},Ve=function(v){v=v||window.event;var b=v.target||v.srcElement;return i.shout("shareLinkClick",v,b),b.href?b.hasAttribute("download")?!0:(window.open(b.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),R||Ye(),!1):!1},at=function(){for(var v="",b,Y,ie,fe,F,Se=0;Se<S.shareButtons.length;Se++)b=S.shareButtons[Se],ie=S.getImageURLForShare(b),fe=S.getPageURLForShare(b),F=S.getTextForShare(b),Y=b.url.replace("{{url}}",encodeURIComponent(fe)).replace("{{image_url}}",encodeURIComponent(ie)).replace("{{raw_image_url}}",ie).replace("{{text}}",encodeURIComponent(F)),v+='<a href="'+Y+'" target="_blank" class="pswp__share--'+b.id+'"'+(b.download?"download":"")+">"+b.label+"</a>",S.parseShareButtonOut&&(v=S.parseShareButtonOut(b,v));E.children[0].innerHTML=v,E.children[0].onclick=Ve},le=function(v){for(var b=0;b<S.closeElClasses.length;b++)if(r.hasClass(v,"pswp__"+S.closeElClasses[b]))return!0},J,zt,me=0,lt=function(){clearTimeout(zt),me=0,q&&s.setIdle(!1)},wt=function(v){v=v||window.event;var b=v.relatedTarget||v.toElement;(!b||b.nodeName==="HTML")&&(clearTimeout(zt),zt=setTimeout(function(){s.setIdle(!0)},S.timeToIdleOutside))},Et=function(){S.fullscreenEl&&!r.features.isOldAndroid&&(c||(c=s.getFullscreenAPI()),c?(r.bind(document,c.eventK,s.updateFullscreen),s.updateFullscreen(),r.addClass(i.template,"pswp--supports-fs")):r.removeClass(i.template,"pswp--supports-fs"))},bt=function(){S.preloaderEl&&(Me(!0),D("beforeChange",function(){clearTimeout(I),I=setTimeout(function(){i.currItem&&i.currItem.loading?(!i.allowProgressiveImg()||i.currItem.img&&!i.currItem.img.naturalWidth)&&Me(!1):Me(!0)},S.loadingIndicatorDelay)}),D("imageLoadComplete",function(v,b){i.currItem===b&&Me(!0)}))},Me=function(v){ge!==v&&(Be(X,"preloader--active",!v),ge=v)},qe=function(v){var b=v.vGap;if(Xe()){var Y=S.barsSize;if(S.captionEl&&Y.bottom==="auto")if(p||(p=r.createEl("pswp__caption pswp__caption--fake"),p.appendChild(r.createEl("pswp__caption__center")),h.insertBefore(p,_),r.addClass(h,"pswp__ui--fit")),S.addCaptionHTMLFn(v,p,!0)){var ie=p.clientHeight;b.bottom=parseInt(ie,10)||44}else b.bottom=Y.top;else b.bottom=Y.bottom==="auto"?0:Y.bottom;b.top=Y.top}else b.top=b.bottom=0},jt=function(){S.timeToIdle&&D("mouseUsed",function(){r.bind(document,"mousemove",lt),r.bind(document,"mouseout",wt),J=setInterval(function(){me++,me===2&&s.setIdle(!0)},S.timeToIdle/2)})},Oe=function(){D("onVerticalDrag",function(b){l&&b<.95?s.hideControls():!l&&b>=.95&&s.showControls()});var v;D("onPinchClose",function(b){l&&b<.9?(s.hideControls(),v=!0):v&&!l&&b>.9&&s.showControls()}),D("zoomGestureEnded",function(){v=!1,v&&!l&&s.showControls()})},ct=[{name:"caption",option:"captionEl",onInit:function(v){_=v}},{name:"share-modal",option:"shareEl",onInit:function(v){E=v},onTap:function(){Ye()}},{name:"button--share",option:"shareEl",onInit:function(v){w=v},onTap:function(){Ye()}},{name:"button--zoom",option:"zoomEl",onTap:i.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(v){m=v}},{name:"button--close",option:"closeEl",onTap:i.close},{name:"button--arrow--left",option:"arrowEl",onTap:i.prev},{name:"button--arrow--right",option:"arrowEl",onTap:i.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(v){X=v}}],Kt=function(){var v,b,Y,ie=function(F){if(!!F)for(var Se=F.length,Fe=0;Fe<Se;Fe++){v=F[Fe],b=v.className;for(var Tt=0;Tt<ct.length;Tt++)Y=ct[Tt],b.indexOf("pswp__"+Y.name)>-1&&(S[Y.option]?(r.removeClass(v,"pswp__element--disabled"),Y.onInit&&Y.onInit(v)):r.addClass(v,"pswp__element--disabled"))}};ie(h.children);var fe=r.getChildByClass(h,"pswp__top-bar");fe&&ie(fe.children)};s.init=function(){r.extend(i.options,G,!0),S=i.options,h=r.getChildByClass(i.scrollWrap,"pswp__ui"),D=i.listen,Oe(),D("beforeChange",s.update),D("doubleTap",function(v){var b=i.currItem.initialZoomLevel;i.getZoomLevel()!==b?i.zoomTo(b,v,333):i.zoomTo(S.getDoubleTapZoom(!1,i.currItem),v,333)}),D("preventDragEvent",function(v,b,Y){var ie=v.target||v.srcElement;ie&&ie.getAttribute("class")&&v.type.indexOf("mouse")>-1&&(ie.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(ie.tagName))&&(Y.prevent=!1)}),D("bindEvents",function(){r.bind(h,"pswpTap click",O),r.bind(i.scrollWrap,"pswpTap",s.onGlobalTap),i.likelyTouchDevice||r.bind(i.scrollWrap,"mouseover",s.onMouseOver)}),D("unbindEvents",function(){R||Ye(),J&&clearInterval(J),r.unbind(document,"mouseout",wt),r.unbind(document,"mousemove",lt),r.unbind(h,"pswpTap click",O),r.unbind(i.scrollWrap,"pswpTap",s.onGlobalTap),r.unbind(i.scrollWrap,"mouseover",s.onMouseOver),c&&(r.unbind(document,c.eventK,s.updateFullscreen),c.isFullscreen()&&(S.hideAnimationDuration=0,c.exit()),c=null)}),D("destroy",function(){S.captionEl&&(p&&h.removeChild(p),r.removeClass(_,"pswp__caption--empty")),E&&(E.children[0].onclick=null),r.removeClass(h,"pswp__ui--over-close"),r.addClass(h,"pswp__ui--hidden"),s.setIdle(!1)}),S.showAnimationDuration||r.removeClass(h,"pswp__ui--hidden"),D("initialZoomIn",function(){S.showAnimationDuration&&r.removeClass(h,"pswp__ui--hidden")}),D("initialZoomOut",function(){r.addClass(h,"pswp__ui--hidden")}),D("parseVerticalMargin",qe),Kt(),S.shareEl&&w&&E&&(R=!0),Gt(),jt(),Et(),bt()},s.setIdle=function(v){q=v,Be(h,"ui--idle",v)},s.update=function(){l&&i.currItem?(s.updateIndexIndicator(),S.captionEl&&(S.addCaptionHTMLFn(i.currItem,_),Be(_,"caption--empty",!i.currItem.title)),a=!0):a=!1,R||Ye(),Gt()},s.updateFullscreen=function(v){v&&setTimeout(function(){i.setScrollOffset(0,r.getScrollY())},50),r[(c.isFullscreen()?"add":"remove")+"Class"](i.template,"pswp--fs")},s.updateIndexIndicator=function(){S.counterEl&&(m.innerHTML=i.getCurrentIndex()+1+S.indexIndicatorSep+S.getNumItemsFn())},s.onGlobalTap=function(v){v=v||window.event;var b=v.target||v.srcElement;if(!Z){if(v.detail&&v.detail.pointerType==="mouse"){if(le(b)){i.close();return}r.hasClass(b,"pswp__img")&&(i.getZoomLevel()===1&&i.getZoomLevel()<=i.currItem.fitRatio?S.clickToCloseNonZoomable&&i.close():i.toggleDesktopZoom(v.detail.releasePoint))}else if(S.tapToToggleControls&&(l?s.hideControls():s.showControls()),S.tapToClose&&(r.hasClass(b,"pswp__img")||le(b))){i.close();return}}},s.onMouseOver=function(v){v=v||window.event;var b=v.target||v.srcElement;Be(h,"ui--over-close",le(b))},s.hideControls=function(){r.addClass(h,"pswp__ui--hidden"),l=!1},s.showControls=function(){l=!0,a||s.update(),r.removeClass(h,"pswp__ui--hidden")},s.supportsFullscreen=function(){var v=document;return!!(v.exitFullscreen||v.mozCancelFullScreen||v.webkitExitFullscreen||v.msExitFullscreen)},s.getFullscreenAPI=function(){var v=document.documentElement,b,Y="fullscreenchange";return v.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:Y}:v.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+Y}:v.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+Y}:v.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){if(T=S.closeOnScroll,S.closeOnScroll=!1,this.enterK==="webkitRequestFullscreen")i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);else return i.template[this.enterK]()},b.exit=function(){return S.closeOnScroll=T,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return t})})(Oo);var C_=Oo.exports;/**
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
 */const Fo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(n,e){if(!n)throw an(e)},an=function(n){return new Error("Firebase Database ("+Fo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Lo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ou=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],a=n[t++],l=n[t++],c=((r&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Dr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,l=a?n[r+1]:0,c=r+2<n.length,h=c?n[r+2]:0,_=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(m=64)),i.push(t[_],t[p],t[m],t[w])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ou(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||h==null||p==null)throw Error();const m=s<<2|l>>4;if(i.push(m),h!==64){const w=l<<4&240|h>>2;if(i.push(w),p!==64){const E=h<<6&192|p;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Fu=function(n){const e=Lo(n);return Dr.encodeByteArray(e,!0)},Wo=function(n){try{return Dr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lu(n){return Uo(void 0,n)}function Uo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Wu(t)||(n[t]=Uo(n[t],e[t]));return n}function Wu(n){return n!=="__proto__"}/**
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
 */class Si{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Uu(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ho(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Uu())}function Hu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bo(){return Fo.NODE_ADMIN===!0}/**
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
 */const Bu="FirebaseError";class Pr extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=Bu,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?Yu(s,i):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new Pr(r,l,i)}}function Yu(n,e){return n.replace(Vu,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Vu=/\{\$([^}]+)}/g;/**
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
 */function Bn(n){return JSON.parse(n)}function se(n){return JSON.stringify(n)}/**
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
 */const Vo=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=Bn(Wo(s[0])||""),t=Bn(Wo(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},qu=function(n){const e=Vo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Gu=function(n){const e=Vo(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ze(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ln(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function qo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xi(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Ar(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],a=e[r];if(Go(s)&&Go(a)){if(!Ar(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Go(n){return n!==null&&typeof n=="object"}/**
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
 */function $u(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class zu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(m<<1|m>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4],h,_;for(let p=0;p<80;p++){p<40?p<20?(h=l^s&(a^l),_=1518500249):(h=s^a^l,_=1859775393):p<60?(h=s&a|l&(s|a),_=2400959708):(h=s^a^l,_=3395469782);const m=(r<<5|r>>>27)+h+c+_+i[p]&4294967295;c=l,l=a,a=(s<<30|s>>>2)&4294967295,s=r,r=m}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}else for(;r<t;)if(s[a]=e[r],++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function kr(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ju=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,C(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;r=65536+(s<<10)+a}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ni=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Mr(n){return n&&n._delegate?n._delegate:n}class Ri{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class Ku{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Si;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zu(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qu(n){return n===kt?void 0:n}function Zu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Xu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ku(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Ju={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},eh=j.INFO,th={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},nh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=th[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $o{constructor(e){this.name=e,this._logLevel=eh,this._logHandler=nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ju[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}/**
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
 */class ih{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function rh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Or="@firebase/app",zo="0.7.13";/**
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
 */const Fr=new $o("@firebase/app"),sh="@firebase/app-compat",oh="@firebase/analytics-compat",ah="@firebase/analytics",lh="@firebase/app-check-compat",ch="@firebase/app-check",uh="@firebase/auth",hh="@firebase/auth-compat",dh="@firebase/database",fh="@firebase/database-compat",ph="@firebase/functions",_h="@firebase/functions-compat",mh="@firebase/installations",gh="@firebase/installations-compat",vh="@firebase/messaging",yh="@firebase/messaging-compat",Ch="@firebase/performance",wh="@firebase/performance-compat",Eh="@firebase/remote-config",bh="@firebase/remote-config-compat",Th="@firebase/storage",Ih="@firebase/storage-compat",Sh="@firebase/firestore",xh="@firebase/firestore-compat",Nh="firebase",Rh="9.6.3";/**
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
 */const jo="[DEFAULT]",Dh={[Or]:"fire-core",[sh]:"fire-core-compat",[ah]:"fire-analytics",[oh]:"fire-analytics-compat",[ch]:"fire-app-check",[lh]:"fire-app-check-compat",[uh]:"fire-auth",[hh]:"fire-auth-compat",[dh]:"fire-rtdb",[fh]:"fire-rtdb-compat",[ph]:"fire-fn",[_h]:"fire-fn-compat",[mh]:"fire-iid",[gh]:"fire-iid-compat",[vh]:"fire-fcm",[yh]:"fire-fcm-compat",[Ch]:"fire-perf",[wh]:"fire-perf-compat",[Eh]:"fire-rc",[bh]:"fire-rc-compat",[Th]:"fire-gcs",[Ih]:"fire-gcs-compat",[Sh]:"fire-fst",[xh]:"fire-fst-compat","fire-js":"fire-js",[Nh]:"fire-js-all"};/**
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
 */const Di=new Map,Lr=new Map;function Ph(n,e){try{n.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wr(n){const e=n.name;if(Lr.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;Lr.set(e,n);for(const t of Di.values())Ph(t,n);return!0}function Ah(n,e){return n.container.getProvider(e)}/**
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
 */const kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Pi=new Yo("app","Firebase",kh);/**
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
 */class Mh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Oh=Rh;function w_(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:jo,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Pi.create("bad-app-name",{appName:String(i)});const r=Di.get(i);if(r){if(Ar(n,r.options)&&Ar(t,r.config))return r;throw Pi.create("duplicate-app",{appName:i})}const s=new Xu(i);for(const l of Lr.values())s.addComponent(l);const a=new Mh(n,t,s);return Di.set(i,a),a}function Fh(n=jo){const e=Di.get(n);if(!e)throw Pi.create("no-app",{appName:n});return e}function cn(n,e,t){var i;let r=(i=Dh[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(l.join(" "));return}Wr(new Ri(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */function Lh(n){Wr(new Ri("platform-logger",e=>new ih(e),"PRIVATE")),cn(Or,zo,n),cn(Or,zo,"esm2017"),cn("fire-js","")}Lh("");var Wh="firebase",Uh="9.6.3";/**
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
 */cn(Wh,Uh,"app");const Ko="@firebase/database",Qo="0.12.5";/**
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
 */let Zo="";function Hh(n){Zo=n}/**
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
 */class Bh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Bn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Yh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ze(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Xo=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Bh(e)}}catch{}return new Yh},Mt=Xo("localStorage"),Ur=Xo("sessionStorage");/**
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
 */const un=new $o("@firebase/database"),Vh=function(){let n=1;return function(){return n++}}(),Jo=function(n){const e=ju(n),t=new zu;t.update(e);const i=t.digest();return Dr.encodeByteArray(i)},Yn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Yn.apply(null,i):typeof i=="object"?e+=se(i):e+=i,e+=" "}return e};let Ot=null,ea=!0;const qh=function(n,e){C(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(un.logLevel=j.VERBOSE,Ot=un.log.bind(un),e&&Ur.set("logging_enabled",!0)):typeof n=="function"?Ot=n:(Ot=null,Ur.remove("logging_enabled"))},ue=function(...n){if(ea===!0&&(ea=!1,Ot===null&&Ur.get("logging_enabled")===!0&&qh(!0)),Ot){const e=Yn.apply(null,n);Ot(e)}},Vn=function(n){return function(...e){ue(n,...e)}},Hr=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yn(...n);un.error(e)},Ft=function(...n){const e=`FIREBASE FATAL ERROR: ${Yn(...n)}`;throw un.error(e),new Error(e)},be=function(...n){const e="FIREBASE WARNING: "+Yn(...n);un.warn(e)},Gh=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Br=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$h=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},hn="[MIN_NAME]",Lt="[MAX_NAME]",Wt=function(n,e){if(n===e)return 0;if(n===hn||e===Lt)return-1;if(e===hn||n===Lt)return 1;{const t=ia(n),i=ia(e);return t!==null?i!==null?t-i==0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},zh=function(n,e){return n===e?0:n<e?-1:1},qn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+se(e))},Yr=function(n){if(typeof n!="object"||n===null)return se(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=se(e[i]),t+=":",t+=Yr(n[e[i]]);return t+="}",t},ta=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function he(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const na=function(n){C(!Br(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,a,l,c;n===0?(s=0,a=0,r=1/n==-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=l+i,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,a=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(c=t;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(r?1:0),h.reverse();const _=h.join("");let p="";for(c=0;c<64;c+=8){let m=parseInt(_.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},jh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Kh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Qh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Zh=new RegExp("^-?(0*)\\d{1,10}$"),Xh=-2147483648,Jh=2147483647,ia=function(n){if(Zh.test(n)){const e=Number(n);if(e>=Xh&&e<=Jh)return e}return null},dn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw be("Exception was thrown by user callback.",t),e},Math.floor(0))}},ed=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gn=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class td{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nd{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class Vr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vr.OWNER="owner";/**
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
 */const qr="5",ra="v",sa="s",oa="r",aa="f",la=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ca="ls",id="p",Gr="ac",ua="websocket",ha="long_polling";/**
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
 */class rd{constructor(e,t,i,r,s=!1,a="",l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sd(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function da(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let i;if(e===ua)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ha)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sd(n)&&(t.ns=n.namespace);const r=[];return he(t,(s,a)=>{r.push(s+"="+a)}),i+r.join("&")}/**
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
 */class od{constructor(){this.counters_={}}incrementCounter(e,t=1){Ze(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Lu(this.counters_)}}/**
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
 */const $r={},zr={};function jr(n){const e=n.toString();return $r[e]||($r[e]=new od),$r[e]}function ad(n,e){const t=n.toString();return zr[t]||(zr[t]=e()),zr[t]}/**
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
 */class ld{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&dn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fa="start",cd="close",ud="pLPCommand",hd="pRTLPCB",pa="id",_a="pw",ma="ser",dd="cb",fd="seg",pd="ts",_d="d",md="dframe",ga=1870,va=30,gd=ga-va,vd=25e3,yd=3e4;class fn{constructor(e,t,i,r,s,a,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Vn(e),this.stats_=jr(t),this.urlFn=c=>(this.appCheckToken&&(c[Gr]=this.appCheckToken),da(t,ha,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ld(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yd)),$h(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kr((...s)=>{const[a,l,c,h,_]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===fa)this.id=l,this.password=c;else if(a===cd)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...s)=>{const[a,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[fa]="t",i[ma]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[dd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ra]=qr,this.transportSessionId&&(i[sa]=this.transportSessionId),this.lastSessionId&&(i[ca]=this.lastSessionId),this.applicationId&&(i[id]=this.applicationId),this.appCheckToken&&(i[Gr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&la.test(location.hostname)&&(i[oa]=aa);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!jh()&&!Kh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Fu(t),r=ta(i,gd);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[md]="t",i[pa]=e,i[_a]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Kr{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vh(),window[ud+this.uniqueCallbackIdentifier]=e,window[hd+this.uniqueCallbackIdentifier]=t,this.myIFrame=Kr.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const a="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){ue("frame writing exception"),l.stack&&ue(l.stack),ue(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ue("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pa]=this.myID,e[_a]=this.myPW,e[ma]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+va+i.length<=ga;){const a=this.pendingSegs.shift();i=i+"&"+fd+r+"="+a.seg+"&"+pd+r+"="+a.ts+"&"+_d+r+"="+a.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(vd)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Cd=16384,wd=45e3;let Ai=null;typeof MozWebSocket!="undefined"?Ai=MozWebSocket:typeof WebSocket!="undefined"&&(Ai=WebSocket);class We{constructor(e,t,i,r,s,a,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Vn(this.connId),this.stats_=jr(t),this.connURL=We.connectionURL_(t,a,l,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r){const s={};return s[ra]=qr,typeof location!="undefined"&&location.hostname&&la.test(location.hostname)&&(s[oa]=aa),t&&(s[sa]=t),i&&(s[ca]=i),r&&(s[Gr]=r),da(e,ua,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mt.set("previous_websocket_failure",!0);try{if(!Bo()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ai(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ai!==null&&!We.forceDisallow_}static previouslyFailed(){return Mt.isInMemoryStorage||Mt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Bn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ta(t,Cd);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wd))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2;We.healthyTimeout=3e4;/**
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
 */class Qr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fn,We]}initTransports_(e){const t=We&&We.isAvailable();let i=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[We];else{const r=this.transports_=[];for(const s of Qr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const Ed=6e4,bd=5e3,Td=10*1024,Id=100*1024,Zr="t",ya="d",Sd="s",Ca="r",xd="e",wa="o",Ea="a",ba="n",Ta="p",Nd="h";class Rd{constructor(e,t,i,r,s,a,l,c,h,_){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Vn("c:"+this.id+":"),this.transportManager_=new Qr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Gn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Id?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Td?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zr in e){const t=e[Zr];t===Ea?this.upgradeIfSecondaryHealthy_():t===Ca?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===wa&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qn("t",e),i=qn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ta,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ea,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ba,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qn("t",e),i=qn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qn(Zr,e);if(ya in e){const i=e[ya];if(t===Nd)this.onHandshake_(i);else if(t===ba){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Sd?this.onConnectionShutdown_(i):t===Ca?this.onReset_(i):t===xd?Hr("Server Error: "+i):t===wa?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qr!==i&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Gn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ed))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ta,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ia{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Sa{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ki extends Sa{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Ho()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ki}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xa=32,Na=768;class ${constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function B(){return new $("")}function L(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function vt(n){return n.pieces_.length-n.pieceNum_}function K(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new $(n.pieces_,e)}function Xr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Dd(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function $n(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ra(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new $(e,0)}function te(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof $)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new $(t,0)}function W(n){return n.pieceNum_>=n.pieces_.length}function Te(n,e){const t=L(n),i=L(e);if(t===null)return e;if(t===i)return Te(K(n),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pd(n,e){const t=$n(n,0),i=$n(e,0);for(let r=0;r<t.length&&r<i.length;r++){const s=Wt(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function Jr(n,e){if(vt(n)!==vt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ke(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(vt(n)>vt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Ad{constructor(e,t){this.errorPrefix_=t,this.parts_=$n(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ni(this.parts_[i]);Da(this)}}function kd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ni(e),Da(n)}function Md(n){const e=n.parts_.pop();n.byteLength_-=Ni(e),n.parts_.length>0&&(n.byteLength_-=1)}function Da(n){if(n.byteLength_>Na)throw new Error(n.errorPrefix_+"has a key path longer than "+Na+" bytes ("+n.byteLength_+").");if(n.parts_.length>xa)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xa+") or object contains a cycle "+Ut(n))}function Ut(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class es extends Sa{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new es}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zn=1e3,Od=60*5*1e3,Fd=3*1e3,Pa=30*1e3,Ld=1.3,Wd=3e4,Ud="server_kill",Aa=3;class it extends Ia{constructor(e,t,i,r,s,a,l,c){super();if(this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=it.nextPersistentConnectionId_++,this.log_=Vn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zn,this.maxReconnectDelay_=Od,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Bo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");es.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ki.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(se(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new Si,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:a=>{const l=a.d;a.s==="ok"?(this.onDataUpdate_(i.p,l,!1,null),t.resolve(l)):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const a=this.outstandingGets_[s];a===void 0||r!==a||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))},Fd),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(a).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},a="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(a,s,l=>{const c=l.d,h=l.s;it.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ze(e,"w")){const i=ln(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pa)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=qu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,a=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},a="n";r&&(s.q=i,s.t=r),this.sendRequest(a,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,a=>{r&&setTimeout(()=>{r(a.s,a.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const a={p:t,d:i};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+se(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Hr("Unrecognized action received from server: "+se(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Wd&&(this.reconnectDelay_=zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ld)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+it.nextConnectionId_++,s=this.lastSessionId;let a=!1,l=null;const c=function(){l?l.close():(a=!0,i())},h=function(p){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:h};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);a?ue("getToken() completed but was canceled"):(ue("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new Rd(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,w=>{be(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ud)},s))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&be(p),c())}}}interrupt(e){ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qo(this.interruptReasons_)&&(this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>Yr(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new $(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){ue("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Aa&&(this.reconnectDelay_=Pa,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ue("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Aa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Zo.replace(/\./g,"-")]=1,Ho()?e["framework.cordova"]=1:Hu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ki.getInstance().currentlyOnline();return qo(this.interruptReasons_)&&e}}it.nextPersistentConnectionId_=0;it.nextConnectionId_=0;/**
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
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
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
 */class Mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new M(hn,e),r=new M(hn,t);return this.compare(i,r)!==0}minPost(){return M.MIN}}/**
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
 */let Oi;class ka extends Mi{static get __EMPTY_NODE(){return Oi}static set __EMPTY_NODE(e){Oi=e}compare(e,t){return Wt(e.name,t.name)}isDefinedOn(e){throw an("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(Lt,Oi)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Oi)}toString(){return".key"}}const pn=new ka;/**
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
 */class Fi{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,r&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oe{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:oe.RED,this.left=r!=null?r:Ie.EMPTY_NODE,this.right=s!=null?s:Ie.EMPTY_NODE}copy(e,t,i,r,s){return new oe(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}oe.RED=!0;oe.BLACK=!1;class Hd{copy(e,t,i,r,s){return this}insert(e,t,i){return new oe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ie{constructor(e,t=Ie.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ie(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,oe.BLACK,null,null))}remove(e){return new Ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fi(this.root_,null,this.comparator_,!0,e)}}Ie.EMPTY_NODE=new Hd;/**
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
 */function Bd(n,e){return Wt(n.name,e.name)}function ts(n,e){return Wt(n,e)}/**
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
 */let ns;function Yd(n){ns=n}const Ma=function(n){return typeof n=="number"?"number:"+na(n):"string:"+n},Oa=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ze(e,".sv"),"Priority must be a string or number.")}else C(n===ns||n.isEmpty(),"priority of unexpected type.");C(n===ns||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fa;class ae{constructor(e,t=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oa(this.priorityNode_)}static set __childrenNodeConstructor(e){Fa=e}static get __childrenNodeConstructor(){return Fa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:L(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=L(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ma(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=na(this.value_):e+=this.value_,this.lazyHash_=Jo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=ae.VALUE_TYPE_ORDER.indexOf(t),s=ae.VALUE_TYPE_ORDER.indexOf(i);return C(r>=0,"Unknown leaf type: "+t),C(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let La,Wa;function Vd(n){La=n}function qd(n){Wa=n}class Gd extends Mi{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Wt(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Lt,new ae("[PRIORITY-POST]",Wa))}makePost(e,t){const i=La(e);return new M(t,new ae("[PRIORITY-POST]",i))}toString(){return".priority"}}const ne=new Gd;/**
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
 */const $d=Math.log(2);class zd{constructor(e){const t=s=>parseInt(Math.log(s)/$d,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Li=function(n,e,t,i){n.sort(e);const r=function(c,h){const _=h-c;let p,m;if(_===0)return null;if(_===1)return p=n[c],m=t?t(p):p,new oe(m,p.node,oe.BLACK,null,null);{const w=parseInt(_/2,10)+c,E=r(c,w),R=r(w+1,h);return p=n[w],m=t?t(p):p,new oe(m,p.node,oe.BLACK,E,R)}},s=function(c){let h=null,_=null,p=n.length;const m=function(E,R){const T=p-E,q=p;p-=E;const D=r(T+1,q),X=n[T],ge=t?t(X):X;w(new oe(ge,X.node,R,null,D))},w=function(E){h?(h.left=E,h=E):(_=E,h=E)};for(let E=0;E<c.count;++E){const R=c.nextBitIsOne(),T=Math.pow(2,c.count-(E+1));R?m(T,oe.BLACK):(m(T,oe.BLACK),m(T,oe.RED))}return _},a=new zd(n.length),l=s(a);return new Ie(i||e,l)};/**
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
 */let is;const _n={};class rt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return C(_n&&ne,"ChildrenNode.ts has not been loaded"),is=is||new rt({".priority":_n},{".priority":ne}),is}get(e){const t=ln(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ie?t:null}hasIndex(e){return Ze(this.indexSet_,e.toString())}addIndex(e,t){C(e!==pn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(M.Wrap);let a=s.getNext();for(;a;)r=r||e.isDefinedOn(a.node),i.push(a),a=s.getNext();let l;r?l=Li(i,e.getCompare()):l=_n;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const _=Object.assign({},this.indexes_);return _[c]=l,new rt(_,h)}addToIndexes(e,t){const i=xi(this.indexes_,(r,s)=>{const a=ln(this.indexSet_,s);if(C(a,"Missing index implementation for "+s),r===_n)if(a.isDefinedOn(e.node)){const l=[],c=t.getIterator(M.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&l.push(h),h=c.getNext();return l.push(e),Li(l,a.getCompare())}else return _n;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new M(e.name,l))),c.insert(e,e.node)}});return new rt(i,this.indexSet_)}removeFromIndexes(e,t){const i=xi(this.indexes_,r=>{if(r===_n)return r;{const s=t.get(e.name);return s?r.remove(new M(e.name,s)):r}});return new rt(i,this.indexSet_)}}/**
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
 */let jn;class N{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Oa(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jn||(jn=new N(new Ie(ts),null,rt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jn}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?jn:t}}getChild(e){const t=L(e);return t===null?this:this.getImmediateChild(t).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new M(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const a=r.isEmpty()?jn:this.priorityNode_;return new N(r,a,s)}}updateChild(e,t){const i=L(e);if(i===null)return t;{C(L(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(K(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(ne,(a,l)=>{t[a]=l.val(e),i++,s&&N.INTEGER_REGEXP_.test(a)?r=Math.max(r,Number(a)):s=!1}),!e&&s&&r<2*i){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ma(this.getPriority().val())+":"),this.forEachChild(ne,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Jo(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new M(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,M.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kn?-1:0}withIndex(e){if(e===pn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===pn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ne),r=t.getIterator(ne);let s=i.getNext(),a=r.getNext();for(;s&&a;){if(s.name!==a.name||!s.node.equals(a.node))return!1;s=i.getNext(),a=r.getNext()}return s===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===pn?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jd extends N{constructor(){super(new Ie(ts),N.EMPTY_NODE,rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Kn=new jd;Object.defineProperties(M,{MIN:{value:new M(hn,N.EMPTY_NODE)},MAX:{value:new M(Lt,Kn)}});ka.__EMPTY_NODE=N.EMPTY_NODE;ae.__childrenNodeConstructor=N;Yd(Kn);qd(Kn);/**
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
 */const Kd=!0;function de(n,e=null){if(n===null)return N.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ae(t,de(e))}if(!(n instanceof Array)&&Kd){const t=[];let i=!1;if(he(n,(a,l)=>{if(a.substring(0,1)!=="."){const c=de(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new M(a,c)))}}),t.length===0)return N.EMPTY_NODE;const s=Li(t,Bd,a=>a.name,ts);if(i){const a=Li(t,ne.getCompare());return new N(s,de(e),new rt({".priority":a},{".priority":ne}))}else return new N(s,de(e),rt.Default)}else{let t=N.EMPTY_NODE;return he(n,(i,r)=>{if(Ze(n,i)&&i.substring(0,1)!=="."){const s=de(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(de(e))}}Vd(de);/**
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
 */class Qd extends Mi{constructor(e){super();this.indexPath_=e,C(!W(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Wt(e.name,t.name):s}makePost(e,t){const i=de(e),r=N.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(t,r)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Kn);return new M(Lt,e)}toString(){return $n(this.indexPath_,0).join("/")}}/**
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
 */class Zd extends Mi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Wt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const i=de(e);return new M(t,i)}toString(){return".value"}}const Xd=new Zd;/**
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
 */function Ua(n){return{type:"value",snapshotNode:n}}function mn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Qn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Zn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Jd(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class rs{constructor(e){this.index_=e}updateChild(e,t,i,r,s,a){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(Qn(t,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?a.trackChildChange(mn(t,i)):a.trackChildChange(Zn(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ne,(r,s)=>{t.hasChild(r)||i.trackChildChange(Qn(r,s))}),t.isLeafNode()||t.forEachChild(ne,(r,s)=>{if(e.hasChild(r)){const a=e.getImmediateChild(r);a.equals(s)||i.trackChildChange(Zn(r,s,a))}else i.trackChildChange(mn(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Xn{constructor(e){this.indexedFilter_=new rs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xn.getStartPost_(e),this.endPost_=Xn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,r,s,a){return this.matches(new M(t,i))||(i=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=N.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(N.EMPTY_NODE);const s=this;return t.forEachChild(ne,(a,l)=>{s.matches(new M(a,l))||(r=r.updateImmediateChild(a,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ef{constructor(e){this.rangedFilter_=new Xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,r,s,a){return this.rangedFilter_.matches(new M(t,i))||(i=N.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,a):this.fullLimitUpdateChild_(e,t,i,s,a)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=N.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;s.hasNext()&&a<this.limit_;){const l=s.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:c=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,c)r=r.updateImmediateChild(l.name,l.node),a++;else break}}else{r=t.withIndex(this.index_),r=r.updatePriority(N.EMPTY_NODE);let s,a,l,c;if(this.reverse_){c=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),a=this.rangedFilter_.getStartPost();const p=this.index_.getCompare();l=(m,w)=>p(w,m)}else c=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),a=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let h=0,_=!1;for(;c.hasNext();){const p=c.getNext();!_&&l(s,p)<=0&&(_=!0),_&&h<this.limit_&&l(p,a)<=0?h++:r=r.updateImmediateChild(p.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let a;if(this.reverse_){const p=this.index_.getCompare();a=(m,w)=>p(w,m)}else a=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const c=new M(t,i),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),_=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let m=r.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===t||l.hasChild(m.name));)m=r.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:a(m,c);if(_&&!i.isEmpty()&&w>=0)return s!=null&&s.trackChildChange(Zn(t,i,p)),l.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(Qn(t,p));const R=l.updateImmediateChild(t,N.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(mn(m.name,m.node)),R.updateImmediateChild(m.name,m.node)):R}}else return i.isEmpty()?e:_&&a(h,c)>=0?(s!=null&&(s.trackChildChange(Qn(h.name,h.node)),s.trackChildChange(mn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(h.name,N.EMPTY_NODE)):e}}/**
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
 */class ss{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Lt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new ss;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tf(n){return n.loadsAllData()?new rs(n.getIndex()):n.hasLimit()?new ef(n):new Xn(n)}function Ha(n){const e={};if(n.isDefault())return e;let t;return n.index_===ne?t="$priority":n.index_===Xd?t="$value":n.index_===pn?t="$key":(C(n.index_ instanceof Qd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=se(t),n.startSet_&&(e.startAt=se(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+se(n.indexStartName_))),n.endSet_&&(e.endAt=se(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+se(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ba(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ne&&(e.i=n.index_.toString()),e}/**
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
 */class Wi extends Ia{constructor(e,t,i,r){super();this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Vn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const a=Wi.getListenId_(e,i),l={};this.listens_[a]=l;const c=Ha(e._queryParams);this.restRequest_(s+".json",c,(h,_)=>{let p=_;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(s,p,!1,i),ln(this.listens_,a)===l){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",r(m,null)}})}unlisten(e,t){const i=Wi.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ha(e._queryParams),i=e._path.toString(),r=new Si;return this.restRequest_(i+".json",t,(s,a)=>{let l=a;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$u(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Bn(l.responseText)}catch{be("Failed to parse JSON response for "+a+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+a+" Status: "+l.status),i(l.status);i=null}},l.open("GET",a,!0),l.send()})}}/**
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
 */class nf{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ui(){return{value:null,children:new Map}}function Ya(n,e,t){if(W(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=L(e);n.children.has(i)||n.children.set(i,Ui());const r=n.children.get(i);e=K(e),Ya(r,e,t)}}function os(n,e,t){n.value!==null?t(e,n.value):rf(n,(i,r)=>{const s=new $(e.toString()+"/"+i);os(r,s,t)})}function rf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class sf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&he(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const Va=10*1e3,of=30*1e3,af=5*60*1e3;class lf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sf(e);const i=Va+(of-Va)*Math.random();Gn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;he(e,(r,s)=>{s>0&&Ze(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),Gn(this.reportStats_.bind(this),Math.floor(Math.random()*2*af))}}/**
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
 */var Ue;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ue||(Ue={}));function as(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ls(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Hi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ue.ACK_USER_WRITE,this.source=as()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $(e));return new Hi(B(),t,this.revert)}}else return C(L(this.path)===e,"operationForChild called for unrelated child."),new Hi(K(this.path),this.affectedTree,this.revert)}}/**
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
 */class Jn{constructor(e,t){this.source=e,this.path=t,this.type=Ue.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Jn(this.source,B()):new Jn(this.source,K(this.path))}}/**
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
 */class Ht{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ue.OVERWRITE}operationForChild(e){return W(this.path)?new Ht(this.source,B(),this.snap.getImmediateChild(e)):new Ht(this.source,K(this.path),this.snap)}}/**
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
 */class gn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ue.MERGE}operationForChild(e){if(W(this.path)){const t=this.children.subtree(new $(e));return t.isEmpty()?null:t.value?new Ht(this.source,B(),t.value):new gn(this.source,B(),t)}else return C(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gn(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const t=L(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class cf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uf(n,e,t,i){const r=[],s=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&s.push(Jd(a.childName,a.snapshotNode))}),ei(n,r,"child_removed",e,i,t),ei(n,r,"child_added",e,i,t),ei(n,r,"child_moved",s,i,t),ei(n,r,"child_changed",e,i,t),ei(n,r,"value",e,i,t),r}function ei(n,e,t,i,r,s){const a=i.filter(l=>l.type===t);a.sort((l,c)=>df(n,l,c)),a.forEach(l=>{const c=hf(n,l,s);r.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(c,n.query_))})})}function hf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function df(n,e,t){if(e.childName==null||t.childName==null)throw an("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),r=new M(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function Bi(n,e){return{eventCache:n,serverCache:e}}function ti(n,e,t,i){return Bi(new Bt(e,t,i),n.serverCache)}function qa(n,e,t,i){return Bi(n.eventCache,new Bt(e,t,i))}function us(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Yt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let hs;const ff=()=>(hs||(hs=new Ie(zh)),hs);class Q{constructor(e,t=ff()){this.value=e,this.children=t}static fromObject(e){let t=new Q(null);return he(e,(i,r)=>{t=t.set(new $(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:B(),value:this.value};if(W(e))return null;{const i=L(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(K(e),t);return s!=null?{path:te(new $(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const t=L(e),i=this.children.get(t);return i!==null?i.subtree(K(e)):new Q(null)}}set(e,t){if(W(e))return new Q(t,this.children);{const i=L(e),s=(this.children.get(i)||new Q(null)).set(K(e),t),a=this.children.insert(i,s);return new Q(this.value,a)}}remove(e){if(W(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const t=L(e),i=this.children.get(t);if(i){const r=i.remove(K(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const t=L(e),i=this.children.get(t);return i?i.get(K(e)):null}}setTree(e,t){if(W(e))return t;{const i=L(e),s=(this.children.get(i)||new Q(null)).setTree(K(e),t);let a;return s.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,s),new Q(this.value,a)}}fold(e){return this.fold_(B(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(te(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,B(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(W(e))return null;{const s=L(e),a=this.children.get(s);return a?a.findOnPath_(K(e),te(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,B(),t)}foreachOnPath_(e,t,i){if(W(e))return this;{this.value&&i(t,this.value);const r=L(e),s=this.children.get(r);return s?s.foreachOnPath_(K(e),te(t,r),i):new Q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(te(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class He{constructor(e){this.writeTree_=e}static empty(){return new He(new Q(null))}}function ni(n,e,t){if(W(e))return new He(new Q(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const a=Te(r,e);return s=s.updateChild(a,t),new He(n.writeTree_.set(r,s))}else{const r=new Q(t),s=n.writeTree_.setTree(e,r);return new He(s)}}}function ds(n,e,t){let i=n;return he(t,(r,s)=>{i=ni(i,te(e,r),s)}),i}function Ga(n,e){if(W(e))return He.empty();{const t=n.writeTree_.setTree(e,new Q(null));return new He(t)}}function fs(n,e){return Vt(n,e)!=null}function Vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Te(t.path,e)):null}function $a(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ne,(i,r)=>{e.push(new M(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new M(i,r.value))}),e}function yt(n,e){if(W(e))return n;{const t=Vt(n,e);return t!=null?new He(new Q(t)):new He(n.writeTree_.subtree(e))}}function ps(n){return n.writeTree_.isEmpty()}function vn(n,e){return za(B(),n.writeTree_,e)}function za(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=za(te(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(te(n,".priority"),i)),t}}/**
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
 */function _s(n,e){return Xa(e,n)}function pf(n,e,t,i,r){C(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=ni(n.visibleWrites,e,t)),n.lastWriteId=i}function _f(n,e,t,i){C(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=ds(n.visibleWrites,e,t),n.lastWriteId=i}function mf(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function gf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,a=n.allWrites.length-1;for(;r&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&vf(l,i.path)?r=!1:ke(i.path,l.path)&&(s=!0)),a--}if(r){if(s)return yf(n),!0;if(i.snap)n.visibleWrites=Ga(n.visibleWrites,i.path);else{const l=i.children;he(l,c=>{n.visibleWrites=Ga(n.visibleWrites,te(i.path,c))})}return!0}else return!1}function vf(n,e){if(n.snap)return ke(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ke(te(n.path,t),e))return!0;return!1}function yf(n){n.visibleWrites=ja(n.allWrites,Cf,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Cf(n){return n.visible}function ja(n,e,t){let i=He.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const a=s.path;let l;if(s.snap)ke(t,a)?(l=Te(t,a),i=ni(i,l,s.snap)):ke(a,t)&&(l=Te(a,t),i=ni(i,B(),s.snap.getChild(l)));else if(s.children){if(ke(t,a))l=Te(t,a),i=ds(i,l,s.children);else if(ke(a,t))if(l=Te(a,t),W(l))i=ds(i,B(),s.children);else{const c=ln(s.children,L(l));if(c){const h=c.getChild(K(l));i=ni(i,B(),h)}}}else throw an("WriteRecord should have .snap or .children")}}return i}function Ka(n,e,t,i,r){if(!i&&!r){const s=Vt(n.visibleWrites,e);if(s!=null)return s;{const a=yt(n.visibleWrites,e);if(ps(a))return t;if(t==null&&!fs(a,B()))return null;{const l=t||N.EMPTY_NODE;return vn(a,l)}}}else{const s=yt(n.visibleWrites,e);if(!r&&ps(s))return t;if(!r&&t==null&&!fs(s,B()))return null;{const a=function(h){return(h.visible||r)&&(!i||!~i.indexOf(h.writeId))&&(ke(h.path,e)||ke(e,h.path))},l=ja(n.allWrites,a,e),c=t||N.EMPTY_NODE;return vn(l,c)}}}function wf(n,e,t){let i=N.EMPTY_NODE;const r=Vt(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ne,(s,a)=>{i=i.updateImmediateChild(s,a)}),i;if(t){const s=yt(n.visibleWrites,e);return t.forEachChild(ne,(a,l)=>{const c=vn(yt(s,new $(a)),l);i=i.updateImmediateChild(a,c)}),$a(s).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const s=yt(n.visibleWrites,e);return $a(s).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function Ef(n,e,t,i,r){C(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,t);if(fs(n.visibleWrites,s))return null;{const a=yt(n.visibleWrites,s);return ps(a)?r.getChild(t):vn(a,r.getChild(t))}}function bf(n,e,t,i){const r=te(e,t),s=Vt(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const a=yt(n.visibleWrites,r);return vn(a,i.getNode().getImmediateChild(t))}else return null}function Tf(n,e){return Vt(n.visibleWrites,e)}function If(n,e,t,i,r,s,a){let l;const c=yt(n.visibleWrites,e),h=Vt(c,B());if(h!=null)l=h;else if(t!=null)l=vn(c,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const _=[],p=a.getCompare(),m=s?l.getReverseIteratorFrom(i,a):l.getIteratorFrom(i,a);let w=m.getNext();for(;w&&_.length<r;)p(w,i)!==0&&_.push(w),w=m.getNext();return _}else return[]}function Sf(){return{visibleWrites:He.empty(),allWrites:[],lastWriteId:-1}}function Yi(n,e,t,i){return Ka(n.writeTree,n.treePath,e,t,i)}function ms(n,e){return wf(n.writeTree,n.treePath,e)}function Qa(n,e,t,i){return Ef(n.writeTree,n.treePath,e,t,i)}function Vi(n,e){return Tf(n.writeTree,te(n.treePath,e))}function xf(n,e,t,i,r,s){return If(n.writeTree,n.treePath,e,t,i,r,s)}function gs(n,e,t){return bf(n.writeTree,n.treePath,e,t)}function Za(n,e){return Xa(te(n.treePath,e),n.writeTree)}function Xa(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Nf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,Zn(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,Qn(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,mn(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,Zn(i,e.snapshotNode,r.oldSnap));else throw an("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Rf{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Ja=new Rf;class vs{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yt(this.viewCache_),s=xf(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function Df(n){return{filter:n}}function Pf(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Af(n,e,t,i,r){const s=new Nf;let a,l;if(t.type===Ue.OVERWRITE){const h=t;h.source.fromUser?a=ys(n,e,h.path,h.snap,i,r,s):(C(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!W(h.path),a=qi(n,e,h.path,h.snap,i,r,l,s))}else if(t.type===Ue.MERGE){const h=t;h.source.fromUser?a=Mf(n,e,h.path,h.children,i,r,s):(C(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=Cs(n,e,h.path,h.children,i,r,l,s))}else if(t.type===Ue.ACK_USER_WRITE){const h=t;h.revert?a=Lf(n,e,h.path,i,r,s):a=Of(n,e,h.path,h.affectedTree,i,r,s)}else if(t.type===Ue.LISTEN_COMPLETE)a=Ff(n,e,t.path,i,s);else throw an("Unknown operation type: "+t.type);const c=s.getChanges();return kf(e,a,c),{viewCache:a,changes:c}}function kf(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=us(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Ua(us(e)))}}function el(n,e,t,i,r,s){const a=e.eventCache;if(Vi(i,t)!=null)return e;{let l,c;if(W(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Yt(e),_=h instanceof N?h:N.EMPTY_NODE,p=ms(i,_);l=n.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const h=Yi(i,Yt(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=L(t);if(h===".priority"){C(vt(t)===1,"Can't have a priority with additional path components");const _=a.getNode();c=e.serverCache.getNode();const p=Qa(i,t,_,c);p!=null?l=n.filter.updatePriority(_,p):l=a.getNode()}else{const _=K(t);let p;if(a.isCompleteForChild(h)){c=e.serverCache.getNode();const m=Qa(i,t,a.getNode(),c);m!=null?p=a.getNode().getImmediateChild(h).updateChild(_,m):p=a.getNode().getImmediateChild(h)}else p=gs(i,h,e.serverCache);p!=null?l=n.filter.updateChild(a.getNode(),h,p,_,r,s):l=a.getNode()}}return ti(e,l,a.isFullyInitialized()||W(t),n.filter.filtersNodes())}}function qi(n,e,t,i,r,s,a,l){const c=e.serverCache;let h;const _=a?n.filter:n.filter.getIndexedFilter();if(W(t))h=_.updateFullNode(c.getNode(),i,null);else if(_.filtersNodes()&&!c.isFiltered()){const w=c.getNode().updateChild(t,i);h=_.updateFullNode(c.getNode(),w,null)}else{const w=L(t);if(!c.isCompleteForPath(t)&&vt(t)>1)return e;const E=K(t),T=c.getNode().getImmediateChild(w).updateChild(E,i);w===".priority"?h=_.updatePriority(c.getNode(),T):h=_.updateChild(c.getNode(),w,T,E,Ja,null)}const p=qa(e,h,c.isFullyInitialized()||W(t),_.filtersNodes()),m=new vs(r,p,s);return el(n,p,t,r,m,l)}function ys(n,e,t,i,r,s,a){const l=e.eventCache;let c,h;const _=new vs(r,e,s);if(W(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,a),c=ti(e,h,!0,n.filter.filtersNodes());else{const p=L(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),c=ti(e,h,l.isFullyInitialized(),l.isFiltered());else{const m=K(t),w=l.getNode().getImmediateChild(p);let E;if(W(m))E=i;else{const R=_.getCompleteChild(p);R!=null?Xr(m)===".priority"&&R.getChild(Ra(m)).isEmpty()?E=R:E=R.updateChild(m,i):E=N.EMPTY_NODE}if(w.equals(E))c=e;else{const R=n.filter.updateChild(l.getNode(),p,E,m,_,a);c=ti(e,R,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function tl(n,e){return n.eventCache.isCompleteForChild(e)}function Mf(n,e,t,i,r,s,a){let l=e;return i.foreach((c,h)=>{const _=te(t,c);tl(e,L(_))&&(l=ys(n,l,_,h,r,s,a))}),i.foreach((c,h)=>{const _=te(t,c);tl(e,L(_))||(l=ys(n,l,_,h,r,s,a))}),l}function nl(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Cs(n,e,t,i,r,s,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;W(t)?h=i:h=new Q(null).setTree(t,i);const _=e.serverCache.getNode();return h.children.inorderTraversal((p,m)=>{if(_.hasChild(p)){const w=e.serverCache.getNode().getImmediateChild(p),E=nl(n,w,m);c=qi(n,c,new $(p),E,r,s,a,l)}}),h.children.inorderTraversal((p,m)=>{const w=!e.serverCache.isCompleteForChild(p)&&m.value===void 0;if(!_.hasChild(p)&&!w){const E=e.serverCache.getNode().getImmediateChild(p),R=nl(n,E,m);c=qi(n,c,new $(p),R,r,s,a,l)}}),c}function Of(n,e,t,i,r,s,a){if(Vi(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(W(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return qi(n,e,t,c.getNode().getChild(t),r,s,l,a);if(W(t)){let h=new Q(null);return c.getNode().forEachChild(pn,(_,p)=>{h=h.set(new $(_),p)}),Cs(n,e,t,h,r,s,l,a)}else return e}else{let h=new Q(null);return i.foreach((_,p)=>{const m=te(t,_);c.isCompleteForPath(m)&&(h=h.set(_,c.getNode().getChild(m)))}),Cs(n,e,t,h,r,s,l,a)}}function Ff(n,e,t,i,r){const s=e.serverCache,a=qa(e,s.getNode(),s.isFullyInitialized()||W(t),s.isFiltered());return el(n,a,t,i,Ja,r)}function Lf(n,e,t,i,r,s){let a;if(Vi(i,t)!=null)return e;{const l=new vs(i,e,r),c=e.eventCache.getNode();let h;if(W(t)||L(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=Yi(i,Yt(e));else{const p=e.serverCache.getNode();C(p instanceof N,"serverChildren would be complete if leaf node"),_=ms(i,p)}_=_,h=n.filter.updateFullNode(c,_,s)}else{const _=L(t);let p=gs(i,_,e.serverCache);p==null&&e.serverCache.isCompleteForChild(_)&&(p=c.getImmediateChild(_)),p!=null?h=n.filter.updateChild(c,_,p,K(t),l,s):e.eventCache.getNode().hasChild(_)?h=n.filter.updateChild(c,_,N.EMPTY_NODE,K(t),l,s):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Yi(i,Yt(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,s)))}return a=e.serverCache.isFullyInitialized()||Vi(i,B())!=null,ti(e,h,a,n.filter.filtersNodes())}}/**
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
 */class Wf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new rs(i.getIndex()),s=tf(i);this.processor_=Df(s);const a=t.serverCache,l=t.eventCache,c=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),h=s.updateFullNode(N.EMPTY_NODE,l.getNode(),null),_=new Bt(c,a.isFullyInitialized(),r.filtersNodes()),p=new Bt(h,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bi(p,_),this.eventGenerator_=new cf(this.query_)}get query(){return this.query_}}function Uf(n){return n.viewCache_.serverCache.getNode()}function Hf(n,e){const t=Yt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!W(e)&&!t.getImmediateChild(L(e)).isEmpty())?t.getChild(e):null}function il(n){return n.eventRegistrations_.length===0}function Bf(n,e){n.eventRegistrations_.push(e)}function rl(n,e,t){const i=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const a=s.createCancelEvent(t,r);a&&i.push(a)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const a=n.eventRegistrations_[s];if(!a.matches(e))r.push(a);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function sl(n,e,t,i){e.type===Ue.MERGE&&e.source.queryId!==null&&(C(Yt(n.viewCache_),"We should always have a full cache before handling merges"),C(us(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=Af(n.processor_,r,e,t,i);return Pf(n.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,ol(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Yf(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ne,(s,a)=>{i.push(mn(s,a))}),t.isFullyInitialized()&&i.push(Ua(t.getNode())),ol(n,i,t.getNode(),e)}function ol(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return uf(n.eventGenerator_,e,t,r)}/**
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
 */let Gi;class Vf{constructor(){this.views=new Map}}function qf(n){C(!Gi,"__referenceConstructor has already been defined"),Gi=n}function Gf(){return C(Gi,"Reference.ts has not been loaded"),Gi}function $f(n){return n.views.size===0}function ws(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return C(s!=null,"SyncTree gave us an op for an invalid query."),sl(s,e,t,i)}else{let s=[];for(const a of n.views.values())s=s.concat(sl(a,e,t,i));return s}}function zf(n,e,t,i,r){const s=e._queryIdentifier,a=n.views.get(s);if(!a){let l=Yi(t,r?i:null),c=!1;l?c=!0:i instanceof N?(l=ms(t,i),c=!1):(l=N.EMPTY_NODE,c=!1);const h=Bi(new Bt(l,c,!1),new Bt(i,r,!1));return new Wf(e,h)}return a}function jf(n,e,t,i,r,s){const a=zf(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),Bf(a,t),Yf(a,t)}function Kf(n,e,t,i){const r=e._queryIdentifier,s=[];let a=[];const l=Ct(n);if(r==="default")for(const[c,h]of n.views.entries())a=a.concat(rl(h,t,i)),il(h)&&(n.views.delete(c),h.query._queryParams.loadsAllData()||s.push(h.query));else{const c=n.views.get(r);c&&(a=a.concat(rl(c,t,i)),il(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return l&&!Ct(n)&&s.push(new(Gf())(e._repo,e._path)),{removed:s,events:a}}function al(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function yn(n,e){let t=null;for(const i of n.views.values())t=t||Hf(i,e);return t}function ll(n,e){if(e._queryParams.loadsAllData())return $i(n);{const i=e._queryIdentifier;return n.views.get(i)}}function cl(n,e){return ll(n,e)!=null}function Ct(n){return $i(n)!=null}function $i(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let zi;function Qf(n){C(!zi,"__referenceConstructor has already been defined"),zi=n}function Zf(){return C(zi,"Reference.ts has not been loaded"),zi}let Xf=1;class ul{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=Sf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Jf(n,e,t,i,r){return pf(n.pendingWriteTree_,e,t,i,r),r?Cn(n,new Ht(as(),e,t)):[]}function ep(n,e,t,i){_f(n.pendingWriteTree_,e,t,i);const r=Q.fromObject(t);return Cn(n,new gn(as(),e,r))}function qt(n,e,t=!1){const i=mf(n.pendingWriteTree_,e);if(gf(n.pendingWriteTree_,e)){let s=new Q(null);return i.snap!=null?s=s.set(B(),!0):he(i.children,a=>{s=s.set(new $(a),!0)}),Cn(n,new Hi(i.path,s,t))}else return[]}function ji(n,e,t){return Cn(n,new Ht(ls(),e,t))}function tp(n,e,t){const i=Q.fromObject(t);return Cn(n,new gn(ls(),e,i))}function np(n,e){return Cn(n,new Jn(ls(),e))}function ip(n,e,t){const i=bs(n,t);if(i){const r=Ts(i),s=r.path,a=r.queryId,l=Te(s,e),c=new Jn(cs(a),l);return Is(n,s,c)}else return[]}function Es(n,e,t,i){const r=e._path,s=n.syncPointTree_.get(r);let a=[];if(s&&(e._queryIdentifier==="default"||cl(s,e))){const l=Kf(s,e,t,i);$f(s)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;a=l.events;const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(r,(p,m)=>Ct(m));if(h&&!_){const p=n.syncPointTree_.subtree(r);if(!p.isEmpty()){const m=op(p);for(let w=0;w<m.length;++w){const E=m[w],R=E.query,T=_l(n,E);n.listenProvider_.startListening(ii(R),Ki(n,R),T.hashFn,T.onComplete)}}}if(!_&&c.length>0&&!i)if(h){const p=null;n.listenProvider_.stopListening(ii(e),p)}else c.forEach(p=>{const m=n.queryToTagMap.get(Qi(p));n.listenProvider_.stopListening(ii(p),m)});ap(n,c)}return a}function rp(n,e,t,i){const r=bs(n,i);if(r!=null){const s=Ts(r),a=s.path,l=s.queryId,c=Te(a,e),h=new Ht(cs(l),c,t);return Is(n,a,h)}else return[]}function sp(n,e,t,i){const r=bs(n,i);if(r){const s=Ts(r),a=s.path,l=s.queryId,c=Te(a,e),h=Q.fromObject(t),_=new gn(cs(l),c,h);return Is(n,a,_)}else return[]}function hl(n,e,t){const i=e._path;let r=null,s=!1;n.syncPointTree_.foreachOnPath(i,(p,m)=>{const w=Te(p,i);r=r||yn(m,w),s=s||Ct(m)});let a=n.syncPointTree_.get(i);a?(s=s||Ct(a),r=r||yn(a,B())):(a=new Vf,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=N.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,w)=>{const E=yn(w,B());E&&(r=r.updateImmediateChild(m,E))}));const c=cl(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Qi(e);C(!n.queryToTagMap.has(p),"View does not exist, but we have a tag");const m=lp();n.queryToTagMap.set(p,m),n.tagToQueryMap.set(m,p)}const h=_s(n.pendingWriteTree_,i);let _=jf(a,e,t,h,r,l);if(!c&&!s){const p=ll(a,e);_=_.concat(cp(n,e,p))}return _}function dl(n,e,t){const i=!0,r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(a,l)=>{const c=Te(a,e),h=yn(l,c);if(h)return h});return Ka(r,e,s,t,i)}function Cn(n,e){return fl(e,n.syncPointTree_,null,_s(n.pendingWriteTree_,B()))}function fl(n,e,t,i){if(W(n.path))return pl(n,e,t,i);{const r=e.get(B());t==null&&r!=null&&(t=yn(r,B()));let s=[];const a=L(n.path),l=n.operationForChild(a),c=e.children.get(a);if(c&&l){const h=t?t.getImmediateChild(a):null,_=Za(i,a);s=s.concat(fl(l,c,h,_))}return r&&(s=s.concat(ws(r,n,i,t))),s}}function pl(n,e,t,i){const r=e.get(B());t==null&&r!=null&&(t=yn(r,B()));let s=[];return e.children.inorderTraversal((a,l)=>{const c=t?t.getImmediateChild(a):null,h=Za(i,a),_=n.operationForChild(a);_&&(s=s.concat(pl(_,l,c,h)))}),r&&(s=s.concat(ws(r,n,i,t))),s}function _l(n,e){const t=e.query,i=Ki(n,t);return{hashFn:()=>(Uf(e)||N.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?ip(n,t._path,i):np(n,t._path);{const s=Qh(r,t);return Es(n,t,null,s)}}}}function Ki(n,e){const t=Qi(e);return n.queryToTagMap.get(t)}function Qi(n){return n._path.toString()+"$"+n._queryIdentifier}function bs(n,e){return n.tagToQueryMap.get(e)}function Ts(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new $(n.substr(0,e))}}function Is(n,e,t){const i=n.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const r=_s(n.pendingWriteTree_,e);return ws(i,t,r,null)}function op(n){return n.fold((e,t,i)=>{if(t&&Ct(t))return[$i(t)];{let r=[];return t&&(r=al(t)),he(i,(s,a)=>{r=r.concat(a)}),r}})}function ii(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Zf())(n._repo,n._path):n}function ap(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=Qi(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function lp(){return Xf++}function cp(n,e,t){const i=e._path,r=Ki(n,e),s=_l(n,t),a=n.listenProvider_.startListening(ii(e),r,s.hashFn,s.onComplete),l=n.syncPointTree_.subtree(i);if(r)C(!Ct(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((h,_,p)=>{if(!W(h)&&_&&Ct(_))return[$i(_).query];{let m=[];return _&&(m=m.concat(al(_).map(w=>w.query))),he(p,(w,E)=>{m=m.concat(E)}),m}});for(let h=0;h<c.length;++h){const _=c[h];n.listenProvider_.stopListening(ii(_),Ki(n,_))}}return a}/**
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
 */class Ss{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ss(t)}node(){return this.node_}}class xs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=te(this.path_,e);return new xs(this.syncTree_,t)}node(){return dl(this.syncTree_,this.path_)}}const up=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ml=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return hp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return dp(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},hp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},dp=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const r=e.node();if(C(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const a=r.getValue();return typeof a!="number"?i:a+i},gl=function(n,e,t,i){return Ns(e,new xs(t,n),i)},fp=function(n,e,t){return Ns(n,new Ss(e),t)};function Ns(n,e,t){const i=n.getPriority().val(),r=ml(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const a=n,l=ml(a.getValue(),e,t);return l!==a.getValue()||r!==a.getPriority().val()?new ae(l,de(r)):n}else{const a=n;return s=a,r!==a.getPriority().val()&&(s=s.updatePriority(new ae(r))),a.forEachChild(ne,(l,c)=>{const h=Ns(c,e.getImmediateChild(l),t);h!==c&&(s=s.updateImmediateChild(l,h))}),s}}/**
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
 */class Rs{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Ds(n,e){let t=e instanceof $?e:new $(e),i=n,r=L(t);for(;r!==null;){const s=ln(i.node.children,r)||{children:{},childCount:0};i=new Rs(r,i,s),t=K(t),r=L(t)}return i}function wn(n){return n.node.value}function vl(n,e){n.node.value=e,Ps(n)}function yl(n){return n.node.childCount>0}function pp(n){return wn(n)===void 0&&!yl(n)}function Zi(n,e){he(n.node.children,(t,i)=>{e(new Rs(t,n,i))})}function Cl(n,e,t,i){t&&!i&&e(n),Zi(n,r=>{Cl(r,e,!0,i)}),t&&i&&e(n)}function _p(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ri(n){return new $(n.parent===null?n.name:ri(n.parent)+"/"+n.name)}function Ps(n){n.parent!==null&&mp(n.parent,n.name,n)}function mp(n,e,t){const i=pp(t),r=Ze(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,Ps(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,Ps(n))}/**
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
 */const gp=/[\[\].#$\/\u0000-\u001F\u007F]/,vp=/[\[\].#$\u0000-\u001F\u007F]/,As=10*1024*1024,ks=function(n){return typeof n=="string"&&n.length!==0&&!gp.test(n)},wl=function(n){return typeof n=="string"&&n.length!==0&&!vp.test(n)},yp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wl(n)},Cp=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Br(n)||n&&typeof n=="object"&&Ze(n,".sv")},Ms=function(n,e,t){const i=t instanceof $?new Ad(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ut(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ut(i)+" with contents = "+e.toString());if(Br(e))throw new Error(n+"contains "+e.toString()+" "+Ut(i));if(typeof e=="string"&&e.length>As/3&&Ni(e)>As)throw new Error(n+"contains a string greater than "+As+" utf8 bytes "+Ut(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(he(e,(a,l)=>{if(a===".value")r=!0;else if(a!==".priority"&&a!==".sv"&&(s=!0,!ks(a)))throw new Error(n+" contains an invalid key ("+a+") "+Ut(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kd(i,a),Ms(n,l,i),Md(i)}),r&&s)throw new Error(n+' contains ".value" child '+Ut(i)+" in addition to actual children.")}},wp=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const s=$n(i);for(let a=0;a<s.length;a++)if(!(s[a]===".priority"&&a===s.length-1)){if(!ks(s[a]))throw new Error(n+"contains an invalid key ("+s[a]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Pd);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&ke(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Ep=function(n,e,t,i){if(i&&e===void 0)return;const r=kr(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];he(e,(a,l)=>{const c=new $(a);if(Ms(r,l,te(t,c)),Xr(c)===".priority"&&!Cp(l))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),wp(r,s)},El=function(n,e,t,i){if(!(i&&t===void 0)&&!wl(t))throw new Error(kr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),El(n,e,t,i)},Tp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ks(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!yp(t))throw new Error(kr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ip{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Os(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Jr(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function bl(n,e,t){Os(n,t),Tl(n,i=>Jr(i,e))}function st(n,e,t){Os(n,t),Tl(n,i=>ke(i,e)||ke(e,i))}function Tl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(Sp(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Sp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ot&&ue("event: "+t.toString()),dn(i)}}}/**
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
 */const xp="repo_interrupt",Np=25;class Rp{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ip,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ui(),this.transactionQueueTree_=new Rs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dp(n,e,t){if(n.stats_=jr(n.repoInfo_),n.forceRestClient_||ed())n.server_=new Wi(n.repoInfo_,(i,r,s,a)=>{Il(n,i,r,s,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Sl(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new it(n.repoInfo_,e,(i,r,s,a)=>{Il(n,i,r,s,a)},i=>{Sl(n,i)},i=>{Ap(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=ad(n.repoInfo_,()=>new lf(n.stats_,n.server_)),n.infoData_=new nf,n.infoSyncTree_=new ul({startListening:(i,r,s,a)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=ji(n.infoSyncTree_,i._path,c),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Ls(n,"connected",!1),n.serverSyncTree_=new ul({startListening:(i,r,s,a)=>(n.server_.listen(i,s,r,(l,c)=>{const h=a(l,c);st(n.eventQueue_,i._path,h)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function Pp(n){const t=n.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Fs(n){return up({timestamp:Pp(n)})}function Il(n,e,t,i,r){n.dataUpdateCount++;const s=new $(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(r)if(i){const c=xi(t,h=>de(h));a=sp(n.serverSyncTree_,s,c,r)}else{const c=de(t);a=rp(n.serverSyncTree_,s,c,r)}else if(i){const c=xi(t,h=>de(h));a=tp(n.serverSyncTree_,s,c)}else{const c=de(t);a=ji(n.serverSyncTree_,s,c)}let l=s;a.length>0&&(l=si(n,s)),st(n.eventQueue_,l,a)}function Sl(n,e){Ls(n,"connected",e),e===!1&&Mp(n)}function Ap(n,e){he(e,(t,i)=>{Ls(n,t,i)})}function Ls(n,e,t){const i=new $("/.info/"+e),r=de(t);n.infoData_.updateSnapshot(i,r);const s=ji(n.infoSyncTree_,i,r);st(n.eventQueue_,i,s)}function xl(n){return n.nextWriteId_++}function kp(n,e,t,i){Ws(n,"update",{path:e.toString(),value:t});let r=!0;const s=Fs(n),a={};if(he(t,(l,c)=>{r=!1,a[l]=gl(te(e,l),de(c),n.serverSyncTree_,s)}),r)ue("update() called with empty data.  Don't do anything."),Rl(n,i,"ok",void 0);else{const l=xl(n),c=ep(n.serverSyncTree_,e,a,l);Os(n.eventQueue_,c),n.server_.merge(e.toString(),t,(h,_)=>{const p=h==="ok";p||be("update at "+e+" failed: "+h);const m=qt(n.serverSyncTree_,l,!p),w=m.length>0?si(n,e):e;st(n.eventQueue_,w,m),Rl(n,i,h,_)}),he(t,h=>{const _=Ml(n,te(e,h));si(n,_)}),st(n.eventQueue_,e,[])}}function Mp(n){Ws(n,"onDisconnectEvents");const e=Fs(n),t=Ui();os(n.onDisconnect_,B(),(r,s)=>{const a=gl(r,s,n.serverSyncTree_,e);Ya(t,r,a)});let i=[];os(t,B(),(r,s)=>{i=i.concat(ji(n.serverSyncTree_,r,s));const a=Ml(n,r);si(n,a)}),n.onDisconnect_=Ui(),st(n.eventQueue_,B(),i)}function Op(n,e,t){let i;L(e._path)===".info"?i=hl(n.infoSyncTree_,e,t):i=hl(n.serverSyncTree_,e,t),bl(n.eventQueue_,e._path,i)}function Nl(n,e,t){let i;L(e._path)===".info"?i=Es(n.infoSyncTree_,e,t):i=Es(n.serverSyncTree_,e,t),bl(n.eventQueue_,e._path,i)}function Fp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(xp)}function Ws(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ue(t,...e)}function Rl(n,e,t,i){e&&dn(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const a=new Error(s);a.code=r,e(a)}})}function Dl(n,e,t){return dl(n.serverSyncTree_,e,t)||N.EMPTY_NODE}function Us(n,e=n.transactionQueueTree_){if(e||Xi(n,e),wn(e)){const t=Al(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&Lp(n,ri(e),t)}else yl(e)&&Zi(e,t=>{Us(n,t)})}function Lp(n,e,t){const i=t.map(h=>h.currentWriteId),r=Dl(n,e,i);let s=r;const a=r.hash();for(let h=0;h<t.length;h++){const _=t[h];C(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const p=Te(e,_.path);s=s.updateChild(p,_.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;n.server_.put(c.toString(),l,h=>{Ws(n,"transaction put response",{path:c.toString(),status:h});let _=[];if(h==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,_=_.concat(qt(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Xi(n,Ds(n.transactionQueueTree_,e)),Us(n,n.transactionQueueTree_),st(n.eventQueue_,e,_);for(let m=0;m<p.length;m++)dn(p[m])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{be("transaction at "+c.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}si(n,e)}},a)}function si(n,e){const t=Pl(n,e),i=ri(t),r=Al(n,t);return Wp(n,r,i),i}function Wp(n,e,t){if(e.length===0)return;const i=[];let r=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],h=Te(t,c.path);let _=!1,p;if(C(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)_=!0,p=c.abortReason,r=r.concat(qt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Np)_=!0,p="maxretry",r=r.concat(qt(n.serverSyncTree_,c.currentWriteId,!0));else{const m=Dl(n,c.path,a);c.currentInputSnapshot=m;const w=e[l].update(m.val());if(w!==void 0){Ms("transaction failed: Data returned ",w,c.path);let E=de(w);typeof w=="object"&&w!=null&&Ze(w,".priority")||(E=E.updatePriority(m.getPriority()));const T=c.currentWriteId,q=Fs(n),D=fp(E,m,q);c.currentOutputSnapshotRaw=E,c.currentOutputSnapshotResolved=D,c.currentWriteId=xl(n),a.splice(a.indexOf(T),1),r=r.concat(Jf(n.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),r=r.concat(qt(n.serverSyncTree_,T,!0))}else _=!0,p="nodata",r=r.concat(qt(n.serverSyncTree_,c.currentWriteId,!0))}st(n.eventQueue_,t,r),r=[],_&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}Xi(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)dn(i[l]);Us(n,n.transactionQueueTree_)}function Pl(n,e){let t,i=n.transactionQueueTree_;for(t=L(e);t!==null&&wn(i)===void 0;)i=Ds(i,t),e=K(e),t=L(e);return i}function Al(n,e){const t=[];return kl(n,e,t),t.sort((i,r)=>i.order-r.order),t}function kl(n,e,t){const i=wn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);Zi(e,r=>{kl(n,r,t)})}function Xi(n,e){const t=wn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,vl(e,t.length>0?t:void 0)}Zi(e,i=>{Xi(n,i)})}function Ml(n,e){const t=ri(Pl(n,e)),i=Ds(n.transactionQueueTree_,e);return _p(i,r=>{Hs(n,r)}),Hs(n,i),Cl(i,r=>{Hs(n,r)}),t}function Hs(n,e){const t=wn(e);if(t){const i=[];let r=[],s=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(C(s===a-1,"All SENT items should be at beginning of queue."),s=a,t[a].status=3,t[a].abortReason="set"):(C(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),r=r.concat(qt(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));s===-1?vl(e,void 0):t.length=s+1,st(n.eventQueue_,ri(e),r);for(let a=0;a<i.length;a++)dn(i[a])}}/**
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
 */function Up(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Hp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):be(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ol=function(n,e){const t=Bp(n),i=t.namespace;t.domain==="firebase.com"&&Ft(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Gh();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new rd(t.host,t.secure,i,e,r,"",i!==t.subdomain),path:new $(t.pathString)}},Bp=function(n){let e="",t="",i="",r="",s="",a=!0,l="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let _=n.indexOf("/");_===-1&&(_=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(_,p)),_<p&&(r=Up(n.substring(_,p)));const m=Hp(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const w=e.slice(0,h);if(w.toLowerCase()==="localhost")t="localhost";else if(w.split(".").length<=2)t=w;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),t=e.substring(E+1),s=i}"ns"in m&&(s=m.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:a,scheme:l,pathString:r,namespace:s}};/**
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
 */class Fl{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+se(this.snapshot.exportVal())}}class Ll{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Yp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Bs{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return W(this._path)?null:Xr(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=Ba(this._queryParams),t=Yr(e);return t==="{}"?"default":t}get _queryObject(){return Ba(this._queryParams)}isEqual(e){if(e=Mr(e),!(e instanceof Bs))return!1;const t=this._repo===e._repo,i=Jr(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dd(this._path)}}class ot extends Bs{constructor(e,t){super(e,t,new ss,!1)}get parent(){const e=Ra(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class oi{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new $(e),i=Ji(this.ref,e);return new oi(this._node.getChild(t),i,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new oi(r,Ji(this.ref,i),ne)))}hasChild(e){const t=new $(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function E_(n,e){return n=Mr(n),n._checkNotDeleted("ref"),e!==void 0?Ji(n._root,e):n._root}function Ji(n,e){return n=Mr(n),L(n._path)===null?bp("child","path",e,!1):El("child","path",e,!1),new ot(n._repo,te(n._path,e))}function b_(n,e){Ep("update",e,n._path,!1);const t=new Si;return kp(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Ys{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Fl("value",this,new oi(e.snapshotNode,new ot(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ll(this,e,t):null}matches(e){return e instanceof Ys?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ll(this,e,t):null}createEvent(e,t){C(e.childName!=null,"Child events should have a childName.");const i=Ji(new ot(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Fl(e.type,this,new oi(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Vp(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const c=t,h=(_,p)=>{Nl(n._repo,n,l),c(_,p)};h.userCallback=t.userCallback,h.context=t.context,t=h}const a=new Yp(t,s||void 0),l=e==="value"?new Ys(a):new Vs(e,a);return Op(n._repo,n,l),()=>Nl(n._repo,n,l)}function T_(n,e,t,i){return Vp(n,"value",e,t,i)}qf(ot);Qf(ot);/**
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
 */const qp="FIREBASE_DATABASE_EMULATOR_HOST",qs={};let Gp=!1;function $p(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ue("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=Ol(s,r),l=a.repoInfo,c,h;typeof process!="undefined"&&(h=process.env[qp]),h?(c=!0,s=`http://${h}?ns=${l.namespace}`,a=Ol(s,r),l=a.repoInfo):c=!a.repoInfo.secure;const _=r&&c?new Vr(Vr.OWNER):new nd(n.name,n.options,e);Tp("Invalid Firebase Database URL",a),W(a.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const p=jp(l,n,_,new td(n.name,t));return new Kp(p,n)}function zp(n,e){const t=qs[e];(!t||t[n.key]!==n)&&Ft(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Fp(n),delete t[n.key]}function jp(n,e,t,i){let r=qs[e.name];r||(r={},qs[e.name]=r);let s=r[n.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Rp(n,Gp,t,i),r[n.toURLString()]=s,s}class Kp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function I_(n=Fh(),e){return Ah(n,"database").getImmediate({identifier:e})}/**
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
 */function Qp(n){Hh(Oh),Wr(new Ri("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $p(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),cn(Ko,Qo,n),cn(Ko,Qo,"esm2017")}function S_(n){return{".sv":{increment:n}}}it.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};it.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Qp();export{To as A,h_ as B,yc as C,w_ as D,I_ as E,E_ as F,T_ as G,b_ as H,v_ as I,S_ as J,y_ as P,m_ as S,o_ as a,e_ as b,i_ as c,uc as d,t_ as e,Jp as f,g_ as g,Xp as h,__ as i,d_ as j,wo as k,r_ as l,C_ as m,vo as n,u_ as o,c_ as p,n_ as q,yi as r,Zp as s,hc as t,f_ as u,a_ as v,p_ as w,vc as x,l_ as y,s_ as z};
