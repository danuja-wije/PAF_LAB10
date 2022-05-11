<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.Item"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Items Page</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
</head>
<body>
	<form id="formItem" name="formItem">
		<label for="itemCode">Item Code:</label> <input type="text"
			name="itemCode" id="itemCode" class="form-control-sm"> <br>
		<label for="itemName">Item Name:</label> <input type="text"
			name="itemName" id="itemName" class="form-control-sm"> <br>
		<label for="itemPrice">Item Price:</label> <input type="text"
			name="itemPrice" id="itemPrice" class="form-control-sm"> <br>
		<label for="itemDescription">Item Description:</label> <input
			type="text" name="itemDesc" id="itemDesc" class="form-control-sm">
		<br> <input type="button" id="btnSave" name="btnSave"
			value="Save" class="btn btn-primary"> <input type="hidden"
			name="hidItemIDSave" id="hidItemIDSave" value="">
	</form>
	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	<br>
	<div class="divItemsGrid">
	<%=new Item().readItems() %></div>
</body>
<script src="Components/jquery.min.js" type="text/javascript"></script>
<script src="Components/main.js" type="text/javascript"></script>
</html>