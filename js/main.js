const blogNameWidth=$('#blog_name').width()
const menusWidth=$('.menus').width()
const sidebarWidth=$('#sidebar').width()
const adjustMenu=function(n){const $nav=$('#nav')
let t
if(n===0)t=true
else if(n===1)t=blogNameWidth+menusWidth>$nav.width()-sidebarWidth-30
else t=blogNameWidth+menusWidth>$nav.width()-30
if(t){$nav.find('.toggle-menu').addClass('is-visible-inline')
$nav.find('.menus_items').addClass('is-invisible')
$nav.find('#search_button span').addClass('is-invisible')}else{$nav.find('.toggle-menu').removeClass('is-visible-inline')
$nav.find('.menus_items').removeClass('is-invisible')
$nav.find('#search_button span').removeClass('is-invisible')}}
const initAdjust=()=>{if(window.innerWidth<768)adjustMenu(0)
else adjustMenu(2)
$('#nav').css({opacity:'1',animation:'headerNoOpacity 1s'})}
const OpenSidebarAuto=()=>{if(window.innerWidth>1024&&$('#toggle-sidebar').hasClass('on')){setTimeout(function(){openSidebar()},400)}}
const closeSidebar=()=>{$('#sidebar').removeClass('tocOpenPc').animate({left:'-300px'},400)
$('.menus').animate({paddingRight:0},400)
$('#body-wrap').animate({paddingLeft:0},400)
$('#toggle-sidebar').css({transform:'rotateZ(0deg)',color:'#1F2D3D',opacity:'1'})
setTimeout(function(){adjustMenu(2)},400)}
const openSidebar=()=>{adjustMenu(1)
$('#sidebar').addClass('tocOpenPc').animate({left:0},400)
$('.menus').animate({paddingRight:300},400)
$('#body-wrap').animate({paddingLeft:300},400)
$('#toggle-sidebar').css({transform:'rotateZ(180deg)',color:'#99a9bf',opacity:'1'})}
const toggleSidebar=function(){$('#toggle-sidebar').on('click',function(){const isOpen=$(this).hasClass('on')
isOpen?$(this).removeClass('on'):$(this).addClass('on')
if(isOpen){closeSidebar()}else{openSidebar()}})}
const sidebarFn=()=>{const $toggleMenu=$('.toggle-menu')
const $mobileSidebarMenus=$('#mobile-sidebar-menus')
const $mobileTocButton=$('#mobile-toc-button')
const $menuMask=$('#menu_mask')
const $body=$('body')
const $sidebar=$('#sidebar')
function openMobileSidebar(name){sidebarPaddingR()
$body.css('overflow','hidden')
$menuMask.fadeIn()
if(name==='menu'){$toggleMenu.removeClass('close').addClass('open')
$mobileSidebarMenus.addClass('open')}
if(name==='toc'){$mobileTocButton.removeClass('close').addClass('open')
$sidebar.addClass('tocOpenMobile').css({transform:'translate3d(-100%,0,0)',left:''})}}
function closeMobileSidebar(name){$body.css({overflow:'','padding-right':''})
$menuMask.fadeOut()
if(name==='menu'){$toggleMenu.removeClass('open').addClass('close')
$mobileSidebarMenus.removeClass('open')}
if(name==='toc'){$mobileTocButton.removeClass('open').addClass('close')
$sidebar.removeClass('tocOpenMobile').css({transform:''})}}
$toggleMenu.on('click',function(){openMobileSidebar('menu')})
$mobileTocButton.on('click',function(){openMobileSidebar('toc')})
$menuMask.on('click touchstart',function(e){if($toggleMenu.hasClass('open')){closeMobileSidebar('menu')}
if($mobileTocButton.hasClass('open')){closeMobileSidebar('toc')}})
$(window).on('resize',function(e){if(!$toggleMenu.is(':visible')){if($toggleMenu.hasClass('open'))closeMobileSidebar('menu')}})
const mql=window.matchMedia('(max-width: 1024px)')
mql.addListener(function(ev){if(ev.matches){if($sidebar.hasClass('tocOpenPc'))closeSidebar()}else{if($('#toggle-sidebar').hasClass('on'))openSidebar()
if($mobileTocButton.hasClass('open'))closeMobileSidebar('toc')}})
$sidebar.find('.toc-link').on('click',function(e){if(window.innerWidth<=1024){closeMobileSidebar('toc')}else{e.preventDefault()
scrollToDest(decodeURI($(this).attr('href')))}})}
const scrollDownInIndex=()=>{$('#scroll_down').on('click',function(){scrollToDest('#content-inner')})}
const addHighlightTool=function(){const $figureHighlight=$('figure.highlight')
const isHighlightCopy=GLOBAL_CONFIG.highlightCopy
const isHighlightLang=GLOBAL_CONFIG.highlightLang
const isHighlightShrink=GLOBAL_CONFIG_SITE.isHighlightShrink
if($figureHighlight.length&&(isHighlightCopy||isHighlightLang||isHighlightShrink!==undefined)){let highlightShrinkEle=''
let highlightCopyEle=''
const highlightShrinkClass=isHighlightShrink===true?'closed':''
if(isHighlightShrink!==undefined){highlightShrinkEle=`<i class="fas fa-angle-down expand ${highlightShrinkClass}"></i>`}
if(isHighlightCopy){highlightCopyEle='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'}
if(isHighlightLang){let langName
$figureHighlight.each(function(){const $this=$(this)
langName=$this.attr('class').split(' ')[1]
if(langName==='plain'||langName===undefined)langName='Code'
const highlightLangEle=`<div class="code-lang">${langName}</div>`;$this.prepend(`<div class="highlight-tools ${highlightShrinkClass}">${highlightShrinkEle+highlightLangEle+highlightCopyEle}</div>`)})}else{$figureHighlight.prepend(`<div class="highlight-tools ${highlightShrinkClass}">${highlightShrinkEle+highlightCopyEle}</div>`)}
if(isHighlightShrink!==undefined){$figureHighlight.find('.highlight-tools >.expand').on('click',function(){const $this=$(this)
const $table=$this.parent().nextAll()
$this.toggleClass('closed')
$table.is(':visible')?$table.css('display','none'):$table.css('display','block')})}
if(isHighlightCopy){const copy=function(text,ctx){if(document.queryCommandSupported&&document.queryCommandSupported('copy')){document.execCommand('copy')
if(GLOBAL_CONFIG.Snackbar!==undefined){snackbarShow(GLOBAL_CONFIG.copy.success)}else{$(ctx).prev('.copy-notice').text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(ctx).prev('.copy-notice').animate({opacity:0},650)},400)})}}else{if(GLOBAL_CONFIG.Snackbar!==undefined){snackbarShow(GLOBAL_CONFIG.copy.noSupport)}else{$(ctx).prev('.copy-notice').text(GLOBAL_CONFIG.copy.noSupport)}}}
$figureHighlight.find('.highlight-tools >.copy-button').on('click',function(){const $buttonParent=$(this).parents('figure.highlight')
$buttonParent.addClass('copy-true')
const selection=window.getSelection()
const range=document.createRange()
range.selectNodeContents($buttonParent.find('table .code pre')[0])
selection.removeAllRanges()
selection.addRange(range)
const text=selection.toString()
copy(text,this)
selection.removeAllRanges()
$buttonParent.removeClass('copy-true')})}}}
function addPhotoFigcaption(){const images=$('#article-container img').not('.justified-gallery img')
images.each(function(i,o){const $this=$(o)
if($this.attr('alt')){const t=$('<div class="img-alt is-center">'+$this.attr('alt')+'</div>')
$this.after(t)}})}
let detectJgJsLoad=false
const runJustifiedGallery=function(){const $justifiedGallery=$('.justified-gallery')
if($justifiedGallery.length){const $imgList=$justifiedGallery.find('img')
$imgList.unwrap()
if($imgList.length){$imgList.each(function(i,o){if($(o).attr('data-lazy-src'))$(o).attr('src',$(o).attr('data-lazy-src'))
$(o).wrap('<div></div>')})}
if(detectJgJsLoad)initJustifiedGallery($justifiedGallery)
else{$('head').append(`<link rel="stylesheet"type="text/css"href="${GLOBAL_CONFIG.justifiedGallery.css}">`)
$.getScript(`${GLOBAL_CONFIG.justifiedGallery.js}`,function(){initJustifiedGallery($justifiedGallery)})
detectJgJsLoad=true}}}
const addLightBox=function(){const isMediumZoom=GLOBAL_CONFIG.medium_zoom
const isFancybox=GLOBAL_CONFIG.fancybox
if(isFancybox){const images=$('#article-container img:not(.gallery-group-img)').not($('a>img'))
images.each(function(i,o){const lazyloadSrc=$(o).attr('data-lazy-src')?$(o).attr('data-lazy-src'):$(o).attr('src')
const dataCaption=$(o).attr('alt')?$(o).attr('alt'):''
$(o).wrap(`<a href="${lazyloadSrc}"data-fancybox="group"data-caption="${dataCaption}"class="fancybox"></a>`)})
$().fancybox({selector:'[data-fancybox]',loop:true,transitionEffect:'slide',protect:true,buttons:['slideShow','fullScreen','thumbs','close'],hash:false})}else if(isMediumZoom){const zoom=mediumZoom(document.querySelectorAll('#article-container :not(a)>img'))
zoom.on('open',function(event){const photoBg=$(document.documentElement).attr('data-theme')==='dark'?'#121212':'#fff'
zoom.update({background:photoBg})})}}
const scrollFn=function(){let initTop=0
let isChatShow=true
const $rightside=$('#rightside')
const $nav=$('#nav')
const isChatBtnHide=typeof chatBtnHide==='function'
const isChatBtnShow=typeof chatBtnShow==='function'
$(window).scroll(throttle(function(event){const currentTop=$(this).scrollTop()
const isDown=scrollDirection(currentTop)
if(currentTop>56){if(isDown){if($nav.hasClass('visible'))$nav.removeClass('visible')
if(isChatBtnShow&&isChatShow===true){chatBtnHide()
isChatShow=false}}else{if(!$nav.hasClass('visible'))$nav.addClass('visible')
if(isChatBtnHide&&isChatShow===false){window.chatBtnShow()
isChatShow=true}}
$nav.addClass('fixed')
if($rightside.css('opacity')==='0'){$rightside.css({opacity:'1',transform:'translateX(-38px)'})}}else{if(currentTop===0){$nav.removeClass('fixed').removeClass('visible')}
$rightside.css({opacity:'',transform:''})}},200))
function scrollDirection(currentTop){const result=currentTop>initTop
initTop=currentTop
return result}}
const tocFn=function(){$('.toc-child').hide()
$(window).scroll(throttle(function(event){const currentTop=$(this).scrollTop()
scrollPercent(currentTop)
findHeadPosition(currentTop)
autoScrollToc(currentTop)},100))
const expandToc=function($item){if($item.is(':visible')){return}
$item.fadeIn(400)}
const scrollPercent=function(currentTop){const docHeight=$('#article-container').height()
const winHeight=$(window).height()
const contentMath=(docHeight>winHeight)?(docHeight-winHeight):($(document).height()-winHeight)
const scrollPercent=(currentTop)/(contentMath)
const scrollPercentRounded=Math.round(scrollPercent*100)
const percentage=(scrollPercentRounded>100)?100:(scrollPercentRounded<=0)?0:scrollPercentRounded
$('.progress-num').text(percentage)
$('.sidebar-toc__progress-bar').animate({width:percentage+'%'},100)}
const isAnchor=GLOBAL_CONFIG.isanchor
const updateAnchor=function(anchor){if(window.history.replaceState&&anchor!==window.location.hash){window.history.replaceState(undefined,undefined,anchor)}}
const findHeadPosition=function(top){if($('.toc-link').length===0){return false}
const list=$('#article-container').find('h1,h2,h3,h4,h5,h6')
let currentId=''
list.each(function(){const head=$(this)
if(top>head.offset().top-25){currentId='#'+encodeURI($(this).attr('id'))}})
if(currentId===''){$('.toc-link').removeClass('active')
$('.toc-child').hide()}
const currentActive=$('.toc-link.active')
if(currentId&&currentActive.attr('href')!==currentId){if(isAnchor)updateAnchor(currentId)
$('.toc-link').removeClass('active')
const _this=$('.toc-link[href="'+currentId+'"]')
_this.addClass('active')
const parents=_this.parents('.toc-child')
const topLink=(parents.length>0)?parents.last():_this
expandToc(topLink.closest('.toc-item').find('.toc-child'))
topLink.closest('.toc-item').siblings('.toc-item').find('.toc-child').hide()}}
const autoScrollToc=function(currentTop){if($('.toc-link').hasClass('active')){const activePosition=$('.active').offset().top
const sidebarScrollTop=$('#sidebar .sidebar-toc__content').scrollTop()
if(activePosition>(currentTop+$(window).height()-100)){$('#sidebar .sidebar-toc__content').scrollTop(sidebarScrollTop+100)}
if(activePosition<currentTop+100){$('#sidebar .sidebar-toc__content').scrollTop(sidebarScrollTop-100)}}}}
const $rightsideEle=$('#rightside')
$rightsideEle.on('click','#readmode',function(){$('body').toggleClass('read-mode')})
const originFontSize=$('body').css('font-size')
$rightsideEle.on('click','#font_plus',()=>{const nowFontSize=parseFloat($('body').css('font-size'))
if(nowFontSize<20){$('body').css('font-size',nowFontSize+1)}})
$rightsideEle.on('click','#font_minus',()=>{const nowFontSize=parseFloat($('body').css('font-size'))
if(nowFontSize>10){$('body').css('font-size',nowFontSize-1)}})
if($('#darkmode').length){const switchReadMode=function(){const nowMode=document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light'
if(nowMode==='light'){activateDarkMode()
Cookies.set('theme','dark',2)
GLOBAL_CONFIG.Snackbar!==undefined&&snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)}else{activateLightMode()
Cookies.set('theme','light',2)
GLOBAL_CONFIG.Snackbar!==undefined&&snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)}}
$rightsideEle.on('click','#darkmode',()=>{switchReadMode()
typeof utterancesTheme==='function'&&utterancesTheme()
typeof FB==='object'&&window.loadFBComment()
window.DISQUS&&$('#disqus_thread').children().length&&setTimeout(()=>window.disqusReset(),200)})}
$rightsideEle.on('click','#rightside_config',()=>$('#rightside-config-hide').toggleClass('show'))
$rightsideEle.on('click','#go-up',()=>scrollToDest('body'))
const clickFnOfSubMenu=function(){$('#mobile-sidebar-menus .expand').on('click',function(){$(this).parents('.menus_item').find('> .menus_item_child').slideToggle()
$(this).toggleClass('closed')})
$(window).on('touchmove',function(e){const $menusChild=$('#nav .menus_item_child')
if($menusChild.is(':visible')){$menusChild.css('display','none')}})}
const addCopyright=()=>{const copyright=GLOBAL_CONFIG.copyright
document.body.oncopy=(e)=>{e.preventDefault()
let textFont;const copyFont=window.getSelection(0).toString()
if(copyFont.length>copyright.limitCount){textFont=copyFont+'\n'+'\n'+'\n'+
copyright.languages.author+'\n'+
copyright.languages.link+window.location.href+'\n'+
copyright.languages.source+'\n'+
copyright.languages.info}else{textFont=copyFont}
if(e.clipboardData){return e.clipboardData.setData('text',textFont)}else{return window.clipboardData.setData('text',textFont)}}}
const addRuntime=()=>{const $runtimeCount=$('#webinfo-runtime-count')
if($runtimeCount.length){const publishDate=$runtimeCount.attr('publish_date')
$runtimeCount.text(diffDate(publishDate)+' '+GLOBAL_CONFIG.runtime_unit)}}
const addTableWrap=function(){const $table=$('#article-container table').not($('figure.highlight > table'))
$table.each(function(){$(this).wrap('<div class="table-wrap"></div>')})}
const pushToBaidu=()=>{const bp=document.createElement('script')
const curProtocol=window.location.protocol.split(':')[0]
if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}
bp.dataset.pjax=''
const s=document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(bp,s)}
const clickFnOfTagHide=function(){const $hideInline=$('.hide-button')
if($hideInline.length){$hideInline.on('click',function(e){const $this=$(this)
const $hideContent=$(this).next('.hide-content')
$this.toggleClass('open')
$hideContent.toggle()
if($this.hasClass('open')){if($hideContent.find('.justified-gallery').length>0){initJustifiedGallery($hideContent.find('.justified-gallery'))}}})}}
const clickFnOfTabs=function(){const $tab=$('#article-container .tabs')
$tab.find('.tab > button').on('click',function(e){const $this=$(this)
const $tabItem=$this.parent()
if(!$tabItem.hasClass('active')){const $tabContent=$this.parents('.nav-tabs').next()
$tabItem.siblings('.active').removeClass('active')
$tabItem.addClass('active')
const tabId=$this.attr('data-href')
$tabContent.find('> .tab-item-content').removeClass('active')
$tabContent.find(`>${tabId}`).addClass('active')
const $isTabJustifiedGallery=$tabContent.find(tabId).find('.justified-gallery')
if($isTabJustifiedGallery.length>0){initJustifiedGallery($isTabJustifiedGallery)}}})}
const toggleCardCategory=function(){const $cardCategory=$('.card-category-list-item.parent i')
$cardCategory.on('click',function(e){e.preventDefault()
const $this=$(this)
$this.toggleClass('expand')
$this.parents('.parent').next().toggle()})}
const switchComments=function(){let switchDone=false
$('#switch-comments-btn').on('click',function(){$('#post-comment > .comment-wrap > div').each(function(){if($(this).is(':visible')){$(this).hide()}else{$(this).css({display:'block',animation:'tabshow .5s'})}})
if(!switchDone&&typeof loadOtherComment==='function'){switchDone=true
loadOtherComment()}})}
const addPostOutdateNotice=function(){const data=GLOBAL_CONFIG.noticeOutdate
var diffDay=diffDate(GLOBAL_CONFIG_SITE.postUpdate)
if(diffDay>=data.limitDay){const code=`<div class="post-outdate-notice">${data.messagePrev+' '+diffDay+' '+data.messageNext}</div>`;if(data.position==='top'){$('#article-container').prepend(code)}else{$('#article-container').append(code)}}}
if(GLOBAL_CONFIG.islazyload){window.lazyLoadOptions={elements_selector:'img',threshold:0,data_src:'lazy-src'}
window.addEventListener('LazyLoad::Initialized',function(event){window.lazyLoadInstance=event.detail.instance},false)}
const unRefreshFn=function(){$(window).on('resize',function(){if(window.innerWidth<768)adjustMenu(0)
else if($('#sidebar').hasClass('tocOpenPc')&&$('#nav').hasClass('fixed'))adjustMenu(1)
else adjustMenu(2)})
clickFnOfSubMenu()
GLOBAL_CONFIG.copyright!==undefined&&addCopyright()
GLOBAL_CONFIG.baiduPush&&pushToBaidu()}
const refreshFn=function(){initAdjust()
if(GLOBAL_CONFIG_SITE.isPost){OpenSidebarAuto()
toggleSidebar()
GLOBAL_CONFIG_SITE.isSidebar&&tocFn()
GLOBAL_CONFIG.noticeOutdate!==undefined&&addPostOutdateNotice()}
sidebarFn()
GLOBAL_CONFIG_SITE.isHome&&scrollDownInIndex()
addHighlightTool()
GLOBAL_CONFIG.isPhotoFigcaption&&addPhotoFigcaption()
runJustifiedGallery()
addLightBox()
scrollFn()
GLOBAL_CONFIG.runtime&&addRuntime()
addTableWrap()
clickFnOfTagHide()
clickFnOfTabs()
toggleCardCategory()
switchComments()}
$(function(){refreshFn()
unRefreshFn()})