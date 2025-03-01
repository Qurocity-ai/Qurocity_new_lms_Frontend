import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import styles from "./MultiStepQuiz.module.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
function MultiStepQuiz() {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      label: "What's your main goal? (Choose one):",
      type: "select",
      name: "goal",
      options: [
        "Conversational Skills",
        "Career and Business",
        "Travel and Tourism",
        "Academic Purposes",
        "Fun and Brain Training",
      ],
    },
    {
      id: 2,
      label: "How familiar are you with this language? (Pick one):",
      type: "select",
      name: "familiarity",
      options: [
        "Absolute Beginner",
        "Basic Understanding",
        "Intermediate Speaker",
        "Advanced Learner",
      ],
    },
    {
      id: 3,
      label: "How do you prefer to learn? (Choose your favorite):",
      type: "select",
      name: "learningPreference",
      options: [
        "Audio-Based Learning",
        "Video and Visual Learning",
        "Reading and Writing",
        "Interactive Practice and Feedback",
      ],
    },
    {
      id: 4,
      label: "How much time can you dedicate daily?:",
      type: "select",
      name: "dailyTime",
      options: ["5 minutes", "30 minutes", "1 hour or more"],
    },
    {
      id: 5,
      label: "How do you prefer to learn? (Select all that apply):",
      type: "select",
      name: "learningMethods",
      options: [
        "Live 1:1 Classes",
        "Group Live Classes",
        "Self-Paced Learning",
        "Structured Pre-Recorded Courses",
      ],
    },
  ];

  const [formData, setFormData] = useState({
    goal: "",
    familiarity: "",
    learningPreference: "",
    dailyTime: "",
    learningMethods: "",
    name: "",
    email: "",
    password: "",
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOptionClick = (name, value) => {
    if (questions[currentQuestionIndex].type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formData[name].includes(value)
          ? prevData[name].filter((method) => method !== value)
          : [...prevData[name], value],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {

    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = formData[currentQuestion.name];

    if (currentQuestionIndex < questions.length && !selectedOption) {
      setErrorMessage("Please select an option before proceeding.");
      return;
    }

    setErrorMessage("");


    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentDetailIndex < 1) {
      setCurrentDetailIndex(currentDetailIndex + 1);
    }
  };



  const handleBack = () => {
    if (currentDetailIndex > 0) {
      setCurrentDetailIndex(currentDetailIndex - 1);
    } else if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const payload = {
  //     responses: {
  //       question1: formData.goal,
  //       question2: formData.familiarity,
  //       question3: formData.learningPreference,
  //       question4: formData.dailyTime,
  //       question5: formData.learningMethods
  //     },
  //     name: formData.name,
  //     email: formData.email,
  //     password: formData.password,
  //   };

  //   console.log("Payload:", payload);

  //   fetch("https://qurocity-lms-backend.onrender.com/api/quiz/auth", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
        
        
  //       console.log("Success:", data);
  //       if (data.token) {
  //         localStorage.setItem("token", data.token);
  //         console.log("Token stored:", localStorage.getItem("token")); 
  //         navigate('/dashboard');

          
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  // };


  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      responses: {
        question1: formData.goal,
        question2: formData.familiarity,
        question3: formData.learningPreference,
        question4: formData.dailyTime,
        question5: formData.learningMethods
      },
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    fetch("https://qurocity-lms-backend.onrender.com/api/quiz/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", formData.name); // Store the user's name
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className={styles.quizNav}>
        <Link to="/">
          <img src='./assets/newlogo.png' />
        </Link>

      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          {currentQuestionIndex < questions.length && (
            <div className={styles.card}>
              <h2>{questions[currentQuestionIndex].label}</h2>
              {errorMessage && <p className={styles.error}>{errorMessage}</p>}
              <div className={styles.optionsContainer}>
                {questions[currentQuestionIndex].type === "select"
                  ? questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`${styles.option} ${formData[questions[currentQuestionIndex].name].includes(option) &&
                        styles.selected
                        }`}
                      onClick={() =>
                        handleOptionClick(questions[currentQuestionIndex].name, option)
                      }
                    >
                      {option}

                    </button>
                  ))
                  : null}
              </div>
            </div>
          )}

          {currentQuestionIndex === questions.length && (
            <div className={styles.additionalInfoContainer}>
              {currentDetailIndex === 0 && (
                <div className={styles.fieldContainer}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.textInput}
                    placeholder="Enter your name"
                  />
                </div>
              )}
              {currentDetailIndex === 0 && (
                <>
                  <div className={styles.fieldContainer}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.textInput}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className={styles.fieldContainer}>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={styles.textInput}
                      placeholder="Enter password"
                    />
                  </div>
                </>
              )}
            </div>
          )}

          <div className={styles.navigationContainer}>
            <div className={styles.backContainer}>
              {(currentQuestionIndex > 0 || currentDetailIndex > 0) && (
                <button
                  type="button"
                  onClick={handleBack}
                  className={styles.navigationButton}
                >

                  &#8592;
                </button>

              )}
            </div>
            <div className={styles.nextContainer}>
              {currentQuestionIndex === questions.length ? (
                <button type="submit" className={styles.submitButton}
                   >
                  Submit
                  
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.navigationButton}
                >
                  &#8594;

                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      

    </>
    
  );
}

export default MultiStepQuiz