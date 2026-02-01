// dom se create script-tag -> src -> arrtibutes -> path

/* function PromiseExm(path) {
  const scripts = document.createElement('script');

  scripts.src = path;

  document.head.append(scripts);

  setTimeout(() => {
    callName();
  }, 100);
}

PromiseExm('./js/test.js'); */

// # code pattern 2

/* function PromiseExm(path) {
  return new Promise((res, rej) => {
    const scripts = document.createElement('script');

    scripts.src = path;

    document.head.append(scripts);

    scripts.onload = function () {
      res('data has been send off..');
    };

    scripts.onerror = function () {
      rej('not loaded something went wrong!!!!');
    };
  });
}
PromiseExm('./js/test.j')
  .then((data) => {
    console.log('data', data);
    callName();
  })
  .catch((err) => console.log('err', err))
  .finally(() => console.log('done')); */

// & code 3 with  async await

function PromiseExm(path) {
  return new Promise((res, rej) => {
    const scripts = document.createElement('script');

    scripts.src = path;

    document.head.append(scripts);

    scripts.onload = function () {
      res('data has been send off..');
    };

    scripts.onerror = function () {
      rej('not loaded something went wrong!!!!');
    };
  });
}

const handleAsync = async () => {
  try {
    const res = await PromiseExm('./js/test.js');
    console.log('🚀 ~ res:', res);
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};

handleAsync();
