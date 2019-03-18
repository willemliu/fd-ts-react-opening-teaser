import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import uniqid from 'uniqid';
import OpeningTeaser from '../src/OpeningTeaser';

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #f1ded0;
    }

    .clear.centered,
    .content-area {
        padding: 1rem 0;
        &.persoonlijk {
            background-color: white;
        }
    }

    .fd-opening-teaser {
        margin-bottom: 1rem;
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        teaser: {
            id: "1286721",
            baseUrl: "https://fd.nl",
            url: "https://fd.nl/economie-politiek/1286721/amsterdam-doet-er-toe",
            image: {
                src: 'https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1519699812382739%2C.9999999999999999%2C.8442776735459663',
                alt: 'Mario Draghi, president of the European Central Bank (ECB), departs a rates decision news conference in Frankfurt, Germany, on Thursday, Dec. 13, 2018. Draghi??said risks to the euro-area economy are worsening even as he called time on the??European Central Bank???s??flagship deflation-fighting tool. Photographer: Alex Kraus/Bloomberg'
            },
            sourceSets: [{
                media: "(max-width:640px)",
                srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=599&h=337&rect=.0%2C.1519699812382739%2C.9999999999999999%2C.8442776735459663`
            }, {
                media: "(max-width:860px)",
                srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=723&h=406&rect=.0%2C.1519699812382739%2C.9999999999999999%2C.8442776735459663`
            }, {
                media: "(min-width:861px)",
                srcSet: `https://images.fd.nl/-4mOGVA1ry0LHTzjvcxdyT-FH-E.jpg?fit=crop&crop=faces&auto=format&fm=jpg&q=45&w=719&h=404&rect=.0%2C.1519699812382739%2C.9999999999999999%2C.8442776735459663`
            }],
            figCaption: "Amsterdam doet ertoe",
            subject: "Buitenland",
            comments: 1,
            readableAge: "34 min",
            date: "17 Nov 1981",
            title: "Amsterdam doet ertoe",
            description: "Een wethouder Verkeer en Vervoer, in Davos? Zeker! Wethouder Sharon Dijksma legt op het World Economic Forum uit hoe Amsterdam omgaat met duurzame mobiliteit.",
            related: [{
                longread: true,
                title: '"Als vrouw moet je altijd onafhankelijk zijn"',
                url: 'https://dev.fd.nl/profiel/1235280/als-vrouw-moet-je-onafhankelijk-zijn',
                uuid: uniqid()
            }, {
                title: 'President van de Amerikaanse Fed hamert op onafhankelijkheid',
                url: 'https://dev.fd.nl/economie-politiek/1235274/president-van-de-amerikaanse-fed-hamert-op-onafhankelijkheid',
                uuid: uniqid()
            }]
        }
    };

    onBookmark = (e: React.MouseEvent<HTMLElement>) => {
        if (e.currentTarget.classList.contains('selected')) {
            this.setState({teaser: {...this.state.teaser, bookmarked: false}});
        } else {
            this.setState({teaser: {...this.state.teaser, bookmarked: true}});
        }
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <OpeningTeaser
                    {...this.state.teaser}
                    id={uniqid()}
                    onBookmark={this.onBookmark}
                />
                <OpeningTeaser
                    {...this.state.teaser}
                    id={uniqid()}
                    onBookmark={this.onBookmark}
                    cardStyle="longread"
                />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App/>
    </div>
</>,
document.querySelector('.clear.centered'));
