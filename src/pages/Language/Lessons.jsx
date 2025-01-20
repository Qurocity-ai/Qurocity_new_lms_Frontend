import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Lessons.module.css"; // Import your CSS module

const Lessons = () => {
    const location = useLocation();
    const { language } = location.state || {};
    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        if (language) {
            fetch(`https://qurocity-lms-backend.onrender.com/api/lessons/${language}`)
                .then((response) => response.json())
                .then((data) => setLessons(data))
                .catch((error) => console.error("Error fetching lessons:", error));
        }
    }, [language]);

    const handleLessonClick = (lesson) => {
        // setSelectedLesson(lesson.lessonNumber[0]);
        // setCurrentVideo(lesson.videos[0,1]); 
    };

    const handleVideoClick = (video) => {
        setCurrentVideo(video); // Change the current video
    };

    return (
        <div className={styles.pageWrapper}>
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
                    <p>Select a video to play</p>
                )}
                <div className={styles.videoDetails}>
                    <h2>{currentVideo?.title || "Video Title"}</h2>
                    <p>{selectedLesson?.lessonTitle || "Lesson description goes here"}</p>
                </div>
            </div>
            <div className={styles.right}>
                <h1>{language ? `${language.charAt(0).toUpperCase() + language.slice(1)} Lessons` : "Lessons"}</h1>
                
                
                <div className={styles.lessonList}>
                    {lessons.length > 0 ? (
                        lessons.map((lesson) => (
                            <div
                                key={lesson._id}
                                className={`${styles.lessonItem} ${lesson._id === selectedLesson?._id ? styles.activeLesson : ""
                                    }`}
                                onClick={() => handleLessonClick(lesson)}
                            >
                                <h3>Lesson {lesson.lessonNumber}: {lesson.lessonTitle}</h3>
                                <ul className={styles.videoList}>
                                    {lesson.videos.map((video) => (
                                        <li
                                            key={video._id}
                                            className={`${styles.videoItem} ${video._id === currentVideo?._id ? styles.activeVideo : ""
                                                }`}
                                            onClick={() => handleVideoClick(video)}
                                        >
                                            {video.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>Loading lessons...</p>
                    )}
                </div>



            </div>
        </div>
    );
};

export default Lessons;
