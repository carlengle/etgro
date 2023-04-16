"use strict";(self.webpackChunkethereum_org_website=self.webpackChunkethereum_org_website||[]).push([[5752],{28230:function(e,t,n){var i=n(95318);t.__esModule=!0,t.default=void 0;var a=i(n(71087)),r=i(n(69983)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=z(t);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}i.default=e,n&&n.set(e,i);return i}(n(67294)),l=n(4382),d=n(54098),u=n(94961),g=n(89546),o=i(n(98534)),p=i(n(95349)),c=i(n(56182)),m=i(n(93184)),h=i(n(81643)),f=i(n(18166)),x=i(n(5080)),v=i(n(59881)),j=i(n(43618)),b=i(n(92511)),k=n(69786),w=i(n(6984)),y=i(n(92364));function z(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(z=function(e){return e?n:t})(e)}var C=(0,a.default)("div",{target:"es22xz15"})("padding-left:0rem;padding-top:8rem;padding-bottom:8rem;width:50%;@media (max-width: ",(function(e){return e.theme.breakpoints.l}),"){padding-top:2rem;padding-left:0rem;width:100%;}"),U=(0,a.default)(o.default,{target:"es22xz14"})("flex:1 1 30%;min-width:240px;margin:1rem;padding:1.5rem;@media (max-width: ",(function(e){return e.theme.breakpoints.l}),"){flex:1 1 30%;}"),D=(0,a.default)("div",{target:"es22xz13"})("padding-left:0rem;padding-top:2rem;width:50%;display:flex;flex-direction:column;align-items:center;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){width:100%;margin-top:2rem;}"),M=(0,a.default)("div",{target:"es22xz12"})("display:flex;justify-content:center;text-align:center;margin-top:-2rem;@media (max-width: ",(function(e){return e.theme.breakpoints.l}),"){margin-top:1rem;}"),O=(0,a.default)("div",{target:"es22xz11"})("font-size:1.5rem;line-height:140%;color:",(function(e){return e.theme.colors.text200}),";margin-top:1rem;text-align:center;display:flex;justify-content:center;"),I=(0,a.default)("div",{target:"es22xz10"})("display:flex;align-items:center;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){flex-direction:column;}"),_=(0,a.default)("div",{target:"es22xz9"})("display:flex;align-items:center;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){flex-direction:column-reverse;}"),P=(0,a.default)(k.CardContainer,{target:"es22xz8"})({name:"1t83kfq",styles:"margin-top:2rem;margin-bottom:3rem"}),G=(0,a.default)(k.CardGrid,{target:"es22xz7"})({name:"1t83kfq",styles:"margin-top:2rem;margin-bottom:3rem"}),S=(0,a.default)(v.default,{target:"es22xz6"})({name:"1qahy2z",styles:"margin-right:2rem"}),B=(0,a.default)("div",{target:"es22xz5"})("padding:4rem;background:",(function(e){return e.theme.colors.cardGradient}),";width:100%;margin-top:2rem;margin-bottom:-2rem;display:flex;flex-direction:column;"),E=(0,a.default)("div",{target:"es22xz4"})("width:50%;margin-right:4rem;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){width:100%;margin-left:4rem;}"),L=(0,a.default)("div",{target:"es22xz3"})("width:50%;margin-left:4rem;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){width:100%;margin-right:4rem;margin-bottom:-2rem;}"),q=(0,a.default)(w.default,{target:"es22xz2"})({name:"f7ay7b",styles:"justify-content:center"}),N=(0,a.default)(k.GrayContainer,{target:"es22xz1"})("margin-bottom:3rem;padding-bottom:2rem;border-bottom:1px solid ",(function(e){return e.theme.colors.border}),";"),T=(0,a.default)(c.default,{target:"es22xz0"})("background:transparent;@media (max-width: ",(function(e){return e.theme.breakpoints.m}),"){width:100%;padding:0rem;padding-top:4rem;margin-left:0rem;}"),W=function(e){var t=e.data,n=e.location,i=(0,d.useIntl)(),a=(0,l.useTheme)().isDark,o=[...t.bountyHunters.nodes].sort((function(e,t){return e.score&&t.score?t.score-e.score:0})),c=(0,s.useState)({el:[],cl:[]}),v=c[0],w=c[1];(0,s.useEffect)((function(){var e=[{name:"Besu",background:"#546D78",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-java"}),alt:"consensus-client-besu-logo-alt",url:"https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Install-Binaries/",image:function(){return t.besu},githubUrl:"https://github.com/hyperledger/besu"},{name:"Erigon",background:"#3A4B56",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-go"}),alt:"consensus-client-erigon-logo-alt",url:"https://github.com/ledgerwatch/erigon#erigon",image:function(){return t.erigon},githubUrl:"https://github.com/ledgerwatch/erigon"},{name:"Geth",background:"#303D4E",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-go"}),alt:"consensus-client-geth-logo-alt",url:"https://geth.ethereum.org/docs/getting-started",image:function(){return t.geth},githubUrl:"https://github.com/ethereum/go-ethereum"},{name:"Nethermind",background:"#21222D",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-c-sharp"}),alt:"consensus-client-lodestar-logo-alt",url:"https://docs.nethermind.io/nethermind/",image:function(){return t.nethermind},githubUrl:"https://github.com/NethermindEth/nethermind"}],n=[{name:"Prysm",background:"#23292e",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-go"}),alt:"consensus-client-prysm-logo-alt",url:"https://docs.prylabs.network/docs/getting-started/",image:function(){return t.prysm},githubUrl:"https://github.com/prysmaticlabs/prysm"},{name:"Lighthouse",background:"",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-rust"}),alt:"consensus-client-lighthouse-logo-alt",url:"https://lighthouse-book.sigmaprime.io/",image:function(e){return e?t.lighthouseDark:t.lighthouseLight},githubUrl:"https://github.com/sigp/lighthouse"},{name:"Teku",background:"#3359d5",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-java"}),alt:"consensus-client-teku-logo-alt",url:"https://pegasys.tech/teku",image:function(e){return e?t.tekuLight:t.tekuDark},githubUrl:"https://github.com/ConsenSys/teku"},{name:"Lodestar",background:"#14140b",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-javascript"}),alt:"consensus-client-lodestar-logo-alt",url:"https://lodestar.chainsafe.io/",image:function(){return t.lodestar},githubUrl:"https://github.com/ChainSafe/lodestar",isBeta:!0,children:(0,l.jsx)(j.default,{id:"consensus-client-under-review"})},{name:"Nimbus",background:"#dc8600",description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-written-nim"}),alt:"consensus-client-nimbus-logo-alt",url:"https://nimbus.team/",image:function(){return t.nimbus},githubUrl:"https://github.com/status-im/nimbus-eth2"}],i=(0,r.default)(e),a=(0,r.default)(n).sort((function(e,t){return t.isBeta?-1:0}));w({el:i,cl:a})}),[t]);var z=[{title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-ethresearch-1"}),description:"",link:"https://ethresear.ch/c/sharding/6"},{title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-ethresearch-2"}),description:"",link:"https://ethresear.ch/c/the-merge/38"},{title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-ethresearch-3"}),description:"",link:"https://ethresear.ch/c/sharded-execution/35"},{title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-ethresearch-4"}),description:"",link:"https://ethresear.ch/"}],W=[{emoji:":computer:",title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-title-1"}),description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-desc-1"}),url:"#clients",button:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-btn-1"})},{emoji:":moneybag:",title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-title-2"}),description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-desc-2"}),url:"/staking/",button:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-btn-2"})},{emoji:":bug:",title:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-title-3"}),description:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-desc-3"}),url:"/bug-bounty/",button:(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-btn-3"})}],H=function(e){if(Object.keys(v).includes(e))return(0,l.jsx)(G,null,v[e].map((function(e,t){return(0,l.jsx)(h.default,{key:t,url:e.url,background:e.background,image:(0,u.getImage)(e.image(a)),name:e.name,description:e.description,alt:(0,g.translateMessageId)(e.alt,i),githubUrl:e.githubUrl,hideStars:!0},e.children)})))};return(0,l.jsx)(k.Page,null,(0,l.jsx)(x.default,{title:(0,g.translateMessageId)("page-upgrades-get-involved",i),description:(0,g.translateMessageId)("page-upgrades-get-involved-meta-description",i)}),(0,l.jsx)(k.Content,null,(0,l.jsx)(M,null,(0,l.jsx)(C,null,(0,l.jsx)(q,{slug:n.pathname,startDepth:1}),(0,l.jsx)(k.SloganGradient,null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved"})," ",(0,l.jsx)(m.default,{size:1,text:":wave:"})),(0,l.jsx)(O,null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-subtitle"})))),(0,l.jsx)("h2",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-how"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-how-desc"})),(0,l.jsx)(P,null,W.map((function(e,t){return(0,l.jsx)(U,{key:t,emoji:e.emoji,title:e.title,description:e.description},(0,l.jsx)(f.default,{to:e.url},e.button))})))),(0,l.jsx)(k.Divider,{id:"clients"}),(0,l.jsx)(k.Content,null,(0,l.jsx)("h2",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients-desc"})," ",(0,l.jsx)(b.default,{to:"https://clientdiversity.org"},(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients-desc-link"}))),(0,l.jsx)("h3",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients-execution"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients-execution-desc"})),H("el"),(0,l.jsx)("h3",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients-consensus"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-run-clients-consensus-desc"})),H("cl")),(0,l.jsx)(B,null,(0,l.jsx)(T,{image:(0,u.getImage)(t.rhino),alt:(0,g.translateMessageId)("page-staking-image-alt",i),titleKey:"page-upgrades-get-involved-stake",descriptionKey:"page-upgrades-get-involved-stake-desc"},(0,l.jsx)("div",null,(0,l.jsx)(f.default,{to:"/staking/"},(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-stake-eth"}))))),(0,l.jsx)(N,null,(0,l.jsx)(k.Content,null,(0,l.jsx)(I,null,(0,l.jsx)(E,null,(0,l.jsx)("h2",{id:"#bug-bounty"},(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-hunting"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-hunting-desc"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug"})),(0,l.jsx)("ul",null,(0,l.jsx)("li",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-li"})),(0,l.jsx)("li",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-li-2"})),(0,l.jsx)("li",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-li-3"})),(0,l.jsx)("li",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-li-4"}))),(0,l.jsx)(f.default,{to:"/bug-bounty/"},(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-bug-hunting"}))),(0,l.jsx)(D,null,(0,l.jsx)(p.default,{content:o,limit:5}))))),(0,l.jsx)(k.Content,null,(0,l.jsx)(_,null,(0,l.jsx)(E,null,(0,l.jsx)(S,{content:z})),(0,l.jsx)(L,null,(0,l.jsx)("h2",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-join"})),(0,l.jsx)("p",null,(0,l.jsx)(j.default,{id:"page-upgrades-get-involved-join-desc"}))))),(0,l.jsx)(y.default,null))};t.default=W}}]);
//# sourceMappingURL=113f369f-663817c0cabf499c10f3.js.map