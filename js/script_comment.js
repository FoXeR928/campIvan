//скрипт комментариев
$(function(){
    $('.form-send__button').click(function(evt){
        evt.preventDefault();
        var comment=$('.form-send__textarea').val();
        if (comment.length>0){
            // добавление комментария
            $('.section-comments').append('<article class="article-comments -back">'+'<img class="article-comments__img" src="img/jmDQeyW7.jpeg" alt="">'+'<p class="article-comment__p">'+comment+'</p>'+'</article>');
        };
    });
});