/* const myFuncPromise = (paths) => {
  const script = document.createElement('script');

  script.src = paths;

  document.head.append(script);

  setTimeout(() => {
    Test();
  }, 100);
};

myFuncPromise('./Test.js'); */

const myFuncPromise = (paths) => {
  return new Promise((res, rej) => {
    const script = document.createElement('script');

    script.src = paths;

    document.head.append(script);

    script.onload = function () {
      res('this is loaded ✅');
    };
    script.onerror = function () {
      rej('this is not loaded ❌');
    };
  });
};

/* myFuncPromise('./Test.js')
  .then((res) => {
    console.log(res);
    Test();
    })
    .catch((err) => console.log(err)); */

async function handleAsync() {
  try {
    let res = await myFuncPromise('./Test.j');
    console.log('🚀 ~ res:', res);
    Test();
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}

handleAsync();
