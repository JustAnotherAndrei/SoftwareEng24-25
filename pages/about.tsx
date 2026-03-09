import React from "react";
import "./../styles/globals.css";
import styles from "../styles/AboutPage.module.css";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
       <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <Link href="/">
            <img src="/logo.png" alt="Gift Hub" className={styles.logo} />
          </Link>
        </div>
      </nav>
      <h1>About GiftHub</h1>

      <p className={styles.intro}>
        <strong>GiftHub</strong> is a Peer-to-Peer Gifting Platform designed to simplify the process of gift-giving for special occasions like birthdays, weddings, or graduations.
        <br />
        Event Planners can manage wishlists, invite guests, and receive gifts or cash contributions in a seamless, collaborative environment.
      </p>

      <p className={styles.extendedDescription}>
        GiftHub solves the coordination chaos of group gifting. It provides a centralized space for planning, managing, and participating in gift-giving. Guests can contribute funds, reserve gifts, upload event memories, and communicate more efficiently. The platform integrates affiliate product APIs and payment processors like Stripe for secure and intuitive experiences. Designed with modern stacks and agile methodology, GiftHub is a robust, scalable solution for events of all kinds.
      </p>

      <div className={styles.features}>
        <h2>Why GiftHub?</h2>
        <ul>
          <li>🎯 Avoid duplicate or unwanted gifts</li>
          <li>💳 Collect contributions securely via Stripe</li>
          <li>🛍️ Shop from affiliate partners directly from wishlists</li>
          <li>📸 Share memories via a collaborative photo/video gallery</li>
          <li>📈 Real-time insights (optional)</li>
        </ul>
      </div>

      <div className={styles.tech}>
        <h2>Tech & Project Highlights</h2>
        <ul>
          <li>✅ Built with the T3 stack (TypeScript, Tailwind, tRPC, Prisma)</li>
          <li>✅ Modular architecture following clean code principles</li>
          <li>✅ Agile collaboration using GitHub Projects, Figma, and Notion</li>
          <li>✅ Stripe Connect integration for payment handling</li>
        </ul>
      </div>

      <h2 className={styles.teamsHeader}>Our Teams</h2>
      <div className={styles.teamGrid}>
        {[
          {
            team: "Team 1",
            members: [
              "👤 TURCU ECATERINA – implemented key UI components using React, Tailwind, and handled UX design flows",
              "👤 CRACIUN MIRCEA – worked on responsive layouts and interface state logic using React and TypeScript",
              "👤 CAZACU DENISA – contributed to UX prototyping and DevOps setup with Vercel and GitHub CI/CD",
              "👤 POPA ADRIAN – built API endpoints and managed Prisma database models and tRPC routes",
              "👤 GHEORGHIU COSMIN – developed backend logic for invitations and wishlist syncing in Node.js",
            ],
          },
          {
            team: "Team 2",
            members: [
              "👤 LEFTER COSMIN – built user dashboards and styled components with Tailwind and React",
              "👤 RADU DAN – developed event card components and routing logic using Next.js",
              "👤 BAZON BOGDAN – created database schema and managed deployment pipelines using Docker and PlanetScale",
              "👤 TUDOSE EDUARD – implemented wishlist API integration and data validation using tRPC",
            ],
          },
          {
            team: "Team 3",
            members: [
              "👤 ANDREI BOGDAN – focused on the media gallery UI, uploads, and accessibility compliance in React",
              "👤 WISSAM – handled UX polish and assisted with responsive behavior on mobile using Tailwind",
              "👤 HARITON COSMIN – managed Stripe Connect integration for contributions and direct payments",
              "👤 CRACIUN DANIEL – handled backend event CRUD functionality and deployment scripts",
              "👤 SHAHIN WISSAM – implemented wishlist logic and worked on guest interaction features",
            ],
          },
          {
            team: "Team 4",
            members: [
              "👤 MAZURU ALIN – built the landing page and key static sections using React and Next.js",
              "👤 MERARU IONUȚ – developed profile management UI and contributed to UX improvements",
              "👤 MITILA ALIN – managed authentication flows and sessions with NextAuth and JWT",
              "👤 BUCUR ROBERT – worked on backend routes, handled DevOps setup with Docker and Stripe configuration",
              "👤 VEZETEU ANDREI – contributed to event creation logic and gallery moderation flow",
            ],
          },
          {
            team: "Team 5",
            members: [
              "👤 IONICHE ADRIAN – implemented gift list interaction UI with filtering and state sync",
              "👤 HASAN MEHEDI – worked on responsive design and handled global style structure with Tailwind",
              "👤 BRAHA PETRU – focused on backend logic, integrated Prisma and contributed to Stripe payment logic",
              "👤 TURCANU DENIS – built event analytics and reporting modules (optional feature)",
            ],
          },
        ].map((team, index) => (
          <div key={index} className={styles.teamCard}>
            <h3>{team.team}</h3>
            <div className={styles.memberList}>
              {team.members.map((member, i) => (
                <p key={i}>{member}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footerNote}>
        © 2025 GiftHub — Built with passion by Group E3 💜
      </footer>
    </div>
  );
}
