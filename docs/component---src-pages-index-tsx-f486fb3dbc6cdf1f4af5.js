(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(n,e,t){"use strict";t.r(e),function(n){t(101),t(102),t(103);var i=t(44),a=t.n(i),o=t(8),r=t.n(o),c=t(12),s=t(0),d=t(355),l=t(354),u=t(353),b=t.n(u),h=t(184),f=t(178),g=t(188);n.fetch=b.a;var m=function(n){function e(e){var t;return(t=n.call(this,e)||this).handTrackModel=void 0,t.isFaceTrackModelLoaded=!1,t.cameraVideo=null,t.canvas=null,t.canvasContext=null,t.isStartTracking=!1,t.isFaceDetecting=!1,t.isHandTracking=!1,t.lastDetectedFace=void 0,t.lastDetectedHands=[],t.state={isVideo:!1,isShowMessage:!1},l.c.monkeyPatch({fetch:b.a}),l.d.tinyFaceDetector.loadFromUri("https://justadudewhohacks.github.io/face-api.js/models").then(function(){console.log("faceLoaded"),t.isFaceTrackModelLoaded=!0,t.runDetection()}),d.a().then(function(n){console.log(n),t.handTrackModel=n,t.runDetection()}),t.onCanvasLoaded=t.onCanvasLoaded.bind(a()(t)),t.onVideoRef=t.onVideoRef.bind(a()(t)),t.runDetection=t.runDetection.bind(a()(t)),t}r()(e,n);var t=e.prototype;return t.onCanvasLoaded=function(n){console.log(n),n&&(this.canvas=n,this.canvasContext=n.getContext("2d"))},t.onVideoRef=function(n){var e=this;d.b(n).then(function(t){e.cameraVideo=n,t&&e.runDetection()})},t.runDetection=function(){var n=this;if(this.cameraVideo&&this.canvasContext&&this.canvas){this.handTrackModel&&!this.isHandTracking&&(this.isHandTracking=!0,this.handTrackModel.detect(this.cameraVideo).then(function(e){n.isStartTracking=!0,n.isHandTracking=!1,n.lastDetectedHands=e,console.log("Predictions: ",e)})),this.isFaceTrackModelLoaded&&!this.isFaceDetecting&&(this.isFaceDetecting=!0,l.b(this.cameraVideo,new l.a).then(function(e){n.isFaceDetecting=!1,n.lastDetectedFace=e,console.log("faces: ",e)}));var e=this.checkFaceTouch();console.log(e),this.state.isShowMessage!==e&&this.setState({isShowMessage:e}),window.requestAnimationFrame(this.runDetection)}},t.checkFaceTouch=function(){if(!this.lastDetectedFace)return!1;if(!this.lastDetectedHands.length>0)return!1;var n=this.lastDetectedFace.box,e=this.lastDetectedHands,t=Array.isArray(e),i=0;for(e=t?e:e[Symbol.iterator]();;){var a;if(t){if(i>=e.length)break;a=e[i++]}else{if((i=e.next()).done)break;a=i.value}var o=a,r=o.bbox[0]<n.x&&n.x<o.bbox[0]+o.bbox[2]&&o.bbox[1]<n.y&&n.y<o.bbox[1]+o.bbox[3],c=o.bbox[0]<n.x+n.width&&n.x+n.width<o.bbox[0]+o.bbox[2]&&o.bbox[1]<n.y&&n.y<o.bbox[1]+o.bbox[3],s=o.bbox[0]<n.x&&n.x<o.bbox[0]+o.bbox[2]&&o.bbox[1]<n.y+n.height&&n.y+n.height<o.bbox[1]+o.bbox[3],d=o.bbox[0]<n.x+n.width&&n.x+n.width<o.bbox[0]+o.bbox[2]&&o.bbox[1]<n.y+n.height&&n.y+n.height<o.bbox[1]+o.bbox[3];if(console.log({checkInclude1:r,checkInclude2:c,checkInclude3:s,checkInclude4:d}),r||c||s||d)return!0}return!0},t.render=function(){return Object(c.d)(g.a,null,Object(c.d)(h.a,null,Object(c.d)(f.a,null,Object(c.d)("div",null,Object(c.d)("video",{ref:this.onVideoRef,hidden:this.state.isVideo})),Object(c.d)("div",null,this.state.isShowMessage?"顔触ってるよ!!":null),Object(c.d)("div",null,Object(c.d)("canvas",{ref:this.onCanvasLoaded})))))},e}(s.Component);e.default=m}.call(this,t(100))},171:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return o}),t.d(e,"f",function(){return r}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return s});var i={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},o={xs:0,sm:576,md:768,lg:992,xl:1200},r={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},s={header:60}},176:function(n,e,t){"use strict";t.d(e,"b",function(){return b});var i=t(12),a=t(0),o=t.n(a),r=t(5),c=t.n(r),s=t(43),d=t.n(s);t.d(e,"a",function(){return d.a});t(180);var l=o.a.createContext({});function u(n){var e=n.staticQueryData,t=n.data,a=n.query,r=n.render,c=t?t.data:e[a]&&e[a].data;return Object(i.d)(o.a.Fragment,null,c&&r(c),!c&&Object(i.d)("div",null,"Loading (StaticQuery)"))}var b=function(n){var e=n.data,t=n.query,a=n.render,o=n.children;return Object(i.d)(l.Consumer,null,function(n){return Object(i.d)(u,{data:e,query:t,render:a||o,staticQueryData:n})})};b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},178:function(n,e,t){"use strict";var i=t(173),a=t(12),o=(t(0),t(171)),r=t(179),c=Object(i.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(r.a)(o.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},179:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var i=t(171),a=function(n){return n/i.c.fontSize.regular}},180:function(n,e,t){var i;n.exports=(i=t(186))&&i.default||i},184:function(n,e,t){"use strict";var i=t(173),a=t(12),o=(t(0),t(171)),r=Object(i.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",o.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(r,{className:t},e)}},185:function(n){n.exports={data:{site:{siteMetadata:{title:"おさわりアラート",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},186:function(n,e,t){"use strict";t.r(e);t(67);var i=t(0),a=t.n(i),o=t(5),r=t.n(o),c=t(68),s=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=s},188:function(n,e,t){"use strict";var i=t(12),a=t(185),o=t(0),r=t(198),c=t.n(r),s=t(176),d=(t(199),t(171)),l=t(179),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+d.c.fontSize.regular+"px !important;\n    line-height: "+d.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+d.d.sansSerif+";\n    color: "+d.b.black+";\n    background-color: "+d.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+d.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+d.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+d.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+d.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+d.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+d.b.black+";\n    font-weight: 600;\n    line-height: "+d.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+d.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+d.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+d.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+d.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+d.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+d.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+d.b.ui.light+";\n    color: "+d.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(l.a)(d.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(173),h=t(205),f=t(178),g=Object(b.a)("header",{target:"e14yya1q0"})("height:",d.e.header,"px;padding:0 ",d.c.containerPadding,"rem;background-color:",d.b.brand,";color:",Object(h.a)(.5,d.b.white),";"),m=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),x=Object(b.a)(s.a,{target:"e14yya1q2"})("color:",d.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),p=function(n){var e=n.title;return Object(i.d)(g,null,Object(i.d)(m,null,Object(i.d)(x,{to:"/"},e)))},v=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),y=function(n){var e=n.children,t=n.className;return Object(i.d)(o.Fragment,null,Object(i.d)(i.a,{styles:function(){return Object(i.c)(u)}}),Object(i.d)(v,{className:t},e))},j=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),w=function(n){var e=n.children,t=n.className;return Object(i.d)(j,{className:t},e)};e.a=function(n){var e=n.children;return Object(i.d)(s.b,{query:"991718019",render:function(n){return Object(i.d)(y,null,Object(i.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:n.site.siteMetadata.keywords}]}),Object(i.d)(p,{title:n.site.siteMetadata.title}),Object(i.d)(w,null,e))},data:a})}},267:function(n,e){},269:function(n,e){},302:function(n,e){},303:function(n,e){},348:function(n,e){},349:function(n,e){},350:function(n,e){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f486fb3dbc6cdf1f4af5.js.map