import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Scrollbars } from 'react-custom-scrollbars';

import { Collapse, Icon } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Tabs, Button } from 'antd';
import { Divider } from 'antd';
import {
    CollapsibleComponent,
    CollapsibleHead,
    CollapsibleContent
} from "react-collapsible-component";
import { TreeSelect } from 'antd';

import 'antd/dist/antd.css';


const { Panel } = Collapse;
const ButtonGroup = Button.Group;
const { TabPane } = Tabs;


const { SHOW_PARENT } = TreeSelect;

interface State {
}

interface Props {
    key: string
}
export default class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        log.info('Template:constructor reached');
        super(props);
    }


    render() {
        log.info('Template:render reached');
        const treeData = [
            {
                title: 'Node1',
                value: '0-0',
                key: '0-0',
                children: [
                    {
                        title: 'Child Node1',
                        value: '0-0-0',
                        key: '0-0-0',
                    },
                ],
            },
            {
                title: 'Node2',
                value: '0-1',
                key: '0-1',
                children: [
                    {
                        title: 'Child Node3',
                        value: '0-1-0',
                        key: '0-1-0',
                    },
                    {
                        title: 'Child Node4',
                        value: '0-1-1',
                        key: '0-1-1',
                    },
                    {
                        title: 'Child Node5',
                        value: '0-1-2',
                        key: '0-1-2',
                    },
                ],
            },
            {
                title: 'Node3',
                value: '0-2',
                key: '0-2',
                children: [
                    {
                        title: 'Child Node3',
                        value: '0-2-0',
                        key: '0-2-0',
                    },
                    {
                        title: 'Child Node4',
                        value: '0-2-1',
                        key: '0-2-1',
                    },
                    {
                        title: 'Child Node5',
                        value: '0-2-2',
                        key: '0-2-2',
                    },
                ],
            },
            {
                title: 'Node4',
                value: '0-3',
                key: '0-3',
                children: [
                    {
                        title: 'Child Node3',
                        value: '0-3-0',
                        key: '0-3-0',
                    },
                    {
                        title: 'Child Node4',
                        value: '0-3-1',
                        key: '0-3-1',
                    },
                    {
                        title: 'Child Node5',
                        value: '0-3-2',
                        key: '0-3-2',
                    },
                ],
            },

        ];
        const tProps = {
            treeData,
            // value: this.state.value,
            // onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: 'Please select',
            maxTagCount: 3,
            style: {
                width: '100%',
            },
        };
        return (

            <div className={[style.component].join(' ')} key={this.props.key}>
                <Card className={[style.card].join(' ')}>
                    <Row>
                        <Col span={18}>
                            <div className={[style.prefix].join(' ')}>SEDE</div>
                            <div className={[style.title].join(' ')}>Title of Item</div>
                            <div className={[style.subTitle].join(' ')}>This is a brief description</div>
                        </Col>
                        <Col span={6}>
                        </Col>
                    </Row>
                    <CollapsibleComponent>
                        <CollapsibleContent className={[style.collapsible].join(' ')}>
                            <Divider />
                            <Tabs type="card" size="small" className={[style.tabs].join(' ')}>
                                <TabPane tab="Visual" key="1">
                                    <div className={[style.panel].join(' ')}>
                                        <TreeSelect {...tProps} />
                                    </div>
                                </TabPane>
                                <TabPane tab="Laboratorio" key="2">
                                    <div className={[style.panel].join(' ')}>
                                        Visual
                                    </div>
                                </TabPane>
                                <TabPane tab="Electrocardigrama" key="3">
                                    <div className={[style.panel].join(' ')}>
                                        Visual
                                    </div>
                                </TabPane>
                                <TabPane tab="Consultorio" key="4">
                                    <div className={[style.panel].join(' ')}>
                                        Visual
                                    </div>
                                </TabPane>
                                <TabPane tab="Psicología" key="5">
                                    <div className={[style.panel].join(' ')}>
                                        Visual
                                    </div>
                                </TabPane>
                                <TabPane tab="Administrativo" key="6">
                                    <div className={[style.panel].join(' ')}>
                                        Visual
                                    </div>
                                </TabPane>
                            </Tabs>


                            {/*<Row>*/}
                            {/*    <Col span={8} className={[style.buttonHolder].join(' ')}>*/}
                            {/*        <Button className={[style.button].join(' ')} block size={'small'}>L</Button>*/}
                            {/*    </Col>*/}
                            {/*    <Col span={8} className={[style.buttonHolder].join(' ')}>*/}
                            {/*        <Button className={[style.button].join(' ')} block size={'small'}>L</Button>*/}
                            {/*    </Col>*/}
                            {/*    <Col span={8} className={[style.buttonHolder].join(' ')}>*/}
                            {/*        <Button className={[style.button].join(' ')} block size={'small'}>L</Button>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                        </CollapsibleContent>
                        <CollapsibleHead
                            isExpanded={true}
                            showContentAboveButton={true}
                            className={[style.centered].join(' ')}
                        >
                            <Icon type="ellipsis" style={{color: 'black'}}/>
                        </CollapsibleHead>
                    </CollapsibleComponent>
                    {/*<Collapse*/}
                    {/*    bordered={false}*/}
                    {/*    expandIcon={({ isActive }) => <Icon type="caret-down" rotate={isActive ? 180 : 0} />}*/}
                    {/*>*/}
                    {/*    <Panel header="" key="1">*/}
                    {/*        <p>xxxx</p>*/}
                    {/*    </Panel>*/}
                    {/*</Collapse>*/}
                </Card>
            </div>
        );
    }
}



