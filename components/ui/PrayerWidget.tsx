"use client";

import { useEffect, useState } from "react";

type PrayerName = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";

type ApiTimings = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
};

const PRAYER_ORDER: PrayerName[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

function parseTime(timeStr: string): { hours: number; minutes: number } {
  // Format is "HH:MM" or "HH:MM (BST)"
  const clean = timeStr.split(" ")[0];
  const [h, m] = clean.split(":").map(Number);
  return { hours: h, minutes: m };
}

function getNextPrayer(
  timings: ApiTimings
): { name: PrayerName; time: string } | null {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (const prayer of PRAYER_ORDER) {
    const { hours, minutes } = parseTime(timings[prayer]);
    const prayerMinutes = hours * 60 + minutes;
    if (prayerMinutes > nowMinutes) {
      return { name: prayer, time: timings[prayer].split(" ")[0] };
    }
  }

  // All prayers passed today — next is Fajr tomorrow
  return { name: "Fajr", time: timings.Fajr.split(" ")[0] };
}

function formatDisplayTime(timeStr: string): string {
  const [h, m] = timeStr.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

export default function PrayerWidget() {
  const [prayer, setPrayer] = useState<{ name: PrayerName; time: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchByCoords(lat: number, lng: number) {
      const today = Math.floor(Date.now() / 1000);
      const url = `https://api.aladhan.com/v1/timings/${today}?latitude=${lat}&longitude=${lng}&method=2`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.data.timings as ApiTimings;
    }

    async function fetchByCity() {
      const today = Math.floor(Date.now() / 1000);
      const url = `https://api.aladhan.com/v1/timingsByCity/${today}?city=London&country=UK&method=2`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.data.timings as ApiTimings;
    }

    async function load() {
      try {
        let timings: ApiTimings;

        if ("geolocation" in navigator) {
          try {
            const position = await new Promise<GeolocationPosition>(
              (resolve, reject) =>
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                  timeout: 5000,
                })
            );
            timings = await fetchByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
          } catch {
            // Geolocation denied or timed out — fall back to London
            timings = await fetchByCity();
          }
        } else {
          timings = await fetchByCity();
        }

        if (!cancelled) {
          const next = getNextPrayer(timings);
          setPrayer(next);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setFailed(true);
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading || failed || !prayer) return null;

  return (
    <span className="text-xs text-muted/70 flex items-center gap-1.5">
      <span aria-hidden="true">🕌</span>
      <span>
        Next:{" "}
        <span className="text-muted">
          {prayer.name} · {formatDisplayTime(prayer.time)}
        </span>
      </span>
    </span>
  );
}
