$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        let profileHTML = '';
        $.each(data.results, function (i, emp) {
            profileHTML += '<div class=employee>'
            profileHTML += '<img class=photo src=' + emp.picture.large + '>';
            profileHTML += '<ul><li>' + emp.name.first + ' ' + emp.name.last + '</li>';
            profileHTML += '<li>' + emp.email + '</li>';
            profileHTML += '<li>' + emp.location.city + '</li>';
            profileHTML += '</li></ul>';
            profileHTML += '</div>';
            $('.container').html(profileHTML);
        });
        console.log(data);
    }
});





