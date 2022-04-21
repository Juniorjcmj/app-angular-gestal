O shared é onde todos os componentes compartilhados, pipes, filters e services devem ir. O shared pode ser importado em qualquer module. Assim esses itens serão reutilizados. O shared module deve ser independente do restante do aplicativo. Portanto, não deve ter referências de outro módulo.

|-- shared
        |-- [+] components
        |-- [+] mocks
        |-- [+] models
        |-- [+] directives
        |-- [+] pipes