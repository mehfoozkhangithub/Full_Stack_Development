const myFuncPromise2 = (path) => {
  // inside this promis will create
  return new Promise((res, rej) => {
    const script = document.createElement('script');

    script.src = path;
    document.head.append(script);

    // setTimeout(() => {
    //   Test();
    // }, 3000);

    script.onload = function () {
      res('data has been loaded ✅');
    };

    script.onerror = function () {
      rej('data lost ❌');
    };
  });
};

let value = myFuncPromise2('./Test.js');

// value
//   .then((res) => {
//     console.log(res);
//     Test();
//   })
//   .catch((err) => console.log(err));

async function dataHandle(a) {
  try {
    const data = await value;
    Test();
    console.log(data);
    console.log('🚀 ~ a:', a);
  } catch (err) {
    console.log('🚀 ~ err:', err);
  }
}

dataHandle('mehfooz');
