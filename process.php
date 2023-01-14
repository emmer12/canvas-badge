<?php
include "db.php";

if (isset($_POST['store_download'])) {
    $full_name = htmlentities($_POST['full_name']);
    $occupation = htmlentities($_POST['occupation']);

    $sql = "INSERT INTO downloads(full_name,occupation,created_at) VALUES('$full_name','$occupation',now())";
    try {
        mysqli_query($conn, $sql); //code...
    } catch (\Throwable $th) {
        echo $th;
    }

    echo "Badge downloaded";
}
