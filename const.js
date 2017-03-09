'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.UHHSALW562CQTN6XQWKJ7RLNGBI3W62Y;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.EAAVRLwITqZBEBAK4pprsf9Am9LQZAGWmy4uunZCyELS5JJUuSgPLJtQHEckhcE1H7RZCy7uaANoHeGtGqXuNbozZB9ZBgRV3OEvQWf6xzrkZCga5CSgyHCTRTZCy8ZCNyT8eMivQ84QVlEeTQWZCx7uZBxayZCI9IyZA3UCwQBJkLOj22ZCAZDZD;

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "ifidonttell";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};
