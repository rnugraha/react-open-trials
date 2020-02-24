Feature: Search for analysis result by phenotype

    As a user I want to be able to search for  analysis result by phenotype

    Scenario: Opening Portal Homepage
        Given I open Portal Homepage
        Then I see "Open Trials" in the page
        Then I see a search box
 
    Scenario: Typing search keyword in the search box
        Given I open Portal Homepage
        When I type "asthma"
        Then I see "asthma" in the search box
    
    Scenario: Viewing Gene profile
        Given I open GeneView page
        Then I see "TP53" on the page
        Then I see 'p53' as the synonym of the gene on the page
        