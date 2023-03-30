import FooterV1 from "../../components/FooterV1/FooterV1";
import LinearLine from "../../components/LinearLine/LinearLine";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SectionV1 from "../../components/SectionV1/SectionV1";
import classes from "./Home.module.css";
import LocationIcon from "../../assets/icons/LocationIcon";
import PartnerIcon from "../../assets/icons/PartnerIcon";
import MemberIcon from "../../assets/icons/MemberIcon";
import EventIcon from "../../assets/icons/EventIcon";
import MissionIcon from "../../assets/icons/MissionIcon";
import VisionIcon from "../../assets/icons/VisionIcon";
import alsut from "../../assets/images/alsut.png";
import kemanggisan from "../../assets/images/kemanggisan.png";
import bekasi from "../../assets/images/bekasi.png";
import senayan from "../../assets/images/senayan.png";
import BoardOfManagement from "../../assets/images/BoardOfManagement";
import WorkTogether from "../../assets/images/WorkTogether.png";
import WhatsappIcon from "../../assets/icons/WhatsappIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
const Home = () => {
  return (
    <>
      <NavigationBar />
      <SectionV1 className={"flex pt-5"}>
        <div className={classes.ContentSection}>
          <div className="inline-block mb-6">
            <h1 className="font-semibold text-4xl">About HIMME</h1>
            <LinearLine />
          </div>

          <p className="font-medium">
            HIMME (BINUS Business School Student Association), founded by Fu Sin
            Fu on 24th January 1998. The main reason of establishment of HIMME
            at that time was due to the absence of an organization that could
            accommodate the aspirations of students majoring in management
            (which is now developing into BINUS Business School). Established
            under the auspices of BINUS Business School, BINUS University and
            under the supervision of the Student Club and Activity Center
            (SCAC), and BINUS University
          </p>
        </div>
        <div className={classes.VideoSection}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lK7QA5S-kKk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </SectionV1>
      <SectionV1 className={"mt-7"}>
        <div className="flex justify-between gap-x-5">
          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1">
            <div className="flex items-center">
              <LocationIcon />
              <p className="text-6xl ml-3 font-semibold">4</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">Region</h2>
              <p>
                HIMME accommodates all of BINUS Business School students
                aspirations which spread across 4 regions
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1">
            <div className="flex items-center">
              <PartnerIcon />
              <p className="text-6xl ml-3 font-semibold">50+</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">Region</h2>
              <p>
                We successfully collaborate with more than 50 partners national
                and international companies on our various events and work
                programs.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1">
            <div className="flex items-center">
              <MemberIcon />
              <p className="text-6xl ml-3 font-semibold">100+</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">Members</h2>
              <p>
                Each year, HIMME has more than 100 activists for one batch with
                more than 20 members in the board of management.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1">
            <div className="flex items-center">
              <EventIcon />
              <p className="text-6xl ml-3 font-semibold">10+</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">Events</h2>
              <p>
                HIMME has more than 10 events annually consists of international
                seminar, competitions and so much more.
              </p>
            </div>
          </div>
        </div>
      </SectionV1>
      <SectionV1 className={"mt-10"}>
        <div className="flex flex-col items-center bg-white shadow-md rounded-md p-8 text-center">
          <h2 className="text-3xl font-medium">Our Tagline</h2>
          <div className="mb-4">
            <h1 className="text-blue text-4xl font-semibold mt-3 mb-2">
              “UnravelTheRemarkable”
            </h1>
            <LinearLine />
          </div>

          <p>
            HIMME is committed to becoming an organization that always brings
            various quality human resources to develop together, as well as
            discloses various HIMME programs to the public to enhance HIMME's
            existence and image
          </p>
        </div>
      </SectionV1>
      <SectionV1 className={"mt-7"}>
        <div className="flex gap-5">
          <div className="flex flex-col items-center bg-white shadow-md rounded-md p-8 flex-1">
            <div className="inline-block mb-6">
              <h2 className="font-semibold text-4xl">Vision</h2>
              <LinearLine />
            </div>
            <div className="flex items-start">
              <VisionIcon />
              <p className="text-3xl flex-1 ml-5 leading-10">
                “Sinergi nyata untuk gelora karya keharmonisan HIMME BINUS
                University”
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-md p-8 flex-1">
            <div className="inline-block mb-6">
              <h2 className="font-semibold text-4xl">Mission</h2>
              <LinearLine />
            </div>
            <div className="flex items-start">
              <MissionIcon />
              <ul className="list-disc flex-1 ml-5 text-sm font-medium">
                <li>
                  Menabur kebermanfaatan melalui kontribusi aktif mahasiswa/i
                  BBS melalui pengabdian yang tepat sasaran dan berkelanjutan.
                </li>
                <li>
                  Harmonisasi setiap elemen guna menciptakan kolaborasi karya
                  terintegrasi yang maksimal.
                </li>
                <li>
                  Menghadirkan pergerakan mahasiswa berlandaskan nilai
                  intelektual yang berdampak secara langsung.
                </li>
                <li>
                  Menjadikan HIMME sebagai wadah advokasi mahasiswa/i yang
                  responsif.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionV1>
      <SectionV1 className={"mt-7"}>
        <div className="flex flex-col items-center">
          <div className="inline-block mb-6">
            <h2 className="font-semibold text-4xl">Our Region</h2>
            <LinearLine />
          </div>
          <div className="flex">
            <div className="rounded-full">
              <a
                className="flex flex-col items-center"
                href="https://bbs.binus.ac.id/binus-kemanggisan/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={kemanggisan} alt="Kemanggisan" />
                <p className="text-2xl">Kemanggisan</p>
              </a>
            </div>

            <a
              href="https://binus.ac.id/alam-sutera-campus/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={alsut} alt="Alam Sutera" />
              <p>Alam Sutera</p>
            </a>
            <a
              href="https://binus.ac.id/bekasi/contact-us/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={bekasi} alt="Bekasi" />
              <p>Bekasi</p>
            </a>
            <a
              href="https://binus.ac.id/jwc-campus/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={senayan} alt="Senayan" />
              <p>Senayan</p>
            </a>
          </div>
        </div>
      </SectionV1>
      <SectionV1 className={"mt-7"}>
        <div className="flex flex-col items-center justify-center">
          <div className="inline-block mb-6">
            <h2 className="font-semibold text-4xl">Board of Management</h2>
            <LinearLine />
          </div>
        </div>

        <div className="flex justify-center">
          <BoardOfManagement />
        </div>
      </SectionV1>
      <SectionV1>
        <div className="inline-block mb-6">
          <h2 className="font-semibold text-4xl">Our Memories</h2>
          <LinearLine />
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <div>
            <div>
              <h2>Let’s work together!</h2>
              <LinearLine />
            </div>
            <img src={WorkTogether} alt="" />
          </div>
          <div>
            <p>
              For partnership, please contact our team below. We look forward to
              hearing from you!
            </p>
            <div>
              <div>
                <WhatsappIcon />
                <p>Amira (Sponsorship)</p>
                <p>(+62) 813-8438-0747</p>
              </div>
              <div>
                <WhatsappIcon />
                <p>Nazira (Media Partner)</p>
                <p>(+62) 812-5348-4432</p>
              </div>
              <div>
                <EmailIcon />
                <p>himme.relation@gmail.com</p>
              </div>
            </div>
            <p>**Text only. Not accepting calls.</p>
          </div>
        </div>
      </SectionV1>
      <FooterV1 />
    </>
  );
};
export default Home;
