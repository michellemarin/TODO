/* global describe, it */

(function () {
    'use strict';

    describe('TODO APP', function () {
        describe('updateTodoClassOnClick', function () {
            it('should change the todo class to completed after
            I run this function', function () {
              var myTodo = "<li></li>";
              myTodo = updateTodoClssOnClick(myTodo);
              expect($ (myTodo).hasClass('completed') ).to.be.true;
            });
        });
    });
})();
