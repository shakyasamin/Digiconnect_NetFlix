import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {Icon} from 'react-icons-kit';
import {cross} from 'react-icons-kit/icomoon/cross';
import {checkmark} from 'react-icons-kit/icomoon/checkmark';
import { generateMedia } from 'styled-media-query';

function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5'}}>Choose one plan and watch everything on Netflix.</span>
                    <Button className="btn">Try it now</Button>
                </div>
                {/* Tab bottom content */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Ultra  HD Available</td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>                           
                        </tbody>
                    </table>

                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentThree;

//media
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1000px'
})

const TabContainer = styled.div
`
    background: var(--main-deep-dark);

    .tab-content{
        margin: 0 15%;
        padding-bottom: 1%;
    }

    .tab-top-content{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;
        ${customMedia.lessThan('lgDesktop')`
        grid-template-columns: 1fr;
       row-gap: 1.5rem;
       text-align: center;
    `}
    }

    span{
        grid-column : 3 / 8;
        ${customMedia.lessThan('lgDesktop')`
        grid-columns: 1 / -1;
      
    `}
    }

    .btn{
        grid-column : 8 / 12;
        margin-left : 3rem;
        margin-right: 5.1rem;
        ${customMedia.lessThan('mdDesktop')`
      grid-column: 1 / -1;
      margin-left: 30%;
      margin-right: 30%
    `}
    }

    //Tab Bottom Content
    .tab-bottom-content{
        margin : 2rem auto;
    }

    //Table
    table{
        width: 100%;
        margin-top: 2rem;
        border-collapse: collapse;
    }

    table thead th{
        text-transform: uppercase;
        padding: 0.8rem;
    }

    table tbody{
        display : table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    table tbody tr td {
        color : #999;
        padding : 0.8rem 1.2rem;
        text-align : center;
    }

    table tbody tr td:first-child{
        text-align : left;
    }

    table tbody tr:nth-child(even){
        background: #222;
    }
`
