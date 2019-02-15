describe("Homepage FAQs Accordian", () => {
    beforeEach  ("open home page", () => {
        browser.url("/");
    });
    it("should show first section on page load", () =>{
        let firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");
        expect(firstHeight.parsed.value).to.be.greaterThan(0)
        
    })
    it("should not show other content", () => {
        let secondDisplay = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "display")
        expect(secondDisplay.value).to.equal("none");
    })
    it("should expand/hide content on click", () => {
        browser.click(".accordion .accordion-item:nth-of-type(2)")
        browser.pause(1000);
        let secondHeight = browser.getCssProperty(".accordion .accordion-item:nth-of-type(2) .accordion-content", "height")
        console.log("secondHeight", secondHeight)
        expect(secondHeight.parsed.value).to.be.greaterThan(0)

        let firstDisplay = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "display")
        expect(firstDisplay.value).to.equal("none");

    })
}) 



