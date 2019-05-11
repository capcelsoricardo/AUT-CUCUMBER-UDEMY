package curso.treinamento.steps;

import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class LoginSteps {

	@Dado("^que eu esteja na tela de login$")
	public void queEuEstejaNaTelaDeLogin() throws Throwable {
	   
	}

	@Quando("^faço login com o usuário \"([^\"]*)\" e senha \"([^\"]*)\"$")
	public void façoLoginComOUsuárioESenha(String arg1, String arg2) throws Throwable {
	    System.out.println("Parametro 1: " + arg1 + " Parametro 2: " + arg2);
	}

	@Então("^sou autenticado com sucesso$")
	public void souAutenticadoComSucesso() throws Throwable {
	   
	}

	@Então("^sou direcionado para a tela Sign-On$")
	public void souDirecionadoParaATelaSignOn() throws Throwable {
	   
	}
	
	@Quando("^faço login com:$")
	public void façoLoginCom(DataTable table) throws Throwable {
	    Map<String, String> map = table.asMap(String.class, String.class);
	    System.out.println("Esse é o Usuário: " + map.get("usuario"));
	    System.out.println("Essa é a Senha: " + map.get("senha"));
	    
	}

}
