
import QUESTIONS from '../questions.js';
import {useState} from 'react';
import QuizImg from '../assets/quiz-complete.png';
import  Questions from './Questions.jsx';

import { useCallback} from 'react';


export default function Quiz(){
        
       
        const [userAnswers,setUserAnswers]= useState([]);
        const activeQuestionIndex=  userAnswers.length ;

        
        
        const quizIsComplete= activeQuestionIndex===QUESTIONS.length;
        const handleSelectAnswer= useCallback(
            function handleSelectAnswer(selectedAnswer){
                
                setUserAnswers((prevUserAnswers)=>{
                     return [...prevUserAnswers, selectedAnswer];
                });

               
                
            },
        []);

        const handleSkipAnswer= useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);
        
        if(quizIsComplete){
            return (
                <div id="summary">
                    <img src={QuizImg} alt="trophy icon"/>
                    <h2> Quiz completed!</h2>
                </div>
            );
        }
       

        
        return (
            <div id="quiz">
              <Questions 
              key={activeQuestionIndex}
              index={activeQuestionIndex}
              onSelectAnswer={handleSelectAnswer}
              onSkipAnswer={handleSkipAnswer}
              />
            </div>
        );
    
}
