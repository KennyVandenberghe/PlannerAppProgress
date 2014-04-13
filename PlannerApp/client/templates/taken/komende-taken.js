var insert_upcoming_tasks = function() {
        PA.UpcomingTasks.insert({
            task: $('.upcoming-tasks').val()
        });
        $('.upcoming-tasks').val('');
    };

Template.upcomingTasks.events({
        'click .submit-upcoming-tasks': function() {
            if ($('.upcoming-tasks').val())
                insert_upcoming_tasks();
        },
        'keyup .upcoming-tasks': function(evt) {
            if (evt.which === 13 && $('.upcoming-tasks').val())
                insert_upcoming_tasks();
        },
        'click .delete-upcoming-task': function() {
            PA.UpcomingTasks.remove(this._id);
        },
        'click .check': function() {
            PA.UpcomingTasks.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });

 Template.upcomingTasks.all_upcoming_tasks = function() {
        return PA.UpcomingTasks.find();
    };
    Template.upcomingTasks.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.upcomingTasks.done_checkbox = function() {
        return this.done? 'checked':'';
    };