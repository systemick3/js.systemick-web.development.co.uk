// Controllers
describe('containerCtrl', function() {
    var scope, location, createController, http;

    beforeEach(module('systemick'));

    beforeEach(inject(function ($rootScope, $controller, $location, $http) {
        location = $location;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('containerCtrl', {
                '$scope': scope,
            });
        };
    }));

    it('has variables', function() {
      var controller = createController();
      location.path('/about');
      expect(location.path()).toBe('/about');
      expect(scope.getMenuClass('/about')).toBe('active');
      expect(scope.getMenuClass('/contact')).toBe('');
      expect(scope.currentYear).toEqual(2014);
    });
});

describe('frontCtrl', function() {
    var scope, location, createController;

    beforeEach(module('systemick'));

    beforeEach(inject(function ($rootScope, $controller, $location) {
        location = $location;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('frontCtrl', {
                '$scope': scope,
            });
        };
    }));

    it('has a variable selectedSkill', function() {
      var controller = createController();
      expect(scope.selectedSkill).toEqual('nodejs');
      scope.selectSkill('drupal');
      expect(scope.selectedSkill).toEqual('drupal');
      var skillClass = scope.getSelectedSkillClass('drupal');
      expect(skillClass).not.toEqual('nodejs');
      expect(skillClass).toEqual('active');
    });

});

describe('skillCtrl', function() {
    var scope, location, createController;

    beforeEach(module('systemick'));

    beforeEach(inject(function ($rootScope, $controller, $location) {
        location = $location;
        location.path('/drupal')
        scope = $rootScope.$new();

        createController = function() {
            return $controller('skillCtrl', {
                '$scope': scope,
            });
        };
    }));

    it('has a variable called currentSlug', function() {
      var controller = createController();
      expect(scope.currentSlug).toBeDefined();
      expect(scope.currentSlug).toEqual('drupal');
    });

});

describe("frontFactory", function () {
  var frontFactory, httpBackend;

  beforeEach(module("systemick"));

  beforeEach(inject(function (_frontFactory_, $httpBackend) {
    frontFactory = _frontFactory_;
    httpBackend = $httpBackend;
  }));

  var returnData = [{"_id":"5475f7640f2cb977f1621654","title":"Systemick","Body":"Hello! We're Systemick and we build websites using open source technologies. It's what we do and we've been doing it since 1998. If you want to talk to us about your website why not drop us a line.\n","Front Image":"http://www.systemick-web-development.co.uk/sites/default/files/styles/front_image/public/1160562_32750485.jpg?itok=At6mlDxJ"}];

  it("should send the msg and receive the front content", function () {
    httpBackend.whenGET("http://api.systemick-web-development.co.uk/systemick/collection/front").respond(returnData);
    frontFactory.getFront().then(function(response) {
      expect(response).toBeDefined();
      expect(response.data).toEqual(returnData);
    });
    httpBackend.flush();
  });

});

