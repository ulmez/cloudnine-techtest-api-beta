# cloudnine-techtest-api-beta
### cloudnine-techtest-api-beta
Inlämning av: Ulf Zackrisson

En README fil för denna repository.

### URL adress till API:en:
https://cloud-nine-api.herokuapp.com/

### För att köra igång projektet lokalt:
Gå in i projekt mappen genom terminalen och skriv:

yarn

yarn run dev

### Såhär ser datan ut som är sparad i min mlab databas:
{
    "_id": {
        "$oid": "5d0763d2fb6fc00e79ab1161"
    },
    "name": "Sax & Fön",
    "image": "url address to image here",
    "address": {
        "street": "Rådmansgatan",
        "street_number": "46",
        "postcode": "113 57",
        "city": "Stockholm"
    },
    "price": 320,
    "time": "30 min",
    "opening_time": {
        "monday": {
            "open": "05:00",
            "close": "09:00"
        },
        "tuesday": {
            "open": "18:00",
            "close": "23:00"
        },
        "wednesday": "closed",
        "thursday": {
            "open": "07:00",
            "close": "13:00"
        },
        "friday": {
            "open": "02:00",
            "close": "04:00"
        },
        "saturday": "closed",
        "sunday": "closed"
    },
    "phone": "08-522 389 20",
    "site_address": "www.salongweb.se",
    "about": "Lorem 1 ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
    "types": [
        "hair",
        "nail"
    ],
    "grades": [
        {
            "grade": 3
        },
        {
            "grade": 4
        },
        {
            "grade": 2
        }
    ]
},
{
    "_id": {
        "$oid": "5d0989dffb6fc00e79ac4fba"
    },
    "name": "Hårizont",
    "image": "url address to image here",
    "address": {
        "street": "Sveavägen",
        "street_number": "19",
        "postcode": "115 22",
        "city": "Stockholm"
    },
    "price": 200,
    "time": "45 min",
    "opening_time": {
        "monday": {
            "open": "08:00",
            "close": "16:00"
        },
        "tuesday": {
            "open": "08:00",
            "close": "16:00"
        },
        "wednesday": {
            "open": "09:00",
            "close": "17:00"
        },
        "thursday": {
            "open": "10:00",
            "close": "18:00"
        },
        "friday": {
            "open": "11:00",
            "close": "18:00"
        },
        "saturday": "closed",
        "sunday": "closed"
    },
    "phone": "08-756 121 76",
    "site_address": "www.harizont.com",
    "about": "Lorem 2 ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
    "types": [
        "hair"
    ],
    "grades": [
        {
            "grade": 4
        },
        {
            "grade": 3
        },
        {
            "grade": 2
        },
        {
            "grade": 4
        },
        {
            "grade": 4
        }
    ]
},
{
    "_id": {
        "$oid": "5d0ab3f5fb6fc00e79acf5db"
    },
    "name": "Hårhuset",
    "image": "url address to image here",
    "address": {
        "street": "Krukmakargatan",
        "street_number": "3",
        "postcode": "118 68",
        "city": "Stockholm"
    },
    "price": 650,
    "time": "50 min",
    "opening_time": {
        "monday": {
            "open": "10:00",
            "close": "21:00"
        },
        "tuesday": {
            "open": "10:00",
            "close": "21:00"
        },
        "wednesday": {
            "open": "10:00",
            "close": "21:00"
        },
        "thursday": "Closed",
        "friday": {
            "open": "12:00",
            "close": "20:00"
        },
        "saturday": {
            "open": "12:00",
            "close": "18:00"
        },
        "sunday": "closed"
    },
    "phone": "08-625 555 44",
    "site_address": "www.harhuset.se",
    "about": "Lorem 3 ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
    "types": [
        "hair",
        "massage"
    ],
    "grades": [
        {
            "grade": 2
        },
        {
            "grade": 1
        },
        {
            "grade": 1
        },
        {
            "grade": 2
        }
    ]
},
{
    "_id": {
        "$oid": "5d0ab406fb6fc00e79acf5e6"
    },
    "name": "Hair & Nu",
    "image": "url address to image here",
    "address": {
        "street": "Götgatan",
        "street_number": "74",
        "postcode": "118 54",
        "city": "Stockholm"
    },
    "price": 710,
    "time": "25 min",
    "opening_time": {
        "monday": {
            "open": "07:00",
            "close": "15:00"
        },
        "tuesday": {
            "open": "08:00",
            "close": "16:00"
        },
        "wednesday": {
            "open": "08:00",
            "close": "16:00"
        },
        "thursday": {
            "open": "08:00",
            "close": "16:00"
        },
        "friday": {
            "open": "09:00",
            "close": "14:00"
        },
        "saturday": "closed",
        "sunday": "closed"
    },
    "phone": "08-753 734 34",
    "site_address": "www.hairandnow.com",
    "about": "Lorem 4 ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
    "types": [
        "hair",
        "nail",
        "massage",
        "face"
    ],
    "grades": [
        {
            "grade": 4
        },
        {
            "grade": 4
        },
        {
            "grade": 5
        },
        {
            "grade": 4
        },
        {
            "grade": 5
        },
        {
            "grade": 5
        }
    ]
},
{
    "_id": {
        "$oid": "5d0ab419fb6fc00e79acf5ee"
    },
    "name": "Hårley Davidson",
    "image": "url address to image here",
    "address": {
        "street": "Ringvägen",
        "street_number": "8",
        "postcode": "114 22",
        "city": "Stockholm"
    },
    "price": 450,
    "time": "20 min",
    "opening_time": {
        "monday": {
            "open": "12:00",
            "close": "20:00"
        },
        "tuesday": "closed",
        "wednesday": {
            "open": "12:00",
            "close": "20:00"
        },
        "thursday": {
            "open": "12:00",
            "close": "20:00"
        },
        "friday": {
            "open": "13:00",
            "close": "19:00"
        },
        "saturday": "closed",
        "sunday": "closed"
    },
    "phone": "08-888 333 44",
    "site_address": "www.harleyd.com",
    "about": "Lorem 5 ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
    "types": [
        "hair",
        "skin"
    ],
    "grades": [
        {
            "grade": 2
        },
        {
            "grade": 3
        },
        {
            "grade": 2
        }
    ]
},
{
    "_id": {
        "$oid": "5d0ab42efb6fc00e79acf5f5"
    },
    "name": "The Cheapest",
    "image": "url address to image here",
    "address": {
        "street": "Lunarvägen",
        "street_number": "99",
        "postcode": "145 77",
        "city": "Stockholm"
    },
    "price": 120,
    "time": "15 min",
    "opening_time": {
        "monday": {
            "open": "08:00",
            "close": "19:00"
        },
        "tuesday": {
            "open": "08:00",
            "close": "19:00"
        },
        "wednesday": {
            "open": "08:00",
            "close": "19:00"
        },
        "thursday": {
            "open": "09:00",
            "close": "18:00"
        },
        "friday": {
            "open": "10:00",
            "close": "18:00"
        },
        "saturday": "closed",
        "sunday": "closed"
    },
    "phone": "08-323 355 67",
    "site_address": "www.thecheapest.se",
    "about": "Lorem 6 ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
    "types": [
        "massage",
        "skin",
        "face"
    ],
    "grades": [
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        },
        {
            "grade": 3
        }
    ]
}