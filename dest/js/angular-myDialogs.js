/*! angular-myDialogs 2015-06-26 */
!function(a,b){var c=b.module("myDialogs",[]);c.factory("myDialogs",["$q","$http","$compile","$controller","$rootScope","$document","$templateRequest","$timeout",function(a,c,d,e,f,g,h,i){var j=function(c){var j,k,l={},c=b.extend({backMask:!1},c),m=a.defer(),n=a.defer(),o={beforeOpen:m.promise,afterOpen:n.promise,close:function(){var b=a.defer();return b.resolve(),j.removeClass("fade"),i(function(){j.remove(),k.$destroy()},300),b.promise}},p="<div class='myDialogs' my-dialogs-config ></div>",q="<div class='backMask' ></div>",r="<div style='display:none' my-dialogs-finish ></div>",s=function(){if(c.template)return a.when(c.template);if(c.templateUrl)return h(c.templateUrl);throw"no template"};s().then(function(a){k=f.$new(),l={$scope:k,$DialogsPromise:o},c.data&&(l.$DialogsData=c.data);e(c.controller,l);j=b.element(p).html("<div class='myDialogs-inner'>"+a+"</div>"+r),c.backMask&&j.prepend(q),d(j)(k),g.find("body").append(j),n.resolve()},function(a){throw a})};return{myAlert:function(a){var c=a.type||"normal";j({templateUrl:"/myDialogs/myAlert.html",controller:"myAlertController",backMask:a.backMask,data:{type:c,msg:b.copy(a.msg)}})},myBtnAlert:function(a){var c=a.type||"normal";j({templateUrl:"/myDialogs/myBtnAlert.html",controller:"myBtnAlertController",backMask:a.backMask,data:{type:c,msg:b.copy(a.msg)}})},myConfirm:function(a){var c=b.extend({yesCallback:function(){},noCallback:function(){}},a);j({templateUrl:"/myDialogs/myConfirm.html",controller:"myConfirmController",backMask:c.backMask,data:{msg:b.copy(a.msg),yesCallback:c.yesCallback,noCallback:c.noCallback}})},popFream:function(a){var c=b.extend({},{template:"",templateUrl:"",backMask:!1,controller:""},a);j(c)}}}]).run(["$templateCache",function(a){a.put("/myDialogs/myBtnAlert.html","<div class='panel myDialogs-inner btnAlert {{type}}'><p class='msg' data-ng-bind-html='msg'></p><span class='btn myAlert-btn' ng-click='close();'>关 闭<span></div>"),a.put("/myDialogs/myAlert.html","<div class='panel myDialogs-inner alert {{type}}' ng-click='close();'><p data-ng-bind-html='msg'></p></div>"),a.put("/myDialogs/myConfirm.html","<div class='panel myDialogs-inner myConfirm {{type}}'><p class='msg' data-ng-bind-html='msg'></p><div class='btn-wapper clearfix'><button class='btn gray-btn'  ng-click='no();' >否</button><button class='btn blue-btn' ng-click='yes();'>是</button></div></div>")}]),c.controller("myAlertController",["$scope","$sce","$DialogsPromise","$DialogsData","$timeout",function(a,b,c,d,e){a.msg=b.trustAsHtml(d.msg),a.type=d.type,a.close=function(){c.close()},e(function(){c.close()},3e3)}]),c.controller("myBtnAlertController",["$scope","$sce","$DialogsPromise","$DialogsData",function(a,b,c,d){a.msg=b.trustAsHtml(d.msg),a.type=d.type,a.close=function(){c.close()}}]),c.controller("myConfirmController",["$scope","$sce","$DialogsPromise","$DialogsData",function(a,b,c,d){a.msg=b.trustAsHtml(d.msg),a.yes=function(){c.close().then(function(){d.yesCallback()})},a.no=function(){c.close().then(function(){d.noCallback()})}}]),c.directive("myDialogsConfig",function(){return{link:function(a,b,c){a.$on("myDialogsFinish",function(){var a=b[0].offsetHeight,c=b[0].offsetWidth;b.css({marginLeft:-c/2+"px",marginTop:-a/2+"px"}).addClass("center fade")})}}}),c.directive("myDialogsFinish",["timeout",function(a){return{link:function(b,c,d){a(function(){b.$emit("myDialogsFinish")})}}}])}(window,window.angular);