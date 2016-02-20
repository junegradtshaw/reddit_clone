var app = angular.module("RedditClone", []);

app.controller("MyController", function($scope) {
  // $scope.mirror="Mirror"
  $scope.sites=[{title: "Post", image:"http://i.imgur.com/Mycvbzf.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, leo vitae gravida dapibus, lacus neque faucibus erat, vitae pretium justo lorem sit amet lorem. Ut at diam ante. Praesent a libero consectetur, sollicitudin eros nec, ullamcorper nisi. Proin volutpat urna id semper malesuada. Nulla non ultricies dolor, vel pharetra est. Nulla neque nibh, pulvinar pretium condimentum sit amet, hendrerit sit amet neque.", votes: 0, author: "Sunny Francis", timeStamp: "Today", comments: [{text: "Loved it!", author: "Kip Louis"}, {text: "Can't wait to go back...", author: "Goldie Ruska"}]}]

  $scope.addComment = function(site, text, author) {
    site.comments.push({text: text, author: author});
  }

  $scope.showComments

});
