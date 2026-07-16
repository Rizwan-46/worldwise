import { useState } from "react";

export function useGeoLocation(defaultLocation = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(defaultLocation);

  function getLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition({ lat: latitude, lng: longitude });
        setIsLoading(false);
      },
      (err) => {
        setError("Failed to get location: " + err.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, error, position, getLocation };
}
