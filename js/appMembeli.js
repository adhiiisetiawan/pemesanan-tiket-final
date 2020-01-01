var Application = {
    initApplication: function () {
        $(window).load('pageinit', '#page-one', function () {
            Application.initShowEvent();
        }),
            $(document).on('click', '#detail-pembelian', function () {
                var id_pembelian = $(this).data('id_pembelian');
                Application.initShowDetailEvent(id_pembelian);
            }),
            $(document).on('click', '#button-tambah', function () {
                Application.add();
            })
    },
    initShowEvent: function () {
        $.ajax({
            url: 'https://projectppk-kel2.000webhostapp.com/select_membeli.php',
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
                    var appendlist = '<li><a href=#page-two ?id=' +
                        dataObject[i].id_pembelian +
                        '"target="_self" id="detail-pembelian" data-id_pembelian="' +
                        dataObject[i].id_pembelian + '"><h2>' +
                        dataObject[i].nama_member +
                        '</h2><p><b>Rp. ' +
                        dataObject[i].nama_tiket + '</b></p></a></li>';
                    $('#list-event').append(appendlist);
                }
                $('#list-event').listview('refresh');
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailEvent: function (id_pembelian) {
        $.ajax({
            url: 'https://projectppk-kel2.000webhostapp.com/select_membeli.php',
            type: 'get',
            dataType: "json",
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please waith while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                $('#p-nama_member,#p-nama_tiket,#p-jumlah_dibeli').empty();
                for (var i = 0; i < dataObject.length; i++) {
                    if (dataObject[i].id_pembelian == id_pembelian) {
                        $('#p-nama_member').append('<b>Nama Member             : </b>' + dataObject[i].nama_member);
                        $('#p-nama_tiket').append('<b>Nama Tiket            : </b>' + dataObject[i].nama_tiket);
                        $('#p-jumlah_dibeli').append('<b>Jumlah Dibeli            : </b>' + dataObject[i].jumlah_dibeli);
                    }
                }
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });
    }
};