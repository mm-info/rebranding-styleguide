function ArticleThumbnailAnimations(){var e=$(".link-container--article"),s=$(".link-container--article > .chevron-container--first"),d=$(".link-container--article > .chevron-container--second"),t=$(".link-container--article > .article-thumbnail__description"),n=$(".link-container--article > .article-thumbnail__shield"),h=0,r=0,c=t.offsetWidth,l=n.offsetWidth;function i(){$(e).each(function(e){t=this.childNodes[1].childNodes[1],n=this.childNodes[3],s=this.childNodes[1].childNodes[3],d=this.childNodes[1].childNodes[5],c=t.offsetWidth,l=n.offsetWidth,h=l-c-15,r=l-c-23,$(s).css("right",h),$(d).css("right",r)})}setTimeout(function(){i()},100),$(window).resize(function(){i()}),$(".article-thumbnail").mouseout(function(){var e,i,o;t=this.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[1],n=this.childNodes[1].childNodes[5],s=this.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[3],d=this.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[5],e=n,i=s,o=d,c=t.offsetWidth,l=e.offsetWidth-40,h=l-c-15,r=l-c-23,reverseArticleHoverAnimation=new TimelineMax,reverseArticleHoverAnimation.set(i,{right:"8"}),reverseArticleHoverAnimation.set(o,{right:"0"}),reverseArticleHoverAnimation.add("start",0),reverseArticleHoverAnimation.add("firstChevronStart",.1),reverseArticleHoverAnimation.to(i,.2,{right:h,ease:Power1.easeIn},"start"),reverseArticleHoverAnimation.to(o,.2,{right:r,ease:Power1.easeIn},"firstChevronStart")}),$(".article-thumbnail").mouseenter(function(){var e,i,o;t=this.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[1],n=this.childNodes[1].childNodes[5],s=this.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[3],d=this.childNodes[1].childNodes[3].childNodes[7].childNodes[1].childNodes[5],e=n,i=s,o=d,c=t.offsetWidth,l=e.offsetWidth-40,h=l-c-15,r=l-c-23,articleHoverAnimation=new TimelineMax,articleHoverAnimation.set(i,{right:h}),articleHoverAnimation.set(o,{right:r}),articleHoverAnimation.add("start",0),articleHoverAnimation.add("firstChevronStart",.1),articleHoverAnimation.to(i,.2,{right:"8",ease:Power1.easeIn},"firstChevronStart"),articleHoverAnimation.to(o,.2,{right:"0",ease:Power1.easeIn},"start")})}function ButtonAnimations(){$(".button-container").mouseout(function(){$(this).find(".button-cursor").hide()}),$(".button-container").mouseenter(function(){$(this).find(".button-cursor").show()}),$(".button-container").mousemove(function(e){$(this).find(".button-cursor").css({transform:"translate("+(e.offsetX-10)+"px, "+(e.offsetY-10)+"px)"})})}function Carousel(){$(".carousel-for__inner").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,speed:500,asNavFor:".carousel-nav__inner",dots:!0,appendDots:$(".carousel-dots")}),$(".carousel-nav__inner").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".carousel-for__inner",dots:!1,arrows:!0,appendArrows:$(".js-carousel")})}function ImageBoxAnimations(){var e=$(".block--image-box"),d=($(".chevron-container"),$(".chevron-container--first")),t=0,n=$(".chevron-container--second"),h=0,r=$(".image-box--description"),c=$(".image-box--header"),l=$(c).width(),a=$(".image-box--shield"),N=$(a).width();function i(){$(e).each(function(e){$(this).hasClass("block--image-box--large")?(c=this.childNodes[1].childNodes[5].childNodes[1],a=this.childNodes[1].childNodes[7],d=this.childNodes[1].childNodes[5].childNodes[3],n=this.childNodes[1].childNodes[5].childNodes[5]):$(this).hasClass("block--image-box--medium")&&(c=this.childNodes[1].childNodes[3].childNodes[3],a=this.childNodes[1].childNodes[5],d=this.childNodes[1].childNodes[3].childNodes[5],n=this.childNodes[1].childNodes[3].childNodes[7]),l=c.offsetWidth,N=a.offsetWidth,h=t=N-l-55,$(d).css("right",t),$(n).css("right",h)})}setTimeout(function(){i()},50),$(window).resize(function(){i()}),$(".block--image-box").mouseout(function(){var e,i,o,s;$(this).hasClass("block--image-box--large")?(c=this.childNodes[1].childNodes[5].childNodes[1],a=this.childNodes[1].childNodes[7],d=this.childNodes[1].childNodes[5].childNodes[3],n=this.childNodes[1].childNodes[5].childNodes[5],r=this.childNodes[1].childNodes[5].childNodes[7]):$(this).hasClass("block--image-box--medium")&&(c=this.childNodes[1].childNodes[3].childNodes[3],a=this.childNodes[1].childNodes[5],d=this.childNodes[1].childNodes[3].childNodes[5],n=this.childNodes[1].childNodes[3].childNodes[7],r=this.childNodes[1].childNodes[3].childNodes[9]),e=a,i=d,o=n,s=r,l=c.offsetWidth,N=e.offsetWidth,h=t=N-l-55,reverseImageBoxHoverTimeline=new TimelineMax,reverseImageBoxHoverTimeline.set(i,{right:"20"}),reverseImageBoxHoverTimeline.set(o,{right:"20"}),reverseImageBoxHoverTimeline.add("start",0),reverseImageBoxHoverTimeline.add("firstChevronStart",.1),reverseImageBoxHoverTimeline.add("grow",.2),reverseImageBoxHoverTimeline.to(i,.25,{right:t,ease:Power1.easeIn},"firstChevronStart"),reverseImageBoxHoverTimeline.to(o,.25,{right:h,ease:Power1.easeIn},"grow"),reverseImageBoxHoverTimeline.to(s,.3,{height:"0",opacity:"0",marginTop:"0",marginBottom:"0",ease:Power1.easeOut},"start")}),$(".block--image-box").mouseenter(function(){var e,i,o,s;$(this).hasClass("block--image-box--large")?(c=this.childNodes[1].childNodes[5].childNodes[1],a=this.childNodes[1].childNodes[7],d=this.childNodes[1].childNodes[5].childNodes[3],n=this.childNodes[1].childNodes[5].childNodes[5],r=this.childNodes[1].childNodes[5].childNodes[7]):$(this).hasClass("block--image-box--medium")&&(c=this.childNodes[1].childNodes[3].childNodes[3],a=this.childNodes[1].childNodes[5],d=this.childNodes[1].childNodes[3].childNodes[5],n=this.childNodes[1].childNodes[3].childNodes[7],r=this.childNodes[1].childNodes[3].childNodes[9]),e=a,i=d,o=n,s=r,l=c.offsetWidth,N=e.offsetWidth,h=t=N-l-55,imageBoxHoverTimeline=new TimelineMax,imageBoxHoverTimeline.set(i,{right:t}),imageBoxHoverTimeline.set(o,{right:h}),imageBoxHoverTimeline.set(s,{height:"auto",opacity:"1",marginTop:"12",marginBottom:"30"}),imageBoxHoverTimeline.add("start",0),imageBoxHoverTimeline.add("firstChevronStart",.05),imageBoxHoverTimeline.add("grow",.2),imageBoxHoverTimeline.to(i,.2,{right:"20",ease:Power1.easeIn},"firstChevronStart"),imageBoxHoverTimeline.to(o,.2,{right:"20",ease:Power1.easeIn},"start"),imageBoxHoverTimeline.from(s,.25,{height:"0",marginTop:"0",marginBottom:"0",ease:Power1.easeIn},"start"),imageBoxHoverTimeline.from(s,.35,{opacity:"0",ease:Power4.easeIn},"start")})}function LinkAnimations(){var s=$(".icon--double-chevron-right-link--first"),d=$(".icon--double-chevron-right-link--second");$(".js-link-container--inline").on("click touchend",function(e){var i,o;s=this.childNodes[1].childNodes[1].childNodes[3].childNodes[1],d=this.childNodes[1].childNodes[1].childNodes[3].childNodes[3],i=s,o=d,focusLinkAnimation=new TimelineMax,focusLinkAnimation.add("start",0),focusLinkAnimation.to(i,.2,{x:"170%",ease:Power3.easeIn},"start"),focusLinkAnimation.to(o,.2,{x:"140%",ease:Power3.easeIn},"start")}),$(".js-link-container--inline").mouseout(function(){var e,i;s=this.childNodes[1].childNodes[1].childNodes[3].childNodes[1],d=this.childNodes[1].childNodes[1].childNodes[3].childNodes[3],e=s,i=d,reversefocusLinkAnimation=new TimelineMax,reversefocusLinkAnimation.to(e,.2,{x:"0%",ease:Power1.easeIn}),reversefocusLinkAnimation.to(i,.2,{x:"0%",ease:Power1.easeIn})}),$(".js-link-container--inline").mouseenter(function(){var e,i;s=this.childNodes[1].childNodes[1].childNodes[3].childNodes[1],d=this.childNodes[1].childNodes[1].childNodes[3].childNodes[3],e=s,i=d,focusHoverAnimation=new TimelineMax,focusHoverAnimation.add("start",0),focusHoverAnimation.to(e,.2,{x:"20%",ease:Power1.easeIn},"start"),focusHoverAnimation.to(i,.2,{x:"125%",ease:Power1.easeIn},"start")})}$(document).ready(function(){ButtonAnimations(),LinkAnimations(),ImageBoxAnimations(),(-1<window.location.href.indexOf("capabilities")||-1<window.location.href.indexOf("style-guide"))&&(Carousel(),ArticleThumbnailAnimations())});