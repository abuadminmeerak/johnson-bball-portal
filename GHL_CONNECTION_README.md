# Johnson Basketball — GHL-connected build

This build displays the existing GoHighLevel form inline in the Johnson Basketball branded portal.

GHL form ID: `tKHjTmv0RVdmBm3fecNI`

No demo-only submission logic remains in App.tsx. Parent data is entered directly into the GHL-hosted iframe; it is not submitted by custom JavaScript.

## Test after deployment
1. Open the new Vercel URL and confirm the GHL form appears.
2. Submit one low rating and one high rating with distinct test names.
3. In GHL, check Form 1 > Submissions and verify both entries and rating values.
4. Verify the GHL workflow branches and notifications separately.
5. Check mobile display and any consent fields.

The Google review link remains available independently of rating.

This package has not been deployed or end-to-end tested.
