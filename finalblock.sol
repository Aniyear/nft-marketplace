// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SimpleNftGallery {
    struct NFT {
        uint256 id;
        string name;
        uint256 price;
        address owner;
    }

    uint256 public nextId;
    mapping(uint256 => NFT) public nfts;

    event NFTMinted(uint256 id, string name, uint256 price, address owner);
    event NFTPurchased(uint256 id, address previousOwner, address newOwner);

    // Minting NFT (создание)
    function mintNFT(string memory _name, uint256 _price) public {
        require(_price > 0, "Price must be greater than zero");

        nfts[nextId] = NFT(nextId, _name, _price, msg.sender);
        emit NFTMinted(nextId, _name, _price, msg.sender);
        
        nextId++;
    }

    // Fake "purchase" — no real transaction
    function purchaseNFT(uint256 _id) public {
        require(_id < nextId, "NFT does not exist");
        NFT storage nft = nfts[_id];
        require(msg.sender != nft.owner, "Owner cannot buy their own NFT");

        address previousOwner = nft.owner;
        nft.owner = msg.sender;

        emit NFTPurchased(_id, previousOwner, msg.sender);
    }

    // View function to get NFT details
    function getNFT(uint256 _id) public view returns (string memory, uint256, address) {
        require(_id < nextId, "NFT does not exist");
        NFT memory nft = nfts[_id];
        return (nft.name, nft.price, nft.owner);
    }
}
