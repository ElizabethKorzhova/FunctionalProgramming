import React from "react";
import styles from "../styles/Labs.module.css";
import HIPO1 from "../img/block-diagrams/HIPO_6.1.png";
import HIPO2 from "../img/block-diagrams/HIPO_6.2.png";
import Result1 from "../img/results/result-6.1.png";
import Result2 from "../img/results/result-6.2.png";

const Lab6 = () => {
  return (
    <main className={`container ${styles.labContainer}`}>
      <h2 className={`${styles.titles} ${styles.labNumber}`}>
        Лабораторна робота №6
      </h2>
      <h3 className={`${styles.titles} ${styles.labTheme}`}>
        "Обробка структур типу векторів і матриць, стеків та черг мовами
        функціонального програмування"
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
        опанувати теоретичні основи обробки структур типу векторів і матриць,
        стеків та черг мовами функціонального програмування та розробити
        програми їх реалізації.
      </div>
      <div>
        <h5 className={styles.titlesProgressOfWork} id="task-condition">
          Умова задачі
        </h5>
        Написати процедури, що обробляють вектори відповідно до правил векторної
        алгебри. Написати процедури, що обробляють черги відповідно до правил
        FIFO (перший прийшов — перший пішов) та стеків за правилами LIFO
        (останній прийшов - перший пішов).
      </div>
      <ol>
        <li>
          Створити вектор чисел з додатними, від’ємними та нульовими елементами.
          Видалити з вектору всі нульові елементи. Решту елементів розмістити
          так, щоб додатні і від'ємні елементи чергувалися. Надрукувати вектор
          до та після переміни.
        </li>
        <li>
          У магазині стоїть черга з n покупців. Заданий час обслуговування
          покупця з черги у вигляді цілого числа в діапазоні від 1 до t1, та час
          додавання нового покупця до черги – це ціле число в діапазоні від 1 до
          t2. Промоделювати стан черги (тобто показати час виникнення подій -
          обслуговування та додавання покупця) за період часу T (T>t1, T>t2).
          Вивести на екран залишок черги.
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
(define (vector-delete vec condition-func) ; визначаємо функцію, яка видаляє елементи зі списку за заданою функцією-умовою, та 
повертає новий вектору
    (define (count) ; визначаємо функцію, яка підрахує кілький елементів, які підходять під умову
        (define (loop i counter) ; функція, яка імітує цикл, щоб перебрати елементи вектору
            (cond ((= i (vector-length vec))
                  counter)
                ((condition-func (vector-ref vec i))
                    (loop (+ i 1) (+ counter 1)))
                (else (loop (+ i 1) counter))
            )
        )
        (loop 0 0)
    )
    (let ((new-vec (if (> (vector-length vec) 0) ; задаємо змінну нового вектору
            (make-vector (- (vector-length vec) (count))) ; якщо довжину вектору більша за нуль, то створюємо новий вектор, 
            довжини попереднього мінус кількість елементів, які підходять під умову
            (vector)))) ; інакше повертаємо пустий вектор
        (define (loop i j) ; функція, яка імітує цикл, що перебирає вектор
            (cond ((= i (vector-length vec))
                new-vec) ; зупинитись, коли перебрав, та повернути новий вектор
                ((condition-func (vector-ref vec i)) ; якщо елемент вектору задовільняє умову
                    (loop (+ i 1) j)) ; переходимо до наступного
                ((< j (vector-length new-vec)) ; якщо не задовільняє умову
                    (vector-set! new-vec j (vector-ref vec i)) ; додаємо до нового вектору цей елемент
                    (loop (+ i 1) (+ j 1))) ; та переходимо до наступного
                (else vec) ; якщо щось пішло не так, повернути початковий вектор
            )
        )
        (loop 0 0) ; починаємо перебирати вектор
    )
)

(define (combine positive negative take-from-positive) ; функція, яка поєднує два вектори, таким чином, щоб чередувати елементи 
з першого і другого векторів, починаючи з першого, якщо take-from-positive - #t, так з другого інакше
    (let ((p-len (vector-length positive)) (n-len (vector-length negative))) ; задаємо змінні, в якіх зберігаються довжини обох 
    векторів
        (let ((combined (make-vector (+ p-len n-len)))) ; створюємо новий вектор, довжина якого дорівнює сумі довжин вхідних 
        векторів
            (define (loop-c i j k) ; функція, що імітує цикл для перебору елементів обох векторів
                (if (= k (+ p-len n-len)) ; якщо ми вже заповнили новий вектор елементами
                    combined ; повернемо його
                    (begin ; інакше
                        (if (< j n-len) ; якщо ми не використали всі елементи з другого вектору 
                            (begin
                                (vector-set! combined k (vector-ref negative j)) ; додамо поточний елемент до вектору
                                (set! j (+ 1 j)) ; збільшимо відповідні індекси
                                (set! k (+ 1 k))
                            )
                        )
                        (if (< i p-len) ; якщо ще не використали всі елементи з другого вектору
                            (begin
                                (vector-set! combined k (vector-ref positive i)) ; додамо поточний елемент до вектору
                                (set! i (+ 1 i)) ; збільшимо відповідні індекси
                                (set! k (+ 1 k))
                            )
                        )
                        (loop-c i j k) ; перейдемо до наступних індексів
                    )   
                )
            )
            (if take-from-positive ; якщо починаємо з додатнього числа
                (begin ; тоді
                    (vector-set! combined 0 (vector-ref positive 0)) ; додамо як перший елемент нового вектору перший елемент 
                    з вектору додатніх чисел
                    (loop-c 1 0 1) ; та почнемо перебирати вектори
                )
                (loop-c 0 0 0) ; просто почнемо перебирати вектори
            )
        )
    )
)

(let ((initial-vector '#(3 5 0 0 -7 0 0 -9 0 4 3 -5 3 2 6 73 -3 -5))) ; задамо початковий вектор
    (let ((vector-without-zeros (vector-delete initial-vector (lambda (x) (= x 0))))) ; прибиремо з початкового вектору 
    всі нулі
        (let (
                 (positive-elements (vector-delete vector-without-zeros (lambda (x) (< x 0)))) ; прибиремо з вектору без 
                 нулів від'ємні числа
                 (negative-elements (vector-delete vector-without-zeros (lambda (x) (> x 0)))) ; прибиремо з вектору без 
                 нулів додатні числа
                 
            )
            (display "Вектор до переміни:")
            (newline)
            (display initial-vector)
            (newline)
            (newline)
            (display "Вектор без нулів:")
            (newline)
            (display vector-without-zeros)
            (newline)
            (newline)
            (display "Вектор після переміни:")
            (newline)
            (display (combine positive-elements negative-elements (> (vector-ref initial-vector 0) 0))) ; поєднаємо додатній 
            і від'ємний вектори разом, починаючи з того вектору, елемент якого є початком початкового. Початковий вектор має 
            містити хоча б один елемент
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
            {`
            (use data.queue) ; імпортуємо бібліотеку для роботи з чергами
(let ((n 10) (t1 20) (t2 10) (T 100)) ; задаємо початкові умови
    (let ((t1-c t1) (t2-c t2) (queue (list->queue (iota n 1))) (T-c T)) ; копіюємо початкові умови та створюємо чергу з n 
    елементів
        (define (loop-q) ; функція, яка імітує цикл
            (let ((t (min t1-c t2-c))) ; визначаємо, щог відбудеться раніше, прийде чи уйде людина, або ж одночасно
                (set! T-c (- T-c t)) ; віднімаємо від загального часу програми час, який пройде до наступної події
                (if (< T-c 0) ; якщо він менший за нуль, то подія недосяжна
                    (display "Робочий день завершено!") ; виводимо відповідне повідомлення
                    (begin ; робимо візуалізуємо подію
                        (if (and (= t1-c t) (not (queue-empty? queue))) ; якщо найближча подія - це уход людини та черга 
                        не пуста, відпускаємо людину та виводимо відповідне повідомлення
                            (begin 
                                (display (- T T-c))
                                (display ": Покупець ")
                                (display (dequeue! queue))
                                (display " був обслугований\\n")
                            )
                        )
                        (if (= t2-c t) ; якщо найближча подія - це приход людини, то ставимо її у кінець черги
                            (begin
                                (enqueue! queue (if (queue-empty? queue) 1 (+ 1 (queue-rear queue)))) ; якщо черга порожня, 
                                то індексувати людину почнемо з одиниці, інакше додамо одиницю до останнього індексу в черзі
                                (display (- T T-c))
                                (display ": Покупець ")
                                (display (queue-rear queue))
                                (display " прийшов до черги\\n")
                            )
                        )
                        (set! t1-c (- t1-c t)) ; віднімемо пройдений час від часу, через який людина має піти
                        (set! t2-c (- t2-c t)) ; відмимемо пройдений час від часу, через який людина має прийти
                        (if (= t1-c 0) (set! t1-c t1)) ; якщо такий час дорівнює нулю, то людина пішла і чекаємо, коли піде нова
                        (if (= t2-c 0) (set! t2-c t2)) ; якщо такий час дорівнює нулю, то людина прийшла и чекаємо на нову
                        (display "Стан черги: ")
                        (display (queue->list queue)) ; виводимо стан черги
                        (newline)
                        (newline)
                        (loop-q) ; викликаємо наступну подію
                    )
                )
            )
        )
        (display "0: Стан черги на початку: ")
        (display (queue->list queue)) ; виводимо початковий стан черги
        (newline)
        (newline)
        (loop-q) ; перший виклик функції, яка імітує події
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
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_6_1.txt"
        >
          Посилання на код програми №1 на віддаленому репозиторію GitHub
        </a>
      </div>
      <div>
        <a
          className={styles.linkGit}
          href="https://github.com/ElizabethKorzhova/FunctionalProgramming/blob/main/labs/lab_6_2.txt"
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
        Першим завдання було створити вектор чисел з додатними, від’ємними та
        нульовими елементами; видалити з вектору всі нульові елементи. Решту
        елементів розмістити так, щоб додатні і від'ємні елементи чергувалися.
        Надрукувати вектор до та після переміни. Для прикладу візьмемо наступний
        вектор (3 5 0 0 -7 0 0 -9 0 4 3 -5 3 2 6 73 -3 -5), якщо прибрати нулі,
        отримаємо (3 5 -7 -9 4 3 -5 3 2 6 73 -3 -5), якщо додатні та від'ємні
        елементи розташувати так, щоб вони чергувалися то отримаємо (3 -7 5 -9 4
        -5 3 -3 3 -5 2 6 73). Результати роботи програми співпадають зі
        значеннями раніше підрахованими. Другим завданням було створити заданий
        час обслуговування покупця з черги у вигляді цілого числа в діапазоні
        від 1 до t1, та час додавання нового покупця до черги – це ціле число в
        діапазоні від 1 до t2; промоделювати стан черги (тобто показати час
        виникнення подій - обслуговування та додавання покупця) за період часу T
        (T>t1, T>t2). Очікувалося, що на 10 секунді прийде покупець, на 20
        секунді, 1 покупець буде обслугований та до черги прийде новий покупець,
        на 30 секунді прийде новий покупець, на 20 секунді, 1 покупець буде
        обслугований та до черги прийде новий покупець і так далі. Результат
        роботи програми програми співпав з очікуваним.
      </div>
      <h5 className={styles.titlesProgressOfWork} id="сonclusion">
        Висновки
      </h5>
      <div className={styles.conclusion}>
        В результаті роботи було вирішено два задання за допомогою мови Scheme.
        Було намальовано HIPO діаграми для кожного з завдань, проведено анліз
        достовірності результатів, перевірка зазначила що результати данної
        лабораторної роботи є вірними. Труднощів не виникло.
      </div>
    </main>
  );
};

export default Lab6;
