$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        // $.each(data.items, function (i, results) {


        let empObject = data.results[0];
        let photo = empObject.picture.large;
        let firstName = empObject.name.first;
        let lastName = empObject.name.last;
        let email = empObject.email;
        let city = empObject.location.city;
        let profileHTML = '<tr>';
        profileHTML += '<td><img class=photo src=' + photo + '>';
        profileHTML += '<ul><li>' + firstName +' '+ lastName + '</li>';
        profileHTML += '<li>' +email + '</li>';
        profileHTML += '<li>' + city + '</li>';
        profileHTML += '</li></ul></td>';
        profileHTML += '</tr>';
        $('table').html(profileHTML);

        // });
        console.log(data);
    }
});





