(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{INYr:function(n,e,t){"use strict";var r=t("XKFU"),i=t("CkkT")(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),t("nGyu")(o)},OGtf:function(n,e,t){var r=t("XKFU"),i=t("eeVq"),o=t("vhPU"),a=/"/g,u=function(n,e,t,r){var i=String(o(n)),u="<"+e;return""!==t&&(u+=" "+t+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+i+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(u),r(r.P+r.F*i((function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",t)}},Oyvg:function(n,e,t){var r=t("dyZX"),i=t("Xbzi"),o=t("hswa").f,a=t("kJMx").f,u=t("quPj"),c=t("C/va"),d=r.RegExp,f=d,s=d.prototype,l=/a/g,g=/a/g,p=new d(l)!==l;if(t("nh4g")&&(!p||t("eeVq")((function(){return g[t("K0xU")("match")]=!1,d(l)!=l||d(g)==g||"/a/i"!=d(l,"i")})))){d=function(n,e){var t=this instanceof d,r=u(n),o=void 0===e;return!t&&r&&n.constructor===d&&o?n:i(p?new f(r&&!o?n.source:n,e):f((r=n instanceof d)?n.source:n,r&&o?c.call(n):e),t?this:s,d)};for(var h=function(n){n in d||o(d,n,{configurable:!0,get:function(){return f[n]},set:function(e){f[n]=e}})},v=a(f),w=0;v.length>w;)h(v[w++]);s.constructor=d,d.prototype=s,t("KroJ")(r,"RegExp",d)}t("elZq")("RegExp")},WABC:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",(function(){return u}));t("dRSK");var r=t("q1tI"),i=t.n(r),o=t("mX3r"),a=t("aArQ");e.default=function(n){var e=n.data,t=n.location;return i.a.createElement(a.a,{location:t},i.a.createElement(o.InteractiveForceGraph,{onSelectNode:function(n){return console.log(n)},zoom:!0,simulationOptions:"undefined"!=typeof window?{height:window.innerHeight-41-16-30,width:Math.min(window.innerWidth,640)}:void 0,labelAttr:"title"},e.allRoamPage.nodes.map((function(n){return i.a.createElement(o.ForceGraphNode,{key:n.id,node:{id:n.id,title:n.title,radius:5}})})),e.allRoamPage.nodes.reduce((function(n,e){return e.fields.allOutboundReferences.forEach((function(t){t.fields?t.fields.parentPage.id===e.id||n.find((function(n){return n.source===e.id&&n.target===t.fields.parentPage.id}))||n.push({source:e.id,target:t.fields.parentPage.id,value:2}):t.id===e.id||n.find((function(n){return n.source===e.id&&n.target===t.id}))||n.push({source:e.id,target:t.id,value:2})})),n}),[]).map((function(n){return i.a.createElement(o.ForceGraphLink,{key:n.source+"=>"+n.target,link:n})}))))};var u="2959141196"},tUrg:function(n,e,t){"use strict";t("OGtf")("link",(function(n){return function(e){return n(this,"a","href",e)}}))}}]);
//# sourceMappingURL=component---src-pages-graph-overview-js-6c6ce1b7020af25686f5.js.map