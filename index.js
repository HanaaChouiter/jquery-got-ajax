$(function(){

    var personnages= []

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            afficher(data)
            personnages = data
        }
    });

    function afficher(data){
        // console.log(data)
        $('#list').html("")

        data.forEach(function(personnage){
            
            $('#list').html($('#list').html()+`
            
            <div class="container">
            <img src="${personnage.imageUrl}">
            <h6>${personnage.fullName}</h6>
            <p>${personnage.title}</p>
            <div>`)
            // console.log(personnage)
        })
    }


    $('form').submit(function(e) {
        e.preventDefault()
        var valeurInput= $("input").val()
        // console.log(valeurInput)
        //  console.log(personnages)
        var personnageArray = personnages.filter(function(person){
            return person.fullName === valeurInput
        })
        afficher(personnageArray)
        console.log(personnageArray)
    })
    
})



