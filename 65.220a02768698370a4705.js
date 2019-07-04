(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/data/optimizedFeatureQueryEngineAdapter":1482,"esri/layers/graphics/centroid":1484,"esri/layers/graphics/data/attributeSupport":1532,"esri/layers/graphics/data/utils":1533,"esri/layers/graphics/data/spatialQuerySupport":1600,"esri/layers/graphics/data/timeSupport":1641,"esri/layers/graphics/data/FeatureFilter":1645,"esri/core/sql/WhereClauseCache":1708,"esri/layers/graphics/contains":1709})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1482:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1484),r(552),r(550)],void 0===(n=function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.optimizedFeatureQueryEngineAdapter={getObjectId:function(e){return e.objectId},getAttributes:function(e){return e.attributes},getAttribute:function(e,t){return e.attributes[t]},cloneWithGeometry:function(e,t){return new i.default(t,e.attributes,null,e.objectId)},getGeometry:function(e){return e.geometry},getCentroid:function(e,t){return e.centroid||(e.centroid=r.getCentroidOptimizedGeometry(new n.default,e.geometry,t.hasZ,t.hasM)),e.centroid}},t.default=t.optimizedFeatureQueryEngineAdapter}.apply(null,i))||(e.exports=n)},1484:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,n,o,s){for(var a=r(o,s),u=i,l=i+a,c=0,p=0,f=0,d=0,h=0,y=0,g=n-1;y<g;y++,u+=a,l+=a){var m=t[u],v=t[u+1],_=t[u+2],I=t[l],S=t[l+1],T=t[l+2],b=m*S-I*v;d+=b,c+=(m+I)*b,p+=(v+S)*b,o&&(f+=(_+T)*(b=m*T-I*_),h+=b),m<e[0]&&(e[0]=m),m>e[1]&&(e[1]=m),v<e[2]&&(e[2]=v),v>e[3]&&(e[3]=v),o&&(_<e[4]&&(e[4]=_),_>e[5]&&(e[5]=_))}if(d>0&&(d*=-1),h>0&&(h*=-1),!d)return null;var w=[c,p,.5*d];return o&&(w[3]=f,w[4]=.5*h),w}function n(e,t,i,n,l){for(var c=r(n,l),p=t,f=t+c,d=0,h=0,y=0,g=0,m=0,v=i-1;m<v;m++,p+=c,f+=c){var _=e[p],I=e[p+1],S=e[p+2],T=e[f],b=e[f+1],w=e[f+2],N=n?s(_,I,S,T,b,w):o(_,I,T,b);if(N)if(d+=N,n){h+=N*(R=u(_,I,S,T,b,w))[0],y+=N*R[1],g+=N*R[2]}else{var R;h+=N*(R=a(_,I,T,b))[0],y+=N*R[1]}}return d>0?n?[h/d,y/d,g/d]:[h/d,y/d]:i>0?n?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,r,i){var n=r-e,o=i-t;return Math.sqrt(n*n+o*o)}function s(e,t,r,i,n,o){var s=i-e,a=n-t,u=o-r;return Math.sqrt(s*s+a*a+u*u)}function a(e,t,r,i){return[e+.5*(r-e),t+.5*(i-t)]}function u(e,t,r,i,n,o){return[e+.5*(i-e),t+.5*(n-t),r+.5*(o-r)]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCentroidOptimizedGeometry=function(e,t,o,s){if(!t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);for(var a=e.coords,u=[],l=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],c=t.lengths,p=t.coords,f=r(o,s),d=0,h=0,y=c;h<y.length;h++){var g=y[h],m=i(l,p,d,g,o,s);m&&u.push(m),d+=g*f}if(u.sort(function(e,t){var r=e[2]-t[2];return 0===r&&o&&(r=e[4]-t[4]),r}),u.length){var v=6*u[0][2];a[0]=u[0][0]/v,a[1]=u[0][1]/v,o&&(v=6*u[0][4],a[2]=0!==v?u[0][3]/v:0),(a[0]<l[0]||a[0]>l[1]||a[1]<l[2]||a[1]>l[3]||o&&(a[2]<l[4]||a[2]>l[5]))&&(a.length=0)}if(!a.length){var _=t.lengths[0]?n(p,0,c[0],o,s):null;if(!_)return null;a[0]=_[0],a[1]=_[1],o&&_.length>2&&(a[2]=_[2])}return e},t.lineCentroid=n}.apply(null,i))||(e.exports=n)},1532:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(7),r(133),r(15),r(1708)],void 0===(n=function(e,t,r,i,n,o){function s(e,t){return e?l.get(e,t):null}function a(e,t,r,i){void 0===i&&(i=!0);for(var o=[],l=0,p=t;l<p.length;l++){var f=p[l];if("*"!==f&&!e.has(f))if(i){var d=u(f);try{var h=s(d,e);if(!h)throw new n(c,"invalid SQL expression",{where:d});if(!h.isStandardized)throw new n(c,"expression is not standard",{clause:h});a(e,h.fieldNames,"expression contains missing fields")}catch(e){var y=e&&e.details;if(y&&(y.clause||y.where))throw e;y&&y.missingFields?o.push.apply(o,y.missingFields):o.push(f)}}else o.push(f)}if(o.length)throw new n(c,r,{missingFields:o})}function u(e){return e.split(p)[0]}Object.defineProperty(t,"__esModule",{value:!0});var l=new o.WhereClauseCache(50,500),c="feature-store:unsupported-query",p=" as ",f=new i.default(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);t.validateWhere=function(e,t){if(!t)return!0;var r=l.get(t,e);if(!r)throw new n(c,"invalid SQL expression",{where:t});if(!r.isStandardized)throw new n(c,"where clause is not standard",{where:t});return a(e,r.fieldNames,"where clause contains missing fields"),!0},t.validateHaving=function(e,t,r){if(!t)return!0;var i=l.get(t,e);if(!i)throw new n(c,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new n(c,"having does not contain a valid aggregate function",{having:t});var o=i.fieldNames;if(a(e,o,"having contains missing fields"),!i.getExpressions().every(function(t){var i=t.aggregateType,n=t.field,o=e.has(n)&&e.get(n).name;return r.some(function(t){var r=t.onStatisticField,n=t.statisticType;return(e.has(r)&&e.get(r).name)===o&&n.toLowerCase().trim()===i})}))throw new n(c,"expressions in having should also exist in outStatistics",{having:t});return!0},t.getWhereClause=s,t.validateFields=a,t.getExpressionFromFieldName=u,t.getAliasFromFieldName=function(e){return e.split(p)[1]},t.hasInvalidFieldType=function(e,t){var r=t.get(e);return!!r&&!f.has(r.type)}}.apply(null,i))||(e.exports=n)},1533:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(10),r(12),r(26),r(14),r(8),r(68),r(379),r(71),r(1463),r(94),r(1484),r(352),r(550),r(1511),r(1600)],void 0===(n=function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h,y,g){function m(e,t,r){if(r){var i=d.quantizeOptimizedGeometry(T,t,e.hasZ,e.hasM,"esriGeometryPoint",r);return d.convertToPoint(i,e.hasZ,e.hasM)}return d.convertToPoint(t,e.hasZ,e.hasM)}function v(e,n,s){return i(this,void 0,void 0,function(){var i,a,p,f,d,h;return r(this,function(r){switch(r.label){case 0:return e?(i=e.where,e.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||n&&n===i)&&(e.where=null),e.geometry?[4,_(e)]:[2,e]):[2,null];case 1:return a=r.sent(),e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel&&(p=e.geometry.spatialReference,(a=u.getGeometryExtent(a)).spatialReference=p),e.geometry=a,[4,y.checkProjectionSupport(a.spatialReference,s)];case 2:return r.sent(),[4,c.normalizeCentralMeridian(l.fromJSON(a))];case 3:if(f=r.sent()[0],o.isNone(f))throw t.QUERY_ENGINE_EMPTY_RESULT;return d=f.toJSON(),[4,y.project(d,d.spatialReference,s)];case 4:if(!(h=r.sent()))throw t.QUERY_ENGINE_EMPTY_RESULT;return h.spatialReference=s,e.geometry=h,[2,e]}})})}function _(e){return i(this,void 0,void 0,function(){var t,i,n,o,u,l,c,f,d;return r(this,function(r){switch(r.label){case 0:return t=e.geometry,i=e.distance,n=e.units,null==i?[2,s.resolve(t)]:(o=t.spatialReference,u=n&&I.fromJSON(n)||a.getUnitString(o),o&&(p.isGeographic(o)||p.isWebMercator(o))?(c=t,[3,3]):[3,1]);case 1:return[4,y.checkProjectionSupport(o,p.WGS84).then(function(){return y.project(t,p.WGS84)})];case 2:c=r.sent(),r.label=3;case 3:return l=c,[4,g.getGeodesicBufferOperator()];case 4:return f=r.sent(),[2,(d=f(l,i,u))?d.toJSON():null]}})})}Object.defineProperty(t,"__esModule",{value:!0});var I=new n.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});t.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var S=new h.default,T=new h.default,b={esriGeometryPoint:d.convertToPoint,esriGeometryPolyline:d.convertToPolyline,esriGeometryPolygon:d.convertToPolygon,esriGeometryMultipoint:d.convertToMultipoint};t.transformCentroid=m,t.getCentroid=function(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=f.getCentroidOptimizedGeometry(new h.default,t.geometry,e.hasZ,e.hasM)),m(e,t.centroid,r)):null},t.getGeometry=function(e,t,r,i){var n=t?"coords"in t?t:t.geometry:null;if(!n)return null;if(r){var o=d.generalizeOptimizedGeometry(S,n,e.hasZ,e.hasM,e.geometryType,r);return i?(o=d.quantizeOptimizedGeometry(T,o,e.hasZ,e.hasM,e.geometryType,i),b[e.geometryType](o,e.hasZ,e.hasM)):b[e.geometryType](o,e.hasZ,e.hasM)}if(i)return o=d.quantizeOptimizedGeometry(T,n,e.hasZ,e.hasM,e.geometryType,i),b[e.geometryType](o,e.hasZ,e.hasM);return b[e.geometryType](n,e.hasZ,e.hasM)},t.normalizeQuery=function(e,t,n){return i(this,void 0,void 0,function(){var i,o,s,a,u;return r(this,function(r){if(i=e.outFields,o=e.orderByFields,s=e.groupByFieldsForStatistics,a=e.outStatistics,i)for(u=0;u<i.length;u++)i[u]=i[u].trim();if(o)for(u=0;u<o.length;u++)o[u]=o[u].trim();if(s)for(u=0;u<s.length;u++)s[u]=s[u].trim();if(a)for(u=0;u<a.length;u++)a[u].onStatisticField&&(a[u].onStatisticField=a[u].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),[2,v(e,t,n)]})})},t.normalizeFilter=function(e,t,n){return i(this,void 0,void 0,function(){return r(this,function(r){return[2,v(e,t,n)]})})},t.normalizeQueryLike=v,t.cleanFromGeometryEngine=function(e){return e&&w in e?JSON.parse(JSON.stringify(e,N)):e};var w="_geVersion",N=function(e,t){return e!==w?t:void 0}}.apply(null,i))||(e.exports=n)},1600:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(10),r(12),r(15),r(8),r(157),r(362),r(71),r(94),r(1709),r(352),r(550),r(1511),r(1533)],void 0===(n=function(e,t,i,n,o,s,a,u,l,c,p,f,d,h,y){function g(){return s.create(function(e){return Promise.resolve().then(function(){var t=[r(168)];e.apply(null,t)}.bind(this)).catch(r.oe)})}Object.defineProperty(t,"__esModule",{value:!0});var m="feature-store:unsupported-query",v={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},_={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};t.importGeometryEngine=g,t.getGeodesicBufferOperator=function(){return g().then(function(e){return e.geodesicBuffer})},t.getSpatialQueryOperator=function(e,t,r){if(l.isPolygon(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var i=f.convertFromPolygon(new d.default,t,!1,!1);return s.resolve(function(e){return p.polygonContainsPoint(i,!1,!1,e)})}if(l.isPolygon(t)&&"esriGeometryMultipoint"===r.geometryType){var n=f.convertFromPolygon(new d.default,t,!1,!1);if("esriSpatialRelContains"===e)return s.resolve(function(e){return p.polygonContainsMultipoint(n,!1,!1,e,r.hasZ,r.hasM)})}if(l.isExtent(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return s.resolve(function(e){return a.extentContainsPoint(t,y.getGeometry(r,e))});if(l.isExtent(t)&&"esriGeometryMultipoint"===r.geometryType&&"esriSpatialRelContains"===e)return s.resolve(function(e){return a.extentContainsMultipoint(t,y.getGeometry(r,e))});if(l.isExtent(t)&&"esriSpatialRelIntersects"===e){var o=u.getExtentIntersector(r.geometryType);return s.resolve(function(e){return o(t,y.getGeometry(r,e))})}return g().then(function(i){var n=i[v[e]].bind(null,t);return function(e){return n(y.getGeometry(r,e))}})},t.checkSpatialQuerySupport=function(e,t,r){return n(this,void 0,void 0,function(){var n,s;return i(this,function(i){if(n=e.spatialRel,!(s=e.geometry))return[2];if(!function(e){return!0===_.spatialRelationship[e]}(n))throw new o(m,"Unsupported query spatial relationship",{query:e});if(!c.isValid(s.spatialReference)||!c.isValid(r))return[2];if(!function(e){return!0===_.queryGeometry[l.getJsonType(e)]}(s))throw new o(m,"Unsupported query geometry type",{query:e});if(!function(e){return!0===_.layerGeometry[e]}(t))throw new o(m,"Unsupported layer geometry type",{query:e});return e.outSR?[2,h.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]})})},t.canQueryWithRBush=function(e){if(l.isExtent(e))return!0;if(l.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}.apply(null,i))||(e.exports=n)},1641:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeExtent=function(e,t){if(!e)return null;var r=t.featureAdapter,i=e.startTimeField,n=e.endTimeField,o=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach(function(e){var t=r.getAttribute(e,i),a=r.getAttribute(e,n);null==t||isNaN(t)||(o=Math.min(o,t)),null==a||isNaN(a)||(s=Math.max(s,a))});else{var a=i||n;t.forEach(function(e){var t=r.getAttribute(e,a);null==t||isNaN(t)||(o=Math.min(o,t),s=Math.max(s,t))})}return{start:o,end:s}},t.getTimeOperator=function(e,t,r){if(!t||!e)return null;var i=e.startTimeField,n=e.endTimeField;if(!i&&!n)return null;var o=t.start,s=t.end;return null==o&&null==s?null:i&&n?function(e,t,r,i,n){if(null!=i&&null!=n&&i===n){var o=i;return function(i){return o>=e.getAttribute(i,t)&&o<=e.getAttribute(i,r)}}return null!=i&&null!=n?function(o){return function(e,t,r,i){return!(r>t||i<e)}(i,n,e.getAttribute(o,t),e.getAttribute(o,r))}:null!=i?function(t){return!(e.getAttribute(t,r)<i)}:null!=n?function(r){return!(e.getAttribute(r,t)>n)}:void 0}(r,i,n,o,s):function(e,t,r,i){return null!=r&&null!=i&&r===i?function(i){return e.getAttribute(i,t)===r}:null!=r&&null!=i?function(n){return e.getAttribute(n,t)>=r&&e.getAttribute(n,t)<=i}:null!=r?function(i){return e.getAttribute(i,t)>=r}:null!=i?function(r){return e.getAttribute(r,t)<=i}:void 0}(r,i||n,o,s)}}.apply(null,i))||(e.exports=n)},1645:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(12),r(7),r(10),r(133),r(15),r(11),r(14),r(8),r(35),r(559),r(1532),r(1482),r(1600),r(1641),r(1533),r(344)],void 0===(n=function(e,t,r,i,n,o,s,a,u,l,c,p,f,d,h,y,g,m){Object.defineProperty(t,"__esModule",{value:!0});var v=a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),_=1,I=2,S=function(){function e(e){var t=this;this._geometryBounds=c.create(),this._idToVisibility=new Map,this.check=function(e){var r=e.objectId,i=t._idToVisibility,n=t._applyFilter(e);return i.set(r,n?_|I:I),!!(i.get(r)&_)},this._serviceInfo=e}return Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}},e.prototype.invalidate=function(){var e=this;this._idToVisibility.forEach(function(t,r){e._idToVisibility.set(r,0)})},e.prototype.setKnownIds=function(e){for(var t=0,r=e;t<r.length;t++){var i=r[t];this._idToVisibility.set(i,_)}},e.prototype.setTrue=function(e){var t=this,r=[],i=[],n=new o.default(e);return this._idToVisibility.forEach(function(e,o){var s=!!(t._idToVisibility.get(o)&_),a=n.has(o);!s&&a?r.push(o):s&&!a&&i.push(o),t._idToVisibility.set(o,a?_|I:0)}),{show:r,hide:i}},e.prototype.createQuery=function(){var e=this,t=e.geometry,r=e.spatialRel,i=e.where,n=e.timeExtent,o=e.objectIds;return m.fromJSON({geometry:t,spatialRel:r,where:i,timeExtent:n,objectIds:o})},e.prototype.update=function(e,t,i){return r(this,void 0,void 0,function(){var r;return n(this,function(n){switch(n.label){case 0:return this._hash=JSON.stringify(e),[4,g.normalizeQueryLike(e,t,i)];case 1:return r=n.sent(),[4,l.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])];case 2:return n.sent(),[2]}})})},e.prototype._setAttributeFilter=function(e){if(!e||!e.where)return this._clause=null,void(this.where=null);var t=f.getWhereClause(e.where,this._serviceInfo.fieldsIndex);if(t.isStandardized)this._clause=t;else{var r=new s("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",t);v.error(r)}this.where=e.where},e.prototype._setIdFilter=function(e){this._idsToShow=e&&e.objectIds&&new o.default(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new o.default(e.hiddenIds),this.objectIds=e&&e.objectIds},e.prototype._setGeometryFilter=function(e){return r(this,void 0,void 0,function(){var t,r,i;return n(this,function(n){switch(n.label){case 0:return e&&e.geometry?(t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",[4,h.getSpatialQueryOperator(r,t,this._serviceInfo)]):(this._spatialQueryOperator=null,this.geometry=null,this.spatialRel=null,[2]);case 1:return i=n.sent(),p.getBoundsXY(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r,[2]}})})},e.prototype._setTimeFilter=function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent){if(!this._serviceInfo.timeInfo){var t=new s("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);return void v.error(t)}this.timeExtent=e.timeExtent,this._timeOperator=y.getTimeOperator(this._serviceInfo.timeInfo,e.timeExtent,d.optimizedFeatureQueryEngineAdapter)}},e.prototype._applyFilter=function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)},e.prototype._filterByExpression=function(e){return!this.where||this._clause.testFeature(e)},e.prototype._filterById=function(e){return(!this._idsToHide||!this._idsToHide.has(e.objectId))&&(!this._idsToShow||this._idsToShow.has(e.objectId))},e.prototype._filterByGeometry=function(e){return!this.geometry||!!this._earlyGeometryReject(e)&&this._spatialQueryOperator(e.geometry)},e.prototype._filterByTime=function(e){return!u.isSome(this._timeOperator)||this._timeOperator(e)},e.prototype._earlyGeometryReject=function(e){return!(!e.geometry||!e.geometry.coords.length)&&(!e.centroid||"esriSpatialRelContains"!==this.spatialRel||c.containsPoint(this._geometryBounds,e.centroid.coords))},e.prototype._resetAllHiddenIds=function(){var e=this,t=[];return this._idToVisibility.forEach(function(r,i){r&_||(e._idToVisibility.set(i,_),t.push(i))}),t},e}();t.default=S}.apply(null,i))||(e.exports=n)},1708:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(587),r(555)],void 0===(n=function(e,t,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._cache=new r(e),this._invalidCache=new r(t)}return e.prototype.get=function(e,t){var r=t.uid+":"+e,n=this._cache.get(r);if(n)return n;if(void 0!==this._invalidCache.get(r))return null;try{var o=i.WhereClause.create(e,t);return this._cache.put(r,o),o}catch(e){return this._invalidCache.put(r,null),null}},e}();t.WhereClauseCache=n}.apply(null,i))||(e.exports=n)},1709:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e,t){return e?t?4:3:t?3:2}function i(e,t,i,o,s){if(!e)return!1;for(var a=r(t,i),u=e.coords,l=!1,c=0,p=0,f=e.lengths;p<f.length;p++){var d=f[p];l=n(l,u,a,c,d,o,s),c+=d*a}return l}function n(e,t,r,i,n,o,s){for(var a=e,u=i,l=i,c=i+n*r;l<c;l+=r){(u=l+r)===c&&(u=i);var p=t[l],f=t[l+1],d=t[u],h=t[u+1];(f<s&&h>=s||h<s&&f>=s)&&p+(s-f)/(h-f)*(d-p)<o&&(a=!a)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.polygonContainsPoint=function(e,t,r,n){return i(e,t,r,n.coords[0],n.coords[1])},t.polygonContainsMultipoint=function(e,t,n,o,s,a){var u=r(s,a),l=o.coords,c=o.lengths;if(!c)return!1;for(var p=0,f=0;p<c.length;p++,f+=u)if(!i(e,t,n,l[f],l[f+1]))return!1;return!0},t.polygonContainsCoords=i}.apply(null,i))||(e.exports=n)}}]);