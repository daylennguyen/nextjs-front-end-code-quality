import Head from 'next/head'
// import styles from '../styles/Home.module.css'
export function Homee() {
  return (
    <div>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
      <p>Hello World!</p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Homee />
    </div>
  )
}
