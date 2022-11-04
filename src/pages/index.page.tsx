import { createQuery } from '@tanstack/solid-query';

let afterFirst = false;

function getQuery() {
  return new Promise((res) => {
    setTimeout(() => {
      if (afterFirst) {
        res({ data: 'some', other: 'yes' });
      }
      afterFirst = true;
      res(['uwu', 'awu', { a: 1, b: { a: 1, b: 2 } }]);
    }, 1000);
  });
}

export function Page() {
  const test = createQuery(
    () => ['test'],
    () => getQuery(),
  );

  return (
    <div class="min-h-screen flex-(~ col) gap-2 items-center justify-center">
      <h1 class="text-4xl h-12">Hello from Home!</h1>
      <a href="/about" class="underline text-blue-600 text-lg">Move to about</a>
      {JSON.stringify(test.data)}
    </div>
  );
}
