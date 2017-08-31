var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request=new XMLHttepRequest();
    request.onreadystatechange = function(){
        if(request.readystate===XML.HttepRequest.Done){
            if(request.status===200){
                var counter=request.responsetext;
                
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();

            }
        }
    }
    
};
    