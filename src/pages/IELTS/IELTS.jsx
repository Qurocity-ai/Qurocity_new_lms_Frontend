import React, { useState, useEffect } from "react";
import styles from "./IELTS.module.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { PiVideo } from "react-icons/pi";


const IELTS = () => {
  const [lessons, setLessons] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [isOpen, setIsOpen] = useState({});

  useEffect(() => {
    fetch("https://qurocity-lms-backend.onrender.com/IELT/ielts-lessons")
      .then((response) => response.json())
      .then((data) => {
        setLessons(data);
        if (data.length > 0) {
          // Set first lesson's first video as default
          setSelectedVideo(data[0].videos[0].url);
          setActiveLesson(data[0]._id); // Make the first lesson active
        }
      })
      .catch((error) => console.error("Error fetching lessons:", error));
  }, []);

  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl); // Update selected video
  };

  const toggleDropdown = (lessonId) => {
    setIsOpen((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }));
  };

  const handleLessonSelect = (lessonId) => {
    setActiveLesson(lessonId); // Update active lesson
    const lesson = lessons.find((lesson) => lesson._id === lessonId);
    if (lesson && lesson.videos.length > 0) {
      setSelectedVideo(lesson.videos[0].url); // Optionally select the first video
    }
  };

  const currentLesson = lessons.find((lesson) => lesson._id === activeLesson);

  return (
    <div className={styles.pageWrapper}>
      {/* Left side: Video Display */}
      <div className={styles.left}>
        {selectedVideo ? (
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.videoPlayer}
              src={selectedVideo}
              title="selected video"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p>Select a video to view</p>
        )}
        
        {/* Displaying lessonTitle after the video */}
        {currentLesson && (
          <h2 className={styles.videoDetails}>
            {currentLesson.lessonTitle}
            
          </h2>
        )}
      </div>

      {/* Right side: Video Titles List */}
      <div className={styles.right}>
        {lessons.map((lesson) => (
          <div key={lesson._id} className={styles.lesson}>
            <div
              className={styles.lessonHeader}
              onClick={() => {
                toggleDropdown(lesson._id);
                handleLessonSelect(lesson._id); // Select the clicked lesson
              }}
            >
              <h2 className={styles.lessonTitle}>
                <span>Lesson {lesson.lessonNumber} : </span>
                {lesson.lessonTitle}
              </h2>
              <span className={styles.toggleIcon}>
                {isOpen[lesson._id] ? (
                  <RiArrowDropUpLine className={styles.reacticon} />
                ) : (
                  <RiArrowDropDownLine className={styles.reacticon} />
                )}
              </span>
            </div>
            {isOpen[lesson._id] && (
              <ul className={styles.videoList}>
                {lesson.videos.map((video) => (
                  <li
                    key={video._id}
                    className={styles.videoItem}
                    onClick={() => handleVideoSelect(video.url)} // Select video
                  >
                    <p>
                        <PiVideo className={styles.reacticonyou}/>
                        {video.title}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IELTS;
