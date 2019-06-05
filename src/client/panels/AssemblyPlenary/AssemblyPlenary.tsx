import * as React from 'react';
import {PlenaryItem as PlenaryItemType} from '../../../../@types';
import Section from '../../elements/Section';
import {PlenaryItem} from '../../elements/IssueBadge';
import Congressman from '../../elements/Congressman';
import './index.scss';

interface Props {
    assembly: number;
    plenary: number;
    plenaryItems: PlenaryItemType[];
}

export default class AssemblyPlenary extends React.Component<Props, {}> {
    public static defaultProps = {
        plenaryItems: [],
    };

    public render() {
        return (
            <Section>
                THINGFUNDUR {this.props.plenary}
                <ul>
                    {this.props.plenaryItems.map(item => (
                        <li key={item.id}>
                            {item.category === 'A' && (
                                <PlenaryItem issue={item.issue}>
                                    <p>
                                        {item.iterationComment} - {item.comment},
                                        {item.commentType}, {item.iterationType}
                                    </p>
                                    <ul>
                                    {item.instigatorCongressman && (
                                        <li>
                                            <h4>Málshefjandi</h4>
                                            <Congressman congressman={item.instigatorCongressman}/>
                                        </li>
                                    )}
                                    {item.posedCongressman && (
                                        <li>
                                            <h4>Posted</h4>
                                            <Congressman congressman={item.posedCongressman}/>
                                        </li>
                                    )}
                                    {item.answererCongressman && (
                                        <li>
                                            <h4>Til svara</h4>
                                            <Congressman congressman={item.answererCongressman}>
                                                {item.answerer}
                                            </Congressman>
                                        </li>
                                    )}
                                    {item.counterAnswererCongressman && (
                                        <li>
                                            <h4>Andsvar</h4>
                                            <Congressman congressman={item.counterAnswererCongressman}/>
                                        </li>
                                    )}
                                    </ul>
                                </PlenaryItem>
                            )}
                            {item.category === 'B' && (
                                <div>
                                    {item.issue.name}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </Section>
        );
    }
}
