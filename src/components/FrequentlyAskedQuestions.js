import React from 'react'
import Faq from './Faq';


import './FrequentlyAskedQuestions.css'

const FrequentlyAskedQuestions = () => {



return (
    <div className='FrequentlyAskedQuestions_container'>
        <div className='FAQ_header'>
            <h4>FREQUENTLY ASKED QUESTIONS</h4>
            <p className='text'>
                Please contact us if you cannot find an answer to your question.
            </p>

        </div>
        <ul className='Questions_list'>
            <li>
                <Faq 
                    question="How does it work?"
                    answer_paragraph1="We parcel airspace above property and below 
                    commercial airspace for property owners to 
                    benefit from as we enable its trade without 
                    the ownership of your property changing in anyway."
                    id="faq_1"
                />
            </li>
            <li>
                <Faq 
                    question="What does SkyTradeLinks do?"
                    answer_paragraph1="Once we establish the space as yours we connect 
                    potential air users and traders."
                    id="faq_2"
                />
            </li>
            <li>
                <Faq 
                    question="How will a property owner make money from this?"
                    answer_paragraph1="When the space is used the property owner will receive a fee."
                    id="faq_3"
                />
            </li>
            <li>
                <Faq 
                    question="I don't see any flying cars, is this real?"
                    answer_paragraph1="Yes its real, currently we are in the early stages of 
                    localised air travel and as technology progresses this 
                    space becomes ever more valuable.  Highways are clogged, 
                    emissions are rising and the solutions to these problems 
                    to date have been to add more land vehicles to the traffic 
                    jams, but place batteries in them instead of gas."
                    answer_paragraph2="Having secured your air space in order for you to benefit 
                    from it will also benefit society which is a win win."
                    id="faq_4"
                />
            </li>
            <li>
                <Faq 
                    question="Will this mean lots of noise above me?"
                    answer_paragraph1="No, air users will be governed by local laws when 
                    they use the space."
                    id="faq_5"
                />
            </li>
        </ul>
    </div>
  )
}

export default FrequentlyAskedQuestions