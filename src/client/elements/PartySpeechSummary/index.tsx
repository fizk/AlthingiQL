import React, {FunctionComponent} from 'react';
import Badge from '../Badge';
import {Party as PartyType} from '../../../../@types';
import './index.scss';
import {Link} from "react-router-dom";

interface Props {
    parties: Array<{
        party: PartyType;
        time?: number;
    }>;
    assembly: number;
}

const secToHour = (sec = 0) => {
    const hours = Math.floor(sec / 3600);
    const totalSeconds = sec % 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes}`
};

const PartySpeechSummary: FunctionComponent<Props> = ({children, assembly, parties}) => (
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
                    <td className="party-speech-summary__time">{secToHour(obj.time)}</td>
                    <td className="party-speech-summary__badge">
                        <Badge color={obj.party.color}
                            title={obj.party.name}
                            variations={['sm']}
                        />
                    </td>
                    <td className="party-speech-summary__title">
                        <Link to={`/loggjafarthing/${assembly}/thingflokkar/${obj.party.id}`}>{obj.party.name}</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default PartySpeechSummary;
