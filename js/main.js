$(document).ready(() => {
    $('#kitchens').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });
    $('.open_modal').click(() => {
        $('#call_container').css('display', 'flex');
    });

    $('#call_container').click((e) => {
        if (e.target.id === 'call_container') {
            $('#call_container').hide();
        }
    });

    $('#make_call > button').click(() => {
        let name = $('.name');
        let phone = $('.phone');

        if (name.val() && phone.val()) {

            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#call_container').hide();
                },
                error: () => {
                    alert('Ошибка');
                }
            });
        } else {
            $('.call_error').show();
        }
    });


    $('#form_sections > button').click(() => {
        let name = $('.name');
        let phone = $('.phone');
        let date = $('.date');

        if (name.val() && phone.val() && date.val()) {

            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#form').hide();
                    $('#call_made').css('display', 'flex');

                },
                error: () => {
                    alert('Ошибка');
                }
            });
        } else {
            $('.call_error2').show();
        }
    });


    window.onload = function () {

        var name = document.getElementById('name');
        name.onkeypress = (event) => {
            name = parseInt(event.key);
            if (!isNaN(name)) {
                event.preventDefault()
            }
        };

        var name_form = document.getElementById('form_name');
        name_form.onkeypress = (event) => {
            name_form = parseInt(event.key);
            if (!isNaN(name_form)) {
                event.preventDefault()
            }
        };

        var phone = document.getElementById('phone_number');
        phone.onkeypress = (event) => {
            phone = parseInt(event.key);
            if (isNaN(phone)) {
                event.preventDefault()
            }
        };

        var form_phone = document.getElementById('form_phone');
        form_phone.onkeypress = (event) => {
            form_phone = parseInt(event.key);
            if (isNaN(form_phone)) {
                event.preventDefault()
            }
        };

    };

    $('#adaptive_menu').click(() => {
        $('#header').toggleClass('menu_open');
        $('#cancel').css('display', 'block');
    });

    $('#header #menu a').click(() => {
        $('#header').removeClass('menu_open');
    });

    $('#cancel').click(() => {
        $('#header').removeClass('menu_open')
    });
});
