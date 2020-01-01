var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            Application.initShowPromo();
        }),
            $(document).on('click', '#detail-promo', function () {
                var id_promo = $(this).data('id_promo');
                Application.initShowDetailPromo(id_promo);
            }),
            $(document).on('click', '#button-tambah', function() {
                Application.add();
            })
    },

    add : function(){
        $(document).ready(function(){
            $('#button-tambah').on('click', function() {
            });
            $(".tombol-simpan").on('click', function(){
                var data = $('.form-user').serialize();
                $.ajax({
                    type: 'POST',
                    url: "insertpromo.php",
                    data: data,
                    success: function() {
                        location.reload();
                    }
                });
            });
        });},

        
    initShowPromo: function () {
        $.ajax({
            url: 'https://projectppk-kel2.000webhostapp.com/select_promo.php',
            type: 'get',
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please wait while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                var appendList = '';
                for (var i = 0; i < dataObject.length; i++) {
                    var appendlist = '<li><a href=#page-two ?id=' + dataObject[i].id_promo +
                        '"target="_self" id="detail-promo" data-id_promo="' + dataObject[i].id_promo + '"><h2>' + dataObject[i].nama_promo +
                        '</h2><p>' + dataObject[i].kode_promo + '</p><p><b>' + dataObject[i].diskon + '</b></p></a></li>';
                    $('#list-event').append(appendlist);
                }
                $('#list-event').listview('refresh');
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });

        
    },
    initShowDetailPromo: function (id_promo) {
        $.ajax({
            url: 'https://projectppk-kel2.000webhostapp.com/select_promo.php',
            type: 'get',
            dataType: "json",
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please waith while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                $('#p-nama_promo,#p-kode_promo,#p-diskon').empty();
                for (var i = 0; i < dataObject.length; i++) {
                    if (dataObject[i].id_promo == id_promo) {
                        $('#p-nama_promo').append('<b>Nama Promo             : </b>' + dataObject[i].nama_promo);
                        $('#p-kode_promo').append('<b>Kode Promo            : </b>' + dataObject[i].kode_promo);
                        $('#p-diskon').append('<b>Diskon            : </b>' + dataObject[i].diskon);
                    }
                }
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });
    }
};