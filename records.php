
<?php 
include "dbconn.php";

$result = mysqli_query($con,"Select * from abc");

?>

<table align="center" border=2 cellpadding=20>
<tr>
<th>First name</th>
<th>Last name</th>
<th>Username</th>
<th>Email</th>
<th>Password</th>
<th>Retype Password</th>


</tr>

<?php

	while($abc = mysqli_fetch_object($result))
	{
?>
	<tr>
        <td> <?php echo $abc->firstname;?> </td>
        <td> <?php echo $abc->lastname;?> </td>
		<td> <?php echo $abc->username; ?> </td>
		<td> <?php echo $abc->email; ?> </td>
		<td> <?php echo $abc->password;     ?> </td>	
		<td> <?php echo $abc->repassword;  ?> </td>
</tr>
<?php	} ?>
	</table>

<?php
mysqli_close($con);
?>
