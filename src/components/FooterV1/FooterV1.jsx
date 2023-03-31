import InstagramFooterIcon from "../../assets/icons/InstagramFooterIcon";
import LinkedInFooterIcon from "../../assets/icons/LinkedInFooterIcon";
import TikTokFooterIcon from "../../assets/icons/TikTokFooterIcon";
import EmailFooterIcon from "../../assets/icons/EmailFooterIcon";
import YouTubeFooterIcon from "../../assets/icons/YouTubeFooterIcon";
import MapsFooterIcon from "../../assets/icons/MapsFooterIcon";

const FooterV1 = () => {
  return (
    <footer className="bg-blue">

      <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-white">
          <p className="text-sm">© 2023. All Rights Reserved.</p>
          <p className="text-lg">
            Managed by Department of Multimedia HIMME BINUS
          </p>

        </div>
        <div className="flex">
          <a
            className="mx-1"
            href="https://www.instagram.com/himmebinus/"
            target={"_blank"}
            rel="noreferrer"
          >
            <InstagramFooterIcon />
          </a>
          <a
            className="mx-1"
            href="https://www.linkedin.com/company/himme-binus/mycompany/"
            target={"_blank"}
            rel="noreferrer"
          >
            <LinkedInFooterIcon />
          </a>
          <a
            className="mx-1"
            href="https://www.tiktok.com/@himmebinus?is_from_webapp=1&sender_device=pc"
            target={"_blank"}
            rel="noreferrer"
          >
            <TikTokFooterIcon />
          </a>
          <a
            className="mx-1"
            href="himme.relation@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <EmailFooterIcon />
          </a>
          <a
            className="mx-1"
            href="https://www.youtube.com/@himmebinus8176/featured"
            target={"_blank"}
            rel="noreferrer"
          >
            <YouTubeFooterIcon />
          </a>
          <a
            className="ml-1"
            href="https://binus.ac.id/anggrek-campus/"
            target={"_blank"}
            rel="noreferrer"
          >
            <MapsFooterIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default FooterV1;
