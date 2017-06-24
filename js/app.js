$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        let profileHTML = '<tr>';
        profileHTML += '<td><img src=' + data.results[0].picture.thumbnail + '>';
        $('table').html(profileHTML);
        console.log(data);
    }
});