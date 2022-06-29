# Arbitrage Trading Bot Logic

```
DISCLAIMER

This does NOT guarantee profit nor am I responsible for any money lost using this Arbitrage Trading Bot. This is for me to learn new skills and understand the Blockchain 'universe' further in my attempt to become a Blockchain Developer!
```

Having said the above, this bot does NOT attempt to read the future and predict fluctuations in the price of cryptocurrencies (ERC20) aka Ethereum based. ERC20 tokens are created and hosted on the Ethereum blockchain, whereas bitcoin is the native currency of its respective blockchain. ERC20 tokens are stored and sent using Ethereum addresses and transactions, and use gas to cover transaction fees.

The key word is 'Arbitrage', by definition arbitrage is the simultaneous buying and selling of securities, currency, or commodities in different markets or in derivative forms in order to take advantage of differing prices for the same asset. - Google Dictionary.

You are using the small differences in cryptocurrency prices in different decentralised exchanges to attempt to make profit. For example if an ERC20 token is sold $100 on Exchange 1 and for $102 on Exchange 2 you will buy an ERC20 token from Exchange #1 and sell in Exchange #2 making a profit of almost $2 (almost because of fees). This is the high level idea of it.

Additionally this bot will also connect to a Flash Loan provider. A flash loan allows you to take out an unguaranteed loan with the obligation to repay the loan in the same transaction. If it's determined that you can't repay the loan, the loan is reversed as if it never occurred

```
https://www.one37pm.com/nft/tech/introduction-to-flash-loans
```

## For this learning experience I used:
    DEXs: Uniswap v2 | SushiSwap
    Flash Loan Provider: DYDX
    ERC20 Tokens: WETH (#1) | SHIB (#2)


## The high level trade logic:

    - Take out flash loan (Token #1) - from providers like Aave and Uniswap (this case it's DYDX)
    - Buy Token #2 on Exchange A using Token #1 - i.e Uniswap, PancakeSwap, SushiSwap (a Decentralised exchange - this case Uniswap v2)
    - Sell Token #2 on Exchange B for Token #1 - i.e Curve , Balancer (this case SushiSwap)
    - Replay flash loan (Token #1)
    - Keep any profit


## Questions to ask yourself:

    - How does the bot guarantee profit?
        -> It DOESN'T as a million things can go wrong BUT it monitors swap events on each excahange once a swap event occurs, for example some user purchases Token #1 with Token #2 an event then gets triggered. The bot monitors said events (the price points at which the swap occurred) and checks the prices. If it can sell for higher than it can buy (taking into consideration the gas fees and flash loan borrowing fees) then it calls the contract to trigger the chain if events mentioned above, if not then it waits for an opportunity!

    - Do I need to use flash loans?
        -> No but most people don't want to risk their own money (even if you need to spend money to make money) so this is a great alternative. In the future when I am more confident I will be looking into improving the bot's strategies and give it some real money and let it do its thing for a week.

    -How will I develop it?
        -> The plan is to get a snippet of the Ethereum Mainet on our computer using Ganache CLI which is a tool for development, your local Dev Blockchain. To do the snipping you need access to an Ethereum Node. You need abour 32 ETH to have your own node but for the sake of testing you will get that from a tools like Infura/Alchemy.

        "In a nutshell, Infura is a hosted Ethereum node cluster that lets you make requests to the eth1 blockchain without requiring you to set up your own eth1 node."
        ```
        https://infura.io/faq
        ```

        "Alchemy is a developer platform that empowers companies to build scalable and reliable decentralized applications without the hassle of managing blockchain infrastructure in-house"
        ```
        https://www.linkedin.com/company/alchemyinc/
        ```

    - How will I test the bot?
        -> On our local blockchain snippet we will unlock a wallet large enough and dump its contents (in this case SHIBA tokens) onto Sushiswap causing a price discrepancy by sheer volume. That will cause the two exchanges to fall out of sync and then ideally the bot should perform the arbitrage!

    - How much will the bot trade if it can perform an arbitrage?
        -> The limiting factor is in this case the amount of SHIB tokens in the Sushiswap liquidity pools.
