describe("Homepage FAQs Accordian", () => {
    it("shoudl show first section on page load", () =>{
        browser.url("/");
        let firstHeight = browser.getCssProperty(".accordion .accordion-item:first-child .accordion-content", "height");

        console.log(firstHeight)

        expect(firstHeight.parsed.value).to.be.greaterThan(0)
    } )
}) 