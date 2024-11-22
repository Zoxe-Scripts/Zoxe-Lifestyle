import React, { useState, useEffect, useRef } from "react";

import { Modal, Group, Button, Notification, Text, CloseButton, useMantineTheme, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { fetchNui } from "../functions/fetchNui";

import Icon from '../shared/Icon';
import Cfg from '../shared/Config';
import Lang from '../shared/Lang';

const Check: React.FC<{ visible: boolean, args: (value: boolean) => void, details: any }> = ({ visible, args, details }) => {
    const theme = useMantineTheme();
    const lang = Lang();

    const [opened, { open, close }] = useDisclosure(false);
    const [ClickedNotification, ClickNotification] = useState(false);
    const [NotificationedTop, NotificationTop] = useState('-8vh');

    useEffect(() => {
        if (ClickedNotification) {
            setTimeout(() => {
                NotificationTop('3vh');
            }, 100);
            setTimeout(() => {
                NotificationTop('-3vh');
                ClickNotification(false);
            }, 3000);
        }
    }, [ClickedNotification]);

    return (
        <>
            {ClickedNotification ? (
                <Center style={{ position: 'relative', top: NotificationedTop, transition: 'top 0.5s ease' }}>
                    <Notification title="Success" icon={<Icon Lib="fa6" Name="FaCheck" Size={20} />}>
                        You have chosen your lifestyle
                    </Notification>
                </Center>
            ) : (
                <Modal opened={visible} withCloseButton={false} onClose={close} xOffset={0} yOffset="5vh" size='sm' padding="lg">
                    <Group mb="md" style={{ justifyContent: 'space-between' }}>
                        <Text fz="md" fw={500}>
                            Lifestyle
                        </Text>
                        <CloseButton mr={-9} mt={-9} />
                    </Group>

                    <Text c="dimmed" fz="sm" mb="md">
                        Do yo want confirm this choiche?
                    </Text>

                    <Group style={{ justifyContent: 'flex-end' }}>
                        <Button variant="default" size="xs"
                            onClick={() => {
                                ClickNotification(true);
                                setTimeout(() => {
                                    ClickNotification(false);
                                    fetchNui('Zoxe_Lifestyle:Success', { card: details.card, index: details.index });
                                    args(false);
                                }, 3000);
                            }}
                        >
                            Confirm
                        </Button>
                        <Button variant="outline" size="xs" onClick={() => args(false)}>
                            Not Confirm
                        </Button>
                    </Group>
                </Modal>
            )}
        </>
    );
};

export default Check;
