$(".new-input").keypress(function(event){

    if(event.keyCode == 13){
        let newJob = $(this).val();
        $(this).prev().append(
            `<div class="list-item">
              ${newJob}              
            <span class="del float-right"><i class="fas fa-trash pr-2"></i></span>
        </div>
            `
        );
        $(this).val("");
        $(".del").click(function(){
            $(this).parent().remove();
        });
        
        
        $( ".list" ).sortable();
        // $( ".list" ).disableSelection();
        // $(".list").dropable
        // $( ".list-item" ).draggable();
    }
})




