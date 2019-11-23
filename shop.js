const path = require('path');
var shopFile = path.join(__dirname, '/config/shop.json');
var shop = require(shopFile);
module.exports = {
    refreshIntervalHrs: 24,
    dailyPurchaseHrs: 24,
    expiration: '9999-12-31T23:59:59.999Z',
    storefronts: [
        {
            name: 'BRDailyStorefront',
            catalogEntries: [
                {
                    devName:  shop.daily1,
                    offerId: 'v2:/7f16a118-fc18-4d8d-9712-34185db5d177',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 9999,
                            finalPrice: shop.daily1price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 9999
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId:  shop.daily1,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId:  shop.daily1,
                            quantity: 1
                        }
                    ],
                    sortPriority: 0,
                    catalogGroupPriority: 0
                },
                {
                    devName:  shop.daily2,
                    offerId: 'v2:/d8f6e33e-d693-4692-ba53-3474462a43ff',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.daily2price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId:  shop.daily2,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId:  shop.daily2,
                            quantity: 1
                        }
                    ],
                    sortPriority: 0,
                    catalogGroupPriority: 0
                },
                {
                    devName:  shop.daily3,
                    offerId: 'v2:/1dfad32f-d304-4e12-9bd0-d25f378c7ca6',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.daily3price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId:  shop.daily3,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId:  shop.daily3,
                            quantity: 1
                        }
                    ],
                    sortPriority: 0,
                    catalogGroupPriority: 0
                },
                {
                    devName:  shop.daily4,
                    offerId: 'v2:/d1261947-d187-48d5-872f-cbfd14289d7c',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.daily4price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId:  shop.daily4,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId:  shop.daily4,
                            quantity: 1
                        }
                    ],
                    sortPriority: 0,
                    catalogGroupPriority: 0
                },
                {
                    devName:  shop.daily5,
                    offerId: 'v2:/960bb92e-2542-4a60-9c66-494abd59f67a',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.daily5price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId:  shop.daily5,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId:  shop.daily5,
                            quantity: 1
                        }
                    ],
                    sortPriority: 0,
                    catalogGroupPriority: 0
                },
                {
                    devName:  shop.daily6,
                    offerId: 'v2:/af2e8b11-f1d9-42ab-a063-4c281d2d3adc',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.daily6price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId:  shop.daily6,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId:  shop.daily6,
                            quantity: 1
                        }
                    ],
                    sortPriority: 0,
                    catalogGroupPriority: 0
                }
            ]
        },
        {
            name: 'BRWeeklyStorefront',
            catalogEntries: [
                {
                    devName: shop.featured2,
                    offerId: 'v2:/32fb86e1-4a02-4478-935d-47f3fe333e7f',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.featured2price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId: shop.featured2,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId: shop.featured2,
                            quantity: 1
                        }
                    ],
                    sortPriority: -1,
                    catalogGroupPriority: 0
                },
                {
                    devName: shop.featured1,
                    offerId: 'v2:/dfe83374-0131-4180-8771-30cb7ff04953',
                    fulfillmentIds: [],
                    dailyLimit: -1,
                    weeklyLimit: -1,
                    monthlyLimit: -1,
                    categories: [],
                    prices: [
                        {
                            currencyType: 'MtxCurrency',
                            currencySubType: '',
                            regularPrice: 0,
                            finalPrice: shop.featured1price,
                            saleExpiration: '9999-12-31T23:59:59.999Z',
                            basePrice: 0
                        }
                    ],
                    matchFilter: '',
                    filterWeight: 0,
                    appStoreId: [],
                    requirements: [
                        {
                            requirementType: 'DenyOnItemOwnership',
                            requiredId: shop.featured1,
                            minQuantity: 1
                        }
                    ],
                    offerType: 'StaticPrice',
                    giftInfo: {
                        bIsEnabled: false,
                        forcedGiftBoxTemplateId: '',
                        purchaseRequirements: [],
                        giftRecordIds: []
                    },
                    refundable: true,
                    metaInfo: [],
                    displayAssetPath: '',
                    itemGrants: [
                        {
                            templateId: shop.featured1,
                            quantity: 1
                        }
                    ],
                    sortPriority: -2,
                    catalogGroupPriority: 0
                }
            ]
        }
    ]
}