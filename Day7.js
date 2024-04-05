// Currecy convertor

function convertCurrency(amount,fromCurrency,toCurrency) 
{
    fetch(`https://openexchangerates.org/api/latest.json?app_id=df490f038f904c10a66c5c4bdbda15fd&base=${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = amount * exchangeRate;
            console.error('RESULT :', result);
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
        });
}

var fromCurrency='USD';
var toCurrency='EUR';
var amount=10000;

convertCurrency(amount,fromCurrency,toCurrency);
