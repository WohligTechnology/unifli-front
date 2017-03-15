// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
         .state('about', {
            url: "/about",
            templateUrl: "views/template.html",
            controller: 'AboutCtrl'
        })
        .state('google-map-2', {
            url: "/google-map-2",
            templateUrl: "views/template.html",
            controller: 'Google-Map-2Ctrl'
        })
        .state('google-map', {
            url: "/google-map",
            templateUrl: "views/template.html",
            controller: 'Google-MapCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: "views/template.html",
            controller: 'AboutusCtrl'
        })
         .state('blog-individual', {
            url: "/blog-individual",
            templateUrl: "views/template.html",
            controller: 'Blog-IndividualCtrl'
        })
          .state('blog', {
            url: "/blog",
            templateUrl: "views/template.html",
            controller: 'BlogCtrl'
        })
              .state('product', {
            url: "/product",
            templateUrl: "views/template.html",
            controller: 'ProductCtrl'
        })
        .state('support-dfm', {
            url: "/support-dfm",
            templateUrl: "views/template.html",
            controller: 'Support-DfmCtrl'
        })
         .state('support-dfm-2', {
            url: "/support-dfm-2",
            templateUrl: "views/template.html",
            controller: 'supportDfm2Ctrl'
        })
         
         .state('service', {
            url: "/service",
            templateUrl: "views/template.html",
            controller: 'ServiceCtrl'
        })
        .state('how-we-work', {
            url: "/how-we-work",
            templateUrl: "views/template.html",
            controller: 'How-We-WorkCtrl'
        })
        .state('mycart', {
            url: "/mycart",
            templateUrl: "views/template.html",
            controller: 'MycartCtrl'
        })
         .state('member-page', {
            url: "/member-page",
            templateUrl: "views/template.html",
            controller: 'MemberPageCtrl'
        })
        .state('member', {
            url: "/member",
            templateUrl: "views/template.html",
            controller: 'MemberCtrl'
        })
         .state('contactus', {
            url: "/contactus",
            templateUrl: "views/template.html",
            controller: 'ContactUsCtrl'
        })

          .state('privacypolicy', {
            url: "/privacypolicy",
            templateUrl: "views/template.html",
            controller: 'PrivacyPolicyCtrl'
        })
         .state('terms-and-conditions', {
            url: "/terms",
            templateUrl: "views/template.html",
            controller: 'TermsandConditionsCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: "views/template.html",
            controller: 'FormCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
});
firstapp.directive('fancyboxBox', function ($document) {
 return {
   restrict: 'EA',
   replace: false,
   link: function (scope, element, attr) {
     var $element = $(element);
     var target;
     if (attr.rel) {
       target = $("[rel='" + attr.rel + "']");
     } else {
       target = element;
     }

     target.fancybox({
       openEffect: 'fade',
       closeEffect: 'fade',
       closeBtn: true,
       helpers: {
         media: {}
       }
     });
   }
 };
});
firstapp.directive('autoHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
firstapp.directive('onlyDigits', function() {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attr, ctrl) {
            var digits;

            function inputValue(val) {
                if (val) {
                    if (attr.type == "tel") {
                        digits = val.replace(/[^0-9\+\\]/g, '');
                    } else {
                        digits = val.replace(/[^0-9\-\\]/g, '');
                    }


                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});


