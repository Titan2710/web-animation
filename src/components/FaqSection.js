import React from 'react'
import  styled  from 'styled-components';
import {InnerLayout} from '../styles/layout'
import lines from '../img/lines.svg'
import Question from './Question';
import questions from '../questions';

function FaqSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">
                    Frequently <span>asked questions</span>
                </h3>
                <p className="c-para">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Consequuntur veritatis sint ullam aperiam 
                dignissimos doloremque veniam obcaecati et, officiis repudiandae
                 quidem alias dolores dolor quasi modi eius vero qui molestias 
                 quas, recusandae culpa natus error.
                </p>
                <div className="lines">
                    <img src={lines} alt="" />
                </div>

                <div className="question-con">
                    {
                        questions.map((q) => {
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`

    .c-para {
        width: 60%;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .questions-con {
        padding-top: 4rem;
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
        
    }

    .lines{
        position: absolute;
        left: 0;
        top: 320%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`;  

export default FaqSection
