var app = angular.module("RedditClone", ['angularMoment', 'ngAnimate']);

app.controller("MyController", function($scope) {
  $scope.title="Reddit Clone";

  $scope.selections=[{field: "votes", descend: true}, {field: "date", descend: true}, {field: "title", descend: false}];

  $scope.sites=[{title: "Cliffs of Moher", image:"http://i.imgur.com/pj2rrdw.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, leo vitae gravida dapibus, lacus neque faucibus erat, vitae pretium justo lorem sit amet lorem. Ut at diam ante. Praesent a libero consectetur, sollicitudin eros nec, ullamcorper nisi. Proin volutpat urna id semper malesuada. Nulla non ultricies dolor, vel pharetra est. Nulla neque nibh, pulvinar pretium condimentum sit amet, hendrerit sit amet neque.", votes: 4, author: "Sunny Francis", date: "2016-02-20T15:58:58.909Z", comments: [{author: "June", body: "Loved it!", date: "2016-02-21T15:58:58.909Z"}]},
  {title: "Mount Rushmore", image:"http://f.tqn.com/y/americanhistory/1/W/Q/E/mountrushmore.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, leo vitae gravida dapibus, lacus neque faucibus erat, vitae pretium justo lorem sit amet lorem. Ut at diam ante. Praesent a libero consectetur, sollicitudin eros nec, ullamcorper nisi. Proin volutpat urna id semper malesuada. Nulla non ultricies dolor, vel pharetra est. Nulla neque nibh, pulvinar pretium condimentum sit amet, hendrerit sit amet neque.", votes: 5, author: "Bonnie Murphy", date: "2016-01-20T15:58:58.909Z", comments: [{author: "Kip Meguire", body: "Loved it!", date: "2016-02-21T15:58:58.909Z"}]}, {title: "Keaukaha Beach, Big Island", image:"http://i.imgur.com/Mycvbzf.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, leo vitae gravida dapibus, lacus neque faucibus erat, vitae pretium justo lorem sit amet lorem. Ut at diam ante. Praesent a libero consectetur, sollicitudin eros nec, ullamcorper nisi. Proin volutpat urna id semper malesuada. Nulla non ultricies dolor, vel pharetra est. Nulla neque nibh, pulvinar pretium condimentum sit amet, hendrerit sit amet neque.", votes: 3, author: "Goldie Parrot", date: "2016-01-20T15:58:58.909Z", comments: []}]
  $scope.selected=$scope.selections[0];

  $scope.addComment = function(comment) {
  // $scope.addComment = function(site, author, text) {
    comment.site.comments.push({author: comment.comment.author, body: comment.comment.body, date: new Date()});
    comment.commentForm.$setPristine();
    var defaultCommentForm = {
      author : "",
      body : "",
    }
    comment.comment = angular.copy(defaultCommentForm);
    $scope.showAddComment=false;
  }

  $scope.addPost = function(post) {
    $scope.sites.push({title: post.post.title, image: post.post.image, description: post.post.description, author: post.post.author, votes: 0, comments: [], date: new Date()})
    post.postForm.$setPristine();
    var defaultPostForm = {
      title : "",
      image : "",
      description : "",
      author : ""
    }
    post.post = angular.copy(defaultPostForm);
    $scope.showAddPost=false;
  }

});
