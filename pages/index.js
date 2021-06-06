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
      <p className="bg-purple-600 bg-opacity-50"> Hello World!</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-red-600 text-lg	">
      <Homee />
    </div>
  )
}
