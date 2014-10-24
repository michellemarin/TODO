_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g
};

var todoTemplate   = _.template( $('#todo-template').html() );
var footerTemplate = _.template( $('#footer-template').html() );
// Don't remove anything above this line ----------------------- //

var Todo = function (todoData) {
  var defaults = {
    id: new Date().getTime(),
    title: 'no title',
    completed: '',
    checked: ''
  };

  return _.extend(defaults, todoData);
};

$('#new-todo').keypress(function(e) {
  if(e.which == 13) {
    $('#todo-list').append(todoTemplate(new Todo({
      title: $(this).val()
    })));
  }
});

$('#todo-list').on('click', 'li input.toggle', function (event) {
  $(this).closest('li').toggleClass('completed');
});

$('#todo-list').on('click', 'li button.destroy', function (event) {
  $(this).parent().remove();
});

$('#main').on('click', '#toggle-all', function (event) {
  $('#todo-list').children('li').toggleClass('completed');
});

$('#todoapp footer').on('click', 'li a.completed', function (event) {
  var activeTodos = $('#todo-list li');
  var completedTodos = $('#todo-list li.completed');
  $(activeTodos).not('.completed').hide();
  $(completedTodos).show();
  console.log('hello');
});

$('#todoapp footer').on('click', 'li a.active', function (event) {
  var completedTodos = $('#todo-list li.completed');
  var activeTodos = $('#todo-list li');
  $(completedTodos).hide();
  $(activeTodos).not('.completed').show();
  console.log('hello');
});

$('#todoapp footer').on('click', 'li a.all', function (event) {
  var allTheTodos = $('#todo-list li');
  $(allTheTodos).show();
  console.log('hello');
});


//These are examples, please remove and replace with your own code
$('#todo-list').append(todoTemplate({
    id: 1,
    title: 'Finish Todo',
    completed: 'completed',
    checked: 'checked'
}));

setInterval(function () {
var countActive = $('#todo-list li').not('.completed').length;

var countCompleted = $('#todo-list li.completed').length;

if(countCompleted === 0) {
  var ifCompleted = 'hide';
}
//These are examples, please remove and replace with your own code
$('#todoapp footer').html(footerTemplate({
    activeTodoCount: countActive,
    completedTodos: countCompleted,
    completedClass: ifCompleted
}));

}, 1000);
