// Call to the api using jQuery and AJAX
$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
        let modalHTML = '';
        let profileHTML = '';
        let j = 0;

        // Loop through the json data to create the HTML from the desired employee information
        $.each(data.results, function (i, emp) {

            // Creating the HTML from the api data for the main directory page
            profileHTML += '<div class=employee id=' + j + '>';
            profileHTML += '<img class=photo src=' + emp.picture.large + '>';
            profileHTML += '<div class="list"><p>' + emp.name.first + ' ' + emp.name.last + '</p>';
            profileHTML += '<p>' + emp.login.username + '</p>';
            profileHTML += '<p>' + emp.location.city + ', ' +emp.location.state + '</p>';
            profileHTML += '</div>';
            profileHTML += '</div>';

            // Creating the modal HTML from the api data
            modalHTML += '<div id=' + j + '>';
            modalHTML += '<img class=photo src=' + emp.picture.large + '>';
            modalHTML += '<p>' + emp.name.first + ' ' + emp.name.last + '</p>';
            modalHTML += '<span>username: ' + emp.login.username + '</span>';
            modalHTML += '<p>' + emp.email + '</p>';
            modalHTML += '<p>tel: ' + emp.cell + '</p>';
            modalHTML += '<p>' + emp.location.street + '</p>';
            modalHTML += '<p>' + emp.location.city + ', ' + emp.location.state + ' ' + emp.location.postcode + '</p>';

            // Using regex to display only the DOB and not the time of birth
            let dob = emp.dob;
            let newDob = dob.replace(/\s\S.*/g, '');
            modalHTML += '<p>DOB: ' + newDob + '</p>';
            modalHTML += '</div>';
            j++;
            $('.container').html(profileHTML);
            $('.modal').html(modalHTML).hide();
        });
        console.log(data);

        // Event handler to display the modal window when user clicks on an employee
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








