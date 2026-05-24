import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Indian Radio in North Carolina | Bollywood & Telugu Radio Raleigh-Durham",
  description: "Radio Nyra is North Carolina's #1 Indian radio station. Stream Bollywood, Telugu, and Hindi music live on 99.9 FM, 101.9 FM, and 1490 AM across Raleigh, Durham, Cary, and Morrisville.",
  keywords: [
    "Indian radio North Carolina",
    "Indian radio Raleigh",
    "Desi radio NC",
    "Bollywood radio Raleigh",
    "Indian radio Durham",
    "South Asian radio North Carolina",
    "Hindi radio Cary NC",
    "Telugu radio Raleigh Durham",
    "Indian FM radio Triangle NC",
    "Radio Nyra North Carolina",
  ],
  alternates: { canonical: "/indian-radio-in-north-carolina" },
  openGraph: {
    title: "Indian Radio in North Carolina | Radio Nyra",
    description: "The #1 South Asian radio network in North Carolina broadcasting Bollywood & Telugu music 24/7 across Raleigh-Durham.",
    url: "https://www.radionyra.com/indian-radio-in-north-carolina",
  },
}

export default function IndianRadioNorthCarolinaPage() {
  return (
    <SeoPageLayout
      title="Indian Radio in North Carolina"
      subtitle="Serving the South Asian Community Across the Triangle, Piedmont & Beyond"
      stationKey="Hindi"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">North Carolina's #1 Indian Radio Station</h2>
          <p>
            Radio Nyra is the premier Indian radio station in North Carolina, connecting the vibrant South Asian
            community across the Triangle region and beyond. Broadcasting 24/7 from our studios in Raleigh-Durham,
            we serve hundreds of thousands of Indian-American families in Cary, Morrisville, Apex, Chapel Hill,
            Durham, and Greensboro with a unique mix of Bollywood, Tollywood, and regional music.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How to Tune In — FM Frequencies Across NC</h2>
          <p className="mb-4">
            You can listen to Radio Nyra on multiple terrestrial frequencies throughout North Carolina:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Frequency</th>
                  <th className="px-4 py-3 text-left font-bold">Coverage Area</th>
                  <th className="px-4 py-3 text-left font-bold">Language</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-bold">99.9 FM HD4</td>
                  <td className="px-4 py-3">Raleigh-Durham, Cary, Morrisville, Apex</td>
                  <td className="px-4 py-3">Hindi / Bollywood</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="px-4 py-3 font-bold">99.9 FM HD3</td>
                  <td className="px-4 py-3">Raleigh-Durham, Research Triangle</td>
                  <td className="px-4 py-3">Telugu / Tollywood</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-bold">101.9 FM</td>
                  <td className="px-4 py-3">Durham, Chapel Hill, Carrboro</td>
                  <td className="px-4 py-3">Hindi / Bollywood</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="px-4 py-3 font-bold">1490 AM</td>
                  <td className="px-4 py-3">Raleigh Metro</td>
                  <td className="px-4 py-3">South Asian Mix</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Daily Show Lineup</h2>
          <p className="mb-4">
            Radio Nyra features a full schedule of live, hosted programming Monday through Friday, keeping
            the North Carolina Indian community entertained and informed throughout the day.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Time (EST)</th>
                  <th className="px-4 py-3 text-left font-bold">Show</th>
                  <th className="px-4 py-3 text-left font-bold">RJ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6 AM – 7 AM", "Geetanjali", "Geetanjali"],
                  ["7 AM – 10 AM", "Zara Muskurao", "Aayushii Rode"],
                  ["10 AM – 1 PM", "Triangle Tunes and Talks", "Monika Joshi"],
                  ["1 PM – 4 PM", "Bollywood Bliss", "Bharti Rathore"],
                  ["4 PM – 5 PM", "Desh Pardesh", "Vishal"],
                  ["5 PM – 7 PM", "Hello Vaishnavi", "Vaishnavi Palleda"],
                  ["7 PM – 10 PM", "Nirvana Nights", "Parag"],
                  ["10 PM – 6 AM", "Back to Back", "Automated"],
                ].map(([time, show, rj], i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "" : "bg-muted/30"}`}>
                    <td className="px-4 py-3 font-bold text-primary">{time}</td>
                    <td className="px-4 py-3 font-medium">{show}</td>
                    <td className="px-4 py-3 text-muted-foreground">{rj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Serving North Carolina's Indian Community</h2>
          <p>
            The Research Triangle (Raleigh-Durham-Chapel Hill) is home to one of the largest and fastest-growing
            South Asian communities on the East Coast. With over 200,000 Indian-Americans calling North Carolina
            home, Radio Nyra serves as the essential cultural touchpoint — covering local Indian community events,
            festival celebrations (Holi, Diwali, Navratri), temple news, immigration updates, and much more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Listen Anywhere — Not Just on FM</h2>
          <p>
            Even if you're outside our FM coverage area, you can stream Radio Nyra live from anywhere in North
            Carolina and across the USA using our website, official mobile app (iOS & Android), or via voice
            commands on Amazon Alexa, Google Home, or Apple Siri. Simply say{" "}
            <em>"Alexa, open Radio Nyra"</em> to start listening instantly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Join the Radio Nyra Family in NC</h2>
          <p>
            Whether you're a long-time North Carolina resident or a newcomer to the Triangle area, Radio Nyra is
            your home for all things South Asian. From local business shoutouts and community announcements to
            Bollywood chart-toppers and live RJ interactions, we keep Indian North Carolina connected, entertained,
            and informed — 24 hours a day, 7 days a week.
          </p>
        </section>
      </div>
    </SeoPageLayout>
  )
}
