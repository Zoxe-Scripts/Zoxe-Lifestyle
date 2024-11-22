import React, { useState, useEffect, useRef } from "react";

import { Card, Text, Badge, Button, Group, ScrollArea, Center, Transition, Box, Loader, useMantineTheme } from '@mantine/core';

import { fetchNui } from '../functions/fetchNui';
import { isEnvBrowser } from '../functions/misc';

import Icon from '../shared/Icon';
import Cfg from '../shared/Config';
import Lang from '../shared/Lang';

import Info from './Info';
import Check from './Check';

interface CardProp {
    Icon: [string, string];
    Title: string;
    Image: string;
    Badge: {
        Color: string;
        Value: [string, string][];
    };
    Description: string;
    Button: {
        Color: string;
        Icon: [string, string];
        Value: string;
    };
    Items: {
        Icon: [string, string];
        Name: string;
    }[];
}

const Data: CardProp[] = [
    {
        Icon: ['fa6', 'FaUsb'],
        Title: 'Hacker',
        Description: 'Expert in technology and cybersecurity, capable of breaching the most secure systems. Skilled in exploiting vulnerabilities defenses.',
        Image: 'https://rockstarintel.com/wp-content/uploads/2023/11/e1bf2b94c9208b6a210fa6add837641ce24d23052.webp',
        Badge: {
            Color: 'pink',
            Value: [['fa6', 'FaStar'], ['fa6', 'FaStar'], ['fa6', 'FaStar']]
        },
        Button: {
            Icon: ['fa6', 'FaPlay'],
            Color: 'blue',
            Value: 'Select',
        },
        Items: [
            {
                Icon: ['fa6', 'FaUsb'],
                Name: 'Usbc',
            },
            {
                Icon: ['md', 'MdOutlineSignalWifiStatusbarConnectedNoInternet4'],
                Name: 'Jammer',
            },
            {
                Icon: ['fa6', 'FaLaptopCode'],
                Name: 'Pc',
            },
        ]
    },
    {
        Icon: ['fa6', 'FaBriefcase'],
        Title: 'Entrepreneur',
        Description: 'Successful businessperson with a keen eye for opportunities and exceptional leadership skills. Known for innovation and strategic thinking.',
        Image: 'https://staticg.sportskeeda.com/editor/2024/10/d50d9-17295350077308-1920.jpg',
        Badge: {
            Color: 'teal',
            Value: [['fa6', 'FaStar']]
        },
        Button: {
            Icon: ['fa6', 'FaPlay'],
            Color: 'blue',
            Value: 'Select',
        },
        Items: [
            {
                Icon: ['fa6', 'FaSuitcaseRolling'],
                Name: 'Suitcase',
            },
            {
                Icon: ['fa6', 'FaMoneyBillTrendUp'],
                Name: 'Money',
            },
            {
                Icon: ['fi', 'FiWatch'],
                Name: 'Watch',
            }
        ]
    },
    {
        Icon: ['fa6', 'FaUserSecret'],
        Title: 'Illegal',
        Description: 'Member of a gang or mafia, skilled in illicit activities and connected to dangerous contacts. Lives a life filled with secrecy and risk.',
        Image: 'https://realgaming101.es/wp-content/uploads/2021/02/gta-6-filtracion-mafia-italia.jpg',
        Badge: {
            Color: 'red',
            Value: [['fa6', 'FaStar'], ['fa6', 'FaStar'], ['fa6', 'FaStar'], ['fa6', 'FaStar']]
        },
        Button: {
            Icon: ['fa6', 'FaPlay'],
            Color: 'blue',
            Value: 'Select',
        },
        Items: [
            {
                Icon: ['gi', 'GiPistolGun'],
                Name: 'Pistol',
            },
            {
                Icon: ['gi', 'GiAmmoBox'],
                Name: 'Ammo',
            },
            {
                Icon: ['gi', 'GiTrenchKnife'],
                Name: 'Knife',
            },
        ]
    },
    {
        Icon: ['fa6', 'FaCar'],
        Title: 'Driver',
        Description: 'Experienced driver who knows every shortcut in the city and drives with impeccable skill. Reliable under pressure and in high-speed chases.',
        Image: 'https://images.hindustantimes.com/tech/img/2024/04/03/1600x900/gta_v_1678076345536_1712155348175.png',
        Badge: {
            Color: 'orange',
            Value: [['fa6', 'FaStar'], ['fa6', 'FaStar']]
        },
        Button: {
            Icon: ['fa6', 'FaPlay'],
            Color: 'blue',
            Value: 'Select',
        },
        Items: [
            {
                Icon: ['fa6', 'FaKey'],
                Name: 'Key',
            },
            {
                Icon: ['si', 'SiTurbosquid'],
                Name: 'Turbo',
            },
            {
                Icon: ['md', 'MdGasMeter'],
                Name: 'Gasolio',
            },
        ]
    },
    {
        Icon: ['fa6', 'FaUserLarge'],
        Title: 'Civilian',
        Description: 'Ordinary citizen leading a calm life, always ready to protect and serve their community. Values peace and security in everyday life.',
        Image: 'https://img.gta5-mods.com/q75/images/apple-airpods-mp-model-ready-fivem/7c85f9-received_2394998077413477.png',
        Badge: {
            Color: 'green',
            Value: [['fa6', 'FaStarHalf']]
        },
        Button: {
            Icon: ['fa6', 'FaPlay'],
            Color: 'blue',
            Value: 'Select',
        },
        Items: [
            {
                Icon: ['fa6', 'FaBreadSlice'],
                Name: 'Bread',
            },
            {
                Icon: ['fa6', 'FaBottleWater'],
                Name: 'Water',
            },
            {
                Icon: ['ti', 'TiBeer'],
                Name: 'Beer',
            },
        ]
    },
];

