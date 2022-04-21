Módulos - Lazy Load
Módulos lazy loaded ajudam a diminuir o tempo de inicialização da aplicação. Com o lazy load, o aplicativo não precisa carregar tudo de uma só vez. Ele só vai carregar o que o usuário espera ver. O módulo só irá carregar quando o usuário navegar para sua rota. Perfeito para aplicações grande, combina com o interesse do usuário e organiza a estrutura. Todo o conteúdo do módulo está diretamente relacionado com a rota. Logo faz sentido os componentes estarem dentro do módulo.

|-- pedido // Module
    |-- novo
        |-- novo-pedido.component .|html|scss|spec|.ts
    |-- editar
        |-- editar-pedido.component .|html|scss|spec|.ts
    |-- detalhes
        |-- detalhes-pedido.component .|html|scss|spec|.ts
    |-- pedido.service.ts
    |-- pedido.module.ts
    |-- pedido.routes.ts

    Trabalhar com módulos há ganhos significativos na inicialização da aplicação. É inimaginável uma aplicação Angular de médio porte sem módulos lazy load. E essa estrutura é coesa, mantém os grupos de interesse dentro de um mesmo local.