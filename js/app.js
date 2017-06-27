$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        let modalHTML = '';
        let profileHTML = '';
        let j = 0;
        $.each(data.results, function (i, emp) {
            profileHTML += '<div class=employee id=' + j + '>';
            profileHTML += '<img class=photo src=' + emp.picture.large + '>';
            profileHTML += '<ul><li>' + emp.name.first + ' ' + emp.name.last + '</li>';
            profileHTML += '<li>' + emp.email + '</li>';
            profileHTML += '<li>' + emp.location.city + '</li>';
            profileHTML += '</li></ul>';
            profileHTML += '</div>';
            modalHTML += '<div id=' + j + '>';
            modalHTML += '<img class=photo src=' + emp.picture.large + '>';
            modalHTML += '<p>' + emp.name.first + ' ' + emp.name.last + '</p>';
            modalHTML += '<p>' + emp.login.username + '</p>';
            modalHTML += '<p>' + emp.email + '</p>';
            modalHTML += '<p>' + emp.cell + '</p>';
            modalHTML += '<p>' + emp.location.street + '</p>';
            modalHTML += '<p>' + emp.location.city + ', ' + emp.location.state + '</p>';
            modalHTML += '<p>' + emp.location.postcode + '</p>';
            modalHTML += '<p>DOB: ' + emp.dob + '</p>';
            modalHTML += '</div>';
            j++;
            $('.container').html(profileHTML);
            $('.modal').html(modalHTML).hide();
        });
        console.log(data);
        let modalDiv = $('.modal').children('div');
        $('.employee').click(function (e) {
            e.preventDefault();
            let target = e.currentTarget.id;
            for (let i = 0; i < modalDiv.length; i++) {
                console.log(target, modalDiv[i].id);
                if (target === modalDiv[i].id) {
                    $(function () {
                        $('.modal').html(modalDiv[i]).dialog({
                            modal: true,
                            buttons: {
                                Ok: function () {
                                    $(this).dialog('close');
                                }
                            }
                        })
                    });
                }
            }
        });
    }
});








