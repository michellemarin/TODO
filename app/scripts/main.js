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


//These are examples, please remove and replace with your own code
$('#todo-list').append(todoTemplate({
    id: 1,
    title: 'Finish Todo',
    completed: 'completed',
    checked: 'checked'
}));


//These are examples, please remove and replace with your own code
$('#todoapp footer').html(footerTemplate({
    activeTodoCount: 0,
    completedTodos: 0,
    completedClass: 'hide'
}));
