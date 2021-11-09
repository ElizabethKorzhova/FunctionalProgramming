import React from "react";
import styles from "../styles/Labs.module.css";
import Formulas from "../img/formulas/function-lab2.png";
import BlockDiagram1 from "../img/block-diagrams/HIPO_2.1.png";
import BlockDiagram2 from "../img/block-diagrams/HIPO_2.2.png";
import Result1 from "../img/results/result-2.1.png";
import Result2 from "../img/results/result-2.2.png";

const Lab2 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №2
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Рекурентні співвідношення для тригонометричних, експоненціальних
        функцій та ланцюгові дроби"
      </h3>
      <div className={`${styles.titles}`}>12 варіант</div>
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
      <div id="target">
        <span className={styles.labTargetSpan}>Мета - </span>
        опанувати теоретичні основи застосування рекурентних співвідношень для
        обчислення тригонометричних, експоненціальних, степеневих функцій та
        розробити програми функціональними мовам програмування для обчислення їх
        значень .
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що обчислюють задану функцію за допомогою
        рекурентних послідовностей, розвинувши її у ряд Тейлора. Параметр
        функції має змінюватися від заданого в процесі виклику мінімального
        значення до максимального значення із певним кроком. Визначити похибку
        обчислення наближених значень функції як різницю абсолютних значень
        наближеного обчислення та стандартного значення функції. Стандартне
        значення функції обчислювати за допомогою бібліотечних математичних
        функцій.
      </div>
      <ol>
        <li>
          Обчислити значення функції у, розвинувши функцію e-x у ряд Тейлора.
          Аргумент х змінюється від -2 до 2 з кроком 0.5. Визначити похибку.
          <span>
            <img
              className={styles.taskConditionFormulas2}
              src={Formulas}
              alt="Function of task1"
            />
          </span>
        </li>
        <li>
          Ввести з клавіатури натуральне число n . Визначити кількість цифр у
          числі n , підрахувати їх суму та знайти першу і останню цифри числа.
          Подання числа у вигляді структурованого типу (масивом або рядком) не
          використовувати .
        </li>
      </ol>
      <h5 className={styles.titlesProgressOfWork} id="program-structure">
        Структура програми
      </h5>
      <img
        className={styles.blockDiagram}
        src={BlockDiagram1}
        alt="HIPO Diagram"
      />
      <div className={styles.blockDiagramCaption}>
        Рис.1 - HIPO діаграма задачі №1.
      </div>
      <img
        className={styles.blockDiagram}
        src={BlockDiagram2}
        alt="HIPO Diagram"
      />
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
            {`(define (exponent x e) ; Визначаємо функцію експоненти, яка приймає х - степінь експоненти, та е - точність
    (define (exponent-times acc previous current k) ; визначаємо допоміжну функцію для хвостової рекурсії. acc - аккумулятор. 
    previous - попередній елемент. current - поточний елемент. k - індекс елементу
        (if (and (< (abs (- previous current)) e) (< current 1)) ; якщо різниця миж поточним та попереднім елементом менша за 
        епсілон, та поточний елемент менший за одиницю (потрібно, тому що 2 підряд елементи ряду можуть бути однаковими, як 
        наприклад у х = 2)
            (+ acc current) ; повертаємо попередню суму + поточний елемент
            (exponent-times ; інакше викликаємо рекурсивно функцію, передавши в неї нові значення
                (+ acc current) ; новий акумулятор - це сума попереднього акумулятору та поточного елементу
                current ; поточний елемент стає попереднім
                (/ (* x current) k) ; новий елемент домножається на х та ділиться на свій номер
                (+ k 1) ; номер наступного елементу
            )
        )
    )
    (exact->inexact (exponent-times 0 0 1 1)) ; викликаємо допоміжну функцію з початковими значеннями, та приводи дріб до числа з 
    плаваючою крапкою
)

(define (function x e) ; визначаємо функцію згідно з варіантом (12)
    (if (and (<= -2 x) (<= x 0)) ; якщо -2 <= x <= 0
        (+ (exponent x e) (exponent (* 2 x) e)) ; e^x + e^(2x)
        (if (and (< 0 x) (< x 2)) ; інакше, якщо 0 < x < 2
            (- (exponent (+ x 5) e) (exponent (/ x 2) e)) ; e^(x + 5) - e^(x / 2)
            "Incorrect value of x") ; інакше, вивід в консоль, що х задан неправильно, тому що виходить за дозволені межі
    )
)

(define (main-function start step stop) ; визначаємо головну функцію
    (if (< start stop) ; поки start < stop
        (begin
            (display start) ; виводимо поточне значення х
            (display ": ") ; виводимо розділяючу двокрапку між х та е^x
            (display (function start 0.00000001)) ; виводимо е^x
            (newline) ; переходимо на нову лінію
            (display "Exp: ") ; виводемо повідомлення, що зараз буде виведена експонента
            (display (exp start)) ; викликаємо вбудовану функцію для знаходження експоненти
            (newline) ; переходимо на нову лінію
            (display "Похибка: ") ; виводимо повідомлення, що зараз буде виведена похибка
            (display (abs (- (exp start) (exponent start 0.00000001)))) ; виводимо похибку
            (newline) ; переходимо на нову лінію
            (newline) ; переходимо на нову лінію
            (main-function (+ start step) step stop) ; рекурсивно викликаємо функцію з новим значенням start
        )
    )
)

(main-function -2 0.5 2) ; викликаємо головну функцію
`}
          </code>
        </pre>
      </div>
      <div>
        <div className={styles.titlesProgress}>Код програми №2</div>
        <pre>
          <code className={styles.code}>
            {`(define (p/r) ; визначаємо функцію для читання з консолі
  (string->number (read-line))) ; читаємо з консолі, кастимо до числа та повертаємо

(define (log10 n) (/ (log n) (log 10))) ; визначаємо функцію для пошуку десяткового логарифму

(define (number-length n) ; визначаємо функцію для пошуку довжини числа
    (+ 1 (floor->exact (log10 n)))) ; шукаємо довжину числа за формулою 1 + [log10(n)]

(define (last-digit n) ; визначаємо функцію для пошуку останньої цифри в числі
    (modulo n 10)) ; остання цифра числа - остача від ділення на 10

(define (first-digit n) ; визначаємо функцію для пошуку першої цифри в числі
    (if (< n 10) ; якщо число меньше за 10
        n ; вертаємо саме число
        (first-digit (quotient n 10)) ; інакше, рекурсивно ділимо націло на 10, допоки не отримаємо число менше 10
    )
)

(define (sum-of-digits n) ; визначаємо функцію для пошуку суми цифр в числі
    (define (sum-of-digits-times acc n) ; визначаємо допоміжну функцію для хвостової рекурсії. асс - акумулятор, тобто сума цифр. 
    n - поточне число
        (if (< n 10) ; якщо числе менше за 10
            (+ acc n) ; то це була перша цифра, плюсуємо до попередньої суми та повертаємо
            (sum-of-digits-times
                                 (+ acc (modulo n 10)) ; новий акумулятор - сума старого акумулятора та останньої цифри в числі
                                 (quotient n 10) ; наступне число - поточне поділене націло на 10
            )
        )
    )
    (sum-of-digits-times 0 n) ; викликаємо рекурсивну функцію з початковими значеннями параметрів
)

(define (main-function n) ; визначаємо головну функцію програми
    (begin ; початок многострокового коду
        (display "Number length: ") ; виводимо повідомлення, що далі буде виведена довжина числа
        (display (number-length n)) ; виводимо довжину числа
        (newline) ; переходимо на нову лінію
        (display "Number first digit: ") ; виводимо повідомлення, що далі буде виведена перша цифра числа
        (display (first-digit n)) ; виводимо першу цифру числа
        (newline) ; переходимо на нову лінію
        (display "Number last digit: ") ; виводимо повідомлення, що далі буде виведена остання цифра числа
        (display (last-digit n)) ; виводимо останню цифру числа
        (newline) ; переходимо на нову лінію
        (display "Sum of digits: ") ; виводимо повідомлення, що далі буде виведена сума цифр числа
        (display (sum-of-digits n)) ; виводимо суму цифр числа
    )
)

(main-function (p/r)) ; читаємо число з консолі та викликаємо головну функцію
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
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_2_1.txt"
        >
          Посилання на код програми №1 на віддаленому репозиторію GitHub
        </a>
      </div>
      <div>
        <a
          className={styles.linkGit}
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_2_2.txt"
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

export default Lab2;
