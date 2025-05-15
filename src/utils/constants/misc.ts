import { BriefcaseIcon, GraduationCapIcon, UsersIcon, CodeIcon, SettingsIcon, LayoutIcon, FolderOpenIcon, RocketIcon, TargetIcon, AwardIcon, HandshakeIcon, BuildingIcon, ZapIcon, ShieldCheckIcon, NetworkIcon, UserCheckIcon, LandmarkIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const VOLUNTEER_ROLES = [
    { name: "Fox River Grove Recreational Council", role: "Fox Chase 5K Race Director", icon: RocketIcon },
    { name: "Adopt-A-Grover", role: "Chair", icon: UsersIcon },
    { name: "Lioness Club", role: "President, Pasta Dinner Chairman", icon: AwardIcon },
    { name: "Fox River Grove PTO", role: "Executive Board, Secretary, Hospitality", icon: HandshakeIcon },
    { name: "Village of Fox River Grove", role: "Trustee & Parks Commissioner", icon: BuildingIcon }
] as const;

export const EXPERIENCE_HIGHLIGHTS = [
    {
        name: "Northrop Grumman",
        role: "Engineering Manager",
        icon: BriefcaseIcon,
    },
    {
        name: "Northrop Grumman",
        role: "RF Microwave Hardware Design Engineer",
        icon: ZapIcon,
    },
    {
        name: "Motorola Mobility",
        role: "Electrical Engineer",
        icon: SettingsIcon,
    },
    {
        name: "Hewlett-Packard",
        role: "Network Hardware Specialist",
        icon: NetworkIcon,
    },
    {
        name: "Village of Fox River Grove",
        role: "Trustee",
        icon: UserCheckIcon,
    },
    {
        name: "Village of Fox River Grove",
        role: "Parks Commissioner",
        icon: LandmarkIcon,
    }
] as const;

export const PROCESS = [
    {
        title: "Technical Foundation",
        description: "Leveraging a strong background in Electrical Engineering and hardware design.",
        icon: GraduationCapIcon,
    },
    {
        title: "Leadership & Team Building",
        description: "Guiding engineering teams and fostering collaborative environments.",
        icon: UsersIcon,
    },
    {
        title: "Community Engagement & Impact",
        description: "Driving positive change through volunteer leadership and project management.",
        icon: BriefcaseIcon,
    },
] as const;

export const FEATURES = [
    {
        Icon: CodeIcon,
        name: "Engineering Management",
        description: "Leading and mentoring engineering teams to deliver successful projects.",
        href: "#",
        cta: "Details",
        className: "col-span-3 lg:col-span-1",
        background: null,
    },
    {
        Icon: SettingsIcon,
        name: "RF/Microwave Hardware Design",
        description: "Specializing in the design and development of complex hardware systems.",
        href: "#",
        cta: "Details",
        className: "col-span-3 lg:col-span-2",
        background: null,
    },
    {
        Icon: LayoutIcon,
        name: "Hardware Development & Testing",
        description: "Extensive experience in the full hardware lifecycle.",
        href: "#",
        cta: "Details",
        className: "col-span-3 lg:col-span-2",
        background: null,
    },
    {
        Icon: UsersIcon,
        name: "Community Leadership",
        description: "Proven ability to lead and manage community initiatives and organizations.",
        href: "#",
        cta: "Details",
        className: "col-span-3 lg:col-span-1",
        background: null,
    },
    {
        Icon: BriefcaseIcon,
        name: "Project Prioritization & Management",
        description: "Skilled in identifying needs, prioritizing projects, and ensuring successful execution.",
        href: "#",
        cta: "Details",
        className: "col-span-3 lg:col-span-1",
        background: null,
    },
    {
        Icon: FolderOpenIcon,
        name: "Organizational Development",
        description: "Founding and building effective organizations and processes.",
        href: "#",
        cta: "Details",
        className: "col-span-3 lg:col-span-2",
        background: null,
    },
] as const;

// REVIEWS constant removed as it's not relevant for a personal portfolio.
