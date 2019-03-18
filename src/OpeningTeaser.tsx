import React, { PureComponent } from "react";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import { createGlobalStyle } from "styled-components";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import {
    RelatedArticle,
    TeaserFigure,
    TeaserFigureStyle,
    TeaserFooter,
    TeaserFooterStyle,
    TeaserRelated,
    TeaserRelatedStyle,
    UpdateLabel,
    UpdateLabelStyle,
    ImageType,
    SourceSet} from "@fdmg/fd-teaser";

export interface Props {
    alt: string;
    baseUrl: string;
    cardStyle?: CardTypes;
    className?: string;
    comments?: number;
    cropRectangle?: string;
    date: string;
    description: string;
    figCaption?: string;
    hideFooter?: boolean;
    id: string;
    image: ImageType;
    readableAge: string;
    related?: RelatedArticle[];
    shareTitle?: string;
    sourceSets?: SourceSet[];
    subject: string;
    title: string;
    updated?: boolean;
    url: string;
}

export default class OpeningTeaser extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <Card cardStyle={this.props.cardStyle ? this.props.cardStyle : 'default'} id={this.props.id} className={`fd-opening-teaser${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <a href={this.props.url}>
                        <TeaserFigure
                            figCaption={this.props.figCaption}
                            image={this.props.image}
                            sourceSets={this.props.sourceSets}
                        />
                        <div className="meta">
                            {this.props.updated ? <UpdateLabel/> : <span className="prefix">{this.props.subject}</span>}
                            <time>{this.props.readableAge}</time>
                        </div>
                        <div className="text-container">
                            <TypoGraphy textStyle="opening-teaser-h"><h1>{this.props.title}</h1></TypoGraphy>
                            {this.props.description ? <p className="intro">{this.props.description}</p> : null}
                        </div>
                    </a>
                    <TeaserRelated
                        items={this.props.related}
                    />
                    {this.props.hideFooter ? null : <TeaserFooter
                        baseUrl={this.props.baseUrl}
                        comments={this.props.comments}
                        date={this.props.date}
                        description={this.props.description}
                        shareTitle={this.props.shareTitle}
                        subject={this.props.subject}
                        teaserId={this.props.id}
                        title={this.props.title}
                        url={this.props.url}
                    />}
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-opening-teaser {
    font-family: 'ProximaNovaRegular', Helvetica, sans-serif;

    .meta,
    .text-container {
        padding: 0 10px;
        @media only screen and (min-width: 641px) {
            padding: 0 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 0 15px;
        }
    }

    > a {
        width: 100%;
        color: #191919;
        display: inline-block;
        text-decoration: none;
        &:hover h1 {
            color: #49a4a2;
        }

        h1 {
            margin: 0;
        }

        figure {
            width: auto;
            margin: 0;
            margin-bottom: .625rem;
            @media only screen and (min-width: 641px) {
                margin-bottom: 1rem;
            }
            float: none;
            img {
                display: block;
                width: 100%;
            }
        }

        > .meta {
            font-family: 'ProximaNovaRegular',sans-serif;
            line-height: 1.2em;
            color: #677381;
            position: static;
            font-size: 0.8125rem;
            @media only screen and (min-width: 641px) {
                font-size: 0.875rem;
            }
            display: flex;
            justify-content: space-between;
            overflow: hidden;
            margin: 0 0 .5rem 0;
        }

        .text-container {
            margin-bottom: .5rem;
            p {
                margin: .2rem 0 .5rem 0;
                font-size: 1rem;
                @media only screen and (min-width: 641px) {
                    font-size: 1.0625rem;
                }
            }
        }
    }
    &.longread a:hover h1 {
        color: #f05031;
    }
}
`;

/**
 * Used for the FD Style Guide Kitchensink
 */
export const OpeningTeaserStyle = createGlobalStyle`
${getAllCardStyles().globalStyle.rules}
${getAllTextStyles(['opening-teaser-h']).globalStyle.rules}
${(UpdateLabelStyle as any).globalStyle.rules}
${(TeaserFigureStyle as any).globalStyle.rules}
${(TeaserRelatedStyle as any).globalStyle.rules}
${(TeaserFooterStyle as any).globalStyle.rules}
${(GlobalStyle as any).globalStyle.rules}
`;
