const mockGlobalState = {
  user: {
    email: 'teste@trybe.com',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 0,
        value: '11',
        description: 'onze dolares',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2232',
            low: '5.0835',
            varBid: '-0.0517',
            pctChange: '-1.01',
            bid: '5.09',
            ask: '5.093',
            timestamp: '1667490542',
            create_date: '2022-11-03 12:49:02',
          },
          USDT: {
            code: 'USD',
            codein: 'BRLT',
            name: 'Dólar Americano/Real Brasileiro Turismo',
            high: '5.235',
            low: '5.135',
            varBid: '-0.005',
            pctChange: '-0.1',
            bid: '4.98',
            ask: '5.29',
            timestamp: '1667490000',
            create_date: '2022-11-03 12:40:00',
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.7862',
            low: '3.7037',
            varBid: '-0.0448',
            pctChange: '-1.19',
            bid: '3.7054',
            ask: '3.7068',
            timestamp: '1667490545',
            create_date: '2022-11-03 12:59:06',
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '5.8751',
            low: '5.6933',
            varBid: '-0.158',
            pctChange: '-2.7',
            bid: '5.6956',
            ask: '5.7035',
            timestamp: '1667490547',
            create_date: '2022-11-03 12:59:07',
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0331',
            low: '0.0322',
            varBid: '-0.0004',
            pctChange: '-1.23',
            bid: '0.0322',
            ask: '0.0322',
            timestamp: '1667490548',
            create_date: '2022-11-03 12:47:08',
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '107.5',
            low: '103.79',
            varBid: '-1680',
            pctChange: '-1.59',
            bid: '104.002',
            ask: '104.1',
            timestamp: '1667490547',
            create_date: '2022-11-03 12:45:07',
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '332',
            low: '303.62',
            varBid: '0.06',
            pctChange: '0.02',
            bid: '313.89',
            ask: '314.55',
            timestamp: '1667490526',
            create_date: '2022-11-03 12:48:46',
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.0937',
            low: '4.9682',
            varBid: '-0.0787',
            pctChange: '-1.56',
            bid: '4.9684',
            ask: '4.9724',
            timestamp: '1667490546',
            create_date: '2022-11-03 12:44:06',
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03522',
            low: '0.03435',
            varBid: '-0.0004',
            pctChange: '-1.15',
            bid: '0.03434',
            ask: '0.03436',
            timestamp: '1667490548',
            create_date: '2022-11-03 12:46:08',
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.1523',
            low: '5.0226',
            varBid: '-0.0991',
            pctChange: '-1.93',
            bid: '5.0242',
            ask: '5.0281',
            timestamp: '1667490544',
            create_date: '2022-11-03 12:49:04',
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.2841',
            low: '3.205',
            varBid: '-0.0589',
            pctChange: '-1.8',
            bid: '3.2054',
            ask: '3.2077',
            timestamp: '1667490546',
            create_date: '2022-11-03 12:39:06',
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7135',
            low: '0.6969',
            varBid: '-0.0087',
            pctChange: '-1.23',
            bid: '0.6968',
            ask: '0.697',
            timestamp: '1667490545',
            create_date: '2022-11-03 12:29:05',
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.4621',
            low: '1.4225',
            varBid: '-0.0344',
            pctChange: '-2.36',
            bid: '1.4223',
            ask: '1.4228',
            timestamp: '1667490547',
            create_date: '2022-11-03 12:42:07',
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '8.4',
            low: '7.80081',
            varBid: '-134.01',
            pctChange: '-1.66',
            bid: '7.93703',
            ask: '7.94439',
            timestamp: '1667490548',
            create_date: '2022-11-03 12:40:08',
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.41',
            low: '2.32',
            varBid: '-0.01',
            pctChange: '-0.39',
            bid: '2.35',
            ask: '2.35',
            timestamp: '1667490449',
            create_date: '2022-11-03 12:47:29',
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.70574',
            low: '0.639678',
            varBid: '-0.00014901',
            pctChange: '-0.02',
            bid: '0.671498',
            ask: '0.671498',
            timestamp: '1667490535',
            create_date: '2022-11-03 12:48:55',
          },
        },
      },
      {
        id: 1,
        value: '25',
        description: 'vinte e cinco euros',
        currency: 'EUR',
        method: 'Dinheiro',
        tag: 'Saúde',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2232',
            low: '5.0835',
            varBid: '-0.0517',
            pctChange: '-1.01',
            bid: '5.09',
            ask: '5.093',
            timestamp: '1667490542',
            create_date: '2022-11-03 12:49:02',
          },
          USDT: {
            code: 'USD',
            codein: 'BRLT',
            name: 'Dólar Americano/Real Brasileiro Turismo',
            high: '5.235',
            low: '5.135',
            varBid: '-0.005',
            pctChange: '-0.1',
            bid: '4.98',
            ask: '5.29',
            timestamp: '1667490000',
            create_date: '2022-11-03 12:40:00',
          },
          CAD: {
            code: 'CAD',
            codein: 'BRL',
            name: 'Dólar Canadense/Real Brasileiro',
            high: '3.7862',
            low: '3.7037',
            varBid: '-0.0448',
            pctChange: '-1.19',
            bid: '3.7054',
            ask: '3.7068',
            timestamp: '1667490545',
            create_date: '2022-11-03 12:49:05',
          },
          GBP: {
            code: 'GBP',
            codein: 'BRL',
            name: 'Libra Esterlina/Real Brasileiro',
            high: '5.8751',
            low: '5.6933',
            varBid: '-0.158',
            pctChange: '-2.7',
            bid: '5.6956',
            ask: '5.7035',
            timestamp: '1667490547',
            create_date: '2022-11-03 12:12:07',
          },
          ARS: {
            code: 'ARS',
            codein: 'BRL',
            name: 'Peso Argentino/Real Brasileiro',
            high: '0.0331',
            low: '0.0322',
            varBid: '-0.0004',
            pctChange: '-1.23',
            bid: '0.0322',
            ask: '0.0322',
            timestamp: '1667490548',
            create_date: '2022-11-03 12:29:08',
          },
          BTC: {
            code: 'BTC',
            codein: 'BRL',
            name: 'Bitcoin/Real Brasileiro',
            high: '107.5',
            low: '103.79',
            varBid: '-1680',
            pctChange: '-1.59',
            bid: '104.002',
            ask: '104.1',
            timestamp: '1667490547',
            create_date: '2022-11-03 12:49:07',
          },
          LTC: {
            code: 'LTC',
            codein: 'BRL',
            name: 'Litecoin/Real Brasileiro',
            high: '332',
            low: '303.62',
            varBid: '0.06',
            pctChange: '0.02',
            bid: '313.89',
            ask: '314.55',
            timestamp: '1667490526',
            create_date: '2022-11-03 12:48:46',
          },
          EUR: {
            code: 'EUR',
            codein: 'BRL',
            name: 'Euro/Real Brasileiro',
            high: '5.0937',
            low: '4.9682',
            varBid: '-0.0787',
            pctChange: '-1.56',
            bid: '4.9684',
            ask: '4.9724',
            timestamp: '1667490546',
            create_date: '2022-11-03 12:49:06',
          },
          JPY: {
            code: 'JPY',
            codein: 'BRL',
            name: 'Iene Japonês/Real Brasileiro',
            high: '0.03522',
            low: '0.03435',
            varBid: '-0.0004',
            pctChange: '-1.15',
            bid: '0.03434',
            ask: '0.03436',
            timestamp: '1667490548',
            create_date: '2022-11-03 12:49:08',
          },
          CHF: {
            code: 'CHF',
            codein: 'BRL',
            name: 'Franco Suíço/Real Brasileiro',
            high: '5.1523',
            low: '5.0226',
            varBid: '-0.0991',
            pctChange: '-1.93',
            bid: '5.0242',
            ask: '5.0281',
            timestamp: '1667490544',
            create_date: '2022-11-03 12:49:04',
          },
          AUD: {
            code: 'AUD',
            codein: 'BRL',
            name: 'Dólar Australiano/Real Brasileiro',
            high: '3.2841',
            low: '3.205',
            varBid: '-0.0589',
            pctChange: '-1.8',
            bid: '3.2054',
            ask: '3.2077',
            timestamp: '1667490546',
            create_date: '2022-11-03 12:49:06',
          },
          CNY: {
            code: 'CNY',
            codein: 'BRL',
            name: 'Yuan Chinês/Real Brasileiro',
            high: '0.7135',
            low: '0.6969',
            varBid: '-0.0087',
            pctChange: '-1.23',
            bid: '0.6968',
            ask: '0.697',
            timestamp: '1667490545',
            create_date: '2022-11-03 12:49:05',
          },
          ILS: {
            code: 'ILS',
            codein: 'BRL',
            name: 'Novo Shekel Israelense/Real Brasileiro',
            high: '1.4621',
            low: '1.4225',
            varBid: '-0.0344',
            pctChange: '-2.36',
            bid: '1.4223',
            ask: '1.4228',
            timestamp: '1667490547',
            create_date: '2022-11-03 12:49:07',
          },
          ETH: {
            code: 'ETH',
            codein: 'BRL',
            name: 'Ethereum/Real Brasileiro',
            high: '8.4',
            low: '7.80081',
            varBid: '-134.01',
            pctChange: '-1.66',
            bid: '7.93703',
            ask: '7.94439',
            timestamp: '1667490548',
            create_date: '2022-11-03 12:49:08',
          },
          XRP: {
            code: 'XRP',
            codein: 'BRL',
            name: 'XRP/Real Brasileiro',
            high: '2.41',
            low: '2.32',
            varBid: '-0.01',
            pctChange: '-0.39',
            bid: '2.35',
            ask: '2.35',
            timestamp: '1667490449',
            create_date: '2022-11-03 12:47:29',
          },
          DOGE: {
            code: 'DOGE',
            codein: 'BRL',
            name: 'Dogecoin/Real Brasileiro',
            high: '0.70574',
            low: '0.639678',
            varBid: '-0.00014901',
            pctChange: '-0.02',
            bid: '0.671498',
            ask: '0.671498',
            timestamp: '1667490535',
            create_date: '2022-11-03 12:48:55',
          },
        },
      },
    ],
    editor: false,
    idToEdit: 0,
  },
};

export default mockGlobalState;
