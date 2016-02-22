var app = angular.module("RedditClone", []);

app.controller("MyController", function($scope) {
  $scope.title="Reddit Clone";
  $scope.selections=[{field: "votes", descend: true}, {field: "date", descend: true}, {field: "title", descend: false}];

  // $scope.mirror="Mirror"
  $scope.sites=[{title: "Cliffs of Moher", image:"http://i.imgur.com/Mycvbzf.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, leo vitae gravida dapibus, lacus neque faucibus erat, vitae pretium justo lorem sit amet lorem. Ut at diam ante. Praesent a libero consectetur, sollicitudin eros nec, ullamcorper nisi. Proin volutpat urna id semper malesuada. Nulla non ultricies dolor, vel pharetra est. Nulla neque nibh, pulvinar pretium condimentum sit amet, hendrerit sit amet neque.", votes: 4, author: "Sunny Francis", date: "2016-01-20T15:58:58.909Z", comments: [{author: "June", text: "Loved it!", date: "2016-02-21T15:58:58.909Z"}]},
  {title: "Mount Rushmore", image:"http://f.tqn.com/y/americanhistory/1/W/Q/E/mountrushmore.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, leo vitae gravida dapibus, lacus neque faucibus erat, vitae pretium justo lorem sit amet lorem. Ut at diam ante. Praesent a libero consectetur, sollicitudin eros nec, ullamcorper nisi. Proin volutpat urna id semper malesuada. Nulla non ultricies dolor, vel pharetra est. Nulla neque nibh, pulvinar pretium condimentum sit amet, hendrerit sit amet neque.", votes: 5, author: "Bonnie Murphy", date: "2016-01-20T15:58:58.909Z", comments: [{author: "Kip Meguire", text: "Loved it!", date: "2016-02-21T15:58:58.909Z"}]}]

  $scope.addComment = function(site, author, text) {
    site.comments.push({author: author, text: text, date: new Date()});
    $scope.commentFormAuthor = "test";
    $scope.commentFormText = "test";
    $scope.showAddComment=!$scope.showAddComment;
  }

  $scope.addPost = function(post) {
    $scope.sites.push({title: post.title, author: post.author, image: post.image, description: post.description, votes: 0, comments: [], date: new Date()})
    $scope.showAddPost=!$scope.showAddPost;
  }

  $scope.resetCommentForm = function() {
  }

});
