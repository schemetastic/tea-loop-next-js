import { setupDevCycle } from '@devcycle/nextjs-sdk/server'
import { randomUUID } from 'crypto';

const getUserIdentity = async () => {
    return {
        user_id: randomUUID()
    }
}

export const { getVariableValue, getClientContext } = setupDevCycle({
    serverSDKKey: process.env.DEVCYCLE_SERVER_KEY ?? '',
    clientSDKKey: process.env.DEVCYCLE_CLIENT_KEY ?? '',
    userGetter: getUserIdentity,
    options: {}
})