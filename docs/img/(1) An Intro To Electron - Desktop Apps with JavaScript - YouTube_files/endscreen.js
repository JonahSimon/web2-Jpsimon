(function(g){var window=this;var W4=function(a,b,c){var d=b.wa();g.K(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.xc(c?c:"mqdefault.jpg");var f=b instanceof g.XA&&b.lengthSeconds?g.SL(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.PD(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.XA?b.ua:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.Sj||g.BM("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.Ch(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.RD&&(d.playlist_length=b.getLength());a.update(d)},X4=function(a){g.U.call(this,{D:"div",
X:["ytp-upnext","ytp-player-content"],N:{"aria-label":"{{aria_label}}"},K:[{D:"div",I:"ytp-cued-thumbnail-overlay-image",N:{style:"{{background}}"}},{D:"span",I:"ytp-upnext-top",K:[{D:"span",I:"ytp-upnext-header",W:"Up Next"},{D:"span",I:"ytp-upnext-title",W:"{{title}}"},{D:"span",I:"ytp-upnext-author",W:"{{author}}"}]},{D:"a",I:"ytp-upnext-autoplay-icon",N:{role:"button",href:"{{url}}","aria-label":"Play next video"},K:[{D:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},K:[{D:"circle",
I:"ytp-svg-autoplay-circle",N:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",I:"ytp-svg-autoplay-ring",N:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",I:"ytp-svg-fill",N:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",I:"ytp-upnext-bottom",K:[{D:"span",I:"ytp-upnext-cancel"},{D:"span",I:"ytp-upnext-paused",W:"Autoplay is paused"}]}]});
this.B=null;var b=this.o["ytp-upnext-cancel"];this.B=new g.U({D:"button",X:["ytp-upnext-cancel-button","ytp-button"],N:{tabindex:"0","aria-label":"Cancel autoplay"},W:"Cancel"});g.B(this,this.B);this.B.ga("click",this.eK,this);this.B.ca(b);this.u=a;this.J=this.o["ytp-svg-autoplay-ring"];this.F=this.C=this.w=this.A=null;this.G=new g.I(this.Hm,5E3,this);g.B(this,this.G);this.H=0;this.L(this.o["ytp-upnext-autoplay-icon"],"click",this.OL);this.Mz();this.L(a,"autonavvisibility",this.Mz);this.L(a,"mdxnowautoplaying",
this.gL);this.L(a,"mdxautoplaycanceled",this.hL);this.L(a,"mdxautoplayupnext",this.fC);3==this.u.getPresentingPlayerType()&&(a=(a=g.lL(g.dL(this.u)))?a.GE():null)&&this.fC(a);g.K(this.element,"ytp-upnext-mobile",this.u.P().o)},Y4=function(a,b){if(!a.w){g.Mo("a11y-announce","Up Next "+a.A.title);
a.H=(0,g.iq)();a.w=new g.I((0,g.x)(a.Ip,a,b),25);a.Ip(b);var c=b||g.R(a.u.P().experiments,"autoplay_time")||1E4;a.u.la("onAutonavCoundownStarted",c)}g.Gn(a.element,"ytp-upnext-autoplay-paused")},$4=function(a){Z4(a);
a.H=(0,g.iq)();a.Ip();g.J(a.element,"ytp-upnext-autoplay-paused")},Z4=function(a){a.w&&(a.w.dispose(),a.w=null)},a5=function(a,b){b=void 0===b?!1:b;
if(g.Q(a.u.P().experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.A.wa(),a.Hm(),a.C=new Notification("Up Next",{body:c.title,icon:c.xc()}),a.F=a.L(a.C,"click",a.FL),a.G.start())}Z4(a);a.u.nextVideo(!1,b)},b5=function(a,b){g.U.call(this,{D:"div",
X:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},Vra=function(a){b5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.u=new g.U({D:"div",I:"ytp-subscribe-card",K:[{D:"img",I:"ytp-author-image",N:{src:b.Kd}},{D:"div",I:"ytp-subscribe-card-right",K:[{D:"div",I:"ytp-author-name",W:b.author},{D:"div",I:"html5-subscribe-button-container"}]}]});g.B(this,this.u);this.u.ca(this.element);this.subscribeButton=new g.ZP("Subscribe",null,"Unsubscribe",null,!0,!1,b.pg,b.subscribed,"trailer-endscreen",null,null,a);g.B(this,this.subscribeButton);this.subscribeButton.ca(this.u.o["html5-subscribe-button-container"]);
this.hide()},c5=function(a){var b=a.P(),c=g.Bv||g.sh?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.U.call(this,{D:"a",X:e,N:{href:"{{url}}",target:d?b.A:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},K:[{D:"div",I:"ytp-videowall-still-image",N:{style:"{{background}}"}},{D:"span",I:"ytp-videowall-still-info",K:[{D:"span",I:"ytp-videowall-still-info-bg",K:[{D:"span",I:"ytp-videowall-still-info-content",N:c,K:[{D:"span",I:"ytp-videowall-still-info-title",W:"{{title}}"},{D:"span",I:"ytp-videowall-still-info-author",
W:"{{author_and_views}}"},{D:"span",I:"ytp-videowall-still-info-live",W:"Live"},{D:"span",I:"ytp-videowall-still-info-duration",W:"{{duration}}"}]}]}]},{D:"span",X:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],K:[{D:"span",I:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",I:"ytp-videowall-still-listlabel-length",K:[" (",{D:"span",W:"{{playlist_length}}"},")"]}]},{D:"span",X:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],K:[{D:"span",I:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{D:"span",I:"ytp-videowall-still-listlabel-length",W:" (50+)"}]}]});this.suggestion=null;this.w=d;this.api=a;this.u=new g.O(this);g.B(this,this.u);this.ga("click",this.onClick);this.ga("keypress",this.B);this.u.L(a,"videodatachange",this.A);g.FL(a,this.element,this);this.A()},Wra=function(a){var b=a.suggestion.wa().videoId,c=a.suggestion.getPlaylistId();
(g.qT(a.api.app,b,a.suggestion.Nb,c,void 0,void 0)||a.api.fa("web_player_endscreen_double_log_fix_killswitch"))&&g.HL(a.api,a.element)},d5=function(a){b5.call(this,a,"videowall-endscreen");
var b=this;this.ba=a;this.A=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.H=!1;this.G=null;this.w=new g.O(this);g.B(this,this.w);this.F=new g.I(function(){g.J(b.element,"ytp-show-tiles")},0);
g.B(this,this.F);var c=new g.U({D:"button",X:["ytp-button","ytp-endscreen-previous"],N:{"aria-label":"Previous"},K:[g.$L()]});g.B(this,c);c.ca(this.element);c.ga("click",this.QG,this);this.table=new g.uC({D:"div",I:"ytp-endscreen-content"});g.B(this,this.table);this.table.ca(this.element);c=new g.U({D:"button",X:["ytp-button","ytp-endscreen-next"],N:{"aria-label":"Next"},K:[g.aM()]});g.B(this,c);c.ca(this.element);c.ga("click",this.PG,this);this.u=new X4(a);g.B(this,this.u);g.CL(this.player,this.u.element,
4);this.hide()},e5=function(a){return g.DL(a.player)&&a.yv()&&!a.B},Xra=function(a,b){return(0,g.Fc)(b.suggestions,function(c){c=g.BN(a.ba.P(),c);
g.B(a,c);return c})},f5=function(a){var b=a.Tr();
b!==a.H&&(a.H=b,a.player.R("autonavvisibility"))},g5=function(a){g.sP.call(this,a);
this.endScreen=null;this.listeners=new g.O(this);g.B(this,this.listeners);this.o=a.P();Yra(a)?this.endScreen=new d5(this.player):this.o.Ma?this.endScreen=new Vra(this.player):this.endScreen=new b5(this.player);g.B(this,this.endScreen);g.CL(this.player,this.endScreen.element,4);this.gB();this.listeners.L(a,"videodatachange",this.gB,this);this.listeners.L(a,g.OD("endscreen"),this.NG,this);this.listeners.L(a,"crx_endscreen",this.wK,this)},Yra=function(a){a=a.P();
return a.Ha&&!a.Ma};
g.r(X4,g.U);g.h=X4.prototype;g.h.Hm=function(){this.C&&(this.G.stop(),this.Xa(this.F),this.F=null,this.C.close(),this.C=null)};
g.h.Mz=function(){g.yC(this,g.eL(this.u))};
g.h.FL=function(){window.focus();this.Hm()};
g.h.hide=function(){g.U.prototype.hide.call(this)};
g.h.Ip=function(a){a=a||g.R(this.u.P().experiments,"autoplay_time")||1E4;var b=Math.min((0,g.iq)()-this.H,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.u.getPresentingPlayerType()?a5(this,!0):this.w&&this.w.start()};
g.h.OL=function(a){!g.Zd(this.B.element,g.Aq(a))&&g.HM(a,this.u)&&a5(this)};
g.h.eK=function(){g.gL(this.u,!0)};
g.h.gL=function(a){this.u.getPresentingPlayerType();this.show();Y4(this,a)};
g.h.fC=function(a){this.u.getPresentingPlayerType();this.A&&this.A.wa().videoId==a.wa().videoId||(this.A=a,W4(this,a,"hqdefault.jpg"))};
g.h.hL=function(){this.u.getPresentingPlayerType();Z4(this);this.hide()};
g.h.Y=function(){Z4(this);this.Hm();g.U.prototype.Y.call(this)};g.r(b5,g.U);g.h=b5.prototype;g.h.create=function(){this.created=!0};
g.h.destroy=function(){this.created=!1};
g.h.yv=function(){return!1};
g.h.Tr=function(){return!1};
g.h.Ix=function(){return!1};g.r(Vra,b5);g.r(c5,g.U);c5.prototype.onClick=function(a){g.HM(a,this.api,this.w,this.suggestion.Nb||void 0)&&Wra(this)};
c5.prototype.B=function(a){switch(a.keyCode){case 13:case 32:g.Fq(a)||(Wra(this),g.Eq(a))}};
c5.prototype.A=function(){var a=this.api.getVideoData(),b=this.api.P();this.w=a.pc?!1:b.u};g.r(d5,b5);g.h=d5.prototype;g.h.create=function(){b5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=Xra(this,a),this.videoData=a);this.lg();this.w.L(this.player,"appresize",this.lg);this.w.L(this.player,"onVideoAreaChange",this.lg);this.w.L(this.player,"videodatachange",this.SG);this.w.L(this.player,"autonavchange",this.Ur);this.w.L(this.player,"autonavcancel",this.OG);a=this.videoData.autonavState;a!==this.G&&this.Ur(a);this.w.L(this.element,"transitionend",this.eN)};
g.h.destroy=function(){g.nr(this.w);g.je(this.stills);this.stills=[];this.suggestions=null;b5.prototype.destroy.call(this);g.Gn(this.element,"ytp-show-tiles");this.F.stop();this.G=this.videoData.autonavState};
g.h.yv=function(){return 1!==this.videoData.autonavState};
g.h.show=function(){b5.prototype.show.call(this);g.Gn(this.element,"ytp-show-tiles");this.player.P().o?g.wn(this.F):this.F.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.gL(this.player,!1);e5(this)?(f5(this),2===this.videoData.autonavState?g.Q(this.player.P().experiments,"fast_autonav_in_background")&&3===this.player.getVisibilityState()?a5(this.u,!0):Y4(this.u):3===this.videoData.autonavState&&$4(this.u)):(g.gL(this.player,!0),f5(this))};
g.h.hide=function(){b5.prototype.hide.call(this);$4(this.u);f5(this)};
g.h.eN=function(a){g.Aq(a)===this.element&&this.lg()};
g.h.lg=function(){if(this.suggestions&&this.suggestions.length){g.J(this.element,"ytp-endscreen-paginate");var a=g.tL(this.ba,!0,this.ba.isFullscreen()),b=g.PC(this.ba);b&&(b=b.dc()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,u=b<=f-2&&n>=t*m,z=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&z)n-=q*m,e+=2;else if(u)n-=
t*m,b+=2;else if(z)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.nd(a.width/m||1,1,1.21);n*=g.nd(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.table.element;g.Ih(a,m,n);g.ph(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.u;f=this.suggestions[0];c.A=f;W4(c,f,"hqdefault.jpg");g.K(this.element,"ytp-endscreen-takeover",e5(this));f5(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,t=0,d&&f>=b-2&&k>=e-2?t=1:0===k%2&&0===f%2&&(2>k&&2>f?0===k&&0===f&&(t=2):t=2),q=g.od(q+this.A,l),0!==t){u=this.stills[c];u||(u=new c5(this.player),this.stills[c]=u,a.appendChild(u.element));z=Math.floor(n*k/e);var C=Math.floor(m*f/b),D=Math.floor(n*(k+t)/e)-z-4,G=Math.floor(m*(f+t)/b)-C-4;g.yh(u.element,C,z);g.Ih(u.element,G,D);g.ph(u.element,"transitionDelay",(k+f)/20+"s");g.K(u.element,"ytp-videowall-still-mini",1===t);g.K(u.element,"ytp-videowall-still-large",
2<t);t=u;q=this.suggestions[q];t.suggestion!==q&&(t.suggestion=q,u=t.api.P(),z=g.En(t.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",W4(t,q,z),g.px(u)&&(u=q.Ch(),u=g.ah(u,g.yD({},"emb_rel_end")),t.ha("url",u)),(q=(q=q.Nb)&&q.itct)&&g.GL(t.api,t.element,q));c++}g.K(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Vd(e.element),g.ie(e);this.stills.length=c}};
g.h.SG=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.A=0,this.suggestions=Xra(this,a),this.videoData=a,this.lg())};
g.h.PG=function(){this.A+=this.stills.length;this.lg()};
g.h.QG=function(){this.A-=this.stills.length;this.lg()};
g.h.Ix=function(){return!!this.u.w};
g.h.Ur=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,Z4(this.u),this.Ea()&&this.lg()):(this.C=!0,this.Ea()&&e5(this)&&(2===a?Y4(this.u):3===a&&$4(this.u)))};
g.h.OG=function(a){if(a){for(a=0;a<this.stills.length;a++)g.IL(this.ba,this.stills[a].element,!0);this.Ur(1)}else this.B=null,this.C=!1;this.lg()};
g.h.Tr=function(){return this.Ea()&&e5(this)};g.r(g5,g.sP);g.h=g5.prototype;g.h.wy=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!Yra(this.player)||b;var c=a.ti||g.yx(a.La),d=g.LS(this.player.app);a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.vy=function(){return this.endScreen.Tr()};
g.h.DF=function(){return this.vy()?this.endScreen.Ix():!1};
g.h.Y=function(){g.JQ(this.player.app,"endscreen",void 0);g.sP.prototype.Y.call(this)};
g.h.load=function(){g.sP.prototype.load.call(this);this.endScreen.show()};
g.h.unload=function(){g.sP.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.h.NG=function(a){this.wy()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.h.wK=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.h.gB=function(){g.JQ(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.LD(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});g.B(this,a);var b=new g.LD(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.B(this,b);g.yL(this.player,[a,b])};g.HP.endscreen=g5;})(_yt_player);
