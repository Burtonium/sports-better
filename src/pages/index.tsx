import type { Event } from "@prisma/client";
import Head from "next/head";
import { useState } from "react";
import BetModal from "~/components/BetModal";
import Layout from "~/components/layout/Layout";

import { api } from "~/utils/api";

export default function Home() {
  const events = api.events.getLatest.useQuery();
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);

  return (
    <>
      <Head>
        <title>Sports Better</title>
        <meta name="description" content="Sports betting app template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="relative overflow-x-auto">
          <BetModal event={selectedEvent} onDismiss={() => setSelectedEvent(undefined)} />
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event name
                </th>
                <th scope="col" className="px-6 py-3">
                  Odds
                </th>
                <th scope="col" className="px-6 py-3">
                </th>
              </tr>
            </thead>
            <tbody>
              {events.data?.map((event) => (
                <tr key={event.eventId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {event.eventName}
                  </th>
                  <td className="px-6 py-4">
                    {event.odds.toString()}
                  </td>

                  <td className="px-6 py-4">
                    <button onClick={() => setSelectedEvent(event)} className="btn">
                      Bet
                    </button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}