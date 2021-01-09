$(function(){
    $('.change-devoured').on('click', function(event){
        let selectedId = $(this).data('id');

        console.log($(this))
        console.log(selectedId);

        const letsDevourIt = {
            id: selectedId
        };

        $.ajax(`/api/burgers/${selectedId}`, {
            type: "PUT",
            data: letsDevourIt
        }).then(function(){
            console.log('Changed devoured state.')

            location.reload();
        });
    });

    $('#create-form').on('submit', function(event){
        event.preventDefault();

        const newBurger = {
            burgerName: $.trim($('#burger-name').val())
        };

        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log('New Burger added!');

            location.reload();
        }); 
    });
});

console.log('This has loaded');