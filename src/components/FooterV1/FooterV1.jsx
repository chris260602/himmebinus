import InstagramFooterIcon from "../../assets/icons/InstagramFooterIcon";
import LinkedInFooterIcon from "../../assets/icons/LinkedInFooterIcon";
import TikTokFooterIcon from "../../assets/icons/TikTokFooterIcon";
import EmailFooterIcon from "../../assets/icons/EmailFooterIcon";
import YouTubeFooterIcon from "../../assets/icons/YouTubeFooterIcon";
import MapsFooterIcon from "../../assets/icons/MapsFooterIcon";

const FooterV1 = () => {
  return (
    <footer className="bg-primary">
      <div className="flex flex-col px-2 py-6 items-center text-center h-40 lg:px-8 lg:flex-row lg:max-w-7xl lg:text-left lg:justify-between lg:mx-auto lg:h-24 ">
        <div className="text-white mb-4 ">
          <p className="text-sm">© 2023. All Rights Reserved.</p>
          <p className="text-md lg:text-lg">
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
