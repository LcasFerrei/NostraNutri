// Botões e Mobile Button
$(document).ready(function() {
    $('#mobile_btn').on('click', function(){
        $('#mobilemenu').toggleClass('active');
        $('mobile_btn').find('i').toggleClass('fa-x');
    });
});

$(document).ready(function() { // Miissão, valores
    // Função para mostrar/ocultar texto ao clicar no título
    function toggleText(titleId, textId) {
        $(titleId).on('click', function() {
            $(textId).toggleClass('hidden');
        });
    }

    // Aplicar a função para cada título específico
    toggleText('#missao-title', '#missao-text');
    toggleText('#valores-title', '#valores-text');
    toggleText('#visao-title', '#visao-text');
});

$(document).ready(function() { // função do cabeçalho
    const header = $('header');
    let lastScrollTop = 0;

    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        const scrollPosition = scrollTop - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', "none");
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.removeClass('show');
        } else {
            // Scrolling up
            header.addClass('show');
        }

        lastScrollTop = scrollTop;
    });
});

