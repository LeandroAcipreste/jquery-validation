$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telephone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#postal-code').mask('00000-000', {
        placeholder: '012345-678'
    });
    
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telephone: {
                required: true,
            }, 
            address: {
                required: true
            },
            postalCode: {
                required: true,
                minlength: 9
            },
            cpf: {
                required: true,
                minlength: 11
            },
        },

        messages: {
            name: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 2 caracteres"
            },
            email: {
                required: "Por favor, insira seu email",
            },
            telephone: {
                required: "Por favor, insira seu telefone",
            },
            address: {
                required: "Por favor, insira seu Endereço",
            },
            postalCode: {
                required: "Por favor, insira seu CEP",
                minlength: "Seu CEP deve conter 9 dígitos"
            },
            cpf: {
                required: "Por favor, insira seu CPF",
                minlength: "Seu cpf deve conter 11 dígitos"
            },
            
        },
        
        
        submitHandler: function(form) {
            console.log('olá')
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if(errors === 0){
                alert('Compra Realizada')
            }else{alert("Por favor, preencha os campos para prosseguir com a compra!")};
        }
    }); 

    $('button').on('submit', function(e){
        e.preventDefault()
        form.submit()
    })
    
});



