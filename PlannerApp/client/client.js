if (Meteor.isClient) {
    /*Afspraken*/
    var insert_afspraak = function() {
        Afspraken.insert({
            afspraak: $('.afspraak').val()
        });
        $('.afspraak').val('');
    };
    /*Komende afspraken*/
    var insert_kafspraak = function() {
        Komendeafspraken.insert({
            afspraak: $('.komende-afspraken').val()
        });
        $('.komende-afspraken').val('');
    };
    /*Taken*/
    var insert_taak = function() {
        Taken.insert({
            taak: $('.taak').val()
        });
        $('.taak').val('');
    };
    /*Komende taken*/
    var insert_ktaak = function() {
        Komendetaken.insert({
            taak: $('.komende-taken').val()
        });
        $('.komende-taken').val('');
    };
    /*Boodschappen*/
    var insert_boodschap = function() {
        Boodschappen.insert({
            boodschap: $('.boodschap').val()
        });
        $('.boodschap').val('');
    };
    /*Afspraken*/
    Template.afspraken.events({
        'click .submit-afspraak': function() {
            if ($('.afspraak').val())
                insert_afspraak();
        },
        'keyup .afspraak': function(evt) {
            if (evt.which === 13 && $('.afspraak').val()) {
                insert_afspraak();
            }
        },
        'click .delete-afspraak': function() {
            Afspraken.remove(this._id);
        },
        'click .check': function() {
            Afspraken.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });
    /*Komende afspraken*/
    Template.kafspraken.events({
        'click .submit-komende-afspraken': function() {
            if ($('.komende-afspraken').val())
                insert_kafspraak();
        },
        'keyup .komende-afspraken': function(evt) {
            if (evt.which === 13) {
                insert_kafspraak();
            }
        },
        'click .delete-komende-afspraken': function() {
            Komendeafspraken.remove(this._id);
        },
        'click .check': function() {
            Komendeafspraken.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });
    /*Taken*/
    Template.taken.events({
        'click .submit-taak': function() {
            if ($('.taak').val())
                insert_taak();
        },
        'keyup .taak': function(evt) {
            if (evt.which === 13 && $('.taak').val()) {
                insert_taak();
            }
        },
        'click .delete-taak': function() {
            Taken.remove(this._id);
        },
        'click .check': function() {
            Taken.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });
    /*komende taken*/
    Template.ktaken.events({
        'click .submit-komende-taken': function() {
            if ($('.komende-taken').val())
                insert_ktaak();
        },
        'keyup .komende-taken': function(evt) {
            if (evt.which === 13 && $('.komende-taken').val())
                insert_ktaak();
        },
        'click .delete-ktaak': function() {
            Komendetaken.remove(this._id);
        },
        'click .check': function() {
            Komendetaken.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });
    /*Boodschappen*/
    Template.boodschappen.events({
        'click .submit-boodschap': function() {
            if ($('.boodschap').val())
                insert_boodschap();
        },
        'keyup .boodschap': function(evt) {
            if (evt.which === 13 && $('.boodschap').val())
                insert_boodschap();
        },
        'click .delete-boodschap': function() {
            Boodschappen.remove(this._id);
        },
        'click .check': function() {
            Boodschappen.update(this._id, {
                $set: {
                    done: !this.done
                }
            });
        }
    });
    /*Afspraken*/
    Template.afspraken.alle_afspraken = function() {
        return Afspraken.find();
    };
    Template.afspraken.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.afspraken.done_checkbox = function() {
        return this.done? 'checked="checked"':'';
    };
    /*Komende afspraken*/
    Template.kafspraken.alle_kafspraken = function() {
        return Komendeafspraken.find();
    };
    Template.kafspraken.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.kafspraken.done_checkbox = function() {
        return this.done? 'checked="checked"':'';
    };
    /*Taken*/
    Template.taken.alle_taken = function() {
        return Taken.find();
    };
    Template.taken.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.taken.done_checkbox = function() {
        return this.done? 'checked="checked"':'';
    };
    /*Komende taken*/
    Template.ktaken.alle_ktaken = function() {
        return Komendetaken.find();
    };
    Template.ktaken.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.ktaken.done_checkbox = function() {
        return this.done? 'checked="checked"':'';
    };
    /*Boodschappen*/
    Template.boodschappen.alle_boodschappen = function() {
        return Boodschappen.find();
    };
    Template.boodschappen.done_class = function() {
        return this.done? 'done' : '';
    };
    Template.boodschappen.done_checkbox = function() {
        return this.done? 'checked="checked"':'';
    };
}
