<?php 

require_once("koneksi.php");

$nama_member = $_POST['nama_member'];
$no_hp = $_POST['no_hp'];
$email = $_POST['email'];

mysqli_query($conn,"INSERT INTO member (nama_member, no_hp, email) values('$nama_member','$no_hp','$email')");
mysqli_close($conn);
?>