# language: pt

@TagParaFeature
Funcionalidade: Aprender Cucumber
	Como um aluno 
	Eu quero aprender a utilizar Cucumber
	Para que eu possa automatizar critérios de aceitação

@Esse
Cenário: Deve executar especificação
	Dado que eu crie o arquivo corretamente
	Quando executá-lo
	Então a especificação deve finalizar com sucesso
	Então um outro step

Cenário: Deve incrementar contador
	Dado que o valor do contador é 15
	Quando eu incrementar em 5
	Então o valor do contador será 20
	
Cenário: Deve incrementar contador
	Dado que o valor do contador é 20
	Quando eu incrementar em 5
	Então o valor do contador será 25
	
Cenário: Deve calcular atraso na entrega
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 dia
	Então a entrega será efetuada em 07/04/2018

@TipoUm
Cenário: Deve calcular atraso no prazo de entrega da China
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 meses
	Então a entrega será efetuada em 05/06/2018

@TipoDois
Cenário: Deve criar steps genéricos para estes passos
    Dado que o ticket é AF345
    E que o valor da passagem é R$ 230,45
    * que o nome do passageiro é "Fulano da Silva"
    E que o telefone do passageiro é 9999-9999
    Quando criar os steps
    Então o teste vai funcionar

@ignore @TipoUm @TipoDois
Cenário: Deve reaproveitar os steps "Dado" do cenário anterior
    Dado que o ticket é AB167
    Dado que o ticket é especial AB167
    Dado que o valor da passagem é R$ 1120,23
    Dado que o nome do passageiro é "Cicrano de Oliveira"
    Dado que o telefone do passageiro é 9888-8888