import React from "react";
import styles from "../styles/Labs.module.css";
import HIPO1 from "../img/block-diagrams/HIPO_7.png";
import Result1 from "../img/results/result-7.png";
import ResultInputFile from "../img/results/result-7-input-file.png";
import ResultOutputFile from "../img/results/result-7-output-file.png";

const Lab7 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №7
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Обробка рядків та файлів мовами функціонального програмування"
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
        опанувати теоретичні основи обробки рядків та текстових файлів мовами
        функціонального програмування та розробити програми їх реалізації.
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що обробляють рядки, які зчитані з текстових файлів.
        Результати обробки рядків записати до текстових файлів.
      </div>
      <ol>
        <li>
          Записати в текстовий файл n рядків тексту, що задаються програмою на
          функціональній мові програмування. Зчитати рядки із створеного
          програмою файлу, вивести їх на екран. Видалити в початковому тексті з
          кожного слова його закінчення відповідно до заданого словника. Словник
          закінчень представляти списком рядків. Записати в новий текстовий файл
          результат обробки тексту.
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
            (let ((dict (list "ing" "es" "ed" "s" "d" "t")))
    (define out1 (open-output-file "/myfiles/input.txt"))
    (define (remove-ending-from-word word)
        (define (endings-loop i)
            (if (= i (length dict))
                word
                (if (and (> (string-length word) (string-length (list-ref dict i))) (string=? (list-ref dict i) 
                (substring word (- (string-length word) (string-length (list-ref dict i))) (string-length word))))
                    (substring word 0 (- (string-length word) (string-length (list-ref dict i))))
                    (endings-loop (+ 1 i))
                )
            )
        )
        (endings-loop 0)
    )
    (define in (open-input-file "/myfiles/input.txt"))
    (define out (open-output-file "/myfiles/output.txt"))
    (define (read-file word char)
        (if (eof-object? char)
            (begin
                (display word)
                (display (remove-ending-from-word word) out)
                (display "\\nEnd Of File")
            )
            (begin
                (display word)
                (display char)
                (display (remove-ending-from-word word) out)
                (display char out)
                (read-file (symbol->string (read in)) (read-char in))
            )
        )
    )
    (display "Most individuals don't think about numbers, or numerical representations of quantity, but they play a 
    major\\npart in everyday life. To be sure, numbers determine the time individuals will wake up in the morning, how\\nmuch 
    money employees earn per hour, what day of the year it is, and much, much more. Additionally, numbers impact everyday living 
    on a much smaller scale. In the grocery store, for instance,\\nnumbers determine products' prices, the amount of a product 
    available for purchase, how much money\\nwill need to be paid for products, and a whole lot else." out1)
    (close-output-port out1)
    (read-file (symbol->string (read in)) (read-char in))
    (close-input-port in)
    (close-output-port out)
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
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_7.txt"
        >
          Посилання на код програми на віддаленому репозиторію GitHub
        </a>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="results">
        Скріншоти результатів
      </h5>
      <div className={styles.titlesProgress}>Результат роботи програми</div>
      <img className={styles.resultImage} src={Result1} alt="Result" />
      <div className={styles.titlesProgress}>Вміст вхідного файлу</div>
      <img className={styles.resultImage2} src={ResultInputFile} alt="Result" />
      <div className={styles.titlesProgress}>Вміст вихідного файлу</div>
      <img
        className={styles.resultImage2}
        src={ResultOutputFile}
        alt="Result"
      />
      <h5 className={styles.titlesProgressOfWork} id="analysis">
        Аналіз достовірності результатів
      </h5>
      <div>
        Завданням було записати в текстовий файл n рядків тексту, що задаються
        програмою на функціональній мові програмування; зчитати рядки із
        створеного програмою файлу, вивести їх на екран; видалити в початковому
        тексті з кожного слова його закінчення відповідно до заданого словника;
        словник закінчень представляти списком рядків; записати в новий
        текстовий файл результат обробки тексту. Словник закінчень англійнської
        мови наступний: ing, es, ed, s, d, t. Для прикладу візьмемо наступне
        речення: Most individuals don't think about numbers, or numerical
        representations of quantity, but they play a major part in everyday
        life. Якщо прибрати закінчення згідно нашого словника закінчень, то
        отпримаємо наступне речення: Mos individual don't think abou number, or
        numerical representation of quantity,bu they play a major par in
        everyday life. Як бачимо це співпадає з результатом нашої програми.
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Було намальовано HIPO діаграми для кожного з завдань, проведено анліз
        достовірності результатів, перевірка зазначила що результати данної
        лабораторної роботи є вірними. Труднощі виникли при виводі тексту з
        файлу.
      </div>
    </main>
  );
};

export default Lab7;
