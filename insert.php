<?php 

require_once("koneksi.php");

$event = $_POST['event'];
$alamat = $_POST['address'];
$tanggal = $_POST['date'];
$harga = $_POST['harga'];
$stok = $_POST['tixavailable'];

mysqli_query($conn,"INSERT INTO data_tiket (nama_tiket, alamat_tiket, harga_tiket, tanggal_tiket, stok_tiket) values('$event','$alamat','$harga','$tanggal','$stok')");
mysqli_close($conn);
?>