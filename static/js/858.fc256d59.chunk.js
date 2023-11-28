"use strict";(self.webpackChunkwmt_app=self.webpackChunkwmt_app||[]).push([[858],{59858:function(e,t,a){a.r(t),a.d(t,{ccipFetch:function(){return P},offchainLookup:function(){return S},offchainLookupAbiItem:function(){return M},offchainLookupSignature:function(){return C}});var r=a(74165),n=a(29439),s=a(15861),c=a(80215),o=a(93433),u=a(43144),i=a(15671),l=a(97326),d=a(60136),f=a(29388),p=a(63476),b=a(80458),h=a(96781),m=function(e){(0,d.Z)(a,e);var t=(0,f.Z)(a);function a(e){var r,n,s=e.callbackSelector,c=e.cause,u=e.data,d=e.extraData,f=e.sender,p=e.urls;return(0,i.Z)(this,a),n=t.call(this,c.shortMessage||"An error occurred while fetching for an offchain result.",{cause:c,metaMessages:[].concat((0,o.Z)(c.metaMessages||[]),[null!==(r=c.metaMessages)&&void 0!==r&&r.length?"":[],"Offchain Gateway Call:",p&&["  Gateway URL(s):"].concat((0,o.Z)(p.map((function(e){return"    ".concat((0,h.Gr)(e))})))),"  Sender: ".concat(f),"  Data: ".concat(u),"  Callback selector: ".concat(s),"  Extra data: ".concat(d)]).flat()}),Object.defineProperty((0,l.Z)(n),"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"}),n}return(0,u.Z)(a)}(b.G),w=function(e){(0,d.Z)(a,e);var t=(0,f.Z)(a);function a(e){var r,n=e.result,s=e.url;return(0,i.Z)(this,a),r=t.call(this,"Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,h.Gr)(s)),"Response: ".concat((0,p.P)(n))]}),Object.defineProperty((0,l.Z)(r),"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"}),r}return(0,u.Z)(a)}(b.G),k=function(e){(0,d.Z)(a,e);var t=(0,f.Z)(a);function a(e){var r,n=e.sender,s=e.to;return(0,i.Z)(this,a),r=t.call(this,"Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(s),"OffchainLookup sender address: ".concat(n)]}),Object.defineProperty((0,l.Z)(r),"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"}),r}return(0,u.Z)(a)}(b.G),y=a(79144),v=a(22947),g=a(72883),Z=a(25543),x=a(32342);function O(e,t){if(!(0,x.U)(e))throw new Z.b({address:e});if(!(0,x.U)(t))throw new Z.b({address:t});return e.toLowerCase()===t.toLowerCase()}var L=a(30221),G=a(11071),C="0x556f1830",M={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};function S(e,t){return E.apply(this,arguments)}function E(){return(E=(0,s.Z)((0,r.Z)().mark((function e(t,a){var s,o,u,i,l,d,f,p,b,h,w,y,Z,x,G;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a.blockNumber,o=a.blockTag,u=a.data,i=a.to,l=(0,v.p)({data:u,abi:[M]}),d=l.args,f=(0,n.Z)(d,5),p=f[0],b=f[1],h=f[2],w=f[3],y=f[4],e.prev=3,O(i,p)){e.next=6;break}throw new k({sender:p,to:i});case 6:return e.next=8,P({data:h,sender:p,urls:b});case 8:return Z=e.sent,e.next=11,(0,c.R)(t,{blockNumber:s,blockTag:o,data:(0,L.zo)([w,(0,g.E)([{type:"bytes"},{type:"bytes"}],[Z,y])]),to:i});case 11:return x=e.sent,G=x.data,e.abrupt("return",G);case 16:throw e.prev=16,e.t0=e.catch(3),new m({callbackSelector:w,cause:e.t0,data:u,extraData:y,sender:p,urls:b});case 19:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)}function P(e){return R.apply(this,arguments)}function R(){return(R=(0,s.Z)((0,r.Z)().mark((function e(t){var a,n,s,c,o,u,i,l,d,f,b;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.data,n=t.sender,s=t.urls,c=new Error("An unknown error occurred."),o=0;case 3:if(!(o<s.length)){e.next=36;break}return u=s[o],i=u.includes("{sender}")||u.includes("{data}")?"GET":"POST",l="POST"===i?{data:a,sender:n}:void 0,e.prev=7,e.next=10,fetch(u.replace("{sender}",n).replace("{data}",a),{body:JSON.stringify(l),method:i});case 10:if(f=e.sent,b=void 0,null===(d=f.headers.get("Content-Type"))||void 0===d||!d.startsWith("application/json")){e.next=18;break}return e.next=15,f.json();case 15:b=e.sent.data,e.next=21;break;case 18:return e.next=20,f.text();case 20:b=e.sent;case 21:if(f.ok){e.next=24;break}return c=new y.Gg({body:l,details:(0,p.P)(b.error)||f.statusText,headers:f.headers,status:f.status,url:u}),e.abrupt("continue",33);case 24:if((0,G.v)(b)){e.next=27;break}return c=new w({result:b,url:u}),e.abrupt("continue",33);case 27:return e.abrupt("return",b);case 30:e.prev=30,e.t0=e.catch(7),c=new y.Gg({body:l,details:e.t0.message,url:u});case 33:o++,e.next=3;break;case 36:throw c;case 37:case"end":return e.stop()}}),e,null,[[7,30]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=858.fc256d59.chunk.js.map