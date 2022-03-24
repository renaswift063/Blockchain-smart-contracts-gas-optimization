const { getAllOwners_ownerOf } = require("./scripts/getAllOwners/getAllOwners_ownerOf");
const { getAllOwners_transfer_event } = require("./scripts/getAllOwners/getAllOwners_Transfer_event");
const { vs721A } = require("./scripts/vs721A");
const { vs721A_transfer } = require("./scripts/vs721A_transfer");
const { vsEnumerable } = require("./scripts/vsEnumerable");
const { vsTokenIdZero } = require("./scripts/vsTokenIdZero");

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};

task("vsEnumerable", "Deploys and mints Vanilla721 and Enumerable721 and reports gas usage of both").setAction(vsEnumerable);

task("vs721A", "Deploys and mints Vanilla721 and Vanilla721A and reports gas usage of both").setAction(vs721A);

task("vs721A_transfer", "Deploys, mints and transfer Vanilla721 and Vanilla721A tokens and reports gas usage of both").setAction(
    vs721A_transfer
);

task("vsTokenIdZero", "Deploys and mints Vanilla721A_0 and Vanilla721A and reports gas usage of both").setAction(vsTokenIdZero);

task("getAllOwners_ownerOf", "Gets all the owners of all the tokens in a contract calling ownerOf for each tokenId").setAction(
    getAllOwners_ownerOf
);

task(
    "getAllOwners_transfer_event",
    "Gets all the owners of all the tokens in a contract by processing the Transfer events"
).setAction(getAllOwners_transfer_event);
