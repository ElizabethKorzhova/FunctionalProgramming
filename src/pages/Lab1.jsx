import React from "react";
import styles from "../styles/Labs.module.css";
import Formulas from "../img/formulas/number-of-placements.png";
import BlockDiagram1 from "../img/block-diagrams/lab-1.1.png";
import BlockDiagram2 from "../img/block-diagrams/lab-1.2.png";
import HIPO1 from "../img/block-diagrams/HIPO_1.1.png";
import HIPO2 from "../img/block-diagrams/HIPO_1.2.png";
import Result1 from "../img/results/result-1.1.png";
import Result2 from "../img/results/result-1.2.png";

const Lab1 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №1
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Використання рекурсії для організації повторювальних процесів"
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
      <div>
        <span className={styles.labTargetSpan} id="target">
          Мета -{" "}
        </span>
        сформувати декларативне мислення в галузі програмування завдяки
        використанню чистих функцій, рекурсій замість циклів, запобіганню даних,
        що змінюються. Опанувати застосування рекурсивних функцій для
        обчислювальних процесів.
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що обчислюють задану функцію за допомогою
        рекурсивного процесу. Продемонструвати застосування звичайної та
        хвостової рекурсії.
      </div>
      <ol>
        <li>
          Ввести з клавіатури два натуральних числа n та k. Кількість розміщень
          без повторень і кількість сполучень без повторень. Застосувати формули
          для розрахунку кількості розміщень і сполучень для визначення
          кількості способів розподілу k обов'язків між n членами комісії та
          кількості способів розподілу уроків в n класах між трьома вчителями,
          якщо кожен учитель викладатиме у k класах. Визначити глибину рекурсії.
          <span>
            <img
              className={styles.taskConditionFormulas}
              src={Formulas}
              alt="formulas number of placements"
            />
          </span>
        </li>
        <li>
          Увести з клавіатури натуральне число n, десятковий запис якого не
          містить нулів. Отримайте число, записане тими самими цифрами, але в
          протилежному порядку. При розв'язанні цього завдання не можна
          використовувати цикли, рядки, списки, масиви, дозволяється тільки
          рекурсія і цілочислова арифметика. Функція повинна повертати ціле
          число, яке є результатом роботи програми, виводити число по одній
          цифрі не можна. Контрольний тест: введено число 179, отримали
          результат: 971.
        </li>
      </ol>
      <h5 className={styles.titlesProgressOfWork} id="program-structure">
        Структура задачі
      </h5>
      <img
        className={styles.blockDiagram}
        src={BlockDiagram1}
        alt="Block Diagram"
      />
      <div className={styles.blockDiagramCaption}>
        Рис.1 - структура задачі №1.
      </div>
      <img
        className={styles.blockDiagram}
        src={BlockDiagram2}
        alt="Block Diagram"
      />
      <div className={styles.blockDiagramCaption}>
        Рис.2 - структура задачі №2.
      </div>
      <img className={styles.blockDiagram} src={HIPO1} alt="HIPO Diagram" />
      <div className={styles.blockDiagramCaption}>
        Рис.3 - HIPO діаграма задачі №1.
      </div>
      <img className={styles.blockDiagram} src={HIPO2} alt="HIPO Diagram" />
      <div className={styles.blockDiagramCaption}>
        Рис.4 - HIPO діаграма задачі №2.
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
            {`(define (factorial n) ; Визначаємо функцію factorial
          (define (factorial-times n acc) ; Визначаємо допоміжну функцію factorial-times, для того, 
          щоб використовувати 
          хвоствову рекурсію
          (if (= n 0) ; Якщо поточне число n - нуль
          acc ; повернути аккумулятор
          (factorial-times (- n 1) (* n acc)))) ; інакше, визвати рекурсивно цю функцию, передавши n 
          на єдиницю меншим, 
          а асс помноживши на поточне n
          (if (< n 0) ; Якщо n менший за нуль
          (display "Incorrect parameter n\\n") ; то не будемо нічого викликати та повертати, просто 
          виведемо в консоль, 
          що параметр не вірний
          (begin ; початок багатострокового коду
          (display "Recursion depth: ")
          (display n)
          (newline)
          (factorial-times n 1)))) ; перший виклик хвостової рекурсії

          (define (A k n) (/ (factorial n) (factorial (- n k)))) ; функція для знаходження 
          кількості розміщень (за формулою)
          (define (C k n) (/ (factorial n) (factorial k) (factorial (- n k)))) ; функція для знаходження 
          кількості сполучень (за формулою)


          (display "TASK 1\\n")
          (display (C 2 5)) ; розподіл двох завданнь між 5 членами коміссії
          (display "\\nTASK 2\\n")
          (display (* 3 (C 4 10))) ; розподіл уроків в 10 класах між 3 вчителями, якщо кожен вчитель 
          викладатиме у 4 класах`}
          </code>
        </pre>
      </div>
      <div>
        <div className={styles.titlesProgress}>Код програми №2</div>
        <pre>
          <code className={styles.code}>
            {`(define (log10 n) (/ (log n) (log 10))) ; визначення функції для знаходження десяткового 
            логарифму

               (define (reverse num) ; визначення функції для перевертання числа
                    (define (reverse-times num acc) ; визначення функції для використання хвостової рекурсії
                        (if (= num 0) ; якщо поточне число 0
                        acc ; повернути аккумулятор
                        (reverse-times ; рекурсивно визнати цю функції, передавши
                            (quotient num 10) ; в num цілу частину від ділення поточного num на 10
                            (+ (* (modulo num 10) (expt 10 (floor->exact (log10 num)))) acc)))) 
                             ; в acc поточний acc,
                             додавши до нього останню цифру поточного числа домножену на 10 в такій степені, 
                             щоб довжина отриманного числа дорівлювала довжині поточного
                    (reverse-times num 0)) ; перший виклик хвостової рекурсії

                (display (reverse 132433)) ; перевернути число 132433
                (display "\\n")
                (display (reverse 179)) ; перевернути число 179`}
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
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_1_2.txt"
        >
          Посилання на код програми №2 на віддаленому репозиторію GitHub
        </a>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="results">
        >Скріншоти результатів
      </h5>
      <div className={styles.titlesProgress}>Результат роботи програми №1</div>
      <img className={styles.resultImage} src={Result1} alt="Result" />
      <div className={styles.titlesProgress}>Результат роботи програми №2</div>
      <img className={styles.resultImage} src={Result2} alt="Result" />
      <h5 className={styles.titlesProgressOfWork} id="analysis">
        Аналіз достовірності результатів
      </h5>
      <div>
        Першим завдання було реалізувати формули розміщень та сполучення, задля
        їх написання спочатку було написано програму, яка рахує факторіал числа,
        та після даний факторіал було використано для розрахунків відповідно
        записаних раніше формул. Розраховуючи факторіал числа було використано
        хвостову рекурсію. Вивід програми розподілу двох завданнь між 5 членами
        коміссії - 10, розподіл уроків в 10 класах між 3 вчителями, якщо кожен
        вчитель викладатиме у 4 класах - 630. Результати було перевірено за
        допомогою калькулятору, і вони співпадають з результатами нашої
        програми. Другим завданням було перевнути число. Використовуючи
        десятковий логарифм для знаходження довжини числа, було перевернуте
        число. Записуємо число 179, вивід програми 971. Результати співпадають з
        очікуваними.
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Перша задача була реалізована за допомогою хвостової та звичайної
        рекурсії. Друга задача була реалізовна за допомогою звичайної рекурсії.
        Було намальовано HIPO діаграми та блок-схеми для кожного з завдань,
        проведено аналіз достовірності результатів, який показав що результати є
        вірними. Труднощі виникли з першим завданням, а саме з вибором формули,
        яку необхідно застосувати.
      </div>
    </main>
  );
};

export default Lab1;
