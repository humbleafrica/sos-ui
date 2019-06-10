$(function () {
    //Init scripts
    console.log("Loaded !");

    //actNow-modal
    $('#actNow').on('change', function () {
        // alert('Model shown');
        if ($(this).val() > 0) {
            $('#actNow-modal').modal('show');
        }
    });
})