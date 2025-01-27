import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Lessons.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Lessons = () => {
  const location = useLocation();
  const { language } = location.state || {};
  const [lessons, setLessons] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true); // Initially loading is true
  const [level, setLevel] = useState("A1"); 
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  // Fetch lessons when the language is provided
  useEffect(() => {
    if (language) {
      setLoading(true); // Start loading
      fetch(`https://qurocity-lms-backend.onrender.com/api/lessons/${language}?level=${level}`)
        .then((response) => response.json())
        .then((data) => {
          setLessons(data);

          // Set the first lesson and its first video by default
          if (data.length > 0) {
            setSelectedLessonId(data[0]._id); // Set the first lesson as active
            if (data[0].videos && data[0].videos.length > 0) {
              setCurrentVideo(data[0].videos[0]); // Play the first video of the first lesson
            }
          }
          setLoading(false); // Data fetched successfully
        })
        .catch((error) => {
          console.error("Error fetching lessons:", error);
          setLoading(false); // Stop loading even if there's an error
        });
    }
  }, [language, level]);

  const toggleLesson = (lessonId) => {
    // Toggle the visibility of the selected lesson
    setSelectedLessonId((prev) => (prev === lessonId ? null : lessonId));
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video); // Change the current video
  };


  // change level 
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };


  // Helper function to get image url 
  const getLanguage = (language)=>{
   const ImageURL = {
     english: "/assets/England.jpg",
     spanish: "/assets/Spain.jpg",
     mandarin: "/assets/China.jpg",
     french: "/assets/French.jpg",
     japanese: "/assets/Japan.jpg",
     korean:"/assets/Korea.jpg",
     german:"/assets/German.jpg"
     
   }
   return ImageURL[language];
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Show Loading Indicator */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            marginLeft: "50%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
        {/* Filter lession by level */}
            <div className={styles.filterSection}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={getLanguage(language)} alt="flag" />
                <span htmlFor="levelDropdown">{language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()}</span>
              </div>
              <select
                id="levelDropdown"
                className={styles.levelDropdown}
                value={level}
                onChange={handleLevelChange}
              >
                {levels.map((levelOption) => (
                  <option key={levelOption} value={levelOption}>
                    {levelOption}
                  </option>
                ))}
              </select>
              
            </div>
          {/* Sidebar Section */}
          <div className={styles.left}>
            {currentVideo ? (
              <div className={styles.videoWrapper}>
                <iframe
                  src={currentVideo.url}
                  title={currentVideo.title}
                  className={styles.videoPlayer}
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            ) : (
              <p></p>
            )}
            <div className={styles.videoDetails}>
              <h2>{currentVideo?.title || ""}</h2>
              <p>{currentVideo?.description || ""}</p>
            </div>
          </div>

          {/* Lessons Section */}
          <div className={styles.right}>
            <div className={styles.lessonList}>
              {lessons.length > 0 ? (
                lessons.map((lesson) => (
                  <div key={lesson._id} className={styles.lessonItem}>
                    {/* Lesson Header */}
                    <div
                      className={styles.lessonHeader}
                      onClick={() => toggleLesson(lesson._id)}
                    >
                      <h3>
                        Lesson {lesson.lessonNumber}: {lesson.lessonTitle}
                      </h3>
                      <span className={styles.toggleIcon}>
                        {selectedLessonId === lesson._id ? "-" : "+"}
                      </span>
                    </div>
                    <hr className={styles.lessondivider} />

                    {/* Dropdown Content */}
                    {selectedLessonId === lesson._id && (
                      <ul className={styles.videoList}>
                        {lesson.videos.map((video) => (
                          <li
                            key={video._id}
                            className={`${styles.videoItem} ${
                              video._id === currentVideo?._id
                                ? styles.activeVideo
                                : ""
                            }`}
                            onClick={() => handleVideoClick(video)}
                          >
                            {video.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Lessons;
