function containsNumber(string) {
    var pattern = /\d/;
    return pattern.test(string);
}

function CheckName(name) {
    var FullNameError = document.querySelector('.error.fname')

    if (name == "") {
        FullNameError.innerHTML = 'Please input your full name'
        FullNameError.style.opacity = '1'
        return false;
    } else { 
        FullNameError.style.opacity = '0'
    }

    if (containsNumber(name) && name !== "") {
        FullNameError.innerHTML = 'Invalid name'
        FullNameError.style.opacity = '1'
        return false;
    } else {
        FullNameError.style.opacity = '0'
    }

    return true;
}

function CheckEmail(email) {

    var EmailError = document.querySelector('.error.email')
    if(email.includes('@gmail.com')) {
        EmailError.style.opacity = '0'
        return true;
    } else {
        EmailError.innerHTML = 'Invalid email'
        EmailError.style.opacity = '1'
        return false;
    }
}


function CheckCountryCity(country, city) {
    return fetch('CityCountry.json')
        .then(response => response.json())
        .then(data => {
            const countryNames = Object.keys(data);
    
            var CountryError = document.querySelector('.error.country');
            var CityError = document.querySelector('.error.city');
    
            if (!countryNames.includes(country)) {
                CountryError.innerHTML = 'Invalid country';
                CountryError.style.opacity = '1';
                return false;
            } else {
                CountryError.style.opacity = '0';
                var cityNames = data[country];
                
                if (!cityNames.includes(city)) {
                    CityError.innerHTML = 'Invalid city';
                    CityError.style.opacity = '1';
                    return false;
                } else {
                    CityError.style.opacity = '0';
                    CountryError.style.opacity = '0';
                    return true;
                }
            }
        });
}




function CheckMessage(message) {

    var MessageError = document.querySelector('.error.message')
    if(message === '') {
        MessageError.innerHTML = 'Please write a message'
        MessageError.style.opacity = '1'
        return false;
    } else {
        MessageError.style.opacity = '0'
        return true;
    }
}

function Capitalize(string) {

    const text = string
    const words = text.split(' ');

    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
      
    return capitalizedWords.join(' ');

}
































document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var FullName = document.getElementById("fname");
    var Email = document.getElementById("email");
    var Country = document.getElementById("country");
    var City = document.getElementById("city");
    var Message = document.getElementById('message');


    NameValid = CheckName(FullName.value)
    EmailValid = CheckEmail(Email.value)
    Country_CityValid = CheckCountryCity(Country.value, City.value)
    MessageValid = CheckMessage(Message.value)

    console.log(NameValid, EmailValid, Country_CityValid)

    if(NameValid && EmailValid && Country_CityValid && MessageValid) {
        this.submit();
    }
});





document.getElementById('fname').addEventListener('blur', function() {

    var FullName = document.getElementById("fname");      
    FullName.value = Capitalize(FullName.value)
    CheckName(FullName.value)

})

document.getElementById('email').addEventListener('blur', function() {

    var Email = document.getElementById("email");
    CheckEmail(Email.value);

})

document.getElementById('country').addEventListener('blur', function() {

    var Country = document.getElementById("country");
    var City = document.getElementById("city");
    Country.value = Capitalize(Country.value);
    City.value = Capitalize(City.value);

    CheckCountryCity(Country.value, City.value);

})

document.getElementById('city').addEventListener('blur', function() {

    var Country = document.getElementById("country");
    var City = document.getElementById("city");
    Country.value = Capitalize(Country.value);
    City.value = Capitalize(City.value);

    CheckCountryCity(Country.value, City.value);

})

document.getElementById('message').addEventListener('blur', function() {

    var Message = document.getElementById('message');

    CheckMessage(Message.value);

})