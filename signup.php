<?php 
include "dbconn.php";

$sql = "insert into abc set firstname='$_POST[fname]', lastname='$_POST[lname]', username='$_POST[name]', email='$_POST[email]', password='$_POST[Pass]', repassword='$_POST[RePass]'";
  
if (@mysqli_query($con,$sql)) {
    echo('<p> <center> <h1> Yuor Information has Successfully saved</h1> </center> </p>');
  } else {
    echo('<p> <center> <h1> Error in registration: ' . mysqli_error($con) . '</center></h1></p>');
  } 
mysqli_close($con);
?>
