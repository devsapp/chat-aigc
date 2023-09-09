import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { Stepper, Group, Grid,  Flex, Text, Highlight, TextInput, Button, Divider, LoadingOverlay, Collapse } from '@mantine/core';
import { useDisclosure, useClipboard } from '@mantine/hooks';
import { useForm, UseFormReturnType } from '@mantine/form';
import { useGlobalStore } from '../store/landing';
import CopyToClipboard from './copyToClipboard';
import { Path, DingTalkReadme, EventbusReadme } from "../constant";
import Markdown from './markdown';
import './landing.module.scss';

const CONTAINER_SIZE = 720;

type Values = {
    webhook: string;
    token: string;
};

interface EventBusProps {
    form: UseFormReturnType<Values>
}



export function DingTalkOutGoing() {
    const [opened, { toggle }] = useDisclosure(false);
    const clipboard = useClipboard({ timeout: 500 });
    const outgoing = useGlobalStore().outgoing;
    const { postUrl, token } = outgoing;
    return <div style={{ width: CONTAINER_SIZE, padding: 20 }}>

        <Grid>
            <Grid.Col span={4}>Outgoing Post地址</Grid.Col>
            <Grid.Col span={8} className="copy_container">
                <Flex
                    justify="flex-start"
                    align="center"
                    direction="row"
                >
                    <Text fw={700}>{postUrl}</Text>
                    <CopyToClipboard value={postUrl} />
                </Flex>
            </Grid.Col>

        </Grid>
        <Grid>
            <Grid.Col span={4}>Outgoing Token</Grid.Col>
            <Grid.Col span={8}>
                <Flex
                    justify="flex-start"
                    align="center"
                    direction="row"
                >
                    <Text fw={700}>{token}</Text>
                    <CopyToClipboard value={token} />
                </Flex>
            </Grid.Col>
        </Grid>
        <div style={{ textAlign: 'right' }}> <Button variant="subtle" compact onClick={toggle}>详细指引</Button></div>
        <Collapse in={opened}>
            <Markdown content={DingTalkReadme}></Markdown>
        </Collapse>
    </div>
}


export function EventBus({ form }: EventBusProps) {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <div style={{ width: CONTAINER_SIZE, padding: 20 }}>

            <TextInput label="Webhook" placeholder="输入钉钉webhook地址" {...form.getInputProps('webhook')} />
            <TextInput label="加签Token" placeholder="输入加签的秘钥" {...form.getInputProps('token')} />
            <div style={{ textAlign: 'right' }}> <Button variant="subtle" compact onClick={toggle}>详细指引</Button></div>
            <Collapse in={opened}>
                <Markdown content={EventbusReadme}></Markdown>
            </Collapse>
        </div>
    );
}


export function ConfirmAndSubmit({ form }: EventBusProps) {

    const outgoing = useGlobalStore().outgoing;
    const { postUrl, token } = outgoing;
    const eventBusValues: Values = form?.values || {};
    const { webhook, token: dingTalkToken } = eventBusValues;
    return <div style={{ width: CONTAINER_SIZE, padding: 20 }}>
        <div> <Text fw={700}>钉钉outgoing配置：</Text></div>
        <Grid>
            <Grid.Col span={4}>Outgoing Url</Grid.Col>
            <Grid.Col span={8}>
                <Highlight highlight={postUrl}>
                    {postUrl}
                </Highlight>
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col span={4}>Outgoing Token</Grid.Col>
            <Grid.Col span={8}>
                <Highlight highlight={token}>
                    {token}
                </Highlight>
            </Grid.Col>
        </Grid>
        <Divider my="sm" variant="dashed" />
        <div><Text fw={700}>事件总线连接配置：</Text></div>
        <Grid>
            <Grid.Col span={4}>钉钉webhook</Grid.Col>
            <Grid.Col span={8}>
                <Highlight highlight={webhook}>
                    {webhook}
                </Highlight>
            </Grid.Col>
        </Grid>
        <Grid>
            <Grid.Col span={4}>钉钉加签验证Token</Grid.Col>
            <Grid.Col span={8}>
                <Highlight highlight={dingTalkToken}>
                    {dingTalkToken}
                </Highlight>

            </Grid.Col>
        </Grid>


    </div>
}


export function Landing() {
    const form = useForm({
        initialValues: { webhook: '', token: '' },
        validate: {
            webhook: (value) => (!value ? 'webhook必填' : null),
            token: (value) => (!value ? 'token必填' : null),
        },
    });
    // const navigate = useNavigate();
    const router = useRouter();

    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const confirmSubmit = async function (values: Values) {
        try {
            setVisible(true);
            const res = await fetch("/api/eventbus", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })
            const result = await res.json();
            if (result.Code === 'Success') {
                // navigate(Path.Action);
                router.push(Path.Action);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setVisible(false);
        }


    }

    const validateEventBus = function () {
        form.validate();

        if (form.isValid()) {
            nextStep();
        }
    }
    return (
        <>
            <LoadingOverlay visible={visible} overlayBlur={2} />
            <form onSubmit={form.onSubmit(confirmSubmit)}>
                <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                    <Stepper.Step label="钉钉机器人设置" description="配置钉钉机器人">
                        <DingTalkOutGoing />
                    </Stepper.Step>
                    <Stepper.Step label="事件总线设置" description="配置事件总线连接">
                        <EventBus form={form} />
                    </Stepper.Step>
                    <Stepper.Completed>
                        <ConfirmAndSubmit form={form} />
                    </Stepper.Completed>
                </Stepper>

                <Group position="center" mt="xl">
                    {active > 0 ? <Button variant="default" onClick={prevStep}>返回</Button> : null}
                    {active < 2 ? <Button onClick={active === 1 ? validateEventBus : nextStep}>下一步</Button> : null}
                    {active === 2 ? <Button type="submit">确定</Button> : null}
                </Group>
            </form>
        </>
    );
}
