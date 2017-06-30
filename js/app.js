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
            profileHTML += '<div class="list"><p>' + emp.name.first + ' ' + emp.name.last + '</p>';
            profileHTML += '<p>' + emp.login.username + '</p>';
            profileHTML += '<p>' + emp.location.city + ', ' +emp.location.state + '</p>';
            profileHTML += '</div>';
            profileHTML += '</div>';
            modalHTML += '<div id=' + j + '>';
            modalHTML += '<img class=photo src=' + emp.picture.large + '>';
            modalHTML += '<p>' + emp.name.first + ' ' + emp.name.last + '</p>';
            modalHTML += '<span>username: ' + emp.login.username + '</span>';
            modalHTML += '<p>' + emp.email + '</p>';
            modalHTML += '<p>tel: ' + emp.cell + '</p>';
            modalHTML += '<p>' + emp.location.street + '</p>';
            modalHTML += '<p>' + emp.location.city + ', ' + emp.location.state + ' ' + emp.location.postcode + '</p>';
            modalHTML += '<p>DOB: ' + emp.dob + '</p>';
            modalHTML += '</div>';
            j++;
            $('.container').html(profileHTML);
            $('.modal').html(modalHTML).hide();
        });
        console.log(data);
        let modalDiv = $('.modal').children('div');
        $('.employee').click(function (e) {
            let target = e.currentTarget.id;
            for (let i = 0; i < modalDiv.length; i++) {
                if (target === modalDiv[i].id) {
                    $(function () {
                        $('.modal').html(modalDiv[i]).dialog({
                            width: 350,
                            dialogClass: 'no-close',
                            modal: true,
                            buttons: [
                                {
                                    text: 'Close',
                                    click: function () {
                                        $(this).dialog('close');
                                    }
                                }
                            ]
                        })
                    });
                }
            }
        });
    }
});








