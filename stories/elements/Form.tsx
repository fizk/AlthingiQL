import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Input, Search, Options, OptionsItem, Select, SelectWithKeyBinding} from '../../src/client/elements/Form';
import {H3} from '../../src/client/elements/Headline';

// const Exapmple = ((Component) => {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 values: []
//             };
//
//             this.handleFillState = this.handleFillState.bind(this);
//         }
//
//         handleFillState() {
//             this.setState({
//                 values: [1,2,3,4,5]
//             })
//         }
//
//         render() {
//             return (
//                 <Component onFocus={this.handleFillState} onSelect={action('onSelect')}>
//                     {this.state.values.map(item => (
//                         <OptionsItem key={`item-${item}`}>
//                             <p>{item}</p>
//                         </OptionsItem>
//                     ))}
//                 </Component>
//             )
//         }
//     }
// })(SelectWithKeyBinding);

storiesOf('Form', module)
    .add('input', () => (
        <div>
            <div style={{padding: '20px 0'}}>
                <H3>sm</H3>
                <Input variations={['sm']} placeholder="This is a placeholder text" />
                <span> </span>
                <Input variations={['sm', 'border-less']} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>md</H3>
                <Input variations={['md']} placeholder="This is a placeholder text" />
                <span> </span>
                <Input variations={['md', 'border-less']} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>lg</H3>
                <Input variations={['lg']} placeholder="This is a placeholder text" />
                <span> </span>
                <Input variations={['lg', 'border-less']} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>xl</H3>
                <Input variations={['xl']} placeholder="This is a placeholder text" />
                <span> </span>
                <Input variations={['xl', 'border-less']} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>error</H3>
                <Input variations={['md']} isError={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Input variations={['md', 'border-less']} isError={true} placeholder="This is a placeholder text" />
            </div>
        </div>
    ))
    .add('Search', () => (
        <div>
            <div style={{padding: '20px 0'}}>
                <H3>sm</H3>
                <Search variations={['sm']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['sm']} isSearching={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['sm','border-less']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['sm','border-less']} isSearching={true} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>md</H3>
                <Search variations={['md']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['md']} isSearching={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['md', 'border-less']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['md', 'border-less']} isSearching={true} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>lg</H3>
                <Search variations={['lg']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['lg']} isSearching={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['lg', 'border-less']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['lg', 'border-less']} isSearching={true} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>xl</H3>
                <Search variations={['xl']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['xl']} isSearching={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['xl', 'border-less']} isSearching={false} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['xl', 'border-less']} isSearching={true} placeholder="This is a placeholder text" />
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>error</H3>
                <Search variations={['xl']} isSearching={false} isError={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['xl']} isSearching={true} isError={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['xl', 'border-less']} isSearching={false} isError={true} placeholder="This is a placeholder text" />
                <span> </span>
                <Search variations={['xl', 'border-less']} isSearching={true} isError={true} placeholder="This is a placeholder text" />
            </div>
        </div>
    ))
    .add('Options', () => (
        <div style={{display: 'flex'}}>
            <div style={{padding: '20px 0'}}>
                <H3>sm</H3>
                <Options>
                    <OptionsItem>Item 1</OptionsItem>
                    <OptionsItem>Item 2</OptionsItem>
                    <OptionsItem>Item 3</OptionsItem>
                </Options>
            </div>
            <div>
                <p style={{width: '30px'}}></p>
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>sm</H3>
                <Options variations={['border-less']} >
                    <OptionsItem>Item 1</OptionsItem>
                    <OptionsItem>Item 2</OptionsItem>
                    <OptionsItem>Item 3</OptionsItem>
                </Options>
            </div>
        </div>
    ))
    .add('Select', () => (
        <div style={{display: 'flex'}}>
            <div style={{padding: '20px 0'}}>
                <H3>sm</H3>
                <Select onFocus={action('Select click')}>
                    <OptionsItem>Item 1</OptionsItem>
                    <OptionsItem>Item 2</OptionsItem>
                    <OptionsItem>Item 3</OptionsItem>
                </Select>
            </div>
            <div>
                <p style={{width: '30px'}}></p>
            </div>
            <div style={{padding: '20px 0'}}>
                <H3>sm</H3>
                <Select variations={['border-less']} >
                    <OptionsItem>Item 1</OptionsItem>
                    <OptionsItem>Item 2</OptionsItem>
                    <OptionsItem>Item 3</OptionsItem>
                </Select>
            </div>
        </div>
    ))
    // .add('Select with key bindings', () => (
    //     <Exapmple />
    // ))
;
