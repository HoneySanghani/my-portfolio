function openWork(evt,workName){
    var i,worklinks,workcontent;
    workcontent=document.getElementsByClassName("work-tab-content");
    for(i=0;i<workcontent.length;i++){
        workcontent[i].style.display = "none";
    }
    worklinks = document.getElementsByClassName("work-tab-links");
    for(i=0;i<worklinks.length;i++){
        worklinks[i].className=worklinks[i].className.replace("active", "");
    }
    document.getElementById(workName).style.display="flex";
    evt.currentTarget.className+=" active ";
}
document.getElementById("defaultOpen").click();
