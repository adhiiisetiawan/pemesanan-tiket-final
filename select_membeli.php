<?php

REQUIRE_ONCE('koneksi.php');

 $QUERY = MYSQLI_QUERY($conn, 
  "SELECT id_pembelian, member.id_member, member.nama_member, data_tiket.id_tiket, data_tiket.nama_tiket, jumlah_dibeli
  FROM data_tiket, member, membeli
  WHERE member.id_member=membeli.id_member AND data_tiket.id_tiket = membeli.id_tiket"
  );

 $mhs = array();
while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
$mhs[]=$ROW;
}
 header('Content-Type:application/json;charset=utf-8');

 ECHO JSON_ENCODE($mhs);

 MYSQLI_CLOSE($conn);

?>
