$(document).ready(function()
{
$(".account").click(function()
{
var X=$(this).attr('id');

if(X==1)
{
$(".navsubmenu").hide();
$(this).attr('id', '0');	
}
else
{

$(".navsubmenu").show();
$(this).attr('id', '1');
}
	
});

//Mouseup textarea false
$(".navsubmenu").mouseup(function()
{
return false
});
$(".account").mouseup(function()
{
return false
});


//Textarea without editing.
$(document).mouseup(function()
{
$(".navsubmenu").hide();
$(".account").attr('id', '');
});
	
});