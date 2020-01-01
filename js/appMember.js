var Application = {
    initApplication : function(){
        $(window).load('pageinit','#page-one',function(){
            Application.initShowMember();
        }),
        $(document).on('click','#detail-mhs',function(){
            var id_member = $(this).data('nimmhs');
            Application.initShowDetailMember(id_member);
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
                var data = $('.form-member').serialize();
                $.ajax({
                    type: 'POST',
                    url: "insertmember.php",
                    data: data,
                    success: function() {
                        location.reload();
                    }
                });
            });
        });},

    initShowMember : function(){
        $.ajax({
            url: 'https://projectppk-kel2.000webhostapp.com/select_member.php',
            type: 'get',
            beforeSend : function() {
                $.mobile.loading('show',{
                    text: 'Please wait while retrieving data...',
                    textVisible : true
                });
            },
            success : function(dataObject) {
                var appendList='';
                for(var i=0; i < dataObject.length; i++){
                    var appendlist = '<li><a href=#page-two ?id='+dataObject[i].id_member+
                        '"target="_self" id="detail-mhs" data-nimmhs="'+dataObject[i].id_member+'"><h2>'+dataObject[i].nama_member+
                        '</h2><p>'+dataObject[i].email+'</p><p><b>'+dataObject[i].no_hp+'</b></p></a></li>';
                    $('#list-event').append(appendlist);}
                $('#list-event').listview('refresh');
            },
            complete : function(){
                $.mobile.loading('hide');
            }
        });
    },
    initShowDetailMember: function (id_member) {
        $.ajax({
            url: 'https://projectppk-kel2.000webhostapp.com/select_member.php',
            type: 'get',
            dataType:"json",
            beforeSend: function () {
                $.mobile.loading('show', {
                    text: 'Please waith while retrieving data...',
                    textVisible: true
                });
            },
            success: function (dataObject) {
                $('#p-nama_member,#p-email,#p-no_hp').empty();
                for (var i = 0; i < dataObject.length; i++) {
                    if (dataObject[i].id_member == id_member) {
                        $('#p-nama_member').append('<b>Nama Member             : </b>' + dataObject[i].nama_member);
                        $('#p-email').append('<b>Email            : </b>' + dataObject[i].email);
                        $('#p-no_hp').append('<b>Nomor Telepon            : </b>' + dataObject[i].no_hp);
                    }
                }
            },
            complete: function () {
                $.mobile.loading('hide');
            }
        });
    }
};