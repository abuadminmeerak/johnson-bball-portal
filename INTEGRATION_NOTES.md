# Johnson Basketball integration status

The private mediation form now validates inputs, sends a JSON POST to `VITE_FEEDBACK_ENDPOINT`, handles network failures, and only shows success after an HTTP 2xx response.

**Not live/complete:** No endpoint was supplied. This is a prepared source update, not a verified integration or compiled build. Set `VITE_FEEDBACK_ENDPOINT` to a server-side, CORS-enabled endpoint that securely accepts browser requests and forwards the fields to GHL. Avoid exposing private GHL API tokens in browser code. GHL workflow currently triggers on native `Form 1`; an inbound webhook or server-side adapter must be configured and mapped to the workflow before the app can trigger it.

Payload: `{ name, email, rating, feedback, source }`. Test 2-star submission and coach alert; 5-star route; review access for all ratings. Confirm the URL tied to the existing QR code before deploying.
