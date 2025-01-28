import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Lessons.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FiYoutube } from "react-icons/fi";

const Lessons = () => {
  const location = useLocation();
  const { language } = location.state || {};
  const [lessons, setLessons] = useState([]);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true); // Initially loading is true

  // Fetch lessons when the language is provided
  useEffect(() => {
    if (language) {
      setLoading(true); // Start loading
      fetch(`https://qurocity-lms-backend.onrender.com/api/lessons/${language}`)
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
  }, [language]);

  const toggleLesson = (lessonId) => {
    // Toggle the visibility of the selected lesson
    setSelectedLessonId((prev) => (prev === lessonId ? null : lessonId));
  };

  const handleVideoClick = (video) => {
    setCurrentVideo(video); // Change the current video
  };

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
                        {selectedLessonId === lesson._id ? "" : ""}
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
                           <FiYoutube  style={{  fontSize: "20px", paddingRight:"10px" }}/> 
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
