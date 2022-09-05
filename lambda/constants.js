module.exports = {
    PERSISTENT_ATTRIBUTES_NAMES: ['sessionCounter'],
    DEFAULT_REGION_ID: '1',
    TTC_REGIONS: ['','us','eu'],
//  TTC_PLATFORMS: {'pc':'pc','ps4':'ps','xbox':'xb'},
    TTC_PRICE_CHECK_URL: {'us':'https://us.tamrieltradecentre.com/download/PriceTable','eu':'https://eu.tamrieltradecentre.com/download/PriceTable'},
    TTC_PRICE: 'PriceTable.lua',
    TTC_ITEM_LOOKUP: {'de':'ItemLookUpTable_DE.lua','en':'ItemLookUpTable_EN.lua','fr':'ItemLookUpTable_FR.lua','ru':'ItemLookUpTable_RU.lua','zh':'ItemLookUpTable_ZH.lua'},
    TTC_PRICE_CHECK: 'PriceTable.lua',
    TTC_ITEM_SEARCH_REGEX: ',\\["{{itemName}}"\\]=\\{\\[([0-9]+)\\]=([0-9]+),\\},',
    TTC_PRICE_SEARCH_REGEX: '\\[{{itemCode}}\\]=(\\{(\\[([0-9]+)\\]=\\{(\\[([0-9]+)\\]=\\{(\\[([0-9-]+)\\]=\\{\\["Avg"\\]=([0-9.]+),\\["Max"\\]=([0-9.]+),\\["Min"\\]=([0-9.]+),\\["EntryCount"\\]=([0-9]+),\\["AmountCount"\\]=([0-9]+),(\\["SuggestedPrice"\\]=([0-9.]+),)?\\},)+\\},)+\\},)+\\}),',

    TTC_SUGGESTED_MULT: 1.25,
    GET_ID: function (slot) {
        let id = '-1';
        if (slot && slot.value) {
            let status = slot.resolutions.resolutionsPerAuthority[0].status.code;
            if (status === "ER_SUCCESS_MATCH") {
                if (slot.resolutions.resolutionsPerAuthority[0].values.length === 1) {
                    id = slot.resolutions.resolutionsPerAuthority[0].values[0].value.id;
                } else {
                    for (var i = 0; i < slot.resolutions.resolutionsPerAuthority[0].values.length; i++) {
                        if (slot.resolutions.resolutionsPerAuthority[0].values[i].value.name === slot.value) {
                            id = slot.resolutions.resolutionsPerAuthority[0].values[i].value.id;
                       }
                    }
                }
            }
        }
        return parseInt(id);
    },
    EXPAND_ARRAY: function (handlerInput,inArray,prefixes) {
        let resultArray = [];
        let conjunction = handlerInput.t('CONJUNCTION_MSG');
        if (inArray) {
            for (var i = 0; i < inArray.length; i++) {
                let item = null;
                for (var j = 0; j < prefixes.length && item === null; j++) {
                    let code = prefixes[j]+"_"+inArray[i];
                    item = handlerInput.t(code);
                    if (item === code) {
                        item = null;
                    }
                }
                resultArray.push(item);
            }
        }
        return resultArray.join(', ' + conjunction + ' ');
    },
    FINISH: function(handlerInput, speechText) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        if (sessionAttributes['interactive']) {
            return handlerInput.responseBuilder
                .speak(speechText + " " + handlerInput.t('POST_SAY_MSG'))
                .reprompt(handlerInput.t('REPROMPT_MSG'))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(speechText)
                .getResponse();
        }
        
    }
}
