<?php

REQUIRE_ONCE('koneksi.php');

 $QUERY = MYSQLI_QUERY($conn, 
  "SELECT * FROM member"
  );

 $mhs = array();
while ($ROW = MYSQLI_FETCH_ASSOC($QUERY)){
$mhs[]=$ROW;
}
 header('Content-Type:application/json;charset=utf-8');

 ECHO JSON_ENCODE($mhs);

 MYSQLI_CLOSE($conn);

?>
