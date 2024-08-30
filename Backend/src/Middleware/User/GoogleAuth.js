const { google } = require('googleapis');
const { UserModel } = require('../../Models/User');
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();


const oauth2Client = new OAuth2(
    process.env.GOOGLE_CALENDER_API_KEY,
    process.env.GOOGLE_CALENDER_SECRET_KEY,
    'http://localhost:9090/user/oauth2callback'
);

const google_Auth = (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/calendar'],
    });
    res.redirect(url);
}

const google_Auth_callback = async(req,res) =>{
    const student_id = "66d0bb6b30b9051fc6c91d75";
    const { code } = req.query;
    if (!code) {
        return res.status(400).send('Authorization code missing.');
    }

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const user = await UserModel.findById(student_id);
        if (!user) {
            return res.status(404).send('User not found.');
        }
        // Add the new tokens to the user's tokens array
        user.tokens.push({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            scope: tokens.scope || ['https://www.googleapis.com/auth/calendar'],
            expiryDate: tokens.expiry_date ? new Date(tokens.expiry_date) : undefined,
        });

        // Save the updated user document
        await user.save();

        res.json({status:1,messege:"Auth Successfulll"})
    } catch (error) {
        console.error('Error getting tokens:', error);
        res.status(500).send('Error during OAuth callback.');
    }
}




module.exports  = {
    google_Auth,
    google_Auth_callback
}