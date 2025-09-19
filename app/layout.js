import "./globals.css";

export const metadata = {
  title: "Suwethan M | Software Engineer",
  description: "Portfolio of Suwethan M, software engineer \
  with 2 years of expertise in software development Java, Spring Boot, \
  React, and Node.js. Passionate about building scalable applications and \
  solving complex problems. Explore my projects and experience.",
  keywords: "Suwethan M, Software Engineer, Portfolio, Java, Spring Boot, React, Node.js, Software Development, \
  Scalable Applications, Problem Solving, Projects, Experience",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
