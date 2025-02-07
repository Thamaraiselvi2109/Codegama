import { TestimonialProps } from '../modal'
import '../styles/testi.scss'


const testimoni:TestimonialProps[] = [
    {
        id:1,
        name:"Rohin Singh",
        designation:"Chief integrating officer",
        description:"We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don't see us not using Metaforms in near future."
    },
    {
        id:2,
        name:"Rohin Singh",
        designation:"Chief integrating officer",
        description:"We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don't see us not using Metaforms in near future."
    },
    {
        id:3,
        name:"Rohin Singh",
        designation:"Chief integrating officer",
        description:"We were one of the early adopters of Metaforms. More than the lead quality, the quality of conversations with our prospects improved. Metaforms pays for itself in the first few day I don't see us not using Metaforms in near future."
    }
]
export const Testimonial = () => {
    return (
        <div className="container">
            <div className="testi-container">
                {testimoni.map((testi) => (
                    <div key={testi.id}>
                        <p className="testi-description">"{testi.description}"</p>
                        <h4 className="testi-name">{testi.name}</h4>
                        <p className="testi-designation">{testi.designation}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};