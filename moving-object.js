$(function(){
    $('.left .item').draggable({
        revert:true,
        proxy:'clone'
    });
    $('.custom-item').draggable({
        revert:true,
        proxy:'clone'
    });
    $('.time-right-hrs .time').draggable({
        revert:true,
        proxy:'clone'
    });
    $('.time-right-min .time').draggable({
        revert:true,
        proxy:'clone'
    });
    $('.right td.drop').droppable({
        onDragEnter:function(){
            $(this).addClass('over');
        },
        onDragLeave:function(){
            $(this).removeClass('over');
        },
        onDrop:function(e,source){
            $(this).removeClass('over');
            if ($(source).hasClass('assigned')){
                $(this).append(source);
            } else {
                var c = $(source).clone().addClass('assigned');
                $(this).empty().append(c);
                c.draggable({
                    revert:true
                });
            }
        }
    });
    $('.left').droppable({
        accept:'.assigned',
        onDragEnter:function(e,source){
            $(source).addClass('trash');
        },
        onDragLeave:function(e,source){
            $(source).removeClass('trash');
        },
        onDrop:function(e,source){
            $(source).remove();
        }
    });
     $('.time-right-min').droppable({
        accept:'.assigned',
        onDragEnter:function(e,source){
            $(source).addClass('trash');
        },
        onDragLeave:function(e,source){
            $(source).removeClass('trash');
        },
        onDrop:function(e,source){
            $(source).remove();
        }
    });
     $('.time-right-hrs').droppable({
        accept:'.assigned',
        onDragEnter:function(e,source){
            $(source).addClass('trash');
        },
        onDragLeave:function(e,source){
            $(source).removeClass('trash');
        },
        onDrop:function(e,source){
            $(source).remove();
        }
    });
});