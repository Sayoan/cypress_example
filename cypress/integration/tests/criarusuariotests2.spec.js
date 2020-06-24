/// <reference types="cypress" />
import Cadastro from '../../support/pages/CadastroPage';

describe('hometests', () => {
    beforeEach(()=>{
        cy.visit('https://automacaocombatista.herokuapp.com/users/new');
    })

    afterEach(()=>{

    })

    it('CadastrarUsuario', () => {
      
        Cadastro.validaAcessoCriar();
        Cadastro.preencherNovoUsuario();
        Cadastro.submeterUsuario();
        Cadastro.validarSubmeter();
       
    });

    it('ValidarCampoObrigatorio', () => {

        Cadastro.validaAcessoCriar();
        Cadastro.preencherNovoUsuarioErrado();
        Cadastro.submeterUsuario();
        Cadastro.retornoErros();
        
    });



  
    
});