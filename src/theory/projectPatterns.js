// 1. WZORZEC MODUŁU
// Wykorzystuje samowyzwalające się funkcje, każda z funkcji posiada własną przestrzeń nazw, których pola można ukryć tak jakby to były zmienne prywatne

// 2. WZORZEC SINGELTON
// to wrzozec, który pozwala na stworzenie jednej instancji obiektu. Jeżeli instancja taka już istnieje nie można stworzyć drugiej. Do tego inicjalizacja tego obiektu odbywa się dopiero w momencie, w którym jest on potrzebny w programie.

// 3. WZORZEC FACTORY
// kiedy pracujemy z wieloma małymi komponentami, które mają te same właściwości. Pozwala łatwo generować różne instancje obiektów w zależności od środowiska, w którym pracujemy. Funkcja zwraca zawsze nowy obiekt jednego typu.

// 4. WZORZEC STRATEGII
// funkcja zwraca zawsze nowy obiekt wybranego typu na podstawie opcji

// 5. WZORZEC MEMOIZATION
// wzorzec opiera sie na tym, że każda funkcja jest obiektem. Wzorzec ten słóży do do zapamiętywania wyników działania kosztownych operacji, tak aby przy kolejnym wywołaniu nie trzeba było wykonywą jej jeszcze raz.

const memoization = (num) => {
  let result = 0;
  if (!memoization.saveData[num]) {
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        result++;
      }
    }
    memoization.saveData[num] = result;
  }
  return memoization.saveData[num];
};
memoization.saveData = {};

console.log(memoization.saveData);
console.time("First call");
console.log(memoization(800));
console.timeEnd("First call");
// use the same value two times
console.time("Second call");
console.log(memoization(800));
console.timeEnd("Second call");
console.time("Third call");
console.log(memoization(800));
console.timeEnd("Third call");