"use strict";var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="icon"]').attr("href","/img/trhx2.png"),document.title="(●-`Д´-)嘿嘿你去哪！",clearTimeout(titleTime)):($('[rel="icon"]').attr("href","/img/trhx2.png"),document.title="(Ő∀Ő3)欢迎回来！"+OriginTitle,titleTime=setTimeout(function(){document.title=OriginTitle},2e3))});