import {useState} from 'react';

export const faq = [
  {
    getData :  () =>{
      const [show, setshow] = useState(false);
      const run =  () =>{ 
        setshow((prev) => !prev);
      };
  
      return {
        id:1,
        question:'How Do Bots Work',
        answer:'Each bot can set indicators and parameters that when they are align, will make a buy or sell by telling the exchange of your choice to execute a trade. Most of the time a bot is tuned for a specific market and time period. This is the developer’s best educated guess on how the market will work in the future. It is not a magic crystal ball that will make perfect trades every time',
        state: show,
        run
      };
    },
  },
  {
    getData :  () =>{
      const [show, setshow] = useState(false);
      const run =  () =>{ 
        setshow((prev) => !prev);
      };
  
      return {
        id:1,
        question:'What Shoul I expect As Profit',
        answer:'Depending on the time frame and what your bot is looking for, you could make a lot or lose some. This is after all a free market and not a bank. There are large unknowns when dealing with markets, any number of influences can trigger a rise or fall. Bots are a better strategy than a buy and hold method. As long as you believe your choice of altcoin will go up, then you will likely earn a profit. Sometimes a bot is used to help reduce losses, not just make profit. If a bot is not preforming the way you think, you can always change bots or pause the bot and make a manual trade, then turn the bot back on when it is in sync with your choice',
        state: show,
        run
      };
    },
  },
  {
    getData :  () =>{
      const [show, setshow] = useState(false);
      const run =  () =>{ 
        setshow((prev) => !prev);
      };
  
      return {
        id:1,
        question:'What payment methods do you support?',
        answer:'We believe in the crypto-currency eco-system and strive to do our best to support it and the crypto community. For this reason, we only accept payments from master card,visa card and Bitcoins',
        state: show,
        run
      };
    },
  },
  {
    getData :  () =>{
      const [show, setshow] = useState(false);
      const run =  () =>{ 
        setshow((prev) => !prev);
      };
  
      return {
        id:1,
        question:'What Operating System Should I have',
        answer:'Tradio-Bot is the most advance software in the market and supports any operating system; Mac, Windows, Linux etc. Tradio-Bot can be conﬁgured and connected with (Bittrex, Binance, etc) trading platforms, which can be accessible from any device that has access to an internet browser (Google Chrome, Safari, Internet Explorer, etc)',
        state: show,
        run
      };
    },
  },
  {
    getData :  () =>{
      const [show, setshow] = useState(false);
      const run =  () =>{ 
        setshow((prev) => !prev);
      };
  
      return {
        id:1,
        question:'Do This Software Really Work',
        answer:'Yes, this software really does work, since it trades based on technical analysis indicators and that all of the different features and Bot types work. Tradio-Bot is not a 1 click proﬁt solution, you must not understand the basics of technical market analysis in order to utilize Tradio-Bot. Both in a way that can be rewarding. Keep in mind the software is designed and developed with the best technology and trading signals',
        state: show,
        run
      };
    },
  },
  {
    getData :  () =>{
      const [show, setshow] = useState(false);
      const run =  () =>{ 
        setshow((prev) => !prev);
      };
  
      return {
        id:1,
        question:'Can I Get Rich Without Automated Trading Bot',
        answer:'It is possible that you may trade proﬁtably, and to say that you can get rich is something that we assure. Our software allows you to automate cryptocurrency trading strategies, which are primarily based on technical analysis indicators. It is possible that you can generate proﬁts from using our software, but it is entirely up to how you use it. Think of Tradio-Bot as a tool and what you make using the tool is entirely up to you',
        state: show,
        run
      };
    },
  },
];
