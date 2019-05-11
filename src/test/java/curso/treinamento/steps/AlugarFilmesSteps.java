package curso.treinamento.steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import curso.treinamento.entidades.Filme;
import curso.treinamento.entidades.NotaAluguel;
import curso.treinamento.servicos.AluguelService;
import org.junit.Assert;

public class AlugarFilmesSteps {
	
	private Filme filme;
	private AluguelService aluguel = new AluguelService();
	private NotaAluguel nota;
	
	
	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int arg1) throws Throwable {
		filme = new Filme();
		filme.setEstoque(arg1);
		
	}

	@Dado("^que o preço do aluguel seja R\\$ (\\d+)$")
	public void queOPreçoDoAluguelSejaR$(int arg1) throws Throwable {
		filme.setAluguel(arg1);
	}
	
	
	@Quando("^alugar$")
	public void alugar() throws Throwable {
		nota = aluguel.alugar(filme);
		
	}

	@Então("^o preço do aluguel será R\\$ (\\d+)$")
	public void oPreçoDoAluguelSeráR$(int arg1) throws Throwable {
		
		Assert.assertEquals(arg1, nota.getPreco());
	}

	@Então("^a data de entregar será no dia seguinte$")
	public void aDataDeEntregarSeráNoDiaSeguinte() throws Throwable {
		
		
	}

	@Então("^o estoque do filme será (\\d+) unidade$")
	public void oEstoqueDoFilmeSeráUnidade(int arg1) throws Throwable {
		
		
	}
	


	@Então("^não será possível por falta de estoque$")
	public void nãoSeráPossívelPorFaltaDeEstoque() throws Throwable {
	    
	}

	@Dado("^que o tipo do aluguel seja extendido$")
	public void queOTipoDoAluguelSejaExtendido() throws Throwable {
	    
	}

	@Então("^a data de entrega será em (\\d+) dias$")
	public void aDataDeEntregaSeráEmDias(int arg1) throws Throwable {
	    
	}

	@Então("^a pontuação recebida será de (\\d+) pontos$")
	public void aPontuaçãoRecebidaSeráDePontos(int arg1) throws Throwable {
	    	    
	}
}