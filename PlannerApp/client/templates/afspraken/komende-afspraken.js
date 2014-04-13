var insert_upcoming_appointment = function() {
        PA.UpcomingAppointments.insert({
            appointment: $('.upcoming-appointment').val()
        });
        $('.upcoming-appointment').val('');
    };

Template.upcomingAppointments.events({
        'click .submit-upcoming-appointment': function() {
            if ($('.upcoming-appointment').val())
                insert_upcoming_appointment();
        },
        'keyup .upcoming-appointment': function(evt) {
            if (evt.which === 13 && $('.upcoming-appointment').val()) {
                insert_upcoming_appointment();
            }
        },
        'click .delete-upcoming-appointment': function() {
            PA.UpcomingAppointments.remove(this._id);
        },
        'click .check': function() {
            PA.UpcomingAppointments.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });

Template.upcomingAppointments.all_upcoming_appointments = function() {
        return PA.UpcomingAppointments.find();
    };
    Template.upcomingAppointments.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.upcomingAppointments.done_checkbox = function() {
        return this.done? 'checked':'';
    };