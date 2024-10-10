// JavaScript for Stripe Payment Processing

// Initialize Stripe
const stripe = Stripe('pk_test_51Q8So9P10MEa1FiehA2UP2XBnHvNbGmE6wmymLOqWK9zhZONSQdCbd6n4BOTnvNUY5aQeZxmJFCsyO6VGlGBN6Sq00Iu333agd');

// Function to handle product purchase
function buyProduct(amount) {
    stripe.redirectToCheckout({
        lineItems: [{ price: 'your-price-id-here', quantity: 1 }],
        mode: 'payment',
        successUrl: 'https://your-website.com/success',
        cancelUrl: 'https://your-website.com/cancel'
    }).then(function (result) {
        if (result.error) {
            // Handle any errors
            alert(result.error.message);
        }
    });
}
