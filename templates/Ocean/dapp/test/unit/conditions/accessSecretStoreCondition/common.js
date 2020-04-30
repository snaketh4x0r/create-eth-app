/* eslint-env mocha */
/* eslint-disable no-console */
/* global artifacts */
const constants = require('../../../helpers/constants.js')
const testUtils = require('../../../helpers/utils.js')
const deployManagers = require('../../../helpers/deployManagers.js')
const AccessSecretStoreCondition = artifacts.require('AccessSecretStoreCondition')

let didRegistry,
    agreementStoreManager,
    conditionStoreManager,
    templateStoreManager,
    accessSecretStoreCondition

const common = {
    setupTest: async ({
        accounts = [],
        conditionId = constants.bytes32.one,
        conditionType = constants.address.dummy,
        did = constants.did[0],
        checksum = testUtils.generateId(),
        value = constants.registry.url,
        deployer = accounts[8],
        owner = accounts[0],
        registerDID = false,
        DIDProvider = accounts[9]
    } = {}) => {
        ({
            didRegistry,
            agreementStoreManager,
            conditionStoreManager,
            templateStoreManager
        } = await deployManagers(
            deployer,
            owner
        ))

        accessSecretStoreCondition = await AccessSecretStoreCondition.new()

        await accessSecretStoreCondition.methods['initialize(address,address,address)'](
            accounts[0],
            conditionStoreManager.address,
            agreementStoreManager.address,
            { from: owner }
        )

        if (registerDID) {
            await didRegistry.registerAttribute(did, checksum, [DIDProvider], value)
        }

        await templateStoreManager.registerTemplateActorType(
            'grantee',
            {
                from: owner
            }
        )
        const granteeActorTypeId = await templateStoreManager.getTemplateActorTypeId('grantee')

        // any random ID
        const templateId = constants.bytes32.one

        const conditionTypes = [
            accessSecretStoreCondition.address
        ]
        const actorTypeIds = [
            granteeActorTypeId
        ]

        await templateStoreManager.methods['proposeTemplate(bytes32,address[],bytes32[],string)'](
            templateId,
            conditionTypes,
            actorTypeIds,
            'AccessSecretStoreTemplate'
        )

        await templateStoreManager.approveTemplate(templateId, { from: owner })

        return {
            did,
            conditionId,
            conditionType,
            owner,
            DIDProvider,
            didRegistry,
            agreementStoreManager,
            conditionStoreManager,
            templateStoreManager,
            accessSecretStoreCondition,
            templateId
        }
    }
}

module.exports = common
