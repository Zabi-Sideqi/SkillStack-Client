/* //client/src/components/Sidebar.jsx

import React, { useState, useEffect, useRef } from 'react'
import { sidebarStyles } from '../assets/dummyStyles';
import questionsData from '../assets/dummydata';
import { Star, Zap, Target, Sparkles, Trophy, Award, BookOpen, X, ChevronDown, ChevronRight, Menu, CheckCircle, XCircle } from 'lucide-react';
import {toast} from 'react-toastify';
import axios from 'axios';
import { FaAws, FaJava, FaVuejs  } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";


import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython, SiCplusplus, SiBootstrap, SiTailwindcss, SiTypescript, SiAngular,  SiNextdotjs, SiDocker, SiDotnet, SiMysql, SiGit, SiGithub } from 'react-icons/si';


const API_BASE = 'http://localhost:5000';

const Sidebar = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const submittedRef = useRef(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const asideRef = useRef(null);
   
  // if the inner width is greater then 768px then it will call this function
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsSidebarOpen(true);
      else setIsSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //if the sidebar is open and inner width is less then 768px then it will collapse 
  useEffect(() => {
    if (window.innerWidth < 768) {
      if (isSidebarOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  //techs & levels data
  const technologies = [
    {
      id: "html",
      name: "HTML",
      icon: <SiHtml5 size={20} />,
      color: "bg-orange-50 text-orange-600 border-orange-200",
    },
    {
      id: "css",
      name: "CSS",
      icon: <SiCss3 size={20} />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <SiJavascript size={20} />,
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
    {
      id: "react",
      name: "React",
      icon: <SiReact size={20} />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    },
    {
      id: "node",
      name: "Node.js",
      icon: <SiNodedotjs size={20} />,
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <SiMongodb size={20} />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      id: "java",
      name: "Java",
      icon: <FaJava size={20} />,
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      id: "python",
      name: "Python",
      icon: <SiPython size={20} />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      id: "cpp",
      name: "C++",
      icon: <SiCplusplus size={20} />,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <SiBootstrap size={20} />,
      color: "bg-pink-50 text-pink-600 border-pink-200",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={20} />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: <SiTypescript size={20} />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "angular",
      name: "Angular",
      icon: <SiAngular size={20} />,
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      id: "vue",
      name: "Vue.js",
      icon: <FaVuejs size={20} />,
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      id: "csharp",
      name: "C#",
      icon: <TbBrandCSharp size={20} />,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      id: "nextjs",
      name: "Next.js",
      icon: <SiNextdotjs size={20} />,
      color: "bg-gray-50 text-gray-600 border-gray-200",

    },
    {
      id: "docker",
      name: "Docker",
      icon: <SiDocker size={20} />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id:"dotnet",
      name: ".NET",
      icon: <SiDotnet size={20} />,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <SiDocker size={20} />,
      color: "bg-green-50 text-green-600 border-green-200",
    },
    {
      id: "aws",
      name: "AWS",
      icon: <FaAws size={20} />,
      color: "bg-yellow-50 text-yellow-600 border-yellow-200",
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: <SiMysql size={20} />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "git",
      name: "Git",
      icon: <SiGit size={20} />,
      color: "bg-red-50 text-red-600 border-red-200",
    },
    {
      id: "azure",
      name: "Azure",
      icon: < VscAzure size={20} />,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "github",
      name: "GitHub",
      icon: <SiGithub size={20} />,
      color: "bg-gray-50 text-gray-600 border-gray-200",
    },

  ];

  const levels = [
    {
      id: "basic",
      name: "Basic",
      questions: 20,
      icon: <Star size={16} />,
      color: "bg-green-50 text-green-600",
    },
    {
      id: "intermediate",
      name: "Intermediate",
      questions: 40,
      icon: <Zap size={16} />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: "advanced",
      name: "Advanced",
      questions: 60,
      icon: <Target size={16} />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  // Here this function will handle what you select the tech 
  const handleTechSelect = (techId) => {
    if (selectedTech === techId) {
      setSelectedTech(null); // all the initial values are defined here
      setSelectedLevel(null);
    } else {
      setSelectedTech(techId);
      setSelectedLevel(null);
    }
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    submittedRef.current = false;

    if (window.innerWidth < 768) setIsSidebarOpen(true);

    setTimeout(() => {
      const el = asideRef.current?.querySelector(`[data-tech="${techId}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  };

  // Here this function will handle what you select the level
  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    submittedRef.current = false;
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = {
      ...userAnswers,
      [currentQuestion]: answerIndex,
    };
    setUserAnswers(newAnswers);
    setTimeout(() => {
      if (currentQuestion < getQuestions().length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setShowResults(true);
      }   
    }, 500);
  };

  const getQuestions = () => {
    if (!selectedTech || !selectedLevel) return [];
    return questionsData[selectedTech]?.[selectedLevel] || [];
  };

  // calculate score
  const calculateScore = () => {
    const questions = getQuestions();
    let correct = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: questions.length
        ? Math.round((correct / questions.length) * 100)
        : 0,
    };
  };
  


  const questions = getQuestions();
  const currentQ = questions[currentQuestion];
  const score = calculateScore();

const getPerformanceStatus = () => {
  if (score.percentage >= 90)
    return {
      text: "Outstanding",  // ✅ Ta bort ! för att matcha enum
      color: "bg-gradient-to-r from-amber-200 to-amber-300",
      icon: <Sparkles className="text-amber-800" />,
    };
  if (score.percentage >= 75)
    return {
      text: "Excellent",  // ✅ Ta bort !
      color: "bg-gradient-to-r from-blue-200 to-indigo-200",
      icon: <Trophy className="text-blue-800" />,
    };
  if (score.percentage >= 60)
    return {
      text: "Good",  // ✅ Ändra från "Good Job" till "Good"
      color: "bg-gradient-to-r from-green-200 to-teal-200", 
      icon: <Award className="text-green-800" />,
    };
  return {
    text: "Needs Improvement",  // ✅ Matchar enum
    color: "bg-gradient-to-r from-gray-200 to-gray-300",
    icon: <BookOpen className="text-gray-800" />,
  };
};

  const performance = getPerformanceStatus();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev); // Toggle sidebar for smaller screen

  const getAuthHeader = () => {
    const token = localStorage.getItem("token") || 
    localStorage.getItem("authToken") || null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  };


  const submitResults = async () => {
  if (submittedRef.current) return;
  if (!selectedTech || !selectedLevel) return;

  // Konvertera level till stor bokstav för att matcha backend enum
  const formattedLevel = selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1);
  
  const payload = {
    title: `${selectedTech.toUpperCase()} - ${formattedLevel} quiz`,
    technology: selectedTech,
    level: formattedLevel,  // ✅ Stor bokstav
    totalQuestions: score.total,
    correctAnswers: score.correct,  // ✅ Rätt fältnamn
    wrong: score.total - score.correct,
    // Lägg till saknade obligatoriska fält
    score: score.percentage,
    performance: getPerformanceStatus().text.replace('!', '') // Ta bort ! från texten
  };

  console.log('Sending payload:', payload); // DEBUG

  try {
    submittedRef.current = true;
    toast.info('Saving your results...');
    const res = await axios.post(`${API_BASE}/api/results`, payload, {
      headers: {...getAuthHeader(), 'Content-Type': 'application/json' },
      timeout: 10000,
    });
    
    if (res.data && res.data.success) {
      toast.success('Results saved successfully!');
    } else {
      toast.warn('Failed to save results.');
      submittedRef.current = false;
    }
  } catch (err) {
    submittedRef.current = false;
    console.error("Error saving result:", err?.response?.data || err.message || err);
    toast.error("Could not save result. Check console or network.");
  }
};

  useEffect(() => {
    if (showResults) {
      submitResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults]);

  return (
    <div className={sidebarStyles.pageContainer}>
      {isSidebarOpen && window.innerWidth < 768 && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className={sidebarStyles.mobileOverlay}
        />
      )}

      <div className={sidebarStyles.mainContainer}>
        <aside 
          ref={asideRef} 
          className={`${sidebarStyles.sidebar} ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className={sidebarStyles.sidebarHeader}>
            <div className={sidebarStyles.headerDecoration1}></div>
            <div className={sidebarStyles.headerDecoration2}></div>

            <div className={sidebarStyles.headerContent}>
              <div className={sidebarStyles.logoContainer}>
                <div className={sidebarStyles.logoIcon}>
                  <BookOpen size={28} className='text-indigo-700' />
                </div>
                <div>
                  <h1 className={sidebarStyles.logoTitle}>Tech Quiz</h1>
                  <p className={sidebarStyles.logoSubtitle}>
                    Test your knowledge & improve skills 
                  </p>
                </div>
              </div>
              <button onClick={toggleSidebar} className={sidebarStyles.closeButton}>
                <X size={20} />
              </button>
            </div>
          </div>

          <div className={sidebarStyles.sidebarContent}>
            <div className={sidebarStyles.technologiesHeader}>
              <h2 className={sidebarStyles.technologiesTitle}>Technologies</h2>
              <span className={sidebarStyles.technologiesCount}>
                {technologies.length} options
              </span>
            </div>

            {technologies.map((tech) => (
              <div key={tech.id} className={sidebarStyles.techItem} data-tech={tech.id}>
                <button 
                  onClick={() => handleTechSelect(tech.id)} 
                  className={`${sidebarStyles.techButton} ${
                    selectedTech === tech.id
                      ? `${tech.color} ${sidebarStyles.techButtonSelected}`
                      : sidebarStyles.techButtonNormal
                  }`}
                > 
                  <div className={sidebarStyles.techButtonContent}>
                    <span className={`${sidebarStyles.techIcon} ${tech.color}`}>
                      {tech.icon}
                    </span>
                    <span className={sidebarStyles.techName}>{tech.name}</span>
                  </div>

                  {selectedTech === tech.id ? (
                    <ChevronDown size={18} className='text-current' />
                  ) : (
                    <ChevronRight size={18} className='text-gray-500' />
                  )}
                </button>

                {selectedTech === tech.id && (
                  <div className={sidebarStyles.levelsContainer}>
                    <h3 className={sidebarStyles.levelsTitle}>
                      <span>Selected Level: </span>
                      <span className={sidebarStyles.techBadge}>
                        {technologies.find((t) => t.id === selectedTech).name}
                      </span>
                    </h3>

                    {levels.map((level) => (
                      <button 
                        key={level.id} 
                        onClick={() => handleLevelSelect(level.id)}
                        className={`${sidebarStyles.levelButton} ${
                          selectedLevel === level.id
                            ? `${level.color} ${sidebarStyles.levelButtonSelected}`
                            : sidebarStyles.levelButtonNormal
                        }`}
                      >
                        <div className={sidebarStyles.levelButtonContent}>
                          <span 
                            className={`${sidebarStyles.levelIcon} ${
                              selectedLevel === level.id ? 'bg-white/40' : 'bg-gray-100'
                            }`}
                          >
                            {level.icon}
                          </span>
                          <span>{level.name}</span>
                        </div>
                        <span className={sidebarStyles.levelQuestions}>
                          {level.questions} Qs
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={sidebarStyles.sidebarFooter}>
            <div className={sidebarStyles.footerContent}>
              <div className={sidebarStyles.footerContentCenter}>
                <p>Master your skills one quiz at a time</p>
                <p className={sidebarStyles.footerHighlight}>
                  Keep Learning, Keep Growing!
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main className={sidebarStyles.mainContent}>
          <div className={sidebarStyles.mobileHeader}>
            <button
              onClick={toggleSidebar}
              className={sidebarStyles.menuButton}
            >
              <Menu size={20} />
            </button>

            <div className={sidebarStyles.mobileTitle}>
              {selectedTech ? (
                <div className={sidebarStyles.mobileTechInfo}>
                  <div
                    className={`${sidebarStyles.mobileTechIcon} ${
                      technologies.find((t) => t.id === selectedTech).color
                    }`}
                  >
                    {technologies.find((t) => t.id === selectedTech).icon}
                  </div>
                  <div className={sidebarStyles.mobileTechText}>
                    <div className={sidebarStyles.mobileTechName}>
                      {technologies.find((t) => t.id === selectedTech).name}
                    </div>
                    <div className={sidebarStyles.mobileTechLevel}>
                      {selectedLevel
                        ? `${
                            selectedLevel.charAt(0).toUpperCase() +
                            selectedLevel.slice(1)
                          } level`
                        : "Select level"}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={sidebarStyles.mobilePlaceholder}>
                  Select a technology from the menu
                </div>
              )}
            </div>
          </div>

          {selectedTech && !selectedLevel && (
            <div className={sidebarStyles.mobileLevels}>
              <div className={sidebarStyles.mobileLevelsContainer}>
                {levels.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => handleLevelSelect(l.id)}
                    className={sidebarStyles.mobileLevelButton}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!selectedTech ? (
            <div className={sidebarStyles.welcomeContainer}>
              <div className={sidebarStyles.welcomeContent}>
                <div className={sidebarStyles.welcomeIcon}>
                  <Award size={64} className="text-indigo-700" />
                </div>
                <h2 className={sidebarStyles.welcomeTitle}>
                  Welcome to Tech Quiz Master
                </h2>
                <p className={sidebarStyles.welcomeDescription}>
                  Select a technology from the sidebar to start your quiz
                  journey. Test your knowledge at basic, intermediate, or
                  advanced levels.
                </p>

                <div className={sidebarStyles.featuresGrid}>
                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}>
                      <Star size={20} />
                    </div>
                    <h3 className={sidebarStyles.featureTitle}>
                      Multiple Technologies
                    </h3>
                    <p className={sidebarStyles.featureDescription}>
                      HTML, CSS, JavaScript, React, and more
                    </p>
                  </div>

                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}>
                      <Zap size={20} />
                    </div>
                    <h3 className={sidebarStyles.featureTitle}>
                      Three Difficulty Levels
                    </h3>
                    <p className={sidebarStyles.featureDescription}>
                      Basic, Intermediate, and Advanced challenges
                    </p>
                  </div>

                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}>
                      <Target size={20} />
                    </div>
                    <h3 className={sidebarStyles.featureTitle}>
                      Instant Feedback
                    </h3>
                    <p className={sidebarStyles.featureDescription}>
                      Get detailed results and performance analysis
                    </p>
                  </div>
                </div>

                <div className={sidebarStyles.welcomePrompt}>
                  <p className={sidebarStyles.welcomePromptText}>
                    <Sparkles size={16} className="mr-2" />
                    Select any technology to begin your learning adventure!
                  </p>
                </div>
              </div>
            </div>
          ) : !selectedLevel ? (
            <div className={sidebarStyles.levelSelectionContainer}>
              <div className={sidebarStyles.levelSelectionContent}>
                <div
                  className={`${sidebarStyles.techSelectionIcon} ${
                    technologies.find((t) => t.id === selectedTech).color
                  }`}
                >
                  {technologies.find((t) => t.id === selectedTech).icon}
                </div>
                <h2 className={sidebarStyles.techSelectionTitle}>
                  {technologies.find((t) => t.id === selectedTech).name} Quiz
                </h2>
                <p className={sidebarStyles.techSelectionDescription}>
                  Select a difficulty level to begin your challenge
                </p>

                <div className={sidebarStyles.techSelectionPrompt}>
                  <p className={sidebarStyles.techSelectionPromptText}>
                    Get ready to test your{" "}
                    {technologies.find((t) => t.id === selectedTech).name}{" "}
                    knowledge!
                  </p>
                </div>
              </div>
            </div>
          ) : showResults ? (
            <div className={sidebarStyles.resultsContainer}>
              <div className={sidebarStyles.resultsContent}>
                <div className={sidebarStyles.resultsHeader}>
                  <div
                    className={`${sidebarStyles.performanceIcon} ${performance.color}`}
                  >
                    {performance.icon}
                  </div>
                  <h2 className={sidebarStyles.resultsTitle}>
                    Quiz Completed!
                  </h2>
                  <p className={sidebarStyles.resultsSubtitle}>
                    You've completed the {selectedLevel} level
                  </p>
                  <div
                    className={`${sidebarStyles.performanceBadge} ${performance.color}`}
                  >
                    {performance.text}
                  </div>

                  <div className={sidebarStyles.scoreGrid}>
                    <div className={sidebarStyles.scoreCard}>
                      <div className={sidebarStyles.scoreIcon}>
                        <CheckCircle size={24} />
                      </div>
                      <p className={sidebarStyles.scoreNumber}>
                        {score.correct}
                      </p>
                      <p className={sidebarStyles.scoreLabel}>
                        Correct Answers
                      </p>
                    </div>

                    <div className={sidebarStyles.scoreCard}>
                      <div className={sidebarStyles.scoreIcon}>
                        <XCircle size={24} />
                      </div>
                      <p className={sidebarStyles.scoreNumber}>
                        {score.total - score.correct}
                      </p>
                      <p className={sidebarStyles.scoreLabel}>
                        Incorrect Answers
                      </p>
                    </div>
                  </div>

                  <div className={sidebarStyles.scoreProgress}>
                    <div className={sidebarStyles.scoreProgressHeader}>
                      <span className={sidebarStyles.scoreProgressTitle}>
                        Overall Score
                      </span>
                      <span className={sidebarStyles.scoreProgressPercentage}>
                        {score.percentage}%
                      </span>
                    </div>
                    <div className={sidebarStyles.scoreProgressBar}>
                      <div
                        className={`${sidebarStyles.scoreProgressFill} ${
                          score.percentage >= 80
                            ? "bg-green-400"
                            : score.percentage >= 60
                            ? "bg-yellow-400"
                            : "bg-red-400"
                        }`}
                        style={{ width: `${score.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : currentQ ? (
            <div className={sidebarStyles.quizContainer}>
              <div className={sidebarStyles.quizHeader}>
                <div className={sidebarStyles.quizTitleContainer}>
                  <h1 className={sidebarStyles.quizTitle}>
                    {technologies.find((t) => t.id === selectedTech).name} -{" "}
                    {selectedLevel.charAt(0).toUpperCase() +
                      selectedLevel.slice(1)}{" "}
                    Level
                  </h1>
                  <span className={sidebarStyles.quizCounter}>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>

                <div className={sidebarStyles.progressBar}>
                  <div
                    className={sidebarStyles.progressFill}
                    style={{
                      width: `${
                        ((currentQuestion + 1) / (questions.length || 1)) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div className={sidebarStyles.questionContainer}>
                <div className={sidebarStyles.questionHeader}>
                  <div className={sidebarStyles.questionIcon}>
                    <Target size={20} />
                  </div>
                  <h2 className={sidebarStyles.questionText}>
                    {currentQ.question}
                  </h2>
                </div>

                <div className={sidebarStyles.optionsContainer}>
                  {currentQ.options.map((option, index) => {
                    const isSelected = userAnswers[currentQuestion] === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showFeedback =
                      userAnswers[currentQuestion] !== undefined;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={userAnswers[currentQuestion] !== undefined}
                        className={`${sidebarStyles.optionButton} ${
                          isSelected
                            ? isCorrect
                              ? sidebarStyles.optionCorrect
                              : sidebarStyles.optionIncorrect
                            : showFeedback && isCorrect
                            ? sidebarStyles.optionCorrect
                            : sidebarStyles.optionNormal
                        }`}
                      >
                        <div className={sidebarStyles.optionContent}>
                          {showFeedback ? (
                            isSelected ? (
                              isCorrect ? (
                                <CheckCircle
                                  size={20}
                                  className={sidebarStyles.optionIconCorrect}
                                />
                              ) : (
                                <XCircle
                                  size={20}
                                  className={sidebarStyles.optionIconIncorrect}
                                />
                              )
                            ) : isCorrect ? (
                              <CheckCircle
                                size={20}
                                className={sidebarStyles.optionIconCorrect}
                              />
                            ) : (
                              <div className={sidebarStyles.optionIconEmpty} />
                            )
                          ) : (
                            <div className={sidebarStyles.optionIconEmpty} />
                          )}
                          <span className={sidebarStyles.optionText}>
                            {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className={sidebarStyles.loadingContainer}>
              <div className={sidebarStyles.loadingContent}>
                <div className={sidebarStyles.loadingSpinner} />
                <h3 className={sidebarStyles.loadingTitle}>
                  Preparing Your Quiz
                </h3>
                <p className={sidebarStyles.loadingDescription}>
                  Loading questions...
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
      <style>{sidebarStyles.customStyles}</style>
    </div>
  );
};

export default Sidebar;


 */

