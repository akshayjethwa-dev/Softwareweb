import { useState, useEffect } from 'react';
import { fetchSiteConfig } from '../lib/queries';
import { siteConfig as fallback } from '../content/siteConfig';

export function useSanityConfig() {
  // Initialize with your static fallback so the UI renders instantly
  const [config, setConfig] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSiteConfig()
      .then((data) => { 
        // Only update the state if Sanity actually returned data
        if (data) {
          setConfig(data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch config from Sanity:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { config, loading };
}