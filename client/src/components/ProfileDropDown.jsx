import React from 'react'
import { Avatar, Menu, Button, Text } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { signOut } from '../Redux/slice/authSlice';
import { useNavigate } from 'react-router-dom';

const ProfileDropDown = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
        navigate('/login')
    }
    return (
        <div>
            {/* <Avatar color="cyan" radius="xl">MK</Avatar> */}

            <Menu shadow="md" width={150}>
                <Menu.Target>
                    <Avatar radius="xl" />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item >
                        Settings
                    </Menu.Item>
                    <Menu.Item >
                        Messages
                    </Menu.Item>
                    <Menu.Item color="red" onClick={handleSignOut}>
                        Sign Out
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default ProfileDropDown
