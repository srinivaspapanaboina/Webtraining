
window.onload = function() {
    
var form=document.getElementById('show-hide');
var daily=document.getElementById('daily');
    
daily.onclick=function(){
    
    form.style.display="block";
}
var processbtn=document.getElementById('process');
        var datagrid=document.getElementById('datagrid');
        processbtn.onclick=function(){
            datagrid.style.display='block';
        }
}