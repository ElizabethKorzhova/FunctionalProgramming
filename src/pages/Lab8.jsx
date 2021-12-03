import React from "react";
import styles from "../styles/Labs.module.css";
import HIPO1 from "../img/block-diagrams/HIPO_8.png";
import Result1 from "../img/results/result-8.png";
import Formulas from "../img/formulas/formula-lab8.png";

const Lab8 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №8
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Символьні обчислення мовами функціонального програмування. Операції з
        многочленами"
      </h3>
      <div className={`${styles.titles}`}>11 варіант</div>
      <h4 className={styles.author}>
        <span className={styles.authorSpan}>Виконала: </span>
        Коржова Єлизавета Валеріївна
      </h4>
      <div className={styles.contentTitle}>Зміст</div>
      <ul>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#target">
            Мета лабораторної роботи
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#task-condition">
            Умова задачі
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#program-structure">
            Структура програми
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#ide">
            Обгрунтування вибору середовища та мови функціонального
            програмування
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#code">
            Код програми з коментарями
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#link-to-github">
            Посилання на проект з вихідним кодом
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#results">
            Скріншоти результатів
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#analysis">
            Аналіз достовірності результатів
          </a>
        </li>
        <li className={styles.contentItem}>
          <a className={styles.contentItemLink} href="#сonclusion">
            Висновки
          </a>
        </li>
      </ul>
      <div>
        <span className={styles.labTargetSpan} id="target">
          Мета -{" "}
        </span>
        опанувати теоретичні основи символьних обчислень мовами функціонального
        програмування. Розробити програми символьного диференціювання та
        реалізації арифметики поліномів.
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що здійснюють символьне диференціювання та
        реалізують арифметику поліномів Результати записати до текстових файлів.
      </div>
      <ol>
        <li>
          Написати програму символьного диференціювання по одній змінній
          поліному, який заданий списком своїх коефіцієнтів та степенем у
          вигляді:
          <span>
            <img
              className={styles.taskConditionFormulas8}
              src={Formulas}
              alt="formula"
            />
          </span>
          Знайти першу, другу та третю похідні. Результати вивести у вигляді
          символьного виразу. Значення поліному та його похідних при заданому
          користувачем значенні змінної не обчислювати.
        </li>
      </ol>
      <h5 className={styles.titlesProgressOfWork} id="program-structure">
        Структура програми
      </h5>
      <img className={styles.blockDiagram} src={HIPO1} alt="HIPO Diagram" />
      <div className={styles.blockDiagramCaption}>
        Рис.1 - HIPO діаграма задачі.
      </div>
      <h5 className={styles.titlesProgressOfWork} id="ide">
        Обгрунтування вибору середовища та мови функціонального програмування
      </h5>
      <div className={styles.labDescription}>
        Була обрана мова програмування Scheme, так як вона має легкий,
        зрозумілий синтаксис, який поюснюють на лекціях, практичних, а також
        рекомендована лектором.
      </div>
      <div>
        IDE -{" "}
        <a
          className={styles.IdeLink}
          href="https://www.jdoodle.com/execute-scheme-online/"
        >
          Online CLISP IDE.{" "}
        </a>
        Головною перевагою для вибору данного середовища розробки є те що його
        не потрібно встановлювати. онлайн
      </div>
      <h5 className={styles.titlesProgressOfWork} id="code">
        Код програми з коментарями
      </h5>
      <div>
        <div className={styles.titlesProgress}>Код програми</div>
        <pre>
          <code className={styles.code}>
            {`
            (define (variable? x) (symbol? x)) ; функція, яка перевіряє, чи є змінна символом
(define (same-variable? v1 v2) ; функція, яка перевіряє, чи є два вирази однією і тою самою змінною
  (and (variable? v1) (variable? v2) (eq? v1 v2)))
(define (make-sum a1 a2) (list '+ a1 a2)) ; функція, яка додає один символьний вираз до іншого
(define (make-product m1 m2) (list '* m1 m2)) ; функція, яка множить один символьний вираз на інший
(define (sum? x) ; функція, яка перевіряє, чи є символьний вираз сумою
  (and (pair? x) (eq? (car x) '+)))
(define (addend s) (cadr s)) ; функція, яка повертає перший доданок виразу
(define (augend s) (caddr s)) ; функція, яка повертає останній доданок виразу
(define (product? x) ; функція, яка перевіряє, чи є вираз добутком
  (and (pair? x) (eq? (car x) '*)))
(define (multiplier p) (cadr p)) ; функція, яка повертає перший множник виразу
(define (multiplicand p) (caddr p)) ; функція, яка повертає останній множник виразу

(define (deriv exp var) ; функція, яка шукає для символьного виразу похідну за правилами суми та добутку
  (cond ((number? exp) 0)
    ((variable? exp)
     (if (same-variable? exp var) 1 0))
    ((sum? exp)
     (make-sum (deriv (addend exp) var)
               (deriv (augend exp) var)))
    ((product? exp)
     (make-sum
       (make-product (multiplier exp)
                     (deriv (multiplicand exp) var))
       (make-product (deriv (multiplier exp) var)
                     (multiplicand exp))))
    (else
     (display "unknown expression type - DERIV" ))))
    
(define (poly-array-to-symbolic arr) ; функція, яка приводить поліном заданий масивом його коефіцієнтів до символьного виразу
    (define (pats-t sym-poly i)
        (if (= i (length arr))
            sym-poly
            (pats-t (make-sum (list-ref arr i) (make-product 'x sym-poly)) (+ 1 i))
        )
    )
    (pats-t (list-ref arr 0) 1)
)

(define out (open-output-file "/myfiles/poly.txt")) ; відкриваємо порт для запису у файл

(let ((poly (list 3 4 5 3 5 -3 2 -5 -6))) ; визначаємо поліном як список коефіцієнтів
    (let ((s_poly (poly-array-to-symbolic poly))) ; приводимо такий поліном до символьного вигляду
        (let ((first_deriv (deriv s_poly 'x))) ; шукаємо його першу похідну
            (let ((second_deriv (deriv first_deriv 'x))) ; шукаємо другу першу похідну
                (let ((third_deriv (deriv second_deriv 'x))) ; шукаємо третю першу похідну
                    (display s_poly out)
                    (display "\\n\\n" out)
                    (display first_deriv out)
                    (display "\\n\\n" out)
                    (display second_deriv out)
                    (display "\\n\\n" out)
                    (display third_deriv out)
                    (display "\\n\\n" out)
                    (close-output-port out) ; закриваємо порт для запису у файл
                )
            )
        )
    )
)
            `}
          </code>
        </pre>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="link-to-github">
        Посилання на проект з вихідним кодом
      </h5>
      <div>
        <a
          className={styles.linkGit}
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_8.txt"
        >
          Посилання на код програми на віддаленому репозиторію GitHub
        </a>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="results">
        Скріншоти результатів
      </h5>
      <div className={styles.titlesProgress}>Результат роботи програми</div>
      <img className={styles.resultImage} src={Result1} alt="Result" />
      <h5 className={styles.titlesProgressOfWork} id="analysis">
        Аналіз достовірності результатів
      </h5>
      <div>
        Завданням було знайти першу, другу та третю похідні. Результати вивести
        у вигляді символьного виразу. Завдаємо коефіцієнти, та отримуємо поліном
        у символьному вігляді: (+ -6 (* x (+ -5 (* x (+ 2 (* x (+ -3 (* x (+ 5
        (* x (+ 3 (* x (+ 5 (* x (+ 4 (* x 3)))))))))))))))). Шукаємо для
        символьного виразу похідні за правилами суми та добутку. Перша похідна
        очікується наступна: (+ 0 (+ (* x (+ 0 (+ (* x (+ 0 (+ (* x (+ 0 (+ (* x
        (+ 0 (+ (* x (+ 0 (+ (* x (+ 0 (+ (* x (+ 0 (+ (* x 0) (* 1 3)))) (* 1
        (+ 4 (* x 3)))))) (* 1 (+ 5 (* x (+ 4 (* x 3)))))))) (* 1 (+ 3 (* x (+ 5
        (* x (+ 4 (* x 3)))))))))) (* 1 (+ 5 (* x (+ 3 (* x (+ 5 (* x (+ 4 (* x
        3)))))))))))) (* 1 (+ -3 (* x (+ 5 (* x (+ 3 (* x (+ 5 (* x (+ 4 (* x
        3)))))))))))))) (* 1 (+ 2 (* x (+ -3 (* x (+ 5 (* x (+ 3 (* x (+ 5 (* x
        (+ 4 (* x 3)))))))))))))))) (* 1 (+ -5 (* x (+ 2 (* x (+ -3 (* x (+ 5 (*
        x (+ 3 (* x (+ 5 (* x (+ 4 (* x 3))))))))))))))))). Результат роботи
        програми співпадає з очікуваним. Результат записано до текстового файлу.
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Було намальовано HIPO діаграми для кожного з завдань, результат записано
        до текстового файлу, проведено анліз достовірності результатів,
        перевірка зазначила що результати данної лабораторної роботи є вірними.
        Труднощів не виникло.
      </div>
    </main>
  );
};

export default Lab8;
