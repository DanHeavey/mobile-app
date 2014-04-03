'use strict';

angular.module('c4MobAppApp')
    .controller('MainCtrl', function ($scope) {

    })
    .controller('CatchUpCtrl', function ($scope) {

    })
    .controller('CategoriesCtrl', function ($scope) {

    })
    .controller('CarouselCtrl', function ($scope) {
        $scope.slides = [
            { image: 'images/a08191d9-a1cd-4067-9881-73ace5a9ea1e_625x352.jpg', text: 'Test' },
            { image: 'images/b53da963-fd2d-4bea-aec6-fa7fa3e777d6_625x352.jpg', text: 'Test' },
            { image: 'images/6e40fdd7-52c3-4853-8245-07a2fe0cceee_625x352.jpg', text: 'Test' },
            { image: 'images/6fc8925b-08c0-4ebe-9553-a96649610fe1_625x352.jpg', text: 'Test' },
            { image: 'images/cea49940-73fa-496d-b6f5-408390bfa610_625x352.jpg', text: 'Test' }

        ];
    })
    .controller('SearchCtrl', ['$scope',
        function ($scope) {
            var prompt = 'Search';
            $scope.searchTerm = prompt;
            $scope.searchDisabled = true;

            $scope.checkInput = function () {
                // console.log( $scope.searchTerm);
                //  console.log( "trim" + $scope.searchTerm.trim().length );
                if ($scope.searchTerm === prompt) {
                    $scope.searchTerm = '';
                    $scope.searchDisabled = true;
                }
                else if (String($scope.searchTerm.trim()).length === 0) {
                    //console.log("length " + $scope.searchTerm.trim().length);
                    $scope.searchTerm = prompt;
                    $scope.searchDisabled = true;
                }
                else {
                    $scope.searchDisabled = false;
                }
            };


            $scope.doSearch = function () {
                //  console.log( 'searching for ' + $scope.searchTerm )
            };
        }])
    .controller('AZCtrl', function ($scope) {

    }).controller('NavController', ['$scope', '$location',
        function ($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
    }


    ]);
