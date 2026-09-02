# Deploying the Uchumi Langata Road POS

The app works fully offline on its own — `restaurantOrders` is always
saved to the browser's `localStorage` first. Google Sheets is only a
backup/monitoring copy. You can skip all of this and the till/manager
pages still work; orders just won't leave the device.

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like **Uchumi Langata Road — Orders**.
3. You don't need to add headers yourself — the script creates an `Orders` tab with the correct header row the first time it runs.

## 2. Add the script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete the placeholder code in `Code.gs`.
3. Paste in the full contents of the `Code.gs` file from this project.
4. Click the **Save** icon (or `Ctrl/Cmd + S`).

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Next to "Select type", click the gear icon and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Google will ask you to authorize the script — click through the consent screens (you'll see an "unverified app" warning since this is your own script; click **Advanced → Go to (project name)**).
6. Copy the **Web app URL** it gives you — it looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Connect the app to the sheet

1. Open `manager.html` in the browser (on the till device, or any device — settings are per-device).
2. Log in with the manager password (default `uchumi2025`).
3. Go to **Settings → Google Sheets Web App URL**, paste the URL from step 3, and click **Save**.
4. From then on, every new order and every cancellation will try to sync automatically. If the device is offline, orders queue up in **Manager → Pending sync queue** and retry automatically every 30 seconds, or immediately via **Force sync now**.

## 5. Change the defaults

Also in **Manager → Settings**, before handing the device to staff:

- **Manager password** — default is `uchumi2025`
- **Cancel order PIN** — default is `1234`, required to cancel any order from the till

## Notes

- Because Apps Script Web Apps don't send CORS headers back to a plain browser `fetch`, the app sends sync requests with `mode: 'no-cors'`. This means it can't read Google's response — it treats "the request went out" as success and only queues for retry on a genuine network failure (offline, blocked, DNS error). If you ever see rows missing in the Sheet despite the queue being empty, check the Apps Script **Executions** log (in the Apps Script editor) for errors on the `doPost` side.
- If you rename the `Orders` tab, update the `SHEET_NAME` constant at the top of `Code.gs` to match.
- Re-deploying the script (Deploy → Manage deployments → Edit → New version) is required any time you change `Code.gs`, otherwise the live Web App keeps running the old code.
