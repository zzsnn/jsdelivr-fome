"use strict";$(function(){var a=void 0!==GLOBAL_CONFIG.Snackbar,s=$("#nav"),o=$("#rightside"),e=$("body"),i=$("#blog_name").width(),n=$(".menus").width(),c=$("#sidebar").width();function t(e){var t;1===e?t=i+n>s.width()-c-20:2===e&&(t=i+n>s.width()-20),t?r():(s.find(".toggle-menu").removeClass("is-visible-inline"),s.find(".menus_items").removeClass("is-invisible"),s.find("#search_button span").removeClass("is-invisible"))}function r(){s.find(".toggle-menu").addClass("is-visible-inline"),s.find(".menus_items").addClass("is-invisible"),s.find("#search_button span").addClass("is-invisible")}function d(){window.innerWidth<768?r():t(2)}function l(){$("#sidebar").removeClass("tocOpenPc"),$(".menus").animate({paddingRight:0},400),$("#body-wrap").animate({paddingLeft:0},400),$("#sidebar").animate({left:"-300px"},400),$("#toggle-sidebar").css({transform:"rotateZ(0deg)",color:"#1F2D3D",opacity:"1"}),setTimeout(function(){t(2)},400)}function h(){$("#sidebar").addClass("tocOpenPc"),$(".menus").animate({paddingRight:300},400),$("#body-wrap").animate({paddingLeft:300},400),$("#sidebar").animate({left:0},400),$("#toggle-sidebar").css({transform:"rotateZ(180deg)",color:"#99a9bf",opacity:"1"});var e=window.setInterval(function(){s.hasClass("fixed")?t(1):t(2)},100);setTimeout(function(){clearInterval(e)},400)}d(),$("#nav").css({opacity:"1",animation:"headerNoOpacity 1s"}),$(window).on("resize",function(){$("#sidebar").hasClass("tocOpenPc")&&s.hasClass("fixed")?t(1):d()}),GLOBAL_CONFIG_SITE.isPost&&1024<window.innerWidth&&$("#toggle-sidebar").hasClass("on")&&setTimeout(function(){h()},400),$("#toggle-sidebar").on("click",function(){var e=$(this).hasClass("on");e?$(this).removeClass("on"):$(this).addClass("on"),(e?l:h)()});var u=$(".toggle-menu"),m=$("#mobile-sidebar-menus"),f=$("#mobile-toc-button"),p=$("#menu_mask");function g(e){if(sidebarPaddingR(),$("body").css("overflow","hidden"),p.fadeIn(),"menu"===e){u.removeClass("close").addClass("open"),m.css("transform","translate3d(-100%,0,0)");for(var t=m.children(),i=0;i<=t.length;i++){var a=i/5+.2;t.eq(i).css("animation","sidebarItem "+a+"s")}}"toc"===e&&(f.removeClass("close").addClass("open"),$("#sidebar").addClass("tocOpenMobile"),$("#sidebar").css({transform:"translate3d(-100%,0,0)",left:""}))}function v(e){$("body").css({overflow:"","padding-right":""}),p.fadeOut(),"menu"===e&&(u.removeClass("open").addClass("close"),m.css("transform",""),$("#mobile-sidebar-menus > div,#mobile-sidebar-menus > hr").css("animation","")),"toc"===e&&(f.removeClass("open").addClass("close"),$("#sidebar").removeClass("tocOpenMobile"),$("#sidebar").css({transform:""}))}u.on("click",function(){g("menu")}),f.on("click",function(){g("toc")}),p.on("click touchstart",function(e){u.hasClass("open")&&v("menu"),f.hasClass("open")&&v("toc")}),$(window).on("resize",function(e){u.is(":visible")||u.hasClass("open")&&v("menu")}),window.matchMedia("(max-width: 1024px)").addListener(function(e){e.matches?$("#sidebar").hasClass("tocOpenPc")&&l():($("#toggle-sidebar").hasClass("on")&&h(),f.hasClass("open")&&v("toc"))}),$("#scroll_down").on("click",function(){scrollToDest("#content-inner")}),$("#bookmark-it").on("click",function(){if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print)return this.title=document.title,!0;var e;a?(e=GLOBAL_CONFIG.Snackbar.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.Snackbar.bookmark.message_next+".",snackbarShow(e)):alert(GLOBAL_CONFIG.bookmark.message_prev+" "+(-1!==navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL")+"+ D "+GLOBAL_CONFIG.bookmark.message_next+".")}});var b,C,w,y,_,O=$("figure.highlight");O.length&&(b=GLOBAL_CONFIG.highlightCopy,C=GLOBAL_CONFIG.highlightLang,w=GLOBAL_CONFIG_SITE.isHighlightShrink,(b||C||void 0!==w)&&O.prepend('<div class="highlight-tools"></div>'),y=$(".highlight-tools"),!0===w?y.append('<i class="fas fa-angle-down code-expand code-closed"></i>'):!1===w&&y.append('<i class="fas fa-angle-down code-expand"></i>'),$(document).on("click",".highlight-tools >.code-expand",function(){var e=$(this).parent().nextAll();$(this).hasClass("code-closed")?(e.css("display","block"),$(this).removeClass("code-closed")):(e.css("display","none"),$(this).addClass("code-closed"))}),C&&O.each(function(){"plain"===(_=$(this).attr("class").split(" ")[1])&&(_="Code"),$(this).find(".highlight-tools").append('<div class="code-lang">'+_+"</div>")}),b&&(y.append('<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),$(document).on("click",".highlight-tools>.copy-button",function(){var e=$(this).parents("figure.highlight");e.addClass("copy-true");var t=window.getSelection(),i=document.createRange();i.selectNodeContents(e.find("table .code pre")[0]),t.removeAllRanges(),t.addRange(i);t.toString();!function(t){if(document.queryCommandSupported&&document.queryCommandSupported("copy"))try{document.execCommand("copy"),a?snackbarShow(GLOBAL_CONFIG.copy.success):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0},650)},400)})}catch(e){if(!a)return $(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).animate({opacity:1},650,function(){setTimeout(function(){$(t).prev(".copy-notice").animate({opacity:0},650)},400)});snackbarShow(GLOBAL_CONFIG.copy.success)}else a?snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}(this),t.removeAllRanges(),e.removeClass("copy-true")}))),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").each(function(e,t){var i,a=$(t);a.attr("alt")&&(i=$('<div class="img-alt is-center">'+a.attr("alt")+"</div>"),a.after(i))});var L,k,G=$(".justified-gallery"),I=!1;G.length&&(I=!0,(L=G.find("img")).unwrap(),L.length&&L.each(function(e,t){$(t).attr("data-src")&&$(t).attr("src",$(t).attr("data-src")),$(t).wrap("<div></div>")}),$("head").append('<link rel="stylesheet" type="text/css" href="'+GLOBAL_CONFIG.justifiedGallery.css+'">'),loadScript(""+GLOBAL_CONFIG.justifiedGallery.js,function(){k(G)}),k=function(e){e.each(function(e,t){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})})});var x,A=GLOBAL_CONFIG.medium_zoom;GLOBAL_CONFIG.fancybox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(e,t){var i=$(t).attr("data-src")?$(t).attr("data-src"):$(t).attr("src");$(t).wrap('<a href="'+i+'" data-fancybox="group" data-caption="'+$(t).attr("alt")+'" class="fancybox"></a>')}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"]})):A&&(x=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(e){var t="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";x.update({background:t})});var B,F,N,S,T=0,D=!0,z="function"==typeof chatBtnHide,P="function"==typeof chatBtnShow;$(window).scroll(throttle(function(e){var t,i,a=$(this).scrollTop(),n=(i=T<(t=a),T=t,i);56<a?(n?(s.hasClass("visible")&&s.removeClass("visible"),P&&!0===D&&(chatBtnHide(),D=!1)):(s.hasClass("visible")||s.addClass("visible"),z&&!1===D&&(window.chatBtnShow(),D=!0)),s.addClass("fixed"),"0"===o.css("opacity")&&o.css({opacity:"1",transform:"translateX(-38px)"})):(0===a&&s.removeClass("fixed").removeClass("visible"),o.css({opacity:"",transform:""}))},200)),$("#go-up").on("click",function(){scrollToDest("body")}),GLOBAL_CONFIG_SITE.isPost&&GLOBAL_CONFIG_SITE.isSidebar&&($(".toc-child").hide(),$(window).scroll(throttle(function(e){var t=$(this).scrollTop();B(t),N(t),S(t)},100)),$(".toc-link").on("click",function(e){window.innerWidth<=1024?v("toc"):(e.preventDefault(),scrollToDest($(this).attr("href")))}),B=function(e){var t=$("#article-container").height(),i=$(window).height(),a=e/(i<t?t-i:$(document).height()-i),n=Math.round(100*a),s=100<n?100:n<=0?0:n;$(".progress-num").text(s),$(".sidebar-toc__progress-bar").animate({width:s+"%"},100)},F=GLOBAL_CONFIG.isanchor,N=function(t){if(0===$(".toc-link").length)return!1;var e=$("#article-container").find("h1,h2,h3,h4,h5,h6"),i="";e.each(function(){var e=$(this);t>e.offset().top-25&&(i="#"+$(this).attr("id"))}),""===i&&($(".toc-link").removeClass("active"),$(".toc-child").hide());var a,n,s,o,c,r=$(".toc-link.active");i&&r.attr("href")!==i&&(F&&(c=i,window.history.replaceState&&c!==window.location.hash&&window.history.replaceState(void 0,void 0,c)),$(".toc-link").removeClass("active"),(a=$('.toc-link[href="'+i+'"]')).addClass("active"),s=0<(n=a.parents(".toc-child")).length?n.last():a,(o=s.closest(".toc-item").find(".toc-child")).is(":visible")||o.fadeIn(400),s.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())},S=function(e){var t,i;$(".toc-link").hasClass("active")&&(t=$(".active").offset().top,i=$("#sidebar .sidebar-toc__content").scrollTop(),t>e+$(window).height()-100&&$("#sidebar .sidebar-toc__content").scrollTop(i+100),t<e+100&&$("#sidebar .sidebar-toc__content").scrollTop(i-100))}),$("#readmode").click(function(){$("body").toggleClass("read-mode")}),$("#font_plus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))+1)}),$("#font_minus").click(function(){e.css("font-size",parseFloat(e.css("font-size"))-1)}),$("#mobile-sidebar-menus .menus-expand").on("click",function(){$(this).hasClass("menus-closed")?($(this).parents(".menus_item").find(".menus_item_child").slideDown(),$(this).removeClass("menus-closed")):($(this).parents(".menus_item").find(".menus_item_child").slideUp(),$(this).addClass("menus-closed"))}),$(window).on("touchmove",function(e){var t=$("#nav .menus_item_child");t.is(":visible")&&t.css("display","none")}),$("#rightside_config").on("click",function(){$("#rightside-config-hide").hasClass("rightside-in")?$("#rightside-config-hide").removeClass("rightside-in").addClass("rightside-out"):$("#rightside-config-hide").removeClass("rightside-out").addClass("rightside-in")});var j,E,R,M=GLOBAL_CONFIG.copyright;void 0!==M&&(document.body.oncopy=function(e){e.preventDefault();var t=void 0,i=window.getSelection(0).toString(),t=45<i.length?i+"\n\n\n"+M.languages.author+"\n"+M.languages.link+window.location.href+"\n"+M.languages.source+"\n"+M.languages.info:i;return e.clipboardData?e.clipboardData.setData("text",t):window.clipboardData.setData("text",t)}),$("#darkmode").click(function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),Cookies.set("theme","dark",2),a&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),Cookies.set("theme","light",2),a&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme()}),GLOBAL_CONFIG.runtime&&(j=$("#webinfo-runtime-count"),E=j.attr("publish_date"),(R=function(){var e=new Date(E),t=(new Date).getTime()-e.getTime(),i=Math.floor(t/864e5);j.text(i+" "+GLOBAL_CONFIG.runtime_unit)})(),clearInterval(void 0),setInterval(R,1e4)),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),GLOBAL_CONFIG.baiduPush&&function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)}();var q=$(".hide-button");q.length&&q.on("click",function(e){var t=$(this),i=$(this).next(".hide-content");t.toggleClass("open"),i.toggle(),t.hasClass("open")&&I&&0<i.find(".justified-gallery").length&&k(i.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab button").on("click",function(e){var t,i,a,n=$(this),s=n.parent();s.hasClass("active")||(t=n.parents(".nav-tabs").next(),s.siblings(".active").removeClass("active"),s.addClass("active"),i=n.attr("data-href"),t.find("> .tab-item-content").removeClass("active"),t.find("> "+i).addClass("active"),a=t.find(i).find(".justified-gallery"),I&&0<a.length&&k(a))}),$(".card-category-list-item.parent a").on("click",function(e){if($(event.target).hasClass("card-category-list-icon")){var t=$(this);return t.find(".card-category-list-icon").toggleClass("expand"),t.parent().next().toggle(),!1}})});