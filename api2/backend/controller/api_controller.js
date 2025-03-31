// Romaji-to-Hiragana Map
const romajiToHiraganaMap = {
    'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
    'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
    'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
    'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
    'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
    'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
    'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
    'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
    'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
    'wa': 'わ', 'wo': 'を', 'n': 'ん',
    'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
    'za': 'ざ', 'ji': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
    'da': 'だ', 'ji': 'ぢ', 'zu': 'づ', 'de': 'で', 'do': 'ど',
    'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
    'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ'
};

// Generate Romaji-to-Katakana Map
const romajiToKatakanaMap = Object.fromEntries(
    Object.entries(romajiToHiraganaMap).map(([key, value]) => [
        key, value.replace(/[\u3040-\u309F]/g, char => String.fromCharCode(char.charCodeAt(0) + 96))
    ])
);

// Function to Convert Romaji to Kana
const convertRomajiToKana = (romaji, map) => {
    const keys = Object.keys(map).sort((a, b) => b.length - a.length);
    let result = "";
    let i = 0;

    while (i < romaji.length) {
        let found = false;
        for (const key of keys) {
            if (romaji.startsWith(key, i)) {
                result += map[key];
                i += key.length;
                found = true;
                break;
            }
        }
        if (!found) {
            result += romaji[i];
            i++;
        }
    }
    return result;
};

export default{
    convertToHiragana:(req,res) => {
        const {romaji} = req.body
        if (!romaji) {
            return res.status(400).json({success:false, error:"No input is provided"})
        }

        const hiragana = convertRomajiToKana(romaji, romajiToKatakanaMap) 
            res.json({hiragana})
     },
     convertToKatakana:(req,res) => {
        const {romaji} = req.body
        if (!romaji) {
            return res.status(400).json({success:false, error:"No input is provided"})
        }

        const katakana = convertRomajiToKana(romaji, romajiToKatakanaMap) 
            res.json({katakana})  
     }

}