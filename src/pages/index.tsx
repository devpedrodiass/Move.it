import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import {
  CountdownContext,
  CountdownProvider,
} from "../contexts/CountdownContext";
import styles from "./index.module.css";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = ({ challengesCompleted, currentExperience, level }: HomeProps) => {
  const { minutes, seconds } = useContext(CountdownContext);
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
        <div className={styles.container}>
          <Head>
            <title>Home | move.it</title>
          </Head>
          <ExperienceBar></ExperienceBar>
          <section>
            <div>
              <Profile></Profile>
              <CompletedChallenges></CompletedChallenges>
              <Countdown></Countdown>
            </div>
            <div>
              <ChallengeBox></ChallengeBox>
            </div>
          </section>
        </div>
      </CountdownProvider>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
