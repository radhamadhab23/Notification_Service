const dotenv=require('dotenv');
dotenv.config();
module.exports={
    PORT:process.env.PORT || 3000
    ,GMAIL_EMAIL:process.env.GMAIL_EMAIL || 'madhabradha969@gmail.com'
    ,GMAIL_PASS:process.env.GMAIL_PASS || 'mawbkhqhdziitdf'
};
