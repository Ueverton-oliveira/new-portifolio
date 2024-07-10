import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ueverton-oliveira" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ueverton-oliveira-78a81113b/" },
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social