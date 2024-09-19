///<reference types ="cypress" />

describe ('teste', () => {

    before (() => {
        cy.getToken('a@a', 'a')
        // .then(tkn => {
        //     token = tkn
        // })

    })

    beforeEach(() => {
        cy.resetRest()
    })

   it.only('login',() => {
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body:{
            email: "nathane@teste.com",
            redirecionar: false,
            senha: "teste"  
        }//.its(res => console.log(res))
    })//
    })

    it('criar conta',() => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/contas',
            body:{
                nome: "Nova conta"  
            }.then(res => console.log(res))
        })
        })
} )