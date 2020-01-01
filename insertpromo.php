<?php 

require_once("koneksi.php");

$promo = $_POST['promo'];
$kode = $_POST['kodepromo'];
$diskon = $_POST['diskon'];

mysqli_query($conn,"INSERT INTO promo (nama_promo, kode_promo, diskon) values('$promo','$kode','$diskon')");
mysqli_close($conn);
?>