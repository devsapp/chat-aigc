import React, {
} from "react";
import { Box, Notification, Highlight } from '@mantine/core';
export function Action() {
    return <div style={{paddingTop: 20}}>

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
        <img src="https://img.alicdn.com/imgextra/i3/O1CN01WgM4bp22GBm2mHSSb_!!6000000007092-0-tps-1896-1002.jpg"  style={{display:'block',width: 700,height: 'auto',margin: '0 auto'}}/>
    </div>;
}
