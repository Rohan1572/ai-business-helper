/* global globalThis */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-DWG2XG6XS5";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (globalThis.gtag) {
      return;
    }

    globalThis.dataLayer = globalThis.dataLayer || [];

    function gtag() {
      globalThis.dataLayer.push(arguments);
    }

    globalThis.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, {
      send_page_view: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (typeof globalThis.gtag === "function") {
      globalThis.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}
