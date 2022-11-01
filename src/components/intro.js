import React from "react";
import Histo_CDC from "../images/histo_cdc.tif";

export default function Intro() {
    return (
      <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Dimorphic Mycoses
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Histoplasma, Blastomyces, and Coccidiodes: dimorphic fungi classically known as endemic mycoses of the United States based on their
              respective ecologic niches within defined geographic distributions. But how well do we know these distributions? How have they changed 
              in the decades between 1969, when the last nationwide, patient-centered update to their geographic distributions was conducted, and today?
            </p>
          </div>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <p>
                The maps above were generated using Medicare fee-for-service claims data from the CMS Chronic Condition Warehouse, with a cohort
                that includes all persons aged 65 year and older from 2007 - 2016, excluding those with solely diagnostic (e.g., radiography) or 
                laboratory claims. The location of a person's residence was considered the geographic location of their dimorphic mycoses diagnosis.
            </p>
            <p>
              Incidence for each county was reported as the number of cases per 100,000 person-years, with colorization thresholds for incidence rates
              optimized for visual discrimination.
            </p>
            <h2>How have things changed?</h2>
            <p>
                Among the Medicare FFS beneficiaries, there were 79,749 histoplasmosis, 37,726 coccidioidomycosis, and 6,109 blastomycosis diagnoses 
                from 2007-2016.
            </p>
            <ul role="list">
                <li>1,971 out of 3,143 counties had &gt;5 incident <strong>histoplasmosis</strong> diagnoses. 92% (1806/1971) had incidence &gt;100 cases per 100,000PY.</li>
                <li>1,602 out of 3,143 counties with &gt;1 <strong>blastomycosis</strong> diagnosis. 34% (547/1602) had incidence &gt;100 cases per 100,000PY.</li>
                <li>839 out of 3,143 counties with &gt;3 <strong>coccidioidomycosis</strong> diagnoses. 40% (339/839) had incidence &gt;100 cases per 100,000PY. </li>
            </ul>
            <p>
            These distributions of clinically significant incidence rates extend beyond the historical boundaries of each dimorphic mycosis last described in 1969.
            </p>
            <figure>
              <img
                className="w-full rounded-lg"
                src={Histo_CDC}
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>Rendering of <em>Histoplasma capsulatum</em>, provided by the <a href="https://phil.cdc.gov/">CDC Public Health Image Library.</a></figcaption>
            </figure>
            <h2>Raising Awareness</h2>
            <p>
            Increasing clinician awareness of more widespread distributions of DM is vitally important to prevent delayed or missed diagnoses. Diagnosis is delayed by 
            more than one month in 40% of blastomycosis cases and 46% of coccidioidomycosis cases. Histoplasmosis patients experience an average of a 40-day delay in 
            diagnosis, with over 80% having a healthcare visit representing a missed opportunity for diagnosis. The most common cause of diagnostic delay is 
            attributed to failure to consider DM etiologies.
            </p>
            <p>
            The geographic distributions of the three dimoprhic mycoses have expanded to regions outside their historical distribution. Acknowledging an expanded geographic 
            distribution for these fungi is important to maintain high clinical suspicion of these pathogens. Dimoprhic mycoses should be considered when there is concern 
            for a fungal infection anywhere in the US in patients with a compatible clinical syndrome, particularly in those who are immunocompromised.
            </p>
          </div>
        </div>
      </div>
    )
  }