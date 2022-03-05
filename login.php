<?php 
include "dbconn.php";

$query="SELECT * FROM abc WHERE username= '$_POST[name]' AND password= '$_POST[Pass]'";
$result = mysqli_query($con,$query) or die(mysqli_error($con));

if($row = mysqli_fetch_array($result)) 
{
	
    header("location:project1.html");
}

else
{
	echo "Incorrect password:Try again";
}

mysqli_close($con);  

?>

