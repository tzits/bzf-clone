import QuestionBlock from "./QuestionBlock"
import { forwardRef } from "react"

const QuestionsBlock = ({quizItem, setChosenAnswerItems, chosenAnswerItems, unansweredQuestionIds, setUnansweredQuestionIds}, ref) => {
    return (
        <div>
            <h2 ref={ref} className="question-title">{quizItem.text}</h2>
            <div className='questions-container'>
                {
                    quizItem.questions.map((question, _index) => (
                        <QuestionBlock 
                            key={_index} 
                            question={question} 
                            setChosenAnswerItems={setChosenAnswerItems}
                            chosenAnswerItems={chosenAnswerItems}
                            unansweredQuestionIds={unansweredQuestionIds}
                            setUnansweredQuestionIds={setUnansweredQuestionIds}
                            quizItemId={quizItem.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default forwardRef(QuestionsBlock)