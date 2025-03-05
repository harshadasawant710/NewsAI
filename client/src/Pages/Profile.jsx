import { Container, Avatar, Text, Tabs, Button } from '@mantine/core'
import { Bookmark, Bot, Cog, File, Heart, Pin } from 'lucide-react'
import React from 'react'
import { getCookie } from '../utils/utils'

const Profile = () => {
    return (
        <Container className='max-w-2xl mx-auto my-5'>
            <div className='flex justify-left items-center gap-2'>
                <Avatar size='xl' />
                <div>
                    <Text size='xl' fw={500}>{getCookie('name')}</Text>
                    <Text>{getCookie('email')}</Text>
                </div>
            </div>
            <div className='flex justify-left items-center gap-2 my-4'>
                <Button size="compact-md"><Pin size={20} color='orange' />Bookmark:6</Button>
                <Button size="compact-md"><File size={20} color='orange' />Reading History:12</Button>
            </div>

            <Button fullWidth variant='outline' className='px-5 py-1'>Edit Profile</Button>
            <Tabs defaultValue="gallery">
                <Tabs.List>
                    <Tabs.Tab value="Bookmarks" leftSection={<Bookmark size={16} color='orange' />}>
                        Bookmarks
                    </Tabs.Tab>
                    <Tabs.Tab value="LikedNews" leftSection={<Heart size={16} color='red' />}>
                        Liked News
                    </Tabs.Tab>
                    <Tabs.Tab value="preferences" leftSection={<Cog size={16} color='blue' />}>
                        Preferences AI Recommended
                    </Tabs.Tab>
                    <Tabs.Tab value="ai-recommened" leftSection={<Bot size={16} color='green' />}>
                        AI Recommended
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                    AI Recommended
                </Tabs.Panel>

                <Tabs.Panel value="messages">
                    Messages tab content
                </Tabs.Panel>

                <Tabs.Panel value="settings">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>
        </Container>
    )
}

export default Profile
