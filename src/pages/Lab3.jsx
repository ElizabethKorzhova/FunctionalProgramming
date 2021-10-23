import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "../styles/Labs.module.css";
import Formula1 from "../img/formulas/method-trapeze.png";
import Formula2 from "../img/formulas/method-simpson.png";
import Func1 from "../img/formulas/function-lab3.1.png";
import Func2 from "../img/formulas/function-lab3.2.png";
import HIPO1 from "../img/block-diagrams/HIPO_3.1.png";
import HIPO2 from "../img/block-diagrams/HIPO_3.2.png";
import Result1 from "../img/results/result-2.1.png";
import Result2 from "../img/results/result-2.2.png";

const Lab3 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №3
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Форми lambda та let, вираз присвоєння set! для розв’язання нелінійних
        рівнянь та чисельного інтегрування функцій"
      </h3>
      <div className={`${styles.titles}`}>11 варіант</div>
      <h4 className={styles.author}>
        <span className={styles.authorSpan}>Виконала: </span>
        Коржова Єлизавета Валеріївна
      </h4>
      <div className={styles.contentTitle}>Зміст</div>
      <ul>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#target">
            Мета лабораторної роботи
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#task-condition">
            Умова задачі
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#program-structure">
            Структура програми
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#ide">
            Обгрунтування вибору середовища та мови функціонального
            програмування
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#code">
            Код програми з коментарями
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#link-to-github">
            Посилання на проект з вихідним кодом
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#results">
            Скріншоти результатів
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#analysis">
            Аналіз достовірності результатів
          </Link>
        </li>
        <li className={styles.contentItem}>
          <Link className={styles.contentItemLink} to="lab3/#сonclusion">
            Висновки
          </Link>
        </li>
      </ul>
      <div id="target">
        <span className={styles.labTargetSpan}>Мета - </span>
        розв’язати нелінійні рівняння та здійснити чисельне інтегрування функцій
        наближеними методами, використовуючи мови функціонального програмування
        та lambda, let та set! форми.
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що знаходять корені нелінійних рівнянь,
        використовуючи форму let. Написати процедури, що обчислюють інтеграл
        функції за формулами трапецій, Сімпсона (парабол)
        <img
          className={styles.taskConditionFormulas2}
          src={Formula1}
          alt="Function of method trapeze"
        />
        <div className={styles.blockDiagramCaption}>
          Рис.1 - Формула трапецій.
        </div>
        <img
          className={styles.taskConditionFormulas2}
          src={Formula2}
          alt="Function of method Simpson"
        />
        <div className={styles.blockDiagramCaption}>Рис.2 - Сімпсона.</div>
      </div>
      <ol>
        <li>
          Знайти корені нелінійного рівняння виду нижче. Пошук наближеного
          значення хоча б одного кореня рівняння f(x) = 0 на відрізку [a; b]
          здійснювати методами простої ітерації та перебором. Значення a, b
          інтервалу вибрати самостійно. Порівняти результати розв’язків двома
          методами.
          <img
            className={styles.taskConditionFormulas2}
            src={Func1}
            alt="Function of task1"
          />
        </li>
        <li>
          Написати процедури для обчислити інтеграла за формулами трапецій і
          Сімпсона. Порівняти результати обчислення.
          <img
            className={styles.taskConditionFormulas2}
            src={Func2}
            alt="Function of task2"
          />
        </li>
      </ol>
      <h5 className={styles.titlesProgressOfWork} id="program-structure">
        Структура програми
      </h5>
      <img className={styles.blockDiagram} src={HIPO1} alt="HIPO Diagram" />
      <div className={styles.blockDiagramCaption}>
        Рис.1 - HIPO діаграма задачі №1.
      </div>
      <img className={styles.blockDiagram} src={HIPO2} alt="HIPO Diagram" />
      <div className={styles.blockDiagramCaption}>
        Рис.2 - HIPO діаграма задачі №2.
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
        <div className={styles.titlesProgress}>Код програми №1</div>
        <pre>
          <code className={styles.code}>
            {`(define (equation x) (- (* x x) (cos x))) ; визначаємо функцію підінтегрального виразу

(define (simple_iteration a e) ; визначаємо функцію, для пошуку кореня за допомогою методу простої ітерації
    (define (canonical_view x) (sqrt (cos x))) ; визначаємо функцію канонічного вигляду
    (define (find_root x) ; визначаємо допоміжну функцію, для знаходження кореня
        (let ((xk (canonical_view x))) ; створюємо змінну, в яку записуємо нове xk
            (if (< (abs (- x xk)) e) ; якщо різниця між новим і старим хk менша за епсілон
                xk ; повертаємо
                (find_root xk) ; інакше, рекурсивно викликаємо
            )
        )
    )
    (find_root a) ; перший виклик допоміжної функції для пошуку кореню. Першою точкою береть початок відрізку
)

(define (broot_force a b e) ; визначаємо функцію для пошуку кореня за допомогою перебору
    (define (broot_force_times x) ; визначаємо допоміжну функцію для пошуку кореня за допомогою перебору
        (if (and (< (abs (equation x)) e) (<= x b)) ; значення в точці знаходиться достатньо близько до нуля, та точка не більша 
        за кінец відрізку
            x ; повертаємо її
            (broot_force_times (+ x e)) ; викликаємо пошук заново, та збільшуємо х на крок е
        )
    )
    (broot_force_times a) ; перший виклик, перший х дорівнює початку відрізку
)

(let ((e 0.00000001) (a -1) (b 1)) ; визначаємо змінні, в які записуємо точність, початок та кінець пошукового відрізку
    (begin
        (let ((simple_iteration_root (simple_iteration a e)) (broot_force_root (broot_force a b e))) ; визначаємо змінні, в які 
        записуємо корені, знайдені обома методами
            (begin
                (display "Корінь, знайдений при використанні простої ітерації: ")
                (display simple_iteration_root) ; виводимо корінь, знайдений методом простої ітерації
                (newline)
                (display "Корінь, знайдений при використанні перебору: ")
                (display broot_force_root) ; виводимо корінь, знайдений методом перебору
                (newline)
                (display "При заданих e, a, b ")
                (display e)
                (display ", ")
                (display a)
                (display ", ")
                (display b)
                (display " відповідно, ближчим є ")
                (if (< (- (equation broot_force_root) (equation simple_iteration_root)) 0) ; виводимо корінь, який є точнішим
                    (display broot_force_root)
                    (display simple_iteration_root)
                )
            )
        )
    )
)
`}
          </code>
        </pre>
      </div>
      <div>
        <div className={styles.titlesProgress}>Код програми №2</div>
        <pre>
          <code className={styles.code}>
            {`(define (f x) (/ (cos x) (sqrt x))) ; визначаємо f(x)

(define (simpson_method x1 x2) ; визначаємо функцію, яка шукає визначений інтеграл за допомогою метода Сімпсона
    (let ((h (/ (- x2 x1) 2))) ; визначаємо h для формули
        (* (/ h 3) (+ (f x1) (* 4 (f (+ x1 h))) (f (+ x1 (* 2 h))))) ; використовуємо формулу з метода Сімпсона
    )
)

(define (trapezoid_method x1 x2 n) ; визначаємо функцію, яка шукає визначений інтеграл за допомогою метода трапецій
    (define (sum acc index) ; визначаємо допоміжну функцію, яка шукає суму
        (if (> index (- n 1)) ; якщо індекс більше індекса останньої точки (х2)
            acc ; повертаємо акумулятор та виходимо з функції
            (sum ; інакше, викликаємо рекурсивно пошук суми, передавши нові параметри
                 (+ acc (f (+ x1 (* index (/ (- x2 x1) n))))) ; додаємо до акумулятора значення функції в поточній точці
                 (+ index 1)) ; збільшуємо індекс на одиницю
        )
    )
    (* (/ (- x2 x1) (* 2 n)) (* 2 (sum (+ (f x1) (f x2)) 1))) ; використовуємо формулу для знаходження визначенного інтегралу за 
    допомогою метода трапецій
)

(display "Реальне значення визначенного інтегралу: 1.25642566445695")
(newline)
(display "Визначений інтеграл за допомогою метода Сімпсона: ")
(display (simpson_method 0.1 2))
(newline)
(display "Визначений інтеграл за допомогою метода трапецій: ")
(display (trapezoid_method 0.1 2 10000))
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
          href="https://github.com/HotSweetie/FunctionalProgramming/blob/main/labs/lab_2_1.txt"
        >
          Посилання на код програми №1 на віддаленому репозиторію GitHub
        </a>
      </div>
      <div>
        <a
          className={styles.linkGit}
          href="https://github.com/HotSweetie/FunctionalProgramming/blob/main/labs/lab_2_2.txt"
        >
          Посилання на код програми №2 на віддаленому репозиторію GitHub
        </a>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="results">
        Скріншоти результатів
      </h5>
      <div className={styles.titlesProgress}>Результат роботи програми №1</div>
      <img className={styles.resultImage} src={Result1} alt="Result" />
      <div className={styles.titlesProgress}>Результат роботи програми №2</div>
      <img className={styles.resultImage} src={Result2} alt="Result" />
      <h5 className={styles.titlesProgressOfWork} id="analysis">
        Аналіз достовірності результатів
      </h5>
      <div>
        Першим завдання було обчислити значення функції у, розвинувши функцію
        e-x у ряд Тейлора. Аргумент х змінюється від -2 до 2 з кроком 0.5.
        Визначити похибку. Візьмемо x = -0.5, значення експоненти, за нашої
        функції дорівнює 0.9744101008850663, а за вбудованою функцією дорівнює
        0.6065306597126334. Порахуємо похибку 1.1741607686133193e-11. Другим
        завданням було підрахувати кількість цифр у числі, їх суму та знайти
        першу і останню цифри числа. Вводимо з клавіатури число 67890425, вивід
        програми: кількість цифр - 8, сума - 41, перша цифра в числі - 6,
        остання - 5. Результати співпадають з очікуваними
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Було намальовано HIPO діаграми для кожного з завдань, проведено анліз
        достовірності результатів, перевірка зазначила що результати данної
        лабораторної роботи є вірними. Труднощі виникли при вирішені першого
        завдання, а саме при розкладанні функції в ряд Тейлора.
      </div>
    </main>
  );
};

export default Lab3;
