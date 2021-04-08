import {React, useState} from 'react';
import Layout, { Main } from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function Goals() {

    const [listeDefi,setListeDefi] = useState([
        {theme :"Social relationship",
         data : [{Date:"06/04/2021",Title:"Take an opportunity to talk to a loved one", Progess:"In progress", Validation:false},
                 {Date:"07/04/2021",Title:"Challenge yourself to hold a conversation for 5 minutes", Progess:"In progress", Validation:false}]
        },
        {theme :"Surrounding",
         data : [{Date:"08/04/2021",Title:"Let's take a glimpse outside together, go for a walk in a place you like and take note about everything that catch your eyes", Progess:"In progress", Validation:false}]
        }
    ]);
    function generateTableau()
    {
        return(
            <div>
                {listeDefi.map(item => (
                    <Card>
                        <Card.Header>{item.theme}</Card.Header>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Progess</th>
                                <th>Validation</th>
                            </tr>
                            {item.data.map(item2 =>(
                            <tr>
                                <td>{item2.Date}</td>
                                <td>{item2.Title}</td>
                                <td>{item2.Progess}</td>
                                <td><button>Validate</button></td>
                            </tr>
                            ))}
                        </table>
                    </Card>
                ))}
        </div>)
        
    }
    return (
        <Layout>
            <Main>
                <Container className="Goals">
                {generateTableau()}
                </Container>
            </Main>
        </Layout>
    )
}