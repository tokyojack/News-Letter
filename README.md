<h2  align="center">News-Letter</h2>
<p  align="center">A website where people sign up for a newsletter that gets sent to their email</p>

<br/>


## Installing

1. Clone this repo ```git clone https://github.com/tokyojack/News-Letter```
2. Run ```npm install``` for the packages
3. Go into ```/config/config.js``` and configure the SQL database
4. Go into ```/config/config.js``` and configure the email account (HAS TO BE GMAIL!). Make sure "Less Secure apps" is enabled within it.
5. Run ```node scripts/createDatabase.js``` in your console.
6. Launch the node server ```node index.js```
7. Check out it within your browser.

## Usage

Add your email, then test it with logging in to the admin panel (/login) (Default login is: **username: cat | password: cat**)

Click "Send Email", fill out the form and it'll send it to people whom have signed up.

##

Now you've just install the program! People may be terrified with the power you've gained! ```┬┴┬┴┤(･_├┬┴┬┴```!
