import '../styles/cards.scss'
import combine_card from '../assets/combine-card.webp'
import date_card from '../assets/date-card.webp'
import history_card from '../assets/history-card.webp'
import { PointsProps } from '../modal'


const CardDetails:PointsProps[] = [
    {
        id:1,
        img:history_card,
        title:"Transactions",
        description:"Pick winning Stocks confidently with 130+ filters or create your",
    },
    {
        id:2,
        img:combine_card,
        title:"Friends and Family",
        description:"Pick winning Stocks confidently with 130+ filters or create your",
    },
    {
        id:3,
        img:date_card,
        title:"Timely Reminders",
        description:"Pick winning Stocks confidently with 130+ filters or create your",
    }
]


export const Cards = () => {
    return (
        <div className="container">
            <h1 className='cards-title'>Track what <br />matters to you</h1>
            <div className="cards-container">
                {CardDetails.map((card) => (
                    <div 
                        key={card.id} 
                        className="card" 
                        style={{ backgroundImage: `url(${card.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <h2 className="card-title">{card.title}</h2>
                        <p className="card-description">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
