angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    // $scope.mySlides = [
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //     'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    // ];
     $scope.section = {
     one: "views/content/section/section1.html",
     two: "views/content/section/section2.html",
     three: "views/content/section/section3.html",
     four: "views/content/section/section4.html"
   };
})

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})



.controller('ProductCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("product"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Product"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

      $scope.tab = "design";
    $scope.classa = 'active';
    $scope.classb = '';
    $scope.classc = '';
   

    $scope.tabchange = function(tab, a) {
        $scope.tab = tab;
        if (a == 1) {
            $scope.classa = 'active-tab';
            $scope.classb = '';
            $scope.classc = '';
           

        }
        if (a == 2) {
            $scope.classb = 'active-tab';
            $scope.classa = '';
            $scope.classc = '';
          

        }
        if (a == 3) {
            $scope.classc = 'active-tab';
            $scope.classb = '';
            $scope.classa = '';
        

        }
    

    };
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("about"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("About"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('AboutusCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("aboutus"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Aboutus"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('Google-Map-2Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("google-map-2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Google-Map-2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('Google-MapCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("google-map"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Google-Map"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('Support-DfmCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("support-dfm"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Support-Dfm"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('supportDfm2Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("support-dfm-2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Support Dfm 2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('ServiceCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("service"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Service"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('How-We-WorkCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("how-we-work"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("How-We-Work"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('MycartCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("mycart"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Mycart"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('PrivacyPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("privacypolicy"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("PrivacyPolicy"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('TermsandConditionsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("terms"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("TermsandConditions"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('MemberPageCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("member-page"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("MemberPage"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('MemberCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("member"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Member"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
.controller('MemberPage2Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("member-page-2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("MemberPage2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('Blog-IndividualCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("blog-individual"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Blog-Individual"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("blog"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Blog"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})
.controller('headerctrl', function($scope,$uibModal ,TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.login =function(){
        $scope.loginModal =$uibModal.open({
          animation :true,
          templateUrl:'views/content/Modal/login.html',
          scope:$scope,
          windowClass:"login-modal"

        });
    };
    $scope.loginclose =function(){
        $scope.loginModal.close();
    };


})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;