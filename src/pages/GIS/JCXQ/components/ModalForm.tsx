import React, { Fragment } from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { TableListItem1 } from '@/pages/GIS/JCXQ/data';

export interface FormValsType extends Partial<TableListItem1> {
  cztime?: string;
}

export interface ModalFormProps extends FormComponentProps {
  handleUpdateModalVisible: (flag?: boolean, formVals?: FormValsType) => void;
  handleUpdate: (values: FormValsType) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem1>;
}

class ModalForm extends React.Component {
  constructor(props: ModalFormProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {onChange, value} = this.props; // 有默认传来的 chang事件，和 value值
    const { getFieldProps, name } = this.props;
    return (
      <Modal title="设置" visible={this.state.modalVisible} footer={null}>
        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Item>
            <InputNumber name="value" defaultValue={record.value}/>
            <Button htmlType="submit" type="primary">
              修改
            </Button>
          </Form.Item>
          <Form.Item>
            <Input name="code" value={record.code} type="hidden"/>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create<ModalFormProps>()(ModalForm);
