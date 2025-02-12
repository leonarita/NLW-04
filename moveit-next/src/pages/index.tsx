import React from "react";
import { GetServerSideProps } from 'next'
import { CompleteChanllenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css'

import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps { 
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props) {
  return (
    
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>

      <div className={styles.container}>

        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>

            <div>
              <Profile/>
              <CompleteChanllenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>

          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  // Chamada API

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: { level: Number(level), currentExperience: Number(currentExperience), challengesCompleted: Number(challengesCompleted) }
  }
}


