import Navbar from "../../components/navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="mx-15">
        <h2 className="text-center font-bold text-3xl mb-10">About</h2>
        <div className="space-y-4 text-gray">
          <p>
            Bluebird Group is recognized as one of Indonesia’s most reliable,
            trusted and innovative holding companies, offering a broad spectrum
            of services tailored to meet the diverse needs of its customers.
            Known for its iconic blue taxis, Bluebird has become a hallmark of
            Jakarta’s streets and a leader in urban mobility. Just as New York
            is synonymous with yellow taxis and London with black cabs,
            Bluebird’s distinctive blue taxis have become an integral part of
            daily life in major cities across Indonesia.
          </p>
          <p>
            As part of our commitment to evolve and adapt to the changing
            landscape of transportation, Bluebird is transforming into an
            adaptive Mobility-as-a-Service (MaaS) company. With a focus on
            Multi-Product, Multi-Channel, and Multi-Payment (3M) capabilities,
            Bluebird offers services that are increasingly accessible and
            convenient for our customers.
          </p>
          <p>
            Our commitment to quality service with 'Human Connection' remains at
            the core of everything we do and is strengthened by our adherence to
            the SNI (Standar Nyaman Indonesia), a standard of comfort and
            safety. Serving millions of passengers every month, Bluebird Group
            has expanded its offerings to encompass a variety of services across
            transportation, logistics, heavy equipment, IT solutions, and
            property development.{" "}
          </p>
          <p>
            Today, Bluebird Group’s services are available not only in Jakarta
            but also in cities across Indonesia, including Surabaya, Bandung,
            Bali, Lombok, Semarang, Medan, Pekanbaru, Palembang, Bangka
            Belitung, Batam, Banten, Manado, Makassar, and Yogyakarta, as well
            as in business and tourism centers throughout the nation.
          </p>
        </div>
      </div>
    </div>
  );
}
