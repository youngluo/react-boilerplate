webpackJsonp([0],{1089:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=(n(1099),n(491)),s=o(c),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=n(0),l=o(f),p=n(98),d=n(1100),b=o(d),y=function(t){function e(){var t,n,o,i;r(this,e);for(var c=arguments.length,s=Array(c),a=0;a<c;a++)s[a]=arguments[a];return n=o=u(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),o.columns=[{title:"ID",dataIndex:"id"},{title:"姓名",dataIndex:"name"},{title:"年龄",dataIndex:"age"},{title:"创建时间",dataIndex:"create_time"}],o.store=o.context.store,i=n,u(o,i)}return i(e,t),a(e,[{key:"getComponentData",value:function(){(0,this.store.dispatch)((0,p.getData)(b.default.getUsers))}},{key:"componentDidMount",value:function(){var t=this;this.getComponentData(),this.unsubscribe=this.store.subscribe(function(){return t.forceUpdate()})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return l.default.createElement(s.default,{columns:this.columns,rowKey:"id",dataSource:this.store.getState().response})}}]),e}(f.Component);y.contextTypes={store:l.default.PropTypes.object},e.default=y},1090:function(t,e){},1091:function(t,e){},1092:function(t,e){},1093:function(t,e){},1094:function(t,e){},1095:function(t,e,n){"use strict";n(48),n(1090),n(488)},1096:function(t,e,n){"use strict";n(48),n(1091),n(1098),n(487)},1097:function(t,e,n){"use strict";n(48),n(1092)},1098:function(t,e,n){"use strict";n(48),n(1093),n(487)},1099:function(t,e,n){"use strict";n(48),n(1094),n(1097),n(489),n(1095),n(490),n(1096)},1100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="http://api.test.com";e.default={getUsers:o+"/getUsers",getArticles:o+"/getArticles"}}});