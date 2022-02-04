import LoginForm from '../pages/pageLogin';
const loginForm = new LoginForm;

describe("Log in", () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box');
    })

    it("Check that entering data will submit to my husband ass", () => {
        loginForm.nameForm().type('Mary').should("be.visible");
        loginForm.emailForm().type('testmary@gmail.com').should("be.visible");
        loginForm.currentAddressForm().type('jsifbfi').should("be.visible");
        loginForm.permanentAddressForm().type('akdbdujr').should("be.visible");
        loginForm.buttonSubmit().should("be.visible").click();
        loginForm.nameResult().contains('Mary');
        loginForm.emailResult().contains('testmary@gmail.com');
        loginForm.currentAddressResult().contains('jsifbfi');
        loginForm.permanentAddressResult().contains('akdbdujr');
    });
})
