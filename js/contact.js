$(function(){

    let fullname1 = $('#fullname_12')
    let email1 = $('#email1_12')
    let subject1 = $('#subject1_12')
    let message1 = $('#message1_12')


    console.log(fullname1)
    console.log(email1)
    console.log(subject1)
    console.log(message1)

    let btnsubmit = $('#submitButton')
    console.log("jquery is working")
    btnsubmit.click(function(e){
            e.preventDefault()
        console.log("button was clicked")
        $('#wait').html('Waiting..')
         fullname1 = $('#fullname_12').val()
         email1 = $('#email1_12').val()
         subject1 = $('#subject1_12').val()
         message1 = $('#message1_12').val()
        
        $.post('/api' , {name : fullname1 , email : email1 , subject : subject1 , message : message1 } ,function(data){
            console.log("This is the jquery callback "+data)
        } ).fail(function(){
            $('#wait').hide('fast')
            $('#error_message').fadeIn('fast').html('Failed !')
            setTimeout(function(){
                $('#error_message').fadeOut('slow')
            } , 2000)
        }).done(function(){
            $('#contact_section_form')[0].reset()
            $('#wait').hide('fast')
            $('#success_message').fadeIn('fast').html('Message sent')
            setTimeout(function(){
                $('#success_message').fadeOut('slow')
            } , 2000)
        })
        
            
        
    })

})

