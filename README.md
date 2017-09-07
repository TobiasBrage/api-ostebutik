# osteAPI Dokuemntation

## Resurser

### GET /cheeses

Resursen repræsenterer alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON
[{
    "varenr": 1111,
    "navn": "St Clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St Clemens",
    "antal": 15,
    "beskrivelse": {
        "tekst": "Denne ost er bare super smagfuld og dejlig indeni.",
        "smag": "mild",
        "vægt": 300,
        "billede": "cheeseImg1.jpg"
    }
}]
```

### GET /cheeses/\<varenummer>

Resursen repræsenterer en eneklt ost i kartoteket.
Resursen er formateret på følgende måde:

```JSON
{
    "varenr": 1111,
    "navn": "St Clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St Clemens",
    "antal": 15,
    "beskrivelse": {
        "tekst": "Denne ost er bare super smagfuld og dejlig indeni.",
        "smag": "mild",
        "vægt": 300,
        "billede": "cheeseImg1.jpg"
    }
}
```