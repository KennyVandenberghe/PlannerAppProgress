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
        }
    });
    /*Komende afspraken*/
    Template.kafspraken.events({
        'click .submit-komende-afspraken': function() {
            insert_kafspraak();
        },
        'keyup .komende-afspraken': function(evt) {
            if (evt.which === 13) {
                insert_kafspraak();
            }
        },
        'click .delete-komende-afspraken': function() {
            Komendeafspraken.remove(this._id);
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
        }
    });
    /*Afspraken*/
    Template.afspraken.alle_afspraken = function() {
        return Afspraken.find();
    };
    /*Komende afspraken*/
    Template.kafspraken.alle_kafspraken = function() {
        return Komendeafspraken.find();
    };
    /*Taken*/
    Template.taken.alle_taken = function() {
        return Taken.find();
    };
    /*Komende taken*/
    Template.ktaken.alle_ktaken = function() {
        return Komendetaken.find();
    };
    Template.boodschappen.alle_boodschappen = function() {
        return Boodschappen.find();
    };
}
