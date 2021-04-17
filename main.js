$(".new-input").keypress(function(e){

    if(e.keyCode == 13){
        let newJob = $(this).val();
        $(this).prev().append(
            `<div class="list-item">
              ${newJob}              
            <span class="del"><i class="fas fa-trash pr-2"></i></span>
        </div>
            `
        );
        $(this).val("");
        $(".del").click(function(){
            $(this).parent().remove();
        });
        
        
        $( ".list" ).sortable({
            connectWith: ".list"
        }).disableSelection();
    }
})




