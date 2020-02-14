import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Scrollbars } from 'react-custom-scrollbars';
import {Breadcrumb, Icon, Spin} from 'antd';

import 'antd/dist/antd.css';
import List from '../../components/list';
import ListItem from './listitem';
import Loader from '../../components/loader';

interface State {
}

interface Props {}
export default class Component extends React.Component<Props, State> {
    constructor(props: Props) {
        log.info('Template:constructor reached');
        super(props);
    }

    render() {
        log.info('Template:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <div className={[style.breadcrumb].join(' ')}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={[style.title].join(' ')}>Example Title of Template </div>
                <div className={[style.body].join(' ')}>
                    <Loader
                        loading={<Spin indicator={<Icon type="loading" style={{ fontSize: 40 }} spin />} />}
                        error={<Icon type="exclamation-circle" style={{ fontSize: 40, color: '#b60005' }} />}
                    >
                        <List item={ListItem}>
                            <div key="1" />
                            <div key="2" />
                            <div key="3" />
                        </List>
                    </Loader>

                </div>
            </div>
        );
    }
}



