import { CountriesDivision } from "../../types";

export const REGIONAL_BLOCS = ['EU', 'AU', 'NAFTA', 'other'];

export const countriesTest = {
  EU: {
    area: 4236679,
    countries: ["Κύπρος", "България", "Ελλάδα", "Česká republika", "Österreich", "Éire", "Åland", "Sverige", "Suomi", "Slovensko", "Slovenija", "România", "Portugal", "Polska", "Nederland", "Malta", "Magyarország", "Lëtzebuerg", "Lietuva", "Latvija", "Italia", "Isle of Man", "Hrvatska", "Guyane française", "Gibraltar", "France", "España", "Eesti", "Deutschland", "Danmark", "België"],
    currencies: ['Euro', 'Bulgarian lev', 'Croatian kuna', 'Czech koruna', 'Danish krone', 'Gibraltar pound', 'Hungarian forint', 'British pound', 'Manx pound', 'Polish złoty', 'Romanian leu', 'Swedish krona'],
    languages: {
      bg: { countries: ['BGR'], population: 6927288, area: 110879, name: 'български език' },
      cs: { countries: ['CZE'], population: 10698896, area: 78865, name: 'čeština' },
      da: { countries: ['DNK'], population: 5831404, area: 43094, name: 'dansk' },
      de: { countries: ['AUT', 'BEL', 'DEU', 'LUX'], population: 104346002, area: 474099, name: 'Deutsch' },
      el: { countries: ['CYP', 'GRC'], population: 11922910, area: 141241, name: 'ελληνικά' },
      en: { countries: ['GIB', 'IRL', 'IMN', 'MLT'], population: 5638732, area: 71167, name: 'English' },
      es: { countries: ['ESP'], population: 47351567, area: 505992, name: 'Español' },
      et: { countries: ['EST'], population: 1331057, area: 45227, name: 'eesti' },
      fi: { countries: ['FIN'], population: 5530719, area: 338424, name: 'suomi' },
      fr: { countries: ['BEL', 'FRA', 'GUF', 'LUX'], population: 79834395, area: 673793, name: 'français' },
      ga: { countries: ['IRL'], population: 4994724, area: 70273, name: 'Gaeilge' },
      gv: { countries: ['IMN'], population: 85032, area: 572, name: 'Gaelg' },
      hr: { countries: ['HRV'], population: 4047200, area: 56594, name: 'hrvatski jezik' },
      hu: { countries: ['HUN'], population: 9749763, area: 93028, name: 'magyar' },
      hy: { countries: ['CYP'], population: 1207361, area: 9251, name: 'Հայերեն' },
      it: { countries: ['ITA'], population: 59554023, area: 301336, name: 'Italiano' },
      lb: { countries: ['LUX'], population: 632275, area: 2586, name: 'Lëtzebuergesch' },
      lt: { countries: ['LTU'], population: 2794700, area: 65300, name: 'lietuvių kalba' },
      lv: { countries: ['LVA'], population: 1901548, area: 64559, name: 'latviešu valoda' },
      mt: { countries: ['MLT'], population: 525285, area: 316, name: 'Malti' },
      nl: { countries: ['BEL', 'NLD'], population: 28997136, area: 72378, name: 'Nederlands' },
      pl: { countries: ['POL'], population: 37950802, area: 312679, name: 'język polski' },
      pt: { countries: ['PRT'], population: 10305564, area: 92090, name: 'Português' },
      ro: { countries: ['ROU'], population: 19286123, area: 238391, name: 'Română' },
      sk: { countries: ['CZE', 'SVK'], population: 16157723, area: 127902, name: 'slovenčina' },
      sl: { countries: ['SVN'], population: 2100126, area: 20273, name: 'slovenski jezik' },
      sv: { countries: ['ALA', 'FIN', 'SWE'], population: 15913036, area: 790299, name: 'svenska' },
      tr: { countries: ['CYP'], population: 1207361, area: 9251, name: 'Türkçe' }
    },
    population: 448196830
  },
  NAFTA: {
    area: 21578136,
    countries: ['United States', 'México', 'Canada'],
    currencies: ['Canadian dollar', 'Mexican peso', 'United States dollar'],
    languages: {
      en: { area: 19613761, countries: ['CAN', 'USA'], name: "English", population: 367489361 },
      es: { area: 1964375, countries: ['MEX'], name: "Español", population: 128932753 },
      fr: { area: 9984670, countries: ['CAN'], name: "français", population: 38005238 }
    },
    population: 496422114
  },
  AU: {
    area: 30323497,
    countries: ['‏ليبيا', 'ኤርትራ', 'ኢትዮጵያ', 'موريتانيا', 'مصر‎', 'تونس', 'المغرب', 'الصحراء الغربية', 'السودان', 'الجزائر', 'Zimbabwe', 'Zambia', 'Uganda', 'Togo', 'Territoire des Terres australes et antarctiques françaises', 'Tchad', "Tanzania", "Sénégal", "São Tomé e Príncipe", "Swaziland", "South Sudan", "South Africa", "Soomaaliya", "Sierra Leone", "Seychelles", "Saint Helena", "République démocratique du Congo", "République du Congo", "Rwanda", "Nigeria", "Niger", "Namibia", "Moçambique", "Mayotte", "Maurice", "Mali", "Malawi", "Madagasikara", "Liberia", "Lesotho", "La Réunion", "Ködörösêse tî Bêafrîka", "Komori", "Kenya", "Guinée", "Guiné-Bissau", "Guinea Ecuatorial", "Ghana", "Gambia", "Gabon", "Djibouti", "Côte d'Ivoire", "Cameroon", "Cabo Verde", "Bénin", "Burundi", "Burkina Faso", "British Indian Ocean Territory", "Botswana", "Angola"],
    currencies: ["Algerian dinar", "Angolan kwanza", "West African CFA franc", "Botswana pula", "United States dollar", "Burundian franc", "Central African CFA franc", "Cape Verdean escudo", "Comorian franc", "Congolese franc", "Djiboutian franc", "Egyptian pound", "Eritrean nakfa", "Ethiopian birr", "Euro", "Gambian dalasi", "Ghanaian cedi", "Guinean franc", "Kenyan shilling", "Lesotho loti", "South African rand", "Liberian dollar", "Libyan dinar", "Malagasy ariary", "Malawian kwacha", "Mauritanian ouguiya", "Mauritian rupee", "Moroccan dirham", "Mozambican metical", "Namibian dollar", "Nigerian naira", "Rwandan franc", "Saint Helena pound", "São Tomé and Príncipe dobra", "Seychellois rupee", "Sierra Leonean leone", "Somali shilling", "Sudanese pound", "South Sudanese pound", "Swazi lilangeni", "Tanzanian shilling", "Tunisian dinar", "Ugandan shilling", "Zambian kwacha"],
    languages: {
      aa: { countries: ['ERI'], population: 5352000, area: 117600, name: 'Afar' },
      af: { countries: ['NAM', 'ZAF'], population: 61849606, area: 2046652, name: 'Afrikaans' },
      am: { countries: ['ETH'], population: 114963583, area: 1104300, name: 'አማርኛ' },
      ar: { countries: ['DZA', 'TCD', 'COM', 'DJI', 'EGY', 'ERI', 'LBY', 'MRT', 'MAR', 'SOM', 'SDN', 'TUN'], population: 289813513, area: 10734978, name: 'العربية' },
      en: { countries: ['BWA', 'IOT', 'CMR', 'ERI', 'GMB', 'GHA', 'KEN', 'LSO', 'LBR', 'MWI', 'MUS', 'NAM', 'NGA', 'RWA', 'SHN', 'SYC', 'SLE', 'ZAF', 'SDN', 'SSD', 'SWZ', 'TZA', 'UGA', 'ZMB', 'ZWE'], population: 633055384, area: 10189684, name: 'English' },
      es: { countries: ['GNQ', 'ESH'], population: 1913698, area: 294051, name: 'Español' },
      ff: { countries: ['BFA', 'GIN'], population: 34036070, area: 518824, name: 'Fulfulde' },
      fr: { countries: ['BEN', 'BFA', 'BDI', 'CMR', 'CAF', 'TCD', 'COM', 'COG', 'COD', 'DJI', 'GNQ', 'ATF', 'GAB', 'GIN', 'CIV', 'MDG', 'MLI', 'MYT', 'NER', 'REU', 'RWA', 'SEN', 'SYC', 'TGO'], population: 344085473, area: 9754085, name: 'français' },
      kg: { countries: ['COD'], population: 89561404, area: 2344858, name: 'Kikongo' },
      ln: { countries: ['COG', 'COD'], population: 95079496, area: 2686858, name: 'Lingála' },
      lu: { countries: ['COD'], population: 89561404, area: 2344858, name: 'Tshiluba' },
      mg: { countries: ['MDG'], population: 27691019, area: 587041, name: 'fiteny malagasy' },
      nd: { countries: ['ZWE'], population: 14862927, area: 390757, name: 'isiNdebele' },
      nr: { countries: ['ZAF'], population: 59308690, area: 1221037, name: 'isiNdebele' },
      ny: { countries: ['MWI'], population: 19129955, area: 118484, name: 'chiCheŵa' },
      pt: { countries: ['AGO', 'CPV', 'GNQ', 'GNB', 'MOZ', 'STP'], population: 68267835, area: 2117463, name: 'Português' },
      rn: { countries: ['BDI'], population: 11890781, area: 27834, name: 'Ikirundi' },
      rw: { countries: ['RWA'], population: 12952209, area: 26338, name: 'Ikinyarwanda' },
      sg: { countries: ['CAF'], population: 4829764, area: 622984, name: 'yângâ tî sängö' },
      sn: { countries: ['ZWE'], population: 14862927, area: 390757, name: 'chiShona' },
      so: { countries: ['SOM'], population: 15893219, area: 637657, name: 'Soomaaliga' },
      ss: { countries: ['ZAF', 'SWZ'], population: 60468854, area: 1238401, name: 'SiSwati' },
      st: { countries: ['LSO', 'ZAF'], population: 61450942, area: 1251392, name: 'Sesotho' },
      sw: { countries: ['COD', 'KEN', 'TZA', 'UGA'], population: 248807917, area: 4111862, name: 'Kiswahili' },
      ti: { countries: ['ERI'], population: 5352000, area: 117600, name: 'ትግርኛ' },
      tn: { countries: ['BWA', 'ZAF'], population: 61660315, area: 1803037, name: 'Setswana' },
      ts: { countries: ['ZAF'], population: 59308690, area: 1221037, name: 'Xitsonga' },
      ve: { countries: ['ZAF'], population: 59308690, area: 1221037, name: 'Tshivenḓa' },
      xh: { countries: ['ZAF'], population: 59308690, area: 1221037, name: 'isiXhosa' },
      zu: { countries: ['ZAF'], population: 59308690, area: 1221037, name: 'isiZulu' }
    },
    population: 1342212256
  },
  other: {
    area: 109083501,
    countries: ["Црна Гора", "Україна", "Тоҷикистон", "Србија", "Россия", "Монгол улс", "Македонија", "Кыргызстан", "Белару́сь", "ʼbrug-yul", "śrī laṃkāva", "Ísland", "Wallis et Futuna", "Việt Nam", "Virgin Islands of the United States", "Venezuela", "Vanuatu", "Uruguay", "United States Minor Outlying Islands", "United Kingdom", "Türkmenistan", "Türkiye", "Tuvalu", "Turks and Caicos Islands", "Trinidad and Tobago", "Tonga", "Tokelau", "Timor-Leste", "Svalbard og Jan Mayen", "Suriname", "Suriname", "Status Civitatis Vaticanae", "South Georgia", "Soomaaliya", "Solomon Islands", "Sint Maarten", "Singapore", "Shqipëria", "Schweiz"],
    currencies: ["Afghan afghani", "Albanian lek", "Algerian dinar", "United States Dollar", "Euro", "East Caribbean dollar", "Argentine peso", "Armenian dram", "Aruban florin", "Australian dollar", "Azerbaijani manat", "Bahamian dollar", "Bahraini dinar", "Bangladeshi taka", "Barbadian dollar", "New Belarusian ruble", "Old Belarusian ruble", "Belize dollar", "Bermudian dollar", "Bhutanese ngultrum", "Indian rupee", "Bolivian boliviano", "United States dollar", "Bosnia and Herzegovina convertible mark", "Norwegian krone", "Brazilian real", "British pound", "Brunei dollar", "Singapore dollar", "Cambodian riel", "Cayman Islands dollar"],
    languages: {
      ar: { countries: ['DZA', 'BHR', 'COM', 'DJI', 'EGY', 'IRQ', 'ISR', 'JOR', 'KWT', 'LBN', 'LBY', 'MRT', 'MAR', 'OMN', 'PSE', 'QAT', 'SAU', 'SOM', 'SDN', 'SYR', 'TUN', 'ARE', 'YEM'], population: 445297628, area: 13178366, name: 'العربية' },
      ay: { countries: ['BOL'], population: 11673029, area: 1098581, name: 'aymar aru' },
      az: { countries: ['AZE'], population: 10110116, area: 86600, name: 'azərbaycan dili' },
      be: { countries: ['BLR'], population: 9398861, area: 207600, name: 'беларуская мова' },
      bi: { countries: ['VUT'], population: 307150, area: 12189, name: 'Bislama' },
      bn: { countries: ['BGD'], population: 164689383, area: 147570, name: 'বাংলা' },
      bs: { countries: ['BIH', 'MNE'], population: 3902533, area: 65021, name: 'bosanski jezik' },
      ca: { countries: ['AND'], population: 77265, area: 468, name: 'català' },
      ch: { countries: ['GUM', 'MNP'], population: 226340, area: 1013, name: 'Chamoru' },
      de: { countries: ['VAT', 'LIE', 'CHE'], population: 8675484, area: 41444.44, name: 'Deutsch' },
      dv: { countries: ['MDV'], population: 540542, area: 300, name: 'ދިވެހި' },
      dz: { countries: ['BTN'], population: 771612, area: 38394, name: 'རྫོང་ཁ' },
      en: { countries: ['ASM', 'AIA', 'ATA', 'ATG', 'AUS', 'BHS', 'BRB', 'BLZ', 'BLZ', 'BMU', 'UMI', 'VGB', 'VIR', 'CYM', 'CXR', 'CCK', 'COK', 'CUW', 'DMA', 'FLK', 'FJI', 'GRD', 'GUM', 'GGY', 'GUY', 'GUY', 'HMD', 'HKG', 'IND', 'JAM', 'JEY'], population: 1889224084, area: 29668369.36, name: 'English' },
      es: { countries: ['ARG', 'BLZ', 'BLZ', 'BOL', 'CHL', 'CHL', 'COL', 'COL', 'CRI', 'CUB', 'DOM', 'DOM', 'ECU', 'SLV', 'GUM', 'GTM', 'HND', 'MEX', 'NIC', 'PAN', 'PRY', 'PER', 'PER', 'PRI', 'URY', 'VEN'], population: 535072744, area: 14752449, name: 'Español' },
      fa: { countries: ['IRN'], population: 83992953, area: 1648195, name: 'فارسی' },
      fj: { countries: ['FJI'], population: 896444, area: 18272, name: 'vosa Vakaviti' },
      fo: { countries: ['FRO'], population: 48865, area: 1393, name: 'føroyskt' },
      fr: { countries: ['COM', 'DJI', 'GUF', 'PYF', 'GLP', 'GGY', 'HTI', 'VAT', 'JEY', 'LBN', 'MTQ', 'MCO', 'NCL', 'BLM', 'MAF', 'SPM', 'CHE', 'VUT', 'WLF'], population: 30884787, area: 140133.46000000002, name: 'français' },
      gn: { countries: ['ARG', 'PRY'], population: 52509293, area: 3187152, name: "Avañe'ẽ" },
      he: { countries: ['ISR'], population: 9216900, area: 20770, name: 'עברית' }
    },
    population: 5983280664
  }
}

//checkAndSaveCurrencies.test.ts
export const countryWithoutCurrency = { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 12980, nativeName: 'Polska', languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'POL' };

export const country = { name: "Poland", population: 900, regionalBlocs: [{ acronym: "EU" }], area: 12980, nativeName: 'Polska', currencies: [{ name: 'złoty' }], languages: [{ iso639_1: 'pl', nativeName: 'polski' }], alpha3Code: 'POL' };

//saveDataCountryInObj.test.ts
export const countriesEmptyObj: CountriesDivision = {
  AU: {
    countries: [],
    population: 0,
    languages: {},
    currencies: [],
    area: 0
  },
  EU: {
    countries: [],
    population: 0,
    languages: {},
    currencies: [],
    area: 0
  },
  NAFTA: {
    countries: [],
    population: 0,
    languages: {},
    currencies: [],
    area: 0
  },
  other: {
    countries: [],
    population: 0,
    languages: {},
    currencies: [],
    area: 0
  }
}