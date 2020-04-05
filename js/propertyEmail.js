$(function(){

    let fullname1 = $('#name').val()
    let email1 = $('#email').val()
    let phone1 = $('#phone').val()
    let btnsubmit = $('#submitButton')
    

    btnsubmit.click(function(e){
        e.preventDefault()
        console.log("button was clicked")
        $('#wait').html('Waiting..')
        fullname1 = $('#name').val()
        email1 = $('#email').val()
         phone1 = $('#phone').val()

         $.post('/emailapi' , {name : fullname1 , email : email1 , phone : phone1}, function(data){
            console.log("This is the jquery callback "+data)
         } ).fail(function(){
            $('#wait').hide('fast')
            $('#error_message').fadeIn('fast').html('Failed !')
            setTimeout(function(){
                $('#error_message').fadeOut('slow')
            } , 2000)
         }).done(function(){
            $('#property_contact_section')[0].reset()
            $('#wait').hide('fast')
            $('#success_message').fadeIn('fast').html('Sent')
            setTimeout(function(){
                $('#success_message').fadeOut('slow')
            } , 2000)
         })

       
    })

})