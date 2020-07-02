require("dotenv").config();

module.exports = {
  spaceId: process.env.CONTENTFUL_SPACED_ID,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
};


