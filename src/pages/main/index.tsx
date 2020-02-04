import React from 'react';
import style from './index.module.css'
import log from 'loglevel';
import MediaQuery from 'react-responsive'

log.setLevel('warn');

interface Props {}
export default class Component extends React.Component<Props> {
    constructor(props: Props) {
        log.info('Main:constructor reached');
        super(props);
    }
    render() {
        log.info('Main:render reached');

        return (
	        <div className={[style.component].join(' ')}>
		        <MediaQuery minWidth={1440} >
		            <div className={[style.left].join(' ')}></div>
                </MediaQuery>
                <div className={[style.center].join(' ')}></div>
                <MediaQuery minWidth={1440} >
                    <div className={[style.right].join(' ')}></div>
                </MediaQuery>
            </div>
        );
    }
}



