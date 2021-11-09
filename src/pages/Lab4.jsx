import React from "react";
import styles from "../styles/Labs.module.css";
import HIPO1 from "../img/block-diagrams/HIPO_4.1.png";
import HIPO2 from "../img/block-diagrams/HIPO_4.2.png";
import Result1 from "../img/results/result-4.1.png";
import Result2 from "../img/results/result-4.2.1.png";
import Result2Part2 from "../img/results/result-4.2.2.png";
import CheckingResults1 from "../img/сhecking-results/сhecking-results-4.1.png";

const Lab4 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №4
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Програмування списків мовами функціонального програмування"
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
        опанувати теоретичні основи використання списків функціональними мовами
        та розробити програми обробки списків.
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що створюють список, модифікують його, здійснюють
        пошук та упорядкування значень. Написати процедури, що моделюють
        бізнес-процеси в компаніях та за допомогою різних сервісів.
        Бізнес-процеси подати у вигляді списків.
      </div>
      <ol>
        <li>
          Створити список досконалих натуральних чисел, задавши максимальне
          значення числа (10000). Досконале число – це натуральне число, яке
          дорівнює сумі всіх своїх дільників. Вивести створений список. Виконати
          такі операції: визначити елементи списку, які є факторіалами чисел, та
          підрахувати їх кількість; видалити елементи списку, які є факторіалом;
          знайти елементи, остання цифра яких дорівнює n (задається
          користувачем). числа;
        </li>
        <li>
          Написати код, що моделює процес обслуговування пасажирів маршрутками.
          Пасажири утворюють список, їх ідентифікація за порядковими номерами. У
          маршрутку можуть увійти k людей. На маршруті m машин. Машини
          прибувають на зупинки кожні n хвилин. Черга пасажирів зменшується на k
          людей, коли прибуває маршрутка, але протягом чекання наступної машини
          збільшується на p &le; k людей. Вивести на екран сценарій
          обслуговування пасажирів маршрутками. Визначити, скільки людей
          перевезуть m маршруток за r циклів роботи.
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
            {`(define (p/r) ; визначаємо функцію для читання з консолі
  (string->number (read-line))) ; читаємо з консолі, кастимо до числа та повертаємо

(define (is-divider num div) (= (modulo num div) 0)) ; визначаємо функцію, яка перевіряє, чи є одне число дільником іншого

(define (is-perfect-number num) ; визначаємо функцію, яка перевіряє, чи є числом досконалим числом
    (define (is-perfect-number-times s i) ; визначаємо допоміжну функцію, для хвостової рекурсії, яка приймає попередню суму та 
    наступне натуральне число
        (if (<= i (quotient num 2)) ; якщо потенційний дільник менше ніж половина від потенційно досконалого числа
            (if (is-divider num i) ; тоді, якщо це число є дільником
                (is-perfect-number-times (+ s i) (+ i 1)) ; рекурсивно викликаємо допоміжну функція, збільшивши суму на цей 
                дільник
                (is-perfect-number-times s (+ i 1)) ; інакше залишаємо суму незмінною
            )
            (= num s) ; інакше повертаємо результат перевірки, чи вийшла отримана сума дільників заданого числа рівной 
            самому числу
        )
    )
    (is-perfect-number-times 1 2) ; перший виклик допоміжної функції с початковими параметрами
)

(define (is-factorial num) ; функція, якак перевіряє, чи є задане число факторіалом
    (define (is-factorial-times s k) ; допоміжна функція для хвостової рекурсії
        (if (< s num) ; якщо добуток попередніх натуральних чисел менший за перевіряєме число
            (is-factorial-times (* s k) (+ k 1)) ; рекурсивно викликаємо допоміжну функцію, помноживши добуток на поточне 
            натуральне число
            (= num s) ; інакше, повертаємо результат перевірки, чи є отриманий добуток рівним самому число. В такому випадку, 
            число є факторіалом
        )
    )
    (is-factorial-times 1 2) ; перший виклик допоміжної функції с початковими параметрами
)

(define (find-perfect-numbers) ; функція, яка шукає досконалі числа до 10000 включно
    (define (find-perfect-numbers-times pn i) ; допоміжна функція для хвостової рекурсії
        (if (< i 10001) ; якщо перевіряєме число менше за 10001
            (if (is-perfect-number i) ; тоді, якщо воно є досконалим
                (find-perfect-numbers-times (append pn (list i)) (+ i 1)) ; додаємо його до масиву досконалих чисел, та 
                викликаємо рекурсивно допоміжну функцію
                (find-perfect-numbers-times pn (+ i 1)) ; не додаємо його до масиву донсконалих чисел, та викликаємо 
                рекурсивно допоміжну функцію
            )
            pn ; інакше, повертаємо масив досконалих чисел
        )
    )
    (find-perfect-numbers-times (list) 2) ; початковий виклик допоміжної функції
)

(define (a arr) ; функція, яка шукає ті досконалі числа, які є факторіалами
    (define (a-times new-arr i) ; допоміжна функція для хвостової рекурсії
        (if (< i (length arr)) ; перебираємо масив досконалих чисел
            (if (is-factorial (list-ref arr i)) ; якщо досконале число є факторіалом
                (a-times (append new-arr (list (list-ref arr i))) (+ i 1)) ; додаємо це число до акумулюючого масиву
                (a-times new-arr (+ i 1)) ; не додаємо це число до акумулюючого масиву
            )
            new-arr ; повертаємо акумулюючий масив
        )
    )
    (a-times \`() 0) ; початковий виклик допоміжної функції
)

(define (b pn factorials) ; функція, яка видаляє з масиву досконалих чисел ті числа, які є в масиві факторіалів
    (define (b-times new_arr i) ; допоміжна функція для хвостової рекурсії
        (if (< i (length factorials)) ; перебираємо масив факторіалів
            (b-times (delete (list-ref factorials i) new_arr) (+ i 1))  ; рекурсивно викликаємо допоміжну функцію, видаливши з 
            неї число з масиву факторіалів
            new_arr ; повертаємо масив досконалих чисел без факторіалів, коли перебрали всі числа, які є у масиві факторіалів
        )
    )
    (b-times pn 0) ; початковий виклик допоміжної функції
)

(define (c pn n) ; функція, яка шукає ті досконалі числа, остання цифра яких дорівнює n
    (define (c-times new-arr i) ; допоміжна функція для хвостової рекурсії
        (if (< i (length pn)) ; перебираємо масив досконалих чисел
            (if (= (modulo (list-ref pn i) 10) n) ; якщо поточне досконале число має останню цифру n
                (c-times (append new-arr (list (list-ref pn i))) (+ 1 i)) ; додаємо його до акумулюючого масиву
                (c-times new-arr (+ 1 i)) ; не додаємо його до акумулюючого масиву
            )
            new-arr ; повертаємо акумулюючий масив
        )
    )
    (c-times \`() 0) ; початковий виклик допоміжної функції
)

(let ((pn (find-perfect-numbers)) (n (p/r))) ; задання змінних масиву досконалих чисел, та числа n
    (let ((factorials (a pn))) ; задання зміної досконалих чисел-факторіалів
        (display "Досконалі числа до 10000 - ")
        (display pn)
        (newline)
        (display "Кількість досконалих чисел до 10000 - ")
        (display (length pn))
        (newline)
        (display "Досконалі числа до 10000, які є факторіалом - ")
        (display factorials)
        (newline)
        (display "Досконалі числа до 10000, які не є факторіалом - ")
        (display (b pn factorials))
        (newline)
        (display "Досконалі числа до 10000, остання цифра яких дорівнює ")
        (display n)
        (display " - ")
        (display (c pn n))
        (newline)
    )
)`}
          </code>
        </pre>
      </div>
      <div>
        <div className={styles.titlesProgress}>Код програми №2</div>
        <pre>
          <code className={styles.code}>
            {`
            (let ((start_amount 35) (n 25) (p 8) (k 10) (m 6) (r 3) (s 0)) ; задання початкових змінних згідно умови завдання
    (define (cycle arr) ; функція, яка імітує лог автобусної зупинки
        (define (bus) ; функція, яка виводить дії, які були зроблені для 1 автобусу
            (begin
                (display "Приїхав автобус. На зупинці ")
                (display (length arr))
                (display " людей - ")
                (display arr)
                (newline)
                (display "В автобус сідає ")
                (display (min k (length arr)))
                (set! s (+ s (min k (length arr)))) ; рахуємо людей, які сіли до автобуса
                (set! arr (list-tail arr (min k (length arr)))) ; відіймаємо від масиву людей, які були на зупинці, тих, які 
                сіли в автобус
                (display " людей. На зупинці залишається ")
                (display (length arr))
                (display " людей - ")
                (display arr)
                (display ". Автобус поїхав\\nПоки новий автобус, на зупинку приходить ще ")
                (display p)
                (display " людей - ")
                (set! arr (append arr (iota p (+ 1 (if (> (length arr) 0) (last arr) -1))))) ; додаємо людей, які прийшли 
                на зупинку, поки їхав наступний автобус
                (display arr)
                (newline)
                (newline)
                (display "Пройшло ")
                (display n)
                (display " хв.\\n\\n")
            )
        )
        (define (bus-times bus-count) ; допоміжна функція, яка імітує повний цикл проїзду автобусі
            (if (< bus-count 1) ; якщо автобусів не залишилось
                (display "Цикл завершено.\\n\\n") ; виводимо, що цикл завершено
                (begin
                    (bus) ; інакше, їде наступний автобус
                    (bus-times (- bus-count 1)) ; рекурсивно викликаємо допоміжну функцію, зменшивши кількість автобусів на 1
                )

            )
        )
        (define (cycle-times t) ; допоміжна функція, яка імітує всі цикли за робочий день
            (if (< t 1) ; якщо циклів не залишилось
                (begin ; виводимо, що робочий день завершено, та підсумок за цей день
                    (display "Робочий день завершено. За ")
                    (display r)
                    (display " цикли(ів) ")
                    (display m)
                    (display " автобусів, які вміщають в себе ")
                    (display k)
                    (display " пасажирів, перевезли ")
                    (display s)
                    (display " людей, якщо спочатку на зупинці було ")
                    (display start_amount)
                    (display " людей, та кожні ")
                    (display n)
                    (display " хвилин підходило ще ")
                    (display p)
                )
                (begin
                    (bus-times m) ; викликаємо функція, яка імітує повний цикл всіх автобусів
                    (cycle-times (- t 1)) ; рекурсивно викликаємо допоміжну функцію, що імітує всі цикли за робочий день, 
                    зменшивши на одиницю кількість циклів
                )
            )
        )
        (cycle-times r) ; первий виклик допоміжної функції, яка імітує всі цикли за робочий день
    )
    (cycle (iota start_amount)) ; виклик функції, яка імітує лог автобусної зупинки
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
          href="https://github.com/HotSweetie/FunctionalProgramming/blob/main/labs/lab_3_1.txt"
        >
          Посилання на код програми №1 на віддаленому репозиторію GitHub
        </a>
      </div>
      <div>
        <a
          className={styles.linkGit}
          href="https://github.com/HotSweetie/FunctionalProgramming/blob/main/labs/lab_3_2.txt"
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
      <img className={styles.resultImage} src={Result2Part2} alt="Result" />
      <h5 className={styles.titlesProgressOfWork} id="analysis">
        Аналіз достовірності результатів
      </h5>
      <div>
        Першим завдання було cтворити список досконалих натуральних чисел,
        задавши максимальне значення числа (10000). Результати роботи програми
        було перевірено за допомогою додаткових матеріалів (Рис. 3). Досконалими
        числами на даному проміжку є 6, 28, 496, 8128, що співпадає з
        очікуваннями. Другим завданням було написати код, що моделює процес
        обслуговування пасажирів маршрутками, пасажири утворюють список, їх
        ідентифікація за порядковими номерами, Вивести на екран сценарій
        обслуговування пасажирів маршрутками та визначити, скільки людей
        перевезуть m маршруток за r циклів роботи. Результати: за 3 цикли 6
        автобусів, які вміщають в себе 10 пасажирів, перевезли 171 людей, якщо
        спочатку на зупинці було 35 людей, та кожні 25 хвилин підходило ще 8.
        Кількість перевезених пасажирів була перевірена за допомогою
        калькулятора, вивід калькулятора - 171. Результати співпадають.
        <img
          src={CheckingResults1}
          alt="Checking results"
          className={styles.checkingResult4}
        />
        <div className={styles.blockDiagramCaption}>
          Рис. 3 - Досконалі числа ( для завдання 1 ).
        </div>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Було намальовано HIPO діаграми для кожного з завдань, проведено анліз
        достовірності результатів, перевірка зазначила що результати данної
        лабораторної роботи є вірними. Ніяких труднощів не виникло.
      </div>
    </main>
  );
};

export default Lab4;
