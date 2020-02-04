import React from 'react';
import style from './index.module.css'
import log from 'loglevel';


import Main from '../../pages/main'

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
                <Main />
            </div>
        );
    }
}



