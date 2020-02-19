import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import { Scrollbars } from 'react-custom-scrollbars';

import 'antd/dist/antd.css';

log.setLevel('warn');

interface Props {
    item: any,
    children?: any
}

export default class Component extends React.Component<Props> {
    constructor(props: Props) {
        log.info('List:constructor reached');
        super(props);
        console.log(typeof props.item);
    }

    render() {
        log.info('List:render reached');
        let children = null;
        if (this.props?.children) {
            children = this.props?.children.map((child: any) => {
                return (
                    <this.props.item {...child.props} />
                )
            })
        }

        return (
            <Scrollbars className={[style.component].join(' ')}>
                <div className={[style.scroller].join(' ')}>
                    {children}
                </div>
            </Scrollbars>
        );
    }
}



