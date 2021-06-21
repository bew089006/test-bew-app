import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import * as _ from 'lodash'

export interface IStudent {
  id: number
  studentName: string
  score: number
  age?: number
}

const Teacher = {
  id: 1,
  student: [
    {
      id: 1,
      studentName: 'Bew',
      score: 79,
    },
  ],
}

interface ITeacher {
  id: number
  student: IStudent[]
}

// const ComponentDemo: React.FC = (props: { name: string }) => {
//   return <div></div>
// }

function App() {
  useEffect(() => {
    const sampleData = [
      {
        id: 1,
        studentName: 'Nuk',
        score: 60,
      },
      {
        id: 2,
        studentName: 'Ping',
        score: 100,
      },
      {
        id: 3,
        studentName: 'Amelia Watson',
        score: 14,
      },
      {
        id: 4,
        studentName: 'Gawr Gura',
        score: 125,
      },
    ]

    // Task: Create Interface

    console.log(sampleData)

    // Task: filter failing student (score < 60)

    const students = sampleData.filter((student: IStudent) => student.score < 60)
    console.log('checkkkk', students)
    // Task: Array of name only

    const students2: string[] = sampleData.map((student: IStudent) => student.studentName)
    console.log('checkkkk2', students2)
    // Task: Average score of class

    const student3: number[] = sampleData.map((student: IStudent): number => student.score)
    const avg = _.sum(student3) / sampleData.length
    console.log(avg)

    function showStudentName(student: IStudent) {
      return 1
    }

    console.log(showStudentName({ id: 2, studentName: 'eiei', score: 80 }))

    function getScore(obj: IStudent): Promise<number> {
      return new Promise<number>((resolved) => {
        setTimeout(() => {
          resolved(obj.score)
        }),
          1000
      })
    }

    getScore(sampleData[0]).then((ele) => {
      console.log(ele)
    })

    type ICallBack = (arg1: number, arg3: string) => string | void

    function demoCallback(student: IStudent, callBack: ICallBack) {
      callBack(student.score, student.studentName)
    }

    demoCallback({ id: 1, studentName: '333333', score: 90 }, () => {
      console.log('wow')
      return 'wow'
    })

    function sumStudentScore(students: IStudent[]): number {
      const sum = students.reduce<number>((previous, current) => {
        previous = previous + current.score
        return previous
      }, 0)

      return sum
    }

    console.log(sumStudentScore(sampleData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
