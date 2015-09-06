 ionic.Gestures.gestures.Hold.defaults.hold_threshold = 20;
 angular.module('yoprice', ['ionic'])
     .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
         $ionicConfigProvider.tabs.position('bottom');
         $stateProvider
             .state('menu', {
                 url: "/menu",
                 templateUrl: "templates/menu.html"
             })

         .state('menu.tabs', {
             url: "/tabs",
             views: {
                 'menu': {
                     templateUrl: "templates/tabs.html"
                 }
             }
         })

         .state('menu.tabs.home', {
                 url: "/home",
                 views: {
                     'home-tab': {
                         templateUrl: "templates/home.html"
                     }
                 }
             })
             .state('menu.tabs.search', {
                 url: "/search",
                 views: {
                     'search-tab': {
                         templateUrl: "templates/search.html"
                     }
                 }
             })

         .state('menu.tabs.about', {
             url: "/about",
             views: {
                 'about-tab': {
                     templateUrl: "templates/about.html"
                 }
             }
         })

         .state('menu.tabs.about.first', {
                 url: "/first",
                 views: {
                     'about-sub': {
                         templateUrl: "templates/first.html"
                     }
                 }
             })
             .state('menu.tabs.about.second', {
                 url: "/second",
                 views: {
                     'about-sub': {
                         templateUrl: "templates/second.html",
                         controller: 'MapCtrl'
                     }
                 }
             })
             .state('menu.tabs.about.third', {
                 url: "/third",
                 views: {
                     'about-sub': {
                         templateUrl: "templates/third.html"
                     }
                 }
             })
             .state('menu.tabs.about.fourth', {
                 url: "/fourth",
                 views: {
                     'about-sub': {
                         templateUrl: "templates/fourth.html"
                     }
                 }
             })
         $urlRouterProvider.otherwise("/menu/tabs/about/first");
     })

 .controller('MapCtrl', function($scope, $ionicLoading, $compile, $timeout)

         {


             $scope.onReorder = function(fromIndex, toIndex) {
                 var moved = $scope.contacts.splice(fromIndex, 1);
                 $scope.contacts.splice(toIndex, 0, moved[0]);
             };

             $scope.products = [{
                 name: 'Samsung Galaxy Grand Prime',
                 img: 'http://techlinksys.com/media/catalog/product/cache/1/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s5_16gb_4g_lte_white_mobile__1.jpg',
                 cost: 'Rs 9,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Buy Now'
             }, {
                 name: 'Apple iPhone 6 (16 GB)',
                 img: 'https://www.officialiphoneunlock.co.uk/images/iphones/iphone5.png',
                 cost: 'Rs 39,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Auction'
             }, {
                 name: 'Samsung Galaxy Grand Prime',
                 img: 'http://techlinksys.com/media/catalog/product/cache/1/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s5_16gb_4g_lte_white_mobile__1.jpg',
                 cost: 'Rs 9,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Buy Now'
             }, {
                 name: 'Apple iPhone 6 (16 GB)',
                 img: 'https://www.officialiphoneunlock.co.uk/images/iphones/iphone5.png',
                 cost: 'Rs 39,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Auction'
             }, {
                 name: 'Samsung Galaxy Grand Prime',
                 img: 'http://techlinksys.com/media/catalog/product/cache/1/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s5_16gb_4g_lte_white_mobile__1.jpg',
                 cost: 'Rs 9,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Buy Now'
             }, {
                 name: 'Apple iPhone 6 (16 GB)',
                 img: 'https://www.officialiphoneunlock.co.uk/images/iphones/iphone5.png',
                 cost: 'Rs 39,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Auction'
             }, {
                 name: 'Samsung Galaxy Grand Prime',
                 img: 'http://techlinksys.com/media/catalog/product/cache/1/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s5_16gb_4g_lte_white_mobile__1.jpg',
                 cost: 'Rs 9,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Buy Now'
             }];

             $scope.cartitems = [{
                 name: 'Samsung Galaxy Grand Prime',
                 img: 'http://techlinksys.com/media/catalog/product/cache/1/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_galaxy_s5_16gb_4g_lte_white_mobile__1.jpg',
                 cost: 'Rs 9,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Auction'
             }, {
                 name: 'Apple iPhone 6 (16 GB)',
                 img: 'https://www.officialiphoneunlock.co.uk/images/iphones/iphone5.png',
                 cost: 'Rs 39,000',
                 mobile: '0770 123456',
                 email: 'frank@emailionicsorter.com',
                 type: 'Buy Now'
             }];

             function initialize() {
                 //$scope.latlng=new google.maps.LatLng(43.07493,-89.381388);



                 navigator.geolocation.getCurrentPosition(function(pos) {

                     $scope.latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

                     var mapOptions = {
                         center: $scope.latlng,
                         zoom: 18,
                         mapTypeId: google.maps.MapTypeId.ROADMAP
                     };

                     $scope.map = new google.maps.Map(document.getElementById("map"),
                         mapOptions);

                     var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
                     var compiled = $compile(contentString)($scope);

                     var infowindow = new google.maps.InfoWindow({
                         content: compiled[0]
                     });

                     $scope.map.setCenter($scope.latlng);
                     $scope.marker = new google.maps.Marker({
                         position: $scope.latlng,
                         map: $scope.map,
                         title: 'Your Location'
                     });
                     google.maps.event.addListener($scope.marker, 'click', function() {
                         infowindow.open($scope.map, $scope.marker);
                     });
                 }, function(error) {
                     alert('Unable to get location: ' + error.message);
                 });
                 $scope.map.setCenter($scope.latlng);

             }

             google.maps.event.addDomListener(window, 'load', initialize);

             $scope.clickTest = function() {
                 alert('Example of infowindow with ng-click')
             };

             $scope.data = {};
             $scope.data.range = 7;
             var timeoutId = null;

             $scope.$watch('data.range', function() {
                 console.log('Has changed');
                 var zoom = 23 - parseInt($scope.data.range, 10);
                 $scope.map.setZoom(zoom);
                 if (timeoutId !== null) {
                     console.log('Ignoring this movement');
                     return;
                 }
                 console.log('Not going to ignore this one');
                 timeoutId = $timeout(function() {

                     console.log('It changed recently!');

                     $timeout.cancel(timeoutId);
                     timeoutId = null;

                     // Now load data from server 
                 }, 1000);

             });

             $scope.data = {
                 showDelete: false
             };

             $scope.edit = function(item) {
                 alert('Edit Item: ' + item.id);
             };
             $scope.share = function(item) {
                 alert('Share Item: ' + item.id);
             };

             $scope.moveItem = function(item, fromIndex, toIndex) {
                 $scope.items.splice(fromIndex, 1);
                 $scope.items.splice(toIndex, 0, item);
             };

             $scope.onItemDelete = function(item) {
                 $scope.items.splice($scope.items.indexOf(item), 1);
             };

             $scope.items = [{
                 id: "Your order has been placed!"
             }, {
                 id: "Bargained successfully!"
             }, {
                 id: "Bargained with vendor!"
             }, {
                 id: "Bid placed successfully!"
             }];

         })
     .directive('sortable', ['$ionicGesture', '$ionicScrollDelegate', function($ionicGesture, $ionicScrollDelegate) {
         return {
             restrict: 'A',
             scope: {
                 draggable: '@',
                 sorted: '&'
             },
             link: function(scope, element, attrs) {

                 var settings = {
                     draggable: scope.draggable ? scope.draggable : '.card',
                     duration: 200
                 };

                 var dragging = null,
                     placeholder = null,
                     offsetY = 0,
                     marginTop = 0;
                 var cardSet, initialIndex, currentIndex, animating = false;

                 var placeholderHeight;
                 var scrollInterval;

                 var createPlaceholder = function createPlaceholder(height) {
                     // Use marginTop to compensate for extra margin when animating the placeholder
                     return $('<div></div>')
                         .css({
                             height: height + 'px',
                             marginTop: (currentIndex > 0 ? -marginTop : -1) + 'px'
                         })
                         .addClass('placeholder');
                 };

                 var touchHold = function touchHold(e) {
                     // Get the element we're about to start dragging
                     dragging = angular.element(e.target).closest(settings.draggable);
                     if (!dragging.length) dragging = null;

                     if (dragging) {
                         // Get the initial index
                         initialIndex = currentIndex = dragging.index(settings.draggable);

                         var position = dragging.position();

                         // Get relative position of touch
                         var clientY = e.gesture.touches[0].clientY;
                         offsetY = clientY - position.top - element.offset().top;

                         // Switch to Absolute position at same location
                         dragging.css({
                                 position: 'absolute',
                                 zIndex: 1000,
                                 left: position.left + 'px',
                                 top: position.top + 'px',
                                 width: dragging.outerWidth() + 'px'
                             })
                             .addClass('dragging');

                         // Get the set of cards that were re-ordering with
                         cardSet = element.find(settings.draggable + ':not(.dragging)');

                         // We need to know the margin size so we can compensate for having two
                         // margins where we previously had one (due to the placeholder being there)
                         marginTop = parseInt(dragging.css('marginTop')) + 1;

                         // Replace with placeholder (add the margin for when placeholder is full size)
                         placeholderHeight = dragging.outerHeight() + marginTop;
                         placeholder = createPlaceholder(placeholderHeight);
                         placeholder.insertAfter(dragging);

                         // Interval to handle auto-scrolling window when at top or bottom
                         initAutoScroll();
                         scrollInterval = setInterval(autoScroll, 20);
                     }
                 };
                 var holdGesture = $ionicGesture.on('hold', touchHold, element);

                 var touchMove = function touchMove(e) {
                     if (dragging) {
                         e.stopPropagation();
                         touchY = e.touches ? e.touches[0].clientY : e.clientY;
                         var newTop = touchY - offsetY - element.offset().top;

                         // Reposition the dragged element
                         dragging.css('top', newTop + 'px');

                         // Check for position in the list
                         var newIndex = 0;
                         cardSet.each(function(i) {
                             if (newTop > $(this).position().top) {
                                 newIndex = i + 1;
                             }
                         });

                         if (!animating && newIndex !== currentIndex) {
                             currentIndex = newIndex;

                             var oldPlaceholder = placeholder;
                             // Animate in a new placeholder
                             placeholder = createPlaceholder(1);

                             // Put it in the right place
                             if (newIndex < cardSet.length) {
                                 placeholder.insertBefore(cardSet.eq(newIndex));
                             } else {
                                 placeholder.insertAfter(cardSet.eq(cardSet.length - 1));
                             }

                             // Animate the new placeholder to full height
                             animating = true;
                             setTimeout(function() {
                                 placeholder.css('height', placeholderHeight + 'px');
                                 // Animate out the old placeholder
                                 oldPlaceholder.css('height', 1);

                                 setTimeout(function() {
                                     oldPlaceholder.remove();
                                     animating = false;
                                 }, settings.duration);
                             }, 50);
                         }
                     }
                 };

                 var touchMoveGesture = $ionicGesture.on('touchmove', touchMove, element);
                 var mouseMoveGesture = $ionicGesture.on('mousemove', touchMove, element);

                 var touchRelease = function touchRelease(e) {
                     if (dragging) {
                         // Set element back to normal
                         dragging.css({
                             position: '',
                             zIndex: '',
                             left: '',
                             top: '',
                             width: ''
                         }).removeClass('dragging');

                         // Remove placeholder
                         placeholder.remove();
                         placeholder = null;

                         if (initialIndex !== currentIndex && scope.sorted) {
                             // Call the callback with the instruction to re-order
                             scope.$fromIndex = initialIndex;
                             scope.$toIndex = currentIndex;
                             scope.$apply(scope.sorted);
                         }
                         dragging = null;

                         clearInterval(scrollInterval);
                     }
                 };
                 var releaseGesture = $ionicGesture.on('release', touchRelease, element);

                 scope.$on('$destroy', function() {
                     $ionicGesture.off(holdGesture, 'hold', touchHold);
                     $ionicGesture.off(touchMoveGesture, 'touchmove', touchMove);
                     $ionicGesture.off(mouseMoveGesture, 'mousemove', touchMove);
                     $ionicGesture.off(releaseGesture, 'release', touchRelease);
                 });

                 var touchY, scrollHeight, containerTop, maxScroll;
                 var scrollBorder = 80,
                     scrollSpeed = 0.2;
                 // Setup the autoscroll based on the current scroll window size
                 var initAutoScroll = function initAutoScroll() {
                     touchY = -1;
                     var scrollArea = element.closest('.scroll');
                     var container = scrollArea.parent();
                     scrollHeight = container.height();
                     containerTop = container.position().top;
                     maxScroll = scrollArea.height() - scrollHeight;
                 };

                 // Autoscroll function to scroll window up and down when
                 // the touch point is close to the top or bottom
                 var autoScroll = function autoScroll() {
                     var scrollChange = 0;
                     if (touchY >= 0 && touchY < containerTop + scrollBorder) {
                         // Should scroll up
                         scrollChange = touchY - (containerTop + scrollBorder);
                     } else if (touchY >= 0 && touchY > scrollHeight - scrollBorder) {
                         // Should scroll down
                         scrollChange = touchY - (scrollHeight - scrollBorder);
                     }

                     if (scrollChange !== 0) {
                         // get the updated scroll position
                         var newScroll = $ionicScrollDelegate.getScrollPosition().top + scrollSpeed * scrollChange;
                         // Apply scroll limits
                         if (newScroll < 0)
                             newScroll = 0;
                         else if (newScroll > maxScroll)
                             newScroll = maxScroll;

                         // Set the scroll position
                         $ionicScrollDelegate.scrollTo(0, newScroll, false);
                     }
                 };

             }
         };
     }])

 ;