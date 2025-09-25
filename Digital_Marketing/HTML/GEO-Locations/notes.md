1. What is the Geolocation API?

The Geolocation API is a feature in modern web browsers that lets websites find out the user’s location (with their permission).

It can use GPS, Wi-Fi, mobile networks, or IP address to detect where the user is.

2. Why is it Important in Digital Marketing & Web Design?

Personalized Marketing → Show ads, offers, or content based on location.

Local SEO & Business → Highlight nearest stores, branches, or services.

User Experience → Automatically suggest nearby restaurants, delivery options, or events.

Analytics → Understand where your visitors come from and target them better.

## this is errro handle code and optimise way to do the code of the...

```html
<button id="locBtn">Get My Location</button>

<p id="output"></p>

<script>
  const output = document.getElementById('output');
  document.getElementById('locBtn').addEventListener('click', getLocation);

  function getLocation() {
    if (!navigator.geolocation) {
      output.textContent = 'Geolocation not supported by your browser';
      return;
    }
    output.textContent = 'Requesting location…';
    const options = { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 };
    navigator.geolocation.getCurrentPosition(showPosition, showError, options);
  }

  function showPosition(position) {
    const { latitude, longitude, accuracy } = position.coords;
    output.innerHTML =
      `Latitude: ${latitude.toFixed(6)}<br>` +
      `Longitude: ${longitude.toFixed(6)}<br>` +
      `Accuracy: ${accuracy} meters`;
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        output.textContent =
          'Permission denied. Allow location access to continue.';
        break;
      case error.POSITION_UNAVAILABLE:
        output.textContent = 'Position unavailable.';
        break;
      case error.TIMEOUT:
        output.textContent = 'Request timed out. Try again.';
        break;
      default:
        output.textContent = 'An unknown error occurred.';
    }
  }
</script>
```
