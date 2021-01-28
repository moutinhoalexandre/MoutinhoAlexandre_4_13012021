function setUpSpecialNavs(){$(".navbar-toggle").click(function(b){var c=$(this).closest("nav"),d=c.find("ul.site-navigation"),e=d.clone();if(d.parent().hasClass("nav-special"))if(b.stopPropagation(),$(this).hasClass("selected-nav"))$(".blocsapp-special-menu blocsnav").removeClass("open"),$(".selected-nav").removeClass("selected-nav"),setTimeout(function(){$(".blocsapp-special-menu").remove(),$("body").removeClass("lock-scroll"),$(".selected-nav").removeClass("selected-nav")},300);else{$(this).addClass("selected-nav");var a=c.attr("class").replace("navbar","").replace("row",""),f=d.parent().attr("class").replace("navbar-collapse","").replace("collapse","");($(".content-tint").length=-1)&&$("body").append("<div class=\"content-tint\"></div>"),e.insertBefore(".page-container").wrap("<div class=\"blocsapp-special-menu "+a+"\"><blocsnav class=\""+f+"\">"),$("blocsnav").prepend("<a class=\"close-special-menu animated fadeIn\" style=\"animation-delay:0.5s;\"><div class=\"close-icon\"></div></a>"),function(){var a="fadeInRight",b=0,c=60;$(".blocsapp-special-menu blocsnav").hasClass("fullscreen-nav")?(a="fadeIn",c=100):$(".blocsapp-special-menu").hasClass("nav-invert")&&(a="fadeInLeft"),$(".blocsapp-special-menu blocsnav li").each(function(){$(this).parent().hasClass("dropdown-menu")?$(this).addClass("animated fadeIn"):(b+=c,$(this).attr("style","animation-delay:"+b+"ms").addClass("animated "+a))})}(),setTimeout(function(){$(".blocsapp-special-menu blocsnav").addClass("open"),$(".content-tint").addClass("on"),$("body").addClass("lock-scroll")},10)}}),$("body").on("mousedown touchstart",".content-tint, .close-special-menu",function(){$(".content-tint").removeClass("on"),$(".selected-nav").click(),setTimeout(function(){$(".content-tint").remove()},10)}).on("click",".blocsapp-special-menu a",function(a){$(a.target).closest(".dropdown-toggle").length||$(".close-special-menu").mousedown()})}function extraNavFuncs(){$(".site-navigation a").click(function(a){$(a.target).closest(".dropdown-toggle").length||$(".navbar-collapse").collapse("hide")}),$("a.dropdown-toggle").click(function(){$(this).parent().addClass("target-open-menu"),$(this).closest(".dropdown-menu").find(".dropdown.open").each(function(){$(this).hasClass("target-open-menu")||$(this).removeClass("open")}),$(".target-open-menu").removeClass("target-open-menu")})}function setFillScreenBlocHeight(){$(".bloc-fill-screen").each(function(){var a=$(this);window.fillBodyHeight=0,$(this).find(".container").each(function(){fillPadding=2*parseInt($(this).css("padding-top")),fillBodyHeight=a.hasClass("bloc-group")?fillPadding+$(this).outerHeight()+50:fillBodyHeight+fillPadding+$(this).outerHeight()+50}),$(this).css("height",getFillHeight()+"px")})}function getFillHeight(){var a=$(window).height();return a<fillBodyHeight&&(a=fillBodyHeight+100),a}function scrollToTarget(a){1==a?a=0:2==a?a=$(document).height():(a=$(a).offset().top,$(".sticky-nav").length&&(a-=$(".sticky-nav .navbar-header").height())),$("html,body").animate({scrollTop:a},"slow"),$(".navbar-collapse").collapse("hide")}function animateWhenVisible(){hideAll(),inViewCheck(),$(window).scroll(function(){inViewCheck(),scrollToTopView(),stickyNavToggle()})}function setUpDropdownSubs(){$("ul.dropdown-menu [data-toggle=dropdown]").on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open");var b=$(this).parent().children(".dropdown-menu");b.offset().left+b.width()>$(window).width()&&b.addClass("dropmenu-flow-right")})}function stickyNavToggle(){var a=0,b="sticky";if($(".sticky-nav").hasClass("fill-bloc-top-edge")){var c=$(".fill-bloc-top-edge.sticky-nav").parent().css("background-color");"rgba(0, 0, 0, 0)"==c&&(c="#FFFFFF"),$(".sticky-nav").css("background",c),a=$(".sticky-nav").height(),b="sticky animated fadeInDown"}$(window).scrollTop()>a?($(".sticky-nav").addClass(b),"sticky"==b&&$(".page-container").css("padding-top",$(".sticky-nav").height())):($(".sticky-nav").removeClass(b).removeAttr("style"),$(".page-container").removeAttr("style"))}function hideAll(){$(".animated").each(function(){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}function inViewCheck(){$($(".hideMe").get().reverse()).each(function(){var b=jQuery(this),c=b.offset().top+b.height(),d=$(window).scrollTop()+$(window).height();if(b.height()>$(window).height()&&(c=b.offset().top),c<d){var a=b.attr("class").replace("hideMe","animated");b.css("visibility","hidden").removeAttr("class"),setTimeout(function(){b.attr("class",a).css("visibility","visible")},.01)}})}function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}function setUpVisibilityToggle(){$(document).on("click","[data-toggle-visibility]",function(b){function c(a){a.is("img")?a.toggle():a.slideToggle()}b.preventDefault();var a=$(this).attr("data-toggle-visibility");if(-1!=a.indexOf(",")){var d=a.split(",");$.each(d,function(a){c($("#"+d[a]))})}else c($("#"+a))})}function setUpLightBox(){window.targetLightbox,$(document).on("click","[data-lightbox]",function(b){b.preventDefault(),targetLightbox=$(this);var c=targetLightbox.attr("data-lightbox"),d=targetLightbox.attr("data-autoplay"),e="<p class=\"lightbox-caption\">"+targetLightbox.attr("data-caption")+"</p>",f="no-gallery-set",g=targetLightbox.attr("data-frame");targetLightbox.attr("data-gallery-id")&&(f=targetLightbox.attr("data-gallery-id")),targetLightbox.attr("data-caption")||(e="");var h="";1==d&&(h="autoplay");var i=$("<div id=\"lightbox-modal\" class=\"modal fade\"><div class=\"modal-dialog\"><div class=\"modal-content "+g+" blocs-lb-container\"><button id=\"blocs-lightbox-close-btn\" type=\"button\" class=\"close-lightbox\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><div class=\"modal-body\"><a href=\"#\" class=\"prev-lightbox\" aria-label=\"prev\"><span class=\"fa fa-chevron-left\"></span></a><a href=\"#\" class=\"next-lightbox\" aria-label=\"next\"><span class=\"fa fa-chevron-right\"></span></a><img id=\"lightbox-image\" class=\"img-responsive\" src=\""+c+"\"><div id=\"lightbox-video-container\" class=\"embed-responsive embed-responsive-16by9\"><video controls "+h+" class=\"embed-responsive-item\"><source id=\"lightbox-video\" src=\""+c+"\" type=\"video/mp4\"></video></div>"+e+"</div></div></div></div>");$("body").append(i),"fullscreen-lb"==g&&($("#lightbox-modal").addClass("fullscreen-modal").append("<a class=\"close-full-screen-modal animated fadeIn\" style=\"animation-delay:0.5s;\" onclick=\"$('#lightbox-modal').modal('hide');\"><div class=\"close-icon\"></div></a>"),$("#blocs-lightbox-close-btn").remove()),".mp4"==c.substring(c.length-4)?($("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show()):($("#lightbox-image,.lightbox-caption").show(),$("#lightbox-video-container").hide()),$("#lightbox-modal").modal("show"),"no-gallery-set"==f?(0==$("a[data-lightbox]").index(targetLightbox)&&$(".prev-lightbox").hide(),$("a[data-lightbox]").index(targetLightbox)==$("a[data-lightbox]").length-1&&$(".next-lightbox").hide()):(0==$("a[data-gallery-id=\""+f+"\"]").index(targetLightbox)&&$(".prev-lightbox").hide(),$("a[data-gallery-id=\""+f+"\"]").index(targetLightbox)==$("a[data-gallery-id=\""+f+"\"]").length-1&&$(".next-lightbox").hide()),addLightBoxSwipeSupport()}).on("hidden.bs.modal","#lightbox-modal",function(){$("#lightbox-modal").remove()}),$(document).on("click",".next-lightbox, .prev-lightbox",function(b){b.preventDefault();var c="no-gallery-set",d=$("a[data-lightbox]").index(targetLightbox),f=$("a[data-lightbox]").eq(d+1);targetLightbox.attr("data-gallery-id")&&(c=targetLightbox.attr("data-gallery-id"),d=$("a[data-gallery-id=\""+c+"\"]").index(targetLightbox),f=$("a[data-gallery-id=\""+c+"\"]").eq(d+1)),$(this).hasClass("prev-lightbox")&&(f=$("a[data-gallery-id=\""+c+"\"]").eq(d-1),"no-gallery-set"==c&&(f=$("a[data-lightbox]").eq(d-1)));var g=f.attr("data-lightbox");if(".mp4"==g.substring(g.length-4)){var h="";1==f.attr("data-autoplay")&&(h="autoplay"),$("#lightbox-image, .lightbox-caption").hide(),$("#lightbox-video-container").show().html("<video controls "+h+" class=\"embed-responsive-item\"><source id=\"lightbox-video\" src=\""+g+"\" type=\"video/mp4\"></video>")}else $("#lightbox-image").attr("src",g).show(),$(".lightbox-caption").html(f.attr("data-caption")).show(),$("#lightbox-video-container").hide();targetLightbox=f,$(".next-lightbox, .prev-lightbox").hide(),"no-gallery-set"==c?($("a[data-lightbox]").index(f)!=$("a[data-lightbox]").length-1&&$(".next-lightbox").show(),0<$("a[data-lightbox]").index(f)&&$(".prev-lightbox").show()):($("a[data-gallery-id=\""+c+"\"]").index(f)!=$("a[data-gallery-id=\""+c+"\"]").length-1&&$(".next-lightbox").show(),0<$("a[data-gallery-id=\""+c+"\"]").index(f)&&$(".prev-lightbox").show())})}function addSwipeSupport(){$(".carousel-inner").length&&$(".carousel-inner").swipe({swipeLeft:function(){$(this).parent().carousel("next")},swipeRight:function(){$(this).parent().carousel("prev")},threshold:0})}function addKeyBoardSupport(){$(window).keydown(function(a){37==a.which?$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click():39==a.which&&$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()})}function addLightBoxSwipeSupport(){$("#lightbox-image").length&&$("#lightbox-image").swipe({swipeLeft:function(){$(".next-lightbox").is(":visible")&&$(".next-lightbox").click()},swipeRight:function(){$(".prev-lightbox").is(":visible")&&$(".prev-lightbox").click()},threshold:0})}$(document).ready(function(){$("#scroll-hero").click(function(a){a.preventDefault(),$("html,body").animate({scrollTop:$("#scroll-hero").closest(".bloc").height()},"slow")}),extraNavFuncs(),setUpSpecialNavs(),setUpDropdownSubs(),setUpLightBox(),setUpVisibilityToggle(),addSwipeSupport(),addKeyBoardSupport(),-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("#page-loading-blocs-notifaction").remove()}),$(window).load(function(){setFillScreenBlocHeight(),animateWhenVisible(),$("#page-loading-blocs-notifaction").remove()}).resize(function(){setFillScreenBlocHeight()}),$(function(){$("[data-toggle=\"tooltip\"]").tooltip()});