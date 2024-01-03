// Login.tsx
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { loginAsync } from 'store/slices/authSlice';
import { loginValues } from 'types/types';
import { useAppDispatch } from 'store/hook';



const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: loginValues) => {
        try {
            setLoading(true);
            await dispatch(loginAsync({ username: values.username, password: values.password }));
            message.success('Login successful');
        } catch (error) {
            message.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form name="login" onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please enter your username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Log in
                </Button>

            </Form.Item>
        </Form>
    );
};

export default Login;
