import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Stores",
  description: "This is an ecommerce store built with Next.js and React.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  authors: { name: "Ayinde AbdurRahman" },
  keywords: ["Ecommerce", "Store", "Next.js", "React"],
  facebook: {
    appId: "656714972742959",
  },
  openGraph: {
    title: "Ecommerce Store",
    description: "This is an ecommerce store built with Next.js and React.",
    siteName: "Ecommerce Store",

    images: [
      {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.searchenginejournal.com%2Fafter-launching-ecommerce-website%2F346778%2F&psig=AOvVaw02zUWXmlh0te3OGNzBfXoM&ust=1735481974037000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDH4qzUyooDFQAAAAAdAAAAABAJ",
        alt: "Built by Ayinde AbdurRahman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Store",
    description: "This is an ecommerce store built with Next.js and React.",
    site: "@ayinde_xyz",
    creator: "@ayinde_xyz",
    images: {
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.searchenginejournal.com%2Fafter-launching-ecommerce-website%2F346778%2F&psig=AOvVaw02zUWXmlh0te3OGNzBfXoM&ust=1735481974037000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDH4qzUyooDFQAAAAAdAAAAABAJ",
      alt: "Built by Ayinde AbdurRahman",
    },
  },
};
