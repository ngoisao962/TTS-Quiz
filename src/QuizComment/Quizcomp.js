import React from 'react';
import { useState  } from 'react';
import '../QuizComment/quizstyle.css'
import Logo from '../image/images.png'
import Done from '../image/done.png'
import Load from '../image/load.png'
const Quizcomp = () => {
  
    const [quizStarted, setQuizStarted] = useState(false);
   
    const startQuiz = () => {
      setQuizStarted(true);
     
    };
    var Questionbank = [
        {
            Question: "In any programming language , what is the most common way to iterea through an array",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Ranchi", isCorrect: false },
                { Answer: "Patna", isCorrect: false }
            ]
        },
        {
            Question: "Who is the PM of India?",
            Answers: [
                { Answer: "Amit Shah", isCorrect: false },
                { Answer: "Modi", isCorrect: true },
                { Answer: "Raga", isCorrect: false },
                { Answer: "Kejri", isCorrect: false }
            ]
        }, {
            Question: "2 +3 = ?",
            Answers: [
                { Answer: "5", isCorrect: true },
                { Answer: "7", isCorrect: false },
                { Answer: "4", isCorrect: false },
                { Answer: "3", isCorrect: false }
            ]
        },
        {
            Question: "What comes after january?",
            Answers: [
                { Answer: "feb", isCorrect: true },
                { Answer: "march", isCorrect: false },
                { Answer: "june", isCorrect: false },
                { Answer: "sept", isCorrect: false }
            ]
        },
        {
            Question: "Which company pankaj is working currently?",
            Answers: [
                { Answer: "Accenture", isCorrect: false },
                { Answer: "Oracle", isCorrect: false },
                { Answer: "L&T", isCorrect: true },
                { Answer: "IBM", isCorrect: false }
            ]
        }
    ]

   
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}
const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}


    if (quizStarted) {
        
        return (
            <div className='quiz-start'>
            {showScore ? (
                <div className='score-section'>

                   {score < 3 ? (
                    <div className='item_quiz_content'>
                            <img src={Load} alt="" className='image_dn' />
                            <h3 className='quiz_h3'>Congratulations</h3>
                            <p className='item_p'>You are amazing</p>
                            <p className='item_length'>{score}/{Questionbank.length} correct answer</p>
                            <>
                            <button type="submit" onClick={resetQuiz} className='btn-start'>Play Again!!</button>
                            </>
                    </div>
                   ):(
                    <div  className='item_quiz_content'>
                    <img src={Done} alt="" className='image_dn' />
                            <h3 className='quiz_h3'>Completed</h3>
                            <p className='item_p'>You are amazing</p>
                            <p className='item_length'>{score}/{Questionbank.length} correct answer</p>
                            <>
                            <button type="submit" onClick={resetQuiz} className='btn-start'>Play Again!!</button>
                            </>
                    </div>
                   )}
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                Question
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>
    
                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>
    
                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer,index)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)} key={index} className='btn-itemquiz'>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }
    
        </div>
        );
      } else {
       
        return (
          <div className='quiz-start'>
           
            <img src={Logo} alt="logoquiz" className='logo-quiz' />
            <button onClick={startQuiz} className='btn-start'>Start Quiz</button>
          </div>
        );
      }
    };
    



  


export default Quizcomp;
