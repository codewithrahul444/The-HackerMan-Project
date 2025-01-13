let pera1 = document.querySelector("#pera1");
let pera2 = document.querySelector("#pera2");
let pera3 = document.querySelector("#pera3");
let pera4 = document.querySelector("#pera4");
let pera5 = document.querySelector("#pera5");
let pera6 = document.querySelector("#pera6");
let input = document.querySelector("#input");
let hack = document.querySelector("#hack");
let date = new Date();
let button = document.querySelector("#button").addEventListener("click", () => {
  if (input.value !== '') {
    let p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        pera1.innerText = `Hack Program Started....`;
        resolve();
      }, 2000);
    }).then(() => {
      let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          pera2.innerText = `Finding ${input.value}'s Account....`;
          resolve();
        }, 2000);
      }).then(() => {
        let p3 = new Promise((resolve, reject) => {
          setTimeout(() => {
            pera3.innerText = `USERNAME FOUND @${input.value.toLowerCase().trim()}_${random}`;
            resolve();
          }, 2000);
        }).then(() => {
          let p4 = new Promise((resolve, reject) => {
            setTimeout(() => {
              pera4.innerText = `Establishing Connections...`;
              resolve();
            }, 500);
          }).then(() => {
            let p5 = new Promise((resolve, reject) => {
              setTimeout(() => {
                pera4.innerText = `accessing Mainframe...`;
                resolve();
              }, 500);
            }).then(() => {
              let p6 = new Promise((resolve, reject) => {
                setTimeout(() => {
                  pera4.innerText = `Bypassing Security Protocols...`;
                  resolve();
                }, 500);
              }).then(() => {
                let p7 = new Promise((resolve, reject) => {
                  setTimeout(() => {
                    pera5.innerText = `TimeStamp: ${date}`;
                    resolve();
                  }, 500);
                }).then(() => {
                  let p8 = new Promise((resolve, reject) => {
                    setTimeout(() => {
                      pera6.innerText = `OK. ID And Password Has Been Successfully Hacked. Check Your Email.`;
                      resolve();
                    }, 2000);
                  });
                });
              });
            });
          });
        });
      });
    });
  } else {
    pera1.innerText = `Please Insert A Name`
    pera2.innerText = '';
    pera3.innerText = '';
    pera4.innerText = '';
    pera5.innerText = '';
    pera6.innerText = '';
  }
});



let a = 1000;
let b = 9999;

let random = Math.round(a + (b - a) * Math.random());
console.log(otp);