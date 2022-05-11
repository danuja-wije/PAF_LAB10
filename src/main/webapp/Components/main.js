//hide the alert boxes

$(document).ready(function(){
		$("#alertSuccess").hide();
		$("#alertError").hide();
		
});




$(document).on('click',"#btnSave",function(event){
	console.log($("#hidItemIDSave").val());
    // Clear alerts---------------------
    $("#alertSuccess").text(""); 
    $("#alertSuccess").hide(); 
    $("#alertError").text(""); 
    $("#alertError").hide(); 
    // Form validation-------------------
    var status = validateItemForm(); 
    if (status != true){
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }
    // If valid------------------------
    var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT"; 
    console.log(type);
    $.ajax({
        url : "ItemServlet",
        type :type,
        data : $("#formItem").serialize(),
        dataType : "text",
        complete : function(response, status){
            onItemSaveComplete(response.responseText, status);
        }
    
    });
})
$(document).on("click", ".btnUpdate", function(event) 
{ 
    $("#hidItemIDSave").val($(this).data("itemid")); 
    $("#itemCode").val($(this).closest("tr").find('td:eq(0)').text()); 
    $("#itemName").val($(this).closest("tr").find('td:eq(1)').text()); 
    $("#itemPrice").val($(this).closest("tr").find('td:eq(2)').text()); 
    $("#itemDesc").val($(this).closest("tr").find('td:eq(3)').text()); 
});

$(document).on("click", ".btnRemove", function(event) 
{ 
	var id = $(this).data("itemid");
	console.log("id is :"+id)
 $.ajax( 
 { 
    url : "ItemServlet", 
    type : "DELETE", 
    data : "itemID=" + id,
    dataType : "text", 
    complete : function(response, status) 
    { 
		console.log(id)
        onItemDeleteComplete(response.responseText, status); 
    } 
 }); 
});

function validateItemForm(){
	return true;
}

function onItemSaveComplete(response, status) 
{ 
if (status == "success") 
 { 
    var resultSet = JSON.parse(response); 
    if (resultSet.status.trim() == "success") 
    { 
        $("#alertSuccess").text("Successfully saved."); 
        $("#alertSuccess").show(); 
        $(".divItemsGrid").html(resultSet.data); 

    } else if (resultSet.status.trim() == "error") 
    { 
        $("#alertError").text(resultSet.data); 
        $("#alertError").show(); 
    } 
} else if (status == "error") 
{ 
    $("#alertError").text("Error while saving."); 
    $("#alertError").show(); 
} else
{ 
    $("#alertError").text("Unknown error while saving.."); 
    $("#alertError").show(); 
} 
$("#hidItemIDSave").val(""); 
$("#formItem")[0].reset(); 
}


function onItemDeleteComplete(response, status) 
{ 
if (status == "success") 
 { 
    var resultSet = JSON.parse(response); 
    if (resultSet.status.trim() == "success") 
    { 
        $("#alertSuccess").text("Successfully deleted."); 
        $("#alertSuccess").show(); 
        $(".divItemsGrid").html(resultSet.data); 
    } else if (resultSet.status.trim() == "error") 
    { 
        $("#alertError").text(resultSet.data); 
        $("#alertError").show(); 
    } 
} else if (status == "error") 
{ 
    $("#alertError").text("Error while deleting."); 
    $("#alertError").show(); 
} else
{ 
    $("#alertError").text("Unknown error while deleting.."); 
    $("#alertError").show(); 
} 
$("#hidItemIDSave").val(""); 
$("#formItem")[0].reset(); 
}