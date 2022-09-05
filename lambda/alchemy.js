const Alexa = require('ask-sdk-core');
const constants = require('./constants');
const REAGENT_EFFECTS_KEYS=[
[
-1,
8704,
3260,
8844,
2339,
6835,
1950,
8680,
8629,
20667,
1947,
8422,
532,
8562,
1,
1151,
8575,
1299,
8622,
3601,
5848,
2605,
1847,
6143,
2558,
2201,
4967,
323,
2438,
8690,
8515,
1163,
22608
],
[
-1,
8729,
8464,
8551,
8286,
8583,
8733,
8500,
8147,
20630,
8503,
8752,
8822,
8796,
8276,
9673,
8632,
8805,
8549,
8528,
8662,
8324,
8397,
8906,
8324,
8592,
8827,
8514,
8503,
8618,
8460,
8413,
22362
]
];

const REAGENT_EFFECTS_DATA={
110:{effects:[22,26,31,6]},
452:{effects:[2,20,13,4]},
511:{effects:[23,12,19,4]},
1399:{effects:[21,17,22,10]},
1412:{effects:[14,24,7,31]},
1823:{effects:[12,23,1,26]},
2590:{effects:[1,19,12,20]},
3060:{effects:[19,20,21,6]},
3064:{effects:[17,21,11,5]},
3200:{effects:[22,23,24,28]},
3376:{effects:[13,22,2,23]},
3450:{effects:[31,10,4,28]},
3839:{effects:[26,25,15,28]},
3855:{effects:[24,14,19,25]},
4368:{effects:[7,19,14,21]},
5072:{effects:[11,22,17,24]},
5152:{effects:[19,27,5,15]},
6009:{effects:[20,2,22,15]},
7919:{effects:[7,5,4,29]},
7920:{effects:[10,15,16,3]},
7964:{effects:[22,27,16,29]},
8014:{effects:[1,11,18,29]},
8102:{effects:[13,11,18,3]},
8152:{effects:[21,30,8,29]},
8182:{effects:[20,25,30,16]},
8272:{effects:[19,18,8,3]},
17523:{effects:[16,25,29,18]},
17604:{effects:[13,10,30,3]},
20157:{effects:[16,24,9,3]},
20267:{effects:[9,30,15,29]},
21009:{effects:[23,9,5,25]},
21554:{effects:[26,8,22,32]},//crimson nirnroot,
22100:{effects:[20,24,4,32]},//chaurus egg,
22557:{effects:[19,23,18,32]}//vile coagulant,
};

const SOLVENT_DATA={
2099:{category:1,level:3,proficiency:1},
3435:{category:1,level:10,proficiency:1},
4358:{category:1,level:20,proficiency:2},
6177:{category:1,level:30,proficiency:3},
288:{category:1,level:40,proficiency:4},
796:{category:1,level:1010,proficiency:5},
4197:{category:1,level:1050,proficiency:6},
5581:{category:1,level:1100,proficiency:7},
2460:{category:1,level:1150,proficiency:8},
7924:{category:2,level:3,proficiency:1},
8046:{category:2,level:10,proficiency:1},
8000:{category:2,level:20,proficiency:2},
8076:{category:2,level:30,proficiency:3},
8067:{category:2,level:40,proficiency:4},
8074:{category:2,level:1010,proficiency:5},
8064:{category:2,level:1050,proficiency:6},
8019:{category:2,level:1100,proficiency:7},
7967:{category:2,level:1150,proficiency:8}
};

const ReagentEffectIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ReagentEffectIntent';
    },
    handle(handlerInput) {
        const reagentSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'reagent');
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_REAGENT')});
        if (reagentSlot && reagentSlot.value) {
            let reagentId = constants.GET_ID(reagentSlot);
            if (reagentId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_REAGENT'),entry:reagentSlot.value});
            } else {
                let conjunction = handlerInput.t('CONJUNCTION_MSG');
                let effectIds = REAGENT_EFFECTS_DATA[reagentId].effects;
                let potionEffectsArray = [];
                let poisonEffectsArray = [];
                for (var i = 0; i < effectIds.length; i++) {
                    potionEffectsArray.push(REAGENT_EFFECTS_KEYS[0][effectIds[i]]);
                    poisonEffectsArray.push(REAGENT_EFFECTS_KEYS[1][effectIds[i]]);
                }
                let potionEffects = constants.EXPAND_ARRAY(handlerInput,potionEffectsArray,["POTION"]);
                let poisonEffects = constants.EXPAND_ARRAY(handlerInput,poisonEffectsArray,["POISON"]);
                speechText = handlerInput.t('REAGENT_EFFECT_RESULT',{reagent:reagentSlot.value,potionEffects:potionEffects,poisonEffects:poisonEffects});
            }
        }
        return constants.FINISH(handlerInput, speechText);
    }
};

const AlchemyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotionIntent' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'PoisonIntent');
    },
    handle(handlerInput) {
        let type = (Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotionIntent') ? 0 : 1;
        let RESULT_KEY = (type === 0) ? 'POTION_RESULT' : 'POISON_RESULT';
        let slotName = (type === 0) ? 'potion' : 'poison';
        const effectSlot = Alexa.getSlot(handlerInput.requestEnvelope, slotName);
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t((type === 0) ? 'CATEGORY_POTION' : 'CATEGORY_POISON')});
        if (effectSlot && effectSlot.value) {
            let effectId = constants.GET_ID(effectSlot);
            if (effectId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t((type === 0) ? 'CATEGORY_POTION' : 'CATEGORY_POISON'),entry:effectSlot.value});
            } else {
                let bonus = handlerInput.t(((type === 0) ? 'POTION_BONUS_' : 'POISON_BONUS_') + effectId);
                speechText = handlerInput.t(RESULT_KEY,{potion:effectSlot.value,poison:effectSlot.value,bonus:bonus});
            }
        }
        return constants.FINISH(handlerInput, speechText);
    }
};

const AlchemyReagentsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotionReagentsIntent' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'PoisonReagentsIntent');
    },
    handle(handlerInput) {
        let type = (Alexa.getIntentName(handlerInput.requestEnvelope) === 'PotionReagentsIntent') ? 0 : 1;
        let RESULT_KEY = (type === 0) ? 'POTION_REAGENT_RESULT' : 'POISON_REAGENT_RESULT';
        let slotName = (type === 0) ? 'potion' : 'poison';
        const effectSlot = Alexa.getSlot(handlerInput.requestEnvelope, slotName);
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t((type === 0) ? 'CATEGORY_POTION' : 'CATEGORY_POISON')});
        if (effectSlot && effectSlot.value) {
            let effectId = constants.GET_ID(effectSlot);
            if (effectId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t((type === 0) ? 'CATEGORY_POTION' : 'CATEGORY_POISON'),entry:effectSlot.value});
            } else {
                let conjunction = handlerInput.t('CONJUNCTION_MSG');
                let effectIndex = REAGENT_EFFECTS_KEYS[type].indexOf(effectId);
                let reagentsArray = [];
                for (var key in REAGENT_EFFECTS_DATA) {
                    let data = REAGENT_EFFECTS_DATA[key];
                    if (data.effects.indexOf(effectIndex) > -1) {
                        reagentsArray.push(key);
                    }
                }
                let reagents = constants.EXPAND_ARRAY(handlerInput,reagentsArray,["REAGENT"]);
                speechText = handlerInput.t(RESULT_KEY,{potion:effectSlot.value,poison:effectSlot.value,reagents:reagents});
            }
        }
        return constants.FINISH(handlerInput, speechText);
    }
};

const SolventIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SolventIntent';
    },
    handle(handlerInput) {
        const solventSlot = Alexa.getSlot(handlerInput.requestEnvelope, 'solvent');
        let speechText = handlerInput.t('NO_CATEGORY',{category:handlerInput.t('CATEGORY_SOLVENT')});
        if (solventSlot && solventSlot.value) {
            let solventId = constants.GET_ID(solventSlot);
            if (solventId === -1) {
                speechText = handlerInput.t('CATEGORY_ENTRY_NOT_FOUND',{category:handlerInput.t('CATEGORY_SOLVENT'),entry:solventSlot.value});
            } else {
                let conjunction = handlerInput.t('CONJUNCTION_MSG');
                let solventData = SOLVENT_DATA[solventId];
                let langCode = handlerInput.requestEnvelope.request.locale.substr(0,2);
                let level = solventData.level;
                if (level >= 1000) {
                    level = handlerInput.t('CHAMPION_LEVEL_PREFIX') + " " + (level - 1000);
                }
                speechText = handlerInput.t('SOLVENT_RESULT',{solvent:solventSlot.value,category:handlerInput.t('SOLVENT_CATEGORY_' +solventData.category),level:level,proficiency:solventData.proficiency});
            }
        }
        return constants.FINISH(handlerInput, speechText);

    }
};

module.exports = {
    ReagentEffectIntentHandler:ReagentEffectIntentHandler,
    AlchemyIntentHandler:AlchemyIntentHandler,
    AlchemyReagentsIntentHandler:AlchemyReagentsIntentHandler,
    SolventIntentHandler:SolventIntentHandler
}

