// blinkit-search.js
import axios from "axios";

// Your query
const query = "dosa";

// POST payload (use the one from your browser network tab)
const payload = {
  // Replace with the actual payload JSON you saw in browser DevTools -> Network -> Request Payload
  page: 1,
  page_size: 24,
  filters: [],
  sort: "",
  meta: {}
};

// Headers (copied from the browser request)
const headers = {
  "accept": "*/*",
  "accept-encoding": "gzip, deflate, br, zstd",
  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
  "app_client": "consumer_web",
  "app_version": "1010101010",
  "auth_key": "c761ec3633c22afad934fb17a66385c1c06c5472b4898b866b7306186d0bb477",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "cookie": "_gcl_au=1.1.1322712108.1751568810; _fbp=fb.1.1751568810472.9469190274657873; gr_1_deviceId=ce277705-0ae8-4ff0-8766-754a659415e5; city=; gr_1_lat=26.4854407; gr_1_lon=74.6317353; gr_1_locality=2352; gr_1_landmark=undefined; _gid=GA1.2.1082835636.1753908046; _ga=GA1.2.508170117.1751568810",
  "device_id": "ce277705-0ae8-4ff0-8766-754a659415e5",
  "lat": "26.4854407",
  "lon": "74.6317353",
  "origin": "https://blinkit.com",
  "pragma": "no-cache",
  "referer": `https://blinkit.com/s/?q=${query}`,
  "rn_bundle_version": "1009003012",
  "sec-ch-ua": `"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"`,
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": `"macOS"`,
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "session_uuid": "d697e8ed-aacc-4d12-9043-f1fe9a2caae1",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
  "web_app_version": "1008010016"
};

async function searchBlinkit() {
  try {
    const url = `https://blinkit.com/v1/layout/search?q=${encodeURIComponent(query)}&search_type=type_to_search`;

    const response = await axios.post(url, payload, { headers });

    console.log("✅ Blinkit search results:");
    console.log(JSON.stringify(response.data, null, 2));

  } catch (error) {
    console.error("❌ Error:", error.response ? error.response.data : error.message);
  }
}

searchBlinkit();
