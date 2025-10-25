import Link from "next/link";
import Facebook from "@/assets/icons//facebookN.svg";
import Linkedin from "@/assets/icons/linkedinN.svg";
import Instagram from "@/assets/icons/InstagramN.svg";
import X from "@/assets/icons/TwitterN.svg";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href={`/`}>
        <Facebook className="h-5 w-5" />
      </Link>
      <Link href={`/`}>
        <Linkedin className="h-5 w-5"/>
      </Link>
      <Link href={`/`}>
        <Instagram className="h-5 w-5"/>
      </Link>
      <Link href={`/`}>
        <X className="h-5 w-6 mr-1"/>
      </Link>
    </div>
  );
};

export default SocialMedia;
