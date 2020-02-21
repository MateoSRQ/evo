import React from 'react';
import style from './index.module.css'
import log from 'loglevel';

import 'antd/dist/antd.css';
import {Col, Icon, Radio, Row, Select, Table, TreeSelect} from 'antd';
import { Switch } from 'antd';
import { Carousel } from 'antd';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

log.setLevel('warn');

const { SHOW_PARENT } = TreeSelect;
const { Option } = Select;


interface ItemProps {
}

interface Props {
    data?: any
}

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];
const data2 = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];

export default class Component extends React.Component<Props> {

    protected tProps: any

    constructor(props: Props) {
        log.info('Item:constructor reached');
        super(props);
        console.log('ITEM')
        console.log(this.props)
        this.tProps  = {
            treeData: this.props.data.tree,
            style: { width: '100%' },
            dropdownStyle: { maxHeight: 400, overflow: 'auto' },
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: 'Seleccionar prestaciones...',
            maxTagCount: 10,
        };
    }

    render() {
        log.info('Item:render reached');
        return (
            <div className={[style.component].join(' ')} >
                <div className={[style.well].join(' ')}>
                    <Row className={[style.carousel].join(' ')}>
                        <Col span={24}>
                            <Carousel >
                                <div className={[style.slide].join(' ')}>
                                    <BarChart
                                        width={682}
                                        height={250}
                                        data={data}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 55,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                </div>
                                <div className={[style.slide].join(' ')}>
                                    <BarChart
                                        width={682}
                                        height={250}
                                        data={data2}
                                        margin={{
                                            top: 20, right: 30, left: 20, bottom: 55,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                                    </BarChart>
                                </div>
                                <div className={[style.slide].join(' ')}>
                                    <BarChart
                                        width={682}
                                        height={250}
                                        data={data}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 55,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                </div>
                                <div className={[style.slide].join(' ')}>
                                    <BarChart
                                        width={682}
                                        height={250}
                                        data={data2}
                                        margin={{
                                            top: 20, right: 30, left: 20, bottom: 55,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                                    </BarChart>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18}>
                            <TreeSelect {...this.tProps} showSearch/>
                        </Col>
                        <Col span={6} className={[style.switch].join(' ')}>
                            Estado:    <Switch size="small"  />
                        </Col>
                    </Row>
                    <Row style={{marginTop: '10px'}}>
                        <Col span={12}>
                            <Radio.Group defaultValue="a" buttonStyle="solid" >
                                <Radio.Button value="a">N/D</Radio.Button>
                                <Radio.Button value="b">Hombre</Radio.Button>
                                <Radio.Button value="c">Mujer</Radio.Button>
                            </Radio.Group>
                        </Col>
                        <Col span={12}>
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Seleccione empresa..."
                                optionFilterProp="children"
                                // onChange={onChange}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                            >
                                <Option value="jack">Telefónica del Perú S.A.A.</Option>
                                <Option value="lucy">Banco de Comercio del Perú</Option>
                                <Option value="tom">Southern Cooper Corporation</Option>
                            </Select>,
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}



