import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import MediaQuery from 'react-responsive'
import { Scrollbars } from 'react-custom-scrollbars';
import {Avatar, Icon} from 'antd';


import Menu from '../../components/menu';
import Sidebar from '../master/sidebar';
import Template from '../../pages/template';

interface State {
    bigSize: boolean
}

interface Props {}
export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Main:constructor reached');
        super(props);
        this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this);
        this.state = {
            bigSize: true
        };
    }

    handleMenuClick(): void {
        log.info('Main:handleMenuClick reached');
    }

    handleMediaQueryChange(e: any) {
        log.info('Main:handleMediaQueryChange reached');
        this.setState({
            bigSize: e
        });
    }

    componentDidMount(): void {
        log.info('Main:componentDidMount reached');
    }

    render() {
        log.info('Main:render reached');
        let size = 1400;
        if (!this.state.bigSize) {
            size = 1120;
        }
        return (
            <div className={[style.component].join(' ')}>
                <MediaQuery minWidth={1400} onChange={this.handleMediaQueryChange}>
                    {null}
                </MediaQuery>
                <div className={[style.title].join(' ')}>
                    <img src="/images/logo.png" style={{height: '40px', marginTop: '5px'}}/>
                </div>
                <div className={[style.body].join(' ')} style={{width: size + 'px'}}>
                    <MediaQuery minWidth={1400}>
                        <div className={[style.left].join(' ')}>
                            <div className={[style.idContainer].join(' ')}>
                                <Avatar
                                    size={128}
                                    className={[style.idAvatar].join(' ')}
                                    src="images/face_co.png"
                                />
                                <div className={[style.idName].join(' ')}>James T. Hetfield</div>
                                <div className={[style.idRole].join(' ')}>Administrador</div>
                            </div>
                            <div className={[style.menuContainer].join(' ')}>
                                <Menu />
                            </div>
                        </div>
                    </MediaQuery>
                    <div className={[style.middle].join(' ')}>
                        <Template />
                    </div>
                    <div className={[style.right].join(' ')}>
                        <div className={[style.container].join(' ')}>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



