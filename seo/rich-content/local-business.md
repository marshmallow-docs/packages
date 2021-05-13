# Video Object

Below you will find the code you can use to generate a `Video Object` rich data JSON.

### Your code

```php
$address = SchemaPostalAddress::make()
	->street('Da Costastraat 8')
	->locality('Alphen aan den Rijn')
	->region('Zuid-Holland')
	->postalCode('2406 AT')
	->country('NL');

$geo = SchemaGeoCoordinates::make()
	->latitude(37.293058)
	->longitude(-121.988331);

$openingHoursSpecification = SchemaOpeningHoursSpecification::make()
	->dayOfWeek([
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	])
	->opens('08:00')
	->closes('23:00');

$openingHoursSpecificationSunday = SchemaOpeningHoursSpecification::make()
	->dayOfWeek('Sunday')
	->opens('10:00')
	->closes('16:00');

$business = SchemaLocalBusiness::make(config('app.name'))
	->id(config('app.url'))
	->type('Store')
	->image('https://example.com/photo-1.jpg')
	->image('https://example.com/photo-2.jpg')
	->image('https://example.com/photo-3.jpg')
	->image('https://example.com/photo-4.jpg')
	->url(config('app.url'))
	->priceRange('$$$')
	->telephone('0628998954')
	->address($address)
	->openingHoursSpecification($openingHoursSpecification)
	->openingHoursSpecification($openingHoursSpecificationSunday)
	->geo($geo);
```

### The result

```json
[
    {
        "@context": "https://schema.org/",
        "@type": "Store",
        "@id": "https://packages.test",
        "name": "MM Packages",
        "image": [
            "https://example.com/photo-1.jpg",
            "https://example.com/photo-2.jpg",
            "https://example.com/photo-3.jpg",
            "https://example.com/photo-4.jpg"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Alphen aan den Rijn",
            "addressRegion": "Zuid-Holland",
            "postalCode": "2406 AT",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.293058,
            "longitude": -121.988331
        },
        "url": "https://packages.test",
        "priceRange": "$$$",
        "telephone": "0628998954",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "08:00",
                "closes": "23:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "16:00"
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://packages.test",
        "logo": "https://marshmallow.dev/cdn/media/mrmallow-250x250.png"
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://packages.test"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "This is a test page entered in English",
                "item": "https://packages.test/this-is-a-test-page-entered-in-english"
            }
        ]
    }
]
```

<EditOnGithub repo_name="packages" edit_url="seo/rich-content/video-object.md"/>