describe("skillsFactory", function () {
  var skillsFactory, httpBackend;

  beforeEach(module("systemick"));

  beforeEach(inject(function (_skillsFactory_, $httpBackend) {
    skillsFactory = _skillsFactory_;
    httpBackend = $httpBackend;
  }));

  var returnData = [{"_id":"54858a5dadc35678dd235ffa","title":"Node JS","Body":"<p><strong><a href=\"http://nodejs.org\">Node.js</a></strong> applications are written in <a href=\"http://en.wikipedia.org/wiki/JavaScript\">Javascript</a>, and can be run within the Node.js runtime. It is server side as opposed to client side javascript. Node.js is gaining adoption as a high-performance server-side platform and is notably used by <a href=\"http://en.wikipedia.org/wiki/Groupon\" title=\"Groupon\">Groupon</a>, <a href=\"http://en.wikipedia.org/wiki/SAP_SE\" title=\"SAP SE\">SAP</a>, <a href=\"http://en.wikipedia.org/wiki/LinkedIn\" title=\"LinkedIn\">LinkedIn</a>, <a href=\"http://en.wikipedia.org/wiki/Microsoft\" title=\"Microsoft\">Microsoft</a>, <a href=\"http://en.wikipedia.org/wiki/Yahoo!\" title=\"Yahoo!\">Yahoo!</a>, <a href=\"http://en.wikipedia.org/wiki/Walmart\" title=\"Walmart\">Walmart</a> and <a href=\"http://en.wikipedia.org/wiki/PayPal\" title=\"PayPal\">PayPal</a>.</p>\n<p>Node JS is a development platform built on top of Google's V8 JavaScript virtual machine. While <a href=\"http://searchsoa.techtarget.com/definition/JavaScript\">JavaScript</a> engines (including V8) are traditionally run in web browsers to form the client side of a<a href=\"http://searchnetworking.techtarget.com/definition/client-server\"> client/server application</a>, the Node.js libraries are focused on building server-side applications in JavaScript.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/node.jpeg?itok=Iajn2KfG","slug":"nodejs","weight":1,"Summary":"<p><strong><a href=\"http://nodejs.org\">Node.js</a></strong> applications are written in <a href=\"http://en.wikipedia.org/wiki/JavaScript\">Javascript</a>, and can be run within the Node.js runtime. It is server side as opposed to client side javascript. Node.js is gaining adoption as a high-performance server-side platform and is notably used by <a href=\"http://en.wikipedia.org/wiki/Groupon\" title=\"Groupon\">Groupon</a>, <a href=\"http://en.wikipedia.org/wiki/SAP_SE\" title=\"SAP SE\">SAP</a>, <a href=\"http://en.wikipedia.org/wiki/LinkedIn\" title=\"LinkedIn\">LinkedIn</a>, <a href=\"http://en.wikipedia.org/wiki/Microsoft\" title=\"Microsoft\">Microsoft</a>, <a href=\"http://en.wikipedia.org/wiki/Yahoo!\" title=\"Yahoo!\">Yahoo!</a>, <a href=\"http://en.wikipedia.org/wiki/Walmart\" title=\"Walmart\">Walmart</a> and <a href=\"http://en.wikipedia.org/wiki/PayPal\" title=\"PayPal\">PayPal</a>.</p>\n"},{"_id":"54858a5dadc35678dd235ffb","title":"Angular JS","Body":"<p><a href=\"http://angularjs.org\"><strong>AngularJS</strong></a> is an <a href=\"http://en.wikipedia.org/wiki/Open_source\">open source</a> <a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a> framework maintained by <a href=\"http://en.wikipedia.org/wiki/Google\" title=\"Google\">Google</a>. It's goal is to augment browser-based applications with <a href=\"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller\">model–view–controller</a> (MVC) capability and it does just that, providing a binding/MVC framework. Used to create <a href=\"http://en.wikipedia.org/wiki/Single-page_application\">single page appllications</a> (SPAs) Angular runs right out of the box with no library dependencies, although it can be extended with the many modules that are available. Being pure JavaScript, it also has the benefit of being server-agnostic.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/angularjs-logo-trans.png?itok=Joi8uOJl","slug":"angularjs","weight":2,"Summary":"<p><a href=\"http://angularjs.org\"><strong>AngularJS</strong></a> is an <a href=\"http://en.wikipedia.org/wiki/Open_source\">open source</a> <a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a> framework maintained by <a href=\"http://en.wikipedia.org/wiki/Google\" title=\"Google\">Google</a>. It's goal is to augment browser-based applications with <a href=\"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller\">model–view–controller</a> (MVC) capability and it does just that, providing a binding/MVC framework often used to create <a href=\"http://en.wikipedia.org/wiki/Single-page_application\">single page applications</a> (SPAs).</p>\n"},{"_id":"54858a5dadc35678dd235ff9","title":"Javascript","Body":"<p>Around since 1995, over recent years <strong><a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a></strong> has evolved into the scripting language of the world wide web. The advent of <a href=\"http://en.wikipedia.org/wiki/Ajax_(programming)\" title=\"Ajax (programming)\">Ajax</a> also had a lot to do with the return of JavaScript to the spotlight and brought more professional programming attention. The result was a proliferation of comprehensive <a href=\"http://en.wikipedia.org/wiki/List_of_JavaScript_libraries\" title=\"List of JavaScript libraries\">frameworks and libraries</a>, such as <a href=\"http://en.wikipedia.org/wiki/AngularJS\">Angular</a>, <a href=\"http://en.wikipedia.org/wiki/Backbone.js\">Backbone</a> and <a href=\"http://en.wikipedia.org/wiki/Ember.js\">Ember</a>, improved JavaScript programming practices, and increased usage of JavaScript outside of web browsers, as seen by the proliferation of <a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Server-side_JavaScript\" title=\"Server-side JavaScript\">server-side JavaScript</a> platforms such as <a href=\"http://en.wikipedia.org/wiki/Node.js\">Node JS</a>.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/xjquery_bumper.sh-340x340.png.pagespeed.ic_.2EellmRo16.png?itok=__POZvcV","slug":"javascript","weight":3,"Summary":"<p>Around since 1995, over recent years <strong><a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a></strong> has evolved into the scripting language of the world wide web. The increased interest in javascript has largely arisen because of the introduction of javascript frameworks such as <a href=\"http://en.wikipedia.org/wiki/JQuery\">JQuery</a>, <a href=\"http://en.wikipedia.org/wiki/AngularJS\">Angular</a> and <a href=\"http://en.wikipedia.org/wiki/Node.js\">Node</a>.</p>\n"},{"_id":"54858a5dadc35678dd235ff8","title":"HTML5 & CSS3","Body":"<p><a href=\"http://en.wikipedia.org/wiki/HTML5\"><strong>HTML5</strong></a> is a core technology markup language of the internet used for structuring and presenting content for the <a href=\"http://en.wikipedia.org/wiki/World_Wide_Web\" title=\"World Wide Web\">World Wide Web</a>. <a href=\"http://en.wikipedia.org/wiki/Cascading_Style_Sheets\"><strong>CSS</strong></a> is a stylesheet language used for describing the look and formatting of a document written in HTML.</p>\n<p>Along with <a href=\"http://en.wikipedia.org/wiki/JavaScript\" title=\"JavaScript\">JavaScript</a>, HTML and CSS are the cornerstone technologies used by most websites to create visually engaging webpages, user interfaces for <a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Web_applications\" title=\"Web applications\">web applications</a>, and user interfaces for many mobile applications.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/images.jpeg?itok=B7UCnGS_","slug":"html5","weight":4,"Summary":"<p><a href=\"http://en.wikipedia.org/wiki/HTML5\"><strong>HTML5</strong></a> is a core technology markup language of the internet used for structuring and presenting content for the <a href=\"http://en.wikipedia.org/wiki/World_Wide_Web\" title=\"World Wide Web\">World Wide Web</a>. <a href=\"http://en.wikipedia.org/wiki/Cascading_Style_Sheets\"><strong>CSS</strong></a> is a stylesheet language used for describing the look and formatting of a document written in HTML.</p>\n"},{"_id":"54858a5dadc35678dd235ff7","title":"PHP","Body":"<p><strong><a href=\"http://php.net\">PHP</a></strong> is one of the most widely used, open-source, server-side web development languages that exist today. With over 20 million indexed domains using PHP, including major websites like <a href=\"http://www.facebook.com\">Facebook</a>, and <a href=\"http://www.wordpress.com\">WordPress</a>, there are good reasons why many web developers prefer it to other scripting languages.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/php_developer.png?itok=cnNi5b0D","slug":"php","weight":5,"Summary":"<p><strong><a href=\"http://php.net\">PHP</a></strong> is one of the most widely used, open-source, server-side web development languages that exist today. With over 20 million indexed domains using PHP, including major websites like <a href=\"http://www.facebook.com\">Facebook</a>, and <a href=\"http://www.wordpress.com\">WordPress</a>, there are good reasons why many web developers prefer it to other scripting languages.</p>\n"},{"_id":"54858a5dadc35678dd235ff6","title":"Drupal","Body":"<p><strong><a href=\"http://drupal.org\">Drupal</a></strong> is the daddy of content management systems. Both powerful and flexible, it allows users to build and manage anything from a simple, brochure site to a robust, large scale web application.</p>\n<p><span style=\"background-color:rgb(255, 255, 255); color:rgb(0, 17, 17); font-family:pt sans,lucida grande,verdana,arial,sans-serif; font-size:14px\">Drupal is the epiphany of website creation and is used by many well known sites, perhaps most notably by </span><a href=\"http://www.whitehouse.gov/\" style=\"margin: 0px; padding: 0px; font-size: 14px; vertical-align: baseline; background-color: rgb(255, 255, 255); color: rgb(38, 87, 137); outline: none; text-decoration: underline; font-weight: bold; font-family: 'PT Sans', 'Lucida Grande', Verdana, Arial, sans-serif; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 20.399999618530273px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-position: initial initial; background-repeat: initial initial;\" target=\"_blank\" title=\"The White House Website\">The White House</a><span style=\"background-color:rgb(255, 255, 255); color:rgb(0, 17, 17); font-family:pt sans,lucida grande,verdana,arial,sans-serif; font-size:14px\">, <a href=\"http://www.weather.com\">weather.com</a> and in the UK </span><a href=\"http://www.economist.com/\" style=\"margin: 0px; padding: 0px; font-size: 14px; vertical-align: baseline; background-color: rgb(255, 255, 255); color: rgb(38, 87, 137); outline: none; text-decoration: underline; font-weight: bold; font-family: 'PT Sans', 'Lucida Grande', Verdana, Arial, sans-serif; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 20.399999618530273px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-position: initial initial; background-repeat: initial initial;\" target=\"_blank\">The Economist</a></p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/druplicon.large_.png?itok=UD3dqsUD","slug":"drupal","weight":6,"Summary":"<p><strong><a href=\"http://drupal.org\">Drupal</a></strong> is the daddy of content management systems. Both powerful and flexible, it allows users to build and manage anything from a simple, brochure site to a robust, large scale web application.</p>\n"}];
  
  it("should send the msg and receive the skills content", function () {
    httpBackend.whenGET("http://api.systemick-web-development.co.uk/systemick/collection/skills").respond(returnData);
    skillsFactory.getSkills().then(function(response) {
      expect(response).toBeDefined();
      expect(response.data).toEqual(returnData);
    });
    httpBackend.flush();
  });

});

