(function() {
    var ccName = $('input.cc-name'),
        ccNumber = $('input.cc-number'),
        ccExpiry = $('input.cc-expiry'),
        ccCVC = $('input.cc-cvc');
    
    $('[data-numeric]').payment('restrictNumeric');
    
    ccNumber.payment('formatCardNumber');
    ccExpiry.payment('formatCardExpiry');
    ccCVC.payment('formatCardCVC');
    
    ccName.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'Name Surname');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccNumber.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'xxxx xxxx xxxx xxxx');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccExpiry.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'MM/YYYY');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
    
    ccCVC.on('focus', function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', 'xxxx');
    }).blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'))
    });
})();