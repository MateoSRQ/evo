import React from 'react';
import style from './index.module.css'
import log from 'loglevel';

import 'antd/dist/antd.css';
import { Button, Form } from 'antd';
import { Spin, Icon } from 'antd';

log.setLevel('warn');

interface Props {
    children?: any,
    spin?: any
}
export default class Component extends React.Component<Props> {
    constructor(props: Props) {
        log.info('Loader:constructor reached');
        super(props);

    }

    render() {
        log.info('Loader:render reached');
        let spin =  <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />;
        if (this.props.spin) {
            spin = this.props.spin;
        }

        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.container].join(' ')}>
                    {this.props.children}
                </div>
                <div className={[style.loader].join(' ')}>
                    {spin}
                </div>
            </div>
        );
    }
}



