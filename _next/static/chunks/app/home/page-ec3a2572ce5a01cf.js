(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{4327:function(e,t,n){Promise.resolve().then(n.bind(n,6917))},6917:function(e,t,n){"use strict";n.r(t);var s=n(9268),a=n(6006),c=n(408),i=n.n(c),r=n(1998),o=n.n(r),u=n(5853),f=n.n(u);"object"==typeof i()&&o()(i()),t.default=function(){let[e,t]=(0,a.useState)({title:{text:"My chart"},series:[{type:"line",data:[]}]});a.useEffect(()=>{let e;let n=((e=new Date).setDate(e.getDate()-7),(e.getTime()/1e3).toFixed(0));!async function(){let e=await fetch("http://152.70.82.194:5891/"+"scd4x/get?min_score=".concat(n));if(!e.ok)throw Error("ERROR: fetch scd4xdata"+e.status);let s=await e.json(),a=[];s.forEach(e=>{let t=JSON.parse(e[0]),n=new Date(1e3*e[1]);a.push([n,t.temperature])}),t(e=>({...e,series:[{type:"line",data:a}]}))}()},[]);let n=(0,a.useRef)(null);return(0,s.jsx)("main",{className:"p-24",children:(0,s.jsx)(f(),{highcharts:i(),options:e,ref:n})})}}},function(e){e.O(0,[149,162,253,488,744],function(){return e(e.s=4327)}),_N_E=e.O()}]);