import { Form, Button, Image, Table, Input, Modal, Radio, Select } from 'antd';
import { useState } from 'react';
import originData from './data.json'

const Directory = () => {
  const [editModalForm] = Form.useForm();
  const [data, setData] = useState(originData);
  const columns = [
    {
      title: 'Profile Image',
      dataIndex: 'avatar',
      // width: '10%',
      render: (url, _) => <img src={`${url}`} />
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      width: '15%',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      width: '15%',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '10%',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '10%',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      width: '10%',
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: 'Organization',
      dataIndex: 'organization',
      width: '10%',
      sorter: (a, b) => a.organization.localeCompare(b.organization),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: '10%',
      sorter: (a, b) => a.department.localeCompare(b.department),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '10%',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{margin: "20px auto", padding: "0 20px"}}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 680,
        }}
        initialValues={{
          searchBy: 'userName'
        }}
        onFinish={async (val) => {
          if (!val.keyword) {
            await setData(originData);
            return;
          }
          switch (val.searchBy) {
            case "userName":
              
              setData(originData.filter((row) => (`${row.firstName} ${row.lastName}`).search(val.keyword) > -1))
              break;
            case "jobTitle":
              setData(data.filter((row) => row.title.search(val.keyword) > -1))
              break;
            case "assistant":
              
              break;
            case "building":
              
              break;
          
            default:
              break;
          }
        }}
        onFinishFailed={(val) => console.log(JSON.stringify(val))}
      >
        <Form.Item label="Search Criteria" name="keyword">
          <Input />
        </Form.Item>
        <Form.Item label="Search by" name="searchBy" >
          <Radio.Group>
            <Radio value="userName"> Name </Radio>
            <Radio value="jobTitle"> Job Title </Radio>
            <Radio value="assistant"> Assistant </Radio>
            <Radio value="building"> Building </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Organization" name="organizatio">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Department" name='department'>
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      <Table
        bordered
        dataSource={[...data]}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {onClick: async (event) => {
            let selData = data.filter((row) => row.key === record.key)[0];
            await setUserData(selData);
            editModalForm.setFieldsValue({...selData});
            showModal();
          }}
        }}
      />
      <Modal 
        title="User Profile" 
        footer={null}
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <Form
          // id="myForm"
          form={editModalForm}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 680,
          }}  
          onFinish={async (val) => {
            for (var i = 0; i < data.length; i++) {
              if (data[i].key === userData.key) {
                let tmp = data;
                tmp[i] = {...tmp[i], ...val};
                await setData(tmp);
                break;
              }
            }
            handleOk();
          }}
          onFinishFailed={(val) => console.log(JSON.stringify(val))}
        >
          <Form.Item name="avatar">
            <Image src={userData.avatar} />
          </Form.Item>
          <Form.Item label="First Name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input />
          </Form.Item>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Organization" name="organization">
            <Input />
          </Form.Item>
          <Form.Item label="Department" name="department">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button type="back" onClick={handleCancel} style={{marginLeft: 40}}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Directory;