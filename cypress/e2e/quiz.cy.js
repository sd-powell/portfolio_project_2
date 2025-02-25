describe("Quiz Functionality", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5501/");
  });

  it("Starts the quiz and checks if the timer appears", () => {
    cy.get("#start_btn").click();
    cy.get("#quiz_panel").should("be.visible");
    cy.get("#timer_secs").should("contain", "15");
  });

  it("Selects an answer and checks if the timer pauses", () => {
    cy.get("#start_btn").click();
    cy.get(".answer_btn").first().click();
    cy.wait(1000);
    cy.get("#timer_secs")
      .invoke("text")
      .then((time) => {
        const pausedTime = parseInt(time);
        cy.wait(2000);
        cy.get("#timer_secs")
          .invoke("text")
          .should("eq", pausedTime.toString());
      });
  });

  it("Clicks 'Next' and checks if the timer resets", () => {
    cy.get("#start_btn").click();
    cy.get(".answer_btn").first().click();
    cy.get("#next_btn").click();
    cy.get("#timer_secs").should("contain", "15");
  });
});
