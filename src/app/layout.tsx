import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Blueprint",
  description:
    "In the heart of Lévis, blending warmth, sophistication, and conviviality in a vibrant and inviting atmosphere.",
  icons: {
    icon: "https://delice.ca/wp-content/uploads/2025/03/favicon-150x150.png",
    apple: "https://delice.ca/wp-content/uploads/2025/03/favicon-300x300.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/head_styles.css" />
        <link
          rel="stylesheet"
          id="main-css"
          href="/wp-content/themes/delice/assets/dist/css/mainCss.css?ver=1775073155"
        />
      </head>
      <body
        className="home wp-singular page-template-default page page-id-750 wp-theme-delice"
        data-module-swup
        data-module-scroll
        data-module-effects
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
