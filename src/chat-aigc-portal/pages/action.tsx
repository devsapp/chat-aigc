import React, {
} from "react";
import { Box, Notification, Highlight, Flex } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

import CopyToClipboard from '../components/copyToClipboard';

const Table = () => {
    const data = [
        { name: "<photography>", description: "摄影", example: "一只小猫咪<photography>" },
        { name: "<portrait>", description: "人像写真", example: "一只小猫咪<portrait>" },
        { name: "<3d cartoon>", description: "3D卡通", example: "一只小猫咪<3d cartoon>" },
        { name: "<anime>", description: "动画", example: "一只小猫咪<anime>" },
        { name: "<oil painting>", description: "油画", example: "一只小猫咪<oil painting>" },
        { name: "<watercolor>", description: "水彩", example: "一只小猫咪<watercolor>" },
        { name: "<sketch>", description: "素描", example: "一只小猫咪<sketch>" },
        { name: "<chinese painting>", description: "中国画", example: "一只小猫咪<chinese painting>" },
        { name: "<flat illustration>", description: "扁平插画", example: "一只小猫咪<flat illustration>" },
        { name: "<auto>", description: "默认", example: "一只小猫咪<auto>" },
    ];
    const clipboard = useClipboard({ timeout: 500 });
    return (
        <table style={{ width: '100%', textAlign: 'center' }} border={1} >
            <thead>
                <tr>
                    <th>风格名称</th>
                    <th>说明</th>
                    <th>提示词示例</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <Flex 
                                mih={50}
                                bg="rgba(0, 0, 0, .3)"
                                gap="md"
                                justify="center"
                                align="center"
                                direction="row"
                                wrap="wrap" >     
                                {item.example}
                                <CopyToClipboard value={item.example} />
                            </Flex>

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default function ActionPage() {
    return <div style={{ paddingTop: 20, width: 700, margin: '40px auto' }}>

        <Box
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                textAlign: 'center',
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                },
            })}
        >
            <Notification title="恭喜您，钉钉X万相您创建成功" withCloseButton={false}>
                <Highlight
                    highlight={['1-2分钟']}
                    fw={500}
                    sx={(theme) => ({
                        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
                        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
                    })}
                >
                    温馨提示: 通知服务需要1-2分钟的启动时间，耐心等待之后即可在钉钉机器人中开启通义万相之旅
                </Highlight>

            </Notification>


        </Box>
        <div>万相的风格示例：</div>
        <Table />
        <div>架构图：</div>
        <img src="https://img.alicdn.com/imgextra/i3/O1CN01WgM4bp22GBm2mHSSb_!!6000000007092-0-tps-1896-1002.jpg" style={{ display: 'block', width: 700, height: 'auto', margin: '0 auto' }} />
    </div>;
}
