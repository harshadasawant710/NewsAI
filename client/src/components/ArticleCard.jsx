import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Card, Image, Text, Group, Button, Badge, ActionIcon, Modal } from '@mantine/core';
import { Bookmark, SparklesIcon } from 'lucide-react';
import axios from 'axios';
import { motion } from "motion/react"

const ArticleCard = ({ article }) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [isLoading, setIsLoading] = useState(false);
    const [summary, setSummary] = useState('');
    const [error, setError] = useState();

    const handleSummarize = async () => {
        open();
        setIsLoading(true)
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/summarize`, {
                url: article.url
            }
            );
            setIsLoading(false)
            setSummary(res.data.summary)
        }
        catch (error) {
            setError(error.message)
            setIsLoading(false)
        }


    };

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ textAlign: 'center', width: '800px', margin: 'auto', justifyContent: 'center', alignItems: 'left' }}>
            {article.urlToImage && (
                <Image
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ width: '600px', height: '450px', margin: '0 auto' }}
                    fit="cover"
                    radius="md"
                />
            )}
            {article.category && (
                <Badge color="blue" variant="filled" size="lg" style={{ alignSelf: 'center', marginBottom: '10px' }}>
                    {article.category}
                </Badge>
            )}
            <div style={{ textAlign: 'center' }} mt="md" mb="xs">
                <Text weight={500} size="lg" lineClamp={2}>{article.title}</Text>
                <Text size="xs" color="dimmed">{new Date(article.publishedAt).toLocaleDateString()}</Text>
            </div>

            <Text size="sm" color="dimmed" lineClamp={3}>{article.description}</Text>

            <Group position="center" mt="md">
                <Text size="xs" color="gray">Source: {article.source.name}</Text>
                <Button component="a" href={article.url} target="_blank" variant="light" color="blue" radius="md">
                    Read More
                </Button>
                <ActionIcon variant='outline' size='md' color='blue'>
                    <Bookmark size={18} />
                </ActionIcon>
                <ActionIcon onClick={handleSummarize} variant='gradient' size='md' gradient={{ from: 'blue', to: 'cyan', deg: 330 }}>
                    <SparklesIcon size={18} />
                </ActionIcon>
            </Group>
            <Modal opened={opened} onClose={close} title="Summary">
                {isLoading ? (
                    <div className='h-full flex justify-center gap-6 items-center'>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: 360 }} transition={{repeat:Infinity,delay:1}}>
                            <SparklesIcon size={20} className='animate-pulse text-sky-500' />
                        </motion.span>
                        <motion.span className='text-black' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{repeat:Infinity,duration:.5,delay:1}}>
                            Generating...
                        </motion.span>
                    </div>
                ) : (
                    <div>
                        {summary.split(' ').map((word, index) => (
                            <motion.span key={index} className='text-black' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * .05 }}>
                                {word}{' '}
                            </motion.span>
                        ))}
                    </div>
                )}
            </Modal>

        </Card>
    );
};

export default ArticleCard;
