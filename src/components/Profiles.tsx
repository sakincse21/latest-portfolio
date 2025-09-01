import { MenuBar } from "@/components/ui/bottom-menu"
import { BrainCircuit, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MessageCircle, YoutubeIcon } from "lucide-react"

const menuItems = [
  {
    icon: ()=><GithubIcon />,
    label: "Github",
    link:"https://github.com/sakincse21"
  },
  {
    icon: ()=><LinkedinIcon />,
    label: "Linkedin",
    link:"https://www.linkedin.com/in/saleheen-sakin/"
  },
  {
    icon: ()=><MessageCircle />,
    label: "Whatsapp",
    link:"https://wa.me/+8801833410082"
  },
  {
    icon: ()=><BrainCircuit />,
    label: "Leetcode",
    link:"https://leetcode.com/u/saleheen7/"
  },
  {
    icon: ()=><FacebookIcon />,
    label: "Facebook",
    link:"https://facebook.com/saleheen.sakin"
  },
  {
    icon: ()=><InstagramIcon />,
    label: "Instagram",
    link:"https://instagram.com/saleheen.sakin"
  },
  {
    icon: ()=><YoutubeIcon />,
    label: "Youtube",
    link:"https://www.youtube.com/@sakincse21"
  },
]

export default function Profiles() {
  return (
    <div className="py-2 flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
      <MenuBar items={menuItems} />
    </div>
  )
}
