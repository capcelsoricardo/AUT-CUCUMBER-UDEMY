$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Realizar login",
  "description": "",
  "id": "login;realizar-login",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 6,
      "name": "@ScenarioComum"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "faço login com o usuário \"mercury\" e senha \"mercury\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "sou autenticado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.queEuEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 186368482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 26
    },
    {
      "val": "mercury",
      "offset": 44
    }
  ],
  "location": "LoginSteps.façoLoginComOUsuárioESenha(String,String)"
});
formatter.result({
  "duration": 3580731,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.souAutenticadoComSucesso()"
});
formatter.result({
  "duration": 23607,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#Scenario Outline"
    }
  ],
  "line": 14,
  "name": "Tentativa de Login",
  "description": "",
  "id": "login;tentativa-de-login",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "faço login com o usuário \"\u003cusuario\u003e\" e senha \"\u003csenha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "sou direcionado para a tela Sign-On",
  "keyword": "Então "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;tentativa-de-login;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 20,
      "id": "login;tentativa-de-login;;1"
    },
    {
      "cells": [
        "mercury",
        "mer"
      ],
      "line": 21,
      "id": "login;tentativa-de-login;;2"
    },
    {
      "cells": [
        "123434",
        "34"
      ],
      "line": 22,
      "id": "login;tentativa-de-login;;3"
    },
    {
      "cells": [
        "",
        "34"
      ],
      "line": 23,
      "id": "login;tentativa-de-login;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 21,
  "name": "Tentativa de Login",
  "description": "",
  "id": "login;tentativa-de-login;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "faço login com o usuário \"mercury\" e senha \"mer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "sou direcionado para a tela Sign-On",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.queEuEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 47715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 26
    },
    {
      "val": "mer",
      "offset": 44
    }
  ],
  "location": "LoginSteps.façoLoginComOUsuárioESenha(String,String)"
});
formatter.result({
  "duration": 573532,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.souDirecionadoParaATelaSignOn()"
});
formatter.result({
  "duration": 29149,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Tentativa de Login",
  "description": "",
  "id": "login;tentativa-de-login;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "faço login com o usuário \"123434\" e senha \"34\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "sou direcionado para a tela Sign-On",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.queEuEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 40842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123434",
      "offset": 26
    },
    {
      "val": "34",
      "offset": 43
    }
  ],
  "location": "LoginSteps.façoLoginComOUsuárioESenha(String,String)"
});
formatter.result({
  "duration": 1336136,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.souDirecionadoParaATelaSignOn()"
});
formatter.result({
  "duration": 29569,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Tentativa de Login",
  "description": "",
  "id": "login;tentativa-de-login;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 13,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "faço login com o usuário \"\" e senha \"34\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "sou direcionado para a tela Sign-On",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.queEuEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 49255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    },
    {
      "val": "34",
      "offset": 37
    }
  ],
  "location": "LoginSteps.façoLoginComOUsuárioESenha(String,String)"
});
formatter.result({
  "duration": 137603,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.souDirecionadoParaATelaSignOn()"
});
formatter.result({
  "duration": 33307,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Realizar login",
  "description": "",
  "id": "login;realizar-login",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 26,
      "name": "@ScenarioDataTable"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "que eu esteja na tela de login",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "faço login com:",
  "rows": [
    {
      "cells": [
        "usuario",
        "mercury"
      ],
      "line": 30
    },
    {
      "cells": [
        "senha",
        "12345678"
      ],
      "line": 31
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "sou direcionado para a tela Sign-On",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.queEuEstejaNaTelaDeLogin()"
});
formatter.result({
  "duration": 40107,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.façoLoginCom(DataTable)"
});
formatter.result({
  "duration": 1658299,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.souDirecionadoParaATelaSignOn()"
});
formatter.result({
  "duration": 24608,
  "status": "passed"
});
});