import React, { useEffect } from 'react'
import { useRootExports } from 'umi'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { ILoginDTO } from "@/typings/interface"

import styles from './index.less'

export default () => {
  useEffect(() => {
    localStorage.clear()
  }, [])

  const { history } = useRootExports().default
  const onFinish = (values: ILoginDTO) => {
    localStorage.setItem('profile', JSON.stringify(values))
    history.push('/home')
  }
  return (
    <main className={styles.account}>
      <h1 className={styles.title}>监控系统 - 登入</h1>
      <Form initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="principal"
          rules={[{ required: true, message: '必填' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名"/>
        </Form.Item>

        <Form.Item
          name="credential"
          rules={[{ required: true, message: '必填' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="密码" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>自动登录</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登 录
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
