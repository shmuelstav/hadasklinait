/**
 * Created by shmuel on 5/12/2017.
 */

$(document).ready(function() {

    var mail = {
        name: $("#form_name"),
        phone: $("#form_phone"),
        mail: $("#form_mail"),
        message: $("#form_message"),
        data_mail: function () {
            return {
                name: this.name.val(),
                phone: this.phone.val(),
                mail: this.mail.val(),
                message: this.message.val()
            }
        },
        /* Function for validate the data at the form */

        validation: function () {

            /* validate the email */
            this.mail.blur(function () {
                if (this.value.length < 1) {
                    $('#error_message_mail').remove();
                }
                if (this.value.length > 1) {
                    $('#error_message_form_less_fields').remove();
                    if ($('#error_message_mail').length > 0) {
                        $('#error_message_mail').remove();
                    }
                    if (!mail.validateEmail(this.value)) {
                        $(this).before('<span id="error_message_mail" class="error_message">כתובת מייל לא תקינה</span>');
                    }
                }
            });

            /* validate the phone number */
            this.phone.blur(function () {
                if (this.value.length < 1) {
                    $('#error_message_phone').remove();
                }
                if (this.value.length > 1) {
                    $('#error_message_form_less_fields').remove();
                    if ($('#error_message_phone').length > 0) {
                        $('#error_message_phone').remove();
                    }
                    var re = new RegExp(/^\d{10}/);
                    console.log(this.value.match(/\d/g));
                    if (!mail.validatePhone(this.value)) {
                        $(this).before('<span id="error_message_phone" class="error_message">מספר הטלפון אינו תקין</span>');
                    }
                }
            });


        },
        initiliaze: function () {
            this.validation();
            this. send_form();
        },
        check_reuire_fields: function () {
            console.log(this.mail["0"].value);
            if (this.mail["0"].value || this.phone["0"].value) {
                return true;
            }
            else {
                this.status_to_send = false;
            }
        },
        validateEmail: function (email) {
            if (email.length<1){
                return true;
            }
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validatePhone: function (phone) {
            if (phone.length<1){
                return true;
            }
            var re = new RegExp(/^\d{10}/);
            return re.test(phone);
        },
        send_form: function () {
            $("#send_form").click(function (event) {
                //this.check_reuire_fields();
                if (!mail.check_reuire_fields()) {
                    alert("less fields");
                    $('#form_name').before('<span id="error_message_form_less_fields" class="error_message">חסרים שדות חובה</span>');
                }
                else {
                    if (mail.validatePhone(mail.phone["0"].value)&&mail.validateEmail(mail.mail["0"].value)) {
                        console.log(mail.data_mail());
                        sending(mail.data_mail());
                    }
                    else {
                        alert("problem with fields");
                    }

                }

                // $('#send_form').replaceWith('<input type="button" id="send_form_succes"  value="המייל נשלח בהצלחה" />');
                 function sending(data) {
                     console.log(data);
                     $.ajax({
                         type    : 'POST',
                         url     : '/mail',
                         data    : data,
                         cache   : false,
                         dataType: "json",
                         success : success() ,
                         error   : fail()
                     });
                 }

                    function success (){
                        $('#send_form').replaceWith('<input type="button" id="send_form_succes"  value="המייל נשלח בהצלחה" />');
                    }

                    function fail(){
                        $('#send_form').replaceWith('<input type="button" id="send_form_fail"  value="בעיה בשליחת המייל,יש לנסות מאוחר יותר" />');
                    }

                /* data_mail ={
                 name: $("#form_name").val(),
                 phone: $("#form_phone").val(),
                 mail: $("#form_mail").val(),
                 message: $("#form_message").val()
                 }
                 $.ajax({
                 type    : 'POST',
                 url     : '/mail',
                 data    : data,
                 cache   : false,
                 dataType: "json",
                 success : function (serverResponse) {
                 alert('mail sent successfully.'); },
                 error   : function (serverResponse) { alert('mail  not sent successfully.'); }
                 });*/
                return false;
            })
        },
    }
    mail.initiliaze();


//send_mail();

    /*  $( "#send_form" ).click(function( event ) {
     mail.check_reuire_fields();
     if(!mail.check_reuire_fields()){
     alert("less fields");
     }
     else{
     if(mail.validatePhone(mail.mail.value)){
     $('#send_form').replaceWith('<input type="button" id="send_form_succes"  value="המייל נשלח בהצלחה" />');
     }
     else{
     alert("problem with fields fields");
     }

     }

     // $('#send_form').replaceWith('<input type="button" id="send_form_succes"  value="המייל נשלח בהצלחה" />');

     /* data_mail ={
     name: $("#form_name").val(),
     phone: $("#form_phone").val(),
     mail: $("#form_mail").val(),
     message: $("#form_message").val()
     }
     $.ajax({
     type    : 'POST',
     url     : '/mail',
     data    : data_mail,
     cache   : false,
     dataType: "json",
     success : function (serverResponse) {
     alert('mail sent successfully.'); },
     error   : function (serverResponse) { alert('mail  not sent successfully.'); }
     });*/

})