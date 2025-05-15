import { BriefcaseIcon, GraduationCapIcon, UsersIcon, InfoIcon, MailIcon, HomeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        title: "Experience",
        href: "/features/analytics", // Re-using existing path, will be ProfessionalExperiencePage
        icon: BriefcaseIcon,
    },
    {
        title: "Skills",
        href: "/features/link-shortening", // Re-using existing path, will be SkillsAndExpertisePage
        icon: UsersIcon, // UsersIcon can represent skills/teamwork
    },
    {
        title: "Community",
        href: "/features/password-protection", // Re-using existing path, will be CommunityInvolvementPage
        icon: UsersIcon, // UsersIcon can represent community
    },
    {
        title: "Education",
        href: "/features/qr-codes", // Re-using existing path, will be EducationAndContactPage (Education part)
        icon: GraduationCapIcon,
    },
    {
        title: "Contact",
        href: "/changelog", // Re-using existing path, will be ConnectPage
        icon: MailIcon,
    }
];
