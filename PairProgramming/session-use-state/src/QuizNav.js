import React, { useState } from "react"

export default function QuizNav({ questions }) {

    const [questionNumber, setQuestionNumber] = useState()

    const goNext = () => setQuestionNumber((prev) => prev + 1)
    const goBack = () => setQuestionNumber((prev) => prev - 1)

    const firstQuestion = questionNumber === 0
    const lastQuestion = questionNumber === questions.length - 1


    return (
        <nav>
            <span>Questions No.{questionNumber + 1}</span>
            <div>
                <button onClick={goBack} disabled={firstQuestion}>Go back {questionNumber + 1}</button>
                <button onClick={goNext} disabled={lastQuestion}>Go next {questionNumber + 1}</button>
            </div>
        </nav>
    )
}
