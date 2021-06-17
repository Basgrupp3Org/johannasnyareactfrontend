
import Accordion from './Accordion'
import './BudgetPage.css'




function BudgetPage() {
    return (
        <div>
            <Accordion
                title="Datum"
                content="16-06-2021" />

            <Accordion
                title="SparMål"
                content="lägg till "

            />



            <Accordion
                title="Bostad"
                content="100" />
            <Accordion
                title="Fordon"
                content="1000" />
            <Accordion
                title="Rörliga kostnader"
                content="500" />
            <Accordion
                title="Fasta utgifter"
                content="100" />
            <Accordion
                title="obudgeterat"
                content="1000" />
            <Accordion
                title="inkomst"
                content="1000"
            />






        </div>



    );
}



export default BudgetPage;