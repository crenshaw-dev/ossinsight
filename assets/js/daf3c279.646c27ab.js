"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8376],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57870:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(26396),o=n(58215),s=["components"],u={title:"Step 2: Load Data  to TiDB",sidebar_position:2},c=void 0,p={unversionedId:"mini-ossinsight/step-by-step/load-data-to-tidb",id:"mini-ossinsight/step-by-step/load-data-to-tidb",title:"Step 2: Load Data  to TiDB",description:"1. Install TiDB",source:"@site/workshop/mini-ossinsight/step-by-step/load-data-to-tidb.mdx",sourceDirName:"mini-ossinsight/step-by-step",slug:"/mini-ossinsight/step-by-step/load-data-to-tidb",permalink:"/workshop/mini-ossinsight/step-by-step/load-data-to-tidb",editUrl:"https://github.com/pingcap/ossinsight/tree/main/workshop/mini-ossinsight/step-by-step/load-data-to-tidb.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Step 2: Load Data  to TiDB",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Step 1: Find Data Source",permalink:"/workshop/mini-ossinsight/step-by-step/find-data-source"},next:{title:"Step 3: Get Insights with SQL",permalink:"/workshop/mini-ossinsight/step-by-step/get-insights-with-sql"}},d=[{value:"1. Install TiDB",id:"1-install-tidb",children:[],level:2},{value:"2. Start data loading script",id:"2-start-data-loading-script",children:[{value:"a. Clone the OSS Insight repo to local",id:"a-clone-the-oss-insight-repo-to-local",children:[],level:3},{value:"b. Config the data loader",id:"b-config-the-data-loader",children:[],level:3},{value:"c. Install dependencies",id:"c-install-dependencies",children:[],level:3},{value:"c. Initial database schema",id:"c-initial-database-schema",children:[],level:3}],level:2},{value:"3. Load sample historical GitHub events to TiDB",id:"3-load-sample-historical-github-events-to-tidb",children:[],level:2},{value:"4. Listen to /events and insert realtime events to TiDB",id:"4-listen-to-events-and-insert-realtime-events-to-tidb",children:[],level:2},{value:"5. Test",id:"5-test",children:[],level:2}],h={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-install-tidb"},"1. Install TiDB"),(0,i.kt)("p",null,"It's easy to setup a TiDB Cluster in your laptop (Mac or Linux) with the official cli tools: ",(0,i.kt)("a",{parentName:"p",href:"https://tiup.io/"},"tiup"),"(inspired by rustup)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install tiup, you'd better use bash.\ncurl --proto '=https' --tlsv1.2 -sSf https://tiup-mirrors.pingcap.com/install.sh | sh\n# Install & Start TiDB Server.\ntiup playground -T ossinsight\n")),(0,i.kt)("p",null,"Expected output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CLUSTER START SUCCESSFULLY, Enjoy it ^-^\nTo connect TiDB: mysql --comments --host 127.0.0.1 --port 4000 -u root -p (no password)\nTo view the dashboard: http://127.0.0.1:2379/dashboard\nPD client endpoints: [127.0.0.1:2379]\nTo view the Prometheus: http://127.0.0.1:9090\nTo view the Grafana: http://127.0.0.1:3000\n")),(0,i.kt)("h2",{id:"2-start-data-loading-script"},"2. Start data loading script"),(0,i.kt)("h3",{id:"a-clone-the-oss-insight-repo-to-local"},"a. Clone the OSS Insight repo to local"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"github",label:"GitHub",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth=1 https://github.com/pingcap/ossinsight.git;\ncd ossinsight;\n"))),(0,i.kt)(o.Z,{value:"ghproxy",label:"GHProxy",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth=1 https://ghproxy.com/https://github.com/pingcap/ossinsight.git;\ncd ossinsight;\n")))),(0,i.kt)("h3",{id:"b-config-the-data-loader"},"b. Config the data loader"),(0,i.kt)("p",null,"Enter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/backend")," folder which stored our data loader script written by Ruby."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd backend;\n")),(0,i.kt)("p",null,"Edit the ",(0,i.kt)("inlineCode",{parentName:"p"},".env.local")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/backend")," folder, fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Database URL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GitHub personal access token")," (Learn how to ",(0,i.kt)("a",{parentName:"p",href:"/workshop/mini-ossinsight/step-by-step/find-data-source#creating-a-personal-access-token"},"create a personal access token"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DATABASE_URL=tidb://root@127.0.0.1:4000/gharchive_dev\nGITHUB_TOKEN=(your github personal access token)\n")),(0,i.kt)("h3",{id:"c-install-dependencies"},"c. Install dependencies"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"macos",label:"MacOS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Homebrew: https://brew.sh/\nbrew install openssl ruby@2.7 mysql;\nbundle update --bundler;\nbundle install;\n"))),(0,i.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("p",null,"TODO"))),(0,i.kt)("h3",{id:"c-initial-database-schema"},"c. Initial database schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create database\nbundle exec rails db:create\n\n# Create tables, index\nbundle exec rails db:migrate\n\n# Load seed data, e.g: collections, collection_items\nbundle exec rake db:seed\n")),(0,i.kt)("h2",{id:"3-load-sample-historical-github-events-to-tidb"},"3. Load sample historical GitHub events to TiDB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Load about 0.8 million sample events data\n# \nwget https://github.com/pingcap/ossinsight/releases/download/sample-data/smaple-oss-database.zip;\nunzip smaple-oss-database.zip\ncd dataset-xxs\nmysql --host 127.0.0.1 --port 4000 -u root -p gharchive_dev < gharchive_dev.github_events.000000000.sql\n")),(0,i.kt)("p",null,"The importing task would cost about 10 minutes."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to get different size of data please visit:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pingcap/ossinsight/releases/tag/sample-data"},"https://github.com/pingcap/ossinsight/releases/tag/sample-data")))),(0,i.kt)("h2",{id:"4-listen-to-events-and-insert-realtime-events-to-tidb"},"4. Listen to /events and insert realtime events to TiDB"),(0,i.kt)("p",null,"Open another terminal tab, start the crawler daemon by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bundle exec rails runner \'Realtime.new(ENV["GITHUB_TOKEN"].to_s.split(","), 100).run\';\n')),(0,i.kt)("h2",{id:"5-test"},"5. Test"),(0,i.kt)("p",null,"Connect to TiDB by:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"mysql-client",label:"MySQL Client",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# no password\nmysql --comments --host 127.0.0.1 --port 4000 -u root -t gharchive_dev -p\n")),(0,i.kt)("p",null,"Execute the following SQL to check if it is ACTUALLY ready:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(*) FROM gharchive_dev.github_events;\n")),(0,i.kt)("p",null,"Try it again after a few seconds, make sure the results are different.")),(0,i.kt)(o.Z,{value:"mycli",label:"MyCLI",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# no password\nmycli --host 127.0.0.1 --port 4000 -u root -t gharchive_dev\n")),(0,i.kt)("p",null,"Execute the following SQL to check if it is ACTUALLY ready:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WATCH SELECT count(*) FROM gharchive_dev.github_events;\n")))))}m.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(72389),l=n(79443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(53810),u=n(86010),c="tabItem_vU9c";function p(e){var t,n,i,l=e.lazy,p=e.block,d=e.defaultValue,h=e.values,m=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),T=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,r.useState)(k),x=N[0],E=N[1],O=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=T[m];null!=S&&S!==x&&g.some((function(e){return e.value===S}))&&E(S)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==x&&(C(t),E(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},b)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:D,onClick:D},i,{className:(0,u.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);