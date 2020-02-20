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
    _id: string
    nombre: string
    descripcion: string
    nodos: any
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

        let tabs:any[] = [];
        for (let nodo in this.props.nodos) {
            tabs.push(nodo);
        }

        tabs = tabs.map((tab, index) => {
            let panels = this.props.nodos[tab].map((panel:any, index: number) => {
                return (
                    <Collapse
                        bordered={false}
                        //defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                    >
                        <Panel header={panel.codigo} key={index.toString()}>
                        <div className={[style.well].join(' ')}>
                            <Row>
                                <Col span={24}>
                                    <TreeSelect {...tProps} />
                                </Col>
                            </Row>
                            <Row style={{marginTop: '10px'}}>
                                <Col span={12}>
                                    <Radio.Group defaultValue="a" buttonStyle="solid">
                                        <Radio.Button value="a">N/D</Radio.Button>
                                        <Radio.Button value="b">Hombre</Radio.Button>
                                        <Radio.Button value="c">Mujer</Radio.Button>
                                    </Radio.Group>
                                </Col>
                                <Col span={12}>
                                    <Select
                                        showSearch
                                        style={{width: 200}}
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
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    </Panel>
                    </Collapse>
                )
            });
            console.log(panels);
            return (
                <TabPane tab={tab} key={index.toString()}>
                    <div className={[style.panel].join(' ')}>
                        {panels}
                    </div>
                </TabPane>
            )
        })

        return (
            <div className={[style.component].join(' ')} key={this.props._id}>
                <Card className={[style.card].join(' ')}>
                    <Row>
                        <Col span={18}>
                            <div className={[style.prefix].join(' ')}>{this.props._id}</div>
                            <div className={[style.title].join(' ')}>{this.props.nombre}</div>
                            <div className={[style.subTitle].join(' ')}>{this.props.descripcion}</div>
                        </Col>
                        <Col span={6}>
                        </Col>
                    </Row>
                    <CollapsibleComponent  name={this.props._id}>
                        <CollapsibleContent className={[style.collapsible].join(' ')}>
                            <Divider />
                            <Tabs type="card" className={[style.tabs].join(' ')}>
                                {tabs}
                            </Tabs>
                        </CollapsibleContent>
                        <CollapsibleHead
                            isExpanded={false}
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


{/*<Collapse*/}
{/*    bordered={false}*/}
{/*    defaultActiveKey={['1']}*/}
{/*    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}*/}
{/*>*/}
{/*    <Panel header="Visual 1" key="1">*/}
{/*        <div className={[style.well].join(' ')}>*/}
{/*            <Row>*/}
{/*                <Col span={24}>*/}
{/*                    <TreeSelect {...tProps} />*/}
{/*                </Col>*/}
{/*            </Row>*/}
{/*            <Row style={{marginTop: '10px'}}>*/}
{/*                <Col span={12}>*/}
{/*                    <Radio.Group defaultValue="a" buttonStyle="solid" >*/}
{/*                        <Radio.Button value="a">Cualquiera</Radio.Button>*/}
{/*                        <Radio.Button value="b">Hombre</Radio.Button>*/}
{/*                        <Radio.Button value="c">Mujer</Radio.Button>*/}
{/*                    </Radio.Group>*/}
{/*                </Col>*/}
{/*                <Col span={12}>*/}
{/*                    <Select*/}
{/*                        showSearch*/}
{/*                        style={{ width: 200 }}*/}
{/*                        placeholder="Select a person"*/}
{/*                        optionFilterProp="children"*/}
{/*                        // onChange={onChange}*/}
{/*                        // onFocus={onFocus}*/}
{/*                        // onBlur={onBlur}*/}
{/*                        // onSearch={onSearch}*/}
{/*                        // filterOption={(input, option) =>*/}
{/*                        //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0*/}
{/*                        // }*/}
{/*                    >*/}
{/*                        <Option value="jack">Jack</Option>*/}
{/*                        <Option value="lucy">Lucy</Option>*/}
{/*                        <Option value="tom">Tom</Option>*/}
{/*                    </Select>,*/}
{/*                </Col>*/}
{/*            </Row>*/}
{/*        </div>*/}
{/*    </Panel>*/}
{/*    <Panel header="Visual 2" key="2">*/}
{/*        <div className={[style.well].join(' ')}>*/}
{/*            <TreeSelect {...tProps} />*/}
{/*        </div>*/}
{/*    </Panel>*/}
{/*    <Panel header="Visual 3" key="3">*/}
{/*        <div className={[style.well].join(' ')}>*/}
{/*            <TreeSelect {...tProps} />*/}
{/*        </div>*/}
{/*    </Panel>*/}
{/*</Collapse>*/}
