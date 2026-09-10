"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,       // durasi animasi (ms)
      easing: "ease-out-cubic",
      once: true,          // animasi hanya sekali saat masuk viewport
      offset: 80,          // jarak dari bawah viewport sebelum trigger
      delay: 0,
    });
  }, []);

  return null;
}
