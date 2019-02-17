(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"IndexQuery",function(){return E});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(145),s=a(210),c=a(211),u=a(209),d=a(212),p=a(166),m=a(230),f=a.n(m),g=a(163),y="New Orleans Surveillance Cameras Analysis",h=["new orleans","surveillance","police","cameras","monitor","oversight"],v={lat:29.951022,lng:-90.081142,zoom:15},w=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state=v,t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.renderCameraMarker=function(e){var t=e.node,a=""===t.Description?"No additional details.":t.Description,n=[t.Lat,t.Lng];return o.a.createElement(s.a,{key:t.Camera,position:n},o.a.createElement(c.a,null,a))},a.renderCallMarker=function(e){var t=e.node,a=""===t.Description?"No additional details.":t.Description,n=[t.Lat,t.Lng];return o.a.createElement(s.a,{key:t.Item_Number,position:n},o.a.createElement(c.a,null,a))},a.render=function(){var e=[this.state.lat,this.state.lng];if("undefined"!=typeof window){var t=this.props.data.allCamerasCsv.edges.map(this.renderCameraMarker),a=this.props.data.allCallsCsv.edges;return o.a.createElement(p.a,null,o.a.createElement(g.a,{title:y,keywords:h}),o.a.createElement("h1",null,"Camera Locations & 911 Calls"),o.a.createElement("p",null,"Camera locations were collected by ",o.a.createElement("a",{href:"https://stopwatchingnola.org"},"stopwatchingnola.org")),o.a.createElement(u.a,{center:e,zoom:this.state.zoom,id:"mapid"},o.a.createElement(f.a,{fitBoundsOnLoad:!0,fitBoundsOnUpdate:!0,points:a,longitudeExtractor:function(e){return e.node.Lng},latitudeExtractor:function(e){return e.node.Lat},intensityExtractor:function(e){return 1}}),o.a.createElement(d.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t),o.a.createElement(l.Link,{to:"/page-2/"},"Go to page 2"))}return o.a.createElement(p.a,null,o.a.createElement(g.a,{title:y,keywords:h}),o.a.createElement("h1",null,"Loading"),o.a.createElement(l.Link,{to:"/page-2/"},"Go to page 2"))},t}(o.a.Component);t.default=w;var E="1286265489"},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(144),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(151),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},159:function(e){e.exports={data:{site:{siteMetadata:{title:"New Orleans Surveillance Camera Analysis"}}}}},160:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(51),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(175),c=a.n(s),u=a(145);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"New Orleans Surveillance Camera Analysis",description:"Analysis of surveillance cameras in New Orleans",author:"Marvin Arnold"}}}}},166:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(145),c=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(161),a(162),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("footer",null,"© 2018, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-2ca0895b906a4ba0b87e.js.map