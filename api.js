// Include your existing API-related code and functions

// Add an event listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the Instagram authorization link element
    const instagramLink = document.getElementById('instagramLink');

    // Add a click event listener to the link
    instagramLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Open Instagram authorization window
        const clientId = 'YOUR_CLIENT_ID';
        const redirectUri = 'YOUR_REDIRECT_URI';
        const scope = 'user_profile,user_media';
        const responseType = 'code';
        const authUrl = `https://api.instagram.com/oauth/authorize?client_id=$750284606865927&redirect_uri=$https://preferredoutcomes.github.io/index1.html&scope=user_profile,user_media&response_type=code`;
        window.location.href = authUrl;
    });
});

// Add your existing API-related functions here
// For example:
function exchangeAuthorizationCode(authorizationCode) {
    // Your code to exchange authorization code for access token using axios
}

function verifyUserFollow() {
    // Your code to verify if the user has followed the Instagram page using the access token
}