var todoApp = angular.module("todoModule",[]);

todoApp.controller("todoController",function($scope){

	$scope.formNext ='';
	$scope.todos = [

        {title:"Learn JavaScript",done:false},
        {title:"Learn AngularJs",done:false}

];

$scope.getTotalTodos = function(){

    return $scope.todos.length;
}

$scope.addTodo = function(){

        $scope.todos.push({'title':$scope.newTodo,'done':false})
        $scope.newTodo = '';
    }

    $scope.clearCompleted = function(){

        $scope.todos= $scope.todos.filter(function(item){

            return !item.done
        })
    }
});
