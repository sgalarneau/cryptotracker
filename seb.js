var $USER = [
    
    {
      name: "Trust Wallet",
      address: "0x64fDc086931255B3214d14Dfe4ad961E9A8F293e",
      chains: [
          
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", symbol:"BUSD", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2
            },
            { 
              address: "0x3685407aabf9a0ab54ed39168733b1e2d2a80e5e", label:"Available", symbol:"TRUNK", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
            { 
              address: "0xbd6e5D331A09fb39D28CB76510ae9b7d7781aE68", label:"Available", symbol:"PSTN", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
            { 
              address: "0xbd6e5D331A09fb39D28CB76510ae9b7d7781aE68", label:"Deposits", symbol:"PSTN", output:"deposits",
              func: "userInfo", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
          ]
        },
          
        {
          chainId: 137,
          assets: [
            { 
              address: "0x9e25126ebcd57c8eb6eb6c2ffc67810d365cfc3e", label:"", symbol:"OPT2", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2
            },
          ]
        },

        {
          chainId: 250,
          assets: [
            { 
              address: "0x99f07e573A962E489bA0EB9042bDa9f0B4be91cF", label:"Rewards", symbol:"FTM",
              func: "boneRewards", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:6 
            },
          ]
        },
          
      ]
    },
    
    {
      name: "W.1",
      address: "0xF9A69cab2D19A61E1061af1CEea28B4FF439293f",
      chains: [
          
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", symbol:"BUSD", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2
            },
            { 
              address: "0x20f663CEa80FaCE82ACDFA3aAE6862d246cE0333", label:"", symbol:"DRIP", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Available", symbol:"DRIP", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Deposits", symbol:"DRIP", output:"deposits",
              func: "userInfo", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
          ]
        },
          
      ]
    },
    
    {
      name: "W.2",
      address: "0xC409C1C7Ea8f90CA5998C9C646667602380035FB",
      chains: [
          
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", symbol:"BUSD", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2
            },
            { 
              address: "0x20f663CEa80FaCE82ACDFA3aAE6862d246cE0333", label:"", symbol:"DRIP", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Available", symbol:"DRIP", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Deposits", symbol:"DRIP", output:"deposits",
              func: "userInfo", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
          ]
        },
          
      ]
    },
  
    {
      name: "W.3",
      address: "0xF78c52Ec3c424898711780ce5C7033A2BBE474d7",
      chains: [
          
        {
          chainId: 56,
          assets: [
            { 
              address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", label:"", symbol:"BUSD", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:2
            },
            { 
              address: "0x20f663CEa80FaCE82ACDFA3aAE6862d246cE0333", label:"", symbol:"DRIP", 
              func: "balanceOf", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Available", symbol:"DRIP", 
              func: "claimsAvailable", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
            { 
              address: "0xFFE811714ab35360b67eE195acE7C10D93f89D8C", label:"Deposits", symbol:"DRIP", output:"deposits",
              func: "userInfo", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
          ]
        },
          
      ]
    },
  
    {
      name: "StableFund",
      address: "0x6dbb68df6c24c120ef920b6c8132e8098965b062",
      chains: [
          
        {
          chainId: 56,
          assets: [
            { 
              address: "0x4f2bc1d99c953e0053f5bb9a6855cf7a5cbe66fa", label:"Available", symbol:"BNB", 
              func: "getAllClaimableReward", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
            { 
              address: "0x4f2bc1d99c953e0053f5bb9a6855cf7a5cbe66fa", label:"Deposits", symbol:"BNB", 
              func: "getDepositState", params: ["_WALLET_ADDRESS_"], numSize:1e18, decimals:3 
            },
          ]
        },
          
      ]
    },

  ];
