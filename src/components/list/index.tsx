import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Scrollbars } from 'react-custom-scrollbars';

import 'antd/dist/antd.css';

log.setLevel('warn');

interface Props {
    item: any
    children?: any
    data?: any
}

interface State {
    data: any
}

export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('List:constructor reached');
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps != this.props) {
            this.setState({data: this.props.data})
        }
    }

    render() {
        log.info('List:render reached');
        let children = null;
        if (this.props?.children && this.state.data) {
            children = this.props?.children.map((child: any, index: number) => {
                return (
                    <this.props.item
                        {...child.props}
                        key={index}
                        data={this.state.data}
                    />
                )
            })
        }

        console.log('CHILDREN')
        console.log(children)

        return (
            <Scrollbars className={[style.component].join(' ')}>
                <div className={[style.scroller].join(' ')}>
                    {children}
                </div>
            </Scrollbars>
        );
    }
}