// client/src/components/Sidebar.jsx
// client/src/components/Sidebar.jsx
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { sidebarStyles } from '../assets/dummyStyles';
import questionsData from '../assets/dummydata';
import { Star, Zap, Target, Sparkles, Trophy, Award, BookOpen, X, ChevronDown, ChevronRight, Menu, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaAws, FaJava, FaVuejs } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { TbBrandCSharp } from 'react-icons/tb';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiPython, SiCplusplus, SiBootstrap, SiTailwindcss, SiTypescript,
  SiAngular, SiNextdotjs, SiDocker, SiDotnet, SiMysql, SiGit, SiGithub
} from 'react-icons/si';

const API_BASE = 'http://localhost:5000';

const Sidebar = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const submittedRef = useRef(false);
  const asideRef = useRef(null);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen && window.innerWidth < 768 ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isSidebarOpen]);

  // Technologies & Levels
  const technologies = useMemo(() => [
    { id: "html", name: "HTML", icon: <SiHtml5 size={20} />, color: "bg-orange-50 text-orange-600 border-orange-200" },
    { id: "css", name: "CSS", icon: <SiCss3 size={20} />, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { id: "js", name: "JavaScript", icon: <SiJavascript size={20} />, color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
    { id: "react", name: "React", icon: <SiReact size={20} />, color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { id: "node", name: "Node.js", icon: <SiNodedotjs size={20} />, color: "bg-green-50 text-green-600 border-green-200" },
    { id: "mongodb", name: "MongoDB", icon: <SiMongodb size={20} />, color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { id: "java", name: "Java", icon: <FaJava size={20} />, color: "bg-red-50 text-red-600 border-red-200" },
    { id: "python", name: "Python", icon: <SiPython size={20} />, color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    { id: "cpp", name: "C++", icon: <SiCplusplus size={20} />, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { id: "bootstrap", name: "Bootstrap", icon: <SiBootstrap size={20} />, color: "bg-pink-50 text-pink-600 border-pink-200" },
    { id: "tailwind", name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { id: "typescript", name: "TypeScript", icon: <SiTypescript size={20} />, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { id: "angular", name: "Angular", icon: <SiAngular size={20} />, color: "bg-red-50 text-red-600 border-red-200" },
    { id: "vue", name: "Vue.js", icon: <FaVuejs size={20} />, color: "bg-green-50 text-green-600 border-green-200" },
    { id: "csharp", name: "C#", icon: <TbBrandCSharp size={20} />, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { id: "nextjs", name: "Next.js", icon: <SiNextdotjs size={20} />, color: "bg-gray-50 text-gray-600 border-gray-200" },
    { id: "docker", name: "Docker", icon: <SiDocker size={20} />, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { id:"dotnet", name: ".NET", icon: <SiDotnet size={20} />, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { id: "devops", name: "DevOps", icon: <SiDocker size={20} />, color: "bg-green-50 text-green-600 border-green-200" },
    { id: "aws", name: "AWS", icon: <FaAws size={20} />, color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
    { id: "mysql", name: "MySQL", icon: <SiMysql size={20} />, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { id: "git", name: "Git", icon: <SiGit size={20} />, color: "bg-red-50 text-red-600 border-red-200" },
    { id: "azure", name: "Azure", icon: <VscAzure size={20} />, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { id: "github", name: "GitHub", icon: <SiGithub size={20} />, color: "bg-gray-50 text-gray-600 border-gray-200" },
  ], []);

  const levels = useMemo(() => [
    { id: "basic", name: "Basic", questions: 20, icon: <Star size={16} />, color: "bg-green-50 text-green-600" },
    { id: "intermediate", name: "Intermediate", questions: 40, icon: <Zap size={16} />, color: "bg-blue-50 text-blue-600" },
    { id: "advanced", name: "Advanced", questions: 60, icon: <Target size={16} />, color: "bg-purple-50 text-purple-600" },
  ], []);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const getQuestions = useMemo(() => {
    if (!selectedTech || !selectedLevel) return [];
    return questionsData[selectedTech]?.[selectedLevel] || [];
  }, [selectedTech, selectedLevel]);

  const calculateScore = useMemo(() => {
    const questions = getQuestions;
    let correct = 0;
    questions.forEach((q, i) => {
      if (userAnswers[i] === q.correctAnswer) correct++;
    });
    return {
      correct,
      total: questions.length,
      percentage: questions.length ? Math.round((correct / questions.length) * 100) : 0,
    };
  }, [userAnswers, getQuestions]);

  const getPerformanceStatus = useCallback(() => {
    const { percentage } = calculateScore;
    if (percentage >= 90) return { text: "Outstanding", color: "bg-gradient-to-r from-amber-200 to-amber-300", icon: <Sparkles className="text-amber-800" /> };
    if (percentage >= 75) return { text: "Excellent", color: "bg-gradient-to-r from-blue-200 to-indigo-200", icon: <Trophy className="text-blue-800" /> };
    if (percentage >= 60) return { text: "Good", color: "bg-gradient-to-r from-green-200 to-teal-200", icon: <Award className="text-green-800" /> };
    return { text: "Needs Improvement", color: "bg-gradient-to-r from-gray-200 to-gray-300", icon: <BookOpen className="text-gray-800" /> };
  }, [calculateScore]);

  const handleTechSelect = (techId) => {
    setSelectedTech(prev => prev === techId ? null : techId);
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    submittedRef.current = false;

    if (window.innerWidth < 768) setIsSidebarOpen(true);

    setTimeout(() => {
      const el = asideRef.current?.querySelector(`[data-tech="${techId}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  };

  const handleLevelSelect = (levelId) => {
    setSelectedLevel(levelId);
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    submittedRef.current = false;
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestion]: answerIndex }));
    setTimeout(() => {
      if (currentQuestion < getQuestions.length - 1) setCurrentQuestion(prev => prev + 1);
      else setShowResults(true);
    }, 500);
  };

  const getAuthHeader = () => {
    const token = localStorage.getItem("token") || localStorage.getItem("authToken") || null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const submitResults = useCallback(async () => {
    if (submittedRef.current || !selectedTech || !selectedLevel) return;

    const formattedLevel = selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1);
    const score = calculateScore;

    const payload = {
      title: `${selectedTech.toUpperCase()} - ${formattedLevel} quiz`,
      technology: selectedTech,
      level: formattedLevel,
      totalQuestions: score.total,
      correctAnswers: score.correct,
      wrong: score.total - score.correct,
      score: score.percentage,
      performance: getPerformanceStatus().text.replace('!', '')
    };

    console.log('Sending payload:', payload);

    try {
      submittedRef.current = true;
      toast.info('Saving your results...');
      const res = await axios.post(`${API_BASE}/api/results`, payload, {
        headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
        timeout: 10000,
      });

      if (res.data?.success) toast.success('Results saved successfully!');
      else {
        toast.warn('Failed to save results.');
        submittedRef.current = false;
      }
    } catch (err) {
      submittedRef.current = false;
      console.error("Error saving result:", err?.response?.data || err.message || err);
      toast.error("Could not save result. Check console or network.");
    }
  }, [selectedTech, selectedLevel, calculateScore, getPerformanceStatus]);

  useEffect(() => {
    if (showResults) submitResults();
  }, [showResults, submitResults]);

  const currentQ = getQuestions[currentQuestion];
  const performance = getPerformanceStatus();
  const score = calculateScore;

  return (
    <div className={sidebarStyles.pageContainer}>
      {isSidebarOpen && window.innerWidth < 768 && <div onClick={() => setIsSidebarOpen(false)} className={sidebarStyles.mobileOverlay} />}
      <div className={sidebarStyles.mainContainer}>
        <aside ref={asideRef} className={`${sidebarStyles.sidebar} ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className={sidebarStyles.sidebarHeader}>
            <div className={sidebarStyles.headerDecoration1}></div>
            <div className={sidebarStyles.headerDecoration2}></div>
            <div className={sidebarStyles.headerContent}>
              <div className={sidebarStyles.logoContainer}>
                <div className={sidebarStyles.logoIcon}>
                  <BookOpen size={28} className='text-indigo-700' />
                </div>
                <div>
                  <h1 className={sidebarStyles.logoTitle}>Tech Quiz</h1>
                  <p className={sidebarStyles.logoSubtitle}>Test your knowledge & improve skills</p>
                </div>
              </div>
              <button onClick={toggleSidebar} className={sidebarStyles.closeButton}><X size={20} /></button>
            </div>
          </div>

          <div className={sidebarStyles.sidebarContent}>
            <div className={sidebarStyles.technologiesHeader}>
              <h2 className={sidebarStyles.technologiesTitle}>Technologies</h2>
              <span className={sidebarStyles.technologiesCount}>{technologies.length} options</span>
            </div>

            {technologies.map((tech) => (
              <div key={tech.id} className={sidebarStyles.techItem} data-tech={tech.id}>
                <button onClick={() => handleTechSelect(tech.id)} className={`${sidebarStyles.techButton} ${selectedTech === tech.id ? `${tech.color} ${sidebarStyles.techButtonSelected}` : sidebarStyles.techButtonNormal}`}>
                  <div className={sidebarStyles.techButtonContent}>
                    <span className={`${sidebarStyles.techIcon} ${tech.color}`}>{tech.icon}</span>
                    <span className={sidebarStyles.techName}>{tech.name}</span>
                  </div>
                  {selectedTech === tech.id ? <ChevronDown size={18} className='text-current' /> : <ChevronRight size={18} className='text-gray-500' />}
                </button>

                {selectedTech === tech.id && (
                  <div className={sidebarStyles.levelsContainer}>
                    <h3 className={sidebarStyles.levelsTitle}>
                      <span>Selected Level: </span>
                      <span className={sidebarStyles.techBadge}>{technologies.find((t) => t.id === selectedTech).name}</span>
                    </h3>
                    {levels.map((level) => (
                      <button key={level.id} onClick={() => handleLevelSelect(level.id)} className={`${sidebarStyles.levelButton} ${selectedLevel === level.id ? `${level.color} ${sidebarStyles.levelButtonSelected}` : sidebarStyles.levelButtonNormal}`}>
                        <div className={sidebarStyles.levelButtonContent}>
                          <span className={`${sidebarStyles.levelIcon} ${selectedLevel === level.id ? 'bg-white/40' : 'bg-gray-100'}`}>{level.icon}</span>
                          <span>{level.name}</span>
                        </div>
                        <span className={sidebarStyles.levelQuestions}>{level.questions} Qs</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={sidebarStyles.sidebarFooter}>
            <div className={sidebarStyles.footerContent}>
              <div className={sidebarStyles.footerContentCenter}>
                <p>Master your skills one quiz at a time</p>
                <p className={sidebarStyles.footerHighlight}>Keep Learning, Keep Growing!</p>
              </div>
            </div>
          </div>
        </aside>

        <main className={sidebarStyles.mainContent}>
          <div className={sidebarStyles.mobileHeader}>
            <button onClick={toggleSidebar} className={sidebarStyles.menuButton}><Menu size={20} /></button>
            <div className={sidebarStyles.mobileTitle}>
              {selectedTech ? (
                <div className={sidebarStyles.mobileTechInfo}>
                  <div className={`${sidebarStyles.mobileTechIcon} ${technologies.find((t) => t.id === selectedTech).color}`}>
                    {technologies.find((t) => t.id === selectedTech).icon}
                  </div>
                  <div className={sidebarStyles.mobileTechText}>
                    <div className={sidebarStyles.mobileTechName}>{technologies.find((t) => t.id === selectedTech).name}</div>
                    <div className={sidebarStyles.mobileTechLevel}>{selectedLevel ? `${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} level` : "Select level"}</div>
                  </div>
                </div>
              ) : (
                <div className={sidebarStyles.mobilePlaceholder}>Select a technology from the menu</div>
              )}
            </div>
          </div>

          {selectedTech && !selectedLevel && (
            <div className={sidebarStyles.mobileLevels}>
              <div className={sidebarStyles.mobileLevelsContainer}>
                {levels.map((l) => (
                  <button key={l.id} onClick={() => handleLevelSelect(l.id)} className={sidebarStyles.mobileLevelButton}>{l.name}</button>
                ))}
              </div>
            </div>
          )}

          {!selectedTech ? (
            <div className={sidebarStyles.welcomeContainer}>
              <div className={sidebarStyles.welcomeContent}>
                <div className={sidebarStyles.welcomeIcon}><Award size={64} className="text-indigo-700" /></div>
                <h2 className={sidebarStyles.welcomeTitle}>Welcome to Tech Quiz Master</h2>
                <p className={sidebarStyles.welcomeDescription}>Select a technology from the sidebar to start your quiz journey. Test your knowledge at basic, intermediate, or advanced levels.</p>
                <div className={sidebarStyles.featuresGrid}>
                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}><Star size={20} /></div>
                    <h3 className={sidebarStyles.featureTitle}>Multiple Technologies</h3>
                    <p className={sidebarStyles.featureDescription}>HTML, CSS, JavaScript, React, and more</p>
                  </div>
                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}><Zap size={20} /></div>
                    <h3 className={sidebarStyles.featureTitle}>Three Difficulty Levels</h3>
                    <p className={sidebarStyles.featureDescription}>Basic, Intermediate, and Advanced challenges</p>
                  </div>
                  <div className={sidebarStyles.featureCard}>
                    <div className={sidebarStyles.featureIcon}><Target size={20} /></div>
                    <h3 className={sidebarStyles.featureTitle}>Instant Feedback</h3>
                    <p className={sidebarStyles.featureDescription}>Get detailed results and performance analysis</p>
                  </div>
                </div>
                <div className={sidebarStyles.welcomePrompt}>
                  <p className={sidebarStyles.welcomePromptText}><Sparkles size={16} className="mr-2" />Select any technology to begin your learning adventure!</p>
                </div>
              </div>
            </div>
          ) : !selectedLevel ? (
            <div className={sidebarStyles.levelSelectionContainer}>
              <div className={sidebarStyles.levelSelectionContent}>
                <div className={`${sidebarStyles.techSelectionIcon} ${technologies.find((t) => t.id === selectedTech).color}`}>
                  {technologies.find((t) => t.id === selectedTech).icon}
                </div>
                <h2 className={sidebarStyles.techSelectionTitle}>{technologies.find((t) => t.id === selectedTech).name} Quiz</h2>
                <p className={sidebarStyles.techSelectionDescription}>Select a difficulty level to begin your challenge</p>
                <div className={sidebarStyles.techSelectionPrompt}>
                  <p className={sidebarStyles.techSelectionPromptText}>Get ready to test your {technologies.find((t) => t.id === selectedTech).name} knowledge!</p>
                </div>
              </div>
            </div>
          ) : showResults ? (
            <div className={sidebarStyles.resultsContainer}>
              <div className={sidebarStyles.resultsContent}>
                <div className={sidebarStyles.resultsHeader}>
                  <div className={`${sidebarStyles.performanceIcon} ${performance.color}`}>{performance.icon}</div>
                  <h2 className={sidebarStyles.resultsTitle}>Quiz Completed!</h2>
                  <p className={sidebarStyles.resultsSubtitle}>You've completed the {selectedLevel} level</p>
                  <div className={`${sidebarStyles.performanceBadge} ${performance.color}`}>{performance.text}</div>
                  <div className={sidebarStyles.scoreGrid}>
                    <div className={sidebarStyles.scoreCard}>
                      <div className={sidebarStyles.scoreIcon}><CheckCircle size={24} /></div>
                      <p className={sidebarStyles.scoreNumber}>{score.correct}</p>
                      <p className={sidebarStyles.scoreLabel}>Correct Answers</p>
                    </div>
                    <div className={sidebarStyles.scoreCard}>
                      <div className={sidebarStyles.scoreIcon}><XCircle size={24} /></div>
                      <p className={sidebarStyles.scoreNumber}>{score.total - score.correct}</p>
                      <p className={sidebarStyles.scoreLabel}>Incorrect Answers</p>
                    </div>
                  </div>
                  <div className={sidebarStyles.scoreProgress}>
                    <div className={sidebarStyles.scoreProgressHeader}>
                      <span className={sidebarStyles.scoreProgressTitle}>Overall Score</span>
                      <span className={sidebarStyles.scoreProgressPercentage}>{score.percentage}%</span>
                    </div>
                    <div className={sidebarStyles.scoreProgressBar}>
                      <div className={`${sidebarStyles.scoreProgressFill} ${score.percentage >= 80 ? "bg-green-400" : score.percentage >= 60 ? "bg-yellow-400" : "bg-red-400"}`} style={{ width: `${score.percentage}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : currentQ ? (
            <div className={sidebarStyles.quizContainer}>
              <div className={sidebarStyles.quizHeader}>
                <div className={sidebarStyles.quizTitleContainer}>
                  <h1 className={sidebarStyles.quizTitle}>{technologies.find((t) => t.id === selectedTech).name} - {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Level</h1>
                  <span className={sidebarStyles.quizCounter}>Question {currentQuestion + 1} of {getQuestions.length}</span>
                </div>
                <div className={sidebarStyles.progressBar}>
                  <div className={sidebarStyles.progressFill} style={{ width: `${((currentQuestion + 1) / (getQuestions.length || 1)) * 100}%` }} />
                </div>
              </div>
              <div className={sidebarStyles.questionContainer}>
                <div className={sidebarStyles.questionHeader}>
                  <div className={sidebarStyles.questionIcon}><Target size={20} /></div>
                  <h2 className={sidebarStyles.questionText}>{currentQ.question}</h2>
                </div>
                <div className={sidebarStyles.optionsContainer}>
                  {currentQ.options.map((option, index) => {
                    const isSelected = userAnswers[currentQuestion] === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showFeedback = userAnswers[currentQuestion] !== undefined;
                    return (
                      <button key={index} onClick={() => handleAnswerSelect(index)} disabled={userAnswers[currentQuestion] !== undefined} className={`${sidebarStyles.optionButton} ${isSelected ? isCorrect ? sidebarStyles.optionCorrect : sidebarStyles.optionIncorrect : showFeedback && isCorrect ? sidebarStyles.optionCorrect : sidebarStyles.optionNormal}`}>
                        <div className={sidebarStyles.optionContent}>
                          {showFeedback ? isSelected ? isCorrect ? <CheckCircle size={20} className={sidebarStyles.optionIconCorrect} /> : <XCircle size={20} className={sidebarStyles.optionIconIncorrect} /> : isCorrect ? <CheckCircle size={20} className={sidebarStyles.optionIconCorrect} /> : <div className={sidebarStyles.optionIconEmpty} /> : <div className={sidebarStyles.optionIconEmpty} />}
                          <span className={sidebarStyles.optionText}>{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className={sidebarStyles.loadingContainer}>
              <div className={sidebarStyles.loadingContent}>
                <div className={sidebarStyles.loadingSpinner} />
                <h3 className={sidebarStyles.loadingTitle}>Preparing Your Quiz</h3>
                <p className={sidebarStyles.loadingDescription}>Loading questions...</p>
              </div>
            </div>
          )}
        </main>
      </div>
      <style>{sidebarStyles.customStyles}</style>
    </div>
  );
};

export default Sidebar;
