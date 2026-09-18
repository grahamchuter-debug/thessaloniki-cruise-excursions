# Thessaloniki Cruise Excursions — remaining destination work

Config generated for `thessaloniki` with domain `thessalonikicruiseexcursions.com` and `contactMode: "central"` (info@wowatour.com).

Complete these before production (also track in `src/config/completion.ts`):

- [x] Hero + excursion images in `public/images/` (Wikimedia localhost stand-ins — replace before launch)
- [x] Tours in `src/data/excursions.ts` + empty `bookable-products.ts` + empty Worker `catalogue.ts`
- [x] Set `bookingStatus: comingSoon` per product (no public pricing)
- [ ] Cruise schedules — framework ready; publish verified calls only
- [x] Local guides in `src/data/experiences.ts` + `highlights.ts`
- [x] Footer links in `src/config/footer.ts`
- [x] Home + port-guide editorial copy
- [ ] `wrangler d1 create thessaloniki-bookings` → set database_id
- [ ] Stripe + Resend secrets
- [ ] Confirm DNS for thessalonikicruiseexcursions.com
- [ ] Configure hello@ / bookings@ / privacy@ forwarding, then set `contactMode: "local"`
- [ ] Add site to World-2.0 `sites.json`
- [ ] Replace placeholder images with licensed production assets
- [ ] Verify EUR selling prices and enable live booking
- [ ] Run `npm run qa:full` (includes Domain Audit)
- [ ] Deploy (out of scope for localhost Gold build)
