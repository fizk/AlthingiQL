import {graphql, compose, ChildDataProps} from 'react-apollo';
import gql from 'graphql-tag';
import AssemblyCongressmen from './AssemblyCongressmen';
import {Congressman as CongressmanType} from "../../../../@types";

const assemblyCongressmanQuery = gql`
    query ($assembly: Int!) {
        Congressmen(assembly: $assembly type: "thingmadur") {
            id
            name
            avatar {templateSrc}
            assembly {
                id
            }
            party {
                id
                name
                color
            }
        }
        Substitutes: Congressmen(assembly: $assembly type: "varamadur") {
            id
            name
            avatar {templateSrc}
            assembly {
                id
            }
            party {
                id
                name
                color
            }
        }
    }
`;

type Response = {
    Congressmen: CongressmanType[];
    Substitutes: CongressmanType[];
};

type InputProps = {
    assembly: number
};

type Variables = {
    assembly: number,
};

interface Props {
    // loading?: any;
    // error?: any;
    congressmen: CongressmanType[];
    substitutes: CongressmanType[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyCongressmanQuery, {
        props: ({data: {loading, Congressmen, Substitutes}}: any) => ({
            congressmen: loading === false ? Congressmen : undefined,
            substitutes: loading === false ? Substitutes : undefined,
            loading: loading,
        }),
        options: ({assembly}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyCongressmen);
