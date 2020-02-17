import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Scrollbars } from 'react-custom-scrollbars';

import { Collapse, Icon } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Tabs, Button } from 'antd';
import { Divider } from 'antd';
import { Radio } from 'antd';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from "react-collapsible-component";
import { TreeSelect } from 'antd';
import { Select } from 'antd';

import 'antd/dist/antd.css';

import Item from './item';

const { Option } = Select;
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
                            <div className={[style.prefix].join(' ')}>SEDE 00001001</div>
                            <div className={[style.title].join(' ')}>La Victoria</div>
                            <div className={[style.subTitle].join(' ')}>Sede La Victoria, Calle San Blas 312, La Victoria</div>
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
                                        <Collapse
                                            bordered={false}
                                            defaultActiveKey={['1']}
                                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header="Visual 1" key="1">
                                                <div className={[style.well].join(' ')}>
                                                    <Row>
                                                        <Col span={24}>
                                                            <TreeSelect {...tProps} />
                                                        </Col>
                                                    </Row>
                                                    <Row style={{marginTop: '10px'}}>
                                                        <Col span={12}>
                                                            <Radio.Group defaultValue="a" buttonStyle="solid" >
                                                                <Radio.Button value="a">Cualquiera</Radio.Button>
                                                                <Radio.Button value="b">Hombre</Radio.Button>
                                                                <Radio.Button value="c">Mujer</Radio.Button>
                                                            </Radio.Group>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Select
                                                                showSearch
                                                                style={{ width: 200 }}
                                                                placeholder="Select a person"
                                                                optionFilterProp="children"
                                                                // onChange={onChange}
                                                                // onFocus={onFocus}
                                                                // onBlur={onBlur}
                                                                // onSearch={onSearch}
                                                                // filterOption={(input, option) =>
                                                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                // }
                                                            >
                                                                <Option value="jack">Jack</Option>
                                                                <Option value="lucy">Lucy</Option>
                                                                <Option value="tom">Tom</Option>
                                                            </Select>,
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Panel>
                                            <Panel header="Visual 2" key="2">
                                                <div className={[style.well].join(' ')}>
                                                    <TreeSelect {...tProps} />
                                                </div>
                                            </Panel>
                                            <Panel header="Visual 3" key="3">
                                                <div className={[style.well].join(' ')}>
                                                    <TreeSelect {...tProps} />
                                                </div>
                                            </Panel>
                                        </Collapse>
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}
                                        {/*<div className={[style.well].join(' ')}>*/}
                                        {/*    <div className={[style.wellTitle].join(' ')}>*/}
                                        {/*        Visual #1*/}
                                        {/*    </div>*/}
                                        {/*    <TreeSelect {...tProps} />*/}
                                        {/*</div>*/}


                                    </div>
                                </TabPane>
                                <TabPane tab="Laboratorio" key="2">
                                    <div className={[style.panel].join(' ')}>
                                        <Item />
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
                        </CollapsibleContent>
                        <CollapsibleHead
                            isExpanded={true}
                            showContentAboveButton={true}
                            className={[style.centered].join(' ')}
                        >
                            <Icon type="ellipsis" style={{color: 'black'}}/>
                        </CollapsibleHead>
                    </CollapsibleComponent>
                </Card>
            </div>
        );
    }
}



