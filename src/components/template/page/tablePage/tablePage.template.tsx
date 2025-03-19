/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootConfig_Style } from '@configs/styles/rootConfig.style';
import { Card, Col, Modal, Row, Table, TableProps } from 'antd';
import React from 'react';
import RowTitle_Template from '../rowTitle.template';

export type TableOption = {
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
  loading?: boolean;
  rowSelectionType?: 'checkbox' | 'radio';
};

type Props = {
  style?: React.CSSProperties;
  title: React.ReactNode;
  table: TableOption;
  groupHeader?: React.ReactNode;
  tableColumn: object[];
  tableDataSource: object[];
  groupFooter?: React.ReactNode;
  onChange?: TableProps<any>['onChange'];
  cb_onRowClick?: (record: any, index: number) => void;
  cb_onRowDoubleClick?: (record: any, index: number) => void;
  cb_rowSelection_onChange?: (data: any) => void;
};

export default function TablePage_Template(props: Props) {
  const {
    style,
    title,
    groupHeader,
    tableColumn,
    tableDataSource,
    groupFooter,
    table,
    onChange,
    cb_onRowClick,
    cb_onRowDoubleClick,
    cb_rowSelection_onChange,
  } = props;

  const rowSelection = {
    onChange: (_selectedRowKeys: React.Key[], selectedRows: any[]) => {
      cb_rowSelection_onChange && cb_rowSelection_onChange(selectedRows);
    },
    getCheckboxProps: () => ({}),
  };

  return (
    <>
      <Row
        style={{ paddingLeft: 3, paddingRight: 3, paddingBottom: 100 }}
        justify={'center'}
      >
        <Col span={24} style={style && style}>
          <Row justify={'center'}>
            <Col
              span={24}
              style={{
                marginTop: rootConfig_Style.margin.top.form.form,
              }}
            >
              <Card style={{}}>
                <Row
                  style={{
                    marginLeft: rootConfig_Style.margin.left.form.card,
                    marginRight: rootConfig_Style.margin.right.form.card,
                  }}
                >
                  <Col span={24} style={{ position: 'sticky', top: 0 }}>
                    <RowTitle_Template title={title} />
                  </Col>
                  {groupHeader && (
                    <Col span={24} style={{ marginBottom: 10 }}>
                      {groupHeader}
                    </Col>
                  )}

                  <Col span={24}>
                    <Table
                      rowKey={(record: any) => record.id}
                      style={{ width: '100%' }}
                      sticky={true}
                      bordered={table.bordered}
                      size={table.size}
                      scroll={{ x: 800 }}
                      loading={table.loading}
                      onChange={onChange}
                      pagination={{
                        size: 'small',
                        pageSizeOptions: ['50', '100'],
                        showSizeChanger: true,
                        pageSize: 50,
                      }}
                      columns={tableColumn}
                      dataSource={tableDataSource}
                      rowSelection={
                        table.rowSelectionType && {
                          type: table.rowSelectionType,
                          ...rowSelection,
                        }
                      }
                      onRow={(_record, index) => ({
                        onClick: () => {
                          index !== undefined &&
                            cb_onRowClick &&
                            cb_onRowClick(_record, index);
                        },
                        onDoubleClick: () => {
                          index !== undefined &&
                            cb_onRowDoubleClick &&
                            cb_onRowDoubleClick(_record, index);
                        },
                      })}
                    />
                  </Col>
                  <Col span={24}>{groupFooter}</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal></Modal>
    </>
  );
}
