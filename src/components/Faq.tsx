import { useState } from "react";
import "../styles/faq.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FAQ } from "../modal";


const faqs: FAQ[] = [
    {
        id: 1,
        question: "What is the conversion % of MetaForm?",
        answer: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
    {
        id: 2,
        question: "How do your quote pricing works and when can we get on call?",
        answer: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
    {
        id: 3,
        question: "Can you facelift my design?",
        answer: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
    {
        id: 4,
        question: "What is the conversion % of MetaForm?",
        answer: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But that being said, I am always open to discuss interesting opportunities, collaborations and other fun stuff. If you're interested in discussing a project, making something great together, please fill the form above. imply want to get get in touch?",
    },
];

export const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <div className="container">
                <div className="faq_container">
                    <h1>Frequently Asked Questions</h1>
                    <p>A community for India's investors to hang out and talk about investments & personal finance.</p>

                    <div className="faq_list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="Accordion">
                                <div className="title_div" onClick={() => toggleAccordion(index)}>
                                    <p className="accor_title">{faq.question}</p>
                                    <span>
                                        {openIndex === index ? (
                                            <FaAngleUp color="#7B1984" />) : (<FaAngleDown color="#7B1984" />
                                        )}
                                    </span>
                                </div>
                                <div className={`accordion_content ${openIndex === index ? "open" : ""}`} style={{ maxHeight: openIndex === index ? "500px" : "0", transition: "max-height 0.3s ease-in-out", overflow: "hidden" }}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};