const Cards = ({
    data, index, selectedCard, onClickCard, onClickButton
}: {
    data: CardProp,
    index: number,
    selectedCard: number,
    onClickCard: (index: number) => void,
    onClickButton: (index: number) => void
}) => {
    return (
        <Card key={index} shadow="sm" padding="md" radius="md"
            style={{
                maxWidth: '33.5vh',
                height: selectedCard ? 'auto' : 'fit-content',
                transform: selectedCard ? 'scale(1)' : 'scale(0.98)',
                transition: 'transform 0.3s ease, height 0.3s ease-in-out'
            }}
            onClick={() => onClickCard(index)}
        >
            <Group mb="xs"
                style={{
                    justifyContent: 'space-between'
                }}
            >
                <Text fw={500} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1vh'
                }}>
                    <Icon
                        Lib={data.Icon[0]}
                        Name={data.Icon[1]}
                        Size={16}
                    />
                    {data.Title}
                </Text>
                <Badge color={data.Badge.Color}>
                    {
                        data.Badge.Value.map((data, index) => {
                            return <Icon
                                key={index}
                                Lib={data[0]}
                                Name={data[1]}
                                Size={13}
                            />;
                        })
                    }
                </Badge>
            </Group>

            <Text size="sm" c="dimmed">
                {data.Description}
            </Text>

            <Transition
                mounted={selectedCard == index}
                transition="pop"
                duration={400}
                timingFunction="ease"
            >
                {(styles) => (
                    <Button color={data.Button.Color} fullWidth mt="md" radius="md" variant="light"
                        style={{
                            ...styles,
                            cursor: 'pointer'
                        }}
                        onClick={() => onClickButton(index)}
                    >
                        <Icon
                            Lib={data.Button.Icon[0]}
                            Name={data.Button.Icon[1]}
                            Size={14}
                            Style={{
                                marginRight: '1vh'
                            }}
                        /> {data.Button.Value}
                    </Button>
                )}
            </Transition>
        </Card>
    );
}

const Select: React.FC<{ visible: boolean }> = ({ visible }) => {
    const theme = useMantineTheme();
    const lang = Lang();

    const [Loading, SetLoading] = useState<boolean>(true);

    const [SelectedCard, SelectCard] = useState<{ index: number, card: CardProp | null }>({ index: -1, card: null });
    const [OldCard, SetOldCard] = useState<{ index: number, card: CardProp | null }>({ index: -1, card: null });
    const [CardData, SetCardData] = useState<CardProp[]>([]);

    const Details = useRef<{ index: number, card: CardProp | null }>({ index: -1, card: null });

    const [ClickedButton, ClickButton] = useState<boolean>(false);

    const GetTableStyle = async () => {
        SetLoading(true);
        if (!isEnvBrowser()) {
            const Card = await fetchNui('Zoxe_Lifestyle:GetTableStyle') as CardProp[];
            SetCardData(Array.isArray(Card) ? Card : [Card]);
        } else {
            SetCardData(Data);
        }
        setTimeout(() => {
            SetLoading(false);
        }, 500);
    };

    const ClickCards = (index: number) => {
        if (SelectedCard.index === index) {
            SelectCard({ index: -1, card: null });
        } else {
            SetOldCard(SelectedCard);
            setTimeout(() => {
                SelectCard({ index, card: CardData[index] });
                fetchNui('Zoxe_Lifestyle:SetTableStyle', {
                    card: CardData[index],
                    index: index
                });
            }, 300);
            Details.current = {
                card: CardData[index],
                index: index
            }
        }
    };

    const ClickButtons = (index: number) => {
        ClickCards(index);
        ClickButton(true);
    };

    useEffect(() => {
        if (visible) GetTableStyle();
    }, [visible]);

    return (
        <>
            {Loading ? (
                <Center style={{ height: '100vh' }}>
                    <Loader color="blue" />
                </Center>
            ) : (
                <>
                    {SelectedCard.card && SelectedCard !== null && <Info visible={true} args={SelectedCard} details={OldCard} />}
                    {ClickedButton !== false && <Check visible={true} args={ClickButton} details={Details.current} />}

                    <Box miw={1920} mih={1080}>
                        <ScrollArea style={{
                            position: 'absolute',
                            bottom: '3vh',
                            left: ClickedButton === false ? '0' : '100%',
                            transition: 'left 0.5s ease',
                            width: '100%',
                        }}>
                            <Center style={{
                                gap: '1.5vh', display: 'flex', justifyContent: 'center'
                            }}>
                                {
                                    CardData.slice(0, 5).map((data, index) => {
                                        return (
                                            <Cards
                                                key={index}
                                                data={data}
                                                index={index}
                                                selectedCard={SelectedCard.index}
                                                onClickCard={ClickCards}
                                                onClickButton={ClickButtons}
                                            />
                                        );
                                    })
                                }
                            </Center>
                        </ScrollArea>
                    </Box>
                </>
            )}
        </>
    );
};

export default Select;
