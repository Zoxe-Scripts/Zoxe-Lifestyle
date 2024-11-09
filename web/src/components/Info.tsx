import React, { useState, useEffect, useRef } from "react";

import { Card, Group, Text, Box, Title, Avatar, ScrollArea, useMantineTheme } from '@mantine/core';

import Icon from '../shared/Icon';
import Cfg from '../shared/Config';
import Lang from '../shared/Lang';

const Info: React.FC<{ visible: boolean, args: any, details: number | null }> = ({ visible, args, details }) => {
    const lang = Lang();
    const theme = useMantineTheme();

    const [BoxedLeft, BoxLeft] = useState('-100vh');

    useEffect(() => {
        if (details !== args.index) {
            setTimeout(() => {
                BoxLeft('-50vh');
            }, 100);
            setTimeout(() => {
                BoxLeft('4vh');
            }, 400);
        }
    }, [details, visible]);

    return (
        <>
            <Box w={'30vh'} h={'80vh'} style={{
                position: 'absolute',
                right: BoxedLeft,
                top: '27vh',
                margin: '2vh',
                transition: 'right 0.5s ease'
            }}>
                <Card withBorder radius="md" mah={'35vh'}>
                    <Card.Section style={{
                        position: 'relative',
                        display: 'flex',
                        height: '10vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundImage: `url(${args.Image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, opacity 0.3s ease'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1,
                        }} />

                        <Title order={1} c="white" style={{
                            position: 'relative',
                            zIndex: 2,
                        }}>{args.Title}</Title>
                    </Card.Section>

                    <Group m="md">
                        <div style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text fw={500}>Item</Text>
                            <Text fz="xs" c="dimmed">
                                These are the items that will be given to you
                            </Text>
                        </div>

                        <Group w="50vh" h="17vh" mt="xs">
                            <ScrollArea w={'100%'} h={'100%'} ml={'1vh'}>
                                {args.Items.map((item: { Name: string, Icon: [string, string] }, index: number) => (
                                    <Text size="lg" color="white" mb="md" c="dimmed" style={{ display: 'flex', gap: '1vh', alignItems: 'center' }}>
                                        <Avatar size={30} radius={30}>
                                            <Icon Lib={item.Icon[0]} Name={item.Icon[1]} Size={18} />
                                        </Avatar> {item.Name}
                                    </Text>
                                ))}
                            </ScrollArea>
                        </Group>
                    </Group>
                </Card >
            </Box >
        </>
    );

};

export default Info;
