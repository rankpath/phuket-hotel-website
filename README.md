# Phuket Hotel: hotel website demo

A seven-page static website for a fictional Sino-Portuguese heritage hotel in Phuket Old Town. Plain HTML, CSS and JavaScript, with no build step, so it runs on GitHub Pages as is.

Design and build by Adscraft Digital.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero, booking widget, USP banner, featured rooms, reviews, location |
| `rooms.html` | Rooms & Suites, with working filters |
| `room-detail.html` | Room detail: gallery, amenities, policies, booking card |
| `dining.html` | Dining & Bars |
| `experiences.html` | Experiences & Amenities, local guides |
| `offers.html` | Offers & Packages, with copy-to-clipboard promo codes |
| `contact.html` | Contact & Location: map, directions, inquiry form |

## What is a placeholder

This is a template, so the hotel-specific facts are bracketed for the client to fill in: `[RATE]`, `[X] min`, `[HOTEL ADDRESS]`, review scores and quotes, opening hours and policies.

The booking widget and the inquiry form are front-end only. Connect them to the hotel's booking engine and a form handler before going live.

## Photos

The photos are AI-generated and load from an external image host (the `data-fallback` URL on each `<img>`). To host them yourself, save a JPG with the exact name below into `images/`; the local file is used first. If neither loads, the slot shows a labelled block.

| File | Subject |
| --- | --- |
| `images/hero.jpg` | Full-screen hero video or carousel, pastel shophouse facade with arched windows and red lanterns |
| `images/room-ocean-king.jpg` | Ocean King bedroom |
| `images/room-family-suite.jpg` | Family Suite |
| `images/room-mandarin-suite.jpg` | Mandarin Suite |
| `images/room-ocean-twin.jpg` | Ocean Twin |
| `images/room-city-king.jpg` | City King |
| `images/room-city-twin.jpg` | City Twin |
| `images/bedroom-main-angle.jpg` | Bedroom, main angle |
| `images/balcony-view.jpg` | Balcony view |
| `images/bathroom.jpg` | Bathroom |
| `images/seating-area.jpg` | Seating area |
| `images/detail.jpg` | Detail |
| `images/dining-room-with-peranakan-floor-tiles.jpg` | Dining room with Peranakan floor tiles |
| `images/rooftop-bar-at-sunset.jpg` | Rooftop bar at sunset |
| `images/courtyard-cafe-with-rattan-chairs.jpg` | Courtyard cafe with rattan chairs |
| `images/spa-treatment-room.jpg` | Spa treatment room |
| `images/courtyard-pool.jpg` | Courtyard pool |
| `images/gym.jpg` | Gym |
| `images/concierge-desk.jpg` | Concierge desk |
| `images/offer-stay3.jpg` | Pool at golden hour |
| `images/offer-romance.jpg` | Dinner for two on the terrace |
| `images/offer-early.jpg` | Sunrise from a balcony |

## Run locally

Open `index.html` in a browser, or serve the folder with `python3 -m http.server`.
