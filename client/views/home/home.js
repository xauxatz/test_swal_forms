Template.Home.rendered = function() {
	
};

Template.Home.events({
	
});

Template.Home.helpers({
	
});

Template.HomeButton.events({ "click .change-button": function(e, t) {
    swal.withForm( {
        title: "Specify your payment details",
        text: "To select this plan, we need to get your payment information.",
        showCancelButton: true,
        closeOnConfirm: false,
        confirmButtonColor: "#DD6B55",
        formFields: [
            { id: 'cc_number', placeholder: 'Credit Card Number (16 digits)'},
            { id: 'cc_exp_mo', placeholder: 'Expiration Month (2 digits)'},
            { id: 'cc_exp_y', placeholder: 'Expiration Year (2 digits)'},
            { id: 'cc_cvv', placeholder: 'CVV (3 digits from back of card)'},
            { id: 'cc_postal', placeholder: 'Zip / Postal Code'}
        ]
    }, function(isConfirm) {
        if( isConfirm ) {
            swal("Updated!", "Subscription successfully updated!", "success");
        }
    });

    e.preventDefault();
} });