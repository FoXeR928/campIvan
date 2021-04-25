//Скрипт для формы
$(function(){
    //Кнопка отправки
    $('.form-send__button').click(function(evt){
        evt.preventDefault();
        //значения
        var name=$('input[name="name"]').val();
        var number=$('input[name="number"]').val();
        //проверка
        if (name.length>0 && number.length>0){
            //демонстрация и скрытие окна
            $('.dialog-conteiner').show()
            $('.dialog-ask__button').click(function(){
                $('.dialog-conteiner').hide()
            })
            
        } 
    });
});