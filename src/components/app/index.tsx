import React from 'react';
import style from './index.module.scss'
import log from 'loglevel';
import  { Breakpoint, BreakpointProvider } from 'react-socks';

import Main from '../../pages/main';

log.setLevel('warn');

interface Props {}
export default class Component extends React.Component<Props> {
    constructor(props: Props) {
        log.info('App:constructor reached');
        super(props);
    }

    render() {
        log.info('App:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.background].join(' ')}>
                </div>
                <div className={[style.container].join(' ')}>
                    <Main />
                </div>
            </div>
        )
    }
}



