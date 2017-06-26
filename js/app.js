$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        let profileHTML = '';
        let empCount = 0;
        profileHTML = '<tr>';
        $.each(data.results, function (i, emp) {
            if (empCount < 3) {
                profileHTML += '<td><img class=photo src=' + emp.picture.large + '>';
                profileHTML += '<ul><li>' + emp.name.first + ' ' + emp.name.last + '</li>';
                profileHTML += '<li>' + emp.email + '</li>';
                profileHTML += '<li>' + emp.location.city + '</li>';
                profileHTML += '</li></ul></td>';
                $('table').html(profileHTML);
                empCount++;
            }
        });
        profileHTML += '</tr>';
        console.log(data);
    }
});





