$(document).ready(function () {

    $('#btn-cookie').on('click', function (e) {
        e.preventDefault();
        Cookies.set('info_cookie', 'Chalo', { expires: 7 });

        Cookies.set('info_cookie_obj', {
            nombre: 'Edwin',
            apellido: 'Salvador'
        });

    });


    $('#btn-get-cookie').on('click', function (e) {
        e.preventDefault();

        var info_cookie = Cookies.get('info_cookie');

        if(!info_cookie) {
            console.log('La cookie aún no ha sido seteada');
        } else {
            $('#cookie').html(info_cookie);


        }

        var info_cookie_obj = Cookies.getJSON('info_cookie_obj');
        console.log(info_cookie_obj.nombre);
        if(!info_cookie_obj) {
            console.log('La cookie obj aún no ha sido seteada');
        } else {
            $('#cookie').html($('#cookie').html() + '<br>' + info_cookie_obj.nombre + " " + info_cookie_obj.apellido);
        }
    });


    $('#btn-del-cookie').on('click', function (e) {
        e.preventDefault();

        Cookies.remove('info_cookie');
        Cookies.remove('info_cookie_obj');
    });



    $('#btn-local').on('click', function (e) {
        e.preventDefault();

        localStorage.setItem('info_local', 'Chalo local');
    });


    $('#btn-get-local').on('click', function (e) {
        e.preventDefault();

        var info_local = localStorage.getItem('info_local');

        $('#local').html(info_local);

    });


    $('#btn-session').on('click', function (e) {
        e.preventDefault();

        sessionStorage.setItem('info_session', 'Chalo session');
    });


    $('#btn-get-session').on('click', function (e) {
        e.preventDefault();

        var info_session = sessionStorage.getItem('info_session');

        $('#session').html(info_session);

    });



});