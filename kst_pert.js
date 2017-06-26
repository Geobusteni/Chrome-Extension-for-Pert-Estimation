(function ( $ ) {
    function c_p(est, type){
        var fee;
        var price;
        if(type=='client'){
            fee = (est *15)/100;
            price = est+fee;
        }
        if(type=='me'){
            fee = (est*10)/100;
            price = est-fee;
        }
        return parseInt(price);
    }
    $(function(){
        $('#kst_amount').on('keyup', function(){
            var expected = parseFloat($(this).val());
            var nocase = parseFloat(expected/1.7);
            var worst_case = parseFloat(expected*4);
            var pert_est = parseInt(nocase + (4*expected) + worst_case);
            $('#kst_real_amount').text(parseInt(nocase));
            $('#kst_worst_case').text(parseInt(worst_case));
            $('#kst_risk_amount').text(parseInt(pert_est/6));
            
            $('#kst_clientpay_nocase').text(c_p(nocase, 'me'));
            $('#kst_youget_nocase').text( c_p(nocase, 'client'));
            
            $('#kst_clientpay_worst').text(c_p(worst_case, 'me'));
            $('#kst_youget_worst').text(c_p(worst_case, 'client'));
            
            $('#kst_clientpay_real').text(c_p(pert_est/6, 'me'));
            $('#kst_youget_real').text(c_p(pert_est/6, 'client'));
        });
    });
})(jQuery)