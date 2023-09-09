

import { ActionIcon, Tooltip, } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';


type CopyToClipboardProps = {
    value: string
}
export default function CopyToClipboard({ value }: CopyToClipboardProps) {
    const clipboard = useClipboard({ timeout: 500 });
    return <Tooltip label={clipboard.copied ? '已复制' : '复制'} withArrow position="right">
        <ActionIcon color={clipboard.copied ? 'teal' : 'gray'} onClick={() => clipboard.copy(value)}>
            {clipboard.copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
        </ActionIcon>
    </Tooltip>
}