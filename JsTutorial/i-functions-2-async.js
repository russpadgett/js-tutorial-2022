export default function main() {
  //ASYNC FUNCTIONS
  function randomlyResolveOrReject() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, Math.floor(Math.random() * 3));
      setTimeout(() => {
        reject('rejected');
      }, Math.floor(Math.random() * 1));
    });
  }
  async function asyncCall() {
    try {
      const result = await randomlyResolveOrReject();
      console.log(result);
    } catch (e) {
      console.log(e);
      asyncCall();
    }
  }
  asyncCall();

}


