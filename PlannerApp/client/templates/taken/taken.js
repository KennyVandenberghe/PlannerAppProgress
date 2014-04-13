var insert_task = function() {
        PA.Tasks.insert({
            task: $('.task').val()
        });
        $('.task').val('');
    };

Template.tasks.events({
        'click .submit-task': function() {
            if ($('.task').val())
                insert_task();
        },
        'keyup .task': function(evt) {
            if (evt.which === 13 && $('.task').val()) {
                insert_task();
            }
        },
        'click .delete-task': function() {
            PA.Tasks.remove(this._id);
        },
        'click .check': function() {
            PA.Tasks.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });

Template.tasks.all_tasks = function() {
        return PA.Tasks.find();
    };
    Template.tasks.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.tasks.done_checkbox = function() {
        return this.done? 'checked':'';
    };