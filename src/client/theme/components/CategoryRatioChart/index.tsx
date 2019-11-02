import React from 'react';
import {ComponentRenderStatus, SuperCategorySpeechTime} from "../../../../../@types";

interface Props extends ComponentRenderStatus {
    categories: SuperCategorySpeechTime[];
}

export default class CategoryRatioChart extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <td>time</td>
                        <td>title</td>
                    </tr>
                    </thead>
                    <tbody>
                    {!this.props.error && !this.props.loading && this.props.categories.map((category, i) => (
                        <tr key={i}>
                            <td>{category.time}</td>
                            <td>{category.superCategory.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }
}
