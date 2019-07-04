(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/LayerView":1461,"esri/views/layers/RefreshableLayerView":1468,"esri/views/2d/tiling/TileSpan":1469,"esri/core/pbf":1471,"esri/views/2d/layers/LayerView2D":1475,"esri/views/2d/tiling/LODInfo":1476,"esri/views/2d/tiling/TileCoverage":1477,"esri/views/2d/tiling/TileInfoView":1480,"esri/views/2d/layers/support/ExportStrategy":1604,"esri/views/2d/viewStateUtils":1605,"esri/views/layers/WMSLayerView":1728,"esri/views/2d/layers/WMSLayerView2D":2456})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1461:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(2),i(1),i(37),i(345),i(255),i(11),i(201),i(8),i(0)],void 0===(o=function(t,e,i,r,o,n,s,a,l,u,p){return function(t){function e(e){var i=t.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(this.layer),this.when().catch(function(e){if("layerview:create-error"!==e.name){var i=t.layer&&t.layer.id||"no id",r=t.layer&&t.layer.title||"no title";return a.getLogger(t.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",e),u.reject(e)}})},e.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(e.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullOpacity",{get:function(){var t=function(t){return null==t?1:t};return t(this.get("layer.opacity"))*t(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),e.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},e.prototype.isUpdating=function(){return!1},r([p.property()],e.prototype,"layer",void 0),r([p.property()],e.prototype,"parent",void 0),r([p.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],e.prototype,"suspended",null),r([p.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],e.prototype,"updating",null),r([p.property()],e.prototype,"view",void 0),r([p.property({dependsOn:["layer.visible"]})],e.prototype,"visible",null),r([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],e.prototype,"fullOpacity",null),r([p.subclass("esri.views.layers.LayerView")],e)}(p.declared(n,o,s.Identifiable,l))}.apply(null,r))||(t.exports=o)},1468:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(2),i(1),i(10),i(12),i(6),i(8),i(0)],void 0===(o=function(t,e,i,r,o,n,s,a,l){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.refreshTimestamp=null,e.refreshDebounced=a.debounce(function(t,i){return n(e,void 0,void 0,function(){var e;return o(this,function(r){switch(r.label){case 0:return"number"==typeof t?e=t:(e=Date.now(),i=t),this._set("refreshTimestamp",e),this.doRefresh?[4,this.doRefresh(i)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},2e3),e}return i(e,t),e.prototype.refresh=function(t){void 0===t&&(t=Date.now()),this._set("refreshTimestamp",t),this.doRefresh&&this.doRefresh()},r([l.property()],e.prototype,"layer",void 0),r([l.aliasOf("layer.refreshInterval")],e.prototype,"refreshInterval",void 0),r([l.property({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),r([l.subclass("esri.layers.mixins.RefreshableLayerView")],e)}(l.declared(s))}.apply(null,r))||(t.exports=o)},1469:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(85)],void 0===(o=function(t,e,i){return function(){function t(t,e,i){this.row=t,this.colFrom=e,this.colTo=i}return t.pool=new i(t,!0),t}()}.apply(null,r))||(t.exports=o)},1471:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(22)],void 0===(o=function(t,e,i){var r=i("esri-text-decoder")?TextDecoder:null;return function(){function t(t,e,i,o){this._tag=0,this._dataType=99,this._data=t,this._dataView=e,this._pos=i||0,this._end=o||t.byteLength,this._textDecoder=r?new r("utf-8"):null}return t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.pos=function(){return this._pos},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){var t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){var t=this.getUInt32();return t>>>1^-(1&t)|0},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+4294967296*t.getUint32(e+4,!0);return this._skip(8),i},t.prototype.getSFixed64=function(){var t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+4294967296*t.getInt32(e+4,!0);return this._skip(8),i},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i},t.prototype.getBytes=function(){var t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i},t.prototype.getMessage=function(){var e=this._getLength(),i=this._pos,r=new t(this._data,this._dataView,i,i+e);return this._skip(e),r},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,e=this._data,i=this._pos,r=0;if(this._end-i>=10)do{if(r|=127&(t=e[i++]),0==(128&t))break;if(r|=(127&(t=e[i++]))<<7,0==(128&t))break;if(r|=(127&(t=e[i++]))<<14,0==(128&t))break;if(r|=(127&(t=e[i++]))<<21,0==(128&t))break;if(r+=268435456*(127&(t=e[i++])),0==(128&t))break;if(r+=34359738368*(127&(t=e[i++])),0==(128&t))break;if(r+=4398046511104*(127&(t=e[i++])),0==(128&t))break;if(r+=562949953421312*(127&(t=e[i++])),0==(128&t))break;if(r+=72057594037927940*(127&(t=e[i++])),0==(128&t))break;if(r+=0x8000000000000000*(127&(t=e[i++])),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{for(var o=1;i!==this._end&&0!=(128&(t=e[i]));)++i,r+=(127&t)*o,o*=128;if(i===this._end)throw new Error("Varint overrun!");++i,r+=t*o}return this._pos=i,r},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,e,i){if(i=Math.min(this._end,i),this._textDecoder){var r=t.subarray(e,i);return this._textDecoder.decode(r)}for(var o="",n="",s=e;s<i;++s){var a=t[s];128&a?n+="%"+a.toString(16):(o+=decodeURIComponent(n)+String.fromCharCode(a),n="")}return n.length&&(o+=decodeURIComponent(n)),o},t.prototype._toBytes=function(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)},t}()}.apply(null,r))||(t.exports=o)},1475:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(2),i(1),i(28),i(0),i(1461)],void 0===(o=function(t,e,i,r,o,n,s){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.attached=!1,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e}return i(e,t),e.prototype.initialize=function(){var t=this;this.when(function(){t.requestUpdate()});var e=function(){return t.notifyChange("rendering")};this.handles.add([o.init(this,"suspended",function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestLayerViewUpdate(t)},!0),o.init(this,"fullOpacity",function(e){t.container&&(t.container.opacity=e)},!0),o.on(this,"container","post-render",e),o.on(this,"container","will-render",e)])},e.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null},Object.defineProperty(e.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),e.prototype.isVisibleAtScale=function(t){var e=!0,i=this.layer,r=i.minScale,o=i.maxScale;if(null!=r&&null!=o){var n=!r,s=!o;!n&&t<=r&&(n=!0),!s&&t>=o&&(s=!0),e=n&&s}return e},e.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},e.prototype.processUpdate=function(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1},e.prototype.isUpdating=function(){return!1},e.prototype.isRendering=function(){return!1},e.prototype.canResume=function(){var t=this.inherited(arguments);return t&&(t=this.isVisibleAtScale(this.view.scale)),t},r([n.property()],e.prototype,"attached",void 0),r([n.property()],e.prototype,"container",void 0),r([n.property()],e.prototype,"moving",void 0),r([n.property({dependsOn:["attached","suspended","moving"]})],e.prototype,"rendering",null),r([n.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],e.prototype,"suspended",void 0),r([n.property({readOnly:!0})],e.prototype,"updateParameters",void 0),r([n.property()],e.prototype,"updateRequested",void 0),r([n.property({dependsOn:["updateRequested","attached"]})],e.prototype,"updating",null),r([n.property()],e.prototype,"view",void 0),r([n.subclass("esri.views.2d.layers.LayerView2D")],e)}(n.declared(s))}.apply(null,r))||(t.exports=o)},1476:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(94),i(346)],void 0===(o=function(t,e,i,r){function o(t,e){return[t,e]}function n(t,e,i){return t[0]=e,t[1]=i,t}var s=new r("0/0/0/0");return function(){function t(t,e,i,r,o,n,s,a,l,u,p,h){this.level=t,this.resolution=e,this.scale=i,this.origin=r,this.first=o,this.last=n,this.size=s,this.norm=a,this.worldStart=l,this.worldEnd=u,this.worldSize=p,this.wrap=h}return t.create=function(e,r,s){var a,l,u,p,h=i.getInfo(e.spatialReference),d=o(e.origin.x,e.origin.y),c=o(e.size[0]*r.resolution,e.size[1]*r.resolution),f=o(-1/0,-1/0),y=o(1/0,1/0),g=o(1/0,1/0);return s&&(n(f,Math.max(0,Math.floor((s.xmin-d[0])/c[0])),Math.max(0,Math.floor((d[1]-s.ymax)/c[1]))),n(y,Math.max(0,Math.floor((s.xmax-d[0])/c[0])),Math.max(0,Math.floor((d[1]-s.ymin)/c[1]))),n(g,y[0]-f[0]+1,y[1]-f[1]+1)),e.isWrappable?(a=o(Math.ceil(Math.round(2*h.origin[1]/r.resolution)/e.size[0]),g[1]),l=o(Math.floor((h.origin[0]-d[0])/c[0]),f[1]),u=o(a[0]+l[0]-1,y[1]),p=!0):(l=f,u=y,a=g,p=!1),new t(r.level,r.resolution,r.scale,d,f,y,g,c,l,u,a,p)},t.prototype.normalizeCol=function(t){if(!this.wrap)return t;var e=this.worldSize[0];return t<0?e-1-Math.abs((t+1)%e):t%e},t.prototype.denormalizeCol=function(t,e){return this.wrap?this.worldSize[0]*e+t:t},t.prototype.getWorldForColumn=function(t){return this.wrap?Math.floor(t/this.worldSize[0]):0},t.prototype.getFirstColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]},t.prototype.getLastColumnForWorld=function(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1},t.prototype.getColumnForX=function(t){return(t-this.origin[0])/this.norm[0]},t.prototype.getXForColumn=function(t){return this.origin[0]+t*this.norm[0]},t.prototype.getRowForY=function(t){return(this.origin[1]-t)/this.norm[1]},t.prototype.getYForRow=function(t){return this.origin[1]-t*this.norm[1]},t.prototype.getTileBounds=function(t,e,i){void 0===i&&(i=!1),s.set(e);var r=i?s.col:this.denormalizeCol(s.col,s.world),o=s.row;return function(t,e,i,r,o){t[0]=e,t[1]=i,t[2]=r,t[3]=o}(t,this.getXForColumn(r),this.getYForRow(o+1),this.getXForColumn(r+1),this.getYForRow(o)),t},t.prototype.getTileCoords=function(t,e,i){void 0===i&&(i=!1),s.set(e);var r=i?s.col:this.denormalizeCol(s.col,s.world);return Array.isArray(t)?n(t,this.getXForColumn(r),this.getYForRow(s.row)):(t.x=this.getXForColumn(r),t.y=this.getYForRow(s.row)),t},t}()}.apply(null,r))||(t.exports=o)},1477:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(204),i(85),i(1469)],void 0===(o=function(t,e,i,r,o){return function(){function t(t){this.lodInfo=t,this.spans=i.acquire()}return t.prototype.release=function(){for(var t=0,e=this.spans;t<e.length;t++){var r=e[t];o.pool.release(r)}i.release(this.spans)},t.prototype.forEach=function(t,e){var i=this.spans,r=this.lodInfo,o=r.level;if(0!==i.length)for(var n=0,s=i;n<s.length;n++)for(var a=s[n],l=a.row,u=a.colFrom,p=a.colTo,h=u;h<=p;h++)t.call(e,o,l,r.normalizeCol(h),r.getWorldForColumn(h))},t.pool=new r(t,!0),t}()}.apply(null,r))||(t.exports=o)},1480:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(94),i(1476),i(1477),i(346),i(1469)],void 0===(o=function(t,e,i,r,o,n,s){var a=new n("0/0/0/0"),l=function(){function t(t,e,i,r,o,n,s,a){this.x=t,this.ymin=e,this.ymax=i,this.invM=r,this.leftAdjust=o,this.rightAdjust=n,this.leftBound=s,this.rightBound=a}return t.create=function(e,i){var r;e[1]>i[1]&&(e=(r=[i,e])[0],i=r[1]);var o=e[0],n=e[1],s=i[0],a=i[1],l=s-o,u=a-n,p=0!==u?l/u:0,h=(Math.ceil(n)-n)*p,d=(Math.floor(n)-n)*p;return new t(o,Math.floor(n),Math.ceil(a),p,l<0?h:d,l<0?d:h,l<0?s:o,l<0?o:s)},t.prototype.incrRow=function(){this.x+=this.invM},t.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)},t.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)},t}(),u=[[0,0],[0,0],[0,0],[0,0]];return function(){function t(t,e){var i=this;this.tileInfo=t,this.fullExtent=e,this.scales=[],this._lodInfos=null,this._infoByScale={},this._infoByLevel={};var o=t.lods.slice();o.sort(function(t,e){return e.scale-t.scale});var n=this._lodInfos=o.map(function(i){return r.create(t,i,e)});o.forEach(function(t,e){i._infoByLevel[t.level]=n[e],i._infoByScale[t.scale]=n[e],i.scales[e]=t.scale},this),this._wrap=t.isWrappable}return Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.tileInfo.spatialReference},enumerable:!0,configurable:!0}),t.prototype.getLODInfoAt=function(t){return this._infoByLevel["number"==typeof t?t:t.level]},t.prototype.getTileBounds=function(t,e,i){void 0===i&&(i=!1),a.set(e);var r=this._infoByLevel[a.level];return r?r.getTileBounds(t,a,i):t},t.prototype.getTileCoords=function(t,e,i){void 0===i&&(i=!1),a.set(e);var r=this._infoByLevel[a.level];return r?r.getTileCoords(t,a,i):t},t.prototype.getTileCoverage=function(t,e,i){void 0===e&&(e=192),void 0===i&&(i="closest");var r,n,a,p="closest"===i?this.getClosestInfoForScale(t.scale):this.getSmallestInfoForScale(t.scale),h=o.pool.acquire(p),d=this._wrap,c=1/0,f=-1/0,y=h.spans;u[0][0]=u[0][1]=u[1][1]=u[3][0]=-e,u[1][0]=u[2][0]=t.size[0]+e,u[2][1]=u[3][1]=t.size[1]+e;for(var g=0,v=u;g<v.length;g++){var m=v[g];t.toMap(m,m),m[0]=p.getColumnForX(m[0]),m[1]=p.getRowForY(m[1])}for(var _=[],w=3,x=0;x<4;x++)if(u[x][1]!==u[w][1]){var b=l.create(u[x],u[w]);c=Math.min(b.ymin,c),f=Math.max(b.ymax,f),void 0===_[b.ymin]&&(_[b.ymin]=[]),_[b.ymin].push(b),w=x}else w=x;if(null==c||null==f||f-c>100)return null;var M=[];for(r=c;r<f;){null!=_[r]&&(M=M.concat(_[r])),n=1/0,a=-1/0;for(x=M.length-1;x>=0;x--){b=M[x];n=Math.min(n,b.getLeftCol()),a=Math.max(a,b.getRightCol())}if(n=Math.floor(n),a=Math.floor(a),r>=p.first[1]&&r<=p.last[1])if(d)if(p.size[0]<p.worldSize[0]){var S=Math.floor(a/p.worldSize[0]);for(x=Math.floor(n/p.worldSize[0]);x<=S;x++)y.push(new s(r,Math.max(p.getFirstColumnForWorld(x),n),Math.min(p.getLastColumnForWorld(x),a)))}else y.push(new s(r,n,a));else n>p.last[0]||a<p.first[0]||(n=Math.max(n,p.first[0]),a=Math.min(a,p.last[0]),y.push(new s(r,n,a)));r+=1;for(x=M.length-1;x>=0;x--){(b=M[x]).ymax>=r?b.incrRow():M.splice(x,1)}}return h},t.prototype.getTileParentId=function(t){a.set(t);var e=this._infoByLevel[a.level],i=this._lodInfos.indexOf(e)-1;return i<0?null:(this._getTileIdAtLOD(a,this._lodInfos[i],a),a.id)},t.prototype.getTileResolution=function(t){var e=this._infoByLevel["object"==typeof t?t.level:t];return e?e.resolution:-1},t.prototype.getTileScale=function(t){var e=this._infoByLevel[t.level];return e?e.scale:-1},t.prototype.intersects=function(t,e){a.set(e);var i=this._infoByLevel[a.level],r=t.lodInfo;if(r.resolution>i.resolution){this._getTileIdAtLOD(a,r,a);for(var o=r.denormalizeCol(a.col,a.world),n=0,s=t.spans;n<s.length;n++){var l=s[n];if(l.row===a.row&&l.colFrom<=o&&l.colTo>=o)return!0}}if(r.resolution<i.resolution){var u=t.spans.reduce(function(t,e){return t[0]=Math.min(t[0],e.row),t[1]=Math.max(t[1],e.row),t[2]=Math.min(t[2],e.colFrom),t[3]=Math.max(t[3],e.colTo),t},[1/0,-1/0,1/0,-1/0]),p=u[0],h=u[1],d=u[2],c=u[3],f=i.denormalizeCol(a.col,a.world),y=r.getColumnForX(i.getXForColumn(f)),g=r.getRowForY(i.getYForRow(a.row)),v=r.getColumnForX(i.getXForColumn(f+1))-1,m=r.getRowForY(i.getYForRow(a.row+1))-1;return!(y>c||v<d||g>h||m<p)}var _=r.denormalizeCol(a.col,a.world);return t.spans.some(function(t){return t.row===a.row&&t.colFrom<=_&&t.colTo>=_})},t.prototype.normalizeBounds=function(t,e,r){if(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._wrap){var o=i.getInfo(this.tileInfo.spatialReference),n=-r*(o.valid[1]-o.valid[0]);t[0]+=n,t[2]+=n}return t},t.prototype.getSmallestInfoForScale=function(t){var e=this.scales;if(this._infoByScale[t])return this._infoByScale[t];if(t>e[0])return this._infoByScale[e[0]];for(var i=1;i<e.length-1;i++)if(t>e[i]+1e-6)return this._infoByScale[e[i-1]];return this._infoByScale[e[e.length-1]]},t.prototype.getClosestInfoForScale=function(t){var e=this.scales;return this._infoByScale[t]?this._infoByScale[t]:(t=e.reduce(function(e,i,r,o){return Math.abs(i-t)<Math.abs(e-t)?i:e},e[0]),this._infoByScale[t])},t.prototype.scaleToLevel=function(t){var e=this.scales;if(this._infoByScale[t])return this._infoByScale[t].level;for(var i=e.length-1;i>=0;i--)if(t<e[i]){return i===e.length-1?this._infoByScale[e[e.length-1]].level:this._infoByScale[e[i]].level+(e[i]-t)/(e[i]-e[i+1])}return this._infoByScale[e[0]].level},t.prototype.scaleToZoom=function(t){return this.tileInfo.scaleToZoom(t)},t.prototype._getTileIdAtLOD=function(t,e,i){var r=this._infoByLevel[i.level];return t.set(i),e.resolution<r.resolution?null:e.resolution===r.resolution?t:(t.level=e.level,t.col=Math.floor(i.col*r.resolution/e.resolution+.01),t.row=Math.floor(i.row*r.resolution/e.resolution+.01),t)},t}()}.apply(null,r))||(t.exports=o)},1604:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(7),i(10),i(12),i(8),i(36),i(35),i(94),i(152),i(1462),i(1605),i(1480),i(346)],void 0===(o=function(t,e,i,r,o,n,s,a,l,u,p,h,d,c){var f=a.create(),y=[0,0],g=new c(0,0,0,0),v={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};return function(){function t(t){var e=this;this._imagePromise=null,this.hidpi=v.hidpi,this.imageMaxWidth=v.imageMaxWidth,this.imageMaxHeight=v.imageMaxHeight,this.imageRotationSupported=v.imageRotationSupported,this.imageNormalizationSupported=v.imageNormalizationSupported,this.update=n.debounce(function(t){return o(e,void 0,void 0,function(){var e,i,o,s,a,u,p,d,c,f=this;return r(this,function(r){return e=t.state,i=l.getInfo(e.spatialReference),o=this.hidpi?t.pixelRatio:1,t.stationary?(this.imageRotationSupported?(y[0]=e.size[0],y[1]=e.size[1]):h.getOuterSize(y,e),s=Math.floor(y[0]*o)>this.imageMaxWidth||Math.floor(y[1]*o)>this.imageMaxHeight,a=i&&(e.extent.xmin<i.valid[0]||e.extent.xmax>i.valid[1]),u=!this.imageNormalizationSupported&&a,p=!s&&!u,d=this.imageRotationSupported?e.rotation:0,p?this._imagePromise=this._singleExport(e,y,d,o):(c=Math.min(this.imageMaxWidth,this.imageMaxHeight),u&&(c=Math.min(e.worldScreenWidth,c)),this._imagePromise=this._tiledExport(e,c,d,o)),[2,this._imagePromise.then(function(t){f._imagePromise=null;var e=f.container.children.slice();f.container.removeAllChildren(),t.forEach(f.container.addChild,f.container),f.disposeSource&&e.forEach(function(t){f.disposeSource(t.source)},f)}).catch(function(t){if(f._imagePromise=null,!n.isAbortError(t))throw t})]):[2]})})});var s=i({},v,t);this.container=s.container,this.disposeSource=s.disposeSource,this.fetchSource=s.fetchSource,this.requestUpdate=s.requestUpdate,this.imageMaxWidth=s.imageMaxWidth,this.imageMaxHeight=s.imageMaxHeight,this.imageRotationSupported=s.imageRotationSupported,this.imageNormalizationSupported=s.imageNormalizationSupported,this.hidpi=s.hidpi,this.requestUpdate()}return t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.updateExports=function(t){for(var e=0,i=this.container.children;e<i.length;e++){var r=i[e];if(!r.visible||!r.attached)return;t(r)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(r.invalidateTexture(),r.requestRender())}},t.prototype._export=function(t,e,i,r,o){var s=this;return n.resolve().then(function(){return s.fetchSource(t,Math.floor(e*o),Math.floor(i*o),{rotation:r,pixelRatio:o})}).then(function(i){var n=new p.Bitmap(i);return n.x=t.xmin,n.y=t.ymax,n.resolution=t.width/e,n.rotation=r,n.pixelRatio=o,n})},t.prototype._singleExport=function(t,e,i,r){h.getBBox(f,t.center,t.resolution,e);var o=new s(f[0],f[1],f[2],f[3],t.spatialReference);return this._export(o,e[0],e[1],i,r).then(function(t){return[t]})},t.prototype._tiledExport=function(t,e,i,r){var o=this,a=u.create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),l=new d(a),p=l.getTileCoverage(t);if(!p)return null;var h=[];return p.forEach(function(n,a,u,p){g.set(n,a,u,p),l.getTileBounds(f,g);var d=new s(f[0],f[1],f[2],f[3],t.spatialReference);h.push(o._export(d,e,e,i,r))}),n.all(h)},t}()}.apply(null,r))||(t.exports=o)},1605:function(t,e,i){var r,o;r=[i.dj.c(t.i),e],void 0===(o=function(t,e){function i(t){return t*r}Object.defineProperty(e,"__esModule",{value:!0});var r=Math.PI/180;e.snapToPixel=function(t,e,i){var r=i.resolution,o=i.size;return t[0]=r*(Math.round(e[0]/r)+o[0]%2*.5),t[1]=r*(Math.round(e[1]/r)+o[1]%2*.5),t},e.getOuterSize=function(t,e){var r=i(e.rotation),o=Math.abs(Math.cos(r)),n=Math.abs(Math.sin(r)),s=e.size,a=s[0],l=s[1];return t[0]=Math.round(l*n+a*o),t[1]=Math.round(l*o+a*n),t},e.getBBox=function(t,e,i,r){var o=e[0],n=e[1],s=r[0],a=r[1],l=.5*i;return t[0]=o-l*s,t[1]=n-l*a,t[2]=o+l*s,t[3]=n+l*a,t},e.bboxIntersects=function(t,e){var i=t[0],r=t[1],o=t[2],n=t[3],s=e[0],a=e[1],l=e[2],u=e[3];return!(i>l||o<s||r>u||n<a)}}.apply(null,r))||(t.exports=o)},1728:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(2),i(1),i(10),i(12),i(15),i(8),i(0),i(1468)],void 0===(o=function(t,e,i,r,o,n,s,a,l,u){return function(t){function e(e){return t.call(this,e)||this}return i(e,t),e.prototype.fetchPopupFeatures=function(t){return n(this,void 0,void 0,function(){var e,i,r,n,l,u,p,h,d;return o(this,function(o){if(e=this.layer,!t)return[2,a.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:e}))];if(!(i=e.popupEnabled))return[2,a.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i}))];if(r=this.createFetchPopupFeaturesQuery(t),n=r.extent,l=r.width,u=r.height,p=r.x,h=r.y,!(n&&l&&u))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:l,height:u});return[2,(d=e.fetchFeatureInfo(n,l,u,p,h))?d.then(function(t){return[t]}):a.resolve([])]})})},r([l.property()],e.prototype,"layer",void 0),r([l.subclass("esri.views.layers.WMSLayerView")],e)}(l.declared(u))}.apply(null,r))||(t.exports=o)},2456:function(t,e,i){var r,o;r=[i.dj.c(t.i),e,i(7),i(2),i(1),i(10),i(12),i(20),i(0),i(36),i(1715),i(1462),i(1475),i(1604),i(1728)],void 0===(o=function(t,e,i,r,o,n,s,a,l,u,p,h,d,c,f){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._handles=new a,e.container=new h.BitmapContainer,e}return r(e,t),e.prototype.hitTest=function(t,e){return null},e.prototype.update=function(t){this.strategy.update(t),this.notifyChange("updating")},e.prototype.attach=function(){var t=this,e=this.layer,i=e.imageMaxHeight,r=e.imageMaxWidth;this.strategy=new c({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:i,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this._exportWMSImageParameters=new p({layer:this.layer}),this._handles.add(this._exportWMSImageParameters.watch("version",function(e){t._exportImageVersion!==e&&(t._exportImageVersion=e,t._exportWMSImageParameters.layers?t.requestUpdate():t.container.removeAllChildren())}))},e.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportWMSImageParameters.layer=null,this._exportWMSImageParameters.destroy(),this._exportWMSImageParameters=null,this.container.removeAllChildren()},e.prototype.moveStart=function(){},e.prototype.viewChange=function(){},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.canResume=function(){var t=this.inherited(arguments);return t?this.layer.supportsSpatialReference(this.view.spatialReference):t},e.prototype.createFetchPopupFeaturesQuery=function(t){var e=this.container,i=this.view,r=t.x,o=t.y,n=i.spatialReference,s=null,a=0,l=0;e.children.some(function(t){var e=t.width,i=t.height,p=t.resolution,h=t.x,d=t.y,c=h+p*e,f=d-p*i;return r>=h&&r<=c&&o<=d&&o>=f&&(s=new u({xmin:h,ymin:f,xmax:c,ymax:d,spatialReference:n}),a=e,l=i,!0)});var p=s.width/a,h=Math.round((r-s.xmin)/p),d=Math.round((s.ymax-o)/p);return{extent:s,width:a,height:l,x:h,y:d}},e.prototype.doRefresh=function(t){return s(this,void 0,void 0,function(){return n(this,function(t){return this.requestUpdate(),[2]})})},e.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},e.prototype.fetchImage=function(t,e,r,o){var n=this;return o=i({timestamp:this.refreshTimestamp},o),this.layer.fetchImage(t,e,r,o).then(function(t){return n.notifyChange("updating"),t})},o([l.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],e.prototype,"suspended",void 0),o([l.subclass("esri.views.2d.layers.WMSLayerView2D")],e)}(l.declared(d,f))}.apply(null,r))||(t.exports=o)}}]);