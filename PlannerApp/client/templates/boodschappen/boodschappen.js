var insert_grocery = function() {
        PA.Groceries.insert({
            grocery: $('.grocery').val()
        });
        $('.grocery').val('');
    };

Template.groceries.events({
        'click .submit-grocery': function() {
            if ($('.grocery').val())
                insert_grocery();
        },
        'keyup .grocery': function(evt) {
            if (evt.which === 13 && $('.grocery').val())
                insert_grocery();
        },
        'click .delete-grocery': function() {
            PA.Groceries.remove(this._id);
        },
        'click .check': function() {
            PA.Groceries.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });

Template.groceries.all_groceries = function() {
        return PA.Groceries.find();
    };
    Template.groceries.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.groceries.done_checkbox = function() {
        return this.done? 'checked':'';
    };