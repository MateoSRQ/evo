import React from 'react';
import style from './index.module.css'
import log from 'loglevel';

import 'antd/dist/antd.css';
import {Col, Radio, Row, Select, Table, TreeSelect} from 'antd';
import { Switch } from 'antd';

log.setLevel('warn');

const { SHOW_PARENT } = TreeSelect;
const { Option } = Select;


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Accion',
        dataIndex: 'address',
        render: (age: any) => {
            return <Switch size="small" defaultChecked />
        }

    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

interface ItemProps {
}

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


class Item extends React.Component<ItemProps> {
    constructor(props: ItemProps) {
        log.info('Item:constructor reached');
        super(props);
    }

    render() {
        log.info('Item:render reached');
        return (
            <div className={[style.component].join(' ')} >
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
            </div>
        );
    }
}

interface Props {
}


export default class Component extends React.Component<Props> {
    constructor(props: Props) {
        log.info('Item:constructor reached');
        super(props);
    }

    render() {
        log.info('Item:render reached');
        return (
            <div className={[style.component].join(' ')}>
                <Table
                    columns={columns}
                    dataSource={data}
                    expandedRowRender={record => <Item />}
                    size="small"
                />
            </div>
        );
    }
}



