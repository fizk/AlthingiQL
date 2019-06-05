import React, {FunctionComponent} from 'react';
import Badge from '../Badge';
import {Party as PartyType} from '../../../../@types';
import './index.scss';

interface Props {
    parties: Array<{
        party: PartyType,
        time?: number,
    }>;
}

const PartySpeechSummary: FunctionComponent<Props> = ({children, parties}) => (
    <table className="party-speech-summary">
        <caption className="party-speech-summary__caption">
            Ræðutími þingflokka i mínútum
        </caption>
        <thead className="party-speech-summary__head">
            <tr>
                <td>mínútur</td>
                <td>flokkslitur</td>
                <td>flokkur</td>
        </tr>
        </thead>
        <tbody className="party-speech-summary__body">
            {parties.map(obj => (
                <tr key={`party-${obj.party.id}`}>
                    <td className="party-speech-summary__time">{Math.floor((obj.time || 0) / 60)}</td>
                    <td className="party-speech-summary__badge">
                        <Badge color={obj.party.color}
                            title={obj.party.name}
                            variations={['sm']}
                        />
                    </td>
                    <td className="party-speech-summary__title">
                        {obj.party.name}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default PartySpeechSummary;
