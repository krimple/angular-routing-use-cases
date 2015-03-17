angular.module('myApp.two', [])
.service('twoDataService', function($http, $log) {
        var self = this;
        self.people = [];
        $http.get('http://beta.json-generator.com/api/json/get/CIU1ehx')
            .then(
            function(result) {
                angular.copy(result.data, self.people);
                return true;
            },
            function(error) {
                self.people.length = 0;
                $log.error(error.status, error.data);
            })
            .finally(function() {
                // select the 0th one
                self.setCurrentPerson(0);
            });

        this.setCurrentPerson = function(index) {
            if (index < this.people.length) {
                angular.copy(this.people[index], this.currentPerson);
            }
        };


})
.controller('TwoController', function() {
        // what here?
})
.controller('TwoTopController', function(twoDataService, $mdBottomSheet) {
        this.currentPerson = twoDataService.currentPerson;
        this.people = twoDataService.people;

    this.raiseBottomSheet = function(index) {
        // change the active element and activate the right one
        twoDataService.setCurrentPerson(index);
        $mdBottomSheet.show({
            templateUrl: 'components/two/two-bottom-sheet.html',
            controller: 'TwoBottomSheetController',
            controllerAs: 'bottom',

        });
    };
})
.controller('TwoBottomSheetController', function() {

});
