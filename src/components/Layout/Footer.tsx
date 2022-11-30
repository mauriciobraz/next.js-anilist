import Link from "next/link";

interface ExternalLink {
  id: string;
  href: string;
  children: React.ReactNode;
}

type ExternalLinksRecord = Record<string, ExternalLink[]>;

const Footer: React.FC = () => {
  const EXTERNAL_LINKS: ExternalLinksRecord = {
    // `Logout`, `Donate`, `AniList.co` and `AniChart.net`
    "1": [
      { id: "1", children: "Logout", href: "/404" },
      { id: "2", children: "Donate", href: "/404" },
      { id: "3", children: "AniList.co", href: "/404" },
      { id: "4", children: "AniChart.net", href: "/404" },
    ],

    // `Apps`, `Site Stats`, `Recommendations and API`
    "2": [
      { id: "1", children: "Apps", href: "/404" },
      { id: "2", children: "Site Stats", href: "/404" },
      { id: "3", children: "Recommendations", href: "/404" },
      { id: "4", children: "API", href: "/404" },
    ],

    // `Discord`, `Twitter`, `Facebook` and `GitHub`
    "3": [
      { id: "1", children: "Discord", href: "/404" },
      { id: "2", children: "Twitter", href: "/404" },
      { id: "3", children: "Facebook", href: "/404" },
      { id: "4", children: "GitHub", href: "https://github.com/mauriciobraz" },
    ],

    // `Add Data`, `Moderators`, `Contact`, `Terms & Privacy` and `Site Map`
    "4": [
      { id: "1", children: "Add Data", href: "/404" },
      { id: "2", children: "Moderators", href: "/404" },
      { id: "3", children: "Contact", href: "/404" },
      { id: "4", children: "Terms & Privacy", href: "/404" },
      { id: "5", children: "Site Map", href: "/404" },
    ],
  };

  return (
    <footer className="flex w-full flex-col items-start justify-between gap-8 bg-[#11161d] p-12 lg:flex-row lg:gap-4 lg:px-52">
      <ThemeSwitcher />
      <ExternalLinkRow data={EXTERNAL_LINKS} />
    </footer>
  );
};

const ThemeSwitcher: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-overpass font-bold text-[#3daee2]">Site Theme</h2>

      {/* TODO: Implement the following themes */}
      <div className="flex gap-2">
        {/* WHITE */}
        <div className="mx-auto flex h-7 w-7 cursor-pointer items-end rounded-md border-2 border-[#46546b] bg-[#edf1f5] px-1">
          <span className="text-black">A</span>
        </div>

        {/* DARK */}
        <div className="mx-auto flex h-7 w-7 cursor-pointer items-end rounded-md border-2 border-[#46546b] bg-[#11161d] px-1">
          <span className="text-white">A</span>
        </div>

        {/* WHITE_CONTRAST */}
        <div className="mx-auto flex h-7 w-7 cursor-pointer items-end rounded-md border-2 border-[#46546b] bg-[#edf1f5] px-1">
          <span className="text-black">A</span>
        </div>

        {/* AUTO */}
        <div className="mx-auto flex h-7 w-7 cursor-pointer items-end rounded-md border-2 border-[#46546b] bg-[#edf1f5] px-1">
          <span className="text-black">A</span>
        </div>
      </div>
    </div>
  );
};

interface ExternalLinkColumnProps {
  data: ExternalLink[];
}

const ExternalLinkColumn: React.FC<ExternalLinkColumnProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="text-[#a0b1c5] hover:text-[#d3d5f3]"
        >
          {link.children}
        </Link>
      ))}
    </div>
  );
};

interface ExternalLinkRowProps {
  data: ExternalLinksRecord;
}

const ExternalLinkRow: React.FC<ExternalLinkRowProps> = ({ data }) => {
  const externalLinkKeys = Object.keys(data);

  return (
    <div className="flex flex-col justify-end gap-6 font-overpass text-sm font-semibold lg:flex-row lg:gap-20">
      {externalLinkKeys.map((key) => (
        <ExternalLinkColumn key={key} data={data[key]} />
      ))}
    </div>
  );
};

export default Footer;
