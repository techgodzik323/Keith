
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUy46jRhT9lVZtbY0BGwyWWgoGjPH7gR84mkUZCijzdFFg41FL2YyyG0WaD5gsokjJR2Q16Q/IHyRfMJ8Q4e6enkUy6dSqXrr3nHvOvW9AnOAMDVEJOm9ASnABKaq2tEwR6IBu7rqIgDpwIIWgA1YTPTg5uWAfWy11tBZNw7Y43mIZKbALmS162JnXjNnZipJbcFcHab4Psf2VgFYgsGJtxKkiLAM5hJfxJWxvRHMTaEFN2DB+ysYzGm2dbusW3FURISY49rTURxEiMByicgYxeRn8sWYtzH1vbjPWcA6jWC2SZK5oZ6t/6fE0jvmaMWzsF+Ek0l4Gf5JHPS++YCEgkbdIyrSW+U5oXfiWNcCa75cqlk/zniau7Af4GfZi5BgOiimm5YvrLsulZw4GKk+CeLbby3IMjXR76bF6sRMO4xK222Oq0HbeZ14GXA8bO2udkH2yOKiOepYnueliqZlZfkMaDozRwSKHQC9tU/wS+Iw8eSX4P3WH6mrmHZZMeha5fK/y2Dz1Gt2WO9uw9pY9YD2x5vl6dTlsTi+DPx2kuR5kgznDqJdAWky7M52TeHcYtwq6vrBo3Iwtdaq3VsEzfEhz8jWUfFZOFcbhuqq1WNGesa5RKGZE3A5O22zQPw563MzrntbD5n5X1ppz/xhZS2nSOvLhfjVQfNteStzcO4VGussVX2ifNKh4t1dGASoNB3TYuzogyMMZJZDiJL7ecVIdQKdYIpsgei0vOObW9DKHu0SG62KFx9ratPtZfzKsMY1ykY8h7/TLxi6USu0W1EFKEhtlGXL6OKMJKccoy6CHMtD59nUdxOhMH4Sr0jXZOnAxyegqztMwgc6Tqk+P0LaTPKbLMraVaoMI6DDP14hSHHtZVcc8hsT2cYEUH9IMdFwYZugzQ0SQAzqU5Ohz1yqJUxV+09VHwmjaBnUQXQXBDugAjhfaPCuw7bYodprNb7JXpyosTNNXMaKgDsLrN5YXxTYvNEWBFZoMV/2sHuoghlUw8Nd3737/+f6H++8//nRzc//+z3e/ffrw9v3NzacPb3/5+OsfP1ZqPHKpUjuIQhxmoAOUWckndqBos2nbp7Kuy5onK54Mnrk/mehBJJdzhX1jVTiZsNtHiuHBWuaGuJ8IPg+7Q7gm6TZtaKNts3X7D0FAB5iceyz0yYmTm8u+rzGcsGTKTWO0Dl1/yvca0pIdFcccu9JQaEej3S4YLRMUJhQve3pyNqB2jjjVT32+uWNtA6anzVw53VbZHFRgG32ZTDTVs6qw7eI8hbWZ5Z5tbxOd3SLlgr6zirj+yAwduxFNRq3jEBZnndScw/ZwWi/2/LTLWni4SeNg0JUPrL4tnaNJ+1b30d7X9gofxxq+Gq9StTq6GF2nxKM8/6nyA/DKjMxd/YsYj3PnX3q3u5XiWtRgR839NNrwHjb0gvR5yxemCdp4yyiEwlpwzwor1cDd3es6SENI3YRE1XiKHZJcPUSSvHK3EbvJV5IpMmMosqdUzEOYUfm5Y0wcoYzCKAWdimJLYsS2VAdRKafpkkL61GhArlZvYIK7vwEXqAGFhAcAAA==';
const dev = process.env.OWNER_NUMBER || '256751617788';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By ZIK TECH GOD';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '🫟,🫟';

const botPrefix = process.env.PREFIX || "?";
const botAuthor = process.env.OWNER_NAME || "𝚂𝚄𝙿𝚁𝙴𝙼𝙴  𝙻𝙴𝙰𝙳𝙴𝚁";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2080";
const botUrl = process.env.BOT_PIC || "https://i.ibb.co/PsZnb9NH/0d81ac6b1fb1.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "ŦƐƇĤ  ƓᎾ🅓  🅩ĪҠ";
const botPackname = process.env.BOT_PACKNAME || "KEITH-MD";
const botMode = process.env.BOT_MODE || "private";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";
const autosocialdownload = process.env.AUTO_SOCIAL_DOWNLOAD || "false";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  autosocialdownload,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
