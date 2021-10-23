import React from "react";
import { Link } from "react-router-dom";
import LogoKNU from "../img/logo-knu.jpeg";
import TeacherPhoto from "../img/teacher-photo.jpg";
import StudentPhoto from "../img/studentPhoto.JPG";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={`container ${styles.homeContainer}`}>
      <header className={styles.header}>
        <img src={LogoKNU} alt="Logo of KNU" className={styles.headerLogo} />
        <div>Київський національний університет імені Тараса Шевченка</div>
      </header>
      <main>
        <section className={styles.aboutFacultySection}>
          <div className={styles.facultyDescription}>
            <div>Факультет інформаційних технологій</div>
            <div>Кафедра програмних систем та технологій</div>
          </div>
          <div className={styles.facultySpan}>Дисципліна</div>
          <h1 className={styles.facultyTitle}>Функціональне програмування</h1>
        </section>
        <section className={styles.aboutStudentSection}>
          <h2 className={styles.facultyTitle}>Студент та викладач</h2>
          <div className={styles.studentWrapper}>
            <div className={styles.studentInfoWrapper}>
              <img
                src={StudentPhoto}
                alt="Me"
                className={styles.personalityPhoto}
              />
              <div className={styles.studentInfo}>
                <div className={styles.studentName}>
                  Коржова Єлизавета Валеріївна
                </div>
                <div className={styles.studentSpan}>студент 4 курсу</div>
                <div className={styles.studentDescription}>ІПЗ-42</div>
                <div className={styles.studentDescription}>2021-2022рр.</div>
              </div>
            </div>
            <div className={styles.studentInfoWrapper}>
              <img
                src={TeacherPhoto}
                alt="Teacher"
                className={styles.personalityPhoto}
              />
              <div className={styles.studentInfo}>
                <div className={styles.studentName}>
                  Ніколаєнко Анастасія Юріївна
                </div>
                <div className={styles.studentSpan}>
                  Асистент кафедри програмних систем і технологій,
                </div>
                <div className={styles.studentDescription}>
                  Кандидат технічних наук
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.labsSection}>
          <h2 className={styles.facultyTitle}>Лабораторні роботи</h2>
          <ul className={styles.labList}>
            <li className={styles.labListItem}>
              <Link to="/lab1">
                <div>
                  <span className={styles.labTitle}>Лабораторна робота 1</span>
                  <div className={styles.labTheme}>
                    "Використання рекурсії для організації повторювальних
                    процесів"
                  </div>
                </div>
              </Link>
            </li>
            <li className={styles.labListItem}>
              <Link to="/lab2">
                <div>
                  <span className={styles.labTitle}>Лабораторна робота 2</span>
                  <div className={styles.labTheme}>
                    "Рекурентні співвідношення для тригонометричних,
                    експоненціальних функцій та ланцюгові дроби"
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
