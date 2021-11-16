import React from "react";
import styles from "../styles/Labs.module.css";
import HIPO1 from "../img/block-diagrams/HIPO_5.1.png";
import HIPO2 from "../img/block-diagrams/HIPO_5.2.png";
import Result1 from "../img/results/result-5.1.png";
import Result2 from "../img/results/result-5.2.png";

const Lab5 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №5
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Обробка раціональних та комплексних чисел мовами функціонального
        програмування"
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
        опанувати технологію абстракції даних в мовах функціонального
        програмування. Реалізувати програму обробки раціональних та комплексних
        чисел мовами функціонального програмування, представивши ці числа
        конструкціями типу «пара».
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що обробляють раціональні числа (працюють з
        дробами), які подати у вигляді чисельника і знаменника. Написати
        процедури, що обробляють комплексні числа, які слід подати в декартовому
        та/або полярному зображенні.
      </div>
      <ol>
        <li>
          Створити список. елементами якого є різні раціональні числа у вигляді
          дробив. Обчислити кількість елементів в списку, які є нескоротними
          дробами та надрукувати їх. Для перевірки дробу на скоротність
          обчислити найбільший спільний дільник (НСД). Якщо НСД дорівнює
          одиниці, то дріб є нескоротний. Якщо НСД відмінний від одиниці, то
          дріб скоротний.
        </li>
        <li>
          Створити список комплексних чисел, заданих в тригонометричній формі .
          Переписати в новий список ті комплексні числа з першого списку, які в
          геометричні інтерпретації зображують точки в третьому квадранті
          декартової системи координат.
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
            {`
            (define (numer x) (car x)) ; визначаємо функцію, яка дійстає перший елемент з пари, тобто чисельник
(define (denom x) (cdr x)) ; визначаємо функцію, яка дійстає другий елемент з пари, тобто знаменник
(define (make-rat n d) (cons n d)) ; визначаємо функцію, яка створю пару, тобто дріб в нашому випадку

(define (print-rat x) ; визначаємо функцію, яка зображає пару чисел в вигляді дробу
  (display (numer x)) ; виводимо чисельник
  (display "/") ; виводимо /
  (display (denom x)) ; виводимо знаменник
)

(define (print-rats arr) ; визначаємо функцію, яка приймає arr - масив дробів. Дана функція виводить всі дроби.
    (define (print-rats-times index) ; визначаємо допоміжну функцію, яка приймає index - індекс елемента в масиві
        (if (< index (length arr)) ; поки індекс елемента менше довжини масиву
            (begin ; початок багатострокового коду
                (print-rat (list-ref arr index)) ; рекурсивно викликаємо головну функцію, в яку передаємо елемент з масиву arr 
                під індексом index
                (if (< index (- (length arr) 1)) ; якщо index < ніж довжина масиву - 1
                    (display ", ") ; виводимо ,
                )
                (print-rats-times (+ 1 index)) ; інакше рекурсивно викликаємо  допоміжну функцію, передавши значення індексу 
                збільшеного на 1
            )
        )
    )
    (print-rats-times 0) ; перший виклик допоміжної функції, передаємо значення індексу 0
)

(define (gcd a b) ; визначаємо функцію, яка приймає а, b - числа, знаходить НСД за алгоритмом Евкліда
    (if (= 0 b) ; якщо b = 0
        a ; повертаємо a
        (gcd b (modulo a b)) ;  рекурсивно викликаємо функцію передавши в другий параметр остачу від діння а на b
    )
)


(define (is-irreducible-fraction num) ; визначаємо функцію, яка приймає num - дріб, перевіряє чи не число нескоротним
    (let ((a (numer num)) (b (denom num))) ; визначаємо змінні в які записуємо чисельник та знаменник, знайдені за допомогою 
    функцій numer та denom
        (if (< a b) ; якщо a < b
            (= 1 (gcd b a)) ; викликаємо функцію gcd передавши першим параметром b, другим а, якщо НСД = 1, то робимо висновок, 
            що число є нескоротним
            (= 1 (gcd a b)) ; викликаємо функцію gcd передавши першим параметром а, другим b, та перевіряємо чи є число 
            нескоротним
        )
    )
)

(define (find-irreducible-fractions arr) ; визначаємо функцію, яка приймає arr - масив дробів, та шукає всі нескоротні дроби
    (define (fifc-times acc-arr index) ; визначаємо допоміжну функцію, яка приймає acc-arr-масив, index - індекс елемента в 
    масиві
        (if (< index (length arr)) ; поки індекс елемента менше довжини масиву
            (if (is-irreducible-fraction (list-ref arr index)) ; якщо число є нескоротним (викликаємо функцію 
            is-irreducible-fraction яка це перевіряє, передавши їй елемент масиву arr під індексом index)
                (fifc-times (append acc-arr (list (list-ref arr index))) (+ 1 index)) ; рекурсивно викликаємо допоміжну 
                функцію, додавши в список acc-arr новий дріб, та збільшивши індек на 1
                (fifc-times acc-arr (+ 1 index)) ; інакше рекурсивно викликаємо допоміжну функцію, збільшивши індек на 1
            )
            acc-arr ; повертаємо acc-arr
        )
    )
    (fifc-times (list) 0) ; перший виклик допоміжної функції, передаємо пустий список
)

(let ((arr (list (make-rat 2 3) (make-rat 8 4) (make-rat 9 3) (make-rat 9 4))))  ; визначаємо змінну, в яку записуємо список 
дробів
    (let ((irr-fracs (find-irreducible-fractions arr)))  ; визначаємо змінну, в яку записуємо список дробів, які є нескоротними
        (display "Серед раціональних чисел у вигляді дробу - [")
        (print-rats arr)
        (display "] - є ")
        (display (length irr-fracs))
        (display " нескоротних дробів - [")
        (print-rats irr-fracs)
        (display "]")
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
            {`
            (let ((pi 3.14159265359)) ; визначаємо змінну в яку записуємо значення числа пи
    (define (dist x) (car x)) ; визначаємо функцію, яка дійстає перший елемент з пари, тобто довжину комплексного числа
    (define (angle x) (cdr x)) ; визначаємо функцію, яка дійстає другий елемент з пари, тобто кут
    (define (make-complex r phi) (cons r phi)) ; визначаємо функцію, яка створю пару: довжина комплексного числа та кут

    (define (print-complex x) ; визначаємо функцію, яка зображає комплексне число в тригонометричному вигляді
        (display (dist x))
        (display "(cos(")
        (display (angle x))
        (if (< (angle x) 0) ; якщо кут вiд\`ємний, виводимо зi знаком мiнус
            (display ") - isin(")
            (display ") + isin(")
        )
        (display (abs (angle x)))
        (display "))")
    )

    (define (print-complex-geom x) ; визначаємо функцію, яка зображає комплексне число в геометричному вигляді, тобто переводить 
    з полярних координат у декартові
        (display (* (dist x) (cos (angle x))))
        (if (< (sin (angle x)) 0) ; якщо sin кута вiд\`ємний, виводимо зi знаком мiнус
            (display " - i*")
            (display " + i*")
        )
        (display (* (dist x) (abs (sin (angle x)))))
    )

    (define (print-complex-numbers arr type) ; перебираємо комплекснi числа з масиву та виводимо, в залежностi вiд типу виводу: 
    у полярних координатах чи у декартових
        (define (print-complex-numbers-times index)
            (if (< index (length arr))
                (begin
                    (if (= type 0)
                        (print-complex (list-ref arr index))
                        (print-complex-geom (list-ref arr index))
                    )
                    (if (< index (- (length arr) 1))
                        (display ", ")
                    )
                    (print-complex-numbers-times (+ 1 index))
                )
            )
        )
        (print-complex-numbers-times 0)
    )

    (define (make-angle-from-zero-to-2pi phi) ; приводимо кут до промiжку [0; 2pi)
        (let ((_2pi (* 2 pi)))
            (let ((int (floor->exact (/ (abs phi) _2pi))))
                (begin
                    (if (>= phi _2pi)
                        (set! phi (- phi (* int _2pi)))
                    )
                    (if (< phi 0)
                        (set! phi (+ phi _2pi (* int _2pi)))
                    )
                    phi
                )

            )
        )
    )

    (define (is-in-third-part num) ; визначаємо, чи лежить число з кутом phi у третьому квадрантi, тобто чи є кут в промiжку 
    (pi; 3/2pi)
        (let ((phi (make-angle-from-zero-to-2pi (angle num))))
            (and (< pi phi) (< phi (* pi (/ 3 2))))
        )

    )

(define (is-in-third-part-v2 num) ; визначаємо, чи лежить число з кутом phi у третьому квадрантi, тобто, чи є сiнус та косiнус 
кута меншим за нуль
        (and (< (cos (angle num)) 0) (< (sin (angle num)) 0))
    )

    (define (find-complex-number-in-third-part arr) ; перебираємо масив, та визначаємо, якi з чисел лежать у третьому квадрантi
        (define (fcnitp-times acc-arr index) ; допомiжна функцiя
            (if (< index (length arr)) ; умова продовження перебору масиву
                (if (is-in-third-part-v2 (list-ref arr index)) ; умова додавання числа до акумулюючого масиву, тобто, коли воно 
                лежить у третьому квадрантi
                    (fcnitp-times (append acc-arr (list (list-ref arr index))) (+ 1 index)) ; викликаємо допомiжну функцiю, 
                    додавши до акумулюючого масиву число
                    (fcnitp-times acc-arr (+ 1 index)) ; викликаємо допомiжну функцiю, не додавши до акумулюючого масиву число
                )
                acc-arr ; повертаємо акумулюючий масив
            )
        )
        (fcnitp-times (list) 0) ; перший виклик допомiжної функцiї
    )

    (let ((arr (list (make-complex 2 3.15) (make-complex 8 4) (make-complex 9 3) (make-complex 9 10)))) ; задання масиву 
    комплексних чисел
        (let ((comp-in-third (find-complex-number-in-third-part arr))) ; визначення тих комплексних чисел, якi лежать у третьому 
        квадратнi
            (display "Серед комлексний чисел у вигляді\\nУ полярних координатах - [")
            (print-complex-numbers arr 0)
            (display "]\\nГеометрийчний вигляд - [")
            (print-complex-numbers arr 1)
            (display "]\\nє ")
            (display (length comp-in-third))
            (display ", які лежать у 3 квадранті\\nУ полярних координатах - [")
            (print-complex-numbers comp-in-third 0)
            (display "]\\nГеометрийчний вигляд - [")
            (print-complex-numbers comp-in-third 1)
            (display "]")
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
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_5_1.txt"
        >
          Посилання на код програми №1 на віддаленому репозиторію GitHub
        </a>
      </div>
      <div>
        <a
          className={styles.linkGit}
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_5_2.txt"
        >
          Посилання на код програми №2 на віддаленому репозиторію GitHub
        </a>
      </div>
      <h5 className={styles.titlesProgressOfWork} id="results">
        Скріншоти результатів
      </h5>
      <div className={styles.titlesProgress}>Результат роботи програми №1</div>
      <img className={styles.resultImage2} src={Result1} alt="Result" />
      <div className={styles.titlesProgress}>Результат роботи програми №2</div>
      <img className={styles.resultImage} src={Result2} alt="Result" />
      <h5 className={styles.titlesProgressOfWork} id="analysis">
        Аналіз достовірності результатів
      </h5>
      <div>
        Першим завдання було cтворити список дробів, знайти та порахувати
        кількість нескоротних дробів. Перевірку на нескоротність робили за
        допомогою НСД, якщо НСД = 1, то дріб є некскоротним. Реалізацію НСД
        зроблено за алгоритмом Евкліда. Вхідні данні: 2/3, 8/4, 9/3, 9/4. Дріб
        8/4 є скоротним так як чисельник та знаменник ділиться на 4; дріб 9/3 -
        також скоротний, чисельник та знаменник ділиться на 3. Тому вірними
        відповідями в дані ситуаціїї є: 2/3, 9/4, що співпадає з результатом
        нашої програми. Другим завданням було створити список комплексних чисел,
        заданих в тригонометричній формі переписати в новий список ті комплексні
        числа з першого списку, які в геометричні інтерпретації зображують точки
        в третьому квадранті декартової системи координат. Вхідні дані:
        2(cos(3.15) + isin(3.15)), 8(cos(4) + isin(4)), 9(cos(3) + isin(3)),
        9(cos(10) + isin(10)). Якщо cos(a) та sin(a) &#60; 0, то комплексне
        число знаходиться в 3 квадранті; кут в радіанах. Cos(3.15) =
        -0.9364566873, isin(3.15) = -0.3507832277, cos(4) = -0.6536436209,
        isin(4) = -0.7568024953 , cos(10) = -0.8390715291 , isin(10) =
        -0.5440211109. Тому комплексними числами, які знаходяться в 3 квадранті
        в даному випадку є 2(cos(3.15) + isin(3.15)), 8(cos(4) + isin(4)),
        9(cos(10) + isin(10)), що співпадає з результатом роботи нашої програми.
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Було намальовано HIPO діаграми для кожного з завдань, проведено анліз
        достовірності результатів, перевірка зазначила що результати данної
        лабораторної роботи є вірними. Труднощі виникли в представлені дробів в
        наступному вигляді: 2/4.
      </div>
    </main>
  );
};

export default Lab5;
