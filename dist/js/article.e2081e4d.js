webpackJsonp([1],{1088:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=(n(1099),n(491)),a=o(c),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=n(0),l=o(f),p=n(98),d=n(1100),b=o(d),y=function(t){function e(){var t,n,o,u;r(this,e);for(var c=arguments.length,a=Array(c),s=0;s<c;s++)a[s]=arguments[s];return n=o=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),o.columns=[{title:"ID",dataIndex:"id"},{title:"标题",dataIndex:"title"},{title:"创建人",dataIndex:"name"},{title:"创建时间",dataIndex:"create_time"},{title:"更新时间",dataIndex:"update_time"}],o.store=o.context.store,u=n,i(o,u)}return u(e,t),s(e,[{key:"getComponentData",value:function(){(0,this.store.dispatch)((0,p.getData)(b.default.getArticles))}},{key:"componentDidMount",value:function(){var t=this;this.getComponentData(),this.unsubscribe=this.store.subscribe(function(){return t.forceUpdate()})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return l.default.createElement(a.default,{columns:this.columns,rowKey:"id",dataSource:this.store.getState().response})}}]),e}(f.Component);y.contextTypes={store:l.default.PropTypes.object},e.default=y},1090:function(t,e){},1091:function(t,e){},1092:function(t,e){},1093:function(t,e){},1094:function(t,e){},1095:function(t,e,n){"use strict";n(48),n(1090),n(488)},1096:function(t,e,n){"use strict";n(48),n(1091),n(1098),n(487)},1097:function(t,e,n){"use strict";n(48),n(1092)},1098:function(t,e,n){"use strict";n(48),n(1093),n(487)},1099:function(t,e,n){"use strict";n(48),n(1094),n(1097),n(489),n(1095),n(490),n(1096)},1100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="http://api.test.com";e.default={getUsers:o+"/getUsers",getArticles:o+"/getArticles"}}});