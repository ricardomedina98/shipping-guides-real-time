const socket = io();

// Listen for the 'counterUpdate' event
socket.on('counterUpdate', (count) => {
    // Update the counter value
    document.getElementById('counter').textContent = count;
});


document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    let token = document.getElementById('token').value;

    let originName = document.getElementById('origin-name').value;
    let originCompany = document.getElementById('origin-company').value;
    let originEmail = document.getElementById('origin-email').value;
    let originPhone = document.getElementById('origin-phone').value;
    let originStreet = document.getElementById('origin-street').value;
    let originNumber = document.getElementById('origin-number').value;
    let originDistrict = document.getElementById('origin-district').value;
    let originCity = document.getElementById('origin-city').value;
    let originState = document.getElementById('origin-state').value;
    let originCountry = document.getElementById('origin-country').value;
    let originPostalCode = document.getElementById('origin-postalCode').value;
    let originReference = document.getElementById('origin-reference').value;

    let destinationName = document.getElementById('destination-name').value;
    let destinationCompany = document.getElementById('destination-company').value;
    let destinationEmail = document.getElementById('destination-email').value;
    let destinationPhone = document.getElementById('destination-phone').value;
    let destinationStreet = document.getElementById('destination-street').value;
    let destinationNumber = document.getElementById('destination-number').value;
    let destinationDistrict = document.getElementById('destination-district').value;
    let destinationCity = document.getElementById('destination-city').value;
    let destinationState = document.getElementById('destination-state').value;
    let destinationCountry = document.getElementById('destination-country').value;
    let destinationPostalCode = document.getElementById('destination-postalCode').value;
    let destinationReference = document.getElementById('destination-reference').value;

    let packageContent = document.getElementById('package1-content').value;
    let packageAmount = document.getElementById('package1-amount').value;
    let packageType = document.getElementById('package1-type').value;
    let packageLength = document.getElementById('package1-length').value;
    let packageWidth = document.getElementById('package1-width').value;
    let packageHeight = document.getElementById('package1-height').value;
    let packageWeight = document.getElementById('package1-weight').value;
    let packageInsurance = document.getElementById('package1-insurance').value;
    let packageDeclaredValue = document.getElementById('package1-declaredValue').value;
    let packageWeightUnit = document.getElementById('package1-weightUnit').value;
    let packageLengthUnit = document.getElementById('package1-lengthUnit').value;



    let carrier = document.getElementById('shipment-carrier').value;
    let service = document.getElementById('shipment-service').value;
    let shipmentType = document.getElementById('shipment-type').value;

    let printFormat = document.getElementById('settings-printFormat').value;
    let printSize = document.getElementById('settings-printSize').value;
    let comments = document.getElementById('settings-comments').value;

    const data = {
        "origin": {
            "name": originName,
            "company": originCompany,
            "email": originEmail,
            "phone": originPhone,
            "street": originStreet,
            "number": originNumber,
            "district": originDistrict,
            "city": originCity,
            "state": originState,
            "country": originCountry,
            "postalCode": originPostalCode,
            "reference": originReference
        },
        "destination": {
            "name": destinationName,
            "company": destinationCompany,
            "email": destinationEmail,
            "phone": destinationPhone,
            "street": destinationStreet,
            "number": destinationNumber,
            "district": destinationDistrict,
            "city": destinationCity,
            "state": destinationState,
            "country": destinationCountry,
            "postalCode": destinationPostalCode,
            "reference": destinationReference
        },
        "packages": [
            {
                "content": packageContent,
                "amount": packageAmount,
                "type": packageType,
                "dimensions": {
                    "length": packageLength,
                    "width": packageWidth,
                    "height": packageHeight
                },
                "weight": packageWeight,
                "insurance": packageInsurance,
                "declaredValue": packageDeclaredValue,
                "weightUnit": packageWeightUnit,
                "lengthUnit": packageLengthUnit
            }
        ],
        "shipment": {
            "carrier": carrier,
            "service": service,
            "type": shipmentType
        },
        "settings": {
            "printFormat": printFormat,
            "printSize": printSize,
            "comments": comments
        }
    };


    try {

        const response = await fetch('/generate-guide', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();

        if (response.status === 200) {
            alert(result.message);
        } else {
            alert('Error al generar la guía', result);
        }
    } catch (error) {
        alert('Error al generar la guía');
    }

});