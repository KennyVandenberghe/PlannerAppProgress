var insert_appointment = function() {
PA.Appointments.insert({
  appointment: $('.appointment').val()
 });
  $('.appointment').val('');
};

Template.appointments.events({
    'click .submit-appointment': function() {
        if ($('.appointment').val())
            insert_appointment();
    },
    'keyup .appointment': function(evt) {
        if (evt.which === 13 && $('.appointment').val()) {
            insert_appointment();
        }
    },
    'click .delete-appointment': function() {
        PA.Appointments.remove(this._id);
    },
    'click .check': function() {
        PA.Appointments.update(this._id, {
            $set: {
                done: !this.done
            }
        });
    }
});

Template.appointments.all_appointments = function() {
        return PA.Appointments.find();
};
Template.appointments.done_class = function() {
        return this.done? 'done' : '';
};
    Template.appointments.done_checkbox = function() {
        return this.done? 'checked':'';
};