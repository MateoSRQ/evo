import React from 'react';
import style from './index.module.css';
import log from 'loglevel';

import { Scrollbars } from 'react-custom-scrollbars';

import {Carousel, Collapse, Icon} from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';
import { Tabs, Button } from 'antd';
import { Divider } from 'antd';
import { Radio } from 'antd';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from "react-collapsible-component";
import { TreeSelect } from 'antd';
import { Select } from 'antd';
import { Switch } from 'antd';

import 'antd/dist/antd.css';

import Item from './item';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
    nodos: any,
    data: any
}



const data = [
    {
        name: '08:00', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: '08:30', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: '09:00', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: '09:30', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: '10:00', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: '10:30', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '11:00', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: '10:30', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '11:00', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: '11:30', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '12:00', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: '12:30', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '13:00', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: '13:30', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '14:00', uv: 3490, pv: 4300, amt: 2100,
    },
];


export default class Component extends React.Component<Props, State> {

    constructor(props: Props) {
        log.info('Template:constructor reached');
        super(props);
    }

    render() {
        log.info('Template:render reached');

        let treeData: any = []
        for (let node in this.props.data) {
            let _node: any =  {}
            _node.title = node;
            _node.value = node;
            _node.key   = node;
            _node.children = []

            for (let leaf of this.props.data[node]) {
                 _node.children.push({
                    title: leaf.nombre,
                    value: leaf.codigo,
                    key: leaf._id
                 })
            }
            treeData.push(_node);
        }

        let tabs:any[] = [];
        for (let nodo in this.props.nodos) {
            tabs.push(nodo);
        }

        console.log('TABS')
        console.log(tabs)

        tabs = tabs.map((tab, index) => {
            let panels = this.props.nodos[tab].map((panel:any, index: number) => {
                return (
                    <Collapse
                        bordered={false}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                    >
                        <Panel
                            header={(
                                <div>
                                    <div className={[style.header].join(' ')}>{panel.codigo}</div>
                                    <ButtonGroup className={[style.group].join(' ')}>
                                        <Button icon="plus-circle" />
                                        <Button icon="minus-circle" />
                                        <Button icon="copy" />
                                    </ButtonGroup>
                                </div>
                            )}
                            key={index.toString()}
                        >
                            <Item data={{tree: treeData}}/>
                        </Panel>
                    </Collapse>
                )
            });

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

                            <Row>
                                <Col span={24}>
                                    <BarChart
                                        width={770}
                                        height={100}
                                        data={data}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 15,
                                        }}
                                    >

                                        <XAxis dataKey="name" style={{fontSize: '8px !important'}}/>
                                        <YAxis hide/>
                                        <Bar dataKey="pv"  stackId="a" fill="#5e4fa2"  />
                                        <Bar dataKey="uv"  stackId="a"  fill="#3288bd" />
                                        <Bar dataKey="amt"   stackId="a" fill="#66c2a5" />
                                    </BarChart>
                                </Col>

                            </Row>

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
