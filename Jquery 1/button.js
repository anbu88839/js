$(document).ready( function(){


    $("#show").click(function(){
        $("#box").fadeIn(1000);
    });


    $("#hide").click(function(){
    $("#box").fadeOut(1000)

    });

    $("#toggle").click(function(){ 
    $("#box").fadeToggle()
  

    });
    $('#animate').click(function() {
        $('#box').animate(
            {
                left: "+=100px"
            }
            , 1000);
    });

    $("#fade").click(function(){
$("#box").fadeTo(1000, 0.3);

    });



    $('#slide').click(function() {
        $('#box').slideDown();
    });

    $("#additem").click(function(){
      $("#itemContainer").append("<div class='item'>New Item</div>")    
    });


    $("#Removeitem").click(function(){
        $("#itemContainer .item:last").remove();
    });
    
    $("#changecss").click(function(){
        $("#box").css
            ({
                'background-color':'green',
                'border':'7px solid black'
            
    });
        
    });

    $('#changetext').click(function(){
        $('#message').text("New project coming soon...")
    })

    $("#changeinput").click(function(){
        $('#inputdata').val("input data")
    })

    $('#clearinput').click(function(){
        $('#inputdata').val(" ")
    });






    $('#append').click(function(){
        $("#itemContainer").append('<div class="item">append</div>')
    })


    $('#prepend').click(function(){
        $('#itemContainer').prepend('<div class="item">prepend</div>')
    });



    
    $('#clone').click(function(){
        $('#box').clone().appendTo("#itemContainer").fadeIn();
    });

    $('#detach').click(function(){
        $('#box').detach()
    });

    $('#animateReset').click(function(){
        $('#box').stop(true,true).css({
            left:'0',
            opacity:'1' 

        });
    })


    $('#fromdata').on('submit',function(e){
        e.preventDefault();
        const inputData=$('#inputData').val();
        $('#message').text(`You entered:${inputData}`);
        $('#inputDate').val('');
    });


    $('#ajaxRequest').click(function() {
        $.ajax(
            {
            url: 'https://jsonplaceholder.typicode.com/users/1',
            method: 'GET',
            success: function(data) {
                $('#message').text(`Name: ${data.name}, Email: ${data.email}`);
            },
            error: function() {
                $('#message').text('Failed to fetch data.');
            }
        }
    );
    });





})