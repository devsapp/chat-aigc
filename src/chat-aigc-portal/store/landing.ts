
import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface OutGoingConfig {
    postUrl: string,
    token: string,

}
interface DingTalkChatStore {
    outgoing: OutGoingConfig,
    updateOutgoing: any,
    eventbus: any
}

export const useGlobalStore = create<DingTalkChatStore>()(devtools((set) => ({
    outgoing: {
        postUrl: '',
        token: '',
    },
    eventbus: {
        webhook: '',
    },

    loading: false,
    updateOutgoing: (outgoing: any) => set((_state: any) => ({ outgoing })),

})))

export async function init() {
    const state = useGlobalStore.getState();
    const updateOutgoing = state.updateOutgoing;
    const res = await fetch("/api/init")
    const outgoing = await res.json()
    updateOutgoing(outgoing);

}
