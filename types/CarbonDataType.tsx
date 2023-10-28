// modelled off a successful response from https://api.websitecarbon.com/

export default interface CarbonDataType {
    // TODO: define the structure of the response from the API
    // note: start here! the following line allows anything to be a part of the object, which isn't useful for us
    "url": "https://www.wholegraindigital.com/",
    "green": true,
    "bytes": 443854,
    "cleanerThan": 0.83,
    "statistics": {
        "adjustedBytes": 335109.77,
        "energy": 0.0005633320052642376,
        "co2": {
            "grid": {
                "grams": 0.26758270250051286,
                "litres": 0.14882949913078525
            },
            "renewable": {
                "grams": 0.24250694721722435,
                "litres": 0.13488236404222018
            }
        }
    }
}
