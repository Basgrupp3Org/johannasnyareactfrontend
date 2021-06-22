
import Accordion from './Accordion'
import './BudgetPage.css'




function BudgetPage() {
    return (
        <div>
            <Accordion
                title="Datum"
                content="16-06-2021"
            />

            <Accordion
                title="Sparmål"
                content="lägg till "


            />



            <Accordion
                title="Bostad      3000kr/mån"
                content="3000:- Bosta" />

            <Accordion
                title="Fordon      3000kr/mån"
                content="1000:-    Vovlo/Rejmes" />

            <Accordion
                title="Rörliga kostnader    8000kr"
                content="500:-    SF Bio" />

            <Accordion
                title="Fasta utgifter     1000kr/mån"
                content="1000:-        CSN-Lån" />

            <Accordion
                title="Obudgeterat   1000kr/mån"
                content="1000:-  Cykelaffär" />

            <Accordion
                title="Inkomst   37000 SEK"
                content="37000:-   Lön"
            />


            <div clas="buttons">
                <a class="btn1" >Lägg till Budget</a>
                <a class="btn2">Lägg till Kategori</a>
            </div>













        </div>



    );
}



export default BudgetPage;