import React from 'react'
import  styled  from 'styled-components';
import { InnerLayout } from '../styles/layout';
import card from '../img/creditcard.svg';



function CardSection() {
    return (
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all payments
                        </h2>
                        
                            <p>
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Aliquid officia laborum temporibus minus
                            . Unde distinctio asperiores
                            velit sint perspiciatis quidem maiores aliquam rerum ratione natus.
                        </p>
                                           
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`
    .card-container {
        display: grid;
        grid-template-columns: repeat(2 ,1fr);
        @media screen and (max-width: 990px){
            grid-template-columns: repeat(1 ,1fr);
        }
    }

    .card-right {
        display: flex;
        justify-content: flex-end;
        @media screen and (max-width: 1347px){
           justify-content: center;
           margin-top: 15px;
        }
    }

    .card-left {
        p {
            padding: 1rem 0;
        }
    }
`;

export default CardSection