describe("tweetsFactory", function () {
  var tweetsFactory, httpBackend;

  beforeEach(module("systemick"));

  beforeEach(inject(function (_tweetsFactory_, $httpBackend) {
    tweetsFactory = _tweetsFactory_;
    httpBackend = $httpBackend;
  }));

  var returnData = [{"created_at":"Wed Dec 17 22:37:54 +0000 2014","id":545347181067382800,"id_str":"545347181067382784","text":"http://t.co/Pv1ytybXeg Learn #angularjs #angularjs #angularjin 30 minutes. Really?","source":"<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":165697756,"id_str":"165697756","name":"Mike Garthwaite","screen_name":"systemick","location":"Leeds","profile_location":null,"description":"Freelance Drupal, NodeJS and AngularJS developer","url":"http://t.co/1qqWK7ZYvv","entities":{"url":{"urls":[{"url":"http://t.co/1qqWK7ZYvv","expanded_url":"http://www.systemick-web-development.co.uk","display_url":"systemick-web-development.co.uk","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":142,"friends_count":183,"listed_count":5,"created_at":"Mon Jul 12 08:50:20 +0000 2010","favourites_count":15,"utc_offset":0,"time_zone":"London","geo_enabled":true,"verified":false,"statuses_count":327,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"1A1B1F","profile_background_image_url":"http://abs.twimg.com/images/themes/theme9/bg.gif","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme9/bg.gif","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/2766412032/19a0bc89e2ddccbbc271d572d6d3ed63_normal.jpeg","profile_image_url_https":"https://pbs.twimg.com/profile_images/2766412032/19a0bc89e2ddccbbc271d572d6d3ed63_normal.jpeg","profile_link_color":"2FC2EF","profile_sidebar_border_color":"181A1E","profile_sidebar_fill_color":"252429","profile_text_color":"666666","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":3,"favorite_count":0,"entities":{"hashtags":[{"text":"angularjs","indices":[29,39]},{"text":"angularjs","indices":[40,50]},{"text":"angularjin","indices":[51,62]}],"symbols":[],"user_mentions":[],"urls":[{"url":"http://t.co/Pv1ytybXeg","expanded_url":"http://www.linkplugapp.com/a/1183120","display_url":"linkplugapp.com/a/1183120","indices":[0,22]}]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en","oEmbed":{"cache_age":"3153600000","url":"https://twitter.com/systemick/statuses/545347181067382784","height":null,"provider_url":"https://twitter.com","provider_name":"Twitter","author_name":"Mike Garthwaite","version":"1.0","author_url":"https://twitter.com/systemick","type":"rich","html":"<blockquote class=\"twitter-tweet\" width=\"305\"><p><a href=\"http://t.co/Pv1ytybXeg\">http://t.co/Pv1ytybXeg</a> Learn <a href=\"https://twitter.com/hashtag/angularjs?src=hash\">#angularjs</a> <a href=\"https://twitter.com/hashtag/angularjs?src=hash\">#angularjs</a> <a href=\"https://twitter.com/hashtag/angularjin?src=hash\">#angularjin</a> 30 minutes. Really?</p>&mdash; Mike Garthwaite (@systemick) <a href=\"https://twitter.com/systemick/status/545347181067382784\">December 17, 2014</a></blockquote>\n","width":305}},{"created_at":"Tue Dec 16 21:44:17 +0000 2014","id":544971299026518000,"id_str":"544971299026518016","text":"RT @angularjs_io: 6 rules for mastering AngularJS http://t.co/CenkgVpiYp","source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":165697756,"id_str":"165697756","name":"Mike Garthwaite","screen_name":"systemick","location":"Leeds","profile_location":null,"description":"Freelance Drupal, NodeJS and AngularJS developer","url":"http://t.co/1qqWK7ZYvv","entities":{"url":{"urls":[{"url":"http://t.co/1qqWK7ZYvv","expanded_url":"http://www.systemick-web-development.co.uk","display_url":"systemick-web-development.co.uk","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":142,"friends_count":183,"listed_count":5,"created_at":"Mon Jul 12 08:50:20 +0000 2010","favourites_count":15,"utc_offset":0,"time_zone":"London","geo_enabled":true,"verified":false,"statuses_count":327,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"1A1B1F","profile_background_image_url":"http://abs.twimg.com/images/themes/theme9/bg.gif","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme9/bg.gif","profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/2766412032/19a0bc89e2ddccbbc271d572d6d3ed63_normal.jpeg","profile_image_url_https":"https://pbs.twimg.com/profile_images/2766412032/19a0bc89e2ddccbbc271d572d6d3ed63_normal.jpeg","profile_link_color":"2FC2EF","profile_sidebar_border_color":"181A1E","profile_sidebar_fill_color":"252429","profile_text_color":"666666","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Tue Dec 16 20:30:16 +0000 2014","id":544952673590861800,"id_str":"544952673590861825","text":"6 rules for mastering AngularJS http://t.co/CenkgVpiYp","source":"<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":1852253100,"id_str":"1852253100","name":"AngularJS Central","screen_name":"angularjs_io","location":"","profile_location":null,"description":"All things AngularJS.","url":"http://t.co/Uu8BLXTqMO","entities":{"url":{"urls":[{"url":"http://t.co/Uu8BLXTqMO","expanded_url":"http://angularjs.io","display_url":"angularjs.io","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":6266,"friends_count":514,"listed_count":181,"created_at":"Tue Sep 10 19:15:50 +0000 2013","favourites_count":2293,"utc_offset":0,"time_zone":"London","geo_enabled":true,"verified":false,"statuses_count":2856,"lang":"en-gb","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"131516","profile_background_image_url":"http://abs.twimg.com/images/themes/theme14/bg.gif","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme14/bg.gif","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/378800000452532509/0b0632230996dcbe83cca479ec86205d_normal.jpeg","profile_image_url_https":"https://pbs.twimg.com/profile_images/378800000452532509/0b0632230996dcbe83cca479ec86205d_normal.jpeg","profile_banner_url":"https://pbs.twimg.com/profile_banners/1852253100/1414788810","profile_link_color":"009999","profile_sidebar_border_color":"EEEEEE","profile_sidebar_fill_color":"EFEFEF","profile_text_color":"333333","profile_use_background_image":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweet_count":14,"favorite_count":21,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"http://t.co/CenkgVpiYp","expanded_url":"http://buff.ly/13redwi","display_url":"buff.ly/13redwi","indices":[32,54]}]},"favorited":false,"retweeted":true,"possibly_sensitive":false,"lang":"en"},"retweet_count":14,"favorite_count":0,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"angularjs_io","name":"AngularJS Central","id":1852253100,"id_str":"1852253100","indices":[3,16]}],"urls":[{"url":"http://t.co/CenkgVpiYp","expanded_url":"http://buff.ly/13redwi","display_url":"buff.ly/13redwi","indices":[50,72]}]},"favorited":false,"retweeted":true,"possibly_sensitive":false,"lang":"en","oEmbed":{"cache_age":"3153600000","url":"https://twitter.com/systemick/statuses/544971299026518016","height":null,"provider_url":"https://twitter.com","provider_name":"Twitter","author_name":"Mike Garthwaite","version":"1.0","author_url":"https://twitter.com/systemick","type":"rich","html":"<blockquote class=\"twitter-tweet\" width=\"305\"><p>6 rules for mastering AngularJS <a href=\"http://t.co/CenkgVpiYp\">http://t.co/CenkgVpiYp</a></p>&mdash; AngularJS Central (@angularjs_io) <a href=\"https://twitter.com/angularjs_io/status/544952673590861825\">December 16, 2014</a></blockquote>\n","width":305}}];

  it("should send the msg and receive the tweets", function () {
    httpBackend.whenGET("http://api.systemick-web-development.co.uk/twitter/user/systemick/2").respond(returnData);
    tweetsFactory.getTweets().then(function(response) {
      expect(response).toBeDefined();
      expect(response.data).toEqual(returnData);
    });
    httpBackend.flush();
  });

});

describe("aboutFactory", function () {
  var aboutFactory, httpBackend;

  beforeEach(module("systemick"));

  beforeEach(inject(function (_aboutFactory_, $httpBackend) {
    aboutFactory = _aboutFactory_;
    httpBackend = $httpBackend;
  }));

  var returnData = [{"_id":"54896a9fadc35678dd235ffc","title":"<a href=\"/about\">About Systemick</a>","Body":"<p>SYSTEMICK is a specialist web consultancy based near Leeds, West Yorkshire.</p>\n<p>We build fully responsive websites using the latest web technologies. Sometimes we use <a href=\"http://drupal.org\">Drupal the open source CMS</a>. More recently we've been developing pure javscript applications using <a href=\"http://nodejs.org\">Node JS</a> and <a href=\"http://angularjs.org\">Angular JS</a>.</p>\n<p>With extensive knowledge of web technologies and over twelve years' experience in building web-based, database driven applications, SYSTEMICK have become experts at utilising the leading open source, LAMP ( <a href=\"http://en.wikipedia.org/wiki/Linux\">Linux</a>, <a href=\"http://en.wikipedia.org/wiki/Apache_HTTP_Server\">Apache</a>, <a href=\"http://en.wikipedia.org/wiki/MySQL\">MySQL</a> and <a href=\"http://en.wikipedia.org/wiki/PHP\">PHP</a>) and javascript technologies. No project is too small but we also love the challenge of a large project. We work with both commercial, non-profit organisations. If you're looking to build a new website or web application here are the reasons you should choose Systemick:</p>\n<ul><li><strong>Our expertise in web technologies.</strong></li>\n<li><strong>We deliver work of the highest quality.</strong></li>\n<li><strong>Our fast, competent, customer friendly approach</strong></li>\n<li><strong>Our ability to deliver projects on time and on budget</strong></li>\n</ul><p>Though we are situated in Leeds our clients are London based right across the UK. Wherever you are, we would be more than happy to talk to you. <em>For a free consultation about Drupal, Angular or Node development in Leeds, London, Manchester or across the UK call <strong>07878 972159</strong> or <a href=\"http://systemick-web-development.co.uk/contact\">email us here</a></em></p>\n"}]
  
  it("should send the msg and receive the about page content", function () {
    httpBackend.whenGET("http://api.systemick-web-development.co.uk/systemick/collection/pages").respond(returnData);
    aboutFactory.getAbout().then(function(response) {
      expect(response).toBeDefined();
      expect(response.data).toEqual(returnData);
    });
    httpBackend.flush();
  });

});

describe("contactFactory", function () {
  var contactFactory, httpBackend;

  beforeEach(module("systemick"));

  beforeEach(inject(function (_contactFactory_, $httpBackend) {
    contactFactory = _contactFactory_;
    httpBackend = $httpBackend;
  }));
  
  var contactData = {
    'name': 'Mike',
    'email': 'michael@systemick.co.uk',
    'subject': 'Testing test',
    'message': 'blah'
  }

  it("should send the contact data and receive an empty 201 response", function () {
    httpBackend.whenPOST("http://api.systemick-web-development.co.uk/systemick/contact". contactData).respond(201, "");
    contactFactory.sendContactData().then(function(response) {
      expect(response.status).toEqual(201);
    });
    httpBackend.flush();
  });

});

describe("Filter Tests", function () {
  var filterInstance;
  var skillsData = [{"_id":"54858a5dadc35678dd235ffa","title":"Node JS","Body":"<p><strong><a href=\"http://nodejs.org\">Node.js</a></strong> applications are written in <a href=\"http://en.wikipedia.org/wiki/JavaScript\">Javascript</a>, and can be run within the Node.js runtime. It is server side as opposed to client side javascript. Node.js is gaining adoption as a high-performance server-side platform and is notably used by <a href=\"http://en.wikipedia.org/wiki/Groupon\" title=\"Groupon\">Groupon</a>, <a href=\"http://en.wikipedia.org/wiki/SAP_SE\" title=\"SAP SE\">SAP</a>, <a href=\"http://en.wikipedia.org/wiki/LinkedIn\" title=\"LinkedIn\">LinkedIn</a>, <a href=\"http://en.wikipedia.org/wiki/Microsoft\" title=\"Microsoft\">Microsoft</a>, <a href=\"http://en.wikipedia.org/wiki/Yahoo!\" title=\"Yahoo!\">Yahoo!</a>, <a href=\"http://en.wikipedia.org/wiki/Walmart\" title=\"Walmart\">Walmart</a> and <a href=\"http://en.wikipedia.org/wiki/PayPal\" title=\"PayPal\">PayPal</a>.</p>\n<p>Node JS is a development platform built on top of Google's V8 JavaScript virtual machine. While <a href=\"http://searchsoa.techtarget.com/definition/JavaScript\">JavaScript</a> engines (including V8) are traditionally run in web browsers to form the client side of a<a href=\"http://searchnetworking.techtarget.com/definition/client-server\"> client/server application</a>, the Node.js libraries are focused on building server-side applications in JavaScript.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/node.jpeg?itok=Iajn2KfG","slug":"nodejs","weight":1,"Summary":"<p><strong><a href=\"http://nodejs.org\">Node.js</a></strong> applications are written in <a href=\"http://en.wikipedia.org/wiki/JavaScript\">Javascript</a>, and can be run within the Node.js runtime. It is server side as opposed to client side javascript. Node.js is gaining adoption as a high-performance server-side platform and is notably used by <a href=\"http://en.wikipedia.org/wiki/Groupon\" title=\"Groupon\">Groupon</a>, <a href=\"http://en.wikipedia.org/wiki/SAP_SE\" title=\"SAP SE\">SAP</a>, <a href=\"http://en.wikipedia.org/wiki/LinkedIn\" title=\"LinkedIn\">LinkedIn</a>, <a href=\"http://en.wikipedia.org/wiki/Microsoft\" title=\"Microsoft\">Microsoft</a>, <a href=\"http://en.wikipedia.org/wiki/Yahoo!\" title=\"Yahoo!\">Yahoo!</a>, <a href=\"http://en.wikipedia.org/wiki/Walmart\" title=\"Walmart\">Walmart</a> and <a href=\"http://en.wikipedia.org/wiki/PayPal\" title=\"PayPal\">PayPal</a>.</p>\n"},{"_id":"54858a5dadc35678dd235ffb","title":"Angular JS","Body":"<p><a href=\"http://angularjs.org\"><strong>AngularJS</strong></a> is an <a href=\"http://en.wikipedia.org/wiki/Open_source\">open source</a> <a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a> framework maintained by <a href=\"http://en.wikipedia.org/wiki/Google\" title=\"Google\">Google</a>. It's goal is to augment browser-based applications with <a href=\"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller\">model–view–controller</a> (MVC) capability and it does just that, providing a binding/MVC framework. Used to create <a href=\"http://en.wikipedia.org/wiki/Single-page_application\">single page appllications</a> (SPAs) Angular runs right out of the box with no library dependencies, although it can be extended with the many modules that are available. Being pure JavaScript, it also has the benefit of being server-agnostic.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/angularjs-logo-trans.png?itok=Joi8uOJl","slug":"angularjs","weight":2,"Summary":"<p><a href=\"http://angularjs.org\"><strong>AngularJS</strong></a> is an <a href=\"http://en.wikipedia.org/wiki/Open_source\">open source</a> <a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a> framework maintained by <a href=\"http://en.wikipedia.org/wiki/Google\" title=\"Google\">Google</a>. It's goal is to augment browser-based applications with <a href=\"http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller\">model–view–controller</a> (MVC) capability and it does just that, providing a binding/MVC framework often used to create <a href=\"http://en.wikipedia.org/wiki/Single-page_application\">single page applications</a> (SPAs).</p>\n"},{"_id":"54858a5dadc35678dd235ff9","title":"Javascript","Body":"<p>Around since 1995, over recent years <strong><a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a></strong> has evolved into the scripting language of the world wide web. The advent of <a href=\"http://en.wikipedia.org/wiki/Ajax_(programming)\" title=\"Ajax (programming)\">Ajax</a> also had a lot to do with the return of JavaScript to the spotlight and brought more professional programming attention. The result was a proliferation of comprehensive <a href=\"http://en.wikipedia.org/wiki/List_of_JavaScript_libraries\" title=\"List of JavaScript libraries\">frameworks and libraries</a>, such as <a href=\"http://en.wikipedia.org/wiki/AngularJS\">Angular</a>, <a href=\"http://en.wikipedia.org/wiki/Backbone.js\">Backbone</a> and <a href=\"http://en.wikipedia.org/wiki/Ember.js\">Ember</a>, improved JavaScript programming practices, and increased usage of JavaScript outside of web browsers, as seen by the proliferation of <a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Server-side_JavaScript\" title=\"Server-side JavaScript\">server-side JavaScript</a> platforms such as <a href=\"http://en.wikipedia.org/wiki/Node.js\">Node JS</a>.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/xjquery_bumper.sh-340x340.png.pagespeed.ic_.2EellmRo16.png?itok=__POZvcV","slug":"javascript","weight":3,"Summary":"<p>Around since 1995, over recent years <strong><a href=\"http://en.wikipedia.org/wiki/JavaScript\">javascript</a></strong> has evolved into the scripting language of the world wide web. The increased interest in javascript has largely arisen because of the introduction of javascript frameworks such as <a href=\"http://en.wikipedia.org/wiki/JQuery\">JQuery</a>, <a href=\"http://en.wikipedia.org/wiki/AngularJS\">Angular</a> and <a href=\"http://en.wikipedia.org/wiki/Node.js\">Node</a>.</p>\n"},{"_id":"54858a5dadc35678dd235ff8","title":"HTML5 & CSS3","Body":"<p><a href=\"http://en.wikipedia.org/wiki/HTML5\"><strong>HTML5</strong></a> is a core technology markup language of the internet used for structuring and presenting content for the <a href=\"http://en.wikipedia.org/wiki/World_Wide_Web\" title=\"World Wide Web\">World Wide Web</a>. <a href=\"http://en.wikipedia.org/wiki/Cascading_Style_Sheets\"><strong>CSS</strong></a> is a stylesheet language used for describing the look and formatting of a document written in HTML.</p>\n<p>Along with <a href=\"http://en.wikipedia.org/wiki/JavaScript\" title=\"JavaScript\">JavaScript</a>, HTML and CSS are the cornerstone technologies used by most websites to create visually engaging webpages, user interfaces for <a class=\"mw-redirect\" href=\"http://en.wikipedia.org/wiki/Web_applications\" title=\"Web applications\">web applications</a>, and user interfaces for many mobile applications.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/images.jpeg?itok=B7UCnGS_","slug":"html5","weight":4,"Summary":"<p><a href=\"http://en.wikipedia.org/wiki/HTML5\"><strong>HTML5</strong></a> is a core technology markup language of the internet used for structuring and presenting content for the <a href=\"http://en.wikipedia.org/wiki/World_Wide_Web\" title=\"World Wide Web\">World Wide Web</a>. <a href=\"http://en.wikipedia.org/wiki/Cascading_Style_Sheets\"><strong>CSS</strong></a> is a stylesheet language used for describing the look and formatting of a document written in HTML.</p>\n"},{"_id":"54858a5dadc35678dd235ff7","title":"PHP","Body":"<p><strong><a href=\"http://php.net\">PHP</a></strong> is one of the most widely used, open-source, server-side web development languages that exist today. With over 20 million indexed domains using PHP, including major websites like <a href=\"http://www.facebook.com\">Facebook</a>, and <a href=\"http://www.wordpress.com\">WordPress</a>, there are good reasons why many web developers prefer it to other scripting languages.</p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/php_developer.png?itok=cnNi5b0D","slug":"php","weight":5,"Summary":"<p><strong><a href=\"http://php.net\">PHP</a></strong> is one of the most widely used, open-source, server-side web development languages that exist today. With over 20 million indexed domains using PHP, including major websites like <a href=\"http://www.facebook.com\">Facebook</a>, and <a href=\"http://www.wordpress.com\">WordPress</a>, there are good reasons why many web developers prefer it to other scripting languages.</p>\n"},{"_id":"54858a5dadc35678dd235ff6","title":"Drupal","Body":"<p><strong><a href=\"http://drupal.org\">Drupal</a></strong> is the daddy of content management systems. Both powerful and flexible, it allows users to build and manage anything from a simple, brochure site to a robust, large scale web application.</p>\n<p><span style=\"background-color:rgb(255, 255, 255); color:rgb(0, 17, 17); font-family:pt sans,lucida grande,verdana,arial,sans-serif; font-size:14px\">Drupal is the epiphany of website creation and is used by many well known sites, perhaps most notably by </span><a href=\"http://www.whitehouse.gov/\" style=\"margin: 0px; padding: 0px; font-size: 14px; vertical-align: baseline; background-color: rgb(255, 255, 255); color: rgb(38, 87, 137); outline: none; text-decoration: underline; font-weight: bold; font-family: 'PT Sans', 'Lucida Grande', Verdana, Arial, sans-serif; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 20.399999618530273px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-position: initial initial; background-repeat: initial initial;\" target=\"_blank\" title=\"The White House Website\">The White House</a><span style=\"background-color:rgb(255, 255, 255); color:rgb(0, 17, 17); font-family:pt sans,lucida grande,verdana,arial,sans-serif; font-size:14px\">, <a href=\"http://www.weather.com\">weather.com</a> and in the UK </span><a href=\"http://www.economist.com/\" style=\"margin: 0px; padding: 0px; font-size: 14px; vertical-align: baseline; background-color: rgb(255, 255, 255); color: rgb(38, 87, 137); outline: none; text-decoration: underline; font-weight: bold; font-family: 'PT Sans', 'Lucida Grande', Verdana, Arial, sans-serif; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 20.399999618530273px; orphans: auto; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: auto; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-position: initial initial; background-repeat: initial initial;\" target=\"_blank\">The Economist</a></p>\n","Image":"http://systemick-web-development.co.uk/sites/default/files/styles/skill-teaser/public/druplicon.large_.png?itok=UD3dqsUD","slug":"drupal","weight":6,"Summary":"<p><strong><a href=\"http://drupal.org\">Drupal</a></strong> is the daddy of content management systems. Both powerful and flexible, it allows users to build and manage anything from a simple, brochure site to a robust, large scale web application.</p>\n"}];
  var selectedSkills = [];
  selectedSkills.push(skillsData[1]);
  

  beforeEach(module("systemick"));

  beforeEach(inject(function ($filter) {
    filterInstance = $filter("skillFilter");
  }));

  it("filters out unselected skills", function() {
    var result = filterInstance(skillsData, 'slug', 'angularjs');
    expect(result).toEqual(selectedSkills);
  });

});
