//**********Mapeamento de elementos**********
const el = {
    btCriar: 'input[name="commit"]',
    txtCriarUsuario: 'h5.center',
    txtResultadoCriar: '#notice',
    txtResultadoErros: '#error_explanation',
    tfNome: '#user_name', 
    tfUltimoNome: '#user_lastname',
    tfEmail: '#user_email',
    tfEndereco: '#user_address',
    tfUniversidade: '#user_university', 
    tfProfissao: '#user_profile', 
    tfGenero: '#user_gender', 
    tfIdade: '#user_age' 
  }

//**********Ações**********
class Cadastro {

  validaAcessoCriar(){
    cy.get(el.txtCriarUsuario);
  }

  preencherNovoUsuario(){
    cy.get(el.tfNome).type('Teste');
    cy.get(el.tfUltimoNome).type('Teste');
    cy.get(el.tfEmail).type('teste@gmail.com');
    cy.get(el.tfEndereco).type('Teste');
    cy.get(el.tfUniversidade).type('Teste');
    cy.get(el.tfProfissao).type('Teste');
    cy.get(el.tfGenero).type('Teste');
    cy.get(el.tfIdade).type('18');
  }
  
  preencherNovoUsuarioErrado(){
    cy.get(el.tfNome).type('Teste');
    cy.get(el.tfUltimoNome).type('Teste');
    cy.get(el.tfEmail).type('a');
    cy.get(el.tfEndereco).type('Teste');
    cy.get(el.tfUniversidade).type('Teste');
    cy.get(el.tfProfissao).type('Teste');
    cy.get(el.tfGenero).type('Teste');
    cy.get(el.tfIdade).type('18');
  }

  submeterUsuario(){
      cy.get(el.btCriar).click({force:true});
  }

  validarSubmeter(){
    cy.get(el.txtResultadoCriar).invoke('text').should('include', 'Usuário asas com sucesso');
  }
  retornoErros(){
    cy.get(el.txtResultadoErros).invoke('text').should('include', '1 error proibiu que este usuário fosse salvo:');
  }
}

export default new Cadastro();